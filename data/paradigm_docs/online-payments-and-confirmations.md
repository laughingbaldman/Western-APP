# Online Payments and Confirmations

Source: https://docs.goparagon.com/kb/online-payments-and-confirmations/

---

Online Payments and Confirmations – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Online Payments and Confirmations
Online Payments and Confirmations
Online payments and order confirmations can be sent by
emailing
them from Paradigm. This is available with the online payments and confirmations module, more info on that and a demo video can be found
here
.
To receive credit card payments, the
Century/EBizCharge integration
is needed, or ACHs can be processed via EBizCharge or a bank-processed NACHA file. More information on ACH payments can be found here:
Integrated ACH Payments Addon
Sending Order Confirmations
Order confirmations can be sent by clicking Print > Email on a quote, order, invoice, or receivable.
From there, click the “Confirm” drop down and select a confirmation option from the list or right click in the email body to insert the link. Once an option is selected, it will be added to the email as a link.
Confirm
– Sends a link for confirmation only, no prepayment required. Available on quotes and orders.
After a quote is confirmed, it will be converted to an order.
Prepay Partial
– Requires the given percentage of payment to be paid in order to confirm the order. Available on quotes, orders, invoices, and receivables.
Prepay Full
– Requires the order to be paid in order for it to be confirmed. Available on quotes, orders, invoices, and receivables.
Sending Payment Links to Pay an Invoice or a Receivable for Multiple Invoices
When sending link to pay an invoice or a receivable for multiple invoices, there will be the option to send the link for a partial percent and the option to pay the full amount, or a link requiring just the full amount.
Batch Emailing
When
batching emailing
invoices, the “Add Payment Links” option will be shown to include a payment link.
This will add a link to the body of the email, for each invoice. If paid invoices are included in the batch email, they will be shown with a “(PAID)” text and the link will allow for the invoice to be viewed. If the customer has a
customer portal
account with the “Pay Invoices” screen enabled, they will be given the option to click a link to view their current balance.
Order Header Link Button
The “Confirm Link” button can be used to copy the link without creating an email.
Order Changes
If an order is changed and a new link is sent, the old link will take the customer to the new link with the updated order.
Partial Prepayment Link for a Partially Paid Order
If a partial prepayment link is sent for an order that is already partially paid, the percentage to be paid will be based off of the remaining balance, not the order total. For example, if a customer still owes $50 on a $200 invoice and is sent an email asking for a 50% payment, they would be asked to pay $25.
Prepayment Link For A Completed Order
If a user attempts to generate a payment for a completed order, the following message will be shown: A payment link cannot be created for a completed order or quote.
Link Expiration Dates
When a link is generated, it will expire after the given date that is shown on the email. An expired link can be still used to prepay, if the order was already confirmed before it expired.
This date will be the “Valid Until” date on the order if it is more than seven days away, if not, it will be valid seven days after it is generated.
If the link is clicked after the expiration date, this screen will be shown.
Default Partial Prepayment Request Amount
The default percent amount is the default percent charged when creating a confirmation link, but it can be edited from the field in the dropdown.
This default percentage can be changed by going to System > Company Preferences > Sales > Behavior.
Customer Options and Confirmation Screens
When a customer clicks on a link, the products on the order and all of the order details will be shown. Then the check box to agree to the terms and conditions can be clicked, and a name can be entered to confirm.
Once that is clicked, options for payment amounts will be shown if payment is required. In this case, 50% payment is required, but the option to pay in full is shown too.
Then once the order is confirmed, a confirmation screen will appear.
Online Payment Method Options
The available customer payment options when paying online depends on what is enabled on the customer’s detail settings:
Online Payments – Customers
Attempting to Confirm An Edit Locked Quote, Order, Invoice, or Receivable.
When a quote, order, invoice, or receivable is being edited and a customer tries to confirm it, they will be shown this error message because it currently has an
edit lock
on it.
Confirmation History Tab
The confirmation history tab can be viewed on a quote, order, or invoice by going to the status tab and clicking on the confirmation status button.
This will bring up a list of any confirmation or prepayment requests for that order along with their current status.
Unfinished Payments
If a customer starts a payment and then cancels while completing it, the transaction will still be shown unposted in Paradigm.
This will be automatically deleted after 12 hours.
Receivables
&
prepayments
will show a banner message indicating when the payment will be deleted:
Created by web payment – Will be Automatically deleted at [DATE TIME] if payment not finished.
Notifications
Confirmation
When the user confirms an order that isn’t set to prepay, the following notifications are sent:
Task – A task will be assigned to the Paradigm user that created the link.
Emails
An email can be sent to the user that sent the email. This can be enabled or disabled by the “Email Salesman after Payment” checkbox.
An email can also be sent to a single address for everyone. This will get sent to the email entered in the “Internal Confirmation Email” field.
Payment
When a payment is received, the tasks and emails listed above are sent, as well as an additional email to the customer.
Set Up
To enable confirmation and prepay or change the default order confirmation terms, go to the company website and go to Set up > Confirmation.
Terms Per Customer
Terms can be set up per customer as well, by giving them a custom attribute. To do this, go to the customer’s detail tab and click the edit button beside “Customer Attributes”.
Then enter “OrderConfirmTerms” as the name for the new customer attribute.
Then close that window and add the new attribute. The default terms for that customer can be entered in the “Value” column.
