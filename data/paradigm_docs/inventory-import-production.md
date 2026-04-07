# Inventory Import: Production

Source: https://docs.goparagon.com/kb/inventory-import-production/

---

Inventory Import: Production – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Inventory Import: Production
Inventory Import: Production
This FAQ will go over importing production data in Paradigm. More information on inventory import & export can be found here:
Inventory Import & Export
This table contains the data found in the production tab on an item.
Importing New Production Data
When importing new production, be sure to include the following columns: product ID (strProductID), sequence (intSequence), linked component sort (lngLinkComponentSort), and machine ID (intMachineID).
When importing select the “Add new production steps only.” to only add new records, or select “Update existing and add new production steps.” to update existing and add new records.
Be sure to not include a cntID column when adding new data. Including a cntID will update the existing record that has that ID, more information on that in the next section.
Updating Existing Production Data
The easiest way to set up an import sheet is to first export the product IDs you want to make changes to. Be sure to include the cntID and product ID column.
Then make the desired changes in the sheet and then import it back into Paradigm. Be sure to choose the “Update existing production steps only.” option when importing.
Example
A common use case for this is updating machine IDs.
First export the cntID, product ID, sequence, and machine ID.
Change the machine ID in the sheet and then import it into Paradigm.
