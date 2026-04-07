# Inventory Import & Export

Source: https://docs.goparagon.com/kb/inventory-import-export/

---

Inventory Import & Export – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Inventory Import & Export
Inventory Import & Export
This FAQ will go over how to use the inventory import and export features in Paradigm. Note that it is an administrative process that can cause expansive issues quickly with improper usage, so be very careful when using this feature.
The “Inventory Bulk Import/Export” permission is required for this.
Export
To export inventory items, to go the Inventory list and filter it down to the items to be exported.
Then click the “Export Filtered” button at the bottom.
Choose the type of data to be exported. Each of these tables contain different types of inventory data; more information on each one can be found here:
Inventory By Warehouse
,
Assembly
,
Unit Measure
,
Price Levels
,
Special Prices
,
Production
,
Production Default
,
Alias
,
Substitution
,
Inventory Vendor
,
Inventory Attributes
,
Inventory Groups
,
Item Images
.
Then select the fields to be exported. If only the selected fields are showing, uncheck the “Only Show Selected” box.
To save the selected fields as defaults, click the “Save as Defaults” button. If this is done, the next time items are exported the default fields will already be selected.
After that choose the export format, name the file, and select where it should be exported to.
Import
To import data into Paradigm, correct column names must be used; a list of those can be found here:
Column Names For Inventory
Column names should be list out in the top row with the data in the rows following it. Columns that have blank headers will be skipped. If any product IDs on the sheet match product IDs in Paradigm, the data from the sheet will be used to update the information in Paradigm.
Updates can also be made based on just the vendor number (strVendorNumber), as long as the vendor ID (strVendorID) is included in the import as well. If two product IDs have the same vendor number, the imported changes would be made to both items.
Importing New Items
When importing new items, be sure to set up a template item in Paradigm. Information from the template item will be used if it is not specified in the import file.
After the file is ready and the template item is set up, go to System > Inventory Import or select the “Import” button from the inventory list.
Then choose the data type being imported.
After that choose the file, select “Add new Inventory Items only” or “Update Existing Inventory and add New Items.” if items are being updated and added, and select the template item.
Update Existing Items
When updating data on existing items, only include the columns that are getting changed.
After the file is ready, go to System > Inventory Import or select the “Import” button from the inventory list.
Then choose the data type being imported.
After that, choose the file, select “Update existing Inventory only”.
Errors
If any errors occur during the import, an excel file will be created with error messages for the items that didn’t imported correctly.
