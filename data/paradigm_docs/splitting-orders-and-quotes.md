# Splitting Orders And Quotes

Source: https://docs.goparagon.com/kb/splitting-orders-and-quotes/

---

Splitting Orders And Quotes – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Splitting Orders And Quotes
Splitting Orders And Quotes
This FAQ will go over how to split orders in Paradigm ERP.
See this FAQ on merging quotes and orders:
Merging Orders and Quotes
Splitting Sales Orders & Quotes
To split a quote or order, click the “Split Order” button in the header.
Then select the line items to be added to the new order. Note that only entire lines can be split, not partial quantities of a line.
Once the new transaction is created, it will be opened. Splitting the order retains the order number, but adds a number to the
prefix
: OE1, OE2, OE3, etc.
The new split order’s release status will match the original order.
A note will also be added to both orders:
Order Split By Username
The note on the original order will include the order total as well:
To find other orders related to this order, use the “
View Related
” button.
Prepayments
Prepayment Splitting Disabled (LEGACY)
If the
company preference
“Allow prepayment splitting and re-assigning” is
disabled
:
After an order is split, the prepayment amount will only be shown on the order it was received on. Prepayments on any of the orders that were split off of the same order will apply to
any
of those related orders. For example, if OE is split twice, into OE1 and OE2, prepayments made to the original OE will automatically apply to OE1 and OE2 as well when they are invoiced.
Prepayment Splitting Enabled
If the
company preference
“Allow prepayment splitting and re-assigning” is
enabled
:
This setting allows for the prepayment to be distributed between the original order and the new one, which will show an accurate balance on each order.
When an order is split, the prepayment splitting screen below will be shown. “Keep All” will set the entire payment on the original order, while “Move All” will set the entire payment on the new order.
Once the amounts are set as needed, click continue and the prepayment will be split as specified.
Prepayment Equal To or Less Than The Total
Prepayment Greater Than The Total
The split prepayment will display the parent receivable ID in the header information that was used to take the amount off of the original prepayment.
Prepayment
This is the type of payment that will show in the “Is Reassigned” filter in customer history.
Receivable
