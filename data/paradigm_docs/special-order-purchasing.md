# Special Order Purchasing

Source: https://docs.goparagon.com/kb/special-order-purchasing-screen/

---

Special Order Purchasing – Paradigm ERP by Paragon – Documentation
Home
Purchase Order and Vendors
Special Order Purchasing
Special Order Purchasing
This FAQ will go over the special order purchasing screen in Paradigm.
Special Order Purchasing
The special order purchasing screen can be used to easily create a PO or RFQ from a list of special order items, and can be accessed by going to Accounts Payable > Special Order Purchasing. This screen allows a purchasing manager to quickly view lines that need POs created and convert them into POs, rather than relying on the salespeople to do so while releasing the sales orders.
This screen shows items on sales orders that need purchase orders. Learn more about requiring POs for a line here:
Create Purchase Orders By Default
. Only lines that are set to require a PO, haven’t had a PO created yet, and are on a released order will show in this list. Lines will disappear from this list as POs are generated for them.
Select the special order items to be purchased, and click the “Create RFQs” or “Create POs” button in the header. By default, one PO will be created per vendor, but if the “Create POs by Warehouse” checkbox in the header is selected, one PO will be created per Vendor and detail line Warehouse.  Orders under a “Direct Ship” ship via or warehouse will always convert to their own POs. More info on how to create and set up a “Direct Ship” ship via or warehouse can be found here:
Ship Vias
,
Warehouses
.
After clicking the “Create RFQs” or “Create POs” button in the header, a pop up will appear with the option to open the list of the purchase orders created.
Special Order Items without Vendors
When an item is selected to create a PO for it, and it does not have a default vendor set, this error will appear:
Part number [Product ID] does not have a Vendor ID. This must be fixed before creating Purchase Orders.
To fix this, go to that item from the inventory list and set a default vendor for it.
