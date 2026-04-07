# Inventory Import: Alias

Source: https://docs.goparagon.com/kb/inventory-import-alias/

---

Inventory Import: Alias – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Inventory Import: Alias
Inventory Import: Alias
This FAQ will go over importing alias data in Paradigm. More information on inventory import & export can be found here:
Inventory Import & Export
.
This table contains the alias data found in the alternative tab on an item. More information on that can be found here:
Set Up UPC Codes And Aliases
Importing New Alias Data
When importing new alias data, be sure to include the following columns: product ID (strProductID), alias ID (strProductID2).
When importing select the “Add new aliases only.” to only add new records, or select “Update existing and add new aliases.” to update existing and add new records.
Be sure to not include a cntID column when adding new data. Including a cntID will update the existing record that has that ID, more information on that in the next section.
Updating Existing Alias Data
The easiest way to set up an import sheet is to first export the product IDs you want to make changes to. Be sure to include the cntID and product ID column.
Then make the desired changes in the sheet and then import it back into Paradigm. Be sure to choose the “Update existing aliases only.” option when importing.
Example
A common use case for this is updating aliases.
First export cntID, product ID, alias (strProductID2), and unit measure.
Change the alias in the sheet and then import it into Paradigm.
