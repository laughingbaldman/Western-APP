/**
 * File: Western Intel/app/src/chat-server.js
 * Purpose: Core project script/module.
 * What It Does: Implements workflow logic used by Western Intel.
 * Why It Exists: Keeps this behavior isolated and maintainable for technicians.
 * Connected To: http, socket.io
 * Notes: Auto-added explainability header; update with business-specific details as needed.
 */

const http = require('http');
const { Server } = require('socket.io');

let httpServer = null;
let io = null;
let activePort = null;
let startPromise = null;
let stopPromise = null;
let chatHistory = [];
const socketUsers = new Map();
const MAX_HISTORY = 200;

function sanitizeMessage(payload) {
  const username = String(payload?.username || 'Team Member').trim().slice(0, 60);
  const message = String(payload?.message || '').trim().slice(0, 5000);
  if (!message) return null;

  return {
    username: username || 'Team Member',
    message,
    timestamp: payload?.timestamp || new Date().toISOString()
  };
}

function normalizeChatMessagePayload(payload, fallbackUsername) {
  if (typeof payload === 'string') {
    return sanitizeMessage({ username: fallbackUsername, message: payload });
  }

  if (payload && typeof payload === 'object') {
    return sanitizeMessage({
      username: payload.username || fallbackUsername,
      message: payload.message,
      timestamp: payload.timestamp
    });
  }

  return null;
}

function emitUserList() {
  if (!io) return;
  const users = Array.from(socketUsers.values()).map((entry) => ({
    username: entry.username,
    onLunch: !!entry.onLunch
  }));
  io.emit('user-list', users);
}

function bindSocketHandlers(serverIo) {
  serverIo.on('connection', (socket) => {
    socketUsers.set(socket.id, {
      username: `Team Member ${String(socket.id || '').slice(0, 4)}`,
      onLunch: false
    });

    socket.emit('chat-history', chatHistory);
    emitUserList();

    socket.on('register', (username) => {
      const safeName = String(username || '').trim().slice(0, 60);
      const record = socketUsers.get(socket.id) || { onLunch: false };
      record.username = safeName || record.username || 'Team Member';
      socketUsers.set(socket.id, record);

      socket.emit('registered', { username: record.username });
      serverIo.emit('system-message', `${record.username} joined team chat.`);
      emitUserList();
    });

    socket.on('change-name', (nextName) => {
      const safeName = String(nextName || '').trim().slice(0, 60);
      if (!safeName) return;

      const record = socketUsers.get(socket.id) || { onLunch: false };
      const previous = record.username || 'Team Member';
      record.username = safeName;
      socketUsers.set(socket.id, record);

      socket.emit('name-changed', { username: record.username });
      serverIo.emit('system-message', `${previous} is now ${record.username}.`);
      emitUserList();
    });

    socket.on('toggle-lunch', () => {
      const record = socketUsers.get(socket.id);
      if (!record) return;

      record.onLunch = !record.onLunch;
      socketUsers.set(socket.id, record);
      serverIo.emit('system-message', record.onLunch
        ? `${record.username} is now on lunch.`
        : `${record.username} is back from lunch.`);
      emitUserList();
    });

    socket.on('request-history', () => {
      socket.emit('chat-history', chatHistory);
    });

    socket.on('chat-message', (payload) => {
      const sender = socketUsers.get(socket.id);
      const fallbackUsername = sender?.username || 'Team Member';
      const normalized = normalizeChatMessagePayload(payload, fallbackUsername);
      if (!normalized) return;

      chatHistory.push(normalized);
      if (chatHistory.length > MAX_HISTORY) {
        chatHistory = chatHistory.slice(chatHistory.length - MAX_HISTORY);
      }
      serverIo.emit('chat-message', normalized);
    });

    socket.on('clear-chat-history', () => {
      chatHistory = [];
      serverIo.emit('chat-history-cleared');
    });

    socket.on('disconnect', () => {
      const record = socketUsers.get(socket.id);
      socketUsers.delete(socket.id);
      if (record?.username) {
        serverIo.emit('system-message', `${record.username} left team chat.`);
      }
      emitUserList();
    });
  });
}

async function startChatServer(port = 3000) {
  if (stopPromise) {
    await stopPromise;
  }

  if (httpServer) {
    if (activePort === port) {
      return { started: true, port: activePort, reused: true };
    }
    await stopChatServer();
  }

  if (startPromise) {
    return startPromise;
  }

  const nextHttpServer = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Western Intelligence team chat server is running.');
  });

  const nextIo = new Server(nextHttpServer, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST']
    }
  });

  bindSocketHandlers(nextIo);

  startPromise = new Promise((resolve, reject) => {
    const handleError = (error) => {
      nextHttpServer.off('error', handleError);
      nextIo.removeAllListeners();
      nextIo.close();
      startPromise = null;
      reject(error);
    };

    nextHttpServer.once('error', handleError);
    nextHttpServer.listen(port, '0.0.0.0', () => {
      nextHttpServer.off('error', handleError);
      httpServer = nextHttpServer;
      io = nextIo;
      activePort = nextHttpServer.address()?.port || port;
      startPromise = null;
      resolve({ started: true, port: activePort, reused: false });
    });
  });

  return startPromise;
}

async function stopChatServer() {
  if (startPromise) {
    try {
      await startPromise;
    } catch {
      startPromise = null;
    }
  }

  if (stopPromise) {
    return stopPromise;
  }

  if (!httpServer && !io) {
    activePort = null;
    socketUsers.clear();
    return { stopped: true };
  }

  const serverToClose = httpServer;
  const ioToClose = io;
  httpServer = null;
  io = null;
  activePort = null;
  socketUsers.clear();

  stopPromise = new Promise((resolve) => {
    const finish = () => {
      stopPromise = null;
      resolve({ stopped: true });
    };

    if (ioToClose) {
      ioToClose.removeAllListeners();
      ioToClose.close(() => {
        finish();
      });
      return;
    }

    if (!serverToClose || !serverToClose.listening) {
      finish();
      return;
    }

    serverToClose.close(() => {
      finish();
    });
  });

  return stopPromise;
}

function clearChatHistory() {
  chatHistory = [];
  if (io) {
    io.emit('chat-history-cleared');
  }
}

module.exports = {
  startChatServer,
  stopChatServer,
  clearChatHistory
};
