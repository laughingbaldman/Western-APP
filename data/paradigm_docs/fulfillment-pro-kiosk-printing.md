# Fulfillment Pro: Kiosk Printing

Source: https://docs.goparagon.com/kb/fulfillment-pro-kiosk-printing/

---

Fulfillment Pro: Kiosk Printing – Paradigm ERP by Paragon – Documentation
Home
Fulfillment Pro
Fulfillment Pro: Kiosk Printing
Fulfillment Pro: Kiosk Printing
Using Kiosk Printing in Google Chrome allows the print preview popup to be bypassed by utilizing the “–kiosk-printing” startup command.
To start, create a shortcut to Google Chrome and name it “Fulfillment Pro – Print“.
Right click the short cut and click “Properties”.
Then change the “Target“ to:
“C:\Program Files\Google\Chrome\Application\chrome.exe” –kiosk-printing “
http://[WebServerIP]/Fulfillment/OrderFulfillment.aspx
“
The “Start in“ value can remain as “C:\Program Files\Google\Chrome\Application”.
