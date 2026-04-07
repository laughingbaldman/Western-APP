# DataHub: Pending Purchases

Source: https://docs.goparagon.com/kb/datahub-pending-purchases/

---

DataHub: Pending Purchases – Paradigm ERP by Paragon – Documentation
Home
Add-Ons and Integrations
DataHub: Pending Purchases
DataHub: Pending Purchases
This FAQ will go over outgoing and incoming purchase orders in
DataHub
.
Pending Purchases
To start, go to DataHub > Pending Purchases. This is used to import a purchase order or vendor invoice that was transferred using DataHub.
Choose a filter and a date range. The “Pending Transactions” filter shows only transactions that have come in and haven’t been imported yet. Once imported, it will move to the “Recently Closed” list. If an order needs to be “reimported”, it can be imported again from the “Recently Closed List”.
If “Auto-set Pcs Received” is checked, the pieces received will be filled in with the number of pieces on the imported invoice.
Click the dropdown on the order or invoice number to preview the items on an order and to see the products that are linked to those items.
Select the invoices or orders that are to be imported and click the import option. Once the transactions are imported, the PO or PI created for them will open in Paradigm.
Import As PO –
Creates a purchase order
Import as PI –
Creates a purchase invoice.
Find POs and Import as PI –
Finds the purchase orders and imports as a purchase invoice.
When attempting to match, this will fall back on the original order number for the invoice if a match cannot be made on the invoice number.
Map Inventory Items
When importing an invoice and items on the invoice are not mapped to an item in Paradigm, the inventory item mapper will appear.
Map the items by selecting them from the drop down. If “Auto-fill Related Products” is checked when entering product mappings, all entries found with the same source product key will be auto-filled. To import the item as a miscellaneous product, check the box on the line. Once they are all mapped, click “Import Transactions”.
Mappings are saved as vendor links (Inventory >
Alternate Vendors
). But if the in-line checkbox below is checked, it won’t be saved. That is the “ignore” checkbox, to import that line as the Misc item, instead of providing a product mapping.
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
Company A has the following custom options set up:
Company B has the following machine options set up:
If Company A selects the “Single Striations” option, it will be imported to Company B’s side and will select their “SINGLE STRI.” machine option.
Failed Custom Option Imports
If the custom option to be imported is “CUPOLA”, but the custom option on the receiving company is saved as “CUP”, the option will fail to import and an error message like below will be shown.
If the custom options match, but the selected value is not available, that will be shown in the error message as well.
For example: If Company A selected “Blue”, but Company B only has “Yellow”, “Red”, and “Green” option.
If a
custom option
fails to import, a message (example below) will be shown after the import and the information will be added to the Detail Notes field on the line:
One or more errors occurred when importing model options: DataHub options for line:…..
Outgoing Purchase Orders
DataHub has the option to upload POs directly to certain vendors, such as to
Do It Best
, Orgill, or vendors that also use Paradigm ERP.
To control the warehouses that POs will be uploaded from on a certain vendor, go to the vendor detail tab and add the
attribute
DataHubExportPOsByWarehouse
and set the desired warehouse ID in the attribute’s value. Add the attribute multiple times to whitelist multiple warehouses. If the vendor doesn’t have this
attribute
at all, POs from all warehouses will be uploaded.
