# Columns for Order Detail

Source: https://docs.goparagon.com/kb/columns-for-order-detail/

---

Columns for Order Detail – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Columns for Order Detail
Columns for Order Detail
This FAQ will go over the available detail columns in the order form.
ID – Line ID number
Line Item Options (Folder Icon) – Opens the line item options screen
Type – Line type: Item, G/L,
Comment
, or
Bundle
Item/GL ID – Product ID or GL ID
Pcs Ord – Pieces Ordered
Feet
Inches
Feet and Inches are typically only editable on linear items.
Unit of Measure
Qty Ord – Quantity ordered is pieces ordered x linear feet. If the
unit of measure
isn’t linear, quantity ordered is just pieces ordered.
Description – The description of the product entered, comment text, or the name of the bundle.
Manu – Indicates whether not the item is to be manufactured.
Warehouse – The warehouse that the item is coming from.
Color
Discount – A percentage can be entered here to give a discount for that line item.
Tax – Taxable = 1, Non-Taxable = 0
Sales Price – The sales price for one of the selected unit of measure.
Set Price – This is checked automatically if the price or discount is manually changed. Uncheck this box to revert to default pricing.
Total – Qty Ordered * Sales Price * (1-(Discount/100))
Cust. Price – The unit price for that customer, inclusive of any discounts entered on the line.
Additional Info – Notes from the additional info field on the item
Attachments
Comment – This is specific to that line on the transaction and always starts blank. It can be used to pass a note to production, or for a “Use” note for the builder material list.
Weight – Weight of the item
Price Disc – Shows how much the line item price is discounted from the standard inventory list price.
Qty Avail. –
Quantity Available
Qty In Stock –
Quantity In Stock
. This is the item’s current stock, not the stock as of the time of entry.
Margin – Current margin percentage.
Margin 2 – Current margin percentage based on the item’s current Standard Cost 2.
Status Icon and Status –
Row Statuses on Order Detail
Create PO – Select this check box to create a PO for that item once the order is released.
Cost – The standard cost of the product at time of order entry, typically. For posted transactions, it will be updated to the actual posted cost for that line.
Cost2 – The current standard cost 2 from the item.
Cost Total
The cost total is the subtotal of the cost for the row. It is calculated as the value for a single unit of the item (UOM) multiplied by the quantity ordered (Qty Ord).
To manually set the Total Cost that Paradigm should use for the row, double-click to open the “New Cost Subtotal” dialog.
Job Class and Job Phase – Used to separate materials being used for WIP jobs
Transfers
– for lines that need to be transferred from another warehouse, indicates if that transfer has been completed.
Pulled By – The user that pulled the line.
Units Buildable
Markup – Current percent of markup.
Quantity – Unit of measure quantity.
Cnt ID – The unique identifier for the line in the database.
Build ID – This column applies to manufactured items, and is the inventory build ID generated to produce the item.
Qty Ship – Quantity Shipped
Department
Ext. Weight (Extended Weight) – This shows the total weight of the line. It also shows the weight totals for bundle lines as well.
