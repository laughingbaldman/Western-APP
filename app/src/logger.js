/**
 * File: Western Intel/app/src/logger.js
 * Purpose: Structured logging framework for Western Intel application
 * What It Does: Provides centralized, leveled logging with file persistence and rotation
 * Why It Exists: Enable operational observability, debugging, and audit trails
 * Connected To: fs, path, os
 * 
 * Log Levels:
 * - DEBUG: Detailed diagnostic info (development only)
 * - INFO: General operational events (default)
 * - WARN: Warning conditions that should be investigated
 * - ERROR: Error events that allow continued operation
 * - CRITICAL: Severe errors requiring immediate attention
 * 
 * Log Destinations:
 * - Console: Always (stderr for WARN/ERROR/CRITICAL)
 * - File: Rotating daily logs with 7-day retention
 * 
 * Usage:
 *   const logger = require('./logger');
 *   logger.info('Operation succeeded', { userId: 123, duration: 45 });
 *   logger.error('Operation failed', { error: err.message, context: {...} });
 */

const fs = require('fs');
const path = require('path');
const os = require('os');
const { app } = require('electron');

// Log levels with numeric priorities
const LOG_LEVELS = {
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3,
  CRITICAL: 4
};

// Environment-based log level (default INFO in production, DEBUG in dev)
const IS_DEVELOPMENT = process.argv.includes('--development') || !app?.isPackaged;
const DEFAULT_LOG_LEVEL = IS_DEVELOPMENT ? LOG_LEVELS.DEBUG : LOG_LEVELS.INFO;

class Logger {
  constructor(options = {}) {
    this.level = options.level !== undefined ? options.level : DEFAULT_LOG_LEVEL;
    this.logDir = options.logDir || path.join(app?.getPath('userData') || '.', 'logs');
    this.retentionDays = options.retentionDays || 7;
    this.maxLogSizeMB = options.maxLogSizeMB || 50;
    this.consoleEnabled = options.consoleEnabled !== false;
    this.fileEnabled = options.fileEnabled !== false;

    // Ensure log directory exists
    if (this.fileEnabled) {
      try {
        fs.mkdirSync(this.logDir, { recursive: true });
      } catch (error) {
        console.error('[Logger] Failed to create log directory:', error.message);
        this.fileEnabled = false;
      }
    }

    // Current log file handle
    this.currentLogFile = null;
    this.currentLogDate = null;

    // Rotate old logs on startup
    this._rotateOldLogs();
  }

  /**
   * Log a DEBUG level message (verbose diagnostic info)
   */
  debug(message, context = {}) {
    this._log(LOG_LEVELS.DEBUG, message, context);
  }

  /**
   * Log an INFO level message (normal operational events)
   */
  info(message, context = {}) {
    this._log(LOG_LEVELS.INFO, message, context);
  }

  /**
   * Log a WARN level message (warning conditions)
   */
  warn(message, context = {}) {
    this._log(LOG_LEVELS.WARN, message, context);
  }

  /**
   * Log an ERROR level message (error events)
   */
  error(message, context = {}) {
    this._log(LOG_LEVELS.ERROR, message, context);
  }

  /**
   * Log a CRITICAL level message (severe errors)
   */
  critical(message, context = {}) {
    this._log(LOG_LEVELS.CRITICAL, message, context);
  }

  /**
   * Core logging method
   * @private
   */
  _log(level, message, context = {}) {
    // Skip if below configured level
    if (level < this.level) {
      return;
    }

    const timestamp = new Date().toISOString();
    const levelName = Object.keys(LOG_LEVELS).find(key => LOG_LEVELS[key] === level);

    const logEntry = {
      timestamp,
      level: levelName,
      message: String(message || ''),
      ...this._sanitizeContext(context),
      hostname: os.hostname(),
      pid: process.pid
    };

    // Console output
    if (this.consoleEnabled) {
      this._writeToConsole(level, logEntry);
    }

    // File output
    if (this.fileEnabled) {
      this._writeToFile(logEntry);
    }
  }

  /**
   * Sanitize context object for logging (remove sensitive data)
   * @private
   */
  _sanitizeContext(context) {
    if (!context || typeof context !== 'object') {
      return {};
    }

    const sanitized = { ...context };

    // Remove or redact sensitive fields
    const sensitiveKeys = [
      'password',
      'bindPassword',
      'clientKeyPassphrase',
      'token',
      'apiKey',
      'secret',
      'authorization'
    ];

    for (const key of sensitiveKeys) {
      if (key in sanitized) {
        sanitized[key] = '[REDACTED]';
      }
    }

    // Truncate very long strings
    for (const [key, value] of Object.entries(sanitized)) {
      if (typeof value === 'string' && value.length > 1000) {
        sanitized[key] = value.substring(0, 1000) + '... [TRUNCATED]';
      }
    }

    return sanitized;
  }

  /**
   * Write log entry to console
   * @private
   */
  _writeToConsole(level, logEntry) {
    const { timestamp, level: levelName, message, ...context } = logEntry;
    const contextStr = Object.keys(context).length > 2 ? ` ${JSON.stringify(context)}` : '';
    const logLine = `[${timestamp}] [${levelName}] ${message}${contextStr}`;

    // Use stderr for warnings and errors
    if (level >= LOG_LEVELS.WARN) {
      console.error(logLine);
    } else {
      console.log(logLine);
    }
  }

  /**
   * Write log entry to file
   * @private
   */
  _writeToFile(logEntry) {
    try {
      const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

      // Rotate to new file if date changed
      if (this.currentLogDate !== today) {
        this._openLogFile(today);
      }

      if (!this.currentLogFile) {
        return;
      }

      const logLine = JSON.stringify(logEntry) + '\n';
      fs.appendFileSync(this.currentLogFile, logLine, 'utf8');

      // Check file size and rotate if needed
      this._checkFileSizeAndRotate();

    } catch (error) {
      // Fail silently to avoid infinite error loops
      console.error('[Logger] Failed to write to log file:', error.message);
    }
  }

  /**
   * Open a new log file for today
   * @private
   */
  _openLogFile(date) {
    this.currentLogDate = date;
    this.currentLogFile = path.join(this.logDir, `app-${date}.log`);
  }

  /**
   * Check log file size and rotate if over limit
   * @private
   */
  _checkFileSizeAndRotate() {
    if (!this.currentLogFile) {
      return;
    }

    try {
      const stats = fs.statSync(this.currentLogFile);
      const sizeMB = stats.size / (1024 * 1024);

      if (sizeMB > this.maxLogSizeMB) {
        // Rename to timestamped backup
        const timestamp = new Date().toISOString().replace(/:/g, '-').split('.')[0];
        const backupName = this.currentLogFile.replace('.log', `-${timestamp}.log`);
        fs.renameSync(this.currentLogFile, backupName);

        // Open fresh file
        this._openLogFile(this.currentLogDate);
      }
    } catch (error) {
      // Ignore size check errors
    }
  }

  /**
   * Delete log files older than retention period
   * @private
   */
  _rotateOldLogs() {
    try {
      const files = fs.readdirSync(this.logDir);
      const now = Date.now();
      const retentionMs = this.retentionDays * 24 * 60 * 60 * 1000;

      for (const file of files) {
        if (!file.endsWith('.log')) continue;

        const filePath = path.join(this.logDir, file);
        const stats = fs.statSync(filePath);
        const age = now - stats.mtimeMs;

        if (age > retentionMs) {
          fs.unlinkSync(filePath);
          console.log(`[Logger] Deleted old log file: ${file}`);
        }
      }
    } catch (error) {
      console.error('[Logger] Failed to rotate old logs:', error.message);
    }
  }

  /**
   * Get current log level name
   */
  getLevel() {
    return Object.keys(LOG_LEVELS).find(key => LOG_LEVELS[key] === this.level);
  }

  /**
   * Set log level
   */
  setLevel(levelName) {
    const level = LOG_LEVELS[levelName.toUpperCase()];
    if (level !== undefined) {
      this.level = level;
    } else {
      throw new Error(`Invalid log level: ${levelName}`);
    }
  }

  /**
   * Flush and close logger (call on app shutdown)
   */
  close() {
    // Node.js automatically closes file handles on exit
    this.currentLogFile = null;
    this.currentLogDate = null;
  }
}

// Singleton instance
let loggerInstance = null;

/**
 * Get or create the logger instance
 */
function getLogger(options) {
  if (!loggerInstance) {
    loggerInstance = new Logger(options);
  }
  return loggerInstance;
}

// Export singleton methods
module.exports = getLogger();
module.exports.Logger = Logger;
module.exports.LOG_LEVELS = LOG_LEVELS;
module.exports.getLogger = getLogger;
