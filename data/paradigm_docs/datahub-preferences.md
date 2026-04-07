# DataHub: Preferences

Source: https://docs.goparagon.com/kb/datahub-preferences/

---

DataHub: Preferences – Paradigm ERP by Paragon – Documentation
Home
Add-Ons and Integrations
DataHub: Preferences
DataHub: Preferences
This FAQ will go over the
DataHub
preference settings in Paradigm.
Main
API URL & API Key –
This is provided by Paragon Support.
Transactions
Import Vendor’s PO Number to Reference Field Instead of Vendor Order Number –
This will cause the vendor’s PO number to be displayed in the “Reference” field, instead of “Vendor Order #”.
Preferred PO Number Mode –
Select the preferred PO number to be filled in.
The options are: PO Number (Default), Job ID, PO Number & Reference
Price Changes/Item updates
Compare/Update Cost2 instead of Cost –
This will use Cost2 to compare and update, instead of Cost.
Import Description to Sales Description in addition to Purchase Description –
Vendor Descriptions are always compared against the inventory item’s Purchase Description field.
If this is enabled, the Vendor Description value will be applied to the Sales Description field in addition to the Purchase Description field. This setting will not change how the comparison is done – if the Vendor Description is the same as the current inventory item’s Purchase Description, no changes will be applied to either Purchase or Sales Description even if Sales Description doesn’t match Vendor Description.
Paradigm Server CPU Usage
– The max number of processors (“Logical processors” in Task Manager) Paradigm Server can utilize when loading Item Updates.
If Paradigm Server gets overloaded when Item Updates are running, lower this value. Lower allowed processor usage will make Item Updates take longer to load. The default value is calculated based on the number of the available logical processors – 90% of available, rounded up, but never more than one less than the total available.
If the machine only has one processor, the default is 1.
Leave the value blank to use this default calculation.
