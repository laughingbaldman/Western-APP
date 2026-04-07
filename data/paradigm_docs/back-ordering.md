# Back Ordering

Source: https://docs.goparagon.com/kb/back-ordering/

---

Back Ordering – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Back Ordering
Back Ordering
This FAQ will go over Back Orders in Paradigm. A back order is when a certain product is out of stock, but is expected to be delivered once the product is back in stock.
Paradigm will prompt the user to create a back order during invoice posting when the pieces shipped on the invoice is less than the pieces ordered. In most cases it is cleaner to split the order before invoicing instead of creating a back order. More information on splitting orders can be found here:
Splitting Orders
. Back orders quantities can be recorded in Fulfillment Pro as well:
Fulfillment Pro: Back Ordering
Back Order Received Notification
Once the back ordered items are received, the “Back Order”
user group
will receive a
task
. If this notification is not set up already, contact
Paragon Support
to have this configured.
Mark Under Shipped Orders As Open
If the option below is enabled, then a back order will not be created and the order can instead be
partially invoiced
.
Standard Back Ordering Process
Change the pieces shipped on the invoice to less than pieces ordered, then post the invoice and Paradigm will ask to create a back order.
Select the lines to include on the back order and click “Create Back Order”
The created back order is just for the unshipped products. Creating a back order for an order line that has pull labels will re-assign un-shipped
pull labels
to the back order if possible. If the label cannot be automatically moved, it will leave it unchanged and add “[This line may have been pulled on the original order]” to the line description.
This will be shown as a new order but the production information is retained from the original order so items won’t get produced twice. The back order can then be processed like any other released order to get it shipped again when the product is back in stock.
It is recommended to set the ship date on the back order to the estimated restock date of the product.
Recording Back Orders Before Invoice
To select a quantity to back order before invoicing, go to the order detail line’s line item options popup.
Enter the pieces to back order in the “Qty to backorder” field. This will automatically be deducted from the pcs shipped when converting the order into an invoice.
Back orders recorded in Fulfillment Pro will be reflected in this field as well.
