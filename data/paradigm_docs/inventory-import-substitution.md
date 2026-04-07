# Inventory Import: Substitution

Source: https://docs.goparagon.com/kb/inventory-import-substitution/

---

Inventory Import: Substitution – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Inventory Import: Substitution
Inventory Import: Substitution
This FAQ will go over importing substitution data in Paradigm. More information on inventory import & export can be found here:
Inventory Import & Export
This table contains the substitute data found in the alternative tab on an item. More information on that can be found here:
Inventory Component Substitution
Importing New substitution Data
When importing new substitution, be sure to include the following columns: product ID (strProductID), substitute (strSubstitute), quantity (decQuantity), unit measure (strUnitMeasure).
When importing select the “Add new substitutes only.” to only add new records, or select “Update existing and add new substitutes.” to update existing and add new records.
Be sure to not include a cntID column when adding new data. Including a cntID will update the existing record that has that ID, more information on that in the next section.
Updating Existing substitution Data
The easiest way to set up an import sheet is to first export the product IDs you want to make changes to. Be sure to include the cntID and product ID column.
Then make the desired changes in the sheet and then import it back into Paradigm. Be sure to choose the “Update existing substitutes only.” option when importing.
Example
A common use case for this is updating substitutes.
First export the cntID, product ID, and substitute.
Change the substitute in the sheet and then import it into Paradigm.
