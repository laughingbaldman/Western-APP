# Import New Item Colors

Source: https://docs.goparagon.com/kb/import-new-item-colors/

---

Import New Item Colors – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Import New Item Colors
Import New Item Colors
This FAQ will go over how to add new item colors in Paradigm.
Color List
Follow this FAQ to add the new color to the color list in Paradigm:
Inventory Color List
New Items
Export Template Items
To add a new color, start by filtering the inventory list to an existing color that has the same gauge and grade as the new color. Information from the existing items will be used on the new items, unless new information is specified on the import sheet.
More information on importing and exporting in Paradigm can be found here:
Inventory Import & Export
If the coil code has been created already, be sure to exclude that from the export or remove it from the sheet after it has been exported. If the coil code has not been created, it can be left on the sheet and imported like the rest of the new color items.
After the list is filtered, click the “
Export Filtered
” button at the bottom of the list.
Choose Inventory and click “Next”.
The following fields are required:
strProductID,memDescription, and strColor
. Any other fields that need to be adjusted can be selected as well.
After that select “.xlsx” as the export format and click “Finish”.
Item Import Sheet Changes
The first step to prepare the sheet for import, is to create a new column called “TEMPLATEID” and copy the exported IDs into that column. Paradigm will use these columns as a “Template” item when importing.
Next, highlight the “strProductID” column and use the
Find and Replace
feature in Excel (Ctrl + H).
In the “Find what:” field, enter the existing abbreviation.
In the “Replace with:” field, enter the new color abbreviation and click “Replace All”.
In the example below the black abbreviation (BK) was replaced by the new color, ash gray (AG).
Be sure that the new abbreviation is not already be used in Paradigm, and that the new IDs do not match with any product IDs in Paradigm.
After that, highlight the “memDescription” and “strColor” columns. Then use the
Find and Replace
feature again to replace the existing color (Black) with the new color (Ash Gray).
The final step is to make any other needed adjustments (sales price, cost, etc.), and then add a column called “ysnDiscontinued” and set it to “1” for every row.
This sets the items as
discontinued
and will prevent the items from being used before the set up is completed.
Import Into Paradigm
Once the changes are complete, save the sheet and close it. Then go to Inventory > Inventory Settings > Inventory Import
Choose Inventory and click “Next”.
Then select the file and choose “Add new Inventory Items only”.
The template product can be set to any product ID, as the template item will be used from the “TEMPLATEID” column on the sheet.
Set As Non-Discontinued
If the items have assembly components that need to be updated, follow the next section and then complete this step.
Once the components are updated, the items can now be “
un-discontinued
“.
To do this, use the list of new product IDs in a sheet and add a column called “ysnDiscontinued” and set it to “0” for every row.
Then
import
that into Paradigm to complete the new color import.
Update The Assembly Components
If the items are manufactured, the component on the item will need to be changed since the imported items used the assembly information from the template items.
To do this, start by filtering the inventory list to the new color items.
Be sure to check the “Included Discontinued” checkbox.
After the list is filtered, click the “
Export Filtered
” button at the bottom of the list.
Choose “Assembly” and then click “Next.
The following fields are required:
cntID, strProductID, strComponent, memDescription
.
After that select “.xlsx” as the export format and click “Finish”.
Assembly Import Sheet Changes
Open the exported sheet highlight the “strComponent” column.
Then use the
Find and Replace
feature to change the color abbreviation to the correct component.
Then highlight the “memDescription” and use the
Find and Replace
feature to set it to the new color.
Once the changes are complete, save the sheet and close it. Then go to Inventory > Inventory Settings > Inventory Import
Choose “Assembly” and click “Next”.
Then select the file and choose “Update existing assemblies only”.
