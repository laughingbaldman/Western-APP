# Inventory Import: Unit Measure

Source: https://docs.goparagon.com/kb/inventory-import-unit-measure/

---

Inventory Import: Unit Measure – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Inventory Import: Unit Measure
Inventory Import: Unit Measure
This FAQ will go over importing unit measure data in Paradigm. More information on inventory import & export can be found here:
Inventory Import & Export
This table contains the data found on the inventory unit measure form on an item.
Importing New Measure Data
When importing new unit measure data, be sure to include the following columns: product ID (strProductID), unit measure (strUnitMeasure), unit measure quantity (decUnitMeasureQuantity), sort (intSort), and whether or not it is a linear measurement (ysnLinear).
When importing select the “Add new units of measure only.” to only add new records, or select “Update existing and add new units of measure.” to update existing and add new records.
Be sure to not include a cntID column when adding new data. Including a cntID will update the existing record that has that ID, more information on that in the next section.
Updating Existing Unit Measure Data
The easiest way to set up an import sheet is to first export the product IDs you want to make changes to. Be sure to include the cntID and product ID column.
Then make the desired changes in the sheet and then import it back into Paradigm. Be sure to choose the “Update existing units of measure only.” option when importing.
Example
A common use case for this is updating unit measure quantities.
First export the cntID, product ID, unit measure, and unit measure quantities.
Change the unit measure quantity in the sheet and then import it into Paradigm.
