# Fulfillment Pro: Back Ordering

Source: https://docs.goparagon.com/kb/fulfillment-pro-back-ordering/

---

Fulfillment Pro: Back Ordering – Paradigm ERP by Paragon – Documentation
Home
Fulfillment Pro
Fulfillment Pro: Back Ordering
Fulfillment Pro: Back Ordering
This FAQ will go over the back ordering feature in Fulfillment Pro.
Back Order
When more of a product is ordered than is available, typically a back order is made for the remaining quantity ordered. Fulfillment Pro has built-in features to make this process easier. By checking the “Enable Back Order” setting in the
employee Fulfillment settings
, that user will be able to input back order quantities for any ordered line. The quantity that they enter to back order will automatically be deducted from the quantity shipped column in Paradigm when the order is converted to an invoice, which will prompt a back order to be made when the invoice is posted.
When the back order option is enabled for a users login, a “Back Order” button will appear under the “Advanced Options” dropdown in the row of action buttons that are displayed after expanding an order from the pull list.
Clicking this option will switch the Lock/Unlock column with a back order column. Enter the quantity to back order for a line and press the “Back Order” button on that line to save that back order quantity. As soon as the button is pressed, the “NumLeft” for that row will be decreased by the quantity that was back ordered.
After specifying all back order amounts, click the “Close Back Order” button which will switch the back order column for the Lock/Unlock column again.
To remove a back order quantity, open the back order column again and set the back order quantity to 0 for that line, remembering to click “Back Order” for that line to save the changes.
Pull labels cannot be printed for back ordered quantities. Back ordered items will continue to appear in the pack list but will not be able to be added to a pack. Back ordered items will not appear at all in the shipping list.
When a back order is created, a note is added to the order notes specifying what product and quantity was back ordered through Fulfillment Pro. An email can also automatically be sent to the salesperson on the order (contact Paragon Computing Solutions to enable this functionality – it can even send from an email account that is specified). The email will be sent to the first available email address from this list: salesperson on the order, salesperson on the customer, rep on the customer, or company default. The email addresses for the salesperson or rep looks for a Paradigm user with the same default salesperson, and uses the email address from that account.
