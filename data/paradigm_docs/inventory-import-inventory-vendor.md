# Inventory Import: Inventory Vendor

Source: https://docs.goparagon.com/kb/inventory-import-inventory-vendor/

---

Inventory Import: Inventory Vendor – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Inventory Import: Inventory Vendor
Inventory Import: Inventory Vendor
This FAQ will go over importing inventory vendor data in Paradigm. More information on inventory import & export can be found here:
Inventory Import & Export
Importing New Inventory Vendor Data
When importing new inventory vendor data, be sure to include the following columns: product ID (strProductID), vendor ID (strVendorID), unit of measure (strUnitMeasure), vendor site (strSiteName), and vendor number (strVendorNumber).
When importing select the “Add new inventory vendor records only.” to only add new records, or select “Update existing and add new inventory vendor records.” to update existing and add new records.
Be sure to not include a cntID column when adding new data. Including a cntID will update the existing record that has that ID, more information on that in the next section.
Updating Existing Inventory Vendor Data
The easiest way to set up an import sheet is to first export the product IDs you want to make changes to. Be sure to include the cntID and product ID column.
Then make the desired changes in the sheet and then import it back into Paradigm. Be sure to choose the “Update existing inventory vendor records only.” option when importing.
Example
A common use case for this is updating costs for each vendor.
First export the cntID, product ID, vendor ID, and cost columns.
Change the cost then import it back into Paradigm.
