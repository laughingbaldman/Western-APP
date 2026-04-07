# DataHub: Pending Orders

Source: https://docs.goparagon.com/kb/datahub-pending-orders/

---

DataHub: Pending Orders – Paradigm ERP by Paragon – Documentation
Home
Add-Ons and Integrations
DataHub: Pending Orders
DataHub: Pending Orders
This FAQ will go over the “Pending Orders” form in
DataHub
. This is used to import a customer’s order that was transferred using
DataHub
.
Pending Orders
To start, go to DataHub > Pending Orders
Choose a filter and a date range. The “Pending Transactions” filter shows only transactions that have come in and haven’t been imported yet. Once imported, it will move to the “Recently Closed” list. If an order needs to be “reimported”, it can be imported again from the “Recently Closed List”.
Click the dropdown on the purchase order number to preview the items on an order and to see the products that are linked to those items.
Select the orders that are to be imported and click “Import As Order”. “Import All as One Order” can be used if the orders selected all have the same customer ID. This will import all the purchase orders together into one sales order.
If an item has the
attribute
“DataHubAlwaysImportDescription”, it will always use the DataHub description. One exception is that the attribute will be ignored on import if the custom options that were sent imported without error.
Unmapped Items
When importing an order and items on the order are not mapped to an item in Paradigm, the inventory item mapper will appear.
Map the items by selecting them from the drop down. If “Auto-fill Related Products” is checked when entering product mappings, all entries found with the same source product key will be auto-filled. To import the item as a miscellaneous product, check the box on the line. Once they are all mapped, click “Import Transactions”.
Mappings set here are never saved, if the Item Mapper is being shown on Pending Orders frequently, use the plus button in there to create those items, or go to their product and create an inventory
alias
. Alternatively, use the “ignore” to import as a “Misc” item.
Importing Custom Options
For
custom options
to be imported, the custom option name and value must exist to be imported and be identical.
If there is text surrounded by brackets in the custom option description, it will match based on that instead of the custom option name.
Example:
Company A’s custom option is named “NOTCH”, but Company B uses “NOTCHED”. Company A can include the text “[NOTCHED]” in the custom option description to match these up.
If the custom option name matches the
machine option
name, it will select that
machine option
. If the values “False”, “0”, or “No” are imported it will disable the machine option, otherwise it will be enabled if a match is found.
Example:
Company A has the manufacturing options listed for an item in a custom option set. Company B has those options as well, but they are listed as machine options.
If the custom option imported matches the machine option name, it will select that machine option.
Or if custom option imported has text surrounded by brackets in the custom option description that matches the machine option name, it will select that machine option as well.
Company A
has the following custom options set up:
Company B
has the following machine options set up:
If Company A selects the “Single Striations” option, it will be imported to Company B’s side and will select their “SINGLE STRI.” machine option.
Failed Custom Option Imports
If the custom option to be imported is “CUPOLA”, but the custom option on the receiving company is saved as “CUP”, the option will fail to import and an error message like below will be shown.
If the custom options match, but the selected value is not available, that will be shown in the error message as well.
For example: If Company A selected “Blue”, but Company B only has “Yellow”, “Red”, and “Green” option.
If a
custom option
fails to import, a message (example below) will be shown after the import and the information will be added to the Detail Notes field on the line:
One or more errors occurred when importing model options: DataHub options for line:…..
Imported Orders
Once the purchase orders are imported, the sales orders created for them will open in Paradigm. The sales order numbers will replace the PO numbers for the customer.
To navigate between each one, use the record arrows.
If “Import All as One Order” was used, the sales order will open and the different purchase orders will be grouped with bundles.
