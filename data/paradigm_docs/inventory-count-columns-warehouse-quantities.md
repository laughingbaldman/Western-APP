# Inventory Count Columns (Warehouse Quantities)

Source: https://docs.goparagon.com/kb/inventory-count-columns/

---

Inventory Count Columns (Warehouse Quantities) – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Inventory Count Columns (Warehouse Quantities)
Inventory Count Columns (Warehouse Quantities)
This FAQ will go over how each of the inventory count columns are calculated.
Reorder Point, Reorder Qty, and Max Qty
– These are used in the purchasing agent. Learn more about that here:
Purchasing Agent and Reorder Points
Qty In Stock
– The total posted quantity. All posted purchases minus all posted sales/usage records.
Qty Received
– The quantity on purchase invoices that have been received, but are not posted.
Qty Committed
– The quantity on released sales orders, released outgoing inventory transfers, unposted invoices, and uncompleted builds.
Qty Available
– The quantity in stock plus received minus quantity committed.
This will include the quantity being produced as well, if the following
company preference
is enabled:
Include Quantity Being Produced in Quantity Available totals
Qty On Order
– The quantity on open purchase orders and uncompleted incoming transfers.
Qty Pulled
– The quantity that has been marked as pulled through
Fulfillment Pro
plus the quantity on unposted invoices.
Qty On Shelf –
The quantity in stock plus received minus the quantity pulled by
Fulfillment Pro
.
Qty Being Produced
– The quantity on released, not posted builds.
Where the Quantities are Located
Quantity in Stock
This can be viewed in transaction history by going to an item and selecting the “Transaction History” tab.
Quantity Received
This can be found by going to Accounts Payable > Purchase Invoices. Then filter the list down to the product, and then down to the unposted and received invoices. More about quantity received can be found here:
Receiving Inventory
Quantity Committed
This can be found by viewing the Units committed report on an item, as show below.
Manually Finding Quantity Committed
It is recommended to use the units committed report to find qty committed, however another option to manually find them is to follow the filters listed below:
Accounts Receivable > Orders and filter the list down to open orders and the product ID.
Inventory > Inventory Transfers and filter down the list to the product ID and the origin warehouse. Then uncheck posted and select the release check box.
Account Receivable > Invoices and filter down the list to the product ID and uncheck the posted check box.
Inventory > Inventory Builds and filter down the list to the product ID in the component search bar and uncheck the posted and on hold check boxes.
All these lists together make up quantity committed.
Quantity On Order
To find these, go to Accounts Payable > Purchase Orders. Then filter down the list to the product ID and set it to not completed orders. If a purchase order is converted to a purchase invoice and isn’t marked as received, that quantity won’t show up on any of the lists until it’s marked as received or posted.
Another place to find Qty on Order is by going to Inventory > Inventory Transfers and filtering down the list to the product ID and destination warehouse. Then uncheck the posted box and select released.
Quantity Pulled
To find these, go to the item’s “Warehouse Stock” tab and go to the “Quantity Pulled and Quantity Committed” section.
Quantity On Shelf
To find these go to Quantity in Stock, Quantity Received, and Quantity Pulled. See the previous sections for information on finding these quantities.
Quantity Being Produced
To find these, go to Inventory > Inventory Builds. Then filter down the list to the product ID and uncheck the “On Hold” and “Posted” boxes.
