# Order Entry and Customer Tips and Tricks

Source: https://docs.goparagon.com/kb/order-entry-and-customer-tips-and-tricks/

---

Order Entry and Customer Tips and Tricks – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Order Entry and Customer Tips and Tricks
Order Entry and Customer Tips and Tricks
Customers
In the customer form, use the ‘Notes’ field to enter information on the customer. These notes will be displayed on every quote, order, or invoice for that customer.
When entering
email addresses
, either as contact methods or the batch email address, a semicolon can be used to separate two addresses to be sent to at once.
In the customer’s detail tab, check the box for ‘PO Required’ to force a PO number to be specified for each order for this customer.
Use the customer’s detail tab to designate credit limits, terms, salesperson, pricing type, ship via, and sales tax code.
The customer history tab displays that customer’s activity for a given date range. Use the filters to control what is shown in the list.
If a customer ships to more than one address, or needs their shipping address to be different than their billing address, use the ‘Ship To’ button on the customer form. Using this, create any number of ship to addresses for that customer that will be available every time that customer is used. The list of ship to addresses will show in the ‘Ship ID’ list on quotes, orders, and invoices. Learn more about customer saved ship to addresses here:
Customer Saved Ship to Addresses
Quote, Order, and Invoice Headers
Even after a transaction is completed or posted, the notes and message to print may still be able to be edited by clicking the corresponding link on the form, provided a certain
company preference
is enabled for your business.
Orders that are no longer needed can be canceled to remove them from the list of open orders. Use the ‘Advanced Options’ tab and check the ‘Cancel Order’ checkbox.
If an order needs to be removed from production after being released, it can be ‘Un-released’ by unchecking the ‘Rel. to Manufacturing’ checkbox in the ‘Advanced Options’ tab.
To refresh the pricing of a particular quote, order, or invoice, click the ‘Update Prices’ button. This changes out the prices on the order for the current pricing, except for lines where the price was manually set. This also will total all lines of a type together when evaluating price level discounts, so two lines added together may get the discount when they didn’t individually.
A single order can be split into two orders by using the ‘Split Order’ button. Select the lines to move and click ‘Create Order’.
Open quotes and other unreleased orders can be added to an open order by using the ‘Open Quotes’ button. This will show a list of all open quotes for that customer, and the ones to be added to the order can be selected from the list and added.
A discount can be applied to every line on an order by entering the discount amount in the ‘Disc’ field in the order header.
Use the ‘Void’ button on an invoice to effectively delete the invoice without deleting it. This process can be used to remove an invoice from all calculations and lists, without removing it entirely from Paradigm.
Order Detail
To give a product to a customer free of charge, set the discount on that line item to 100%.
To set a line as nontaxable, change the ‘Tax’ column to 0. Note that this defaults from the product and should only rarely need to be changed.
When using bundle codes (either by changing the line type to bundle or using a bundle product), changing the warehouse ID on the bundle line will cascade the change to all items in that bundle.
Information entered in the comment field will be shown in production.
In most databases, double-clicking the price column will show the cost instead. Click
here
to learn more about form setup.
In the line item options (the folder to the left of the line), use the ‘Sort’ button to manually reorder the lines.
In the line item options for lines that are exported to a rollformer, the ‘Purge Build’ button can be used to remove that job from the connecting software. This is dependent on your company and the setup of your rollformer.
When invoicing a customer for an order, adjust the shipped quantity to what was given to them. If the shipped quantity is lower than the ordered quantity, you will be prompted to create a back order for that product when the invoice posts.
There are many options built into Paradigm to speed up order creation. Read about them in detail
here
.
Other
In list screens for quotes, orders, or invoices, a product ID can be searched for using the ‘Product/GL’ field at the top of the list. This will filter to only show transactions with that item on them.
In the order and invoice lists, the ‘Trip’ field at the bottom of the form can be used to filter to orders that went out on a particular trip. This is contingent on the Dispatching module being used.
When creating a customer prepayment, after selecting the order to apply the prepayment against, the payment column can be double-clicked to insert that order’s total.
