# Inventory Import: Production Default

Source: https://docs.goparagon.com/kb/inventory-import-production-default/

---

Inventory Import: Production Default – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Inventory Import: Production Default
Inventory Import: Production Default
This FAQ will go over importing production default data in Paradigm. More information on inventory import & export can be found here:
Inventory Import & Export
This table contains the production default data found in the production tab on an item.
Importing New Production Data
When importing new production, be sure to include the following columns: product ID (strProductID), warehouse ID (strWarehouseID), manufacture default (ysnManufactureDefault).
When importing select the “Add new production defaults only.” to only add new records, or select “Update existing and add new production defaults.” to update existing and add new records.
Be sure to not include a cntID column when adding new data. Including a cntID will update the existing record that has that ID, more information on that in the next section.
Updating Existing Production Data
The easiest way to set up an import sheet is to first export the product IDs you want to make changes to. Be sure to include the cntID, product ID, warehouse ID, and manufacture default columns.
The easiest way to set up an import sheet is to first export the product IDs you want to make changes to. Be sure to include the cntID, product ID, warehouse ID, and manufacture default columns.
Example
A common use case for this is updating production defaults.
First export the cntID, product ID, warehouse ID, and manufacture defaults.
Change the manufacture default in the sheet and then import it into Paradigm.
