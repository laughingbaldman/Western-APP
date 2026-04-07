# Inventory Import: Inventory Attributes

Source: https://docs.goparagon.com/kb/inventory-import-inventory-attributes/

---

Inventory Import: Inventory Attributes – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Inventory Import: Inventory Attributes
Inventory Import: Inventory Attributes
This FAQ will go over importing inventory attribute data in Paradigm. More information on inventory import & export can be found here:
Inventory Import & Export
Importing New Inventory Attribute Data
When importing new inventory attribute data, be sure to include the following columns: attribute name (strName), product ID (strLink), and the attribute value (strValue).
When importing select the “Add new attribute records only.” to only add new records, or select “Update existing and add new attribute records.” to update existing and add new records.
Be sure to not include a cntID column when adding new data. Including a cntID will update the existing record that has that ID, more information on that in the next section.
Updating Existing Attribute Data
The easiest way to set up an import sheet is to first export the product IDs you want to make changes to. Be sure to include the cntID column.
Then make the desired changes in the sheet and then import it back into Paradigm. Be sure to choose the “Update existing attribute records only.” option when importing.
Example
A common use case for this is updating attribute values for product ID.
First export the cntID, attribute name, product ID (strLink), and the attribute value columns.
Change the value then import it back into Paradigm.
