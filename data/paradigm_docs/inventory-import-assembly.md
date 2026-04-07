# Inventory Import: Assembly

Source: https://docs.goparagon.com/kb/inventory-import-assembly/

---

Inventory Import: Assembly – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Inventory Import: Assembly
Inventory Import: Assembly
This FAQ will go over importing assembly data in Paradigm. More information on inventory import & export can be found here:
Inventory Import & Export
This table contains the data found in the assembly tab on an item.
Importing New Assembly Data
When importing new assembly data, be sure to include the following columns: product ID (strProductID), component (strComponent), description (memDescription), pieces (decPcs), unit measure (strUnitMeasure), feet (decLinearAmount1), and inches (decLinearAmount2) columns.
When importing select the “Add to existing Assemblies only.” to only add new records, or select “Update or add to existing Assemblies.” to update existing and add new records.
Be sure to not include a cntID column when adding new data. Including a cntID will update the existing record that has that ID, more information on that in the next section.
Updating Existing Assembly Data
The easiest way to set up an import sheet is to first export the product IDs you want to make changes to. Be sure to include the cntID and product ID column.
Then make the desired changes in the sheet and then import it back into Paradigm. Be sure to choose the “Update existing assemblies only.” option when importing.
Example
A common use case for this is updating components.
First export the cntID, product ID, component, and description columns.
Change the component ID and update the description in the sheet and then import it into Paradigm.
