# Cascading Costs from Purchases to Sales for Nonstock Products

Source: https://docs.goparagon.com/kb/cascading-costs-from-purchases-to-sales-for-nonstock-products/

---

Cascading Costs from Purchases to Sales for Nonstock Products – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Cascading Costs from Purchases to Sales for Nonstock Products
Cascading Costs from Purchases to Sales for Nonstock Products
This FAQ will go over how costs for nonstock items are cascading from a purchase orders and invoices.
Enabling Cascading Costs
To enable this feature, go to System > Company Preferences > Purchases and check the box beside “Cascade received costs to related sales transactions.”
Cascading Costs
When this is enabled the costs that nonstock items are received at will be cascaded to any related sales transactions, which will assist with keeping costs accurate and result in better margin reporting on invoices. This can be done because nonstock items don’t post cost from the invoice, so the cost on the invoice detail can be changed without affecting the posting of the invoice.
Example
In this example, item “TEST-1” is on an order with a cost of $10.
A purchase order is created for that order and the item is received at a cost of $9.
Once the PO is released, the cost on the order will be updated to the cost on the PO.
Behavior & Special Cases
Releasing a PO will update costs on associated quotes, orders, and unposted invoices.
Posting a VI will update costs on all associated quotes, orders, and invoices.
Job transfers are not affected.
Updates will affect backorders downstream but not upstream. So a PO for a backorder will not affect the costs on the original order, and a PO created from an order will not affect the original quote.
Only nonstock products will be affected.
If a line on the PO has a zero cost or zero pieces ordered, it will not cascade.
If a line on a purchase invoice has a zero cost or zero pieces received, it will not cascade.
If an invoice is dated from before the period closing date, then it will not update the costs or the costs on that invoice’s orders.
If the product ID is different on the PO or purchase invoice, costs will not cascade.
If updating when releasing a PO, any PO lines that have been fully received will not cascade.
