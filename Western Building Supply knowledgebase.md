# WESTERN BUILDING SUPPLY + PARADIGM ERP
## Complete Operations Manual

**Everything you need to operate using Paradigm ERP at Western Building Supply.**

---

## QUICK START

**You are here to:**
1. Use Paradigm ERP (our business system)
2. Apply Western Building Supply standards
3. Serve our customers excellently

**This manual shows you how to do all three.** Paradigm is authoritative for system operations. Western context shows you the business setup and procedures.

### Platform Boundary: Paradigm ERP vs SmartBuild
- **Paradigm ERP (Paragon)** is the operational system of record for customers, quotes, orders, accounting, inventory, and fulfillment.
- **SmartBuild** is a separate barn-building web application used to design buildings and generate material outputs.
- **Integration flow**: design in SmartBuild, then transfer/import the material list into Paradigm to continue quote/order processing.

---

## TABLE OF CONTENTS - CLICK TO NAVIGATE

### Main Sections
- [Western Building Supply Overview](#western-overview)
- [Operations Context At Western](#operations-context)
- [Customers & Vendors](#customers-vendors)
- [Paradigm ERP Operational Guide](#paradigm-guide)
- [Quick Reference & Support](#reference-support)

### All 11 Paradigm Workflows
- [Workflow 1: CUSTOMER ORDERS & ACCOUNT MANAGEMENT](#customer-orders-account-management)
- [Workflow 2: INVENTORY & PRICING](#inventory-pricing)
- [Workflow 3: PURCHASING & VENDOR MANAGEMENT](#purchasing-vendor-management)
- [Workflow 4: ACCOUNTING & FINANCIAL MANAGEMENT](#accounting-financial-management)
- [Workflow 5: PRODUCTION & MANUFACTURING](#production-manufacturing)
- [Workflow 6: JOB COSTING & PROJECT TRACKING](#job-costing-project-tracking)
- [Workflow 7: FULFILLMENT & SHIPPING](#fulfillment-shipping)
- [Workflow 8: DISPATCHING & LOGISTICS](#dispatching-logistics)
- [Workflow 9: SYSTEM ADMINISTRATION & SETUP](#system-administration-setup)
- [Workflow 10: GENERAL SYSTEM FEATURES](#general-system-features)
- [Workflow 11: INTEGRATIONS & ADD-ONS](#integrations-add-ons)

---

## WESTERN BUILDING SUPPLY OVERVIEW {#western-overview}

[← Back to Contents](#table-of-contents---click-to-navigate)

---

[← Back to Contents](#table-of-contents---click-to-navigate)

---

## OPERATIONS CONTEXT AT WESTERN {#operations-context}

[← Back to Contents](#table-of-contents---click-to-navigate)

### Operating Hours & Contact
- **Morning Meeting**: 6:45 AM Monday-Thursday, 6:45 AM Friday
- **Customer Service Hours**: Until 5:00 PM daily
- **Location**: 16 North Rd.
- **Email**: accounting@wbswyo.com

---

[← Back to Contents](#table-of-contents---click-to-navigate)

---

## CUSTOMERS & VENDORS {#customers-vendors}

[← Back to Contents](#table-of-contents---click-to-navigate)

### Vendor Product Preferences

---

[← Back to Contents](#table-of-contents---click-to-navigate)

---

## PARADIGM ERP OPERATIONAL GUIDE {#paradigm-guide}

[← Back to Contents](#table-of-contents---click-to-navigate)

**Paradigm ERP is how Western Building Supply operates.** This section contains the complete operational guide.

### How to Use This Section

For each workflow:
1. **What it is** - the business purpose
2. **When** - practical scenarios
3. **How** - step-by-step Paradigm procedures

---

### WORKFLOW 1: CUSTOMER ORDERS & ACCOUNT MANAGEMENT {#customer-orders-account-management}

[← Back to Contents](#table-of-contents---click-to-navigate)

**Purpose**: Manage customer relationships, orders, quotes, and accounts in Paradigm

**When You Use This**:
- Creating new customer accounts
- Processing customer orders
- Managing customer portal access
- Handling quotes and order tracking

Source: https://docs.goparagon.com/kb-category/order-entry-and-customers/

#### Customer Portal: Create Customer Web Logins

Customer Portal: Create Customer Web Logins – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Customer Portal: Create Customer Web Logins
This FAQ will go over how to create customer web logins. The customer will use this login to access the Customer Portal.
Company Website
To begin, go to the internal website. The URL for that can be found by going to
Company Preferences
> Setup > Paths.
Then log in with the administrator account (commonly:
web_admin
), click the dropdown in the top right corner, and select “Edit Customer Admins.”
Add Customer
To create a new account, click “Add Customer” and enter the new account information into the fields on the pop up.
Account Details
The Customer ID here uses the ID from Paradigm, not the name (use “DOEJOH001”, not “John Doe”). Emails are not required; they are mainly used to guarantee that users are unique. Enter the first and last name, or combination of name and initials with
no
spaces (JohnDoe, not John Doe). Having mismatched names may result in double billings. Once all of the information is entered, click “Save User”. Clicking the “Save User and New” button will save the user and keep the window open to enter another customer.
Require Password Reset –
Requires a password reset on first login.
Default Salesperson –
The default salesperson assigned to an order the customer enters.
Salesperson Email –
The fallback email to use when notifying salesperson of released order, if the order doesn’t have a salesperson on it or that salesperson doesn’t have an email address.
Confirmation Email –
Extra email address(es) to send the order confirmation email to (Separated by Semicolons).
Add Sub Accounts
Allow the user to add sub accounts.
Release Orders
Allows the user to release orders to the salesperson.
Make Payments
Allows the user to make payments.
Edit Quotes/Orders
View Invoices
Allows the user to edit quotes and order. Also allows them to view invoices.
SmartBuild –
Allows the user to import orders into Paradigm via the
SmartBuild import
Create Pickup Trip
Allows the user to create a pick up trip.
Prompt Name on Orders –
Prompts the user to enter a name on orders.
View Inventory –
Allows the user to view the inventory list.
Show Custom Navbar Button –
Shows the
custom Navbar button
Driver –
The default driver for this user.
To edit the customer details after the account is created, click on the “Account Details” button on the list.
Category Blacklists
The category blacklists button will open a form to select item categories that should not be shown to the customer.
Enable Category Blacklists
To enable this, go to Website Setup > Misc. Settings > Enable “Use Category Blacklisting on Order Forms”
App Settings
More information on the app settings can be found here:
Paradigm Mobile: Overview

#### Customer Portal: Creating Quotes and Orders

Customer Portal: Creating Quotes and Orders – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Customer Portal: Creating Quotes and Orders
This FAQ will go over how a customer would use Customer Portal to create a quote or an order.
First, log into the account and select quotes or orders from the header. In this example a quote will be created.
Then click “Add Quote” or select an existing one to view or edit. The checkmark in the status column means the quote has been converted to an order.
Click “Fill Defaults” to fill in the customer information and then enter in the items. If a special trim is added, the trim draw button will appear in the description field. More information on trim draw can be found here:
Trim Draw
paraclock.com:800 says
You must have 2 lead days (excluding weekends). If you need to have
this order sooner, please call the office.
To change the amount of lead days required, go to Setup > Misc. Settings. This can only be done if the user logged in is a web administrator.
Header Buttons
These buttons function the same for quotes and orders.
Save – Saves the transaction.
Cancel Quote (or Order) – Canceling the transaction makes it no longer editable and removes it from the list.
Add – Creates a new transaction.
Refresh Pricing – Refreshes the prices.
Print – Saves a PDF for that order.
Attachments – View and add attachments.
Search – Opens the product finder.
Export CSV – Exports the transaction as a CSV file.
Release To Salesperson
The “Release to Salesperson” button can be found with the other header buttons, but only on orders.
Once it is clicked, the customer will be asked to add any notes and confirm that they have reviewed the order and agree to release it.
Once it is released, the customer will no longer be able to edit the order and the salesperson will receive an email saying that the customer released an order for review. The order will also appear green in the order list.

#### Credit Card Surcharges

Credit Card Surcharges – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Credit Card Surcharges
Paradigm supports two methods for adding surcharges to
credit cards
: Simple and Third-party
EBizCharge integration
. Simple surcharging is internal to Paradigm, and can be applied to any transaction. EBizCharge surcharging is external, via a web connection, and can only be applied to card-not-present transactions. EBizCharge is planning to complete surcharging for card-present transactions in 2026.
Note
Reports will need to be adjusted in Paradigm to show Surcharges correctly. Contact
support
for assistance.
Simple (Internal) Versus EBizCharge (External)
Paradigm offers the option to set up either surcharging option, or to set up both surcharging options as a hybrid arrangement.
Payments processed inside Paradigm, such as in-store, on a terminal, or through manual entry, always use simple surcharging if it’s turned on. This means the system adds the fixed surcharge percentage that was set in Company Preferences, and Third-party surcharging is ignored for these transactions.
Payments made outside Paradigm, such as through the customer portal or other web-based systems, normally use third-party surcharging via EBizCharge. In a hybrid setup, Paradigm will still apply simple surcharging internally, while the web continues using Third-party surcharging. When both options are available to a workstation, it will use the Simple (Internal) surcharging.
Company Preferences > Payment Processing
Simple Surcharging is enabled and configured in
Company Preferences
. At the top of the surcharging options, the check box labeled “Surcharging” turns on or off all surcharging. Within this, the percentage field sets the fee applied to Simple (Internal) Surcharging transactions, and the checkbox below turns on or off Third-party Surcharging. These settings apply company-wide to all devices and manual entries in Paradigm.
Surcharge Setup Options
Simple Surcharging is an internal, percentage-based fee applied to transactions processed directly in Paradigm. It does not use external APIs and always takes precedence over third-party surcharging for internal transactions. In hybrid setups, simple surcharging handles internal payments while third-party Surcharging applies only to external (web) transactions.
Simple Surcharging Only
To use Simple Surcharging without any Third-party integration, enter a surcharge percentage in the Simple Surcharge Percentage field and uncheck Third-party Surcharging. Paradigm will then apply the internal percentage to all in-system transactions, and Third-party surcharging will not be used.
Important
Paradigm Users assume all responsibility for verifying rules and requirements with the necessary financial and legal institutions before using Simple Surcharging.
External Surcharging Only
To use External Third-party Surcharging only, leave the Simple Surcharge percentage blank and check the Third-party Surcharging box. External payments, such as web transactions, will apply the surcharge via the EBizCharge integration, while internal transactions will not receive any Simple Surcharge.
Hybrid Surcharging
For a hybrid setup, enter a Simple Surcharge percentage and also check the Third-party Surcharging box. Internal transactions in Paradigm will use the Simple Surcharge, while external or web-based payments will follow the Third-party surcharge settings. This configuration allows both methods to coexist without conflict.
Note
To use Hybrid Surcharging, two sets of EBizCharge credentials must be set up within Paradigm.
Because Simple Surcharging always takes precedence internally, two sets of EBizCharge credentials must be set up. If a second set of credentials is not configured with EBizCharge, internal processing will add the simple surcharge percentage to the transaction, and EBizCharge will add a second external surcharge percentage to the transaction. EBizCharge must be configured with a set of credentials that will apply surcharging to external transactions, and will not apply surcharging to manually entered internal transactions.
Surcharge GL Posting Account
Surcharges will post to the account selected in the
Default GL Accounts
, shown below:
Surcharge Screens
When it is turned on, simple surcharge shows on the
Receive Payment
window beside the “Send to Device” button. The button next to the surcharge amount allows the user to toggle between including and excluding the surcharge amount from the payment.
When the Receive Payment window is opened for a Credit Memo, a transaction where money is being returned to the user, the surcharge shows the value as negative. This allows returning the surcharge fee to the customer.
If a surcharge is applied on a credit card payment, it will be shown in the following screens:
EBizCharge Credit Card Screen
Receivable
Prepayment
Surcharging for Canadian Businesses
For businesses in Canada, Paragon recommends Simple (Internal) Surcharging as the preferred method.

#### Mileage Calculator/Trip Optimizer

Mileage Calculator/Trip Optimizer – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Mileage Calculator/Trip Optimizer
The mileage calculation feature allows a user to calculate a freight charge for an order, based on the mileage between the warehouse it will ship from and the customer’s ship to address on the order.
Enabling Mileage Calculation
In order to enable the mileage calculator, an account must be created with TomTom:
https://developer.tomtom.com/store/maps-api
Once registered with them, take the API Key that they provide, go to
Company Preferences > Add Ons
, and enter it into the TomTom Routing Integration.
Check the “Enable Mileage calculation” check box and select whether not to enable “Address Validation”.
Finally, this URL should be whitelisted on your network:
https://api.tomtom.com
Address Validation
Address validation is used to correct small mistakes in the address that is entered on the customer. It will make changes things like “Av” to “Ave” or it may change “St” to “Ave”, depending on which is correct. When an address can be validated, a message will appear to have the user select the address to be used. A green checkmark will be displayed beside a validated address.
Street Name Found
If the street is found, but no address with that number was found on that street, the following message will be shown:
Street was found, but no address with that number was found on that street.
Address Cannot Be Validated
If an address cannot be validated, a yellow exclamation point will be shown.
Lock Address
In rare cases, address validation may change an address even though it is correct. To keep an address from being changed, click the “Lock Address” check box.
This will display a lock symbol. Address validation can be disabled completely in the
company preferences
if needed.
Create Mileage Rates
Go to System > Company Preferences dropdown > Mileage Rates
Min Charge
– This is the minimum amount the customer will be billed for freight at that rate.
Rate
– The amount the customer will be charged per mile.
Sort
– Determines what order the rates will show in the dropdown on the order form.
Rounding Level
– The final freight charge will be rounded up to the next increment of this number.
Calculate Freight Charges
Quotes,
Orders
, Invoices
On a transaction, click on the ruler icon next to the freight field. This will calculate the distance for a one way trip, without factoring in traffic.
After the mileage is calculated, choose the rate and click Accept.
If the exact address cannot be found, the following message will appear asking to calculate based on the ZIP code instead:
Street was found, but no address with that number was found on that street. Do you want to estimate distance based on the ZIP code?
Trips
To calculate the mileage on a trip, click the refresh button beside distance on the trip detail. This will calculate the distance and time for a round trip, without factoring in traffic.
To change the freight charge for an order on the trip info screen, click the button beside the current freight charge.
Then choose the new rate and click Accept.
Using Route Optimization
Route optimization utilizes the same TomTom integration as the Mileage calculator. To use it, open up a trip’s detail screen and click on “Optimize Stop Order”. Paradigm will then use TomTom to calculate the optimal route for the entire trip and automatically update the stop order.
Note:
TomTom doesn’t take into account current traffic patterns when determining the best route. It will optimize the route to find the shortest mileage for commercial vehicles.
Dispatching Map
The
Dispatching Map
gives the option to see addresses marked with a pin on the map.

#### Vendor & Customer History

Vendor & Customer History – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Vendor & Customer History
This FAQ will go over the vendor & customer history tabs in Paradigm ERP.
Customer History
Apply and clear filters.
Select which transaction lists should be shown.
Select the date range.
Choose additional filters on each transaction list.
Click this to open a list filtered to those transactions.
Clicking the magnifying glass will drill down to transactions related to that invoice or payment. (See “Drill Down” section below)
Drill Down
When the magnifying glass is selected, the history screen will be drilled down to only related transactions. Click the button highlighted below to clear this filter.
Resize
The size of each section can be resized as well.
Vendor History
Apply and clear filters.
Select which transaction lists should be shown.
Select the date range.
Choose additional filters on each transaction list.
Click this to open a list filtered to those transactions.
Clicking the magnifying glass will drill down to transactions related to that invoice or payment. (See “Drill Down” section below)
Drill Down
When the magnifying glass is selected, the history screen will be drilled down to only related transactions. Click the button highlighted below to clear this filter.
Resize
The size of each section can be resized as well.
Customer History (Legacy)
The previous version of the customer history tab is still available on the “Customer History (Legacy)” tab.
Vendor History (Legacy)
The previous version of the vendor history tab is still available on the “Vendor History (Legacy)” tab.

#### Prepayment Splitting – Customer Statement Report Changes

Prepayment Splitting – Customer Statement Report Changes – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Prepayment Splitting – Customer Statement Report Changes
If the
company preference
“Allow prepayment splitting and re-assigning” is enabled, the changes below are recommended for the customer statement report. Contact Paragon Support to have these changes made.
More information on prepayment splitting can be found here:
Splitting Prepayments
Report Changes
Prepayments were previously included in list of invoices and credit memos, but in the updated report they will be shown in the Disbursements list.
With the new feature enabled this will cause multiple prepayment lines to show on the old report version when the prepayment is reassigned. This could be confusing for the customer and they may think they have paid more than they actually did, due to extra lines being shown.
The amount due will no longer include prepayments, but instead show a “Prepayments for Un-Invoiced Orders” total.
Before
After

#### Transaction Line Summaries

Transaction Line Summaries – Paradigm ERP by Paragon – Documentation
Home
NEW!
Transaction Line Summaries
Home
Order Entry and Customers
Transaction Line Summaries
This FAQ will go over the transaction line summaries in Paradigm ERP. These summaries are available on quotes, orders, invoices, request for quotes, purchase orders, and purchase invoices.
Summaries
To view the summary, select the lines and the summary will be shown below. If “
Show Total Margin Fields
” is enabled in
company preferences
, they will be shown in the summary as well.
Custom Summaries
Custom transaction line summaries can be set up as needed, such as the screw calculator shown below. Contact Paragon Support to have these set up.

#### Online Payments and Confirmations

Online Payments and Confirmations – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Online Payments and Confirmations
Online payments and order confirmations can be sent by
emailing
them from Paradigm. This is available with the online payments and confirmations module, more info on that and a demo video can be found
here
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

#### Row Statuses on Order Detail

Row Statuses on Order Detail – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Row Statuses on Order Detail
This FAQ will go over the different row statuses on an
order detail
line.
Status Text
There are two columns that can be used to show the status on detail rows. They are called “Status” and “Status Icon”. There are several different statuses that a line can have.
The status column gives a quick view of whether that line is completed or not. If multiple statuses apply, it will display the most completed one. The exception to this is manufactured lines, which will not show statuses higher than “Mfg Locked” until manufacturing for that line has been completed. These are listed with the highest priority first:
Shipped
Includes the name of the person who marked as shipped and shows a truck icon.
Packed
Includes the name of person who packed it and the staging area. [
Fulfillment Pro: Packing
Pulled
Includes the name of person who pulled it and the staging area. [
Fulfillment Pro: Pulling (Picking)
PO Received
This line has been received on a purchase invoice. [
Receiving Material
PO Created
A purchase order has been created for the item. [
Create Purchase Orders by Default
RFQ Created
A request for quote has been created for the item.
Ignored
The item has been ignored in Fulfillment Pro [
Ignoring Lines
].
Mfg Complete
Item has been completed in manufacturing. [
Manufactured To Order Item
Mfg Locked
Item is currently locked by manufacturing. Manufacturing Locked happens when a member of the production team clicks the “Lock” button on the order detail.
Mfg Exported
Item has been exported to manufacturing. [
Connex
Variobend
Eclipse
Printed
Transferred Out
Includes name of person who transferred it. [
Inventory Transfers
Transferred In
Includes name of person who transferred it. [
Inventory Transfers
Auto-Complete
This is shown if the item is set to not show in Fulfillment Pro.
On Hold
If order is released to manufacturing but the line has changes that were not yet released.
Qty Changed
If order is released to manufacturing but the quantity has changes that were not yet released.
Released
If order has been released but nothing else has been done to the line.
No status
Comments
bundle lines
and
GL
lines never display a status.
This is also the default status for a line on an unreleased order.
Status Icon
If the line status is Ignored-Complete, Auto-completed, Manufactured, PO received, Pulled, Packed, or Shipped, it will show a green checkmark:
If the line status is Printed, Mfg. Exported, Mfg. Locked, RFQ Created, PO Created, or Transfered Out, it will show a partial circle:
If a line status is Released, Qty Changed, On Hold or Ignored, it will show an empty circle:
If no other statuses apply, it will show a blank box
How to Show Line Status Text and Icon
If the line status text and icon do not appear in the order, right-click the order header and select “
Show Column Chooser
“. Then select “Status Icon” and “Status”.

#### Customer Credit Holds

Customer Credit Holds – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Customer Credit Holds
This FAQ will go over the different credit hold settings and functionality in Paradigm.
Credit Holds
Company Preference Settings
Company credit hold settings can be found by going to System > Company Preferences > Sales > Credit Holds
Set credit hold when past invoice due date by X days –
Grace Amount –
Customers will not be put on credit hold for overdue invoices until their overdue total is above this amount. This will keep customers from getting put on credit hold for minor overdue amounts.
New Order Overage Grace –
Customers will be allowed to exceed their credit limit by this percentage on a new order if they are not already over their limit.
Allow charging to account on new customer-
Enables “Allow charges to account” by default to new customer accounts.
More information on this setting can be found in the “Customer Detail” section of this FAQ.
Default Credit Limit –
This amount will be put on as the credit limit on any newly created customers.
Allow fully prepaid orders to be released –
This will allow fully prepaid orders to be released in cases where the customer is over their credit limit or the customer does not allow charging to account.
This does not apply to customers who are on Admin Credit Hold.
Include Released Uncompleted Orders In Credit Limit Calculations –
Includes released, uncompleted orders are included in credit limit calculations.
Customer Detail
Customer specific credit hold settings can be found by going to the Customer’s detail tab in Paradigm.
Admin Credit Hold –
This will put any new orders for that customer on a credit hold that can only be released by administrators.
Allow charges to account –
Allows for charges to be made to the account, such as invoicing an order without payment.
If unchecked, it will disable editing the credit limit field. Orders will not be able to be released, unless the order has been fully prepaid or the customer has a negative balance that is greater or equal to the order total.
Ignore Released Orders in Credit Hold Calculation –
Overrides the
“Include released uncompleted orders in credit limit calculations”
company preference for the customer.
Credit Limit –
A credit limit for the customer that will put new orders on credit hold if they owe over this amount.
Releasing an order that would put the customer over their limit will display a warning–if the amount they will be over their limit by is greater than the grace amount (see above) then only users with permission to release credit holds will be able to override the warning and release the order.
Balance –
The total of all posted, unpaid invoices for the customer.
Released Order Balance –
The total balance of released orders for the customer.
Ignore Credit Hold Until After –
No invoice age or balance credit holds will be automatically applied until after this date.
Overriding and Releasing Credit Holds
Credit holds can be overridden on individual orders by going to the Advanced tab and deselecting ‘Credit Hold’. Additionally, the permission to release credit holds can be turned off for any user by going into the security settings. If the customer has been placed on manual credit hold by selecting the ‘Admin Credit Hold’ checkbox in the customer detail, only Administrators will be able to release their credit holds.
If a customer is on a credit hold, and the user does not have permission to release it, an admin’s login can be used to override it through the advanced tab on the order screen.
The message in the status banner will be different based on the circumstance that has caused the credit hold. The following messages are possible to be displayed.
PREPAY ONLY
OVER CREDIT LIMIT
ADMIN CREDIT HOLD
MANUAL CREDIT HOLD
Credit Hold Refresh Button
The refresh button beside the “Credit Hold” check box can be used to check whether or not the customer is on a credit hold.
Once a customer is below their credit limit again, the refresh button can be used on the order to update the credit hold status.
User Security Settings
To enable overriding customer & admin credit holds, go to System > User Security.
Then open the security settings for a user and enable “Allow overriding customer credit holds”.
The “Max Order Total” for releasing orders to manufacturing can be set here as well. Any orders over this total cannot be released by the user, and the following message will appear:
Clear Admin Credit Holds
To clear admin credit holds, the “Administrator” user type is needed.
More information on setting up user permissions can be found here:
Creating Users And User Security
Credit Memos
Credit memos can be created for customers that are on a credit hold, but positive lines cannot be added. For example, if a customer wanted to return an item
and
purchase a different one while on a credit hold, they would not be able to without an admin override. If a positive line is added, the following message will appear:
This customer has a credit hold and may not purchase products on a credit memo. Purchases must be done on a separate invoice.
More information on credit memos can be found here:
Credit Memos
Credit Hold Functionality
Below is a table that shows the credit hold functionality for different actions and user types in Paradigm.

#### Customer Pricing Types

Customer Pricing Types – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Customer Pricing Types
This FAQ will go over the different pricing types for a customer.
Paradigm has many different ways to give discounts or markups to individual customers. The different types of pricing are specified in the customer detail tab (you will have to be logged in to Paradigm with an account that has permission to edit this information). Multi-level pricing is by far the most used out of the options below. See also:
Paradigm Pricing Overview
Pricing Types
None
Exactly what it sounds like–inventory prices will not be evaluated against a pricing type for this customer.
Special prices
specified for individual items under the ‘Pricing’ tab will still apply.
Discount Sales Price
All items will have the specified discount applied to them. This will not compound with any other discounts except for
non-exclusive price levels
Markup Standard Cost
Multi-Level Pricing
The customer will receive the exclusive discounts specified for that price level in the inventory ‘Pricing’ tab. This option is by far the most popular pricing option. More information on that can be found here:
Inventory Pricing Levels
Inventory Category Pricing
Customers can also have category discounts assigned which allow markups or discounts per inventory category/subcategory. This is not a specific customer pricing type, instead, category discounts are always evaluated to see if they are the best price.
To set this up, go to the ‘Category Pricing’ tab to begin specifying categories and discounts.
Choose the category,
pricing method
, and the discount amount/percent.
Optionally, you can specify different pricing types/amounts for subcategories underneath that category by selecting the category from the left column, and then select the subcategories on the right.
In the example given above; the customer will get a 10% discount on the LUMBER category, except for items that are also in the Plywood/OSB subcategory, for which he will only get a 5% discount.
Category Pricing can easily be copied from one customer to another by entering the customer to copy to in the field at the top left and clicking ‘Copy Category Pricing to customer’.

#### Order Entry and Customer Tips and Tricks

Order Entry and Customer Tips and Tricks – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Order Entry and Customer Tips and Tricks
Customers
In the customer form, use the ‘Notes’ field to enter information on the customer. These notes will be displayed on every quote, order, or invoice for that customer.
When entering
email addresses
, either as contact methods or the batch email address, a semicolon can be used to separate two addresses to be sent to at once.
In the customer’s detail tab, check the box for ‘PO Required’ to force a PO number to be specified for each order for this customer.
Use the customer’s detail tab to designate credit limits, terms, salesperson, pricing type, ship via, and sales tax code.
The customer history tab displays that customer’s activity for a given date range. Use the filters to control what is shown in the list.
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
Other
In list screens for quotes, orders, or invoices, a product ID can be searched for using the ‘Product/GL’ field at the top of the list. This will filter to only show transactions with that item on them.
In the order and invoice lists, the ‘Trip’ field at the bottom of the form can be used to filter to orders that went out on a particular trip. This is contingent on the Dispatching module being used.
When creating a customer prepayment, after selecting the order to apply the prepayment against, the payment column can be double-clicked to insert that order’s total.

#### Transaction Entry Calculations

Transaction Entry Calculations – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Transaction Entry Calculations
This FAQ will go over the transaction entry calculation options in Paradigm ERP.
Calculations
Calculations can be done in the following fields while entering transactions: Pieces, Inches, Cost, and Sales Price.
This can be done on Quotes, Orders, Invoices, Request For Quotes, Purchase Orders, and Purchase Invoices.
The following signs can be used:
A space will also be treated as addition. A space must be used in the length columns, because the
“+” and “-” keys are used for increment lengths already
– | Subtraction
This cannot be used in the length column, because the
“+” and “-” keys are used for increment lengths already
- | Multiplication
/ | Division
This will also be used for fractions (i.e. 5 5/16″ will be converted to 5.3125 if entered in the inches column)
Examples
Converting Fractions to Decimals
Fractions can be converted to a decimal by simply entering the fraction.
“5 7/16” is converted to 5.4375
Multiplying Pieces
Another example would be if a customer is requesting something that is sold by the pieces, that is 18 pieces per square and they need to do 32.5 squares:
18 * 32.5 = 585
Screw Calculator
2,350 * 1.8 = 4,230 Screws

#### Leads And Opportunities

Leads And Opportunities – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Leads And Opportunities
This FAQ will go over the lead and opportunities feature in Paradigm ERP.
Enable Leads And Opportunities
Company Preferences
To enable this feature, go to System >
Company Preferences
> Sales > Opportunities and check “Enable Leads and Opportunities”. Paradigm may need to be closed and reopened for this feature to show after being enabled.
Customers require opportunities by default –
This will default “Require Opportunity” to true on newly created customers.
Auto generate opportunities –
This will auto create an opportunity for new quotes, if the customer requires opportunities, and there are no open opportunities for that customer.
User Security
Another step to enable this feature is to enable permissions for this in
user security
for each role or user that needs access.
Adding A Lead
To add a lead in Paradigm, go to Accounts Receivable > Customer and click “Add Lead”. Leads can only be used on quotes and estimates. Once a quote for a lead is converted to an order, it will remove the “Lead” flag and become a customer.
Creating Opportunities
The opportunities list can be found by going to Accounts Receivable > Opportunities.
From there enter the opportunity information, select the lead, and choose the stage and category. Click the gear icon beside “Stage” or “Category” to adjust or create new ones. Set the primary quote to the main quote for the lead and the amount field can be set to the estimated sales amount.
Linked transactions and linked tasks will be listed at the bottom of the opportunity screen.
Opportunity Quotes
A quote can be linked to an opportunity on the “General” tab. This will be done automatically if the quote is created from the opportunity. Opportunities can be created from a quote using the plus button.
Once a quote for a lead is converted to an order, it will remove the “Lead” flag and become a customer.

#### Edit Locks

Edit Locks – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Edit Locks
Edit lock errors are caused when two users attempt to modify the same record at the same time, since only one user is allowed to edit a record simultaneously. Their purpose is to prevent data from being changed without being saved. If a user tries to edit a transaction that’s locked, this error will be displayed:
Record Locked – Record is currently locked by [user]. Please wait a moment, and try again. (Table name: [table]).
The best way to get around this is to ask the user currently editing this transaction (In this case “sales”) to save and close the transaction. But sometimes edit locks will be abandoned on an order due to crashes or other mishaps, which means the lock is still in place even though the user no longer has the transaction open. These locks can be cleared if the user has permissions for it. If the user doesn’t have permission to clear locks, a way to clear an abandoned edit lock is to have the user with the current lock open the transaction and edit/save it. If a user has a transaction open in a tab that isn’t focused, the edit lock will automatically be removed after five minutes.
Request Edit Record
If a user tries to edit a transaction while another user is already editing it, a pop up will be shown asking the user if they want to request access:
Request Edit Record – This record is locked by user: [USERNAME]. Do you wish to request permission to edit?
The user editing the transaction will receive a notification, and can choose to “Confirm” or “Deny” the request. If an option is not chosen within 15 seconds, the request will automatically be accepted.
Once the request is accepted or denied, the user that requested it will received a notification.
This feature is only available if the following
company preference
is enabled:
Enable live change notifications
Clearing An Edit Lock
To clear an edit lock, click the “Clear Locks” button in the transaction header. This button will be disabled if the transaction is already completed or posted.
Then in the pop up click the “Edit Lock” check box and then select “Unlock”.
This will then allow the transaction to be edited, and the other user (sales) will no longer be able to edit the transaction.
Clearing Edit Locks Through Data Utilities
Another way to clear edit locks is through data utilities. This can be found by going to System > Data Utilities > Clearing. Select the document type that needs the locks cleared from it and select “Clear Locks”.
Template Edit Locks
Template edit locks will be set on a quote or order when it is set as a
template
Customer Portal Edit Locks
Edit locks can also be caused from customer portal users editing an order. All Paradigm users have permission to override the customer portal user and edit the order.
Edit Lock Permissions
To enable this, go to System > User Security
Then open the user’s settings and select “Allow clearing locks on orders and invoices”. More information on setting up user permissions can be found here:
Creating Users And User Security

#### MBS Import

MBS Import – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
MBS Import
An MBS import file can be imported as transaction detail lines on the order. This uses the MBS file named “bom_shp.ini”, located in the MBS job folder.
A standard import mode is also available and a conversion spreadsheet can be used instead, see more information here:
Import Lines Into A Transaction
Generating The MBS File
To generate the MBS “bom_shp.ini” file, go to Output > Right Click “BOM” > Options and enable “bom_shp.ini”. Then double click “BOM” to generate the files.
Importing Into Paradigm
To import this in Paradigm, go to the “Import File” button [1] in the header on a transaction and selecting “MBS Import” [2].
Choose the file by clicking the folder icon.
The MBS import file is usually named “bom_shp.ini”.
To successfully import the file, the products may need
custom options
with these names: PUNCHPATTERN, PARTMARK, PITCH.
Those options are required if the MBS import includes any of that data.
Once the file is ready to import, click the “Import” button.

#### Customer Map

Customer Map – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Customer Map
This FAQ will go over the customer map feature. This feature can only be used if the
TomTom integration
has been set up.
Customer Map
The customer map can be found by going to Accounts Receivable > Customers > Customer Map
Filter the list down to the customers to view and click “Customer Map”. This can also be done by highlighting multiple customers and then right clicking and selecting “Open Customer Map”.
The map can be run for up to 500 customers at once.
If a customer does not have a valid address, the following message will be shown:
Addresses Not Found
– Addresses not found for customers
Setting Latitude/Longitude
If a valid address is not being recognized, the latitude/longitude can be set manually on the customer.

#### Template Quotes And Orders

Template Quotes And Orders – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Template Quotes And Orders
This FAQ will go over how to set up quotes and orders as a “Template”.
Creating A Template
To set up a template quote or a template order, go to the advanced tab and click “Lock as Template”.
This will set an
edit lock
on the order and the header will display “TEMPLATE”. The only action available on a “Template” is to duplicate it.
Unlocking A Template
To unlock a template, click the “
Clear Locks
” button, check “Edit Lock”, and click “Unlock”.
Adding A Transaction From A Template
Transactions can be added from a template when clicking the “Add” drop down on a quote or order and selecting “Add New From Template” or by duplicating a template transaction.
A transaction can then be selected from the list by clicking the green plus button or double clicking the line.
Security Permission
The
security permission
needed to clear this edit lock is “Allow clearing locks on orders and invoices”.

#### Order Banner Colors

Order Banner Colors – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Order Banner Colors
This FAQ will go over the available order banner colors in Paradigm.
White
Pending Release
– This is shown when the order has not yet been released.
Light Green
Released to Manufacture
– This is shown when an order is released.
Pink
Pending Released –
Editing a previously released order that has not yet been re-released.
Turquoise
Customer Accepted
– When is shown when a
customer accepts an order
or an
online payment/confirmation
is completed.
Yellow
CREDIT HOLD!
– This is shown when a customer is on a
credit hold
Orange
ADMIN CREDIT HOLD!
– This is shown when a customer is on an
admin credit hold
Red
Past Valid Until Date
– This is shown when the order is past the “Valid Until” date.
Green
Completed
– This is shown when the order is complete.
Black
Canceled
– This is shown when the order is canceled.
Blue
PO Created
– This is shown when a PO is created for an order.
Gray
Template Order
– This is shown on a
template order

#### Clear Locks

Clear Locks – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Clear Locks
This FAQ will go over how to use the “Clear Locks” form in Paradigm. More information on edit locks can be found here:
Edit Locks
Clear Locks – Header
Header Locks
Driver Paper Out
– Clears the “Driver Paper Out” lock.
This lock is set when the Driver paperwork is printed. If the lock is cleared but the old paperwork is still being used, if changes are made to the order then the paperwork will be incorrect.
Edit Lock
– Clears the Edit Lock.
Detail Locks
This is set when a user is editing the order. If this is cleared while another user is making changes, edits may be overwritten.
Manufacture
– Clears the manufacturing lock for all lines on the order.
This lock is set when a build is locked in production. If this lock is cleared, then changes might be made to products that production is already working on.
Shipping Status
– Clears the shipping status for all lines on the order.
This is set when a product is marked as “Shipped”. Clearing this would allow for changes to be made on a line, that may already be shipped and on the truck.
Purchase Order Locks
– Clears the “Purchase Order” lock.
This is set when a PO is created for an order. Clearing this lock will allow for changes to be made on the order, which may then cause the PO to no longer be correct.
Transfer Locks –
Clears the transfer lock that is set after an item is
transferred
Build Purging
Purge All Builds
Purges
all builds on the order.
This option is only shown if builds have been exported.
Clear Locks – Detail Line
Manufacture
– Clears the manufacture lock for the line.
Shipping Status
– Clears the shipping status for the line.
Purchase Order Locks
– Clears the purchase order lock for the line.
Clear Locks – Build Detail
This form can be opened by clicking the folder icon on the line and then clicking the Build/Assembly button.
Clear Locks
– This clears the manufacturing lock for the build and unlocks the line on the order. This is the same as clearing the production lock from line item options on the order.

#### Equipment Rental

Equipment Rental – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Equipment Rental
This FAQ will go over how to set up rental items and how to rent equipment. This feature is included in the
Maintenance Tracking Add-on
Adding Equipment & Rental Items
To configure a product as a rental, go to the Paradigm portal URL and login with a Paradigm user. This URL can be found in System >
Company Preferences
> Setup > Paths.
Add Equipment
To add equipment, go to Equipment > Equipment List > Add Equipment List
Check the “Is Rental” box, select a rental product ID, and enter any other needed information for the equipment being added. For a product to show in the “Rental Product” dropdown, it will need to be entered in Paradigm as a nonstock item.
After selecting the rental box, two fields will open.
The “Equipment Check in Questions” will show when the piece of equipment is checked back into inventory. The “Equipment Accessories” field will suggest the specified accessories that the customer may buy along with the piece of equipment they are renting. Accessories can be marked as “Require Input” which will force the salesperson to choose “Yes” or “No” on that accessory when adding the rental to an order.
Paradigm Item Rental Calendar
Once an item in Paradigm is linked to a piece of equipment to be rented, the “Rentals” button will be shown on the item. This will display the rental calendar for the item.
This calendar can also be found by going to Inventory > Rental Calendar
Rent Equipment
To rent equipment in Paradigm, select “Rent Equipment” from the order header. This can also be done by entering the rental product in the order.
Rental Calendar
The rental calendar is used to select the day(s) the equipment will be rented out and will show if the equipment is available for the given date(s). Right clicking on a day in the calendar will automatically reserve an entire day for the product to be rented. Drag then right click to reserve multiple days.
Click the question mark box at the top of the calendar for the color key.
Rental Calendar Detail
Equipment Warehouse – The warehouse that the equipment is located at.
Equipment Type – The equipment type.
Equipment – The name of the selected equipment.
Unit of Measure – The rate at which the customer will be charged (hour/day)
Pcs – The quantity of the unit of measure selected. In the example screenshot, it would be 5 days.
Apply UoM to Accessories – If selected, when the UoM changes, it also changes all the Accessories that have the same UoM available.
Accessories Requiring Confirmation – This will be displayed if accessories require confirmation as to whether or not it is going to be added on.
Optional Accessories – A list of optional accessories for the equipment rental.
Start Date – Rental Start Date
End Date – Rental End Date
Return – Choose “Customer will Return” or “Pickup Required”
If “Pickup Required” is selected, an
outside delivery
will be created in dispatching to pick up the equipment.
Return Ship Via – The ship via for the outside delivery.
If the customer wants to reserve the equipment by the hour, select the time in the Start Date/End Date.
Down For Repairs
If a piece of equipment is marked as “Down For Repairs” it will show the exclamation point, and a tool icon on the rental.
It will also be greyed out in the drop down and marked as Down For Repairs.
Marking Equipment As Down For Repairs
Equipment is shown as down for repairs if there are any uncompleted repair orders with “Down For Repairs?” checked.
Rental Check-In
When the rental is finished, a rental check in process must be done at: Equipment > Rental Check-in
Click on the piece of equipment to check in and answer any rental questions, add equipment logs, and repair orders as needed. Once all fields have been filled out, click the green “Check In” box.

#### Unposting Paid Invoices

Unposting Paid Invoices – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Unposting Paid Invoices
This FAQ will go over how to unpost a paid invoice. This may be needed if an invoice or an order is under the wrong customer.
To start, go to the receivable for the invoice. This can be found by going to the “View Related” button in the header.
Then unpost and delete the receivable. An alternative option is to unpost it and change the customer on the receivable.
The invoice can then be unposted and changes can be made to it.
After that is done, post the invoice and then switch back the customer on the receivable. If the receivable was deleted it will need to be created again and applied to the invoice.

#### Edit Released Orders

Edit Released Orders – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Edit Released Orders
This FAQ will go over editing released orders in Paradigm.
Adding lines to released orders is permitted in Paradigm, however some companies may have internal policies that discourage this.
Editing A Released Order
When a released order is edited, changes will not be sent to
production
until the order is released again. If an line is edited, it will be put on hold and removed from production until the order is released again. New lines being added to an order should be put in a separate bundle, to show clearly which lines have been added.
When the order is saved without the changes being released, the following message will appear:
Unreleased Lines for [Order Number] –
There are changes to this order that have not been released to manufacturing! Would you like to release them now?
Clicking “Yes” will release the changes. Clicking “No” will save the order without releasing the changes and will show the “Pending Release” status on the order status bar.

#### Un-Release Orders

Un-Release Orders – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Un-Release Orders
This FAQ will go over how to “un-release” an order.
Un-Release
To “un-release” an order after it has been released to
manufacturing
, go to the “Advanced” tab on the order and uncheck “Rel. To Manufacturing”. If there is any completed production or manufacturing is locked then it can’t be unreleased, and instead needs to be assigned to an “On Hold”
ship via
This will remove any released builds from
production

#### Restocking Fees

Restocking Fees – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Restocking Fees
This FAQ will go over a few ways that restocking fees can be applied in Paradigm.
Discount
One method is to simply add a discount on the returned lines. This will discount the amount being returned to the customer, not giving them the entire credit back.
Company Preference
Another option is to set an automatic restocking fee percentage in
company preferences
, more information on that can be found here:
Credit Memos > Restocking Fee
Restocking Fee Item
Another option is to have a restocking fee item, that can be added to the order as an extra fee.
Negative Standard Discount
Another method is to set up a standard discount that can be applied as a restocking fee. More information on standard discounts can be found here:
Standard Discount Selection
Nonexclusive Price Level
Another way is to add a nonexclusive
price level

#### Customer Detail Requirements And Limits

Customer Detail Requirements And Limits – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Customer Detail Requirements And Limits
This FAQ will go over the Requirements/Limits section in the Customer Detail tab.
Inactive
Information on the “Inactive” setting can be found here:
Inactive Customers and Vendors
PO Required
This setting requires the “Cust. PO Number” field to be filled out on quotes, orders, and invoices. The field will turn red if the data has not been entered yet.
Ship ID Required
This setting forces a customer saved Ship ID to be selected on transactions for the customer.
More information on Ship IDs can be found here:
Customer Saved Ship to Addresses
Customers PO Total Required
Information on the “Customer’s PO Total Required” field can be found here:
Customer PO Total Required
Contact ID
Information on the “Contact ID” dropdown can be found here:
Customer Contacts

#### Partial Invoices

Partial Invoices – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Partial Invoices
This FAQ will go over partial invoices in Paradigm. Note that
back orders
or
splitting the order
are the preferred ways of handling partial shipments.
This setting can be found in
Company Preferences
> Order Conversion. When enabled, partially-shipped orders will be marked as open. This means they can be converted again when the rest of the items ship.
Order Conversion to Partial Invoice
Select Convert > Partial Invoice
Then select the line items to be converted. When there are un-received PO items, it will override that item selection screen to only show those items. The rest of the items are automatically selected.
The “Select all Shipped” button will select the products that have been shipped via
Fulfillment Pro
After clicking “Create Invoice” the selected items will be added to an invoice, and the order will not be completed. The order can be converted to an invoice again when additional items ship, and this process can be repeated indefinitely. When the last item is invoiced, the order will be marked as completed.
The pieces shipped can be updated on the invoice directly (or lines can be deleted off of the invoice), which will also uncomplete the order if it was previously fully invoiced.

#### Back Ordering

Back Ordering – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
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
Standard Back Ordering Process
Change the pieces shipped on the invoice to less than pieces ordered, then post the invoice and Paradigm will ask to create a back order.
Select the lines to include on the back order and click “Create Back Order”
The created back order is just for the unshipped products. Creating a back order for an order line that has pull labels will re-assign un-shipped
pull labels
to the back order if possible. If the label cannot be automatically moved, it will leave it unchanged and add “[This line may have been pulled on the original order]” to the line description.
This will be shown as a new order but the production information is retained from the original order so items won’t get produced twice. The back order can then be processed like any other released order to get it shipped again when the product is back in stock.
Recording Back Orders Before Invoice
To select a quantity to back order before invoicing, go to the order detail line’s line item options popup.
Enter the pieces to back order in the “Qty to backorder” field. This will automatically be deducted from the pcs shipped when converting the order into an invoice.
Back orders recorded in Fulfillment Pro will be reflected in this field as well.

#### Recording Customer Discounts When Receiving A Payment

Recording Customer Discounts When Receiving A Payment – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Recording Customer Discounts When Receiving A Payment
This FAQ will go over recording customer discounts when receiving a payment.
To record a discount when receiving a payment, first create a new receivable for the customer from Accounts Receivable> Receivables.
Note that if the invoice has terms set that include a terms discount, the discount column will automatically populate if the invoice is within terms dating as of the “Date Paid” on the receivable.
Terms
When doing a partial payment, the discounts will not be retained. The discounts only apply on the receivable that pays the invoice in full, so discounts are not accidentally granted more than once.
Double clicking in the Discount column can set or remove discount, or it can be overridden manually.

#### Manufacture Order

Manufacture Order – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Manufacture Order
This FAQ will go over MOs in Paradigm. An MO initiates the production process for a product that is produced for your own inventory.
Creating A Manufacture Order
To view all MOs, go to Inventory > Manufacture Orders.
To create a new MO click the green plus.
Add the manufactured items to be produced.
Once finished, click “Release MO”.
Production
After an MO is released, it shows up in Production.
In Component Production, the MOs can be found in the stock orders section of the components tree.
More information on how to change the quantity produced, can be found here:
Changing Quantity Produced
Once the produced quantities have been changed and the staging area is set, the pieces ordered will automatically update in the original MO.
Once all production for MO has been completed, the MO will be marked as completed.
Purchasing Agent
Creating MOs can also be done in the
Purchasing Agent
Default Vendor For Manufacture Order
To change the default vendor for MOs go to System > Company Preferences > Inventory.
Converting A Manufacture Order to A Transfer
If an item is needed In Warehouse B but is only produced at Warehouse A, a transfer will be needed in addition to an MO.
More information on how to convert a manufacture order to a transfer can be found here:
Converting a manufacture order to a transfer

#### Customer PO Total Required

Customer PO Total Required – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Customer PO Total Required
This FAQ will cover the “Customer PO Total Required” feature. This feature is used to ensure that order totals match the total from that customer’s PO to avoid any billing disagreements. This feature is only available on quotes and orders.
Customer PO Required
To enable this feature for a customer, check the “Customer’s PO Total Required” box in the “Detail” tab of the customer profile, in the “Requirements/Limits” section:
This setting will cause a button to appear beside the “Customer PO Number” field on the quote and order forms. Click on this button to enter a customer’s PO total:
The button will be red if the Customer’s PO Total has not been entered:
The button will turn green when the Customer PO Total has been entered. Note that hovering over the button will show the current customer PO total:
Orders cannot be released if the Customer PO Total does not match the actual order total (inclusive of freight, tax, and other). Also, quotes cannot be converted to orders until the Customer PO total matches the quote total.
If the order is released when the Customer PO Total and Order Total do not match, this error message will display:
The Customer’s PO Total has not been entered.
Please use the button beside the “Cust. PO Number” field to enter the Customer’s PO Total.

#### Color Switcher

Color Switcher – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Color Switcher
This FAQ will go over how to use the color switcher in Paradigm. This feature can be used only on quotes and orders.
The color switcher can be used to find and replace characters in the product IDs selected. The is mainly used to switch colors (i.e. Replacing “BL” with “AG” in the list of selected product IDs on an order.), but it can also be used to switch product IDs to any other product ID.
Color Switcher
Selecting Items For Color Switcher
Items that are selected will be shown when color switcher is open. If no items are selected then entire order will be brought in.
However, if the order has been released, only lines that have not yet been locked by production will be able to load into the color switcher.
Using Color Switcher
Text entered in the “Find Text” field will be found in the product ID and replaced with the text entered in the “Replace With” field. If the resulting product ID is a valid item in Paradigm, it will be shown in the “Product ID” column.
If a match is not found, a red blank is shown in the “Product ID” column. The “Show Only Unmatched” check box can be used to show only the unmatched product IDs.
The item can then either be skipped by selecting the “Skip” button or by manually selecting the new product. The “Skip All Unmatched” button can be used to mark all the product IDs without a match to be skipped.
Color Drop Downs
Color suggestions will be shown in the “Find Text” based on the colors of the selected products that have a color abbreviation defined. The matches column is the number of product IDs the color code matched with.
More information on color abbreviations can be found here:
Inventory Color List
If only one color is found for all of the items in the list, the color code will be filled in automatically.
Color suggestions will be shown in the “Replace With” dropdown for the colors with an abbreviation filled in the Inventory Color List.
Replace With Nothing
Text can also be added if the “Find Text” is blank and there is text in the “Replace With” field.
Color Switcher Logic
The color switcher goes from
right
to
left
and replaces the first match it finds.

#### Adding A New Customer

Adding A New Customer – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Adding A New Customer
This FAQ will go over how to create a new customer in Paradigm.
Customers can be added from the home tab.
Customers can also be added by going to Accounts Receivable > Customers.
Enter the customer information such as the contact method, company name, address, etc. Paradigm will auto generate a customer ID using the first and last name or the company name.
Batch Emails
Batch emails will be sent to the email entered in “Send Batch Emails To”. To send customer statements to a separate email address, enter it in the “Send Statement Emails To” field. If a separate email is not set up, invoices and statements will be sent to the batch email address.
For more information on setting up customers, see these FAQs:
Inactive Customers
Placing a Customer on Credit Hold
How to Merge Items/Vendors/Customers

#### Converting An Invoice To An Order

Converting An Invoice To An Order – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Converting An Invoice To An Order
This FAQ will go over how to convert an invoice into an order. This option will only be available on invoices that were originally started as invoices, not converted to an invoice from an order or quote. Once an order is converted into an invoice, the invoice is unable to be converted back to an order.
Note that user needs to have the setting “Allow canceling/voiding transactions” to void. This setting can be found in System >
User Security
> User Permissions.
Convert Invoice To Order
Click the “Convert to Order” button in the invoice ribbon.
Once selected, the user will be warned that the invoice will be voided if converted.
After clicking “Convert”, the invoice will be voided and converted to a new order.
Point Of Sale
The “Convert to Order” button can also be found in
POS

#### Bulk Product Add

Bulk Product Add – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Bulk Product Add
This FAQ will go over how to use the bulk product add feature in Paradigm. To add new items into Paradigm, follow this FAQ:
Inventory Import & Export
To start, click on the bulk product add button in the header.
Search for items and click the plus button beside the ones that are to be added.
Adding Selected Items
To add the items that are selected, hover over the side bar and then click the “Insert All” button.
Adding the Filtered List
To add the items that the list is filtered to, click the “Insert All” button on the list.
Enter Items Pieces
After the “Insert All” button is clicked, a pop up will appear asking for how many pieces are to be added. This quantity will be applied to all items that are getting added.

#### Paradigm ERP Sales User Training Topics

Paradigm ERP Sales User Training Topics – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Paradigm ERP Sales User Training Topics
Below is the training guide for sales users in
Paradigm ERP
. Users should understand and be able to perform each of these items to be ready for live use.
The arrows (
) shown in this document link to related FAQs about each topic.
Basics
Open and Sign In to Paradigm ERP
List Screens
Opening A List
Column Chooser – Moving/Adding/Removing Columns
Search and Saved Filters
, clear filters, wildcards
Opening list records
Accessing training videos and documentation site
Home page search
Create Customer
Create a new customer ID,
When do we create a customer ID?
Create from the customer list
Create From Quote
Filling in customer email address for statements & invoices
Customer Detail Set Up
Terms & Credit Limit
Tax Settings
Price Level / Pricing Type
Create Transaction
Header
When to use quote vs order vs invoice?
Create transaction header
From a list
From the home page
From a customer
Search for and select a customer
Set ship to address
New address from scratch
Copy Bill To
Recent order ship to address
Customer Saved Ship ID
Set Transaction Details
Salesperson
Customer Contact
Customer PO
Ship Via
Message to Print
Notes
Freight
Sales Tax Code
How and when to use header buttons
Save/Edit
Add, Duplicate, add from template
Split
Merge
Scan UPC
Product Finder
Color Switcher
Cancel/Void/Delete
Clear Locks, Edit locks
Convert
Update Prices, Lock/Unlock Prices
Attachments
(Optional) Import Line Items
View Related
Detail Lines
Add a line to a transaction
Search, product finder
Changing Unit of Measure
Linear vs Non-Linear Items
Special Trim Items
Open trim draw tool.
Draw trim & save to Paradigm
Start from company standard trim
, recent trim, or favorite trim
Pitch calculator
How to draw hems, reversals, beads
How to use edit mode
Special Order Items
Bundles – how to add, how to use?
Comment Lines – how to add, how to use?
Checking inventory on an item (or its coil)
Put a note on a line for production.
Screw Calculator
How/when/if to edit sales prices, discounts, or price level.
(Optional) – Keyboard Shortcuts
Send Quote to Customer
Email
Print
PDF
(Optional) Email Templates
(Optional) Send Online Payments and Confirmations Link
Send order to shop
Convert quote to order (and order to quote)
Release to manufacturing
Create PO for special order items
Change Orders (Editing The Released Order)
What changes are allowed on a released order?
Recognizing line statuses (production, pulling, dispatch)
Send changes back to shop (re-release)
Un-releasing the order
How to handle credit holds, and prepay-only customers
Invoicing
When to invoice?
Pickup orders
Find/open from order list
Convert to invoice
Receive payment
Print documents for customer
When to create an invoice as an invoice instead of an order.
Delivered Orders
Done by dispatch after truck goes out.
How to handle back orders or partial shipments
When to use a back order from an invoice
When to split the original order prior to invoicing
Receive Payment
Payment Sources
From order (one order, multiple orders)
From Invoice (one invoice, multiple invoices)
General payment on account, checking customer overall balance
Single payment an order and invoice at once
Payment Methods
Cash
Check
Customer Credit
Credit Card
EbizCharge – Manual Entry
EbizCharge – Send to Device
(optional) ACH
Returns
Create Credit Memo
Enter/link returned items
Item getting returned to inventory, vs discarded
Giving money back to customer for returns
Conversations
Start conversation
Reply, tag, forward, etc.
End conversation

#### Point of Sale: Customer Display

Point of Sale: Customer Display – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Point of Sale: Customer Display
This FAQ will go over how to set up a customer display in Point of Sale. More information on point of sale can be found here:
Point Of Sale (POS)
Enabling Customer Display
To enable this, go to System > Local Settings > Show POS Customer Display
Then choose which screen to display it on and choose a logo to display at the top. If no logo is chosen it will default to the company logo that is displayed on reports.
Using Customer View
To use this, open Point of Sale and the customer display will be shown in the selected display. To toggle it on or off, click the “Customer Display” button.
As items are entered in, they will be listed out. Payments with also be shown as the customer pays the bill.

#### Customer Prepayments

Customer Prepayments – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Customer Prepayments
This FAQ will go over how to receive and apply customer prepayments.
Customer Prepayment
To create a prepayment, use receive payment button on an order. A prepayment can be applied to a completed order, if it has no posted invoices.
To view a list of customer prepayments, go to Accounts Receivable > Customer Prepayments
If a prepayment is opened from that list, the history tab can be viewed to see where the prepayment was applied.
Creating a Prepayment For Multiple Orders
To create a prepayment for multiple orders, use the prepayment button from the receive payment drop down.
Then select the orders from the drop down and enter the amount being applied. Double clicking the amount field will bring in the balance due for the order. If no orders are selected, the prepayment will be applied to the customers account for later use.
Applying Prepayments
The customer on an order cannot be changed if a prepayment has been received for it.
To change the customer if the prepayment has not already been deposited:
Unpost and delete the prepayment, then create a new one with the correct customer on it. After that the customer on the order can be changed.
If the prepayment has already been deposited:
Click
return payment
and mark the prepayment as an “Error” payment. Then change the customer on the order and create a new prepayment for it.
Reassigning Prepayments
If the
company preference
“Allow prepayment splitting and re-assigning” is
enabled
, prepayments can be reassigned in the cases below.
Information on splitting prepayments can be found here:
Splitting Prepayments
Manually Reassign Prepayment
Prepayments can be manually reassigned in the
receivables
screen.
Choose the amount to reassign in the list of prepayments and receivables.
Then click “Add Order Payments”.
Select the orders to reassign the payment to.
In this case it was reassigned onto a prepayment for two different orders.
Back Orders
If an order with a prepayment is invoiced and
back ordered
, all unused prepayments will be reassigned to the back order automatically without prompting the user.
Merging Orders
If two orders with a prepayment are
merged
, the prepayment will be from the merged order will be reassigned automatically to the order it is being merged into.

#### Splitting Orders And Quotes

Splitting Orders And Quotes – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
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
After an order is split, the prepayment amount will only be shown on the order it was received on. Prepayments on any of the orders that were split off of the same order will apply to
any
of those related orders. For example, if OE is split twice, into OE1 and OE2, prepayments made to the original OE will automatically apply to OE1 and OE2 as well when they are invoiced.
Prepayment Splitting Enabled
If the
company preference
“Allow prepayment splitting and re-assigning” is
enabled
This setting allows for the prepayment to be distributed between the original order and the new one, which will show an accurate balance on each order.
When an order is split, the prepayment splitting screen below will be shown. “Keep All” will set the entire payment on the original order, while “Move All” will set the entire payment on the new order.
Once the amounts are set as needed, click continue and the prepayment will be split as specified.
Prepayment Equal To or Less Than The Total
Prepayment Greater Than The Total
The split prepayment will display the parent receivable ID in the header information that was used to take the amount off of the original prepayment.
Prepayment
This is the type of payment that will show in the “Is Reassigned” filter in customer history.
Receivable

#### Overdue Invoices

Overdue Invoices – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Overdue Invoices
This FAQ will go over how to find invoices that are past due in Paradigm. Information on finance charges can be found here:
Finance Charges
Invoice List
To find them using the invoice list, first filter the list down to the posted, not paid invoices. Add the “Due Date” column using the
column chooser
and sort it from oldest to newest.
Customer List
Customer History
To view the overdue invoices for a specific customer, go to the customer’s history tab. Then select a date range and set the filter to “Posted Not Paid Past Due”.
Report List – Accounts Receivable Aging
Overdue invoices can be viewed by using the “Accounts Receivable Aging” report. To view this, go to System > Report > Accounts Receivable

#### Customer Portal: Custom Navbar

Customer Portal: Custom Navbar – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Customer Portal: Custom Navbar
This FAQ will go over how to set up the custom navbar in Customer Portal.
Custom Navbar
If the company has a website that is frequently visited or if a specific website needs to be linked for the customer’s benefit, it can be added in the Header. This will only show up if “Show Custom Navbar Button” is enabled for the customer, more information that can be found here:
Customer Portal: Create Customer Web Logins
To set this up, login as an Admin user, click the drop-down in the header and go to Setup > Misc. Settings. Then specify the URL and the Label under “Navbar/Customizations”.
Once it is added, it will appear in the header.

#### Customer Portal: Invoices

Customer Portal: Invoices – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Customer Portal: Invoices
This FAQ will go over how a customer would access their invoices through Customer Portal. Invoices in Customer Portal are never editable.
To view the invoices, click on “Invoices” in the header.
Search for the invoice and click “Select” to view it.
The status of the invoice will be shown and it can be printed or exported as a CSV.
Information on making payments can be found here:
Customer Portal: Payments

#### Customer Portal: Adding Subaccounts

Customer Portal: Adding Subaccounts – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Customer Portal: Adding Subaccounts
This FAQ will go over how a customer would add subaccounts through the Customer Portal. A subaccount is another login that can be used to access the customers account. Additional subaccounts do not increase the subscription cost, billing is based on customer ID, not logins.
Do note that in order to do this, the customer admin must have the subaccounts permissions granted. Permissions on the sub account will be the same or less than the customer admin. More information on permissions for a customer admin can be found here:
Customer Portal: Create Customer Web Logins
To start, click on the drop down in the top right corner and click “Edit Subaccount”.
Fill in the subaccount information in the fields at the top and click on the “Details” button to set the password and edit the permissions. Once those are filled in, click “Save User” to add it to the list.

#### Customer Portal: Searching for Items

Customer Portal: Searching for Items – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Customer Portal: Searching for Items
This FAQ will go over how a customer would search for items and use the product finder in the Customer Portal.
On a quote or an order, click the search button. More information on those buttons can be found here:
Customer Portal: Creating Quotes And Orders
Then start searching for keywords or look through the categories. Once the item is found, simply click on it to add it to the quote or order.
More information on using the product finder can be found here:
Product Finder

#### Customer Portal: Importing An Order From An Excel File

Customer Portal: Importing An Order From An Excel File – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Customer Portal: Importing An Order From An Excel File
This FAQ will go over how to set up and import an excel file into an order through Customer Portal.
Excel
To start, create an excel spreadsheet and enter the order info following the format and example below.
Note:
Do not use a header row in the excel sheet and be sure save the sheet as a CSV.
Customer Portal
Once the sheet has been created,
create a new quote or order
. Then select whether or not to import the descriptions (if unchecked, the descriptions from Paradigm will be used) and whether or not to remove existing lines. If remove existing lines is checked, it will remove all items on the order, and replace them with the imported ones. Once those options are set as needed, click “Choose File”.
Select the file and click “Open”.
After the file is opened, the items will be added to the order.
Product ID is Not In Paradigm
If an line in the excel sheet has a product ID that doesn’t exist in Paradigm, it will show up in the list as a miscellaneous item (MI) and the item that wasn’t imported will be in description.

#### Customer Portal: Payments

Customer Portal: Payments – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Customer Portal: Payments
This FAQ will go over how to make and view previous payments in Customer Portal. To use this and receive credit card payments, the
Century/EBizCharge integration
is needed, or ACHs can be processed via EBizCharge or a bank-processed NACHA file. More information on ACH payments can be found here:
Integrated ACH Payments Addon
To start, click on “Payments” and select one of the options from the drop down.
Pay Invoices
To make a payment for an invoice, select the check boxes on the right and click “Pay Now”. Invoices will be highlighted in yellow if the discount date is expiring within seven days, red if it is past the invoice due date.
The list below will be shown. Confirm that these are the invoices to be paid and click “Pay Now”.
This will take the customer to the
credit card payment processing
or
ACH processing
screen. The payment methods shown will depend on the options set up in the customer detail tab, more information can be found here:
Online Payments – Customers
Partial Payments
To make a partial payment, select “Partial Payments” and enter the amount to pay for each invoice. Then click “Pay Now” and follow the rest of the steps in the section above.
Previous Payments
This screen shows a list of the receivables for the customer.
Clicking “Select” will show all the invoices and prepayments for that receivable.

#### Transfers for An Order

Transfers for An Order – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Transfers for An Order
This FAQ will go over how transfers are created for an order that has items from multiple warehouses. More information on setting up warehouses can be found here:
Multi Warehouse
After the order is released, the transfer for it can be found by going to Dispatching > Transfer List. From here, set the “Ship From” and “Ship To” warehouses to match the transfers you want to view.
After the transfer trip is completed, the TR box on the order will be checked.

#### Running Customer Statements

Running Customer Statements – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Running Customer Statements
This FAQ will go over how to print a customer statement in Paradigm.
Multiple Customers
Customer statements can be printed for multiple customers at a time, by going to Accounts Receivable > Customers.
Then filter the list to the customers that need a statement printed. Set the report to “Customer Statement” and then choose an option to export it.
More information on printing from lists can be found here:
Printing From Lists
Customer List Filter Options
Customers with Balance – All customers with a balance.
Mail Customers – Customers that have a balance, but don’t have an email in the “Send Batch Emails To” field.
E-Mail Customers – Customers that have a balance, and have an email in the “Send Batch Emails To” field.
If statements should be sent to a separate email, the “Send Statement Emails To” field can be set.
One Customer
To print a customer statement for one customer, go to Accounts Receivable > Customers and open the customer from the list.
Then click on the drop down below print and select the print button beside “Customer Statement”.

#### Standard Discount Selection

Standard Discount Selection – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Standard Discount Selection
This FAQ will go over how to set up and use standard discount selection on transactions.
To enable this feature, go to System >
Company Preferences
> Setup > Standard Discount Selection and check the box beside “Enabled”.
Then click the set up button to enter new standard discounts. Clicking the check box beside “Disallow manually setting discounts in standard discounts form” will prevent users from setting custom discount percentages.
Paradigm may need to be closed and reopened in order for the changes to apply.
Applying Standard Discounts to A Transaction
On a transaction, click the “Discount” button in the general tab.
Then select a discount from the drop down and click “Set Discount to: %” to set it to the given percent. To add the given percent on top of any existing discounts, click “Add % Discount”.
Once the discount is set or added, the total discount will be displayed in the discount column.

#### Drop Shipping

Drop Shipping – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Drop Shipping
This FAQ will go over how to record and create transactions for drop shipping (Also known as direct shipping) in Paradigm.
To start, create an order and convert it to a “Drop Ship Purchase Order”.
Then verify that the ship to address on the PO is the same ship to address on the order.

#### Receipt Capture

Receipt Capture – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Receipt Capture
This FAQ will go over how to use the receipt capture screen. Receipt captures are mainly created using the Paradigm Mobile app, but they can also be entered into Paradigm as well and do not require an image to be attached. More information on the app can be found here:
Paradigm Mobile
Receipt capture can be found by going to Banking > Receipt Captures
Creating a Receipt Capture In Paradigm
To create a receipt capture, click on the green plus button and add an image of the receipt. Dragging and dropping one or more attachments onto the list view will create a a capture for each image. Attaching a Word or Excel file will attach it and create a PDF to show it. The first Word or Excel attachment from imported Outlook message (msg files) is converted to PDF and saved as primary receipt attachment.
When images and documents are attached, Paradigm will use OCR (Optical Character Recognition) to attempt to set the Date, Vendor, Amount and Ref No fields. If a receipt entry is sent in from the mobile app, it will attempt to OCR it when it is double clicked in the Receipt Capture List. The same
attributes
that are used in the credit card import can be used to set vendor names. See the end of the FAQ for more information about advanced OCR functionality.
Then fill out the fields at the top with the information from the receipt. Most of the fields here are optional. Credit card charges need at vendor or payee and a withdrawal or bill needs a vendor ID entered.
Creating Transactions for Receipt Captures
To quickly create transactions for receipt captures, click the open all button [1] or select the receipt captures, right click and click “Open”.
If a transaction is created and the box “Post transaction after creating” is selected, the transaction that was created is not opened. If that box is not selected, the created transaction will be opened after it is generated.
Once the receipt is marked as complete or a transaction is created for it, the next open receipt capture will be shown in the order of oldest to newest.
Link To Existing
To link to an existing transaction, switch to the “Link to Existing” tab.
From there, select an account ID and then choose the transaction to link it to by click the link button highlighted below.
Import Receipt Captures
Receipt captures can be imported by using the import button on the list. This will look for files at the “
Auto Attach
” patch.
Advanced OCR
When the OCR process is run on a document, the extracted text is recorded in the Paradigm Log file. If the OCR process correctly extracted the text from the receipt, but the values are not correctly mapped to fields on the receipt capture screen, the text in the log file can be examined and the OcrCode Vendor attribute can be used to setup rules to help map the data for a specific vendor.
The format of the OcrCode attribute value is ParseType_ParseCondition=value
In this example, if an extracted text line is found that Starts With the value 2
and
ends with the value B, that line is mapped to “Ref No” field on the receipt. (This particular vendor always starts their Ref Numbers with a 2 and they end with a B, such as 202431B.)
Parse Condition
StartsWith
EndsWith
LengthEqual
LengthGreaterThan
LengthLessThan
LastNumber
LineNumberEqual
Contains
LineNumberGreaterThan
LineNumberLessThan
PriorLineEqual
PriorLineContains
PriorLineStartsWith
PriorLineEndsWith
NextLineEqual
NextLineContains
NextLineStartsWith
NextLineEndsWith
Parse Type
LineAmount
LineReceiptDate
LineVendorName
LineRefNo
DocTotal

#### Merging Orders And Quotes

Merging Orders And Quotes – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Merging Orders And Quotes
This FAQ will go over how to merge purchase orders, sales orders, and quotes in Paradigm. Quotes and sales orders that are marked as completed or released cannot be merged into other orders.
See this FAQ on splitting quotes and orders:
Splitting Orders and Quotes
Merging Sales Orders & Quotes
To do this, start by going to the sales order that the transaction is going to be merged into. Then click the “Open Quotes” button in the header.
A list of quotes for that customer will appear. Click the check box beside “Display Orders” will show all the open orders as well.
Check the box beside the quotes and orders to merge and click “Add Selected”.
Those transactions will then be marked as complete and the items will be added to the current order.
Merging Purchase Orders
To do this, start by going to the purchase order that the transaction is going to be merged into. Then click the “Open Orders” button in the header.
A list of purchase orders and request for quotes for that vendor will appear.
Show Released POs
When this is unchecked, POs that have been released will be hidden from the list, and only unrelease POs will show.
Display POs
Unchecking this box will remove all POs from the list, leaving only Request For Quote items.
Limit to Same Job
When this box is checked, the only items that will show in the list are items that have the same “Job ID” value.
If the purchase order was created from an order that’s for a job, it will have been assigned the Job ID.
If there is no Job ID on the current purchase order, other orders that also have no Job ID will show when this box is checked.
Check the box beside the purchase orders or RFQs to merge and click “Add Selected”.
The items from the selected purchase orders and requests for quote will be added to the current order, with a comment line that indicates the original transaction from which it came. The original transactions will be automatically marked complete by Paradigm.

#### Credit Memos

Credit Memos – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Credit Memos
This FAQ will go over how to create credit memos, which are used when a customer is returning an item.
Returned Item Getting Added back Into Stock
If an item is being returned, and is getting added back into stock, a credit memo will need to be created.
Creating a Credit Memo
To create a credit memo, first go Accounts Receivable and open a new invoice.
Enter the customer that is returning the item and the change the invoice type to “Credit Memo”.
This will add a note about the change in the “Notes” field.
Once an item is added to the invoice, it will be entered onto the credit memo with the same price, discount, and quantity as the original sale, but with negative pieces to record the return.
Then double click to select the item from the correct invoice, and the item will appear on the line with a negative amount of pieces.
Repeat this process for each item getting returned. If the customer is buying more items, change the invoice type back to “Invoice” and enter the newly sold items onto the invoice. When finished, post the invoice to credit the customer. The credit can be paid back to them via card, cash, or check as needed; more information on that process can be found here:
Return A Customer Credit Balance
Restocking Fee
Restocking Fees can be automatically applied by entering a percentage in the
company preferences
here:
If the fee percentage is entered, a restocking fee line will be added to the credit memo for each returned item. If the pieces being returned or return price is adjusted, the restocking fee line sales price will automatically be updated. The GL account for restocking fees can be set in the
Default GL Accounts
form.
Returned Item Not being Added back Into Stock
If an item is being returned but is not going back in stock, such as when the product was damaged during delivery, go to Accounts Receivables and create an Invoice.
Then add the miscellaneous item to the invoice. Set “Pcs Shipped” to the amount being returned and then change the sales prices to the price of the item getting returned. Be sure it is the same price from the invoice it was purchased on. That invoice can be found by using the credit memo form in the first example, and then switching to an invoice.
Repeat this process for each item getting returned. If the customer is buying more items, the newly sold items can be entered onto the invoice. When finished, post the invoice to credit the customer. The credit can be paid back to them via card, cash, or check as needed; more information on that process can be found here:
Return A Customer Credit Balance

#### Columns for Order Detail

Columns for Order Detail – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
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

#### Batch Post Invoices

Batch Post Invoices – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Batch Post Invoices
This FAQ will go over how to batch post invoices. This feature is to be used when a large amount of invoices need to be posted at once, such as all the invoices from the previous day.
To start, go to Accounts Receivable > Batch Post Invoices
Select either Invoices or Job Transfers from the batch post dropdown. Then choose whether to post all invoices, invoices within a certain date range, or by Job ID. Click the “Post” button to begin batch posting.
While the invoices are being posting, a progress bar will be shown. To cancel batch posting, click the red “X” button.
After posting, the following toast message will appear. If any invoices failed to post, they can be viewed by clicking the “View unsuccessful Invoices” button.
Display Message – Checking this box will display any error messages that appear when an invoice is posted. If this is not checked, the invoices that have error messages will not post and the error messages for them will not be shown.
Override Credit Limit Warnings – Checking this box will override credit limit warnings. Most times this will be checked, since the invoices being posted are usually from the prior day and the customer already has the product. If left unchecked, invoices with credit limit warnings will not be posted, and will show up on the error message list if it is enabled.
Posting Multiple from Invoice List
To post multiple invoices at once, use CTRL + Shift or CTRL + Click to select multiple. To select all, use CTRL + A. Open the right click menu and select “Post”. This is an alternative option to post multiple invoices at once.

#### How to Refund Tax That was Mistakenly Charged

How to Refund Tax That was Mistakenly Charged – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
How to Refund Tax That was Mistakenly Charged
If AvaTax Is Being Used
If
AvaTax
is being used, follow the steps below:
Create and post a
credit memo
with the entity use code assigned to credit back the tax.
Then create and post a new invoice that is
tax exempt
After that, apply the invoice and credit memo against each other through a receivable.
If AvaTax Is Not Being Used
If
AvaTax
is not being used, follow the steps below:
Create an invoice, set the tax code to the same as the original invoice, and enter the miscellaneous item (MI) on two lines.
The total will be a negative amount for the tax, and the invoice will be postable.

#### Importing A List of Orders

Importing A List of Orders – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Importing A List of Orders
This FAQ will go over how to import Quotes and Orders in Paradigm from the Quotes List page or the Sales Order List page. The Excel import tool can be used to import multiple orders at once into Paradigm from a single Excel spreadsheet.
Excel Import File Format
Paradigm supports importing orders or quotes from Excel spreadsheets only. The file must be in Excel format (.xlsx or .xls). The structure for creating the spreadsheet is described below.
Line Type Column
Order Detail Columns
Order Header Columns
Build Detail Columns
Importing Into the List Page
The Import button is located at the top right corner of the Quote List page and the Sales Order List page. Click the button highlighted below at the top of the quote or order list. This opens a Windows “Open File” dialog.
Find the Excel file and click “Open.” This will import the file. Once the file is imported, all orders that were created will open in a single page. The imported orders can be looked through by using the record selector arrows in the bottom left of the page.
Column Types
There are four sets of columns that provide the information to Paradigm about the order: Line Type, Header, Detail, and Build. See the details below for which columns are required and optional for each column type.
Line Type
The first column in the spreadsheet must be “LineType.” This indicates to Paradigm what kind of information is in each row.
The value of each cell in this column must be “H,” “D,” or “C.”
Order Header Row
The spreadsheet must have at least one header row.
An order begins with a header row marked by the line type “H,” that contains all of the order header information, such as customer, billing, shipping, or payment.
Each row that has a line type of “H” (Header) signals to Paradigm the start of a new order.
All Order Detail and Build Detail lines following an “H” row will be put onto that order.
Order Detail Rows
If a header row has no detail rows, Paradigm will create an order with the header information set, but no detail lines within it.
Detail rows need to have the Line Type set to “D.”
These rows define the order’s products, quantities, pricing, etc.
Build Detail Rows
Build Detail Rows are optional. If none are included, Paradigm will generate builds according to its normal functionality.
Set the Line Type to “C” (component) to indicate the row contains Build Details.
A set of Build Detail rows applies to the Order Detail row that comes directly above it.
Build Detail rows will be ignored during the import by Paradigm unless the following criteria are met:
The Order Detail row must have the value of the column
YsnManufacture
set to 1. See column “Q” in the example above for an illustration of this.
The item in Paradigm that matches the Product ID of the Order Detail row must have both
Assembly Type
set to
Manufacture to Order
and
Custom Assembly
turned on.
Order Header Columns
The following Order Header fields are supported. Columns that are not required do not need to be entered in the file. Columns that have an asterisk on their description mean that if that column is excluded in the file, default values from the customer will be used.
Column Type: Column Name
Description
string: LineType
Required – value must be H
string: StrCustomerID
Required – It must match an existing Paradigm customer ID.
DateTime: DtmDate
Date of Order
string: StrCustomerPO
Customer PO Number
string: StrBillToCompany
string: StrBillToAttention
Bill To Attention*
string: StrBillToSalutation
Bill To Salutation*
string: StrBillToCareOf
Bill To Care Of*
string: StrBillToFirstName
Bill To First Name*
string: StrBillToLastName
Bill To Last Name*
string: StrBillToAddress
Bill To Address*
string: StrBillToCounty
Bill To County*
string: StrBillToCity
string: StrBillToState
Bill To State*
string: StrBillToZip
Bill To Zip*
string: StrBillToCountry
Bill To Country*
string: StrBillToContactName
Bill To Contact Name*
string: StrBillToPhoneNumber
Bill To Phone Number*
string: StrShipToCompany
Ship To Company*
string: StrShipToSalutation
Ship To Salutation*
string: StrShipToAttention
Ship To Attention*
string: StrShipToCareOf
Ship To Care Of*
string: StrShipToFirstName
Ship To First Name*
string: StrShipToLastName
Ship To Last Name*
string: StrShipToAddress
Ship To Address*
string: StrShipToCounty
Ship To County*
string: StrShipToCity
Ship To City*
string: StrShipToState
Ship To State*
string: StrShipToZip
Ship To Zip*
string: StrShipToCountry
Ship To Country*
string: StrShipToPhoneNumber
Ship To Phone Number*
string: StrShipToContactName
Ship To Contact Name*
DateTime: DtmShipDate
Ship To Date*
string: StrShipVia
Ship Via
string: StrTerms
Terms
string: StrSalesperson
Salesperson
DateTime: DtmCancelDate
Cancel Date
string: StrNotes
Notes
decimal: CurFreight
Freight
decimal: CurOther
Other
decimal: DecSalesTax
Sales Tax Rate
decimal: DecSalesTax2
Sales Tax Rate 2
string: StrMessage
Message To Print
string: StrSalesTaxCode
Sales Tax Code
string: StrSalesTaxCode2
Sales Tax Code 2
decimal: CurSalesTax
Sales Tax Amount
decimal: CurSalesTax2
string: StrWarehouseID
Warehouse ID
string: StrDepartmentID
Department ID
string: StrPricingLevel
Pricing Level
DateTime: DtmValidUntil
Valid Until Date
string: StrShipToContactMethod
Ship To Contact Method
string: StrBillToContactMethod
Bill To Contact Method
string: StrContactID
Contact ID
string: StrEmail
Ship To Email
string: StrPaymentMethod
Prepayment Type
decimal: CurPaymentAmount
Prepayment amount – This is required if strPaymentMethod is supplied.
string: StrOrderType
Order Type – Valid values are: Order, Quote, Estimate
Order Detail Columns
The following Order Detail fields listed below are supported. Columns that are not required do not need to be entered in the file.
Column Type: Column Name
Description
string: LineType
Required – value must be D
string: StrProductID
Required – It must match an existing Paradigm Product ID
decimal: DecPcsOrdered
Required – Pieces Ordered
string: MemDescription
Description
integer: IntTaxable
Whether or not the item is taxable – 1 = Taxable, 0 = Not Taxable
string: StrUnitMeasure
Unit of Measure
decimal: DecWeight
Weight
string: StrWarehouseID
Warehouse ID
decimal: CurSalesPrice
Sales Price
string: StrColor
Color
string: StrNotes
Notes
decimal: DecLinearAmount1
Feet value when linear measurements are in use
decimal: DecLinearAmount2
Inch value when linear measurements are in use
boolean: YsnManufacture
Whether or not the item is to be manufactured – 1 = Yes, 0 = No
string: StrComment
Comment
string: MemBaseDescription
Base Description
string: StrDepartmentID
Department ID
decimal: CurCost
Cost
Build Detail Columns
The following Build Detail fields listed below are supported. Columns that are not required do not need to be entered in the file.
Column Type: Column Name
Description
string: LineType
Required – value must be “C”
string: StrProductID
Required – It must match an existing Paradigm Product ID
decimal: DecPcsOrdered
Required – Pieces Ordered
string: MemDescription
Description
string: StrUnitMeasure
Unit of Measure
decimal: DecLinearAmount1
Feet value when linear measurements are in use
decimal: DecLinearAmount2
Inch value when linear measurements are in use

#### Import Lines Into A Transaction

Import Lines Into A Transaction – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Import Lines Into A Transaction
Transaction detail lines can imported by clicking on the “Import File” button in the header on a transaction.
From here, choose the file and the settings for the import.
Choose the file by clicking the folder icon, or paste date in the field below. The import file used must be saved as a CSV, XLS, or XLSX. The default file path will be the file that the user last imported.
Import Descriptions – Select this to import the descriptions. If left unchecked, it will use the descriptions from Paradigm. Descriptions for bundles will always be imported, but if the description is blank in the file, the description from Paradigm will be used.
Once the file is ready to import, click the “Import” button.
Standard Import Format (Fields Marked with an Asterisk will be Imported)
The headers (header names in parentheses) are only required for the columns on an XLSX import. The columns can be in any order.
*Product ID (ProductID)
*Description (BaseDescription)
*Ft (LinearAmount1)
*In (LinearAmount2)
*Quantity (PcsOrdered)
*Comment (Comment)
Notes (Notes)
Description 2 (Description)
*Sales Price (SalesPrice)
*Cost (Cost)
*Color (Color)
All the columns after comment are optional, so the file data can be stopped at any column after that.
XLS Example
XLSX Example
CSV Example
WSH3644,window,”3’x3′ 8″””,0,1,opening
FJBZ,F&J,”10′ 2″”x0′ 2″””,0,25,Connect Soffit to Wall ( F&J Exterior)
AWH,panel,20,10,2,siding
AWH,panel,22,10,4,siding
Standard With Build Import Format
This import option can be used to import order detail lines (rows with a LineType of “H”) with the build component information in the same file (rows with a LineType of “D”). This would be used in a case where an order needs to be created with some standard items (like lumber, screws, panels, etc.) as well as some custom-assembly items (like trusses) and all of the detail of these items can be placed into a single file to import.
Choose the import mode “Standard With Build Import”
Choose the file by clicking the folder icon.
The import file used must be saved as XLS or XLSX.
The default file path will be the file that the user last imported.
Once the file is ready to import, click the “Import” button.
Standard With Build Import Fields (Column Headers Required)
Column headers are required and fields Marked with an asterisk are required for the import as well.
Product Rows
LineType (H)*
ProductID*
PcsOrdered
LinearAmount1
LinearAmount2
UnitMeasure
Description
Comment
SalesPrice
Cost
Color
Component Rows
LineType (D)*
ProductID*
PcsOrdered
LinearAmount1
LinearAmount2
UnitMeasure
Description
XLS/XLSX Example
Item Import Errors
Invalid Discontinued Items
If an item with an invalid product ID or a discontinued item is imported, it will appear on the transactions as a comment line.
Under Minimum Length Item
If an item is imported with a length under the minimum, it will appear on the transaction as a comment.
Import Above
If the transaction lines getting imported are to be at a certain place on the transaction, click the folder icon on the item they need to go above, and select “Import Above”.
Import Model Options
To select model options when importing, add the model option to the description in the following format: {OptionName:OptionValue}
In the example below, the item has a model option called “COLOR” and the option value is getting set to “RED”.
More information on model options can be found here:
Model Options

#### Bundle and Comment Lines

Bundle and Comment Lines – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Bundle and Comment Lines
Bundles and comment lines are a great way to subdivide and organize transaction detail lines. Bundle codes especially are utilized heavily to get products packaged how the customer wants them.
Bundle Lines
Bundle lines can be added to a transaction by clicking the dropdown on the line type, and selecting “Bundle” from the list.
Alternatively, select a bundle item from the product ID list (most databases have a “JN” or “BUN” product ID for this). This allows bundles to be created without needing to click the line item type dropdown. You can also use a
Kit/Bundle assembly item
Bundles will also group items together in Production and Fulfillment Pro so that the items can be packaged how the customer requested. The bundle name shown will tell the worker which products should be packed together. Bundle codes can also be added/edited through Production, more on that
here
If an item that is part of a bundle is converted to PO, the bundle line will be added to the PO as well.
Bundle Shortcuts
Aside from changing the grouping on reports, bundle codes also offer a few shortcuts for data entry.
Bundles can be deleted along with all of the items that are part of it, by click on the line item options button and then selecting “Delete Bundle”.
The warehouse on the bundle line can be changed to adjust the warehouse for all items in the bundle.
To duplicate an entire bundle, right click the bundle and choose “Duplicate Bundle”.
Comment Lines
Comments are just a note in the transaction detail, they don’t affect grouping/packing and are just there as text for reference.
They can be added to a transaction by clicking the dropdown on the line type, and selecting “Comment” from the list. Alternatively, select a comment item from the product ID list (most databases have a “COM” product ID for this). This allows comment lines to be created without needing to click the line item type dropdown. You can also use a
Kit/Group assembly item
The line will appear on the transaction highlighted in red, and the comment can be entered in the description field.

#### Posting a Transaction With a Zero Dollar Line

Posting a Transaction With a Zero Dollar Line – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Posting a Transaction With a Zero Dollar Line
Why can’t I post a invoice if it has a zero dollar line item?
100% Discount
This first way is to leave the sales price populated and instead give the customer a 100% discount the line item. This is the preferred method.
Company Preferences

#### Apply Credits

Apply Credits – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Apply Credits
Credits can be applied when using the
receive payments
The credits shown are posted negative invoices/credit memos and customer prepayments that have not yet been fully used.
After that is selected, a list of available credits will be displayed.
If a credit line has a yellow background, it means it is a prepayment linked to another order. If one of these yellow lines is selected, a popup will ask for confirmation that the prepayment should be taken from the other order – this is to prevent deposits for one order from being used on another invoice accidentally.
Apply All
Another way to apply credits is by using the “Apply All (F7)” button.
This will automatically select invoices to apply, starting with the oldest credit.

#### Auto Freight

Auto Freight – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Auto Freight
Auto freight is a percentage of the order subtotal that is charged for freight. The freight percentage can be set at a company level, or per customer, and is applied when a ship via with that setting is selected for an order. More info on setting up ship vias can be found here:
Ship Vias
To set up an auto freight charge at the company level, go to System > Company Preferences > Sales and enter the percentage.
To change the percentage for a customer, go to the customer’s detail tab and click the “Custom Freight Percentage” checkbox. Then enter the percentage and then optionally set the minimum freight amount. The freight percentage set here will override the one set at the company level. To lock the freight to always be zero, click the box beside “Lock freight at zero”.
This freight total can be edited, but then the freight will no longer automatically calculate. This warning will appear to give the option to lock the freight when the freight total is changed.
If the ship via is changed to a non-auto freight ship via and the freight hasn’t been locked yet, the freight total goes back to zero.

#### Require Ship to Addresses

Require Ship to Addresses – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Require Ship to Addresses
Requiring a ship to address is a setting that can be set on a ship via. More info on that can be found here:
Ship Vias
. Check out this FAQ for info on creating and editing ship-to addresses:
Customer Saved Ship To Addresses
If a ship via that is set to require a ship-to address is used, it will highlight the “Ship-To” address field in red if there is not an address entered.
This will also cause a pop up to appear when the order is released if the ship to address wasn’t filled out and the selected ship via has this setting enabled.
Use Bill To – Copies over the bill to address and uses it as the ship-to address as well.
Edit Address – Opens the form for the ship-to address to be entered.
Release Anyway – Releases the order without a ship to address.
Cancel – Closes the form and aborts the release process.

#### Require a Signature for a Customer

Require a Signature for a Customer – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Require a Signature for a Customer
This FAQ will go over how to require a signature for a customer in Paradigm.
Customer Detail
In customer detail there is the option to require a signature for a customer. This will only allow invoices to be posted when there is a either signature, or the signature name field is filled in. Do note that this warning is ignored during
batch posting
, or posting from the invoice list. More information on collecting signatures can be found here:
Collecting Customer Signatures
To require a signature, go to the customer’s detail tab and check the “Warn user when posting an invoice without a signature” box.
Now if that customer is selected on an invoice and the user attempts to post the invoice without a signature, they will get this warning:
Missing Signature – This invoice does not have a signature, are you sure you want to post without one?

#### Collect Customer Signatures

Collect Customer Signatures – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Collect Customer Signatures
Paradigm can collect signatures on many different forms, including invoices, orders, prepayments, and
point of sale
. This is usually done by clicking a “Get Signature” button. Once that is selected, the customer can then write their signature on the signature pad and it will show up in Paradigm. Signatures can also be edited, even after the transaction was posted.
Info on which signature pads work with Paradigm and how to set them up can be found in this FAQ:
Installing Topaz Signature Pad
. Info on requiring customer signatures can be found here:
Require A Signature For A Customer
When a customer is signing, there will be three buttons displayed. Clicking “Clear” will clear the signature that was written. “Accept” will save the signature and “Cancel” will close the signature form without saving the signature.
When collecting a customers signature, the name of the person signing can be typed in as well, since signatures can be difficult to read.
If a signature is collected in Fulfillment Pro or Driver App, it will be shown as an option to view the signature. Double click to view the signature.
Prompt for Signature
There is also the option to prompt for a signature whenever a payment is received on orders, prepayments, invoices, and receivables. On orders, the signature is just stored on the generated prepayment.
The setting to enable this can be found by going to System > Local Settings
If this setting is enabled, a “Get Signature” pop up will appear after a payment is received. If a signature is already on file for that transaction, there will be no prompt.

#### Customer Saved Ship to Addresses

Customer Saved Ship to Addresses – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Customer Saved Ship to Addresses
This FAQ will go over how to create, edit, and save customer ship to addresses.
First, go to the customer that is getting the ship to address.
Then click on the “Ship IDs” button in the header.
This will bring up the customer’s ship ID list. Double click on a ship ID in order to edit it, or click the “Add” button to create a new one.
Then enter the ship ID if a new ship to is being created. This ID is just text and is the label that will show up when looking through the ship ID list on an order.
Then fill out all of the ship to location information. If the lock button is checked, the address will then be locked when used on a transaction so address validation will not modify it. If the default check box is selected, this ship ID will be used as default on an order. The tax code entered here will also be applied when this ship ID is used, if left blank it will just use the original tax code.
Once that is filled out, click “Save” to save and close out of the form or click “Add New” to save and create another one.
Using a Ship ID On A Transaction
To use a ship ID on an order, simply click on the ship ID drop down and select it from the list.

#### Customer Special Pricing

Customer Special Pricing – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Customer Special Pricing
Can I give just one customer a special price on an inventory item?
You can specify special prices for individual inventory items for just one customer by entering the product in the customer’s ‘Pricing’ tab. Enter the product, unit of measure, date range that the price is valid, and the special sales price. To make a special price for an inventory item for all customers, see
Inventory Special Pricing
The sales price entered in this form will be per one unit, regardless of the unit of measure that is set to. Follow the examples below to learn more.
Unit of Measure Quantity Equals 1 (Each)
For an each unit of measure, just enter the sales price.
Unit of Measure Quantity Does Not Equal 1 (Skid, Bag Of 100, Etc.)

#### Prepay An Order (Simple)

Prepay An Order (Simple) – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Prepay An Order (Simple)
How do you tie a customer prepayment to a specific order?
Receive Payments Buttons
2. Click on the
Receive Payment
button at the top of the order screen.
Prepayments Button
2. Click on the
Prepay
button at the top of the order screen from the receive payment drop down.
3. Then fill out the prepayment form and post it.
Note: There can be multiple prepayments tied to one order.

#### Receive/Make Payments Tips and Tricks

Receive/Make Payments Tips and Tricks – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Receive/Make Payments Tips and Tricks
Receive Payments
If a receivable has hit the bank account directly and it does not need to be deposited, simply change the ‘Deposit Acct’ to the appropriate bank account. This will add funds directly to the bank account and not require the receivable to be
deposited
After a receivable is deposited, you can easily see which deposit it is on by clicking the ‘View Deposit’ button.
Make Payments
When paying bills, the ‘Pay Bills (Multi-Vendor)’ screen can be used. This form lists all open bills that need to be paid, grouped by vendor ID. Enter the discounts and payments on each line to be paid, enter the next check number at the top of the form, and click ‘Post’ to create multiple payments at once. You will also be prompted to print the checks after they have been created.
In the ‘Pay Bills (Multi-Vendor)’ list, a range of check numbers can be printed by using the ‘Print Checks’ button.
When payment is given to a vendor prior to purchasing product from them (a deposit), use the ‘Vendor Prepayments’ form. Enter the vendor, check number, and amount; then post the prepayment to add a credit to that vendor’s balance.
To start numbering checks at a new number, enter in the new number in Pay Bills Multi-Vendor and click “Start check numbering after this check”.
See also
Returning Payments

#### Customer Contacts

Customer Contacts – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Customer Contacts
Customer contacts can be set up to record the contact at the customer who placed an order. Customer accounts can be set to require a contact before an order can be released, and can even be set so that a password must be entered when a contact is applied to a quote, order, or invoice.
Creating Customer Contacts
There are a couple different ways to create a customer contact by opening a customer. The first option is to go to the ‘General’ tab, and select “Create Customer Contact” or select contact method(s) to convert it to a Customer Contact.
A second option is to click the ‘Customer Contact’ link on either the quote, order, or invoice screen. If a contact has been selected, that contact will be opened in edit mode, but if no contact has been selected a new contact will be created.
Customer Contact List
A list of customer contacts can be found by going to Accounts Receivable > Customer Contacts
Filling out Customer Info
In the contact creation screen, specify the first and last name, address, and any contact methods needed. The priority field can be used for reporting purposes but is not required to be populated. Note that the address information can be copied from the customer by clicking the ‘Copy Customer Info’ button at the top of the form.
Password Requirements
In the customer detail tab, in the Requirements/Limits section, contacts can be set as not required, required, or required with a password.
If ‘Required with Password’ is selected, click the save button and then go into edit mode again. Then field will appear at the bottom of the contact creation form where that contact’s password can be specified.
This password will need to be entered when the contact is applied to any transaction. Only users with access to edit the customer detail can view or edit passwords.
When posting, receiving payment in invoice or POS, users will get this message if contact is required and a password is not required:
Customer Contact Require! This customer requires a valid customer contact. This should be set before posting. Are you sure you want to continue?
If a password is required, the following message will appear:
This customer requires a valid customer contact. This must be set before posting.

#### Statuses And Types

Statuses And Types – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Statuses And Types
Statues and types are customizable text labels that can be shown on a transaction or customer. Statuses can be used to show other users what is currently going on with a transaction and types can be used to show different types of customers.
Creating Statuses And Types
To create these, go to System > Company Preferences > Statuses and Types.
Then select a type from the dropdown list.
Next enter the custom statuses into the form. Selecting the checkbox in the default column will set that particular status to be the default status that gets applied to a transaction. Types are set up the same way for vendors and customers.
Once the custom statuses and types have been created, close the form to save it.
Status Label
The text in these boxes is what will be displayed beside it on the status tabs. By default, the dropdown is labeled as “Status:”
This can be changed by going to System > Company Preferences dropdown > Custom Setup > Sales
Applying the Status To A Transaction
Now the statuses can be applied to a transaction by going to the “Status” tab and selecting the status from the drop-down.
Once the status is set, it will be displayed on the transaction.
Statuses When Converting A Transaction
When a transaction in converted, the status will carry over to the new transaction as long as the status is valid for the new transaction type.
Applying A Type To a Customer or Vendor
To apply a type to a customer or vendor, choose one from the type dropdown.

#### Update Order and Quote Prices

Update Order and Quote Prices – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Update Order and Quote Prices
This FAQ will go over how to update prices on a quote or an order.
Click on the “Update Prices” button in the header.
This button saves the manual refreshing of each individual line item, but will not affect any lines that have manually set prices. It also evaluates the sum quantity for each item and applies appropriate
price levels
based on customer and item settings.
Price Level Does Not Match Customer Default
If a user selects “Update Prices” on a transaction, it will warn them if the pricing level is different from the customer’s standard level:
This Order has a different pricing level than the selected customer. If you want to use the customer level, you must select it manually.

#### Units Buildable

Units Buildable – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Units Buildable
The Units Buildable column will calculate the units that can be built for a given manufactured line item, based on the current
quantity available
of the components used to make that item.
This will only count components that have “Show in
Fulfillment
” enabled in the detail tab. (Non manufactured stock products will simply show the current quantity available)
Insufficient Buildable
The following warning will be shown if the user is releasing an order and they are trying to manufacture more items than are buildable. This means that based on the
units available
of the components, production will not be able to manufacture what the order requires.
This can be enabled/disabled by the company preference here:
Warn user if trying to manufacture more items than are buildable when releasing

#### Lock a Shipping Price

Lock a Shipping Price – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Lock a Shipping Price
This FAQ will go over how to lock a shipping price. The ability to lock a shipping price was primarily added so that a zero shipping price can be locked in on a particular order.
To do this, click the lock button beside the
freight
field.
Clicking it will lock the freight amount so that it cannot be changed from anywhere in Paradigm or
dispatching
unless it is unlocked. In order to unlock the freight field, click on the lock button again.

#### Calculate Sales Price From a Given Margin

Calculate Sales Price From a Given Margin – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Calculate Sales Price From a Given Margin
To adjust the profit margin on an order, quote or invoice detail line, double-click in the margin column on that detail line.
This will bring up a window where a new margin percentage can be entered.
Once that is entered, click accept to apply the changes.
Adjusting Margins on the Entire Order
To adjust the margins on the entire order, click the “Set Margin” button in the header.
Then enter the desired margin.
If that button does not appear in the header, it can be enabled by going to System > Company Preferences > Sales > and select the checkbox from the “Limits” section.

#### Lot Selection Form On Orders

Lot Selection Form On Orders – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Lot Selection Form On Orders
Lot selection is only available on lot tracked items. More information on how to set an item to be lot tracked can be found here:
Lot-Based Inventory
Lot Selection
Once an order is open and a lot tracked item has been added, select the folder icon on the line item.
That will bring up this window below, and from there click on the “Select Lots” button.
Here, the lot can be selected and quantity can be entered. The available quantity shown here is calculated by: Received quantity – Used quantity – Quantity on line items. The total quantity entered here will automatically be applied to the order once the “Finish” button is selected. Quantities can also be split between different lots, as shown below.
Once that is filled out, select “Finish” and the “Pcs Ord” will be set to the selected total quantity. The lot quantity will also show up in the comment column.
Lots With No Quantity Available
If a lot has no quantity available, it will still appear on the list, but will be greyed out. In order to fix this, items will need to be removed from past orders to allow them to be used on the current order. To find items on past orders, click on the box icon to bring up the list of orders that the item is already committed to.
Lot Track Pop up
There is the option for the lot selection form to pop up whenever a lot tracked item is added to an order. Do note that this pop will not appear if the item is marked to be manufactured.
To apply this setting, go to System > Company Preferences > Sales
Then go to the “Warnings and Messages” section and select the box beside “Request lots when adding a line to a quote or order.”
Once that is set, the lot selection screen will show up every time a lot tracked item is entered into an order.

#### Gift Cards

Gift Cards – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Gift Cards
This FAQ will go over how to enable, sell, and use gift cards.
Enabling Gift Card Use
In order to begin using gift cards, they first need to be enabled. This can be done by going to System > Company Preferences > Sales and then from the Limits settings, check “Allow using gift cards.”
Once that is done, restart Paradigm, otherwise some of the gift card buttons will not appear.
The next step is to set gift cards to post to their own G/L account. Do not reuse another account, this account should only be used for gift cards. To set this up, go to General Ledger > Default GL Accounts, and then change the “Gift Card Liability” account on the receivables tab.
Filling Out Gift Cards
Gift cards can only be filled out through the point of sale module.
To fill out a gift card, click on the sell gift card button.
Then enter the gift card amount and scan the gift card or manually enter the numbers.
The gift card will then appear as a line item on the order.
To change the amount on the card, just change the sales price for that line.
Gift cards do not need to be registered with Paradigm ahead of time. They are registered when they are filled out for the first time.
It is recommended that the barcodes on the cards are in CODE39 or CODE128.
Using Gift Cards
Receive Payment
” form. You can then scan in the gift card and process it from that form.
After the gift card is processed, you will be shown a popup with the remaining balance on the card.
Administration
Viewing gift card history and checking balances can be done in Paradigm in the “Gift Card List” found in Accounts Receivable.
Gift Card List – A list of all gift cards with a balance. Gift cards without a balance will be shown if “Show Closed Cards” is checked.
Gift Cards – Prompts for a gift number, once it is entered all info for that gift card will be shown.
Cards can be deleted if no longer needed, or if there is a remaining balance, you can use the “Deplete Card” button to post the remaining balance to an adjustment account.
A gift card ID will automatically get marked as “Closed” when its balance reaches zero. After that point if the card gets filled again, a new gift card record will be created. It will be treated as a new gift card account and the history for that gift card will reset.
History from closed gift card accounts can be found by checking the “Show Closed Cards” checkbox in the gift card list and searching for the card number.
Use the “Gift Card Reconciliation” report from the report list to see the total of all the open gift cards compared to the total balance in the gift card GL account. This report should be regularly checked to ensure that it is in balance. This report can be found by going to System > Reports > Accounts Receivable

#### Receive Payments

Receive Payments – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Receive Payments
This FAQ will go over receiving payments in Paradigm.
Cash (F2) –
Prompts credit card reader with the amount to be charged. If only part of the payment is to be charged on a card, click on the Edit Charge Amount button and change the charge amount.
Asks for the check number and the check amount, and displays a checklist to make sure the check is filled out correctly.
Asks for the amount to be charged. Once that is entered, then the print window will appear, and the invoice and/or picking ticket can be printed or
emailed
from there.
This option will not be shown on invoices, for customers that have any type of
credit hold
Apply Credits (F6) –
Displays a list of invoices with credits, select the ones where the amount charged should be taken from.
Gift Card (F8) –
Asks for
gift card
number, and once the card is processed the remaining balance will be shown.
Pay With ACH –
Asks for ACH account details or allows a saved account to be selected.
More information on receiving ACH payments can be found here:
ACH Payments from Customers
Credit/Debit Button States
The credit and debit buttons will be shown differently, depending on how credit card processing is setup. More on credit card processing can be found here:
Credit Card Process Setup
Send to Device (F9) – This will be displayed if EBizCharge device API is enabled.
Send to Device (F9) + Manual Entry (F3) – These two will show if both EBizCharge manual entry and device API are enabled.

#### Point Of Sale (POS)

Point Of Sale (POS) – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Point Of Sale (POS)
The Point of Sale (POS) module is only to be used for sales when the customer is in the store, buying items that are in their hands and nothing more. It cannot be used for manufactured or special order items, it is designed for use in a retail store environment. This FAQ will go over all the different features and settings in the Point of Sale module, including creating invoices, scanning in items, and selecting payment methods.
To get to the Point of Sale module, go to Accounts Receivable > Point of Sale.
Select the green plus button to start a new sale.
Begin scanning products and adding them to the sales order.
Click the “Complete Sale” button to select the payment method and complete the order.
Entering Items
There are a couple different ways to find and enter items in Point of Sale, most times it’s just by scanning them in. Items can also be added through the
Product Finder
or just by clicking in the order list on the Item/GL ID column which will open the product search dropdown.
To scan in an item, simply scan it, and the item will be added to the order. The cursor will need to be in the scan field for it to scan.
The ALT + R
keyboard shortcut
will remove the last added item.
If an item is scanned in that is already on the sale, the item’s quantity will increase by one instead of adding a new line.
To adjust the quantity before an item is scanned, either click the plus button until the desired quantity is reached or type in the desired quantity followed by an asterisk and hit enter. For example, typing in “8*” and clicking enter would set the quantity to eight for the next item that is scanned in. Clicking the yellow “X” will clear the quantity.
Check Mark –
Adds the entered Product ID to the order list.
Plus Sign –
This button is for entering in multiple of the same item. Every time it is clicked it will increase the quantity by one, so click it until it reaches the desired quantity, then scan in the item and the quantity will be applied to that item.
Trash Can –
Deletes all selected lines.
Complete Sale –
Opens the Receive Payment window.
If an ID is scanned in that does not exist in the system, this error will appear (and a sound will play if the workstation has speakers) and no other items can be scanned in until it is canceled.
Receiving Payments
If more info is needed on receiving payments, check out this FAQ:
Receiving Payments
Salesperson and Customer
Salesperson –
Select the
salesperson
Customer –
Look up and find the customer’s account, the customer will be defaulted to “CASH” when starting a new sale.
The default customer can be set in
Company Preferences > Add-Ons > Point Of Sale
Customer PO –
Enter the Customer’s PO number.
Terms
Select the terms.
Ship ID –
The
ship ID
for the invoice, select a saved one as needed.
Customer Contact
Customer Notes –
Notes about the customer will appear here.
Messages, Signatures, and Tax IDs
Message to Print –
A message that will appear on the customers invoice.
Notes –
Notes about the order, these notes will not appear on the customer’s invoice.
Signature –
Customer’s signature will appear here. Clicking the “Get Signature” button will prompt the signature pad for the customer to sign.
If more info on the signature pad is needed, check out this FAQ:
Signature Pad
Tax –
Click the tax drop down to change the tax ID.
Resuming Sales on Hold
If a customer walks away to grab something else, the receipt can be put on hold while you check out the next customers. Then once that customer returns, the sale can be resumed from the receipts on hold list.
To resume a sale, go to the “Receipts On Hold.” list and click on the order that needs to be resumed.
Select “Today’s Posted Receipts” to show a list of the current day’s posted receipts.
Returns
Click the “Returns” button to enter “Return Mode”. Items scanned will be marked as returns while in this mode. To exit this mode, click the “Exit Returns Mode” button.
POS Header Buttons
Product Finder
(F1) –
Opens the product finder side bar.
Displays all entered items in an invoice.
Start New Sale (F3) –
Starts a new sale and suspends the current one.
Suspend Sale (F4) –
Suspends the current sale, but doesn’t create a new one.
Void Sale (F7) –
Voids the current sale.
Converts the sale to an order
Open Drawer (F9) –
Opens the cash drawer.
Print (CTRL + P) –
Prints out the items on an invoice, picking ticket, or both.
Sell Gift Card (F11) –
Prompts for gift card amount, then once entered will add a gift card as a line item.
More info on gift cards can be found here:
Gift Card FAQ
Returns (F12) –
When selected, items scanned will be marked as a
return
Close –
Closes out the point of sale module.

---

[← Back to Contents](#table-of-contents---click-to-navigate)

### WORKFLOW 2: INVENTORY & PRICING {#inventory-pricing}

[← Back to Contents](#table-of-contents---click-to-navigate)

**Purpose**: Manage component inventory levels, costs, and customer pricing

**When You Use This**:
- Adding or removing inventory items
- Adjusting product costs
- Setting customer-specific pricing
- Creating pricing agreements

Source: https://docs.goparagon.com/kb-category/inventory-and-pricing/

#### Inventory Import: Inventory Item Images

Inventory Import: Inventory Item Images – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Inventory Import: Inventory Item Images
This FAQ will go over importing and assigning inventory item images in Paradigm. More information on inventory import & export can be found here:
Inventory Import & Export
The inventory item images table contains the URLs for the images shown on items.
More information on inventory item images can be found here:
Item Images
Importing New Item images
When importing new inventory item images, be sure to include the following columns: product ID (strTransID), file name (strFileName – set this to
Link
), and URL (URL).
When importing select the “Add new item image URLs only.” to only add new records, or select “Update existing and add new item image URLs.” to update existing and add new records.
Be sure to not include the CntID column when adding new data. Including the CntID will update the existing record that has that ID, more information on that in the next section.
Updating Existing Item Image Data
The easiest way to set up an import sheet is to first export the product IDs you want to make changes to. Be sure to include the CntID and product ID (strTransID) column.
Then make the desired changes in the sheet and then import it back into Paradigm. Be sure to choose the “Update existing item image URLs only.” option when importing.
Example
A common use case for this is updating the URL.
First export the cntID, strTransID, and URL.
Change the URL in the sheet and then import it into Paradigm.

#### Item Images

Item Images – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Item Images
This FAQ will go over adding and viewing item images in Paradigm.
Adding Images
The following image types are supported: “.jpg”, “.jpeg”, “.png”, “.bmp”, “.gif”, “.webp”
Inventory Item
To attach an image, drag and drop an image or a URL onto the image viewer. This will show images attached to the item and attached to the model.
These images can be hidden or renamed directly from the main inventory screen by right-clicking the image. Image loading can be disabled in inventory and model screens by un-checking the “Load Product Images” checkbox. To open a floating image viewer, double click on the image.
Images can be sorted by editing the “Product Image” number in the attachments screen. Un-checking the checkbox causes the image to not show as a product image.
Inventory Model And Standard Drawings
To attach an image to an
inventory model
, drag and drop an image or a URL onto the image viewer on the inventory model screen.
To enable a
standard trim drawing
as a model image, select the gear icon beside the model number drop down, click the paper click icon at the top, and check the box in the “Product Image” column.
Model images are marked with “Model” in the top left corner.
Viewing Images
Transactions
If the line has an item image, the paper clip will be blue.
Hovering over the detail
attachment
button on transaction detail lines or in the inventory list will show item image previews.
This can also be done from the transaction by clicking on the line item options button and then clicking “View Images”.
Scan Items
The item scan screen in transactions shows an image for the last scanned product.
Point Of Sale (POS)
The
Point of Sale
screen shows images in the “Item Image” tab on the left hand sidebar for the last scanned product.
Customer Display
The item image will be shown on the
customer display
for the selected line.
Rentals
Images will be shown in the equipment rental calendar screen. More information on rentals can be found here:
Equipment Rental
Production
Inventory and model images will also show in the
production
image viewers, but custom attached images will show first.
Production Image Labels
Listed below are the different labels that will be shown under the image in production, depending on the attached images or trim drawings.
Custom Trim –
Trim drawing
from the order transaction line.
Standard Image –
Image attached to the inventory item or a model image.
Custom Image –
Image attached to the transaction line.
Lists
Item images can be previewed from the following lists, by hovering over or clicking on the attachment button:
Inventory List
Inventory By Warehouse
Purchasing Agent
Image Caching
Images are cached for 24 hours, or until the maximum cache size is exceeded or the minimum drive space is reached. The images are cached in a folder on the server. After initial load of an inventory image, subsequent loading of the images will get done from the cache.
Image Cache Size
The maximum image cache size and minimum disc space can be set by going to
Company Preferences
> Setup > Image Cache Settings
Image Cache Clearing
The image cache can be cleared by going to System >
Data Utilities
> Clear Image Cache

#### Open Hem Mapping

Open Hem Mapping – Paradigm ERP by Paragon – Documentation
Home
NEW!
Open Hem Mapping
Home
Inventory and Pricing
Open Hem Mapping
Component Mapping
Previously, Paradigm supported the standard mappings for bends, hems, and stretchout. Now, using the new mapping “
Open Hem
,” users can customize the price of trims by the hem type.
Open hems are treated as a distinct component in the assembly, which gives the ability to set a different cost for open hems. For standard trims, this gives the ability to see how open hems factored into the price of the finished piece. For special trims, it allows open hems to be more expensive, to account for their increased complexity.
Open hems are counted only as an open hem by Trim Draw, not as a regular hem and an open hem.

#### Special Trim Set Up

Special Trim Set Up – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Special Trim Set Up
This FAQ will go over how to set up a special trim item and pricing for it in Paradigm.
Assembly Set Up
To start, duplicate an existing trim. Go to the Assembly tab and check the box beside “Custom Assembly”. When this is checked, the trim draw button will appear when the item is added to a transaction. Then ensure that the assembly type is set to “Manufactured to Order”.
Set the Pieces column to “1” on the “Slit” component, and set it to “0” on the “Bend”, “Hem” (or “Open Hem”), and coil component. Then set the coil component unit of measure to “TIP”. More info on the TIP unit of measure can be found here:
TIP (Trim In Process) Unit Of Measure
If the special trim is a linear item, set the feet column to “1” and the inches column to “0” on all of the components. If it is not a linear item, set those columns to the length of the trim.
Set the mapping column to match the settings in the example. This controls where the information about the trim profile is saved when it is created in trim draw.
Slit – No Mapping
Bend – Set mapping to “Bend”
Hem – Set mapping to “Hem” or “Open Hem”
Material – Set mapping to “Stretchout”
Production
In the production tab, choose the machine and set the “Linked Component” to the coil or flat sheet. Then set the production default location and check the box under “Manufacture By Default”.
Special Trim Pricing Calculation Breakdown
Coil Sales Price * UOM Quantity = Stretchout Price
Special Trim Build Detail
To view the special trim pricing breakdown on a line, click the folder icon > Build / Assembly > Build Detail
Pricing And Discounts
If the current LF price for a coil is still needed for resale, but that price is not calculating special trims correctly, add a
nonexclusive pricing level
on the coil. Set the coil unit of measure on the price level to the same one on the special trim, add a negative discount to mark it up, and check the box beside “Use Pricing Discounts When Used as a Component” to have that price level apply when it is used as a component.
The component price is rounded based on the component item’s rounding level. The components are totaled, then rounded to the special trim rounding level. To ensure accurate pricing, set the coil
rounding precision
to “0.0001”.
Multiple Special Trim Prices On The Same Coil
To have multiple special trim prices from the same component, additional TIP units of measure can be set up.
Once that is set up, price levels for the additional TIP UOMs can be set up.
Then set the unit of measure on the special trim to be the new TIP unit of measure.
Replacement Product
The replacement product on a standard trim can be set to a special trim code, so that if a user needs to make changes to the trim profile they can swap the item on the order. If the standard trim has a model drawing, it will select that
model drawing
for the special trim and open the trim draw screen to edit it. When selecting a new replacement product, it will now remove the previous trim drawing from the line.

#### How To Do A Physical Inventory

How To Do A Physical Inventory – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
How To Do A Physical Inventory
The purpose of the Physical Inventory feature is to reconcile the actual inventory with the reported inventory in Paradigm. Different companies will do physical inventories on different schedules, but an annual inventory is common.
Physical Count Summary
This physical inventory consists of a few basic steps:
Make sure all transactions for the counted products are up to date. For example, ensure that all products that have been received are marked as
received on their purchase invoices
, any shipped orders have been invoiced and posted, and any production builds that have been completed are marked as such. If the transactions for the item are not up to date prior to completing the physical count process, the inventory amount will be off after those transactions posted.
Determine the order in which the inventory will be counted, such as by
category
or by
shelf
, and print the physical inventory worksheet(s) for the selected products.
Count the physical items in stock, then write the actual count on the printed physical count sheet.
Enter the actual counts into Paradigm. This can be done by
importing an Excel sheet
or entering them through the physical count worksheet in Paradigm.
If a physical inventory is being done for
lot tracked items
, check out this FAQ for some differences in the process:
Physical Count with Lots
Physical Count Checklist
Before beginning a physical count, be sure to go through the steps in this list:
Post invoices that have been shipped or picked up.
Receive vouchers
that have been received.
Complete production builds that have been manufactured.
Make arrangements to get the counts entered and analyzed as soon as reasonably possible.
Determine the order in which the inventory will be counted, such as by
category
or by
shelf
, and print the physical inventory worksheet(s) for the selected products.
Decide whether the “Add Current Units Pulled To Worksheet Quantities” option will be used when analyzing the worksheet.
If that option will not be used, add the
pulled units
into the physical count.
Create
Physical count worksheets are the basis for the inventory adjustments that will be created. Worksheets from a given date will be aggregated to produce the actual physical inventory of a product, and the system inventory will be adjusted to match. Note that a product that is on two physical count sheets on the same day, the counts from both sheets will be added together to produce the actual quantity in stock.
Go to Inventory > Physical Count Worksheets and create a new worksheet.
Then choose the employee ID and warehouse ID.
Next add the products to be counted. This can be done by entering the items manually,
importing them from an excel sheet
, or using the
bulk add
feature.
Information on how to import using an excel sheet can be found here:
Excel Imports On Physical Count Worksheets
The print format is shown below.
If
Fulfillment Pro
is
being used, a
units pulled
number can be added to the report to help make identifying this quantity easier.
Pulled items can be skipped in the counts, and the “Add Current Units Pulled To Worksheet Quantities” option will be used when analyzing the worksheet.
If that option will not be used, add the
pulled units
into the physical count.
If
Fulfillment Pro
is not
being used, the reported physical count needs to include the
units received
as well as inventory that has already been gathered.
If units have been pulled from the shelf and are staged, ready for delivery, those units must still be included in the physical count.
To enter the actual inventory values into Paradigm, the values should be typed into the “Quantity” column. The “Quantity on Shelf” column is provided for comparison purposes, to show what is listed in Paradigm as the value on hand.
Lock The Worksheet
Once the products have all been counted, reference the “Physical Inventory Count” report to find the actual count in hand writing and enter it on the sheet. Take careful note of the
Unit of Measure
field to make sure that the correct units are being counted.
After all of the product counts have been entered, lock the worksheet and click “Confirm”.
Locking the worksheet tells Paradigm that the physical count worksheet is finalized, and ready to be used as the basis for an inventory adjustment.
After the worksheet is locked a large red locked status will appear in the top of the screen.
A worksheet can be unlocked after it has been locked, but inventory adjustments created from the worksheet must be deleted.
If lines have been processed on a physical count analysis, the following messages will be shown when unlocking the sheet:
Details Locked!
– Some lines have already been processed. This worksheet should not be unlocked unless the inventory adjustment has been deleted.
Are You Sure?
– Only continue if the related inventory adjustment has been unposted and deleted.
Physical Count Analysis
Physical count analysis takes the finalized Physical Count Worksheets and produces inventory adjustments to actually affect inventory. As well as totaling all worksheets from the selected date, it also factors in the
units received
and the inventory transactions that occurred after the physical count worksheet date to ensure the correct quantity is entered on the adjustment.
Warehouse Quantities
After completing the physical count worksheet(s) and locking them, the next step is to perform a “Physical Count Analysis”, which can be done by going to Inventory > Physical Count Analysis or by clicking the button from the worksheet.
If there are unposted invoice lines, the following message will be shown:
There are X unposted invoice lines for these products. These have been included in the units pulled. It is recommended that these invoices be posted before using the physical count analysis.
Choose the date of the worksheet to analyze and then click calculate. All locked physical count worksheets from the selected date will be aggregated and used to create adjustment quantities.
Only Adjust Counted Lots
If checked, when adjusting
lot-based products
, only the lots included in the worksheets will be adjusted. Any lot not included in a worksheet will keep its current stock quantities.
If un-checked, all lots for the selected products will be adjusted to zero if they are not included in the worksheet.
Count Unposted Build Lots as Sold
If checked, when adjusting
lot-based products
, any lot assignments on un-posted builds will get added into the adjusted quantity to prevent the stock from being subtracted twice.
If un-checked, lot assignments on un-posted builds will be ignored, so the worksheets must include those in their count to get the correct number. (Or the count must be done when there is no production in progress.)
Add Current Units Pulled To Worksheet Quantities
Checking this box will include units pulled in the stock calculation on the analysis. This allows the user to count only the units on the shelf and ignore any items that have been pulled from inventory via
Fulfillment Pro
. If
Fulfillment Pro
is not in use, this option
will not
work, and pulled units need to be included in the physical count worksheets that are created.
If there are 10
units in stock
, with 7 units counted and 3
units pulled
When not utilizing this option, units pulled must be included in the entered physical count worksheets (in this case, the worksheet would need to be entered for 10 units) to ensure accurate inventory.
This will only work if the
units pulled
has not changed since the count was made.
To account for this if the
units pulled
have changed since it was last made, the amount pulled will need to manually be added into the number on the physical count sheet.
Select the option called “Items with Worksheet Qtys” or “Items Without Worksheet Qtys” and then optionally filter the data by Vendor ID,
Warehouse ID
Category
, and/or
Sub-Category
. “Items with Worksheet Qtys” will be used most of the time, the only time that “Items Without Worksheet Qtys” is used is for an end of year inventory count. It can be used to find items that have a quantity in Paradigm, but weren’t counted on the sheet.
Then click the green plus button beside “Adjustment ID”
to create a new adjustment on the right side of the screen, or select an existing unposted adjustment from the dropdown.
If an item was added to an adjustment via the physical count analysis and then another worksheet was created for that item for that same date, it will now show the following note beside that line in the analysis:
The worksheet quantity has changed after this item was added to the adjustment! Adjustment Qty: X Worksheet Qty: X You may need to remove this item from the adjustment and re-calculate the worksheet analysis.
Adding Items to the Adjustment
The next step is to add the results of the Physical Inventory Count Analysis to the adjustment. Verify the listed “New Adjusted Qty” values are reasonable, then click “Add All” to add all the items on the list to the selected inventory adjustment. Alternatively, select the checkbox beside individual items to add the adjustment and click “Add Selected”.
After the “Add”
button is pushed, the record is transferred to the adjustment on the right side of the screen.
To remove a record from the adjustment, click the “X” on the left column or click the “Remove All” button to remove all the items. The record(s) will then be returned to the left side of the screen.
After adding the lines to the adjustment, the physical count analysis screen can safely be closed, without losing progress.
Post the Adjustment
The next step is to “Post” the adjustment, which can be done by clicking on the “Adjustment ID” link to directly open the adjustment, or by finding the adjustment ID from the Inventory Adjustments list.
Finally, Post the adjustment.

#### Physical Inventory Count with Lots

Physical Inventory Count with Lots – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Physical Inventory Count with Lots
Physical inventory count with lots is very similar to a regular
physical inventory count
, except for the couple differences listed below.
Create Physical Count Worksheets
Printing a Physical Inventory Sheet
To print physical inventory count sheet for lot tracked items, first create physical count worksheet.
Add the lot tracked items and then print out the “Physical Inventory Count” report.
Importing An Excel File
The excel sheet must be set up without headers, with the product ID in the first column, count in the second column, and the lot name in the third column like the example below:
After filling in the Excel file, go to Inventory > Physical Count Worksheets and click the green plus button.
From there, click the “Import Lot Items” button at the top.
Then choose the file to import and it will be added to the sheet in Paradigm. Be sure the employee ID and warehouse ID are correct and click the save button.
Adding Items to the Adjustment
Only Adjust Counted Lots
If checked, when adjusting lot-based products, only the lots included in the worksheets will be adjusted. Any lot not included in a worksheet will keep its current stock quantities.
If un-checked, all lots for the selected products will be adjusted to zero if they are not included in the worksheet.
Add Units For Lots on Unposted Builds To Worksheet Quantities
If checked, when adjusting lot-based products, any lot assignments on un-posted builds will get added into the adjusted qty to prevent the stock from being subtracted twice.
If un-checked, lot assignments on un-posted builds will be ignored, so the worksheets must include those in their count to get the correct number. (Or the count must be done when there is no production in progress.)
Add Current Units Pulled To Worksheet Quantities
Checking this box will include units pulled in the stock calculation on the analysis. This can be used so that the inventory count is accurate, even after invoices are posted.
This will only work if the units pulled has not changed since the count was made.
To account for this if the units pulled have changed since it was last made, the amount pulled with need to manually be added into the number on the physical count sheet.

#### Excel Imports On Physical Count Worksheets

Excel Imports On Physical Count Worksheets – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Excel Imports On Physical Count Worksheets
This FAQ will go over how to import items and counts onto physical count worksheets.
To add items using an excel sheet, set up the sheet like the examples below. The excel sheet must be set up without headers, with the product ID in the first column, and the count in the second column. The entered count should be in terms of the item’s base unit of measure (for example, if you track inventory of screws by bag, then the count should be in terms of bags, not eaches).
Products Without Counts
For products that do not have counts yet, add the product IDs in the first column and a zero in the second column.
Products With Counts
To import products that have counts, add the product IDs in the first column and the count in the second column. If the items on the sheet were already imported with zero counts, importing them again with a count will enter a new record for it on the sheet. It is recommended to delete the worksheet with zero counts and import the counts on a new one.
Lot Tracked Products
To import
lot tracked products
, the excel sheet must be set up without headers. The product ID in the first column, count in the second column, and the lot name in the third column like the example below:
Importing
Once the sheet is ready, go to the worksheet and click the “Import” button at the top. Then choose the file to import and it will be added to the sheet in Paradigm.

#### Receiving Material

Receiving Material – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Receiving Material
This FAQ will go over how to receive material in Paradigm. It is important to receive the material into the inventory as soon as possible after it has arrived, so that Paradigm shows that it is available for sale. See this FAQ for information on receiving in Fulfillment Pro:
Fulfillment Pro: Receiving
Go to Accounts Payable > Purchase Invoices and click the green plus button to create a purchase invoice.
Once the vendor is selected on the purchase invoice, the open purchase orders for that vendor will appear. Select the POs that are being received and click “Add POs” to add them to the purchase invoice.
Then fill in the amount that was received in the “Pcs Rec” column. Note that double clicking the “Pcs Rec” column or selecting the line and pressing “R” will fill in the full received amount. If only the partial amount was received for an item, enter the partial amount. The amount received will be deducted from the quantity ordered for the next purchase invoice.
Once that has been filled in, click the “Receive” button to mark the shipment as received. This will update the amount in “
Qty Received
” column on the item.
To unreceive the order, click the button that now says “Un-Receive”.
Line Total
Double clicking the total column on a line will display a pop up for the line total to be entered. This will set the total cost on the line and calculate the cost per piece. Any difference will be added to the “Other” field. The difference can be caused by a rounding difference, commonly caused by a large cost that has more decimals than are available on the detail lines.
Posting
The invoice can be posted once all the final costs are entered.
Once it is posted, the amount will be updated to the “Qty in Stock” column on the item. More information on inventory columns can be found here:
Inventory Count Columns
Information on setting the standard cost can be found here:
Set Inventory Standard Cost

#### Inventory Import & Export

Inventory Import & Export – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Inventory Import & Export
This FAQ will go over how to use the inventory import and export features in Paradigm. Note that it is an administrative process that can cause expansive issues quickly with improper usage, so be very careful when using this feature.
The “Inventory Bulk Import/Export” permission is required for this.
Export
To export inventory items, to go the Inventory list and filter it down to the items to be exported.
Then click the “Export Filtered” button at the bottom.
Choose the type of data to be exported. Each of these tables contain different types of inventory data; more information on each one can be found here:
Inventory By Warehouse
Assembly
Unit Measure
Price Levels
Special Prices
Production
Production Default
Alias
Substitution
Inventory Vendor
Inventory Attributes
Inventory Groups
Item Images
Then select the fields to be exported. If only the selected fields are showing, uncheck the “Only Show Selected” box.
To save the selected fields as defaults, click the “Save as Defaults” button. If this is done, the next time items are exported the default fields will already be selected.
After that choose the export format, name the file, and select where it should be exported to.
Import
To import data into Paradigm, correct column names must be used; a list of those can be found here:
Column Names For Inventory
Column names should be list out in the top row with the data in the rows following it. Columns that have blank headers will be skipped. If any product IDs on the sheet match product IDs in Paradigm, the data from the sheet will be used to update the information in Paradigm.
Updates can also be made based on just the vendor number (strVendorNumber), as long as the vendor ID (strVendorID) is included in the import as well. If two product IDs have the same vendor number, the imported changes would be made to both items.
Importing New Items
When importing new items, be sure to set up a template item in Paradigm. Information from the template item will be used if it is not specified in the import file.
After the file is ready and the template item is set up, go to System > Inventory Import or select the “Import” button from the inventory list.
Then choose the data type being imported.
After that choose the file, select “Add new Inventory Items only” or “Update Existing Inventory and add New Items.” if items are being updated and added, and select the template item.
Update Existing Items
When updating data on existing items, only include the columns that are getting changed.
After the file is ready, go to System > Inventory Import or select the “Import” button from the inventory list.
Then choose the data type being imported.
After that, choose the file, select “Update existing Inventory only”.
Errors
If any errors occur during the import, an excel file will be created with error messages for the items that didn’t imported correctly.

#### Set Inventory Standard Cost

Set Inventory Standard Cost – Paradigm ERP by Paragon – Documentation
Home
NEW!
Set Inventory Standard Cost
Home
Inventory and Pricing
Set Inventory Standard Cost
This FAQ will go over how to set a new inventory standard cost based on the purchase invoice received cost.
It is best used for hardware items where the costs (and prices based on the markup) are best to be kept up to date with current costs. This can help ensure that pricing is kept up to date as costs fluctuate.
Setting Standard Cost from a Purchase Invoice
Once a purchase invoice is posted, the “Set Inventory Standard Costs” button will be enabled.
Clicking on Set Inventory Standard Costs opens the window for updating standard costs. In this window, the table includes columns for the “Received Cost” and the “Standard Cost”. If updating the item’s cost will result in an increase, the Standard Cost will have a green background. If updating will result in a decrease, the Standard Cost will have a red background.
Select the rows that should be updated and select “Update Costs”.
If an item appears in the list multiple times with different costs, Paradigm will select the highest cost to show in the Standard Cost column.
Show Special Order Items
The check box “Show Special Order Items” allows the user to choose whether inventory items show in the list that set to
Create Purchase Orders by Default
Set Inventory Standard Cost For A Single Line
The standard cost can be set on the line by viewing the line item options and selecting the “Set Standard Cost” button. Then choose to set the “Standard Cost” or “Standard Cost 2”.

#### Inventory Quick Adjust

Inventory Quick Adjust – Paradigm ERP by Paragon – Documentation
Home
NEW!
Inventory Quick Adjust
Home
Inventory and Pricing
Inventory Quick Adjust
This FAQ will go over the inventory “Quick Adjust” button on inventory items and the lot management screen. This allows for quickly creating an inventory adjustment for a given product or lot. The GL account set for “Adjustment Offset” in the
Default GL Accounts
will be used by default.
See these FAQs for information on other quick inventory adjustments:
Inventory Quick Build
Production Coil Split
Inventory Item Quick Adjust
Quick Adjust can be used on an inventory item by clicking the button in the header.
This can also be found in the “Warehouse Stock” tab on the item. If this button is used, it will automatically set the warehouse for the button that was selected.
The product ID will be automatically filled in, enter the new amount or difference of pieces and any other needed information. Once that is entered, click “Adjust” and the inventory adjustment will be created.
After the adjustment is created, a toast message will be shown and will show a button to open the adjustment.
Lot Quick Adjust
Quick Adjust can be used on a lot by clicking the button shown by the lot.
The product ID will be automatically filled in, enter the new amount or difference of pieces and any other needed information. Once that is entered, click “Adjust” and the inventory adjustment will be created.
After the adjustment is created, a toast message will be shown and will show a button to open the adjustment.

#### Change A Batch Of Items To Stock Or Non-Stock

Change A Batch Of Items To Stock Or Non-Stock – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Change A Batch Of Items To Stock Or Non-Stock
This FAQ will go over how to set a batch of items to stock or non-stock.
Inventory Adjustment
If setting the items from stock to non-stock, the first step is to do an inventory adjustment to set the stock to zero.
A physical count worksheet can be used to do this in bulk:
How To Do A Physical Inventory
Export Items
First,
export
the items that need to be adjusted from the inventory list. Include the “StrItemClass” column.
After the items are exported, set the new
item class
. The “Track Inventory” setting on the item class will control whether or not the items will be set to track stock. Changing the item class will also update the default GL accounts on the item.
After those changes are made,
import
that file into Paradigm to apply the changes.

#### Custom Options

Custom Options – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Custom Options
Model options are all designed to prevent the user from needing to create a new product code for products that have very few differences from another product. They also allow standardization of data entry for non-stock products that have many attributes that need to be specified. Information on machine options can be found here:
Machine Options
If model options are going to be used, the ‘Model Options’ field should be added to most forms (see
Changing Form Layouts
).Items are assigned to particular models by selecting a model in the item’s ‘Detail’ tab. New models can be created by selecting the gear icon.
From there, new models can be added or deleted. The settings for how often the model options appear are here too.
These options cannot be used to alter an item’s assembly. The same components will be used to create the product no matter what options are selected. For example; custom options may be used to specify a list of available colors for a panel that is special ordered, but they cannot be used to specify a list of available colors for panels that are produced as each color of panel needs to take stock out of a different coil code.
Creating
Custom Options
Custom options can be created or deleted from an item’s detail tab by clicking on the gear icon beside the model number.
Then go to the custom options tab. Here the custom options can be created, edited, and deleted.
Sort – The order the options will appear on the list.
Option – The name of the custom option when it appears on the list. Each option name must be unique per warehouse. (the same ID could be used twice if on separate warehouses.)
Description – A description of the custom option
Option Set – A set of all the values allowed for that option. If no option set is given, the value will not be limited to any list. Info on creating option sets can be found below.
Default Value – The default option that is applied from the option set.
Warehouse ID – The warehouse ID option will be available from.
Tag to Replace – A value that will get replaced with the actual option value selected by the user, anywhere the tag appears in the description. For example “Product Color: [COLOR]” would become “Product Color: Blue” if the user selected “Blue” as the option value.
The line will be highlighted in red if no products that use this model option have the tag in their descriptions and orange if some of the items are not.
Format – The format that the option sets are in. The format options are: text, integer, decimal, or date.
Once that has been filled out, click the “Save” button and those custom options will now appear for that model.
To delete a custom option from the list, click the red “X” beside it.
Pop Up Behavior
The behavior for the model option can then be set.
Suppress option popup –
A popup will not appear when the item is added to an order, but the options can still be accessed by clicking on the icon beside the description.
Ask for options for every line –
This will bring up the popup in the description every time the item is added to an order.
Always copy options from previous line –
This can only be selected if the “Ask for options for every line” check box is selected. This will still bring up the popup and it will fill in the option that was selected for the previous line.
Suppress the popup asking to copy options to other lines that had the same original options –
This will suppress the pop up asking to copy options to other lines that had the same original options, when the selected option is being changed on a line.
Using
Custom Options
Custom model options can be set when entering a line on an order or a quote. A pop up will appear depending on the behavior settings that were set when the options were created. From here, just select the value from the list and click accept.
Then the dollar adder will be applied and the description will change to the value selected if the place holder was added like below.
Creating Option Sets
Option sets can be created by clicking on the “Option Sets” button from the model creation window.
First name the new options set in the “Option Set” box.
Then type in the options, description, and dollar adder if needed. This is can be something like a list of colors or a Yes/No. Once that has been filled out, click “Add Set”.
To edit an existing option set, select it from the “Go to Option Set” dropdown.
Common Use Cases
Pitch
One way that custom options are commonly used is for pitches, so that it can be specified at the time of the order. The pitch will then be displayed in the description so that it can be produced according to what the customer needs.
To start, create or use an existing model number. Then go to the “Custom Options” tab and set the default value to 4 (Most pitches are 4:12), choose a tag to replace in the description, and change the format to “Integer”.
Edit the sales description by adding the tag and putting “:12 Pitch” beside it, like the example below.
Reverse Run
Another way that custom options are commonly used is for reverse run panels, so that it can be specified at the time of the order. “(Reverse Run)” will then be displayed in the description so that it can be produced according to what the customer needs.
To start, create or use an existing model number. Then go to the “Custom Options” tab and choose a tag to replace in the description.
Then create an option set to choose “(Reverse Run)” and set a dollar adder if needed.
Edit the sales description by adding the tag, like the example below.

#### Change an Item’s Average Cost

Change an Item’s Average Cost – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Change an Item’s Average Cost
From time to time, it may become necessary to adjust the average cost of an item. Average cost is a calculated field based on the transactions for the item, so a transaction will need to be created to adjust the cost. This is best done via a two-line inventory adjustment.
Create a new inventory adjustment.
On the first line, select the product to adjust. By default, the new quantity is loaded as zero. This is what we want, as it will remove all inventory on the product, at the old average cost.
On the second line, select the product ID again.
Set the new quantity to the original inventory quantity for that item (or the current actual inventory).
Set the “Cost Each” on the second line to the desired average cost.
Post the adjustment.
Note that since the second line of the adjustment builds on the first line, it’s important to enter the items in this order. If you need to change things on the adjustment lines after they are initially entered, it is best to delete both of the lines and add them back in, rather than editing the existing lines.
More than one item’s average cost can be corrected on a single adjustment.
The cost difference between the original average cost and the new average cost will hit the GL to offset to the previous transactions that posted to create the original average cost, correcting the GL totals as of the date of the adjustment.
In the example below, the average cost for an item is changed from 78.20 each to 75.00 each.

#### Edit Pricing

Edit Pricing – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Edit Pricing
The Edit Pricing tool allows a user to edit costs and prices for items without having to open each item individually in Paradigm. The Edit Pricing Tool can be accessed on the Inventory List tab in Paradigm. In the list, it will be helpful to filter out most of the inventory items that will not be affected in the changes to be made. To use the Edit Pricing tool once the list of items has been filtered, click ‘Edit Pricing’ down beside the print buttons.
For batch changes of 10,000 lines or more, an Export/Import is recommended:
Inventory Import & Export
This will bring up the Inventory Pricing Sheet. From here there are different options for changing the prices of items.
To manually edit the numbers, click on the check box for that column. Then highlight the value to be changed and then type in the new value.
Uncheck the columns that will not be edited to make them not be a tab stop when editing many rows.
Changing the amount in a given column will change any other columns that are affected or would have an affect on that column. For instance if the pricing method is Markup Standard Cost, then changing the Percent/Amount column will adjust the sales price.
Change many items at once. To do this, check the box next to each item that is to be updated. If the items that have been filtered down into the list are all to be changed, the quickest way to select them all is to click the check mark right above the list.
Once the items have been selected, there will be several different options of adjustments to be made.
When changes are applied, the rows will turn green if the new value is above the original value, or red if it is below the original value.
The “Show Original Values” checkbox can be used to compare the original numbers.
It is important select the check box in the header of the column to be edited to designate it as the column to be adjusted.
Options for Multiple Adjustments
Percent – The amount in the value field will increase any dollar amount by the percentage that is put in the Value field. It will effect the percentages differently though. Instead of increasing a percent by the new percent, it will add the new percent to the old one.
Exact – This will change all of the values in the selected column to the the value in the Value field.
Assembly – Calculates the price or cost based off of the assembly components.
Assembly Price – The sales price of all the assembly components.
Assembly Cost – The cost of all the assembly components.
Assembly Cost2 – The cost 2 of all the assembly components.
Cost Based – This option will appear when the Cost or Cost 2 columns are selected.
Average Cost – The average cost of the product.
Current Cost – The current cost of the product.
Standard Cost – The standard cost of the product.
Standard Cost2 – The standard cost 2 of the product.
Assembly Cost – The cost of all the assembly components.
Assembly Cost2 – The cost 2 of all the assembly components.
Once the changes have been made click ‘Save and Close’ to make the changes. If there are any issues, ‘Undo All’ will revert the changes that have been made.

#### Edit Pricing Levels

Edit Pricing Levels – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Edit Pricing Levels
The Edit Pricing Levels tool allows a user to edit costs and prices for price levels without having to open each item individually in Paradigm. The Edit Pricing Levels Tool can be accessed on the Inventory List tab in Paradigm. In the list, it will be helpful to filter out the items that will not be affected in the changes to be made. To use the Edit Pricing Levels tool after the list of items has been filtered, click ‘Edit Pricing Levels’ at the bottom of the screen beside the print buttons.
This will bring up the Inventory Pricing Levels Sheet. From here there are different options for changing the prices of items.
To manually edit the numbers, click on the check box for that column and then highlight the value to be changed and then type in the new value.
Uncheck any columns that will not be edited to make them not be a tab stop when editing many rows.
Note: Changing the amount in a given column will change any other columns that are affected or would have an affect on that column. For instance if the pricing method is Markup Standard Cost, then changing the Percent/Amount column will adjust the sales price.
To change many items at once, check the box next to each item that is to be updated. If the items that have been filtered down into the list are all to be changed, the quickest way to select them all is to click the check mark right above the list.
Once the items have been selected, there will be several different options of adjustments to be made.
When changes are applied, the rows will turn green if the new value is above the original value, or red if it is below the original value.
Note: It is important select the check box in the header of the column to be edited to designate it as the column to be adjusted.
Filtering to a Price Level
To filter down to a certain price level, select one from the drop down at the top of the “Level” column.
Options For Multiple Adjustments
Percent – The amount in the value field will increase any dollar amount by the percentage that is put in the Value field. It will effect the percentages differently though. Instead of increasing a percent by the new percent, it will add the new percent to the old one.
Exact – This will change all of the values in the selected column to the the value in the Value field.

#### How to Create a “Manufactured to Order” Inventory Item

How to Create a “Manufactured to Order” Inventory Item – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
How to Create a “Manufactured to Order” Inventory Item
This FAQ will go over over how to make a “Manufactured To Order” (MTO) item.
Create The Inventory Item
1.
Create the base inventory item to be produced. See
Creating an Inventory Item
Adjust the Assembly / Kit
2.
Go to the Assembly/Kit tab. Check the ‘Custom Assembly’ checkbox if you want the assembly to be editable per order, or leave it unchecked if you want the assembly to stay the same. Select the ‘Manufactured to Order’ Assembly type. Add the products or service charges needed in order to produce the product. Be sure that you select the correct units of measure, and normally the lengths should match the length of the parent item.
Adjust the Production
3.
Go to the production tab and enter the machine that is needed to manufacture your item. On the far right, specify whether this item should default to manufacture. Both of these things will need to be set up for each warehouse location that the product will be produced.
4.
Create an order using your inventory item and release it to manufacturing to verify that your setup is correct.
For more information on Assembly types, click
here
Manufactured To Order Set Up Issues
No Components
If the item assembly type is set to “Manufactured To Order” but no components are entered, the following warning will be shown: A ‘Manufactured To Order’ item must have at least one component or it will not be releasable on an order.
If the item is attempted to be released to manufacturing, the following message will be shown:
There is a missing build on line: X, product: [PRODUCTID]. This is commonly caused by items that are set to be manufactured not having any components.

#### How should Inventory Price Levels be set up and how do they work?

How should Inventory Price Levels be set up and how do they work? – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
How should Inventory Price Levels be set up and how do they work?
Price Levels
For each inventory item, you can add multiple pricing levels with discounts or markups for that product. Each of these levels can be added multiple times for different quantity ranges and
units of measure
. A price level can either be exclusive or nonexclusive.
Nonexclusive Price Levels
are available for every customer, regardless of that customer’s
pricing method
. These are normally used to create
quantity price breaks
, where anybody who buys a certain amount of that product will get a discount. If a price level is marked as nonexclusive, the level column will be disabled, since changing the level won’t have any effect.
Exclusive Price Levels
Exclusive price levels only apply to
customers
that have that particular price level assigned to them.
Exclusive Price Level Example
Note that any one of ninety-nine price levels could be in this item any number of times, depending on the complexity of pricing that is required.
Naming Price Levels
Naming price levels can be done by going to System >
Company Preference
> Pricing Level Names
From here, the level and new name can be entered.

#### Inventory Component Substitution

Inventory Component Substitution – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Inventory Component Substitution
Setting up Inventory Component Substitution
To set up an alternative that can be used in place of another component, open and edit the component that is going to be replaced. Next navigate to the “Alternative” tab. There are two sections on this tab, one is for item aliases and the other is for substitutions.
In the substitutions section, click the gear icon at the top.
This will open a form that will calculate the quantity of the new component that is used per unit of measure of the old component.
From this form, start by selecting or entering the product being used for the substitution.
Next, select a unit of measure and enter a quantity for the substitute component that it will take to replace the quantity of the original component.
In this case one linear foot of the substitute coil is being used to replace one linear foot of the original coil.
Note: Selecting ‘Mutual’, will add the component which you are currently adding a substitute to, as a substitute for the component which is currently being added as a substitute.
Next, click “Create Substitution” and the substitute component will be added to the substitute list.
Now the substituted component will appear in any lists where substitution is available for the original component.
Substitution Formula
The formula for calculating substitutions is: SubstitutionQuantity / (OriginalItemQuantity * OriginalItemUnitMeasureQty)
In the example below it would be: 2 / (10 * 1) = 0.2
Using Component Substitution
Where can I use inventory substitution?
Inventory Quick Build
To use inventory substitution while using the Quick Build feature, click “Edit Build”
The form will then expand and show a list of the components used in the build.
Click on the pencil beside the component for which a substitution is being made. The component substituted here cannot be the same as the same product as the finished good.
Using the Substitution Tool
From the item details list, click the pencil icon beside the component to be substituted. Then select another component that has been set up for substitution for the original component. The substitute quantity that is brought in can be edited if it needs to be.
Then click replace and the new component will be added in place of the original.

#### Lot-Based Inventory (Track Coil Inventory By Coil ID)

Lot-Based Inventory (Track Coil Inventory By Coil ID) – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Lot-Based Inventory (Track Coil Inventory By Coil ID)
This FAQ will cover how to use lot-based inventory in Paradigm.
Setting an Item to Track Lots
The first step to start tracking lots on your inventory is to set the item in Paradigm to track lots. Go to the detail tab of the product, and check the box beside “Use Lots”.
This can only be done when the stock is 0 on that product for all warehouses.
If there is stock
, use an inventory adjustment to remove it before setting the product to track lots.
Then use a second inventory adjustment to bring the stock back into the product.
Before posting it, click the box icon highlighted above to assign the inventory to lots.
Costing Method
Costs can be calculated one of two ways for lot-based item: Average cost across all inventory in that product, or FIFO based for just the selected lot. This can be set on the items general tab. Selecting FIFO will make the cost that posts when a lot is used to match the cost at which the product was posted. If this is not needed, select “average cost”. Do note that average cost is not based on just the selected lot, it is based on all of stock in the product, regardless of lot. More information on cost methods can be found here:
Cost Methods
Creating a New Lot
When creating a new lot, four fields are shown that are designed to record information about lot-tracked coils.
These fields are length (in feet), width (in inches), weight (in pounds), and grade. Production can use these measurements in the “
Quick Adjust
” form to assist with calculating new coil weights when slitting one coil into another coil. Additionally, each lot has a place for notes that will appear anywhere the lot is selected to be used.
Adding New Lot Grades
To add lot grades, go to the “Lot Grades” list in the Lot Management screen.
Using Lots
After setting an item to track lots, every sale, purchase, or use of that item will require a lot to be defined. Learn more about defining lots on this FAQ:
Lot Selection Form on Orders
. If lots have not been defined, posting that transaction will be disallowed until lots have been entered. When adding inventory to stock, an existing lot can be selected to add inventory to that lot, or a new ID can be entered to create a new lot. When selling inventory, an existing lot will need to be selected.
Physical Inventory
When doing an entire
physical inventory on a lot-tracked item
, a physical count worksheet can be used. These lines will be summarized into a single line on an inventory adjustment through the physical count analysis, but the line will not be editable on the adjustment due to data constraints. Adjustments can also be made manually for lot-tracked items, with one lot going on each line (just be sure to edit the “Quantity Diff” column instead of “New Qty” when adjusting more than one lot.)
Production
will require the user to enter the lot ID used if they produce an item out of a lot-tracked component (or if they produce a lot-tracked item, they will be prompted to create a new lot ID), for example, when they produce a trim out of a lot-tracked coil.
If completing multiple builds by using the check box to complete all builds for an order, checking the “Use this lot for all remaining builds” in the lot selection popup will use the selected lot for all remaining builds. This is available in the
work order list or rollformer production
If the machine in production is already set to prompt for coil information, the coil information popup will be bypassed if the item tracks lots, instead only giving them the popup for lot ID.
Lot Depletion
Throughout Paradigm and Production, every place that records lot usage has a checkbox for “depleted” or “end of coil”.
This checkbox is used to record when a coil or other lot item is completely used, but some inventory still shows on that lot in Paradigm. This can commonly happen on coils, due to waste, manufacturing mistakes, variations in coil thickness, etc. Marking an item as “depleted” will cause it to show up in the lot depletion form, which is accessed through the “Lot Depletion” button on the inventory adjustment form.
Adding Depleted Lots to an Inventory Adjustment
To adjust depleted lots to zero, go to Inventory > Inventory Adjustment and click on “Lot Depletion” in the header.
From there, select the lots to adjust to zero and click “Add Lots” to add them to the inventory adjustment.
Lot Management
Lots can be managed by going to Inventory > Inventory Lots
From here, enter the Product ID of the lot tracked item, and it will bring up a list of its lots. Clicking on a lot will show a list of the transactions it was used for in the section on the right.
Missing Lots
If an invoice includes a product set to track lots but no lot has been assigned, posting will be blocked. An error message will show with the text, “Insufficient lots have been specified for items on this Invoice. Please correct before Posting.” This error informs the user which products have lot tracking turned on, and which lines on the invoice the products appear on.
To correct the issue, the Lots dialog can be opened by clicking the Lots button in the invoice ribbon, and the correct lots can be assigned to the lot tracked items. The invoice will not allow posting until all products are either correctly assigned to lots or lot tracking is turned off for them.

#### SWI Coil Maintenance

SWI Coil Maintenance – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
SWI Coil Maintenance
This FAQ will go over how to manage or add coils in SWI. Coils need to be entered, or jobs for those coils will not be exported and a task with the following error text will be shown:
Exported Failed for Build [Build ID] on order [Order Number] Verify that coil [Coil ID] is configured in the SWI Marxman database Paradigm Service Log File may contain more information
More information on SWI can be found here:
SWI Marxman Integration
SWI Coil Management
Start by going to the Paradigm Portal URL and logging in with a Paradigm login. This URL can be found in System >
Company Preferences
> Setup > Paths.
Go to Production Export dropdown > SWI Coil Maintenance.
From there existing coils can be edited or the “Add Coil” button can be used to enter additional coils.

#### How To Manage Manufactured Item Pricing

How To Manage Manufactured Item Pricing – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
How To Manage Manufactured Item Pricing
This FAQ will go over the recommended process for calculating and updating
manufactured to order item
pricing. This is done by using cost-based pricing with markups for all manufactured items or each profile. When coil costs change, the updated cost will adjust the sales prices of the manufactured items after it has been cascaded using the “Edit Pricing” tool.
Calculate Pricing
To calculate pricing, use a
pricing method
based on cost and choose a mark up percent. The sales price will automatically be updated whenever the cost is updated.
Updating Cost
To update the cost for manufactured items, the “
Edit Pricing
” tool can be used. Filter the list down to the items that are going to be updated. Select the “Cost” column and then “Assembly Cost” from the drop down. This will update the cost to the total assembly cost for the item.
This should be done after coil costs are updated, to cascade the updated cost down to the manufactured products.
The reason cost is updated based on the “Standard Cost” instead of the “Current Cost”, is to prevent mistakes or very minor changes in cost from affecting pricing. For example if one color was bought in higher than the other colors, using current cost would cause that color to be more expensive. Or if a cost was entered incorrectly, items would be priced much too high or low without notice.

#### Warehouses

Warehouses – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Warehouses
This FAQ will go over how to set up warehouses in Paradigm ERP.
Warehouses
To access this form, go to Inventory > Inventory Settings > Warehouses.
Then select a warehouse from the dropdown to view the details.
Multi Warehouse
If an additional warehouse is needed, see the instructions here:
Multi Warehouse
. Note that warehouses
cannot
be deleted, so make sure to enter the information correctly when creating it.
Contact
Paragon Support
if the license key needs to be changed to allow multiple warehouses.
Direct Ship
The Direct-Ship check box should be checked if the product is going to be shipped directly from the vendor to the customer.
Remit-To Message
The remit-to message can be set per warehouse, to display a separate remit-to message on reports based on the warehouse that the transaction is for. If needed, contact
Paragon Support
to adjust transaction reports to reference this field.
Warehouse Locations
The
locations
on the right will be used in Fulfillment Pro to give a more exact location for a product. See this FAQ for more information on where those are set up:
How To Add Locations To A Warehouse

#### Managing Customer Favorite Trim Drawings

Managing Customer Favorite Trim Drawings – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Managing Customer Favorite Trim Drawings
This FAQ will go over how to find, edit, and use trim drawings that were saved for a customer. More information on saved trim drawings can be found here:
Company Standard Trims
. More information on the trim draw tool can be found here:
Trim Draw
Previous drawings are accessible within Paradigm in two places:
Through the Customer Details page
Within a Quote or an Order
Accessing Drawings from the Customer Page
Customer drawings are accessible from the customer page. Any drawing linked to an order for that customer will appear in the selection window that opens when the user clicks on the button “Edit Favorite Trims” in the ribbon of the customer page.
This opens the Trim Draw page. In this situation, the drawings that will load are any that have been associated with a transaction for the selected customer. When the Paradigm Trim Design opens, it shows the selection window that enables choosing a drawing, “Please choose a drawing.”
Favorite Drawings
By default the selection window opens with the “Favorite Drawings” tab selected. Favorite Drawings shows drawings that have been marked as favorites. From this tab, a drawing can be edited, or removed from Favorites.
Recent Drawings
The tab to the left, Recent Drawings, shows the history of all drawings created for the customer. This is useful for browsing past designs that have been drawn for the customer. Any drawing in the list can be added to Favorites by clicking the “Favorite” button beside it. To edit a drawing that is in the list of Recent Drawings, the drawing must be added to Favorites, and then the “Edit” button can be used from the Favorites tab.
Standard Trims
The tab to the right, Standard Trims, displays the company’s standard trim drawings stored in the database. Managing standard trims is not able to be done if the Trim Draw page was opened from the Customer page. Any drawing from this list can be used as a starting point for working on a custom drawing that can then be saved to the customer’s Favorite Drawings list.
Adding or Editing Favorites
Follow these steps to edit a recent drawing.
Open the Recent Drawings tab and locate the drawing.
Click “Favorite” to add the drawing to the customer’s Favorites list.
Open the Favorite Drawings tab.
Click “Edit” beside the drawing to be modified. This closes the selection window and loads the drawing into the Trim Draw window.
Apply the necessary edits in the Trim Draw tool.
When finished, click “Save” in the title bar.
Choosing “Save New” will create a new favorite drawing without affecting the original.
Choosing “Overwrite” will replace the favorite drawing with the edited version.
Accessing Drawings From Quotes and Orders
To add a saved trim to a quote or order, add the special trim code with the corresponding material and click the trim draw button.
Then click “Saved Drawings” and to “Recent Drawings” or “Favorite Drawings” to find the customer special trim drawing. Click “USE” beside the trim drawing.
Favorited drawings can also be added by clicking the “Attachment” button and then selecting a trim drawing.

#### How to Create an Inventory Item

How to Create an Inventory Item – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
How to Create an Inventory Item
When creating an inventory item it is recommended to find a similar existing inventory item and duplicate it. Follow to steps below to learn how to do that, or how to create an item from scratch.
Check out these FAQs for specific instructions on the following cases for adding items:
Adding A New Line Of Colors
Import New Profiles
Creating An Item by Duplicating an Existing One
1.
Go to Inventory > Inventory List
2.
Then search for the product that is going to get duplicated.
. Open the item and click the “Duplicate” button in the header.
4.
Then enter the product ID for the new item. This Product ID will be used throughout Paradigm Accounting to reference this inventory item.
5.
Finally, apply any other needed settings or information for the inventory item. Those fields and settings are explained below.
Creating an Inventory Item from Scratch
1.
Go to Inventory > Inventory List
2.
Then click the green plus icon.
3.
Then enter the new product ID. This Product ID will be used throughout Paradigm Accounting to reference this inventory item.
4. Optionally, choose a “Template Product” to base the new product on. Except for the Product ID, all information including description, pricing, and assembly will be copied from the template product to the new product. A strategy for maximizing efficiency is to choose a product in the inventory list that is as similar as possible to the intended product and use that as the Template Product for the new product.
Finally, apply any other needed settings or information for the inventory item. Those fields and settings are explained below.
Inventory Item Options/Settings
The
Stocked Inventory
check box in the “Detail” tab will keep track of the units in stock every time the selected item is bought or sold.
The
Vendor Number
field is used to enter your vendor’s part number of the inventory item. This will be the number that prints for the vendor ID or the default vendor. This way you can use your Product ID number to create a Vendor Purchase Order but when you print that purchase order it will use the part number that the Vendor will recognize.
The
Vendor ID
drop down field is used to assign a vendor to the inventory item. You can select any vendor that has been previously entered by starting to type the Vendor ID or click on the drop down arrow to search vendors.
The
Vendor Site
drop down is used to assign one of the selected vendor’s sites to the item. These must be set up in the Vendor before they can be added to an item.
The
Item Class
drop down is an important field that must be assigned properly. This field tells Paradigm Accounting how to update your General Ledger. If you click on the gear beside the item class drop down, it will display the list of item classes and their settings. When you select an item class from the drop down box you will notice that the GL Accounts Impacted area will automatically fill in the Account IDs used to update your general ledger. The Item Class you select will also set the Track Stock status on the detail page. Learn more about item classes here:
Item Classes
The
Category
drop down is used to assign a category to each inventory item. This can be helpful if you want to group certain inventory items with others. Click on the gear icon beside Category: to open the window where you can add, delete or modify inventory categories.
The
Sub-Category
can be changed by clicking on the sub-category drop down. Click on the gear icon beside sub-category: to open the window where you can add, delete or modify inventory sub-categories.
The
Manufacturer
drop down is used to enter the manufacturer of the inventory item.
The
Sales
Description
field is used to enter a detailed description of the inventory item. The description field is a memo field, which is capable of storing up to 64,000 characters of text.
The
Purchase Description
field is the description that will show up on purchase transactions. If this field is left blank, the Sales Description will be used.
The
Additional
Info
field is used to enter an additional description of up to 50 characters. This is typically used for internal information or just to enter short notes about the main description.
The
Color Set
field can be used to assign a particular set of color options to this item. These colors will be available when adding this item to an order. Click the gear icon beside the color set drop down to open a color set builder and make new color sets or edit existing ones.
The
Color
field can be used to assign one particular color to this product. Click the gear icon beside the color drop down to open a list of colors and add new ones.
The
GL Accounts Impacted
area will display the three Account IDs that are automatically filled in when you select an Item Class. You can override any of these accounts and change them to any other valid GL Account. If the item is nonstock, the inventory account will not be shown.
The
Standard Cost
field is the cost you assign as the inventory items standard cost. This cost is used by default when adding the product to most transactions. It is also the cost the Pricing Method field will use to calculate the Sales Price if you enable it.
The
Standard Cost 2
is an additional, optional cost column that can be used for more detailed pricing structures. It often is used to contain the “replacement cost” or “bulk cost” of the item.
The
Current Cost
field is used to track the items actual cost you paid for it. The Current Cost will get updated automatically every time you create and post a Purchase Invoice that uses this inventory item. This will always let you know what your latest cost is for this inventory item. Since this field constantly changes when you create Purchase Invoices the Standard Cost is provided to hold a constant cost that only changes when you change it. The Current Cost field will be locked after you are finished entering a new inventory item.
The
Pricing Method
The
Discount Sensitivity Code
can be used to specify the maximum customer discount that is allowed to be applied to this item. Click the gear icon to set up new sensitivity codes.
The
Rounding Precision
is used to specify the rounding that is used for this item. Paradigm always rounds up to the next increment when calculating the price. For example, if the rounding level was 0.50, a calculated price of 2.01 would be rounded up to 2.50.
The
Sales Unit Measure
is the unit of measure that will be used by default on sales transactions. Click the gear icon to add or edit units of measure. More info on units of measure can be found here:
Unit of Measure Set Up
The
Purchase Unit Measure
is the unit of measure that will be used by default on purchase transactions.
Minimum Margin
can be set to give users a prompt if they define a discount or sales price that goes below the minimum discount percentage. See also:
Minimum Acceptable Margin
The
Fee Item
check box is used to specify items that have no cost, and need no voucher links when included on a job invoice when using invoices for WIP jobs.

#### Pricing Methods

Pricing Methods – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Pricing Methods
How do the different pricing methods calculate the sales price?
For any pricing method, enter either the percent/dollar amount or the sales price and the other field will be calculated for you.
None
The sales price must be manually entered and is not dependent on any other fields.
Fixed Dollar Amount
The sales price is calculated as: standard cost + a dollar amount
Markup Standard Cost
The sales price is calculated as: standard cost * (1+specified percent)
Markup Standard Cost 2
Same as markup standard cost, but based on standard cost 2.
Percent of Margin
The sales price is calculated as: cost/(1-markup %)
And do note, only values between 0 and 99 can be used for percent of margin.
Percent of Margin Cost2
Works the same as percent of margin, but is based off of standard cost 2.
Discount Sales Price (only available in certain forms)
The sales price is calculated as the sales price for that item minus the discount percent specified.
Discount Dollar Amount
(only available in certain forms)
The sales price is calculated as the sales price for that item minus the discount dollar amount given.

#### Company Standard Trims

Company Standard Trims – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Company Standard Trims
Standard trim profiles allow a Paradigm user to use previously created trim drawings as a springboard toward making a custom design for a customer. For instance, say a customer wants ridge cap for a job that he is doing. After adding your
custom trim code
to the order detail and opening the trim draw program, click ‘Recent Drawings’ and then the Standard Trims tab. Here all the standard trim profiles that have been created will be available for use. From the list, locate the profile and click ‘Use.’ The profile will be opened in the background and can be tailored to customers specific needs, then saved to Paradigm. More information on trim draw can be found here:
Trim Draw
. More information about how to view and edit trims that have been saved on a transaction for a customer can be found in the knowledge base FAQ article
Managing Customer Favorite Trims
Creating Company Standard Trims
Creating a company standard trim creates a standard trim profile that can be used for any custom trim drawing, eliminating the need to redraw standard trims every time a customer needs one of them modified slightly.
The first step in creating a standard trim profile is to go to the trim drawing admin. This can be found by going to System > Company Preferences > Trim Drawing Admin.
Then login as a user with drawing admin privileges and draw a profile that is to be used as a standard drawing. When the trim has been drawn, click the save button at the top of the page.
Next, give the profile a name that is descriptive and unique to distinguish it from other profiles that may be similar. (While filling in the description field is not required, it may be helpful to the salesperson.)
This form also gives a user the ability to save the current trim to a folder of his choosing, as a way of organizing and grouping certain trims together. Typically, one folder is created per panel profile, with the purpose of grouping the trims associated with that profile together.
Finally, click ‘Save New’ to save the profile for use.
While entering standard drawings, time can be saved by using previous drawings to create profiles that are similar to those that have been drawn previously. To do this, click ‘View Saved Trims’ at the top of the trim draw page and find the profile that is to be used as a basis for the next profile.
When doing this, it is important not to overwrite the profile that you are using for a basis. So it is a good idea to, as soon as the previously drawn profile opens up, click ‘Save,’ give it either a temporary name or its final name, and then click ‘Save New’.
After that is done, you can make the desired changes, click “Save” again, give it a new name (if necessary), and then click ‘Overwrite’ to save it as new profile.
Editing a Previous Profile
To edit a previous profile, click on ‘View Saved Trims.’
Then click ‘Edit’ beside the one to make changes to.
After making these changes, click ‘Save’ and ‘Overwrite.’

#### Inventory Color List

Inventory Color List – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Inventory Color List
This FAQ will go over the inventory color list in Paradigm.
The inventory color list can be found by clicking the gear icon beside the color drop down:
Entering Colors
Here the color name and abbreviation can be filled in. The abbreviation should be filled in so that it can be shown in the color switcher, more information on that can be found here:
Color Switcher
The display and text color can be chosen here as well, this is used for displaying in the product finder. More information on that can be found here:
Product Finder
Selecting A Color On An Item
Once the colors are entered, select the corresponding color from the drop down on the item.

#### Import New Item Colors

Import New Item Colors – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Import New Item Colors
This FAQ will go over how to add new item colors in Paradigm.
Color List
Follow this FAQ to add the new color to the color list in Paradigm:
Inventory Color List
New Items
Export Template Items
To add a new color, start by filtering the inventory list to an existing color that has the same gauge and grade as the new color. Information from the existing items will be used on the new items, unless new information is specified on the import sheet.
More information on importing and exporting in Paradigm can be found here:
Inventory Import & Export
If the coil code has been created already, be sure to exclude that from the export or remove it from the sheet after it has been exported. If the coil code has not been created, it can be left on the sheet and imported like the rest of the new color items.
After the list is filtered, click the “
Export Filtered
” button at the bottom of the list.
Choose Inventory and click “Next”.
The following fields are required:
strProductID,memDescription, and strColor
. Any other fields that need to be adjusted can be selected as well.
After that select “.xlsx” as the export format and click “Finish”.
Item Import Sheet Changes
The first step to prepare the sheet for import, is to create a new column called “TEMPLATEID” and copy the exported IDs into that column. Paradigm will use these columns as a “Template” item when importing.
Next, highlight the “strProductID” column and use the
Find and Replace
feature in Excel (Ctrl + H).
In the “Find what:” field, enter the existing abbreviation.
In the “Replace with:” field, enter the new color abbreviation and click “Replace All”.
In the example below the black abbreviation (BK) was replaced by the new color, ash gray (AG).
Be sure that the new abbreviation is not already be used in Paradigm, and that the new IDs do not match with any product IDs in Paradigm.
After that, highlight the “memDescription” and “strColor” columns. Then use the
Find and Replace
feature again to replace the existing color (Black) with the new color (Ash Gray).
The final step is to make any other needed adjustments (sales price, cost, etc.), and then add a column called “ysnDiscontinued” and set it to “1” for every row.
This sets the items as
discontinued
and will prevent the items from being used before the set up is completed.
Import Into Paradigm
Once the changes are complete, save the sheet and close it. Then go to Inventory > Inventory Settings > Inventory Import
Choose Inventory and click “Next”.
Then select the file and choose “Add new Inventory Items only”.
The template product can be set to any product ID, as the template item will be used from the “TEMPLATEID” column on the sheet.
Set As Non-Discontinued
If the items have assembly components that need to be updated, follow the next section and then complete this step.
Once the components are updated, the items can now be “
un-discontinued
“.
To do this, use the list of new product IDs in a sheet and add a column called “ysnDiscontinued” and set it to “0” for every row.
Then
import
that into Paradigm to complete the new color import.
Update The Assembly Components
If the items are manufactured, the component on the item will need to be changed since the imported items used the assembly information from the template items.
To do this, start by filtering the inventory list to the new color items.
Be sure to check the “Included Discontinued” checkbox.
After the list is filtered, click the “
Export Filtered
” button at the bottom of the list.
Choose “Assembly” and then click “Next.
The following fields are required:
cntID, strProductID, strComponent, memDescription
After that select “.xlsx” as the export format and click “Finish”.
Assembly Import Sheet Changes
Open the exported sheet highlight the “strComponent” column.
Then use the
Find and Replace
feature to change the color abbreviation to the correct component.
Then highlight the “memDescription” and use the
Find and Replace
feature to set it to the new color.
Once the changes are complete, save the sheet and close it. Then go to Inventory > Inventory Settings > Inventory Import
Choose “Assembly” and click “Next”.
Then select the file and choose “Update existing assemblies only”.

#### Inventory Turnover

Inventory Turnover – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Inventory Turnover
This FAQ will go over how to view inventory turnover in Paradigm
Inventory Turnover
To view the inventory turnover report, go to Inventory > Inventory List > Reports drop down.

#### Charts

Charts – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Charts
This FAQ will go over the available chart options in Paradigm.
Inventory Item Charts
Charts can be found by opening an inventory item and going to the “Charts” tab. The chart will show up to 3 years of data.
Sales History
– Shows “Units Sold” or “Average Price Per Unit” for all posted invoices.
Purchase History
– Shows “Units Received” or “Average Purchase Cost” for all posted or received vouchers.
Usage History
– Shows “Units Sold” for all posted Build Assemblies,
Credit Memos
Finance Charges
General Assemblies
, Invoices, and
VAMs
Inventory List Charts
Charts from the inventory list can be used to generate a chart for the list of items that the inventory list is filtered to. Up to 2,000 product IDs can be included when running the chart.
Customer Charts
Customer charts can be found by opening a customer and going to the “Charts” tab. The chart will show up to 3 years of data.
Sales History –
This chart shows “Total Sales” or “Average Sale” for all posted invoices for this customer.
AR Aging History –
This chart shows “Ending Balance” or “Change in Balance” for all posted invoices for this customer.
Vendor Charts
Vendor charts can be found by opening a vendor and going to the “Charts” tab. The chart will show up to 3 years of data.
Purchase History –
This chart shows “Total Purchases” or “Average Purchase” for all posted vouchers for this vendor.
AP Aging History –
This chart shows “Ending Balance” or “Change in Balance” for this vendor.

#### Inventory Import: Inventory Groups

Inventory Import: Inventory Groups – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Inventory Import: Inventory Groups
This FAQ will go over importing and assigning inventory group data in Paradigm. The groups here are used in the
Product Finder
. More information on inventory import & export can be found here:
Inventory Import & Export
The inventory groups table contains the data that is shown here:
The assigned inventory groups table shows the data here:
More information on inventory groups can be found here:
Product Finder
Importing New Group Assignments
When importing new inventory group assignments, be sure to include the following columns: product ID (strProductID) and the group ID (intGroupID).
Group IDs can be found going to Inventory > Inventory Settings > Inventory Groups > Export Groups
When importing select the “Add new group assignments only.” to only add new records, or select “Update existing and add new group assignments.” to update existing and add new records.
Be sure to not include the intGroupAssignmentID column when adding new data. Including the intGroupAssignmentID will update the existing record that has that ID, more information on that in the next section.
Updating Existing Group Assignment Data
The easiest way to set up an import sheet is to first export the product IDs you want to make changes to. Be sure to include the intGroupAssignmentID and product ID column.
Then make the desired changes in the sheet and then import it back into Paradigm. Be sure to choose the “Update existing group assignments only.” option when importing.
Example
A common use case for this is updating the assigned group.
First export the intGroupAssignmentID, intGroupID, and strProductID.
Change the group in the sheet and then import it into Paradigm.

#### Lock/Unlock Prices

Lock/Unlock Prices – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Lock/Unlock Prices
This FAQ will go over how to lock/unlock prices in Paradigm.
Lock/Unlock Prices
The lock prices button can be to lock all of the prices in the order. This will prevent the “
Update Prices
” button from effecting the prices.
Unlocking prices will allow the prices to be effected by the “Update Prices” button and will remove any custom set pricing.
Lock Prices On Individual Lines
To lock prices on a line, check the box in the “Set Price” column.

#### Slit Coils

Slit Coils – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Slit Coils
This FAQ will go over how to set up slit coils in Paradigm.
Assembly Set Up
Go to the slit coil item set the assembly type to “Manufactured To Order”. Then add the parent coil to the assembly and set the unit measure to “LF”.
In a case of a 42″ coil being made into two 20″ coils, the pieces entered on the line would be 0.5, since there are 2 child coils being produced off of the main coil.
Production Set Up
In the production tab, add the slitter machine and set the linked component to the parent coil.

#### Short Length Panels

Short Length Panels – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Short Length Panels
This FAQ will go over how to set up short length panels with an upcharge in Paradigm.
Short Length Panel Items
This can be done by create separate “Short Length” panel items, and then setting a
minimum length
on the regular panel code. If a fee is going to be applied on panels under 36″, the minimum length on the regular panel code should be 3′.
The short length item can then have a higher price per LF, or an
addon item
for a “Short Item Fee”.

#### Duplicate Price Levels

Duplicate Price Levels – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Duplicate Price Levels
This FAQ will go over how to duplicate price levels in Paradigm. This is typically used when a customer uses an existing price level but needs specific adjustments made for them.
More information on price levels can be found here:
Inventory Price Levels
Editing Price Levels
. If price levels need to be deleted, contact Paragon support.
Duplicate Price Level
To duplicate a price level, go to System > Data Utilities > Inventory > Duplicate Price Level
Select the “Level to Duplicate” and the “Level To Create”. Only price levels that are not being used on any items will be shown in the “Level to Create” drop down. Only price levels that are being used will be show in the “Level To Duplicate”.
In this example, Level 2 was duplicated off of Level 1.

#### Inventory Import: Inventory Attributes

Inventory Import: Inventory Attributes – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Inventory Import: Inventory Attributes
This FAQ will go over importing inventory attribute data in Paradigm. More information on inventory import & export can be found here:
Inventory Import & Export
Importing New Inventory Attribute Data
When importing new inventory attribute data, be sure to include the following columns: attribute name (strName), product ID (strLink), and the attribute value (strValue).
When importing select the “Add new attribute records only.” to only add new records, or select “Update existing and add new attribute records.” to update existing and add new records.
Be sure to not include a cntID column when adding new data. Including a cntID will update the existing record that has that ID, more information on that in the next section.
Updating Existing Attribute Data
The easiest way to set up an import sheet is to first export the product IDs you want to make changes to. Be sure to include the cntID column.
Then make the desired changes in the sheet and then import it back into Paradigm. Be sure to choose the “Update existing attribute records only.” option when importing.
Example
A common use case for this is updating attribute values for product ID.
First export the cntID, attribute name, product ID (strLink), and the attribute value columns.
Change the value then import it back into Paradigm.

#### Updating Trim Stretchouts

Updating Trim Stretchouts – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Updating Trim Stretchouts
This FAQ will go over how to update trim stretchouts and any other assembly information.
Export Trim Items
To start, filter the inventory list down to the trim items that are going to have the stretchouts updated.
More information on importing and exporting assembly information in Paradigm can be found here:
Inventory Import: Assembly
After the list is filtered, click the “
Export Filtered
” button at the bottom of the list.
Choose “Assembly” and then click “Next.
The following fields are required:
cntID, strProductID, strComponent, memDescription, decPcs, and strUnitMeasure.
After that select “.xlsx” as the export format and click “Finish”.
Stretchout Update
Open the exported sheet and
filter
the sheet down to the coil component assembly records.
All other rows can be ignored or removed.
Then change the “DecPcs” column to the updated stretchout.
Once the changes are complete, save the sheet and close it. Then go to Inventory > Inventory Settings > Inventory Import
Choose “Assembly” and click “Next”.
Then select the file and choose “Update existing assemblies only”.

#### Import New Profiles

Import New Profiles – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Import New Profiles
This FAQ will go over how to add new trim profiles in Paradigm.
Export Template Items
To add a new trim profile, start by filtering the inventory list to an existing profile that has the same availability and pricing as the new profile. Information from the template items will be used on the new items, unless new information is specified on the import sheet.
More information on importing and exporting in Paradigm can be found here:
Inventory Import & Export
After the list is filtered, click the “
Export Filtered
” button at the bottom of the list.
Choose Inventory and click “Next”.
The following fields are required:
strProductID and memDescription
. Any other fields that need to be adjusted can be selected as well.
After that select “.xlsx” as the export format and click “Finish”.
Item Import Sheet Changes
The first step to prepare the sheet for import, is to create a new column called “TEMPLATEID” and copy the exported IDs into that column. Paradigm will use these columns as a “Template” item when importing. If a row in the TEMPLATEID column is left blank, the template item selected during import will be used.
Next, highlight the “strProductID” column and use the
Find and Replace
feature in Excel (Ctrl + H).
In the “Find what:” field, enter the existing abbreviation.
In the “Replace with:” field, enter the new profile abbreviation and click “Replace All”.
In the example below the Base Angle abbreviation (BA) was replaced by the new profile, Ridge Cap (RC).
Be sure that the new abbreviation
is not
already be used in Paradigm, and that the new IDs do not match with any product IDs in Paradigm.
After that, highlight the “memDescription” column. Then use the
Find and Replace
feature again to replace the existing profile (Base Angle) with the new profile (Ridge Cap).
The final step is to make any other needed adjustments (sales price, cost, etc.), and then add a column called “ysnDiscontinued” and set it to “1” for every row.
This sets the items as
discontinued
and will prevent the items from being used before the set up is completed.
Import Into Paradigm
Once the changes are complete, save the sheet and close it. Then go to Inventory > Inventory Settings > Inventory Import
Choose Inventory and click “Next”.
Then select the file and choose “Update existing Inventory and add New Items.”.
The template product can be set to any product ID, as the template item will be used from the “TEMPLATEID” column on the sheet.
Update The Assembly Components
After the items are imported, the assembly on the new items will need to be updated for the new profile since the imported items used the assembly information from the template items.
To do this, start by filtering the inventory list to the new profile items.
Be sure to check the “Included Discontinued” checkbox.
After the list is filtered, click the “
Export Filtered
” button at the bottom of the list.
Choose “Assembly” and then click “Next.
The following fields are required:
cntID, strProductID, strComponent, memDescription, and decPcs.
After that select “.xlsx” as the export format and click “Finish”.
Assembly Import Sheet Changes
Open the exported sheet and update the Pcs of the coil component to be the correct width of stretch out for the new trim profile.
Also, be sure to update the Pcs for the bends and hems items as well if necessary. This can be done easily by filtering, see this link for more information:
Filtering Data
Once the changes are complete, save the sheet and close it. Then go to Inventory > Inventory Settings > Inventory Import
Choose “Assembly” and click “Next”.
Then select the file and choose “Update existing assemblies only”.
Set As Non-Discontinued
Once the components are updated, the items can now be “
un-discontinued
“.
To do this, use the list of new product IDs in a sheet and add a column called “ysnDiscontinued” and set it to “0” for every row.
Then
import
that into Paradigm to complete the new profile import.

#### Addon Product

Addon Product – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Addon Product
This FAQ will go over how to set up and use the addon product feature in Paradigm. This feature only affect Accounts Receivable transactions.
Setting Up An Addon Product
To set up an addon product, go to the inventory item’s detail tab. Select the addon product and whether or not to have the addon product match the Pcs entered for the parent product on the transaction by default.
Using An Addon Product
When the parent item is added to a transaction, a pop up will appear with the add on item. The item will be selected by default, and the space bar can be pressed to unselect it. The enter key can be pressed to save the form.
If the item is selected, it will be added as a separate line on the order. When the addon product is a
kit item
, the
comment or bundle line
for that kit product will not be added.

#### Shelf Information Preview

Shelf Information Preview – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Shelf Information Preview
This FAQ will go over the Shelf Information feature in Paradigm. This feature shows where the product can be found in the store or warehouse.
More information on the Shelf assignment tool can be found here:
Shelf Assignment Tool
Column Chooser
To have this feature show, go to column chooser and select “Shelf Information”. More information on the column chooser can be found here:
Column Chooser
Order Screen
After selecting the Shelf Information option in the column chooser, the feature will be shown on product line.
Hovering over this button will show shelves for the product.

#### Low Stock Formatting

Low Stock Formatting – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Low Stock Formatting
This FAQ will go over how Paradigm decides when to format the warehouse ID and quantity available in red.
Warehouse ID
Unreleased Orders
On unreleased orders, if the Pcs Ordered on a line is higher than the Quantity Available the warehouse ID will be highlighted in red.
Released Orders
Editing a Released Line
If the Pcs Ordered on the line is changed, the line is unreleased and the Qty Available will be updated. In the example below, the item has 15 in stock and 10 Pcs ordered which causes the Qty Available to be 5.
If the Pcs Ordered is edited to 17 Pcs Ordered but is not released, the Qty Available will then show 15 since the line is no longer committed. The warehouse ID will also be highlighted red, since there are more Pcs Ordered than the Qty Available.
Units Available
The units available field will be shown in red if it is negative.
Unreleased Orders
On unreleased orders, if the Pcs Ordered on a line is higher than the Quantity Available, the Quantity Available and warehouse field will be highlighted in red.
Released Orders
Editing a Released Line
If the Pcs Ordered on the line is changed, the line is unreleased and the Qty Available will be updated. In the example below, the item has 30 in stock and 15 Pcs ordered which causes the Qty Available to be 15.
If the Pcs Ordered is edited to 32 Pcs Ordered but is not released, the Qty Available will then show 30 since the line is no longer committed. The quantity available will also be highlighted red, since there are more Pcs Ordered than the Qty Available.
Unit Buildable
The units buildable field will be shown in red on a released order if it is negative.

#### Inventory Import: Inventory Vendor

Inventory Import: Inventory Vendor – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Inventory Import: Inventory Vendor
This FAQ will go over importing inventory vendor data in Paradigm. More information on inventory import & export can be found here:
Inventory Import & Export
Importing New Inventory Vendor Data
When importing new inventory vendor data, be sure to include the following columns: product ID (strProductID), vendor ID (strVendorID), unit of measure (strUnitMeasure), vendor site (strSiteName), and vendor number (strVendorNumber).
When importing select the “Add new inventory vendor records only.” to only add new records, or select “Update existing and add new inventory vendor records.” to update existing and add new records.
Be sure to not include a cntID column when adding new data. Including a cntID will update the existing record that has that ID, more information on that in the next section.
Updating Existing Inventory Vendor Data
The easiest way to set up an import sheet is to first export the product IDs you want to make changes to. Be sure to include the cntID and product ID column.
Then make the desired changes in the sheet and then import it back into Paradigm. Be sure to choose the “Update existing inventory vendor records only.” option when importing.
Example
A common use case for this is updating costs for each vendor.
First export the cntID, product ID, vendor ID, and cost columns.
Change the cost then import it back into Paradigm.

#### Color Sets

Color Sets – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Color Sets
This FAQ will go over how to set up and use color sets in Paradigm. More information on colors can be found here:
Inventory Color List
Color Sets
To create a color set, go to an inventory item and click the gear icon beside “Color Set”.
The color set and colors can be added.
Once an item with a color set is added to an order, the color can be selected from the dropdown in the color column.

#### Inventory Import: Substitution

Inventory Import: Substitution – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Inventory Import: Substitution
This FAQ will go over importing substitution data in Paradigm. More information on inventory import & export can be found here:
Inventory Import & Export
This table contains the substitute data found in the alternative tab on an item. More information on that can be found here:
Inventory Component Substitution
Importing New substitution Data
When importing new substitution, be sure to include the following columns: product ID (strProductID), substitute (strSubstitute), quantity (decQuantity), unit measure (strUnitMeasure).
When importing select the “Add new substitutes only.” to only add new records, or select “Update existing and add new substitutes.” to update existing and add new records.
Be sure to not include a cntID column when adding new data. Including a cntID will update the existing record that has that ID, more information on that in the next section.
Updating Existing substitution Data
The easiest way to set up an import sheet is to first export the product IDs you want to make changes to. Be sure to include the cntID and product ID column.
Then make the desired changes in the sheet and then import it back into Paradigm. Be sure to choose the “Update existing substitutes only.” option when importing.
Example
A common use case for this is updating substitutes.
First export the cntID, product ID, and substitute.
Change the substitute in the sheet and then import it into Paradigm.

#### Inventory Import: Alias

Inventory Import: Alias – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Inventory Import: Alias
This FAQ will go over importing alias data in Paradigm. More information on inventory import & export can be found here:
Inventory Import & Export
This table contains the alias data found in the alternative tab on an item. More information on that can be found here:
Set Up UPC Codes And Aliases
Importing New Alias Data
When importing new alias data, be sure to include the following columns: product ID (strProductID), alias ID (strProductID2).
When importing select the “Add new aliases only.” to only add new records, or select “Update existing and add new aliases.” to update existing and add new records.
Be sure to not include a cntID column when adding new data. Including a cntID will update the existing record that has that ID, more information on that in the next section.
Updating Existing Alias Data
The easiest way to set up an import sheet is to first export the product IDs you want to make changes to. Be sure to include the cntID and product ID column.
Then make the desired changes in the sheet and then import it back into Paradigm. Be sure to choose the “Update existing aliases only.” option when importing.
Example
A common use case for this is updating aliases.
First export cntID, product ID, alias (strProductID2), and unit measure.
Change the alias in the sheet and then import it into Paradigm.

#### Inventory Import: Production Default

Inventory Import: Production Default – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Inventory Import: Production Default
This FAQ will go over importing production default data in Paradigm. More information on inventory import & export can be found here:
Inventory Import & Export
This table contains the production default data found in the production tab on an item.
Importing New Production Data
When importing new production, be sure to include the following columns: product ID (strProductID), warehouse ID (strWarehouseID), manufacture default (ysnManufactureDefault).
When importing select the “Add new production defaults only.” to only add new records, or select “Update existing and add new production defaults.” to update existing and add new records.
Be sure to not include a cntID column when adding new data. Including a cntID will update the existing record that has that ID, more information on that in the next section.
Updating Existing Production Data
The easiest way to set up an import sheet is to first export the product IDs you want to make changes to. Be sure to include the cntID, product ID, warehouse ID, and manufacture default columns.
Example
A common use case for this is updating production defaults.
First export the cntID, product ID, warehouse ID, and manufacture defaults.
Change the manufacture default in the sheet and then import it into Paradigm.

#### Inventory Import: Production

Inventory Import: Production – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Inventory Import: Production
This FAQ will go over importing production data in Paradigm. More information on inventory import & export can be found here:
Inventory Import & Export
This table contains the data found in the production tab on an item.
Importing New Production Data
When importing new production, be sure to include the following columns: product ID (strProductID), sequence (intSequence), linked component sort (lngLinkComponentSort), and machine ID (intMachineID).
When importing select the “Add new production steps only.” to only add new records, or select “Update existing and add new production steps.” to update existing and add new records.
Be sure to not include a cntID column when adding new data. Including a cntID will update the existing record that has that ID, more information on that in the next section.
Updating Existing Production Data
The easiest way to set up an import sheet is to first export the product IDs you want to make changes to. Be sure to include the cntID and product ID column.
Then make the desired changes in the sheet and then import it back into Paradigm. Be sure to choose the “Update existing production steps only.” option when importing.
Example
A common use case for this is updating machine IDs.
First export the cntID, product ID, sequence, and machine ID.
Change the machine ID in the sheet and then import it into Paradigm.

#### Inventory Import: Special Prices

Inventory Import: Special Prices – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Inventory Import: Special Prices
This FAQ will go over importing special pricing data in Paradigm. More information on inventory import & export can be found here:
Inventory Import & Export
This table contains the data found in the special pricing tab on an item.
Importing New Special Price Data
When importing new special pricing data, be sure to include the following columns: product ID (strProductID), unit measure (strUnitMeasure), begin date (dtmBeginDate), end date (dtmEndDate), and special price (curSpecialPrice).
When importing select the “Add new special prices only.” to only add new records, or select “Update existing and add new special prices.” to update existing and add new records.
Be sure to not include a cntID column when adding new data. Including a cntID will update the existing record that has that ID, more information on that in the next section.
Updating Existing Special Price Data
The easiest way to set up an import sheet is to first export the product IDs you want to make changes to. Be sure to include the cntID and product ID column.
Then make the desired changes in the sheet and then import it back into Paradigm. Be sure to choose the “Update existing special prices only.” option when importing.
Example
A common use case for this is updating special prices.
First export the cntID, product ID, begin date, end date, and special price columns.
Change the special prices in the sheet and then import it into Paradigm.

#### Inventory Import: Price Levels

Inventory Import: Price Levels – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Inventory Import: Price Levels
This FAQ will go over importing price level data in Paradigm. More information on inventory import & export can be found here:
Inventory Import & Export
This table contains the data found in the price level tab on an item.
How Should Inventory Price Levels Be Set Up And How Do They Work?
Importing New Price Level Data
When importing select the “Add new price levels only.” to only add new records, or select “Update existing and add new price levels.” to update existing and add new records.
Be sure to not include a cntID column when adding new data. Including a cntID will update the existing record that has that ID, more information on that in the next section.
Updating Existing Price Level Data
The easiest way to set up an import sheet is to first export the product IDs you want to make changes to. Be sure to include the cntID and product ID column.
Then make the desired changes in the sheet and then import it back into Paradigm. Be sure to choose the “Update existing price levels only.” option when importing.
Example
A common use case for this is updating discount amounts.
First export the cntID, product ID, price level, and discount columns. Be sure that the price levels have a leading zero as shown in the example.
Then adjust the discount amount for each level and then import it into Paradigm.

#### Inventory Import: Unit Measure

Inventory Import: Unit Measure – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Inventory Import: Unit Measure
This FAQ will go over importing unit measure data in Paradigm. More information on inventory import & export can be found here:
Inventory Import & Export
This table contains the data found on the inventory unit measure form on an item.
Importing New Measure Data
When importing new unit measure data, be sure to include the following columns: product ID (strProductID), unit measure (strUnitMeasure), unit measure quantity (decUnitMeasureQuantity), sort (intSort), and whether or not it is a linear measurement (ysnLinear).
When importing select the “Add new units of measure only.” to only add new records, or select “Update existing and add new units of measure.” to update existing and add new records.
Be sure to not include a cntID column when adding new data. Including a cntID will update the existing record that has that ID, more information on that in the next section.
Updating Existing Unit Measure Data
The easiest way to set up an import sheet is to first export the product IDs you want to make changes to. Be sure to include the cntID and product ID column.
Then make the desired changes in the sheet and then import it back into Paradigm. Be sure to choose the “Update existing units of measure only.” option when importing.
Example
A common use case for this is updating unit measure quantities.
First export the cntID, product ID, unit measure, and unit measure quantities.
Change the unit measure quantity in the sheet and then import it into Paradigm.

#### Inventory Import: Assembly

Inventory Import: Assembly – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Inventory Import: Assembly
This FAQ will go over importing assembly data in Paradigm. More information on inventory import & export can be found here:
Inventory Import & Export
This table contains the data found in the assembly tab on an item.
Importing New Assembly Data
When importing new assembly data, be sure to include the following columns: product ID (strProductID), component (strComponent), description (memDescription), pieces (decPcs), unit measure (strUnitMeasure), feet (decLinearAmount1), and inches (decLinearAmount2) columns.
When importing select the “Add to existing Assemblies only.” to only add new records, or select “Update or add to existing Assemblies.” to update existing and add new records.
Be sure to not include a cntID column when adding new data. Including a cntID will update the existing record that has that ID, more information on that in the next section.
Updating Existing Assembly Data
The easiest way to set up an import sheet is to first export the product IDs you want to make changes to. Be sure to include the cntID and product ID column.
Then make the desired changes in the sheet and then import it back into Paradigm. Be sure to choose the “Update existing assemblies only.” option when importing.
Example
A common use case for this is updating components.
First export the cntID, product ID, component, and description columns.
Change the component ID and update the description in the sheet and then import it into Paradigm.

#### Inventory Import: Inventory By Warehouse

Inventory Import: Inventory By Warehouse – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Inventory Import: Inventory By Warehouse
This FAQ will go over importing inventory by warehouse data. More information on inventory import & export can be found here:
Inventory Import & Export
This table contains the data found on the warehouse stock tab.
Importing
The easiest way to set up an import sheet is to first export the product IDs you want to make changes to. Be sure to include the cntID, product ID (strProductID), and warehouse ID (strWarehouseID) columns. Then make the desired changes in the sheet and then import it back into Paradigm.
Select “Inventory By Warehouse” when exporting/importing changes.
Example
A common use case for this is setting up warehouse locations.
First export the cntID, product ID, and warehouse ID columns.
Then fill in the warehouse locations in a column name “StrWarehouseLocation” and import it back into Paradigm.

#### Cascading Costs from Purchases to Sales for Nonstock Products

Cascading Costs from Purchases to Sales for Nonstock Products – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Cascading Costs from Purchases to Sales for Nonstock Products
This FAQ will go over how costs for nonstock items are cascading from a purchase orders and invoices.
Enabling Cascading Costs
To enable this feature, go to System > Company Preferences > Purchases and check the box beside “Cascade received costs to related sales transactions.”
Cascading Costs
When this is enabled the costs that nonstock items are received at will be cascaded to any related sales transactions, which will assist with keeping costs accurate and result in better margin reporting on invoices. This can be done because nonstock items don’t post cost from the invoice, so the cost on the invoice detail can be changed without affecting the posting of the invoice.
Example
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

#### Rounding Precision

Rounding Precision – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Rounding Precision
This FAQ will go over rounding precision in Paradigm. Information on rounding on pricing levels can be found here:
How Should Inventory Price Levels Be Set Up And How Do They Work?
If the rounding level on the
price level
is different than the rounding precision set here, the rounding on the price level will be used when the price level is applied.
Adjusting Rounding Precision On An Inventory Item
Rounding precision can be adjusted on an inventory item by going to the item’s general tab.

#### Inventory By Warehouse

Inventory By Warehouse – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Inventory By Warehouse
This FAQ will go over the inventory by warehouse list, which can be found by going to Inventory > Inventory by Warehouse.
Each item will be displayed once for every warehouse. The warehouse quantities shown here are the totals for just that warehouse, not the item’s entire inventory. More columns can be added as well such as reorder point, quantity, buyer, location, etc.

#### Category and Subcategory

Category and Subcategory – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Category and Subcategory
This FAQ will go over how to set up categories and subcategories. (Also spelled sub-categories or sub category.)
To start, open an inventory item and click the gear icon beside “Category” or “Subcategory”.
Add new categories or select an existing category to create subcategories for it. You can also go to Inventory > Inventory Settings > Inventory

#### How to Track Mistake Run or Returned Manufactured Items

How to Track Mistake Run or Returned Manufactured Items – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
How to Track Mistake Run or Returned Manufactured Items
This FAQ will go over how to track mistake run or returned manufactured items that are still in stock and available for sale.
There are two ways that this can happen:
Case 1
The wrong product is on the order, and the shop made that wrong item. This is by far the most common case.
Case 2
The correct product is on the order, but the shop made the wrong item.
The invoice shouldn’t exist yet in either case, as it is preferred that the invoices only get created after confirmation of delivery, or when the customer arrives to pick up the product. If the invoice does exist, it would need to be unposted and voided first off.
Mistake Customer
In part of the solution for this, a
MISTAKE
customer is created and then used on the the mistake orders.
Solution for Case 1
For the first case, all that needs to be done is
splitting
the already completed wrong product onto a
MISTAKE
order. In this example, burgundy was added to the order instead of aged copper.
Then put the correct items back on the original order, and release it (or instead put/split the replacement items onto a new order to keep things separate). This would be the same case for both panel and trim.
The “inventory” of mistake trims will be reflected on the
MISTAKE
orders, and their value will already be costed out, because they are already marked completed in Production. The dollar amount on trim is small, and trims are often damaged and discarded anyway, so this process is typically acceptable. Mistake panels would remain in the panel inventory account until the order is converted to an invoice and posted when someone purchases the mistake panel.
Solution for Case 2
For the second case, the production that has been marked completed doesn’t match the product that was actually made, so the build that is marked complete needs to be uncompleted and ran again later. Instead, a build that matches the items that were actually produced needs to be completed.
The process would start in Production’s “
Recently Completed
” tab, where the builds that were marked completed can be found. Uncomplete them, these can simply remain uncompleted to be run again at a later date, as they are the correct items.
Then release an order for the
MISTAKE
customer for the items that were actually produced.
After that is released, immediately go to Production and mark those items as completed to record the production that was already done.
Selling the Mistake Run Product
Once a customer wants to buy the product, switch out the
MISTAKE
customer ID for the ID of the customer buying it.
Lot Tracked Product
Another way this can be done, is by creating
lot
records when a mistake order is placed. To do this, create a lot tracked item for each profile and follow the instructions below.
After that immediately go to the order that was split off and mark it as complete. This removes the order from the “Open Orders” list without invoicing it.
Next, go to production and create a new
quick build
. Put in the the mistake length panel ID and enter total quantity that was made of the mistake item.
Then click “Edit Build” and change the component to the mistake made item by clicking on the pencil icon. Note that the mistake run item will need to be set up as a
substitute
for the placeholder item before this can be done.
Then click “Finish”. Once that is clicked, the lot screen will appear. Fill in the lot information and enter in notes as to what was mistake run.
Viewing Mistake Run Items
To view the mistake run items, go the mistake item and click “Lots”.
This will show the lots that were created for the mistake run items.
Selling Mistake Run Items
To sell the mistake run items, add the lot tracked mistake run item code and select the mistake run product to sell from the lot selection screen.

#### How to Track CondenStop and DripStop

How to Track CondenStop and DripStop – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
How to Track CondenStop and DripStop
This FAQ will go over how to track CondenStop and DripStop in Paradigm. In this example, it will be for tracking CondenStop, but they are done the same way.
There are three different ways this can be done:
Custom Options
Machine Options
, and setting up separate product IDs. Using product IDs allows for stock to be tracked on the CondenStop and DripStop.
Custom Options
Create A Custom Option
Create a
custom option
for the panels. Set it to suppress the options popup so the pop up doesn’t need to be confirmed for every line, but can be accessed if needed.
Name the option “CondenStop” and enter a description. If “CondenStop” is to appear in the description, be sure the add a “Tag to Replace”. Add this tag to the description of the items and when CondenStop is selected it will be added to the description.
Create an option set that has “CondenStop” as an option and add a price adder if needed. This price adder will be added to every linear foot.
Using the Custom Option
Now when the panel is added to an order, the custom option button will be shown in the description.
From here, CondenStop can be selected.
It will then be shown in the description (if the tag to replace was added to the description) and the dollar adder will be added.
Machine Options
This can be used if all the items at a certain machine would be able to have CondenStop or DripStop applied to them.
To set this up, go to Production > Machine List. Then click on the folder icon beside the machine that is getting the options.
Then enter the options and enter a dollar adder if needed.
Separate Product ID
For this to be done, CondenStop or DripStop has to be added to the assemblies of these items.
First, duplicate an existing item and add characters to the ID to signify it has CondenStop or DripStop.
Then go to the assembly of the new item and add the “DripStop” or “CondenStop”.

#### Prioritize Exclusive Pricing Level Even If Price Is Greater

Prioritize Exclusive Pricing Level Even If Price Is Greater – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Prioritize Exclusive Pricing Level Even If Price Is Greater
This FAQ will go over how the company preference “Prioritize Exclusive Pricing Level Even If Price Is Greater” works with other discounts.
To enable this, go to System >
Company Preferences
> Sales > Behavior
When this is enabled, the exclusive
pricing level
will be used even if the price is greater than the non exclusive level or the retail price.
Promotions
When using promotions on an item that has an exclusive pricing level, the pricing level with override the price set by the
promotion
Customer Discounts
When using customer discounts on a item that has an exclusive pricing level, the customer discount will be used if it is lower than the pricing level discount.
Category Discounts
When using category discounts on a item that has an exclusive pricing level, the category discount will be used if it is lower than the pricing level discount.

#### Pick Up Preferred

Pick Up Preferred – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Pick Up Preferred
This FAQ will go over how the “Pick Up Preferred” option for an item works.
To enable this, go to the item’s detail tab.
Now when the
ship via
on an order is set to a ship via that is not a pick up and it is released, and if there is an item on the order that is set to “Pick Up Preferred”, the following warning will appear:
Pickup Only! One or more lines on this order are set as pickup only. Are you sure you want to ship them anyway?

#### Default Lengths

Default Lengths – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Default Lengths
This FAQ will go over how to set up default lengths for an item.
To start go the item’s unit of measure settings. More information on setting up units of measure can be found here:
Unit of Measure Set Up
From there the default feet (Def Amt 1) and inches (Def Amt 2) can be set.
Now when the item is added to an order, it will default to that length.

#### Disallow Release

Disallow Release – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Disallow Release
This FAQ will go over how to set an item to not be allowed to get released to manufacturing. The item will still be able to be added to an order or quote, but it won’t be able to be released. It also won’t allow release if the item is used as a component of a manufactured item on the order. This is commonly used for non-color items that are used to quote a product without specifying color.
To enable this, go to the item’s Detail tab and click the box beside “Disallow Releasing on Orders”.
When a user adds the item to an order and tries to release it, the following error will appear:
[Product ID] on line 1 may not be released to manufacturing.

#### Multi Warehouse

Multi Warehouse – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Multi Warehouse
This FAQ will go over how to set up and use multiple warehouses in Paradigm. This can be used to keep inventory amounts separated for different locations and warehouses. Contact
Paragon Support
to add a second warehouse, so that we can help make sure everything is set up correctly.
How to Add a New Warehouse
To add a new warehouse to Paradigm, follow the FAQ here:
Warehouses
After a new warehouse is created, it can be used in the forms listed below.
Default Warehouses
The default warehouse field on the item’s detail tab can be used if the item should always come from a certain warehouse, such as a manufactured item where the machine to produce it is at the selected warehouse. Clicking the advanced button here will display the pop up that is covered in the next section.
Advanced Default Warehouses
Advanced default warehouse set up can be found by going to Inventory > Inventory Settings > Default Warehouses. Only use the default warehouses pop up if an item has complicated defaults. (e.g. – If sold from warehouse A, pull from B, but if sold from C then pull from D)
Default Warehouse – User Preferences
The default warehouse can also be set by going to System > User Preferences > User Defaults > Warehouse/Salesperson.
Inventory Transfers
Inventory can be transferred between different warehouses using the inventory transfer form. More information on inventory transfers can be found here:
Inventory Transfers
Inventory by Warehouse
The new warehouse will be shown in the Inventory by Warehouse form, which can be found by going to Inventory > Inventory by Warehouse
Each item will be displayed once for every warehouse. The warehouse quantities shown here are the totals for just that warehouse, not the item’s entire inventory.
Inventory Count Columns
The warehouse will appear on a row on an item in the inventory count columns on the Warehouse Stock tab. More information on the inventory count columns can be found here:
Inventory Count Columns
Keep Stocked –
If this is not checked the item will never show up in
Purchasing Agent
, otherwise it will be shown if it is included in the chosen filter. In the Store Management Tool, it will make price change labels not get printed for that item at that location.
Transfer Lead Times
Transfer lead times can be set up for the different location combinations. More information on that can be found here:
Production Lead Days

#### LM2 Rounding On Price Levels

LM2 Rounding On Price Levels – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
LM2 Rounding On Price Levels
The LM2 rounding column can be used when creating price levels with linear units of measure. More info on price levels can be found here:
How Should Inventory Price Levels Be Set Up And How Do They Work?
The LM2 rounding level will round the price up to the inch increment set here, without affecting the length. The price is changed by a negative discount being applied to the sales price.
For example, if the LM2 rounding level was set to 6 like the example above, a 10′ 2″ piece’s price would round up to the price of 10′ 6″ piece.

#### Sensitivity Codes

Sensitivity Codes – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Sensitivity Codes
Sensitivity codes can be created to set the maximum discount that can be applied to an item from a “Discount Sales Price” customer pricing method or from a category discount. Users that are set to “Administrator” level 1 can override these codes. This does not apply to price levels, special prices, or manually-set prices. More info on customer pricing types can be found here:
Customer Pricing Types
To create a sensitivity code for an item, first open the item, then select the gear icon beside “Disc. Sensitivity Code” or select an existing one from the dropdown list.
If a new one is being created, fill in the max discount and description, then close the window to save it.
Then select it from the drop down and apply it to the item.

#### How to Discontinue a Batch of Items

How to Discontinue a Batch of Items – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
How to Discontinue a Batch of Items
To discontinue a batch of items, they must first have their stock set to zero. Once that is done, a list of those items on an excel sheet must be imported in a format that sets them to discontinued.
Inventory Adjustment
First, check and make sure there is no received quantity for the items that will be discontinued.
Then, go to Inventory > Inventory List and filter the list down to the products to be discontinued. Then export the product ID column, more information on exporting can be found here:
Inventory Import & Export
Remove the column headers and add a column with a 0 in each row, as shown below.
Then create a new physical count worksheet and import the worksheet. More information on importing Excel sheets can be found here:
Excel Imports On Physical Count Worksheets
Once the is imported, complete the rest of the physical count process and post the inventory adjustment. More information on that can be found here:
How to do a Physical Inventory
Discontinue Import
Once the inventory has been adjusted, open the excel sheet and add a column header for the product IDs called “strProductID”. Then in the second column, label the header as “ysnDiscontinued”, and then put a “1” in those rows like the example below.
Once that has been completed, save the excel file. Then go to Inventory > Inventory Settings > Inventory Import
Then choose “Inventory”.
Then choose the file and select “Update existing Inventory only.”
After that, check a few items to ensure that they are marked as discontinued.

#### Price Change History

Price Change History – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Price Change History
This FAQ will over the price history list on an item in Paradigm.
Price History
The price change history can be viewed by going to an item’s detail tab.
This can be used as a basis for reports showing prices that have changed since a certain date. It can also be useful when using the
shelf label printing tool

#### Inventory Count Columns (Warehouse Quantities)

Inventory Count Columns (Warehouse Quantities) – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
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

#### Item Classes

Item Classes – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Item Classes
What Is An Item Class?
Item classes are used to quickly and easily assign default values to inventory items. Classes assign defaults to three things: posting accounts, whether or not the item tracks stock, and the custom tax settings.
Item Classes are also a summary of several different G/L Account codes. They contain the Inventory, Cost of Goods Sold (COGS), and Sales accounts for that class whether it be Stock or Non-Stock. Each inventory item in Paradigm has these same attributes, and will inherit its default values from the class to which it is assigned.
Put another way, the item classes essentially control how the inventory, COGS, and sales amounts for items sold or purchased appear on your GL and financials. How detailed or summarized this data is comes down to your preferences. Keep in mind that the classes simply affect the way the amounts appear on your financial report (Balance Sheet, Profit and Loss, etc) and there are different ways to get into more detail when reporting on item sales/costs.
The way the classes are broken down should have actionable value at a glance. If there are too few accounts and it’s too broad or if there are too many accounts and you get lost in the details, it isn’t helpful either way. A common structure we see contains the following basic classes:
Class
Inventory Account
Sales Account
COGS Account
Coils
Coil Inventory
Metal Sales
Metal COGS
Manufactured Metal
Finished Goods
Metal Sales
Metal COGS
Resale
Resale Inventory
Resale Sales
Resale COGS
Special Order
Resale Inventory
Special Order Sales
Special Order COGS
OTHER
[CUSTOM]
Some of the non-stock expense items like packaging materials, truck maintenance, utilities, etc. can be assigned to a “Custom” or “Other” Item Class. For example, you could have an Inventory item called “SHRINKWRAP” that would be in the “Other” class, with its COGS account set to the “Packaging Materials” G/L Code. In other words, we don’t need one class per account an item could possibly post to – we can handle one-offs individually at the item level. Classes are most useful for larger sets of items that have a large impact on your financials.
How to Create a New Item Class
First, go to Inventory and select the item for which to create a new item class.
Then from the General tab, select the gear icon beside “Item Class”.
Alternatively, go to Inventory > Inventory Settings drop down > Item Classes
Then select the New Class button from the pop up, or click the folder icon to edit tax settings for an item class. To delete an item class, click the red “X”. Note that an item class cannot be delete if it has been assigned to an item.
Then enter the new item class’s name, and a template item class from which to copy the settings.
The new class will copy the posting account, whether or not to track stock, and the custom tax settings from the template class.
If a class is non-stock, be sure the inventory and COGS account get set to the same COGS account.

#### How to Create Model Attachments

How to Create Model Attachments – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
How to Create Model Attachments
This first use for this feature allows for the creation of multiple commonly-used trim profiles that are not stocked to save time spent by an employee in entering an order. This is used for custom trim pieces only. Another use case is applying a drawing for standard trims. One drawing can be created and used by the same type of standard trims. These drawings can then be setup to print on reports, but will not show up when entering them onto orders.
If the standard trim has a model drawing, it will select that
model drawing
for the special trim when a replacement product is used. See more information here:
Replacement Product
Using Custom Trim Model Attachments
Once created, the drawing will show up in the attachments pop-up for an order or quote detail line anytime a custom trim is added with that model. They can be viewed by clicking the paper clip icon.
This will bring up a list of attachments for that item. Click the arrow to use that model, or click the pencil icon to edit it. This list will also include any favorited trim drawings for that customer.
Another place list of drawings can be found by opening the item and going to the detail tab. Then, select the gear icon beside the model number drop down and just click the paper click icon at the top. From here the model drawings can also be enabled as
product images
Creating Model Attachments
To make the drawing show up in the attachment list in Paradigm for that model of trim, start by assigning the desired trims to a model in the item’s detail tab.
These items should be set up the same way as a special trim item, as they will be getting their information from a trim drawing; but can have a more specific product ID so it is intuitive to find.
Creating Trim Models
After creating models and assigning products to that model, go to System > Company Preferences > Trim Drawing Admin and log in as the administrator or a user who has been assigned as a drawing admin.
Then draw the profile, and when you are finished click ‘Save’ in order to save it to Paradigm.
Next, give it a name so that the drawings are unique in Paradigm–this is the name that the salesperson will see when selecting the trim, so be descriptive. Select the ‘Model Drawing’ check box and enter the model number of the drawing (otherwise it will just show up in the standard trims list).
Next, click ‘Save New.’ The drawing will now be available for that model in order entry.
Editing Existing Model Drawings
To edit a previously saved model drawing, click the ‘View Saved Trims’ button to access the currently available drawings.
In the pop-up, click on the Model Drawings tab to view the models, then locate the drawing to be edited and click on the ‘Edit’ button beside it.
Once the desired changes have been made, click ‘Save’ above the drawing, bringing up the ‘Save Favorite’ box.
Clicking ‘Overwrite’ will save the changes to the old drawing. ‘Save New’ should be used to create a second and new version of the drawing while keeping the old one unmodified.
When ‘Sav[ing] New’, be sure to give the new drawing a distinct and descriptive name to distinguish it from the original.

#### Inventory Transfers

Inventory Transfers – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Inventory Transfers
How can I move stock from one of my warehouses to another without creating an invoice for it?
How can I do an inter-store transfer?
Use the inventory transfer screen to move product from one warehouse to another. First open Inventory -> Inventory Transfers and click the green plus button.
Specify the date to transfer the product, the description of the transfer (if needed) and the origin and destination warehouses. Enter the products to be transferred as well as specifying a ‘Qty to Transfer’, being sure to have the correct unit of measure selected.
When all products to be transferred have been entered, click ‘Release Transfer’, which will mark that stock as committed at the origin warehouse and on PO at the destination warehouse. More info on inventory quantities can be found here:
Inventory Count Columns
If your company uses the Dispatching module for Paradigm, the transfer will show up in the ‘Transfers’ section which can be found by going to Dispatching > Transfers. This list will show transfers from the last 365 days. To view the transfer on the list, set the ‘Ship From’ and ‘Ship To’ warehouses to the same as on the transfer.
When the transfer has been assigned to a trip, the trip ID will show on that transfer in Paradigm, and then when the transfer is completed in Dispatching, it will be marked as such in Paradigm. At this point the transfer is ready to post, after entering the actual quantities received for each of the detail lines. Note that a transfer can be posted even if it has not been scheduled or completed in Dispatching. If fewer of a product have been received than were scheduled to transfer, posting the transfer will prompt to add the remaining product to a new transfer.
Highlighted Transfer Dates
Transfer dates get highlighted when they are not optimal.
Red
Orange
Yellow
Creating a Transfer from a Manufacture Order
Transfers can also be created from Manufacture Orders with one click if the items are being produced at a different warehouse than where they will be stocked (in other words, if the header warehouse is different from the detail warehouse). Like in the example below, the “AAG” will get produced at “WARE#4” and then will get shipped to “EPHRATA”.
After that, select “Release MO” and a “Create Transfers” option will appear.
Click confirm, and a transfer will be created and opened.
Converting a Manufacture Order to a Transfer
Another way to create a transfer is by converting a manufacturing order to a transfer. This can be done by clicking the convert button and selecting “Transfer”.
This will create a transfer and include all the items that the warehouse in the header is different than the one in the detail line. In the example below, “ABG” and “AAG” are being produced in “WARE#4” and will then get shipped to “EPHRATA”, so those will be the only ones included in the transfer.
Once the “Transfer” button has been selected, the transfer will be created and can be viewed by clicking the open button on the pop up.

#### How to Fix out of Sync Lot Quantities

How to Fix out of Sync Lot Quantities – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
How to Fix out of Sync Lot Quantities
Issue:
The quantity in the Lots Management window does not link to the Quantities in the Warehouse stock tab of the inventory item. In this example, our lot quantity was 100, and the quantity shown in the warehouse was 80.
This FAQ is designed to correct an issue where the lot quantity does not equal the inventory quantity. Keep in mind, the lot form will include units that are showing in the “received” column on the item. This will not need to be done very often, the main reason it can happen is from transactions getting unposted that were already posted before the item was set to track lots.
Step 1:
Create an inventory adjustment that removes all of the inventory from the lots, and post it. In this case, 100 will get put in the qty sold column for the lots. It is OK for now if there is still inventory on the item, or if inventory goes negative. In this case it gets set to -20. This is necessary because items with inventory in a lot cannot be switched to not track lots.
Step 2:
Go to affected inventory item > Detail tab and uncheck the Use Lots box.
Step 3:
Create a second inventory adjustment to remove all inventory from the product, setting the stock to 0. This is important because items with inventory cannot be set to track lots.
Step 4:
Go back to the Detail tab and check the “Use Lots” box.
Step 5:
Create a third Inventory Adjustment to bring in the correct inventory and lots, making sure to enter the correct cost on the line as well.
The lot quantity and inventory quantity will now match.

#### How do Inventory Special Prices Work?

How do Inventory Special Prices Work? – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
How do Inventory Special Prices Work?
The ‘Special Pricing’ tab in an inventory item allows you to specify a price that is only valid for a certain date range, a unit of measure, and warehouse. Enter the unit of measure, date range, and the special unit price needed. The new unit price gets entered into the “Unit Price” column, and then the special price will be calculated based off of the unit of measure. The warehouse can be left blank to apply that price to all warehouses, or a warehouse can be specified to only apply that price for one warehouse. See also:
Promotions
NOTE: This does not become the new base price for that date range, it is only a special price. This means that other discounts will not be applied on top of it. Also, if the special price is not the best price for a certain customer, it will not be used.

#### Promotions

Promotions – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Promotions
How do I create sales or promotions in Paradigm?
Promotions can be accessed by going to Inventory > Promotions. Then click the green plus to create a new one. This feature is used for creating sales for multiple items at once.
After creating a new promotion, specify the begin and end date for that sale, as well as the warehouse for which you want the sale to apply (Leaving the warehouse blank will apply the sale to all warehouses). Optionally, you can specify an editing deadline as well. Changes will still be permitted after this date, but warnings will appear so that accidental edits will be prevented.
Items can then be added to the promotion individually, or entire categories/subcategories can be entered at once by using the ‘Bulk Add’ section at the top of the form. After adding the items to be put on sale, enter either a discount percent or the exact special price for each item to set the special price.
Selecting a group of items and right clicking on them will allow for changes to be made to those highlighted items.
There are several useful features to note about this form:
If the begin/end date or warehouse is different on an item than it is on the header, it will show up in red text.
The dropdown for Warehouse will show the units in stock for each warehouse.
The information in the promotion can also be found in the inventory item’s special pricing tab. See
Inventory Special Pricing

#### Inventory Pricing Columns

Inventory Pricing Columns – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Inventory Pricing Columns
I am wanting to import Inventory Pricing information, but do not know the column name to which my data corresponds.
Here is a list of field names from the Inventory Pricing table into which you are able to import. All of the fields except Notes and Sales Price are required. NOTE: Some fields not specified below will show up in certain dropdowns–these are fields from the Inventory table and are not actually stored in the Warehouse table. See also:
Inventory fields
Unit of Measure fields
Warehouse fields
Field
Stored Column Name
Product ID
strProductID
Level
strLevel
Unit Measure
strUnitMeasure
Unit Measure Quantity
decUnitMeasureQty
Minimum Quantity
decMinQuantity
Maximum Quantity
decMaxQuantity
Pricing Method
strPricing
Discount
decDiscount
Notes
strNotes
Sales Price
curSalesPrice
Exclusive?
ysnExclusive
Rounding Level
dblRoundingLevel
To import into certain fields, you must first add any new entries into another table in Paradigm. These fields are: strUnitMeasure and decUnitMeasureQty.

#### Inventory Warehouse Fields

Inventory Warehouse Fields – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Inventory Warehouse Fields
I am wanting to import Inventory Warehouse information, but do not know the column name to which my data corresponds.
Here is a list of field names from the Inventory Warehouse table into which you are able to import. The Product ID and Warehouse ID are required. NOTE: Some fields not specified below will show up in certain dropdowns–these are fields from the Inventory table and are not actually stored in the Warehouse table. ALSO: the stock levels and cost information in this table are automatically calculated, changing them in the data accomplishes nothing. See also:
Inventory fields
Unit of fields
Pricing fields
Field
Stored Column Name
Product ID
strProductID
Warehouse
strWarehouseID
Reorder Point
decReorderPoint
Reorder Quantity
decReorderQty
Warehouse Location
strWarehouseLocation
Shelf ID
strShelfID
Notes
strNotes
Buyer
strBuyerUserName
Max Quantity
decMaxQty
To import into certain fields, you must first add any new entries into another table in Paradigm. These fields are: strWarehouseID, strWarehouseLocation, strShelfID, and strBuyerUserName.

#### Unit of Measure Column Names

Unit of Measure Column Names – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Unit of Measure Column Names
I am wanting to import Units of Measure, but do not know the column name to which my data corresponds.
Here is a list of field names from the Unit of Measure table. The Product ID and Unit of Measure are required. See also:
Inventory fields
Warehouse fields
Pricing fields
Field
Stored Column Name
decDefLinearMeasurement1
decDefLinearMeasurement2
Linear Measure 1
strLinearMeasurement1
Linear Measure 2
strLinearMeasurement2
Linear?
ysnLinear
ProductID
strProductID
Sort
intSort
Unit Measure Quantity
decUnitMeasureQty
Unit of Measure
strUnitMeasure
Weight
decWeight
Minimum Length
decMinLength
Maximum Length
decMaxLength

#### Column Names for Inventory

Column Names for Inventory – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Column Names for Inventory
I am wanting to import inventory, but do not know the column name to which my data corresponds.
Here is a list of commonly modified information on inventory items and the column name that Paradigm uses to store that information. The Product ID is a required field. See also:
Unit of Measure fields
Warehouse fields
Pricing fields
Field
Stored Column Name
Additional Info
strAdditionalInfo
Addon Product
strAddonProductID
Custom Assembly Check box
ysnAssembly
Assembly Type
intAssemblyType
Category
strCategory
Color
strColor
Color Set
strColorSetID
Current Cost
curCurrentCost
Expense Account
strCOGSAccountID
Inventory Account
strInventoryAccountID
Item Class
strItemClass
Manufacturer
strManufacture
Manufacturer Number
strManufactureNumber
Percent Markup
decPricingPercent
Pricing Method
strPricing
Purchase Description
memPurchaseDescription
Purchase Unit of Measure
strPurchaseUnitMeasure
Sales Account
strSalesAccountID
Sales Description
memDescription
Sales Price
curSalesPrice
Sales Unit of Measure
strUnitMeasure
Standard Cost
curCost
Standard Cost 2
curCost2
Sub-Category
strSubCategory
Sub-Category ID
intSubCategoryID
Vendor ID
strVendorID
Vendor Number
strVendorNumber
Vendor Site
strSiteName
To import into certain fields, you must first add any new entries into another table in Paradigm. These fields are: strCategory, strColor, strColorSetID, strItemClass, strPurchaseUnitMeasure, strUnitMeasure, strSubCategory, and all of the GL Account and Vendor fields.

#### Inventory Tables

Inventory Tables – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Inventory Tables
I want to update my inventory using Paradigm’s inventory import/export feature. Which table should I use?
There are currently four tables into which you can import using Paradigm’s inventory import/export feature: Inventory, Unit Measure, Inventory Warehouse, and Inventory Pricing.
Inventory:
This table stores almost all of the general information about the item, like description and standard cost/pricing information. Most data found on the ‘General’ and ‘Detail’ tabs, as well as the item’s assembly preferences are found here (
What fields can I use in this table?
).
Unit Measure:
This table stores the item’s Units of Measure. Use this table if you are adding a new Unit of Measure to the item or if you are updating information on existing Units of Measure, like weight or default lengths (
What fields can I use in this table?
). NOTE: To change the default Sales and Purchase Units of Measure, use the Inventory table.
Inventory Warehouse:
This table stores the information found on the ‘Warehouse Stock’ tab. Use this table to change reorder points and quantities, buyers, and warehouse locations (
Which fields can I use in this table?
).
Inventory Pricing:
This table stores the information found on the ‘Pricing’ tab (
Which fields can I use on this table?
). Use this table to add new price levels or edit existing ones. To change default pricing, use the Inventory table. NOTE: Changing and updating multiple Price Levels may be faster via the ‘Edit Pricing Levels’ option found in the ‘Pricing’ tab in some cases.

#### Value Added Manufacturing Set up (VAM)

Value Added Manufacturing Set up (VAM) – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Value Added Manufacturing Set up (VAM)
This FAQ will go over how to set up value added manufacturing (VAM).
To create a Value-Added item for painting raw coil, begin by creating an inventory code for the raw steel that will be painted, leaving the
assembly tab
empty. Create a second code called a “Paint Release” code that will be used when requesting coil to be painted from the coaters (“PR” followed by the
color
abbreviation works well for these IDs). Be sure to check the box beside “VAM Service Charge” in the detail tab, and to use the same
unit of measure
that will be used by the painter when they invoice you.
Finally, open or create the inventory item for the painted coil, go to the assembly tab, select the “Value-Added Manufacturing” assembly type, and put the raw coil and the paint release code in the assembly with quantities that correspond to one unit of the painted coil.
When the paint release code is entered on a Purchase Order or Purchase Invoice, a VAM selection form will appear. Use this form to select the coil to be produced, the warehouse the final product will be shipped to, and the quantity to be produced in the top half of the form; and use the bottom half of the form – which is a list of components associated with the product selected – to specify what warehouse to pull the raw material out of as well as the cost of the paint. After closing the form (ALT + C), the cost of the paint will be entered to the line on the PO or PI, and the description will be updated based on the rest of the information given in the Value Added Selection form.

#### Nonexclusive Pricing Levels (Quantity Discounts)

Nonexclusive Pricing Levels (Quantity Discounts) – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Nonexclusive Pricing Levels (Quantity Discounts)
This FAQ will go over how to create nonexclusive pricing levels. For each inventory item, you can add multiple pricing levels with discounts or markups for that product. Each of these levels can be added multiple times for different quantity ranges and
units of measure
Here is an example that has a
non-exclusive
5% discount for the unit measure:
Bag/100
, and a 10% discount for the unit measure:
Bag250
Select pricing level and exclusivity of your price level. Non-exclusive price levels are typically assigned to level one.
Non-exclusive price levels are available for every customer, regardless of that customer’s pricing method. These are normally used to create quantity price breaks, where anybody who buys a certain amount of that product will get a discount.
Select a
unit of measure
, and the min – max range of quantity on which to apply the discount.
The previous example is set at -999999 up to 9999999 to apply this price level to any number of “Bag/100” bought.
Here is the same order from above, but with the shown price level applied.
Note that while the example above uses alternate units of measure, the same approach can apply to an item’s standard unit of measure for certain ranges of quantities purchased, like shown below.

#### Product Finder

Product Finder – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Product Finder
This FAQ will go over how to use the product finder tool in Paradigm.
The product finder tool allows a user to find products based on a group and/or subgroup(s) to which the product is assigned. The groups used here are used in the product finder in
Customer Portal
as well. It is a useful tool to quickly find a product while creating a transaction, especially for new
salespeople
The user can either search the for product in the search bar, or select a group that it is in.
This will open all the subgroups, where the user can again select a group. This can continue as far as the number of subgroups under the selected parent group.
For example,
Screws > (ALL SCREWS)
or
Screws > Metal to wood > 2.5” > Black
The search bar will search all the products within the selected group and will show the number of products matching the search within the displayed subgroups, as shown below. In this example, the user is searching for all red products, under the group “Panels”
This button will take the user back to the previously selected group:
This will take the user back to the home page of product finder:
After a product has been selected, the product finder will automatically go back to the home page, but if more than one product is needed from the same group, use the return button, and it will go back to the previously selected group or subgroup.
To select multiple products in one group, simply CTRL+Click the product ID (hold the CTRL key while clicking) to stay in the group when selecting an item.
While using product finder in a transaction, the selected product will be added to the transaction, and the cursor will be set to the pieces column allowing the user to immediately type the piece count.
How to Create Groups
The inventory group setup is under Inventory > Inventory Groups. Information on how to import groups can be found here:
Inventory Import: Inventory Groups
The group can have any name, and doesn’t have to be a category in your database. Add as many subgroups to the parent group as needed by selecting the folder on the right. This will then display the subgroups of the selected group.
Group Colors
A group
color
can be assigned. In the example below the color selected is blue. This will cause the lumber group button to be blue in the product finder.
By default, all the colors will be undefined. To select a group color, the color for the option must first be selected. To do this, go to the item and click the gear icon beside “
Color
This will open the “Inventory Color” page, where the display color and text color can be selected.
If the “More Colors….” option from the color selected above is clicked, it can be used to find a color that wasn’t on the first screen or the color sampler (highlight below) can be used to select a color. This can be useful if there is a document with all of the trim colors on it, and the sampler can be used to get the same color into Paradigm.
How to Assign Items to Groups
Items can be assigned to groups individually by opening an item, then selecting the “Edit Groups” button. Note that items can be added to multiple groups.
Contact Paragon support for assistance on adding items to groups in large quantities.

#### Receive Inventory

Receive Inventory – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Receive Inventory
How does Paradigm track inventory when the shipment is received from the vendor and the bill hasn’t arrived?
Convert the Purchase Order to a Purchase Invoice.
Enter the amount received in the “Qty Rec” column.
Click the
Receive
button.
Example
This is a
Purchase Order
for DCDBT20. Take note of the pieces ordered and pieces in stock.
Convert to a Purchase Invoice and enter the Amount Received in the “Qty Rec” column. Click on the
Receive
button. Double-clicking the quantity received field will automatically copy the quantity ordered to the quantity received. Another quick way to make lines received in full, is to select rows by the check box on the left and pressing “r”.
This will cause the quantity
Available
and the quantity
Received
to increase, but
In Stock
quantity doesn’t change. When the bill is received from the vendor, post the
Purchase Invoice
and the
In Stock
quantity will change. More information on inventory count columns can be found here:
Inventory Count Columns

#### Minimum Acceptable Margin

Minimum Acceptable Margin – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Minimum Acceptable Margin
This FAQ will go over how to set a minimum margin. Minimum margins can be used to give users a prompt if they define a discount, terms discount, or sales price that goes below the minimum discount percentage (also known as a margin violation), as well as recommend the lowest allowable price.
Minimum Margin
The calculated margin based on the standard cost and sales price, will be shown below the sales price as “Calculated Margin”.
This can also be set at a category level.
If a user manually types in a sales price or discount that results in a net price with less than the specified discount, a warning will show. The warning will suggest a discount or sales price, depending on which field was edited.
This sales price could result in a margin less than the minimum defined for this product. Consider using price of $X or more.
Note:
Only users that are set as administrators can override this. Additionally, this control only affects manually entered discounts or sales prices, not
price levels
category discounts
special prices
, etc.

#### Inventory Tips and Tricks

Inventory Tips and Tricks – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Inventory Tips and Tricks
Item classes
are used to quickly and easily assign default values to inventory items. Classes assign defaults to three things: posting accounts, whether or not the item tracks stock, and the default tax settings. Classes can be created and edited by clicking the ‘Item Class’ link at the top of the ‘General’ tab in an inventory item. Note that any of the settings can be changed from the default on the item, the class is purely a default.
Discount sensitivity codes
can be assigned to an item to control the maximum percentage of discount can be given from the ‘Discount Sales Price’ customer pricing type. Additionally, users will be warned if they put a discount larger than the specified max discount onto a detail line. Click the ‘Disc. Sensitivity Code’ link to create the desired code, then select it on an item to limit the discounts.
The rounding precision of an item can be set to control how the price is rounded when dealing with certain pricing types. Prices are rounded up to the next increment of the price level.
When working with ‘Markup Standard Cost’ or ‘Percent of Margin’
pricing types
, the sales price can be typed in and Paradigm will calculate the percentage markup.
In the item detail, setting the ‘Create PO’s’ flag to YES will cause the item to show in blue text when it is entered on an order, and it will be selected to convert by default when converting an order to a PO.
Mark an item as ‘
Discontinued
’ to remove the item as an option from dropdowns without deleting it.
By default, items that have linear measurements that are not linear will not allow their lengths to be edited on order detail lines. If this is required for an item, check the box for ‘Enable editing linear measurements for non-linear UOMs’, found on the item detail tab.
Individual items can be marked as taxable or non-taxable under each tax ID that is created. To mark an item as not being taxable under a certain code, first, check the box for ‘Custom Tax Settings’ located at the top of the detail tab, then uncheck the ‘Taxable’ column for certain tax codes. ‘Taxable as Component’ is used in certain cases for use tax.
Use
Models
to group similar items together and gain functionality on the order form.
To set up an alternate code for a product ID, enter the new code under the ‘Alternative’ tab in the ‘Alias’ section. Each alias must be unique from any other alias or product ID.
For components that are used in production that may have other products substituted for them, set up the acceptable substitute in the ‘
substitute
’ section. The wizard button will help you assign appropriate substitute quantities.
For items that are purchased from more than one vendor, the alternate vendor IDs, vendor numbers, and costs can be entered in the ‘Vendors’ tab. These will be used when the item is entered onto a PO for the alternate vendor. More information on that can be found here:
Set Up Alternate Vendors
Many assembly types can be assigned in the ‘Assembly/Kit’ tab. Click
here
to learn more about them.
Paradigm has several options to edit sets of items at once. Learn more about
Edit Pricing
Edit Price Levels
Import/Export
Other Lists and Inventory Quantity/Cost Management
When items are manufactured for stock, use a Manufacture Order which can be accessed in Purchase Order > Manufacture Orders. Enter the product and quantity to be made and release it to production.
Inventory that is removed from stock and thrown away can be adjusted out of the inventory in Paradigm by using the inventory discard feature. Learn more about it
here
The inventory warehouse list can be used to see a list of each item and warehouse to quickly see how the stock is distributed across warehouses. This form is accessed under Inventory> Inventory Warehouse List and contains the same information that can be found for one item in its ‘Warehouse Stock’ tab.
To adjust inventory, use either
Worksheets and Analyses
or Inventory Adjustments. When using inventory adjustments, be sure to enter the appropriate cost when inventory is being added, ensure that the count is in the same terms as the item is (counting bags of an item instead of eaches can cause big variations in inventory), and be sure to use the correct adjustment column for adjusting inventory to the new quantity. Using the ‘New Qty’ column will set the inventory equal to the entered number, whereas entering a ‘Qty Diff’ will only change the quantity by the entered amount. Also, be sure that adjustments are not unposted if any of the inventories of the items have changed since the adjustment was posted as this will cause inventory to go off again. Note that the account against which the difference in cost is posted can be controlled in the adjustment header.
Promotions or sales can be set up using the
Promotions
form.
The
Purchasing Agent
can be used to more easily reorder products.

#### Inventory Quick Build

Inventory Quick Build – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Inventory Quick Build
This FAQ will go over how to use Quick Build in Paradigm. The Inventory Quick Build feature allows a user to create a build for an item that was manufactured using scrap components that were leftovers from other builds in order to keep inventory quantities up to date.
This feature can be accessed by going to Inventory > Quick Build
It can also be found by going to Production > Quick Build
Creating Quick Builds
To create a quick build, enter the product ID of the product that is being being manufactured, or search for a product by clicking the search button next to the ID field. After searching, double clicking on an item will insert the ID into the Quick Build form.
Next enter the number of pieces of the product that is being built. If the product that is being built is an item that is being sold by the linear foot, enter the number of feet of that product rather than the pieces being made.
Components of a Quick Build can be viewed or
substituted
by clicking the “Edit Build” button. By default, the warehouse that is selected will be the one that is tied to the Paradigm username that is currently in use. If it is wrong, however, select the right warehouse from the dropdown.
Enter a note about why the item is being built and select an employee name from the employee dropdown.
Clicking “Finish” will post the build and adjust inventory quantities.

#### Inventory Item Assembly Types

Inventory Item Assembly Types – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Inventory Item Assembly Types
There are several types of assemblies available for use in Paradigm. They can be set up to properly handle manufactured items such as trim, miscellaneous assemblies such as a broom and broom handle, value-added processes such as painting bare coil, as well as rapidly entering several lines on an order. On top of this, the ‘Custom Assembly’ checkbox can be checked to allow editing the components on an order and calculate the cost, price, and weight of the product based its components. The types are explained in more detail below.
General Assembly
This type of assembly is to be used for items such as a set of drill bits, where each of the bits are inventoried separately but can be sold as a set for a better price. When an invoice with a general assembly on it posts, the components are removed from stock, the assembled item is added into inventory, and then that inventory is immediately removed by the invoice (it is sold). This allows one item to remove multiple items from inventory when it is sold.
Use cases:
Drill bit sets, broom and broom handle, garage door openers, etc.
Manufactured to Order
This is the most common type of assembly. Products that are set as manufactured to order will create a build when they are released on an order. This build then shows up in the production module and when completed, will move inventory from the components to the produced item, ready to be removed by the invoice for that order. Note that items will only show in production when they have also been assigned a machine to be produced at on the ‘Production’ tab in the item.
Use cases:
trims, panels, cut lumber, trusses, etc.
Kit/Group
This type of assembly will add the component parts to the order as their own detail lines under a comment line with the description of the header item. When added onto an order it will trigger a prompt which allows the user to enter how many of the product should be added to the order, and each of the components is added to the order with the assembly quantity multiplied by the number requested.
Use cases:
garage doors, horse stalls, sets of inventory items for fast pricing (all standard trims for example), etc.
Value-Added Manufacturing
This type of assembly is used for combining products into another product from a purchase transaction. A common use case for this type of assembly is painting raw coil. In this case, the painted coil would be marked as Value-Added Manufacturing and would have raw coil and a paint item in its assembly. The paint code needs to be marked as a ‘VAM Service Charge’ in its item detail tab. When the paint code is purchased from a vendor –aka coil is painted–a prompt will be brought up to select the final product that is being brought into stock (the painted coil), but all that will be paid for is the paint.
Use cases:
painting raw coil, attaching boots to posts, etc.
Kit/Bundle
This type of assembly will add the component parts to the order as their own detail lines under a
bundled line
with the description of the header item. When a kit is added onto an order it will trigger a prompt which allows the user to enter how many of the product should be added to the order, and each of the components is added to the order with the assembly quantity multiplied by the number requested.
Use cases:
garage doors, horse stalls, sets of inventory items for fast pricing (all standard trims for example), etc.
Custom Assembly
This checkbox allows for greater control of the general assembly and manufactured to order assembly types.
special bent trim
, custom trusses, etc.
If ‘Custom Assembly’ is not checked, the price, cost, and weight of the item are simply what is defined in that item’s ‘General’ tab, allowing prices to be controlled separately from the component parts. These assemblies are not editable on the order detail.
Use cases:
stock or standard trim, stock trusses, panels, etc.

#### Inventory Discard

Inventory Discard – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Inventory Discard
This FAQ will go over the Inventory Discard feature.
The inventory discard feature allows a user to remove items from stock that have been damaged and can no longer be sold, or otherwise cannot be removed from inventory. Say for instance, that an item to be sold happens to fall off the shelf and break. Because it is broken, no one will want to buy that item making it useless for you to keep around. But if you were to just throw the item away, your inventory numbers would now be incorrect. Using inventory discard you can remove the item from your inventory without having to manually create an inventory adjustment, allowing more users to be able to discard that item. To keep track of the discards, Inventory Discard will post the discarded item to the inventory discard default account from default account.
Inventory Discard
Inventory discard can be found by going to Inventory > Inventory Discard.
It can also be found by going to
Production
> Inventory Discard.
First enter the Product ID of the item that you wish to discard.
Then need to specify the number of pieces and the unit of measure of the item that is to be removed.
Next select the warehouse from which you will be removing the item.
Then you will need to fill in a reason for discarding the item and select your name from the Employee Name drop-down list.
Lastly click ‘Discard’ to remove the item from inventory.

#### How To Add Locations To A Warehouse

How To Add Locations To A Warehouse – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
How To Add Locations To A Warehouse
This FAQ will go over how to add a location to a
warehouse
and assign a product to that location?
Warehouse locations can be used to provide more detailed stocking location information for a given item. This will allow Bill the New Employee to find a bucket of roofing cement in 15 minutes. This is still much slower than George (a veteran of 15 years) who can find that bucket in 3 minutes flat with his eyes closed but far better than the 35 minutes it would have taken Bill without this information. To track even more detailed stocking location information, considering adding the
shelf management feature
Warehouse locations can also be thought of as “Product Type” groupings. They are used primarily in two places, Pick Tickets and
Fulfillment Pro
. Pick tickets group each warehouse location together to help make gathering the items more efficient – all the items from a certain location are listed sequentially on the report.
Fulfillment Pro
builds on this idea by having filtering options by warehouse location, so the employee can filter their list to just items that are their responsibility.
Adding Locations
Go to Inventory > Inventory Settings >
Warehouses
Then fill in the locations.
Add a Product to a Warehouse Location
1. Go to the inventory tab and find the item.
2. Then click on the Warehouse Stock
tab
3. Select the location from the dropdown for the corresponding
warehouse

#### Discontinued Items

Discontinued Items – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Discontinued Items
This FAQ will go over how to set items as discontinued (also known as “Inactive Items”), search for them, and how they are handled in duplicating invoices.
Setting An Item As Discontinued
To set an item as discontinued, go to Inventory > Inventory List.
Then select the item that needs to be set to discontinued.
Next, go to the Detail tab.
From there, check the box beside “Discontinued:” from the “Inventory Options” list.
Once that is done, a red bar will appear at the top.
Now the item will no longer show up when searching for products, but will still exist in the system.
Note that if the item is non-manufactured and has a positive stock, it will still show up when searching for products. This is to allow selling through remaining inventory after an item has been discontinued.
Viewing Discontinued Products
To view discontinued products, go to the Inventory List and check the “Include Discontinued” box.
If an invoice is duplicated with a discontinued item in it, the item will turn in a comment, letting the user know it is discontinued. If a discontinued item’s product ID is used as the alias of a valid item, the code will be automatically swapped during duplication. More info on aliases can be found in this FAQ:
Setting up UPC Codes and Aliases
It is suggested to remove old discontinued items periodically or if they won’t get used again. This can be done easily by following this FAQ:
How to Merge Items/Vendors/Customers

#### Set up UPC Codes For Barcodes and Aliases

Set up UPC Codes For Barcodes and Aliases – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Set up UPC Codes For Barcodes and Aliases
This FAQ will go over how to set up alias Product IDs for items, such as UPCs and SKUs.
First, go to Inventory > Inventory List
Then open the item that needs the Alias ID setup.
Go into Edit mode and then click on the Alternative tab.
From there, the alias can be entered.
If the entered alias already exists as a product, the following message will be shown:
Product already exists. This alias already exists as a product. Do you still want to use it?
The
unit of measure
can be set along with it if need be. For example, if the UPC code is for a case of 10, selecting the “CASE10” unit of measure on the alias will cause that unit of measure to be selected when using the alias on a transaction. If the unit of measure is left blank, the item’s default unit of measure will be used.
Once the alias is set, it can be used in Product IDs throughout Paradigm, like the example below.
Putting entering the UPC in the item “Detail” tab will not work to make the item’s barcode scannable, it must be added as an alias too. The UPC field is just for the UPC that gets printed on any
shelf labels
for that item.

#### TIP (Trim in Process) Unit of Measure

TIP (Trim in Process) Unit of Measure – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
TIP (Trim in Process) Unit of Measure
unit of measure
quantity per linear foot values need to be found.
After that, TIP can be calculated using the steps below, and there’s the option follow along with the
training video
. In the examples the coil will be 42″ wide, 2.1lbs per linear foot, and the percentage of waste will be 5%.
Calculating TIP
To find the TIP factor, divide one by the width of the coil.
In this case it would be:
1/42 = 0.0238095238095238
The TIP factor would be 0.02381
Waste Factor
Optional:
Add the TIP and the waste factor together.
Adding the waste factor to the example above, the equation would be:
0.02381 * 1.05 = 0.025
The final TIP factor would be 0.025.
Adding The TIP To the Coil
Go to Inventory > Inventory List and open the coil that needs the new tip factor. Then select the gear beside “Sales Unit Measure:”.
Type the TIP into the “Unit Quantity” column and enter the TIP before the percentage of waste was added (0.02381) in the in the “Weight” column. TIP must be set up as a linear unit of measure. Also be sure to have the base unit of measure set, in this case it’s lbs.
Multiple TIP unit of measures can be set up on each coil with different scrap rates if need be. Below the 3%, 5%, and 7% waste factors are set up.
If the unit of measure quantity per LF was one (coil inventoried by LF) instead of LB as in the example above, the TIP calculation is simply (1/[Coil Width]) with the waste added on top, for example (1/42)*1.05 = 0.025.
Calculating TIP When LB is the Base Unit Of Measure
This will go over how to calculate TIP when LB is the
base unit of measure
First to get the width unit, divide one by the width of the coil.
In this case it would be:
1/42 = 0.0238095238095238
Next, find the unit of measure quantity per linear foot. This is measured by lbs. per linear foot or just linear feet.
In this example it’ll be lbs. per linear foot, which is 2.1 lbs.
To then find the TIP factor, multiply the width unit x unit of measure quantity per linear foot.
In this example it would be:
0.0238095238095238 x 2.1 = 0.05
Add the TIP and the waste factor together.
In this case the equation would be:
0.05 x 1.05 = 0.0525
The final TIP factor would be 0.0525.

#### Minimum and Maximum Length

Minimum and Maximum Length – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Minimum and Maximum Length
This FAQ will go over how to set the minimum and maximum length on an item.
The following error appears when an item is entered outside the maximum length parameters: “
Item Too Long Line: 1 has a length exceeding the maximum length of 22 ft for this item. Please select a shorter length.
“. An error similar will occur when importing an order file and an item is outside the parameters. When that happens, no more items can be entered until the length is changed.
How To Set Up Minimum And Max Length For A Unit Of Measure
First go to Inventory > Inventory List and open the item that needs the minimum and maximum Length changed.
Next, select the gear beside “
Sales Unit Measure
:”
Then fill in the Default Amount, Minimum, and Maximum length fields according to the parameters for the item.
Minimum and max length are calculated in decimal feet. For example, if the max length was 10′ 6″ then enter 10.5, or if it was 30′ 4″ then enter 30.333.
Both minimum and max length are not required, one or the other will work.
Default amount isn’t required, but must be set within the min. and max length limits.
Min Length – The minimum length that can be assigned to this item.
Max Length – The max length that can be assigned to this item
Def Amt – The default amount the length will be set to for an item when it’s added to an order.
You have entered a length exceeding the maximum length Please select a shorter length
You have entered a length less than the minimum length of 0.50 ft for this item. Please select a longer length

#### Change the Base Unit of Measure Quantity

Change the Base Unit of Measure Quantity – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Change the Base Unit of Measure Quantity
The base unit of measure refers to the
unit of measure
set as one unit. All other units of measure for that item will be based off of the base unit of measure.
Once the base unit of measure is changed, all open transactions will still have the old base unit measure. So if those need to be switched, go through the orders and switch them to the new one. If the unit of measure is used in a lot of places, reach out to Paragon to look into switching the units of measure for you.
First, find the Product ID of the item that needs the new base unit of measure.
Then go to Inventory > Inventory Adjustments and click on the green plus.
Type in the Product ID, then in the New Qty column type in “0”, and post. Be sure to remember the cost in the Cost Each column, that cost information will be needed when the items are added back into stock.
Select the gear beside “Sales Unit Measure:”.
Enter the new base unit of measure
For example, this item’s base unit of measure will be changed from each to a bag of ten.
Close and select the new base unit of measure from the dropdown.
Save the item, then go back to Inventory > Inventory Adjustments and click on the green plus again.

#### Unit of Measure Set Up

Unit of Measure Set Up – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Unit of Measure Set Up
This FAQ will go over how to set up units of measure in Paradigm ERP.
For more information on changing the base unit of measure, check out this FAQ:
How to Change the Base Unit of Measure
Unit Of Measure
Go to Inventory > Inventory List and open the item that needs the new unit of measure.
Next, select the gear beside “Sales Unit Measure:”.
Then fill out all the info for the new unit of measure being added below the existing ones.
If there is a weight on the base unit of measure, it will be auto-filled on any secondary units of measure.
Once that is done, close that window and select the unit of measure to use from the Sales Unit Measure dropdown. Purchase Unit Measure can be set too, but isn’t required.
“Each” (EA) Unit Of Measure Example
“Linear Foot” (LF) Unit Of Measure Example
Each
” and “BAG250” Unit Of Measure Example
This item is tracked by the screw, but can be sold in bags of 250.
Unit of Measure Fields
Unit Measure –
The name of the unit of measure, no more than 20 characters long. Usually a short name so that it displays nicely.
Unit Quantity –
The quantity per unit.
Use Lin. Units to Cal Qty –
Select whether or not to use linear units to calculate quantity. If checked the quantity will be calculated by Pieces x Length, if it’s not checked then quantity will just be Quantity = Pieces.
Linear Units 1 –
Set the measuring unit here, which will almost always will be set to feet. And if 1 is set, then 2 must also be set to a measuring unit too.
Def Amt 1 –
Default unit amount.
Linear Units 2 –
Set the measuring unit here, almost always will be set to inches.
Def Amt 2 –
Default unit amount.
Min Length & Max Length
A decimal minimum and maximum length in feet allowable for this Unit of Measure.
Weight –
The weight per unit of measure in pounds. For example if the unit of measure was bags of screws, enter the weight of the whole bag, not the weight per screw.
Volume –
The volume per unit measure.
Web Display –
Controls the web display on the unit of measure.
The default sales unit of measure will always be set to display in the website if the product is set to “Show in Customer Portal”.
Sort –
The order in which it appears on the unit of measure list

---

[← Back to Contents](#table-of-contents---click-to-navigate)

### WORKFLOW 3: PURCHASING & VENDOR MANAGEMENT {#purchasing-vendor-management}

[← Back to Contents](#table-of-contents---click-to-navigate)

**Purpose**: Manage vendor relationships, purchase orders, and incoming materials

**When You Use This**:
- Creating purchase orders
- Updating vendor pricing
- Receiving inventory
- Processing vendor invoices

Source: https://docs.goparagon.com/kb-category/purchase-order-and-vendors/

#### Splitting Purchase Orders And Purchase Invoices

Splitting Purchase Orders And Purchase Invoices – Paradigm ERP by Paragon – Documentation
Home
Purchase Order and Vendors
Splitting Purchase Orders And Purchase Invoices
This FAQ will go over how to split purchase orders and purchase invoices in Paradigm ERP.
Split Purchase Order And Purchase Invoice
This button is labeled as “Split Purchase Invoice” on the purchase invoice screen.
Then select the line items to be added to the new transaction. Note that only entire lines can be split, not partial quantities of a line.
Once the new transaction is created, it will be opened. Splitting the transaction retains the order number, but adds a number to the
prefix
: PO1, PO2, etc.
A note will also be added to both orders:
Order Split By Username
The note on the original order will include the order total as well:
To find other orders related to this order, use the “
View Related
” button.
Right Click Split Option
Select the lines to be split and right click, then choose “Split to new Purchase Order”.
This will open the split purchase order screen with those lines selected.

#### Create Purchase Orders by Default

Create Purchase Orders by Default – Paradigm ERP by Paragon – Documentation
Home
Purchase Order and Vendors
Create Purchase Orders by Default
This FAQ will go over how to set up items to create purchase orders by default.
Create PO’s By Default
To set an item to create purchase orders by default, go the inventory item and select the “Create PO’s” checkbox.
Now when this item is added to an order, it will be shown in a blue font to signify a PO will be created for it.
This can also be manually set in the order by selecting the “Create PO” checkbox on an order.
To show this, right click the order header and select the column chooser. Then select “Create PO”.
Once the order is released, the lines set to create POs will cause a prompt to give an option to create the POs.
If this pop up does not appear, it can be enabled by going to System >
Company Preferences
> Sales > Warnings and Messages.
If the order is converted to a PO, this pop up below will appear. All items set to create POs will be selected by default.
If the line items don’t have POs created for them once the order is released, they will appear in the Special Orders Purchasing Screen. More info about that can be found in this FAQ:
Special Order Purchasing Screen
Manually Link PO Lines To Sales Order Lines
Purchase Order lines can be manually linked to a sales order line by going to the line item options on the PO and select the sales order from the dropdown.
Convert To Invoice and Pay Message
If lines on the order have a PO created for them, and those lines have not been received yet when using the “Convert To Invoice and Payment” button, the following message will be shown:
Items have been found that are not in stock. There are special-ordered items on this order that have not been received yet.

#### Special Order Purchasing

Special Order Purchasing – Paradigm ERP by Paragon – Documentation
Home
Purchase Order and Vendors
Special Order Purchasing
This FAQ will go over the special order purchasing screen in Paradigm.
Special Order Purchasing
The special order purchasing screen can be used to easily create a PO or RFQ from a list of special order items, and can be accessed by going to Accounts Payable > Special Order Purchasing. This screen allows a purchasing manager to quickly view lines that need POs created and convert them into POs, rather than relying on the salespeople to do so while releasing the sales orders.
This screen shows items on sales orders that need purchase orders. Learn more about requiring POs for a line here:
Create Purchase Orders By Default
. Only lines that are set to require a PO, haven’t had a PO created yet, and are on a released order will show in this list. Lines will disappear from this list as POs are generated for them.
Select the special order items to be purchased, and click the “Create RFQs” or “Create POs” button in the header. By default, one PO will be created per vendor, but if the “Create POs by Warehouse” checkbox in the header is selected, one PO will be created per Vendor and detail line Warehouse. Orders under a “Direct Ship” ship via or warehouse will always convert to their own POs. More info on how to create and set up a “Direct Ship” ship via or warehouse can be found here:
Ship Vias
Warehouses
After clicking the “Create RFQs” or “Create POs” button in the header, a pop up will appear with the option to open the list of the purchase orders created.
Special Order Items without Vendors
When an item is selected to create a PO for it, and it does not have a default vendor set, this error will appear:
Part number [Product ID] does not have a Vendor ID. This must be fixed before creating Purchase Orders.
To fix this, go to that item from the inventory list and set a default vendor for it.

#### How to Deposit a Check or Reimbursement from a Vendor

How to Deposit a Check or Reimbursement from a Vendor – Paradigm ERP by Paragon – Documentation
Home
Purchase Order and Vendors
How to Deposit a Check or Reimbursement from a Vendor
This FAQ will go over how record a deposit if a vendor has sent a reimbursement check or a refund.
Go to Accounts Payable > Purchase Invoices and add a new Purchase Invoice.
Choose the Vendor
Select “Debit Memo” for the Purchase Invoice Type
Select G/L for line type and then select the account to post against (optional).
If this is a reimbursement for inventory items you may want to select the appropriate inventory item so that it removes it from inventory.
Enter the amount as a negative.
IMPORTANT:
If you are posting the Debit memo against an inventory item, you will need to put in a negative amount for Pcs/Qty Received and a positive Cost.
Post the transaction.
2. Create A Deposit
Next, you will add this amount to a Deposit. This can be done by go to Banking > Deposits and click Add to create a new deposit. Another option is to add it to an existing deposit.
Select the Accounts Payable account.
Select the Vendor.
Enter the amount (as a positive number).
Post Transaction.
Lastly, you will need to make a Payable to apply the Deposit amount to the Debit Memo. Go to Accounts Payable > Payables and click the Add button to create a new one.
Select the Vendor
Change the check number to “None”.
Pay the full amount of the Debit Memo and the full amount of the balancing transaction from the Deposit. (Note: When a transaction such as a Deposit or Journal Entry is posted against an AP or AR account, Paradigm will create a “balancing document”. In this case, a Purchase Invoice is created and it will appear as a regular Purchase Invoice.)
Post the transaction
A variation of this process would be when a credit is given to be applied to your account. In this case, you would not create a Deposit, then you would use the Debit Memo to pay on your account with a Payable.

#### Purchasing Agent and Reorder Points

Purchasing Agent and Reorder Points – Paradigm ERP by Paragon – Documentation
Home
Purchase Order and Vendors
Purchasing Agent and Reorder Points
Reorder points, quantities, and users can be defined for each stocked item in Paradigm to allow for faster reordering using the Purchasing Agent form. This can also be used for manufacturing items to create manufacture orders for stock. This how-to will cover how to set items up to be reordered and how to use the Purchase Agent form.
Setting Items to be Reordered
To begin, open a stocked inventory item and go to its warehouse stock tab. More info on the inventory count columns in the warehouse stock tab can be found here:
Inventory Count Columns
. Enter a buyer, reorder point, reorder quantity, and optionally a maximum quantity. When the stock is at or below the reorder point, the item will show in the purchasing agent to purchase the reorder quantity of that product. It is also very helpful (though not required) to set a default vendor on the item as well.
The maximum quantity field controls the max total inventory, not the max per PO, and allows the reorder quantity to be limited. Maximum quantity is only used if the Max Quantity – Stock – On Order + Committed reorder option is selected.
Using the Purchasing Agent
The Purchasing Agent can be found by going to Inventory > Purchasing Agent.
The purchasing agent form has many controls to allow you to create POs as efficiently as possible. Note that the column order can be controlled with via Custom Setup.
To start, verify that the ‘Buyer’ name is set to the user’s products you want to see and select the warehouse for which you want to order product.
You can then filter the list using the tree at the left by clicking on the section of items you wish to view, grouped either by inventory category or vendor.
The list of items can be further filtered using one of the ‘Filter Type’ options at the top of the form.
The quantity to order can be populated for all lines at once by using the ‘Reorder Options’ section at the bottom of the form.
The ‘Usage’ column which shows how many of that product has been sold in a date range, is controlled with the date range filter at the top of the form.
After selecting all of the items to order, click ‘Create PO’ or ‘Create RFQ’. Another prompt will appear to allow you to adjust any information that needs to be adjusted before creating the PO or RFQ. There will also be buttons to round the quantities up or down, as shown in the screenshot below.
Ordered and Available Other Warehouses Columns
These columns will display the total units on order or units available at all warehouses other than the currently selected warehouse.
To display these columns, select them from the
column chooser
Alternate Vendors
In purchasing agent, items with alternate vendors will show up in both lists of vendors, not just the primary one. If only the primary vendors are to be shown in the list of vendors, select the “Only Show Primary Vendors” option in the filters. More info on alternate vendors can be found here:
Setting Up Alternate Vendors

#### Voucher Lot Receive Import

Voucher Lot Receive Import – Paradigm ERP by Paragon – Documentation
Home
Purchase Order and Vendors
Voucher Lot Receive Import
This FAQ will go over the lot receiving import on purchase invoices, to import received quantities and costs. More information on the Voucher Receive import can be found here:
Voucher Receive Import
Import
To import the file, go to the Purchase Invoice > Import File > Voucher Lot Receive Import
Fulfillment Pro Receiving
When a user is confirming the
received amount in Fulfillment Pro
, they will have the option to scan the lot IDs.
Non-VAM Coil Import File Format
The import file must be a
.xls
or
.xlsx
The column header names do not need to match exactly, but the importer will skip the first row so a header must be used.
Only columns shown in the screenshot above marked with an asterisk are required.
Excel Sheet Example
VAM Coil Import File Format
The import file must be a
.xls
or
.xlsx
The column header names do not need to match exactly, but the importer will skip the first row so a header must be used.
Only columns shown in the screenshot above marked with an asterisk are required.
Use the component lot name column only if specifying the master
value added manufacturing
(VAM) coil the painted coil was produced from, in the case of a lot tracked coil being produced from a lot tracked coil.
Excel Sheet Example
Importer Logic
The product ID in the file must exist on the voucher.
The lot details on the voucher will be reset with the details and quantity received from the file.
If the same product is on multiple lines of the voucher, the import only affects the first one and receives all of the imported data on that line.
To calculate quantity, if the
base unit of measure
is a linear unit of measure, then the lot quantity will be calculated by the length.
If the unit of measure is “CWT”, then it will calculated it by weight/100.
Otherwise it will calculate the quantity by the weight.
If the import includes the Lot Qty column, then it will use that as long as it is not zero.

#### Debit Memos

Debit Memos – Paradigm ERP by Paragon – Documentation
Home
Purchase Order and Vendors
Debit Memos
This FAQ will go over how to create debit memos, which are used when returning items to a vendor.
Returned Item Getting Added back Into Stock
If an item is being returned, and is getting taken out of stock, a debit memo will need to be created.
Creating a Debit Memo
To create a debit memo, first go Accounts Payable and open a new purchase invoice. Enter the vendor that the item is being returned to and the change the purchase invoice type to “Debit Memo”.
Once an item is added to the invoice, enter it onto the debit memo with the same cost and quantity as the original purchase, but with negative pieces to record the return.
Repeat this process for each item getting returned. If the buying more items from the vendor, change the invoice type back to “Purchase Invoice” and enter the newly purchased items onto the purchase invoice. When finished, post the purchase invoice record the credit from the vendor. The credit can be recorded as needed; more information on that process can be found here:
How to Deposit a Check or Reimbursement from a Vendor
Returned Item Not being Taken Out Of Stock
If an item is being returned but is not being taken out of stock, such as when the product was damaged during delivery but will be sold at a discount, go to Accounts Payable and create a Purchase Invoice. Enter the vendor that the item is being returned to and the change the purchase invoice type to “Debit Memo”.
Then add the miscellaneous item to the purchase invoice. Set “Pcs Shipped” to the amount being returned and then change the cost to the cost of the item getting returned. Be sure it is the same cost from the purchase invoice it was purchased on. That purchase invoice can be found by using the debit memo form in the first example, and then switching to a purchase invoice.
Repeat this process for each item getting returned. If the buying more items from the vendor, change the invoice type back to “Purchase Invoice” and enter the newly purchased items onto the purchase invoice. When finished, post the purchase invoice record the credit from the vendor. The credit can be recorded as needed; more information on that process can be found here:
How to Deposit a Check or Reimbursement from a Vendor

#### Pay Bills Multi-Vendor

Pay Bills Multi-Vendor – Paradigm ERP by Paragon – Documentation
Home
Purchase Order and Vendors
Pay Bills Multi-Vendor
This FAQ will go over the Pay Bills Multi-Vendor screen in Paradigm.
Pay Bills Multi-Vendor
The Pay Bills Multi-Vendor screen can be found by going to Accounts Payable > Pay Bills Multi-Vendor
If paying with ACH, see this FAQ for instructions when paying via ACH:
ACH Payments To Vendors
and this FAQ for instructions on setting the preferred vendor payment method:
Vendor Preferred Payment Methods
Right Click Options
Right clicking a bill will show the following options:
Open Vendor –
Opens the vendor.
Open Purchase Invoice –
Opens the transaction.
View Other Payments –
View other payments for that invoice.
Apply Terms Discount –
If the transaction has a terms discount, this button can be used to apply or remove the terms discount.
Filtering And Selection
Selection
Select All –
Select all lines.
Select All Due Dates –
Selects bills that are due.
Clear All –
Clears all selected lines.
Filtering
Date To Search –
Date to search in the date range. The options are: Date, Due Date, and Discount Date.
Date Range –
Date range to search.
Payment Method –
Vendors with the same
preferred payment method
will be shown.
Clear Filtering –
Clears all filtering.

#### Vendor Preferred Payment Methods

Vendor Preferred Payment Methods – Paradigm ERP by Paragon – Documentation
Home
Purchase Order and Vendors
Vendor Preferred Payment Methods
This FAQ will go over how to set up the preferred payment method on a vendor. Also see this FAQ for
ACH Payments To Vendors
Preferred Payment Method
To set the preferred payment method, go to the vendor’s detail tab and select it from the drop down.
Pay Bills Multi-Vendor
This can be used on the
Pay Bills Multi-Vendor
screen to filter vendors by their payment method.

#### Voucher Receive Import

Voucher Receive Import – Paradigm ERP by Paragon – Documentation
Home
Purchase Order and Vendors
Voucher Receive Import
This FAQ will go over how to import a file to import purchasing invoice received quantities and costs. More information on the Voucher Lot Receive import can be found here:
Voucher Lot Receive Import
Import
To import the file, go to the Purchase Invoice > Import File > Voucher Receive Import
Import File Format
The import file must be a
.xls
or
.xlsx
The column header names do not need to match exactly, but the importer will skip the first row so a header must be used.
Only columns shown in the screenshot above marked with an asterisk will be imported.
This format used here is the same as the format exported through Customer Portal, using the “Export To Excel” button on the invoice.
Excel Sheet Example
Import Logic
Below is a summary if the importer logic when importing.
Bundle Header Name
If it finds a bundle match it will put the entirety of that product on that line, unless there are multiple of that product in that bundle. In that case it will place it on remaining items.
If the importer finds at least one valid product (including aliases), bundle, or linear measurement match in the import, then it will enforce bundle ID matches on all the imported lines.
Unmatched bundle IDs will be added as a comment line: “Bundle Not Found…”.
If it is in this bundle mode and one of the import lines does not have a bundle, then it may only be matched to VI lines that are not in a bundle. Otherwise it is also rejected as “Bundle not found…”
If there are no valid bundle/product/LM matches, then bundles are ignored completely and point 1 will be skipped
If the unit of measure is linear, it will then try to match it based off of the length.
If the product being imported does not have a matching length anywhere on the order, it will be shown as a comment on the order.
If an item is imported with a different unit of measure (i.e. Bag instead of Each), then the unit of measure from the import will be used if it exists on the item.
If the unit of measure does not exist, the line will still be imported but the unit of measure will be ignored.
If no match is found, a comment will be added.
Invalid Product –
Could not match the ID to the Vendor Number, Product ID, or Alias.
Product not on Purchase Invoice –
Matched to a Vendor Number or Product ID, but could not find it on the purchase invoice at the given bundle* or linear measurement.
Bundle Not Found –
Matched to a Vendor Number or Product ID but could not find the given bundle on the purchase invoice*.
*Bundle only is factored in if at least one full match is found in a bundle. If there is not a match found in a bundle, it will attempt to match without the bundle and only on vendor number, product ID, or linear measurement.

#### Vendor Prepayments

Vendor Prepayments – Paradigm ERP by Paragon – Documentation
Home
Purchase Order and Vendors
Vendor Prepayments
Vendor prepayments are a way to record a deposit given to a vendor prior to receiving product from them. The funds are held in a “Vendor Deposits” asset account until they are later used to pay a purchase invoice for that vendor. Note that vendor prepayments are
not
linked to a specific PO, and need to be manually applied to purchase invoices with a payable to use the funds.
Creating Vendor Prepayments
Vendor prepayments can be created from purchase orders by clicking on the “Vendor Prepayments” on the header.
Another place these can be created is by going to Accounts Payable > Vendor Prepayments.
Then fill out the prepayment information and post/print it. Make sure to choose the correct bank account from which to pull the funds in the “Bank Account” field at the top of the form.
Applying Vendor Prepayments
To apply a vendor prepayment, one way is start by clicking on the “Make Payment” button on the purchase invoice.
Another way to do this is from the “Pay Bills Multi-Vendor”, and follow the same process below.

#### Purchasing Tips and Tricks

Purchasing Tips and Tricks – Paradigm ERP by Paragon – Documentation
Home
Purchase Order and Vendors
Purchasing Tips and Tricks
Here is a list of helpful tips and tricks for Purchase Orders, Purchase Invoices, and Bills in Paradigm.
Vendors
here
Define the ‘Expense’ account in the vendor’s detail as the default account that expenses are reported against for this vendor. This account is used when writing checks and creating bills.
Use the ‘History’ tab to see prior purchases from this vendor. Be sure to use the date ranges and filters at the top of the history tab to your advantage.
Purchase Orders
Mark Purchase Orders as ‘Released to Vendor’ when you send them to a vendor to easily tell if a PO has been ordered.
Use the ‘Scan’ button to add items that have barcodes onto a PO by scanning them.
Use the ‘Ship From’ dropdown to select the vendor site from which to ship the product.
Use the ‘Update Costs’ button to update the cost on the line to the standard cost saved on the item.
Purchase Invoices
To create a purchase invoice for more than one open PO, create the purchase invoice and select the vendor ID. This will trigger a list of open POs to appear, and the ones to be added to the purchase invoice can be selected.
To create a bill for a non-inventory item, add a new purchase invoice, select the vendor, and change the ‘Voucher Type’ beside the vendor ID to ‘Bill’. This automatically changes the first line of the voucher to be the vendor’s default expense ID.
To more easily enter the received quantity, simply double-click the pieces or quantity received to copy the amount ordered.
To enter the exact total for a line, double-click the total. Paradigm then calculates the unit price for you.
Void a voucher at any time to effectively delete it.
Use the ‘Scan’ button at the top to scan items to mark them as received. Be sure to enter the correct received quantity as you go!
To distribute the cost of freight across the cost of each item, enter the total freight in the ‘Freight’ field at the bottom and click the wizard directly to the right of the field.
The standard cost of an inventory item can be updated to the cost on the voucher line by clicking the folder to the left of the line and using the “
Set Standard Cost
” button.
Use the ‘Receive’ button to bring items in as available to sell after receiving the product without a final bill for it yet. The costs will still be editable but the stock will be added as available to sell. Learn more about receiving
here

#### Adding A New Vendor

Adding A New Vendor – Paradigm ERP by Paragon – Documentation
Home
Purchase Order and Vendors
Adding A New Vendor
This FAQ will go over how to add a new vendor in Paradigm. Also see this FAQ for
ACH Payments To Vendors
and this FAQ for
Vendor Preferred Payment Methods
Adding a New Vendor
Vendors can be added from the home tab.
Vendors can also be added by going to Accounts Payable > Vendors.
Enter the vendor information such as the address, contact method, company name, etc. Paradigm will auto generate a vendor ID using the company name.
Payments Default Email Address
The email set here will be the default email when emailing from a payable or the payables list and is primarily used as the ACH Remittance address.
For more information setting up vendors, see these FAQs:
Inactive Vendors
Setting up Alternate Vendors
How to Merge Items/Vendors/Customers
Certificate of Insurance Expiry
The field “Certificate of Insurance Expiry” can be set on vendors.
If the voucher being posted is dated later than the date set, it will give the following warning:
This vendor’s certificate of insurance expired on [Expired Date]. Are you sure you want to continue?

#### How to Use Current Cost Instead of Standard Cost on POs and Purchase Invoices

How to Use Current Cost Instead of Standard Cost on POs and Purchase Invoices – Paradigm ERP by Paragon – Documentation
Home
Purchase Order and Vendors
How to Use Current Cost Instead of Standard Cost on POs and Purchase Invoices
This FAQ will go over how to use current cost instead of standard cost on POs and Purchase invoices.
To do this, go to System > Company Preferences > Purchases and check the box beside:
Use current cost instead of standard cost.
Note
that the current cost will not be used if the standard cost on the item is set to zero.
Standard Cost – The standard cost manually set on the item.
Current Cost – This is the last cost paid for the item. The Current Cost will get updated automatically every time a purchase invoice is created and posted that uses this inventory item. Since this field constantly changes when you create Purchase Invoices, the Standard Cost is provided to hold a constant cost that only changes when you change it.
For items where the standard cost is meant to match the current cost, run the “
Standard Cost Deviation
” report in the Inventory List periodically and then update the standard cost through the “
Edit Pricing
” feature.

#### Distribute Freight or Other

Distribute Freight or Other – Paradigm ERP by Paragon – Documentation
Home
Purchase Order and Vendors
Distribute Freight or Other
First, enter the freight charge. Then click the “Distribute Freight” button highlighted below.
A warning will appear, click yes to proceed.
Any small difference that cannot be reached by adjusting the discount on each line is retained in the freight/other field.
If the quantities or costs for the items are changed, change the discount percentage back to 0% in the transaction header, then redistribute the freight charge.

#### Freight Charges to A Different Vendor

Freight Charges to A Different Vendor – Paradigm ERP by Paragon – Documentation
Home
Purchase Order and Vendors
Freight Charges to A Different Vendor
This FAQ will go over how to split out the freight charges on a PO and map it to a different vendor, so they can be paid but the charges still count against the product cost.

#### Vendor To Remit Address

Vendor To Remit Address – Paradigm ERP by Paragon – Documentation
Home
Purchase Order and Vendors
Vendor To Remit Address
How do I change the vendor remit to address? I want one name to print out on my check but a different one on the Purchase Invoice.
This can be changed by going to a vendor’s ‘General’ tab. The address there will appear on the check. Paragon may have to customize the check report to make this work if it is needed.
The address from the ‘Sites’ tab will be printed on the purchase invoice. Be sure that default box highlighted below is checked on the one that is to be used.

#### Transfer Cost From Order to PO

Transfer Cost From Order to PO – Paradigm ERP by Paragon – Documentation
Home
Purchase Order and Vendors
Transfer Cost From Order to PO
How do I set up an inventory item (like freight) so that the cost on the Order will be carried over to the cost on the Purchase Order?
This shows the standard cost set to zero
This picture shows no entries for Vendor Cost. When this item is converted from an Order to a PO, it will bring the cost from the Order.

#### How to Receive Inventory Items By Scanning Them

How to Receive Inventory Items By Scanning Them – Paradigm ERP by Paragon – Documentation
Home
Purchase Order and Vendors
How to Receive Inventory Items By Scanning Them
This FAQ will go over how to receive inventory items by scanning them. Once a shipment from a vendor has arrived, convert the purchase order for the shipment into a purchase invoice. In the header of the purchase invoice there is a scan button.
Receive Items
Clicking on this, will open this form and select the receive items checkbox, so that it can be used to scan the items that have arrived with the shipment.
Next scan the bar code on the item being received, and Paradigm will search through Product ID’s,
Aliases
item UPC’s
, and vendor numbers until it finds a match. In a case when Paradigm finds multiple matches, it will give a prompt to select one of the items from a list.
Once an item has been added to the list, focus is set back to the scan field to allow a user to scan one item after another without any intermediate clicks.
If there are several of a same item that was scanned, it will list them individually in the “Scan Items” window, but will add them together in the Purchase Invoice window. You can also manually enter a quantity as well on the line in the “Scan Items” window.
Once everything in the shipment has been scanned, click “Accept”, and everything in the list will be added to the purchase invoice as “Pcs Received”.
Note:
The quantity entered onto the purchase invoice will be based on the
units of measure
. In the case that the bar code scanned is an alias of the product, the unit of measure will be the one assigned to that alias. Otherwise, this form will use the purchase unit of measure on the item. If neither exist, the sales unit of measure will be used.
Scanning in New Lines
New line items can be scanned in by checking the “Add Lines” option.
This will add the item on the purchase order once “Accept” is clicked.
Possible Errors While Scanning
Scanning a Valid Product
While Receive Items is selected, the system is expecting the user to scan products that appear on the current vendor invoice. If a product is scanned that is a valid product, but does not match any item on the invoice, the system will display an error message: “The entered product ID was not found, and has been skipped.” This message indicates that the item cannot be received under the current transaction and must be resolved before continuing.
Scanning an Invalid Product
When an invalid product is scanned, an error message is shown in the scan dialog and the dialog is locked until the error is closed. Invalid means the scanned numbers or letters do not match any product ID, alias, or vendor product ID. While the error is active, focus is taken away from the scan field and the scan process is interrupted. Continuing to scan additional codes without pressing the cancel button will cause an error beep sound.

#### Set Up Alternate Vendors

Set Up Alternate Vendors – Paradigm ERP by Paragon – Documentation
Home
Purchase Order and Vendors
Set Up Alternate Vendors
This FAQ will go over how to set up alternate vendors
First, go to Inventory > Inventory list and open the item that needs the alternate vendor.
Then go to the “Vendors” tab.
Type in the alternate Vendor ID or select it from the drop down.
Then the vendor number, description, cost, and unit of measure can be filled in.
Purchasing Agent
In
purchasing agent
, items with alternate vendors will show up in both lists of vendors, not just the primary one.
If just the primary vendors are to be shown, select the “Only Show Primary Vendors” option in the filters.

---

[← Back to Contents](#table-of-contents---click-to-navigate)

### WORKFLOW 4: ACCOUNTING & FINANCIAL MANAGEMENT {#accounting-financial-management}

[← Back to Contents](#table-of-contents---click-to-navigate)

**Purpose**: Record transactions, manage cash, and generate financial reports

**When You Use This**:
- Recording sales and purchases
- Creating journal entries
- Processing prepayments
- Generating financial reports

Source: https://docs.goparagon.com/kb-category/accounting/

#### General Journal Entries

General Journal Entries – Paradigm ERP by Paragon – Documentation
Home
Accounting
General Journal Entries
How do I directly affect my General Journal Account balances?
Journal Entries
1.
To add a new Journal Entry, go to General Ledger > Journal Entries.
2.
Add a new entry by clicking the green plus sign at the top of the list, and enter the reference information in the header. The reference needs to be descriptive of what the entry is accomplishing. Then select the date that the journal entry should affect. Information on the Journal Entry import format can be found here:
Journal Entry Import Format
3.
Select the accounts that you need to adjust and enter the credit or debit amount. Double clicking the credit or debit column will auto-fill the remaining amount. Journal entries will need to have equal debits and credits before they can be posted.
4.
After completing your Journal Entry, double check all information and then post it.
Special Cases
Certain situations may arise that require additional care when creating a Journal Entry.
1.
Applying a Journal Entry to a customer account. Some cases will require a journal entry to be created that will apply to a customer account. To do this, select the Accounts Receivable account, then the select the customer to whom the amount needs to be applied in the ‘Name’ column. After posting the Entry, the amounts will show up on the customer’s account
2.
3.
Adjusting Accounts Payable or Accounts Receivable. Use the same process as a regular journal entry, but check the box for ‘Correcting Entry’ for the AR or AP account. This will allow you to adjust the account totals without applying it to a customer/vendor account.
IMPORTANT:
This should only be used if the account balance does not equal the total of your invoices.
Create Reversal
To easily create a reversal journal entry, click the “Create Reversal” button in the header. This can only be done on posted journal entries and will create a new posted journal entry with the debits and credits swapped and the date moved one day forward. This is used for recording/adjusting accruals.

#### Return Payments

Return Payments – Paradigm ERP by Paragon – Documentation
Home
Accounting
Return Payments
This FAQ will go over how to return payments.
The main reason for returning payment would be the case when a customer’s check bounces (also known as a bad check) and it has already been included on a deposit. If this is the case, then the GL accounts will be wrong, saying that the bank account balance is the amount of the payment higher and that the customer doesn’t owe anything. The other reason it may be necessary to return payment, would be if the receivable was made, assigned to an invoice in error, and deposited. In this case the GL accounts would be showing that the amount for the invoice has been paid when it is still due from that customer.
Returning the Payment
Open the receivable or prepayment from which payment will be returned.
Click the button labeled “Returned Payment,” at the top of the receivable.
Choose whether the payment is being returned due to non-sufficient funds or because it was assigned in error.
This will create a duplicate receivable or prepayment with negative amounts, which will show up to be deposited in order to correct the account balances.
On a receivable click “Post” to apply it. Prepayments will post automatically.
Undeposited Funds
The resulting NSF transaction may be posted to Undeposited Funds, and will need to be added to a deposit (which will most likely have a negative balance) for it to post to the bank account and show in your bank reconciliation.
Reversing An NSF
The original transaction cannot be unposted until after the NSF is unposted and deleted. To do this, go to the returned payment and unpost it.
Then click “Delete”.

#### Cash Payment Rounding Level

Cash Payment Rounding Level – Paradigm ERP by Paragon – Documentation
Home
Accounting
Cash Payment Rounding Level
Important
Before enabling this feature, contact Paragon Support to get report adjustments completed.
Enable Cash Payment Rounding Level
This can be enabled by going to
System > Company Preferences > Sales
Enter the cash rounding level and then choose the round direction.
Rounding Directions
Down –
Rounds down to the next interval of the rounding level.
Nearest –
Rounds to the nearest interval of the rounding level.
Up –
Rounds up to the next interval of the rounding level.
Receive Payment
If applied, the cash adjustment will be shown in the
receive payment
screen.
Cash Surcharge GL Account
Cash rounding amounts will be tracking in the account assigned to “Cash Surcharge” in the
Default GL Accounts

#### Month End Close

Month End Close – Paradigm ERP by Paragon – Documentation
Home
Accounting
Month End Close
This FAQ will go over the recommended month end closing procedures for Paradigm ERP.
Unposted Transactions
Go to System >
Reminder List
to check for any Unposted Transactions. If any are listed, go to the corresponding list screen and review and post transactions as needed.
Bank, Credit Card, and Undeposited Funds Accounts
Reconcile all bank and credit card accounts.
Instructions on that can be found here:
Bank Reconciliations
Check for any old unreconciled transactions.
Old unreconciled transactions may indicate duplicate or incorrect entries and may require correcting entries.
Run the Undeposited Funds Reconciliation report by going to System > Reports > General Ledger.
Accounts Receivable
Check the Order List “Finished, Not Invoiced” filter and look for orders that should have been invoiced but are not.
This can also be seen in the “Missed Invoicing for Completed Orders” report.
Reviewing Orders listed under the “In Progress” filter is recommended as well.
Run the Receivables Aging Totals by going to System >
Reports List
> Accounts Receivable and set the date to the last day of the month you are closing.
Verify the Difference amount listed for
customer prepayments
Run the “Unapplied Credits” report and review any unapplied credits for customers.
This shows unapplied credits that could be cleared against invoices, or applied as order prepayments for a customer. See this FAQ for more information on prepayments:
Reassigning Prepayments
4.
Review customer balances, checking for any balances that appear incorrect.
Accounts Payable
Run the “Accounts Payable Aging” report by going to System > Reports List > Accounts Payable and set the date to the last day of the month being closed.
Verify the Difference amount listed for
vendor prepayments
Review vendor balances, checking for any balances that appear incorrect.
Inventory
Open the Inventory List (or
Inventory by Warehouse
if multiple warehouses are set up) then load all items and sort the
Units In Stock
column in “ascending” order to look for items with negative stock.
Correct the inventory quantities on these items as needed using inventory adjustments.
Sort the Units In Stock column in “Descending” order to look for items with unusually high inventory stock values.
Correct the inventory quantities on these items as needed using inventory adjustments.
From the Report List, run the Inventory Valuation By Date report and set the date to the last day of the month you are closing.
Run the Balance Sheet report the General Ledger Section of the Reports Menu and set the date to the last day of the month you are closing.
Compare the GL Account totals on the Inventory Valuation report to the Inventory Account balances on the Balance Sheet. If there are small differences, create a journal entry to adjust the general ledger account balances to match the account balances on the Inventory Valuation report. More info on that process can be found here:
How To Do A Book-To-System Inventory Valuation Adjustment
If there are large differences, more investigation is needed to determine the cause and Paradigm support may need to be contacted to assist with finding the underlying issues.
From the Inventory List, run the Standard Cost Deviation report from the list footer and set the option to compare Standard Cost to Average Cost.
Note any large differences between standard cost and average cost and update standard costs or research incorrect average costs.
Repeat this process for any manufactured items, but choose the option to compare standard cost and assembly cost.
Go to the Inventory > Inventory Builds to view the Build List. Select the “Open Builds” filter, which will show open builds on released orders. Sort the list by the production date column, and review any old, unposted builds to determine if they should be posted.
Lot Depletion
If using
lot tracking
, adjust the depleted lots to 0 on at least a monthly basis. Learn how to mark lots depleted
here
and how to generate a lot depletion inventory adjustment
here
Item Set Up Issues
Run the Item Setup Issues report by going to System > Reports > Inventory and make sure that there are no urgent issues that show up.
Loan Accounts
Verify the balances on all
GL Loan Accounts
match the principal balance on the most recent loan statement or amortization schedule.
Sales Tax
Run the Accounts Receivable Sales Tax report by going to System > Reports > Accounts Receivable for the month you are closing and verify the Tax Collected Total matches the Account Total Tax Collected.
File Sales Tax.
WIP Job Costing
Invoice and Post any completed jobs.
Check the
Job Dashboard
from Accounts Receivable >
Job Dashboard
for any
jobs that can be posted, but are not
Review these jobs and post any that should be.
Run the Job WIP Breakdown report from System > Reports > General Ledger and ensure the total WIP and WIP clearing on the report match the GL account balances on a Balance Sheet run as of the same date.
Run the Job WIP Reconciliation Report from System > Reports > General Ledger and investigate any differences.
Paradigm support may need to assist with creating any correcting entries for these amounts.
Set a Period Closing Date
Setting a Period Closing Date in Paradigm prevents any transactions from being posted or unposted prior to this date.
Set the Period Closing Date by going to the General Ledger menu, clicking Accounting Periods, and then entering the month end date for the period you are closing in the “Close Periods up to and including” field, and then click Close.
Note this is not a permanent close, and you can change the date to a prior date if adjustments are needed at a later time.
Miscellaneous
Run the “Sales/Cost Account Validation” for the prior month by going to System > Reports > General Ledger.
If transactions appear in this report, it can indicate they were posted to incorrect accounts.
Then run the GL Detail report by going to System > Reports > General Ledger and set the Account range to include all Fixed Asset accounts.
Review any activity in Fixed Asset Accounts to ensure incorrect postings were not done to these accounts.
Run the Orphaned GL report by going to System > Reports > General Ledger with a date range including the prior month.
Contact Paradigm support if any orphaned transactions are listed on the report.

#### Intercompany Transactions

Intercompany Transactions – Paradigm ERP by Paragon – Documentation
Home
Accounting
Intercompany Transactions
This FAQ will go over how intercompany transactions can be recorded in Paradigm ERP. This can be used to keep track of transactions that should be included in intercompany eliminations. Intercompany eliminations are necessary when preparing corporate-level financials for two or more related entities that buy and sell to/from each other.
If reports are needed for these intercompany transactions, contact
Paradigm Support
to have these set up.
Intercompany Transactions
Customers
To mark a customer as “intercompany”, check the box below on the customer’s detail tab:
Vendors
To mark a vendor as “intercompany”, check the box below on the vendor’s detail tab:
Journal Entries
To mark a journal entry line as “intercompany”, check the box below on the detail line. If that column is not showing, use the “
Column Chooser
” to display it.

#### Next Check Number

Next Check Number – Paradigm ERP by Paragon – Documentation
Home
Accounting
Next Check Number
This FAQ will go over how to fill in the next check number on a check.
Next Check Number
The next check number can be selected on a check by clicking the green plus button.
Reset Check Numbering
Click the “save” button by the “check number” field to reset the check numbering.
If the user is entering a number ahead of the current check number, they do not need to press this button. It is only needed for moving the next check number backward.

#### Departments, Entities, And Locations

Departments, Entities, And Locations – Paradigm ERP by Paragon – Documentation
Home
Accounting
Departments, Entities, And Locations
This FAQ will go over general ledger departments, entities, and locations in Paradigm ERP. Reports can be set up to view profitability at the department, entity, or location level instead of just the account/corporate level, contact
Paragon Support
to have these set up.
Departments
are used to allocate postings into separate divisions within a single GL account, and are most commonly used to track the profitability of separate types of sales. Common sale types set up as departments would be wholesale, contractor, retail, etc.
Entities
are used if there are multiple DBAs being used under a single legal entity. An entity would be created in Paradigm for each DBA (Doing Business As).
Locations
are used to specify separate locations/warehouses under a certain entity. Locations can be set anywhere that GL departments are set.
Departments, Entities, And Locations Editor
The editor can be found by going to General Ledger > Departments, Entities, And Locations
From this screen departments, entities, and locations can be configured. Department defaults and the departments assignment type can be changed here too.
It is recommended that GL departments are assigned by user.
Locations will not be required on transactions until the “Default GL Location ID” is set.
Assigning Departments And Locations By User
To assign departments and locations by user, select “User” from the “Assign Dept. By” options. Then assign a department and location to each user.
Creating Dept. Allocation Group
In this form, department allocation groups can be made. This will split the cost between the different departments that are added to the group, based on the percentage set for it. This can be used on
journal entries
checks
, and
credit card charges
Using Dept Allocation Groups
Allocation groups can be applied to purchase invoices, journal entries, and can be set directly on a vendor by going to detail tab.

#### Receivables

Receivables – Paradigm ERP by Paragon – Documentation
Home
Accounting
Receivables
This FAQ will go over receivables in Paradigm.
Information on customer prepayments can be found here:
Customer Prepayments
Creating Receivables
Receive Payment
A receivable will be created when the
“Receive Payment” button
is used on an invoice and payment is received.
Manually Creating Receivables
A receivable can be manually created by going to Accounts Receivable > Receivables
Invoices, credit memos, and prepayments will be shown in the list – this shows a breakdown of the full customer balance. Prepayments linked to orders still show here and should not be used.
Double clicking on the “Payment” column field will bring in the entire amount due for that line.
Double clicking on the “Discount” column field will bring in the terms discount.
Overpayments
An overpayment is created when the receivable is more than the amount due. More information on overpayments can be found here:
Overpayments
Order Payments
To create order payments from the receivable, click “Add Order Payments”.
Then select the orders to apply the payments to.
Converting A Prepayment To A Receivable
Customer prepayments
can be converted to a receivable by using the “Convert To Receivable” button on the prepayment.

#### Factoring Labor Expense Into Finished Good Cost

Factoring Labor Expense Into Finished Good Cost – Paradigm ERP by Paragon – Documentation
Home
Accounting
Factoring Labor Expense Into Finished Good Cost
This FAQ will go over how to factor labor expense into the finished good cost, also known as “Item Labor Recovery”. This process can be used for manufacturing expense recovery of any type, such as equipment or maintenance expenses.
Create A Labor Offsetting Expense Account
Go to
General Ledger > Chart Of Accounts > Add > Expense Account
Labor Item Set Up
Set up a non-stock item labor item by choosing a non-stock
item class
account
As production builds with the labor component are completed, expense will be pulled from this account and included in the finished good item’s inventory/cost account.
Add Labor Item To The Assembly
After the labor item is set up, it can be added to the
manufactured item’s
assembly. To do this for all manufactured items, the
Assembly data import
can be used.

#### Return a Customer Credit Balance

Return a Customer Credit Balance – Paradigm ERP by Paragon – Documentation
Home
Accounting
Return a Customer Credit Balance
This FAQ will go over how to return a customer credit balance.
Customer credit balances can come from unused
prepayments
overpayments
, and
credit memos
. Sometimes, you may want to pay that money to the customer via a check, cash, or credit card and then mark the credit balance as having been used.
Returning a Customer Credit Balance by a Check
Create a Check for The Customer
Go to Banking > Checks and then click the green plus button.
Enter the amount of the credit to refund, as well as selecting the payee type of “Customer” and selecting the customer ID.
Select the Accounts Receivable code in the detail section of the check.
Select the customer ID in the Name column for the Accounts Receivable line in the check detail.
Type the amount of the refund again or double click the amount to copy it from the check header.
Post the check
This creates an invoice for the customer which brings the customer balance in this case to zero. At this point, the invoice is still unpaid and the
prepayment
is still not applied. That will be taken care of in the next step.
Create a Receivable for the Customer and Apply the Balance of the Prepayment to the Unpaid Invoice
Go to Accounts Receivable >
Receive Payments
and click the green plus button.
Double click in the
Payment
Post
the Receivable.
The customer credit has now been removed from their account, and you have a check that can be printed off and given to them.
Returning a Customer Credit Balance by Cash or Credit Card
This section will go over how to issue a credit back on a card or by cash.
Go to Accounts Receivable >
Receive Payments
and click the green plus button.
Enter the amount of the credit to refund as a negative, select the payment method, and select the customer ID.
Select the ‘
Receive Payment
‘ button and return the payment. The amount will automatically turn into a negative when typed in for cash or sent to the
credit card
machine.

#### Report List

Report List – Paradigm ERP by Paragon – Documentation
Home
Accounting
Report List
The report list is where summary and financial reports can be found. These reports are typically high-level company reports like Profit and Loss, Balance Sheet, Accounts Receivable Aging, Sales Totals by Customer, etc. Reports for ranges of customers or items are not typically run from this list and are instead run from their respective list screens. Information on editing users that can access these reports can be found here:
Report Security
and info on previewing reports can be found here:
Report Preview
Reports Ribbon
Reports set up in the report list can be also run from the “Reports” section in the ribbon.
Report List
The report list can be found by going to System > Reports.
From here, reports can be found by looking through the different groups on the left, or typing in the search bar (highlight below).
From here, a report can be previewed by double clicking it, or it can be saved as a PDF, printed, or exported as a CSV or XLS file by clicking the corresponding button.
Save Options
There are a few different ways to view or save a report in Paradigm. In the order they appear in the image below they are:
Save XLS
Save CSV
Save PDF
Preview
Print
Right clicking a report will display these options as well.
Once a report is saved, a pop up will appear with the file location and the option to open it or to open the folder it was saved in.
Reports are saved at “C:\Users\%username%\Documents\Paradigm” by default, but this can be changed by entering another file path here: System > User Preferences > Printing/Startup > PDF Defaults.
Reports with Parameters
Some reports require input before they can be run, such as a date range or customer type filters. If the report requires input, a parameter specification box will appear to collect this information. Fill out the parameters, then click “Continue” to run the report.
The most common parameter value needed is a date range. Specifying a date range can be done from the parameter specification popup, or it can be done directly in the report list header. If a date range is entered at the top of the report list, that date range will be automatically used when running reports, allowing multiple reports to be run for the same date range with minimal data entry.
Favorite Reports
Reports can be favorited by going to the Home tab and using the “Edit Favorite Reports” button. From there, reports can be saved along with a date range, refresh timer, and whether or not to open it on startup.
Opening Report as Pop Up
To set reports to always preview as a popup, go to Company Preferences > Printing/Startup and check “Always open reports as popup”.
Customize Column Layout/Visibility
The column layout can be edited by right clicking on the report list header and clicking “Column Chooser” and unselecting any columns that don’t need to be shown. More info on that can be found here:
How to Customize List Layouts

#### Write Off Bad Debts

Write Off Bad Debts – Paradigm ERP by Paragon – Documentation
Home
Accounting
Write Off Bad Debts
This FAQ will go over how to write off unpaid invoices (bad debts) for a customer.
Journal Entry
Go to General Ledger >
Journal Entries
and click the green plus button.
Make the first line a credit to accounts receivable for the amount that the customer owes and select the customer’s ID from the dropdown under “Name”.
The second line should be a debit to the “Bad Debts” expense account.
Make sure that the “correcting entry” box for both lines is
not
checked.
Post the
journal entry
The journal entry can now be applied to the unpaid invoice(s) by selecting the invoices from the list that appears after clicking “Post”. Clicking “Cancel” will allow the journal entry to post without applying it to any outstanding invoices.
Next click “Finish”. This will automatically create a receivable to apply the journal entry and unpaid invoices against each other.

#### Sales Tax Code Set Up

Sales Tax Code Set Up – Paradigm ERP by Paragon – Documentation
Home
Accounting
Sales Tax Code Set Up
This FAQ will go over how to set up tax codes in Paradigm. Another way tax codes can be set up is by using Avalara’s AvaTax. More information on that can be found here:
AvaTax
Sales Tax Collected
Sales tax codes for collected sales tax can be created and edited by going to System > Company Preferences dropdown > Sales Tax Collected. The tax codes set here can be used on AR transactions. (Orders, Invoices, etc.)
From here, sales tax codes can be created by entering the sales tax code at the top, and applying tax IDs in the bottom section. To create a new tax ID, click on the “Tax IDs” button at the top, or click on the folder icon in the bottom section.
Tax Code Checkbox Options
Max Taxable Amount –
The max amount that can be taxed on the transaction.
Self Assessed Use Tax –
Select whether or not it is a self assessed use tax.
Tax Freight –
Applies the tax code to the freight charge.
Tax Other –
Applies the tax code to the other charges.
Auto-Replace –
This is only used on 0% tax rates, and allows for the tax rate to be replaced by another State’s tax rate. This is used when the state that the company is based in has a 0% tax rate, but is shipping orders to states that do collect tax.
Discontinued –
Marks the tax code as discontinued.
Template Tax ID
When creating new tax IDs, a template tax ID can be chosen from the drop down. Any new tax IDs will get default values from this template tax ID for class tax code settings. These are settings determining which classes of items will be taxable under this tax.
Sales Tax Collected Set Up Example
The below example shows a sale tax ID being created and assigned to a new tax code.
Default Sales Tax Code – Accounts Receivable
Sales Tax Paid
Sales tax paid are almost always use taxes, but are rarely needed. The tax codes for sales tax being paid can be created and edited by going to System > Company Preferences dropdown > Sales Tax Paid. The tax codes set here, will be used on AP transactions. (POs, Purchase Invoices, etc.)
From here, sales tax codes can be created by entering the sales tax code at the top, and applying a tax ID in the bottom section. To create a new tax ID, click on the “Tax IDs” button at the top, or click on the folder icon in the bottom section.
Default Sales Tax Code – Accounts Payable

#### Financial Analysis Tool

Financial Analysis Tool – Paradigm ERP by Paragon – Documentation
Home
NEW!
Financial Analysis Tool
Home
Accounting
Financial Analysis Tool
This FAQ will go over the Financial Analysis Tool in Paradigm ERP. This tool can be found by going to General Ledger > Financial Analysis Tool
Double click on a number to see the GL entries that make up the total.
Once that screen is open, click the folder icon to open the transaction.
Financial Analysis Tool
Report Type
Profit and Loss –
Displays the data in a profit & loss format.
Balance Sheet –
Displays the date in a balance sheet format.
Report Display
List –
Displays a list of all accounts.
Chart –
Displays the header accounts on a chart.
Date Range
Select the date range for the data needed.
Group By
Choose an option to group the columns by:
Month
Quarter
Year
Department
Total
Additional Columns
Prior year comparison –
Compares against the prior year.
Budget Comparison –
Compares against the selected
budget
Prior Period
Comparison
Compares against the previous period.
For example, if grouping by month it will compare against the previous month.
Filtering
GL Dept –
Filters the data to the selected
department
Job –
Filters the data to the selected
job
Refresh Button
The refresh button can be used to update the data once the date range, group by, or any other setting is changed.
Switching between Profit and Loss or Balance Sheet will automatically refresh the data.
Export Button
The export button can be used to export the data into an excel sheet.

#### Positive Pay Export

Positive Pay Export – Paradigm ERP by Paragon – Documentation
Home
Accounting
Positive Pay Export
This FAQ will go over the Positive Pay Export options in Paradigm.
Bank Account Set Up
The Positive Pay format can be set up by going to General Ledger >
Chart Of Accounts
> open the
bank account
and then set the export format.
Using The Positive Pay Export
To use the “Positive Pay Export”, go to the
Bank Account Register
and set the date range, then click “Positive Pay Export”.
A pop up will be shown to select the date and will show how many checks were found.
Positive Pay Export Formats
This is a comma separated column list used when doing a Positive Pay Export.
The following columns are supported: CHECKNUMBER,AMOUNT,PAYEE,DATE,ACCOUNTNUMBER,ISSUE,ISSUEORVOID,VENDORID
If you want to include column headers, add the desired name after the column name, separated with a colon:
CHECKNUMBER:CheckNum
The resulting string might look like this: CHECKNUMBER:CheckNum,AMOUNT:Amt,PAYEE:Payee
Available Formats
Format #0:
CHECKNUMBER,AMOUNT,PAYEE,DATE
Format #1:
ACCOUNTNUMBER,DATE,CHECKNUMBER,AMOUNT,PAYEE
Format #2:
ACCOUNTNUMBER:BankAccountNumber,AMOUNT:CheckAmount,CHECKNUMBER:CheckNum
,DATE:CheckDate,ISSUEORVOID:IssueOrVoid,PAYEE:PayeeName
Format #3:
CHECKNUMBER,PAYEE,AMOUNT,DATE
Format #4:
VENDORID,PAYEE,DATE,CHECKNUMBER,AMOUNT
Format #5:
CHECKNUMBER,AMOUNT,DATE,PAYEE
Format #6:
CHECKNUMBER,DATE,PAYEE,AMOUNT
Format #7:
CHECKNUMBER,AMOUNT,ISSUE,DATE,VENDORID,ACCOUNTNUMBER
CUSTOM:
Enter the columns needed.
Export Page
A Positive Pay Export page can be set up in Paradigm.
This can be used to export bank account data in the Positive Pay format, the following formats are available:
Format #0 (Default): CheckNum,CheckAmount,Payee,CheckDate
Format #1: BankAccountNumber,CheckDate,CheckNum,CheckAmount,Payee
Format #2: BankAccountNumber,CheckAmount,CheckNum,CheckDate,IssueOrVoid,PayeeName. This format also includes a header line.
Format #3: CheckNum, PayeeName, CheckAmount, CheckDate
Format #5: CheckNum, CheckAmount, CheckDate, PayeeName
Format #6: CheckNum, CheckDate, PayeeName, CheckAmount

#### Bank Feed

Bank Feed – Paradigm ERP by Paragon – Documentation
Home
Accounting
Bank Feed
This FAQ will go over the bank feed list in Paradigm. Bank transactions in the bank feed can be automatically imported by linking a
bank account
to Paradigm. More information on that can be found here:
Bank Account Linking
Bank Feed List
The bank feed can be found by going to Banking > Bank Feed.
Relink & Download Bank Transactions
Relink Transactions – This can be used to refresh links to transactions in Paradigm.
This would be used if bank transaction links have been cleared or if new transactions have been created.
Download Transactions – Downloads any available bank transactions.
The “Last Update” date is the last time bank transactions were downloaded.
Linking Vendors
A vendor can be linked to a bank transaction by selecting it from the dropdown.
Vendors can be automatically linked, by setting up a “CCVendorCode” attribute on the vendor.
This will try to match on the merchant name, and if that does not match it will check the description.
More information on that can be found here:
“CCVendorCode” Vendor Attribute
Once a vendor is linked, the expense account will be changed to the expense account on the vendor.
To “unlink” a vendor or a transaction, click the gray “X”.
If the set expense account is not correct, it can be changed from this screen.
Actions
Match – This button will appear if a bank transaction has been linked to a transaction in Paradigm.
Bank transactions are linked to existing transaction in Paradigm based on the amount. If there are multiple bank transactions with the same amount, it will match with the transaction that has the closest date.
Create – This button will be shown if the bank transaction has not yet been linked to a transaction in Paradigm.
Clicking the “Create” button on an expense for a credit card account will create and post a
CC charge
Clicking the “Create” button on an unlinked deposit will create a receivable. The user still needs to manually select the customer and post.
Clicking this button on a
bank account
will create a write check if there is a check number specified. If a check number is not specified, a withdrawal will be created.
Ignore – Ignores the bank transaction and hides it from the list.
Before a transaction is matched, these optional columns can be filled out for the transaction as well:
Department
Job
, Job Phase,
Job Class
, Reference Number, and Cardholder Name. When a transaction is matched or created in the bank feed screen, that transaction is marked to reconcile in the
bank reconciliation
screen and the ending bank balance field is set to the new total. Once the transactions have been linked and created, the bank reconciliation can be posted from the
bank reconciliation
screen.
Selecting Multiple Bank Transactions
When multiple bank transactions are selected, the following options will be shown:
Accept Selected – Marks the lines as matched, or creates a transaction if it has not been linked yet.
Ignore Selected – Ignores the selected lines.
Cancel – Unselects the lines.
Manually Import Bank Transactions
Manual importing into the bank feed screen can only be done on accounts that are not set up with the
bank feed integration
. Credit card charges can be manually imported by following this FAQ:
Credit Card Transaction Import
The available columns are shown below. If the AccountID column is not included in the import, all lines in the import will be assigned to the currently selected account in the bank feed screen.
To import the sheet, click the “Import” button on an account that has not been linked.
Available Columns
The columns marked with a star are required.
AccountID
Date*
Amount*
CheckNumber*
Description*
MerchantName
Website
Example Sheet

#### Payroll Options

Payroll Options – Paradigm ERP by Paragon – Documentation
Home
Accounting
Payroll Options
This FAQ will go over payroll providers that can provide files to import payroll into Paradigm. Paradigm does not provide payroll or time clock functionality.
Payroll Options
Paycor is a common option, but their support tends to be very lacking.
https://www.paycor.com/
APS is both a payroll and HR management system. Their product and support are good, but they are a higher end solution ($$$).
https://apspayroll.com/
ADP is a good payroll option.
https://www.adp.com/
Paychex is a good payroll option as well.
https://www.paychex.com/

#### Bank Reconciliations

Bank Reconciliations – Paradigm ERP by Paragon – Documentation
Home
Accounting
Bank Reconciliations
To do a bank reconciliation, start by going to Banking > Bank Reconciliation.
Once both differences are zero, click the post button at the top of the reconciliation [8] to finalize the entry. Note that it cannot be posted if there is a difference on the reconciliation. You can then run a reconciliation
report
to have a physical copy of the finished reconciliation.
Unpost Previous
Clicking “Unpost Previous” will unpost the previous reconciliation for the selected account and delete it. Any transactions from the previous reconciliation will then show up in this list to be reconciled again.
Select by Date
To select all transactions in a given date range, click the “Select by Date” button and enter in the date range.

#### Recording Cash Back On A Debit Card Transaction

Recording Cash Back On A Debit Card Transaction – Paradigm ERP by Paragon – Documentation
Home
Accounting
Recording Cash Back On A Debit Card Transaction
This FAQ will go over how to record in Paradigm when a customer asks for additional cash on a debit card transaction.
Cash Back
When a customer asks for cash back, record this by adding a Undeposited Funds GL line for the cash amount to the invoice before posting it.

#### Loans

Loans – Paradigm ERP by Paragon – Documentation
Home
Accounting
Loans
This FAQ will go over how to record a loan balance and paying the loan.
Create GL Accounts
The first step is to create a GL liability account for each loan. More information on creating GL accounts can be found here:
Create GL Accounts
Entering The Loan Balance
To enter the loan opening balance,
create a deposit
to the asset account given for the loan (bank, equipment, etc.). The Account ID selected on the deposit detail line should the liability account created for the loan.
If the loan is a part of a purchase and you never receive the actual funds, use a
journal entry
to credit the loan account with the beginning balance of the loan, and debit the asset or expense account associated with the purchase.
Paying The Loan Balance
To record paying the loan balance, a
favorited
withdrawal can be made. Each month the
withdrawal
can be created from the favorited transaction, when the loan payment is made.
Set up the withdrawal from the
bank account
used to make the loan payment. The principal amount should be recorded on a detail line referencing the loan liability account, and the interest amount should be record on a line referencing an interest expense account.

#### Paying Sales Tax

Paying Sales Tax – Paradigm ERP by Paragon – Documentation
Home
Accounting
Paying Sales Tax
This FAQ will go over how to record sales tax being paid in Paradigm. There is also a training video on how to do this, which can be found by going to Help >
Training Videos
> Accounting > Accounting Training – Paying Sales Tax
Set The Period Close Date
The first step is to set the accounting period close date by going to General Ledger > Accounting Periods. This is also a step of the
month end close
process.
Sales Tax Collected
To see how much sales tax was collected, go to
Reports
> Accounts Receivable > Sales Tax Report
Record Paid Sales Tax
To record paying sales tax in Paradigm, create a
withdrawal
and set the
vendor
to the government office the tax is being paid to. The
vendor’s default expense account
should be set to the liability account that the tax is being paid from.

#### Raw Material vs Finished Good Material Inventory Tracking

Raw Material vs Finished Good Material Inventory Tracking – Paradigm ERP by Paragon – Documentation
Home
Accounting
Raw Material vs Finished Good Material Inventory Tracking
This FAQ will go over the accounting process of a coil as it is purchased, manufactured into a panel, and then invoiced to the
customer
Purchase
When a coil is purchased, it will show up in the raw material inventory
account
Manufacture
When a panel is manufactured out of the coil, it will then be moved to the finished goods inventory account. This step happens when the panel is marked completed in the shop. This is true for items that are set to track stock. Nonstock items, like special trim, post directly from inventory to COGS when the build is posted.
Invoice
After the customer is invoiced, it will then be moved to the panel COGS (Cost of Goods Sold) account.

#### Vendor Default Expense Account

Vendor Default Expense Account – Paradigm ERP by Paragon – Documentation
Home
Accounting
Vendor Default Expense Account
This FAQ will go over how to set the vendor default expense account and what it is used for.
Vendor Detail
The vendor default expense account can be set by going to the Vendor’s detail tab. This expense account is used for
bills
withdrawals
checks
credit card charges
, and
bank feed

#### Bill Entry

Bill Entry – Paradigm ERP by Paragon – Documentation
Home
Accounting
Bill Entry
This FAQ will go over how to enter bills in Paradigm, which are used to record non-inventory expenses. For expenses that can be paid now, a check can be recorded:
Checks & Withdrawals
Purchase Invoice
Bills can be entered by creating a purchase invoice and setting the type to “Bill”. This will add an expense line that can be used to record the bill amounts. The account used on the line is the
vendor’s default expense account
. Note that bills are for non-inventory expenses.
Once the bills from the selected vendor have been entered, post the transaction.
Recurring Bill
If this is a recurring bill, the favorited transaction feature can be used. See this FAQ for more information:
Favorited Transactions

#### Depreciation

Depreciation – Paradigm ERP by Paragon – Documentation
Home
Accounting
Depreciation
This FAQ will go over how to record depreciation in Paradigm.
Journal Entry
To record depreciation in Paradigm, a
journal entry
can be used. Debit the depreciation amount to a depreciation account and credit the same amount to an accumulated depreciation account. Once that is done, post the journal entry.
Favorite Transaction
To continue recording depreciation in the future, favorite this journal entry so that it can be duplicated as needed in the future.
More information on favorited transactions can be found here:
Favorited Transactions

#### Cash vs Accrual Accounting Method

Cash vs Accrual Accounting Method – Paradigm ERP by Paragon – Documentation
Home
Accounting
Cash vs Accrual Accounting Method
Paradigm is an accrual-based accounting system.

#### Bank Account Linking

Bank Account Linking – Paradigm ERP by Paragon – Documentation
Home
Accounting
Bank Account Linking
This FAQ will go over how to link a bank account or credit card for the
bank feed
feature. This is done through Paradigm’s integrated Plaid account.
The following URL must be whitelisted to use this feature:
https://production.plaid.com
Account Link Set Up
To link a bank account, go to Company Preferences > Add-Ons > Bank Feed Integration > Account Link Set Up. The API key and API mode will be set by Paragon and do not need to be edited.
Account Linking
Force Reload Transactions
– This reloads
all
transactions, even if they have already been downloaded.
Un-Link Institution
– Un-links the institution that is currently selected in the drop down.
Edit Link
– Edit the accounts that are linked to the institution.
Link New Institution
– Brings up the pop up form to link a new institution.
See the next section for more information on that.
Link New Institution
Search for the bank account or credit card provider. An online banking login must be set up prior to linking the account to Paradigm.
Enter the login credentials and select the accounts to link.
Once that is complete, select a GL account for each bank and credit card account added.
When a new account is linked, transactions will be imported for the current month and the full two months before that. The imported transactions can be found by going to Banking > Bank Feed.

#### Currency Conversion

Currency Conversion – Paradigm ERP by Paragon – Documentation
Home
Accounting
Currency Conversion
This FAQ will go over how to set up multiple currencies and exchange rates in Paradigm.
Adding A New Currency
To add a new currency, go to System > Company Preference dropdown > Currency Rates
Then add the new currency information.
Editing Exchange Rates
To add the exchange rate, double click on the “Actual Rate” field for the new currency. A pop up form will appear, enter the exchange rate in the section highlighted below:

#### Budgets

Budgets – Paradigm ERP by Paragon – Documentation
Home
Accounting
Budgets
This FAQ will go over the budgeting feature in Paradigm. This feature can be helpful when managing finances for specific accounts.
Go to General Ledger > Budgets
To create a new budget, click “Create Budget” and choose from the options in the following popup.
Create a profile from scratch
– This will create a blank budget profile
Copy data from a previous budget-
This will prompt the user to copy from an existing budget profile, optionally modified by a certain percentage.
Import budget from file
– This will prompt users to select an Excel file to import.
Exporting
Fill out desired file export location. Choose the export format.
Importing
When selecting import, users will be warned that the imported data will replace the current data on the budget profile.
After selecting confirm, users will be able to select which file to import.
Budgeting Report
Contact
Paradigm Support
to build budget reports to compare budgeted vs actual.

#### Overpayments

Overpayments – Paradigm ERP by Paragon – Documentation
Home
Accounting
Overpayments
This FAQ will cover overpayments in Paradigm. An overpayment is when a customer or vendor pays or is paid more than the amount due.
Customer Overpayments
When the receivable is posted, the user will be asked how to handle the overpayment and can choose to create an overpayment credit for the remaining amount. Overpayments can be used as credit to apply against future invoices.
Clicking “Yes” will post the receivable and create the overpayment credit, which can be seen by starting a new receivable for the customer and will show as a negative amount. Clicking “No” will cancel the posting and allow the user to make further edits.
Using An Overpayment Credit
When an order is started with the customer that overpaid, there is an “Unapplied Credits” field that the customer may choose to use.
More information on how to apply credits can be found here:
Applying Credits

#### Default GL Accounts

Default GL Accounts – Paradigm ERP by Paragon – Documentation
Home
Accounting
Default GL Accounts
This FAQ will go over the Default GL accounts feature in Paradigm. This feature allows the user to set defaults on Sales, Purchases, Inventory, Receivables, Payables, Banking, Equity, Payroll, Job costing, Misc.
General Ledger > Default GL Accounts.
From this popup, users can set defaults on things like:
Default Bank Accounts can be set in Payables and the Banking tab.
Default Sales Tax Codes can be set for AR Invoices and AP voucher.
Default Credit Card can be set in the Banking tab

#### Favorited Transactions

Favorited Transactions – Paradigm ERP by Paragon – Documentation
Home
Accounting
Favorited Transactions
This FAQ will go over how to set up and use favorited transactions, also known as memorized transactions. As of now the duplication cannot be scheduled and must be done manually.
The list of favorited transactions can be found by going to Banking > Favorited Transactions
Favoriting A Transaction
To favorite a transaction, click the “Favorite Transaction” button in the header. The transaction types that can be favorited are: Vouchers, CC Charges, Invoices, Journal Entries, and Withdrawals.
Name it and add any notes. Once it is created it will appear in the favorited transactions list.
Duplicating Favorited Transactions
To duplicated favorited transactions, first select the transaction date and whether or not to post it after it is created. The transaction date is the date that is set on the transactions that are created.
Then select the transactions to be duplicated and click “Duplicate”.
Miscellaneous Info
Columns
Date Last Duplicated – The date the transaction was last duplicated on.
Date on last duplication – The transaction date set on the last duplicated transaction.
Last duplication ID – The ID of the last duplicated transaction.
Right Click Options
Duplicate – Duplicate the transaction.
Open – Open the transaction.
Delete Favorite – Remove the transaction from the favorites list.

#### Bank Account List

Bank Account List – Paradigm ERP by Paragon – Documentation
Home
Accounting
Bank Account List
This FAQ will go over the bank account list in Paradigm.
Bank Accounts
The bank accounts list can be found by going to Banking > Bank Accounts.
Note
that credit card accounts are shown here as well.
Double clicking on a bank account will open the check register or a credit card account to open the credit card register.
The filtered balance (highlighted above) shows the total of the checks that the bank account register list is filtered to. Information on reprinting checks can be found here:
Printing A Range Of Checks

#### Import Credit Card Transactions

Import Credit Card Transactions – Paradigm ERP by Paragon – Documentation
Home
Accounting
Import Credit Card Transactions
This FAQ will go over how to do a credit card transaction import. Supported transaction types are: .xls, .xlsx, .csv, .qbo (QuickBooks Web Connect).
These imports are done by going to Banking > Credit Cards List and clicking on the import button.
Then choose the file path and account ID.
Column Names
For .xls, .xlsx and .csv, the supported column names are:
Ref/Check
Check
Check Number
Card
Transaction Date
Date
Trans. Date
Description
Type
Amount
Amount Debit
Amount Credit
Memo
Payee
Name
Vendor Attributes
Vendor Attributes can be setup to auto set the Vendor name based on the imported Payee value.
Create a vendor attribute named CCVendorCode
Add the attribute to the vendor and specify a value. Values can be set up as follows:
A value without any * characters is an exact match.
For example, if the credit card transaction payee is “ABC Acme”, setting an attribute value “ABC Acme” on a vendor will auto set that vendor’s name on the transaction.
A value with a * character as a prefix and and a suffix is a contains match.
For example, if the credit card transaction payee is “ABC Acme”, setting an attribute value “*ABC*” on a vendor will auto set that vendor’s name on any credit card transactions that contain the phrase “ABC”.
A value with a * character as a prefix is an “Ends With” match. (i.e. *Acme is “Ends with” Acme)
A value with a * character as a suffix is a “Starts With” match. (i.e. Acme* is “Starts with” Acme)
Multiple terms can also be specified, separated by a space. An example would be “*Acme* *ABC*” This would match the vendor name to any payee’s that contain “Acme”
and
“ABC”.
Note
the attribute can be added multiple times to the same vendor, allowing different pattern matches to match to the vendor.

#### Credit Card Charges

Credit Card Charges – Paradigm ERP by Paragon – Documentation
Home
Accounting
Credit Card Charges
This FAQ will go over how to create credit card charges in Paradigm.
Credit card charges can be found by going to Banking > Credit Card Charges.
After a new one is created, choose a credit card from the drop down. Alternatively, choose the vendor first and the default credit card account will be filled in. Choosing the vendor will also fill in the
default expense account
for it. A vendor is not required, but a payee must be entered.
Once the information has been filled in, click “Add” or “Post and Add”. “Add” will create a new credit card charge, “Post and Add” will post it and create a new one.
Creating a new credit card charge from an existing one will automatically select the credit card account from the original charge on the newly created charge.
Information on receipt captures can be found here:
Receipt Capture

#### Writing Off AP balances

Writing Off AP balances – Paradigm ERP by Paragon – Documentation
Home
Accounting
Writing Off AP balances
This FAQ will go over how to write off AP balances using a journal entries.
Journal Entry
Start by creating a journal entry. The first line on journal entry will be to the AP account, with the Vendor on the purchase invoice selected in the “Name” column and the debit column set to the balance to write off. The second line is the offsetting account, and typically is set to the “Discounts Taken” account (the same account as terms discounts on purchases posts to). Make sure that the “correcting entry” box for both lines is
not
checked.

#### GL Recap

GL Recap – Paradigm ERP by Paragon – Documentation
Home
Accounting
GL Recap
This FAQ will go over the GL Recap button in the Paradigm.
The GL recap button can be found in the header of any posted transaction. This button is also sometimes referred to as “Recap Inventory”.
This will show the amount that was credited or debited to each account.
“Group By Account” makes it show only one entry per account instead of every entry.
Clicking the “Inventory” button will show the products that were received and sold.

#### Track Discounts in GL

Track Discounts in GL – Paradigm ERP by Paragon – Documentation
Home
Accounting
Track Discounts in GL
This FAQ will go over how to enable and use the “Track Discounts in General Ledger” option. When this is enabled, discounts entered in the “Discount %” column on line items will be posted into a cost of sales and offsetting income account. If this is not enabled, the amount posted to the item’s sales account is simply the discounted amount. This option allows for discounts to be seen more clearly on financial statements.
Sales
To enable this setting for sales, go to Company Preferences > Sales > Behavior
This will debit the discount amount to the “Discounts Given” account.
Purchasing
To enable this setting for purchasing, go to Company Preferences > Purchases > Behavior
This will debit the discount amount to the “Discounts Taken” account.
Example
Enabled
Below is the
GL entries
that were created for the example transaction when “Track Discounts in General Ledger” was enabled.
Disabled
Below is the
GL entries
that were created for the example transaction when “Track Discounts in General Ledger” was not enabled.
Warranty Work Invoices
A “Warranty Work” invoice will post a discount amount against the “Warranty Work” and “Warranty Work Offset” accounts. This will only work if “Track Discount in General Ledger” is enabled. To select the warranty work accounts, go to General Ledger >
Default GL Accounts

#### Closing A Fiscal Year

Closing A Fiscal Year – Paradigm ERP by Paragon – Documentation
Home
Accounting
Closing A Fiscal Year
This FAQ will go over how to close a fiscal year.
Closing a fiscal year is a process that is typically done once annually, after the accounting entries to finalize the prior fiscal year have been completed. Closing a fiscal year cannot be undone, so make sure all entries are indeed finalized and correct in Paradigm before continuing.
The fiscal year close process summarizes all of the GL entries from that period and enters them as the opening balances for the next fiscal year. Profit is summarized and moved from Current Year Earnings to Retained Earnings as of the first day in the fiscal period.
It is strongly recommended that a database backup be taken before doing the fiscal year close, in case something causes the archive to fail. Closing a fiscal year is very resource intensive on the server and can cause the rest of Paradigm to lag or stop working while the close is running. Because of this, most clients have Paragon take care of closing fiscal periods after-hours for them.
It is also recommended to export a balance sheet and profit and loss as of the last day of the fiscal year, then close the year, then run the reports again to verify that no totals have changed.
How to Close A Fiscal Year
First, go to General Ledger > Close Fiscal Year
Then select a retained earnings account and the date range to close. Once those are selected, click “Continue”.
Then verify that the dates entered are correct and click “Continue”.
Enter the user name and password.
A pop up will then appear with a message about how many opening balances were closed.

#### Create GL Accounts

Create GL Accounts – Paradigm ERP by Paragon – Documentation
Home
Accounting
Create GL Accounts
This FAQ will go over how to create GL accounts in Paradigm.
Information on journal entries can be found here:
General Journal Entries
Chart Of Accounts
To start, go to General Ledger > Chart of Accounts
Click the “Add” button.
Then select an account type by clicking on one or pressing the underlined letter on the keyboard that corresponds with the account type.
Next, enter an account ID.
If an duplicate account number is entered, the window will reappear with the following message:
An account with this account ID already exists.
Then fill out all of the information for the GL account and click “Save” when it is completed. To save and add a new account, click the “Add” button or “
Ctrl + N
“.
Report Use Tax on purchases made on this account –
When the GL account is on an order/invoice detail line for a
WIP job
or a transaction with a “
Use Tax
” code, this setting controls if that line’s cost counts towards the total taxable cost when a use tax code is assigned to the transaction.

#### Cost Methods

Cost Methods – Paradigm ERP by Paragon – Documentation
Home
Accounting
Cost Methods
This FAQ will go over the different costing methods for inventory items. Cost methods can be chosen by going to the general tab of an item, clicking the pencil icon beside the cost method field, and selecting one from the dropdown list. Cost methods are typically set to the same value for all items.
The cost method controls how the cost of an item will be calculated when posting a sale/usage transaction.
Average Cost
Average cost is the total value divided by the total stock. More information on how it is calculated can be found here:
Average Cost Calculation
FIFO (First In, First Out)
Inventory with the oldest receiver date will be relieved first.
Lot Cost
Lot-tracked products should typically be set to FIFO, which causes them to use the actual cost of the sold lot.
LIFO (Last In, First Out)
Inventory with the newest receiver date will be relieved first.
Special Order
This cost method uses just the cost from the “Standard Cost” field, and is not based off of average cost or when it was received.

#### Checks & Withdrawals

Checks & Withdrawals – Paradigm ERP by Paragon – Documentation
Home
Accounting
Checks & Withdrawals
This FAQ will go over how to make a withdrawal or write a check in Paradigm.
Withdrawal
Withdrawals should be used for payments from the bank account that weren’t done via a check, such as an ACH or Wire Transfer.
To start, go to Banking > Withdrawals and click the green plus button to create a new withdrawal.
Select the correct bank account and GL department.
Choose the payee type (Vendor, Customer, Employee, or Other) then select the contact ID for the payment.
The GL account brought in by default when selecting the vendor is the expense account ID from the vendor’s detail tab.
More information on the vendor default expense account can be found here:
Vendor Default Expense Account
Enter the withdrawal amount(s) and the account that it is getting withdrawn from, then click “Post”.
More than one detail line can be entered to split the amount across more than on GL account, as long as the amounts add up to the withdrawal total at the top.
Bank Account Transfers
To record a bank account transfer in Paradigm, a withdrawal from one bank account to another can be done.
Check
To record checks in Paradigm, go to Banking > Checks and click the green plus button to create a new check.
The same steps as shown in the withdrawal section can be done, along with selecting a check number.

#### Average Cost Calculation

Average Cost Calculation – Paradigm ERP by Paragon – Documentation
Home
Accounting
Average Cost Calculation
An item’s average cost is calculated as its [total value remaining in inventory] divided by the [total stock quantity]. Transactions that add inventory into stock are the only way that the average cost of a product changes. All sales or usage of an item will go out at the item’s average cost, unless the item’s stock is negative, in which case Standard Cost will be used instead.
The example tables below display how it works in different situations. The average cost calculation is quite simple if inventory never goes negative, but when it does, the average cost can be difficult to understand – the examples below should help understand a few special cases. Each row in these examples is a separate inventory transaction.
Information on changing an item’s average cost can be found here:
Change an Item’s Average Cost
Regular
Quantity Changed
Cost Each
Total Value Change
Running Value
Running Stock
Total Value/Total Stock = Average Cost
+5
-7
$-52.50
Negative Stock
Quantity Changed
Cost Each
Total Value Change
Running Value
Running Stock
Total Value/Total Stock = Average Cost
-5
$-40
-5
+5 (of 7)
+2 (of 7)
Late posting for negative stock for 5 units
Adjusting Average Cost
Quantity Changed
Cost Each
Total Value Change
Running Value
Running Stock
Total Value/Total Stock = Average Cost
+10
+5
-15
$-135
+15
Change an Item’s Average Cost

#### How to Mark Items as Taxable and Nontaxable

How to Mark Items as Taxable and Nontaxable – Paradigm ERP by Paragon – Documentation
Home
Accounting
How to Mark Items as Taxable and Nontaxable
This FAQ will go over how to mark items as taxable, nontaxable, and how to handle some special cases.
Marking an Item As Nontaxable
To mark an item as nontaxable, go to the item’s detail tab, and set the Default Tax and Default Job Tax to “No sales tax” from the dropdown. For most clients, this is all that need to be done to mark an item as nontaxable. The following section will go over how to set up an item to handle some special cases.
Custom Tax Settings
Custom tax settings can be enabled on an item’s detail tab. These tax settings are commonly used when a items are taxable in one state and not another.
This will display the inventory tax settings window.
Use custom tax settings to mark an individual item as taxable or non-taxable. The settings here will override the default tax settings.
Item Class Tax Settings
Custom tax settings can be mass applied by setting up tax codes per
item class
. This can be done by first going to Inventory > Settings > Item Class.
Click the folder icon beside the item class.
Then the tax settings can be customized for that item class.

#### How to Do a Book-to-System Inventory Valuation Adjustment

How to Do a Book-to-System Inventory Valuation Adjustment – Paradigm ERP by Paragon – Documentation
Home
Accounting
How to Do a Book-to-System Inventory Valuation Adjustment
Throughout the course of business, it is possible for the value of inventory on the valuation report to diverge from the value of inventory on the Balance Sheet. Common causes of this issue include nonstock items posting to an inventory account, purchase invoices affecting the inventory GL accounts directly rather than using a product ID, items changing to a different item class, and more. This difference, sometimes referred to as an inventory variance, should be periodically adjusted to zero to keep the reported GL value (book value) agreeing with the inventory valuation report (system value).
To do a “book-to-system” inventory valuation adjustment, first correct all of the average costs, negative inventories, and ideally correct the quantities on the products as well to ensure the reported inventory valuation is accurate. Then filter the inventory list to just the stocked items (using the “Track Stock” column) and run the “Inventory Valuation by Date” report from the reports list at the bottom.
A faster way to run the “Inventory Valuation by Date” report is to run it for a single item, and then set the “Show all products?” parameter to “Yes”.
Then run a Balance Sheet report as of the same date as the valuation report.
Compare the reported values for each account between the two reports, and make a journal entry to correct the inventory GL account values, typically by offsetting the difference to the “Inventory Adjustments” cost of sales account.
Then post the journal entry, and rerun the reports to make sure the accounts are balanced.

#### Store Use Items

Store Use Items – Paradigm ERP by Paragon – Documentation
Home
Accounting
Store Use Items
When items are consumed from inventory by a company’s own use, use tax is typically owed on the cost of those items. This FAQ will go over two different ways this can be recorded in Paradigm, but note that we are not tax accountants and you should check with your accountant to confirm how use tax needs to be tracked in your situation.
Inventory Adjustment and Journal Entry
The first way this can be done is by creating an inventory adjustment to correct the item’s stock amount, and a journal entry to account for the tax.
First, create an inventory adjustment to remove the consumed inventory. Set the “Qty Diff” to a negative amount of the number used (in the case pictured below, five units were consumed). When creating the inventory adjustment, be sure to change the account to the store use cost/expense account.
After the adjustment has been posted, go to General Ledger > Journal Entries and create a new journal entry.
On the new journal entry, credit the sales tax account for the use tax amount, and debit the store use account. Post the journal entry.
Store Use Customer
A faster way this can be done is by creating a Store-Use customer and charging the items to this account, then writing the account balance off periodically. This method, while faster, does affect the sales reports – if this is not acceptable for the relatively minor amount of store-use transactions, use the process described above.
The first step is to create the customer and set its
pricing type
to “Markup Standard Cost” with a pricing percentage of 0% in the detail tab. This will cause the prices to calculate as the items’ standard cost.
After the customer has been made, create an invoice for that customer and add the items to be removed from inventory, and select the correct tax rate at the bottom of the invoice. This will calculate a tax amount based on the cost of the materials, since the price calculates as the cost of the item.
Alternatively, the store use invoices can be posted to the account without the offsetting G/L line, and instead be written off via a journal entry at the end of the period.

#### Report Preview

Report Preview – Paradigm ERP by Paragon – Documentation
Home
Accounting
Report Preview
When viewing a report, there a couple different options when saving or navigating through it. More information on running reports can be found here:
Reports List
Search for keywords in the report that are currently being displayed from this search bar.
Shows the group tree on the left. This will display the groups and drill down levels in the report, and clicking on a group will open that list.
Navigate between pages, or skip to the first or last page.
Save or print the report.
Run the report again with new parameters
Refresh the report data.
On some reports, double clicking on the report info will drill down to more info. For example, in the report pictured above, if the order totals section is opened, a list of each customer’s order totals will be shown.
Brings up the Add/Search box and searches for the selected text.
Opens the form for the selected text.
Report Shortcuts
F5
– Refresh data
CTRL+C
– Copy the currently selected text
CTRL+P
– Print report
CTRL+F
– Go to the search box
PageUp
– Go to previous page
PageDown
– Go to next page
CTRL+PageUp
– Go to first page
CTRL+PageDown
– Go to last page
CTRL+G
– Brings up the Add/Search box and searches for the selected text.
CTRL+J
– This will by-pass the ‘Ctrl+G’ form, by opening the item returned at the top of the search list automatically, with out opening the search form.
More info on keyboard shortcuts can be found here:
Paradigm Keyboard Shortcuts
Opening Report as Pop Up
To set reports to always preview as a popup, go to Company Preferences > Printing/Startup and check “Always open reports as popup”.

#### Journal Entry Import Format

Journal Entry Import Format – Paradigm ERP by Paragon – Documentation
Home
Accounting
Journal Entry Import Format
General ledger journal entries can be imported into Paradigm from a
.csv
text file. The import file has two different formats, one for header entries and another for detail entries.
Import Formats
Header Line
LineType,Date,Reference,GLDepartmentCode
Detail Line
LineType, GLAccountNumber, GLDepartmentCode,Description,Debit, Credit
Example: D,1-1100,DEPT,Net Payroll From Checking,0,5510.25
Header Fields
LineType – Must be a value of “
H”
to indicate a Header line.
Date – The posting date of the journal entry in MM/DD/YYYY format. Entering “[TODAY]” will use the current date.
Reference – The description of the journal entry.
GLDepartmentCode – (Optional) – A GL Department code that matches a Paradigm GL Department code.
Detail Fields
LineType – Must be a value of “
” to indicate a Detail Line.
GLAccountNumber – A GL Account Number that matches a GL Account number found in the Paradigm Chart of Accounts.
GLDepartment – A GL Department code that matches a Paradigm GL Department code. If blank, the default department will be assigned by the import procedure.
Description – The description or memo for the journal line. These description can not contain commas.
Debit – The line item amount if it’s a Debit line item.
Credit – The line item amount if its a Credit line item.
JobID – Optional – If used, it must match an existing Paradigm Job ID.
JobPhase – Optional – If used, it must match a phase for the provided Job ID.
Job Phase Classification – Optional – If used, it must match a classification for the Job Phase.
Importing Examples
The import file must start with a Header Line, followed by the associated Detail lines like the example below. A file may contain multiple Header/Detail sections, a new journal entry will be created for each one.
Example
D,1-1100,DEPT,Net Payroll From Checking,0,5510.25
D,6-1140,DEPT,Payroll Wages,5100,0
D,6-1426,DEPT,Employer Tax Expense,410.25,0
Import Example with Job Info
Excel .CSV File Example

#### Finance Charges

Finance Charges – Paradigm ERP by Paragon – Documentation
Home
Accounting
Finance Charges
This FAQ will go over how to create finance charges for overdue invoices in Paradigm.
To generate finance charges for outstanding invoices, go to Accounts Receivable > Finance Charges.
Paradigm will prompt you to post any unposted receivables prior to generating any new finance charges. Leaving any outstanding receivables unposted can result in finance charges being generated for invoices that have already been paid.
There are several criteria at the top of the finance charge form that can be adjusted to determine which finance charges are generated.
Finance Charge Date:
Finance charges are calculated as of this date.
Finance Account ID:
The income account to which the finance charges are posted.
Minimum Days Past Due:
Filters out all invoices that are less than x days past their due date.
Minimum Days Since Last Chg:
Filters out any customers who have had a finance charge in the last x number of days.
Minimum Customer Balance:
Filters out any customers who have a balance less than x dollars.
Minimum Finance Charge:
Paradigm will round up the created finance charges to this amount.
Calculate Charge by Actual days:
When selected, Paradigm calculates the finance charges based on number of days overdue. Otherwise they are calculated based on 30 day period.
Charge Past Due Finance Charges:
Denotes whether or not Paradigm will calculate new finance charges for any current unpaid and overdue finance charges.
Terms:
The terms selected here will be applied to the finance charges that are created.
Auto Post finance charges When creating:
If this is selected, Paradigm will post the new finance charges as they are created. Otherwise, they will need to manually be posted.
After making changes to any of the criteria, click “Calculate” to refresh the finance charge totals.
Next, select the invoices to be charged from the list. If all invoices need to be charged, click the “Select All” button on the top of the form.
Finally, click the “Create” button and Paradigm will create finance charges for all the invoices that have been selected.
A pop up will then appearing, asking if the invoices should be shown.
If yes is clicked, a list of the created finance charge invoices will be shown.
On the invoice, the finance charges will be listed out as line items.

#### How to Create Bank Deposits

How to Create Bank Deposits – Paradigm ERP by Paragon – Documentation
Home
Accounting
How to Create Bank Deposits
After payment has been received on an invoice, that payment has to be deposited to the appropriate bank account. To create a deposit, go to Banking > Deposits and click the green plus button.
Then select the bank account and click “Undeposited Payments”. This will bring up a list of all the payments that have yet to be deposited.
The list of undeposited funds can be sorted using the fields at the top of the form. Enter the date range and select the payments to be deposited by clicking the checkbox to the left of each payment. Then when all of the payments to be deposited have been selected, click “Add to Deposit” to bring those payments into the deposit. The payment methods from the selected transactions will be added to the “Memo” field of the deposit.
At this point, the deposit is ready to post, which is done by clicking “Post” at the top of the form.
Depositing from an Account that is Not Undeposited Funds
To make a deposit from an account that is not Undeposited Funds, simply enter the account ID and amount into the detail line manually. This is commonly done to record bank fees or credit card fees.
Note:
When depositing from Accounts Receivable or Accounts Payable, a customer/vendor ID will need to be specified in the ‘Name’ column.

#### Vendor Credits Paid Back to Credit Card

Vendor Credits Paid Back to Credit Card – Paradigm ERP by Paragon – Documentation
Home
Accounting
Vendor Credits Paid Back to Credit Card
This FAQ will go over how to record a vendor refund that is credited back to a credit card account.
To record this in Paradigm, go to Accounts Payable > Purchase Invoices. Then create a new invoice and set the Voucher Type to Debit Memo.
List the credit items or expenses on the Debit Memo. When you Post the Debit Memo, it should have a negative total, indicating a credit to the Vendor’s A/P account.
To close or pay out the Debit Memo, click the ‘Make Payment’ button on the Debit Memo.
Next, select “Credit Card” from the payment method, then the credit card account from the Bank Account dropdown, and then enter the payment total as a negative amount.
When the payable is posted, it will close the Debit Memo and record a “return” on the selected credit card account.

#### Applying A Contact’s Customer Invoice Towards their Vendor Purchase Invoices

Applying A Contact’s Customer Invoice Towards their Vendor Purchase Invoices – Paradigm ERP by Paragon – Documentation
Home
Accounting
Applying A Contact’s Customer Invoice Towards their Vendor Purchase Invoices
If a vendor to your business is also a customer to your business, you may find it necessary to apply the amount owed to you from an invoice for the customer, against any outstanding purchase invoices from the vendor. To do this, you will first want to create a clearing account that can be used for this process, whenever it is necessary.
Moving the Customer Invoice Amount to the Clearing Account
Once a clearing account has been created, add a new invoice for the customer, but set the Invoice Type to “
Credit Memo
”.
Enter a GL line on the credit memo and use the clearing account that was created earlier.
Then, set the pieces ordered to negative one and enter the total amount from the customer invoice into Sales Price column on the credit memo.
Finally, set the sales tax to NO TAX and post the credit memo.
After posting the credit memo, a form will pop up to select which invoices the credit should be applied to. Choose the invoice for which this credit memo has been made, then click Finish. This make a receivable to apply the invoice against the credit that was just created.
Applying the Amount in the Clearing Account to a Vendors Purchase Invoices
First, add a new purchase invoice for the vendor and set the Voucher Type to “Debit Memo.”
Next, enter a GL line on the debit memo and use the same clearing account that was used on the credit memo.
Then, set the Pieces Received to negative one and the cost equal to the amount entered on the credit memo.
Finally, set the use tax to NO TAX and post the debit memo.
The debit memo can now be applied to any of the purchase invoices from the vendor, either through the pay bills form or by opening up a purchase invoice and creating a payable for it.

#### Bookkeeping Tips And Tricks

Bookkeeping Tips And Tricks – Paradigm ERP by Paragon – Documentation
Home
Accounting
Bookkeeping Tips And Tricks
Every form that posts will have a
GL Recap
button to view the posting of that transaction, normally in the header.
A list of all the transactions that make up a total in the Chart of Accounts can be viewed by clicking the button on the right beside that account (from the Chart of Accounts). This will bring up the GL detail list. Another way to view this list is by clicking the folder icon and then clicking ‘GL Detail’. Note that right clicking in this form gives more sort/filter options.
When using the Accounts Receivable or Accounts Payable accounts in a journal entry, a customer/vendor ID will be required. This ties the entry to their account and will show as a positive or negative transaction, depending on the adjustment. If either of these accounts ever needs to be adjusted without tying the adjustment to a customer, check the ‘Correcting Entry’ checkbox on that line of the journal entry. Click
here
for more information on Journal Entries.
A bank account register can be found under Banking > Bank Account List. Double-click the account to view and a list of all transactions for that account will be brought up.
When using the checks form, the account populated into the check detail when using a vendor as the payee will be the ‘Expense ID’ from the vendor’s detail tab.
When writing checks, click the button beside the check number to auto fill the next check number Paradigm is aware of.
When writing checks, double click the check amount to total the amounts from the detail of the check.
It is beneficial when applying check numbers to transactions, to begin the numbers with at least one zero, depending on the length of your check numbers. Paradigm deals with check numbers alphabetically, so a zero helps to ensure they are always sorted correctly.
After paying sales tax or to simply keep numbers from changing in a given period, use General Ledger > Accounting Periods > Close Periods up to and Including to keep transactions from posting or unposting before the supplied date. This date can be moved backward to allow for adjustments if needed.
After books for a given fiscal year have been finalized, contact Paragon Computing Solutions to archive the GL transactions for that year to improve query speed and overall performance of Paradigm.
There are some reports that should be run on a regular basis to make sure balances are holding out. These are all under the ‘
Reports
’ menu item in the following sections: Accounts Receivable > Receivables Aging Totals, Accounts Payable > Accounts Payable Aging, General Ledger > Orphaned Transactions. If any of these reports flag an issue (out of balance totals or transactions missing) contact
Paragon Computing Solutions
for assistance in correcting the issue.

#### 1099 Processing

1099 Processing – Paradigm ERP by Paragon – Documentation
Home
Accounting
1099 Processing
This FAQ goes over how to use the 1099 processing tool.
The following pop up will then appear:
Paradigm Accounting does NOT calculate Boxes 7, 11, 15, or 17. You will need to verify and/or make adjustments to some of the boxes on the 1099 form.
Creating 1099 Forms
To create the 1099 Forms, select the desired year and click the “Process” button.
Then select the vendor from the Vendor ID drop down and all the 1099 information for that vendor will appear.
The first tab shows the 1099-MISC form, which is used in the reporting of payments that are not subject to self-employment tax – things like rents and prizes.
On the other tab is 1099-NEC, which is used for reporting non-employee compensation that is most likely subject to self-employment tax.
1099 Processing Options
Recalc
– Recalculate 1099s for a given year.
Delete
– Deletes the selected 1099 record.
Process
– Create the 1099s for the selected year.
Add
– Set a Vendor as a 1099 Vendor and assign the default 1099 box selected. The selected box is also applied to that vendor’s transactions from the year.
From here the remove tab can reached, where vendors can be removed from the 1099 records.
Print
– Print or view the selected 1099 form.
Close
– Closes the 1099 module

#### Correct a Prepayment Received for the Wrong Customer

Correct a Prepayment Received for the Wrong Customer – Paradigm ERP by Paragon – Documentation
Home
Accounting
Correct a Prepayment Received for the Wrong Customer
This FAQ will go over how to correct a
prepayment
received for the wrong customer.
Prepayment Not Deposited
If the prepayment has not been deposited yet, simply unpost the prepayment and select the correct the customer ID.
Prepayment Deposited
If it has been deposited then follow the steps below.
1.
Open the prepayment and click “
Returned Payment
2.
Then choose the “Error” type. This will create a reversing prepayment for the original customer.
3.
Ensure the error prepayment is posted. Its ID will be the same as the original prepayment, but with “-ERR” added at the end.
4.
Create a new prepayment for the correct customer and post it.
5.
6.
Create a new
deposit
7.
Post the deposit.

---

[← Back to Contents](#table-of-contents---click-to-navigate)

### WORKFLOW 5: PRODUCTION & MANUFACTURING {#production-manufacturing}

[← Back to Contents](#table-of-contents---click-to-navigate)

**Purpose**: Manage manufacturing workflows and production tracking

**When You Use This**:
- Creating work orders
- Tracking production status
- Recording material usage
- Managing production schedules

Source: https://docs.goparagon.com/kb-category/production/

#### Assign To Different Machine

Assign To Different Machine – Paradigm ERP by Paragon – Documentation
Home
Production
Assign To Different Machine
This FAQ will go over how to assign builds and orders to a different machine in production.
Assign An Order To A Different Machine
Right clicking the order in any of the production screens will show an option called “Assign to different machine”. This will allow the user to select another machine to send the order to.
Assign A Build To A Different Machine
Right clicking the build in any of the production screens will show an option called “Assign to different machine”.

#### Machine List

Machine List – Paradigm ERP by Paragon – Documentation
Home
Production
Machine List
This FAQ will go over the machine list settings in Paradigm ERP, this is used to set up machines for
production
. Information on machine groups can be found here:
Machine Groups
Machines
Machine ID –
The unique machine ID, this is automatically set when the machine name is entered.
Machine Name –
The machine name shown in the
production screens
Location –
The location (
warehouse
) that the machine is located at.
Operator –
The
employee
that operates the machine.
Export to SC –
Export builds at the machine – more information on exporting can be found here:
Connex
Variobend
Eclipse
Export Date –
Data will only be exported if the date is today or before the set export date, when exporting to a rollformer control software.
RF Min Length
If the items on the build are shorter than the minimum length, the items will nest together when exporting to a rollformer control software until it reaches the minimum length.
For example if the minimum is 3 ft, then two 2 ft pieces would be exported as one 4 ft piece.
RF Max Pieces –
If over the max pieces, it will export and then put it on hold and
the field will be highlighted in red
RF Max Weight –
If over the max weight, it will export and then put it on hold and
the field will be highlighted in red
Capture Coil –
Information on this can be found here:
Capture Coil
Show Finished Items –
Finished items will be shown until all builds are completed at the machine.
Prompt For Operator –
Prompts the user to select the current operator after build completion.
The operator selection drop down shows the list of
employees
Prompt For Staging Area –
Assigning Staging Areas In Production
Allow Changing Pieces Orders –
Allows the user to change the pieces ordered, when adjusting the number of pieces manufactured.
Create Pull Label When Printing –
Creates a pull label when printing, this allows for the label to be scanned in
Fulfillment Pro
One Label Per Build –
One Label Per Build
Split Labels –
Line Split By Label
Edit Description –
This will show an edit button on the description field in production.
Show Lot Qty Avail. –
Show the available
lot
quantity on the lot selection screen.
Lock Build When Printing –
Locks the build after printing, instead of the production user selecting “Lock” as they begin to work on that build.
Default Lead Days –
Default
lead days
set when the
production screen
is opened for the machine.
Discontinued –
Discontinue the machine – once a machine is discontinued, it will not be shown in the
production screen
drop downs.

#### Remove A Build From Production

Remove A Build From Production – Paradigm ERP by Paragon – Documentation
Home
Production
Remove A Build From Production
This FAQ will go over how to remove a build from
production
On Hold
Set the build as “On Hold” from the build screen by checking the “On Hold” checkbox.
Un-Check “Manu” Checkbox
Uncheck the checkbox in the “Manu” column. This will unmark the item to be manufactured.
Un-Release Order
To remove all lines from production, un-release the order. See instructions on there:
Un-Release Orders

#### Machine Groups

Machine Groups – Paradigm ERP by Paragon – Documentation
Home
Production
Machine Groups
This FAQ will go over machine groups in Paradigm ERP.
Machine groups are used to show production for a set of machines in the same
production screen
, when it is filtered to that machine group. This is useful when there are multiple machines that produce mostly the same profiles—some profiles can be run on any of the machines, while others are limited to just one or the other. A machine group allows for them all to be shown in a single list for the operator to then decide which machine to produce it on.
Manufactured items
cannot be set up to be produced at a machine group, only to a machine which can then be included in a machine group.
Machine Groups
Machine groups can be set up by going to Production > Machine List > Machine Groups
Enter the group name in the top, and then add the machines in the bottom section that will be apart of that group.
The background color can be set as well, to highlight the machine column in the production list, as shown below. The background color is used to bring attention to which machine is listed, in a case where almost all of the builds in a group are to a single machine, except for a few lines that are to another machine.
Machine Column Highlighting

#### Pull Item From Stock in Production

Pull Item From Stock in Production – Paradigm ERP by Paragon – Documentation
Home
Production
Pull Item From Stock in Production
This FAQ will go over how to pull an item from stock, in the production screen.
Completion Pop Up
The first way to mark items as pulled from stock, is by entering the amount on the completion pop up that is displayed when the green check mark is clicked in
Production
This will update the quantity that was manufactured on the build.
This feature cannot be used to mark a build as partially complete. Putting in the partial amount that was completed and then clicking “Next” will pull the rest from stock. A build can be marked as partially completed by splitting the build, more on that can be found here:
Production: Line Split
Produced From Stock Button
The second way this can be done, is by clicking the “Pulled from Stock” button on the detail line in Work Orders or Component Production (
how to add columns
).
This will pull all the pieces from stock, and mark the build as complete. The quantity to build will then be updated to zero on the build.

#### Configuring a Product for Export to Connex

Configuring a Product for Export to Connex – Paradigm ERP by Paragon – Documentation
Home
Production
Configuring a Product for Export to Connex
This FAQ will go over how to set up a product for export to Connex. Be sure to have Beck set up an auto delete for completed jobs in Connex, to keep Connex running smoothly.
More information on the Connex integration can be found here:
Beck Connex Integration
. Information on setting up a product for export to Eclipse can be found here:
Configuring A Product For Export To Eclipse
Note:
When setting up a product for export it must match the data in Connex exactly, even the capitalization.
Machine List
Check the “Export to SC” box, Optionally, set an export date as well. If no export date is set, builds will export to Connex on their production date. If an export date is set, builds will be exported if their production date is on or before the export date. A common use for this feature is to allow the operators to move the export date to Monday on Saturday, so they can work ahead if Saturday is slow.
RF Min Length – If the items on the build are shorter than the minimum length, the items will nest together until it reaches the minimum length.
For example if the minimum is 3 ft, then two 2 ft pieces would be exported as one 4 ft piece.
RF Max Pieces – If over the max pieces, it will export and then put it on hold.
RF Max Weight – If over the max weight, it will export and then put it on hold.
Export to Connex
In Connex
Profile in Connex needs to be mapped to a machine in Connex
In Paradigm
Detail Tab
Set “Model No.” to the Connex Profile.
If enabled, items with an attribute named “ConnexProfile” or “RF_Profile” will use the value here for the profile name. Contact Paragon support to enable this.
Assembly Tab
Assembly Type must be set to “Manufactured to Order”.
Set the Paradigm Component to the Connex material.
Production Tab
Set the Machine Name to the Connex Machine Name
Set the linked component on the rollformer Production step to the coil.
Set the Warehouse ID to the Connex Location Name

#### Production Settings

Production Settings – Paradigm ERP by Paragon – Documentation
Home
Production
Production Settings
This FAQ will go over the production settings in Paradigm ERP. These settings can be found by going to Production > Production Settings
Company Settings
Panel Category –
Items in the category selected here will use quantity (length) instead of pieces in the
Production Batching
screen.
Length Unit –
The units that the length is shown in on the
production screens
For example: if set to “ft” then 4′ shows as 4, if set to “in” it shows as 48
Set manufacture lock on build when it is added to a batch. –
Sets a
manufacture lock
on the build when it is added to a
batch
Show order type selector in Work Orders.
Shows the order type select in the
Work Orders List
screen.
Only allow selecting lots that have stock at the current warehouse –
When enabled, only
lots
at the current
warehouse
will be shown to the user in a production
lot
screen.
Max Build Age (days) –
Sets the max age that a build can be and still be shown in
production screens
. This will filter out any builds with a production date more than this many days in the past.
This age limit is useful for large databases to speed up production screen load and refresh times.
Set to 0 to disable the limit.
User Settings
Settings changed will be applied to the user that is logged in. Admin users will have the option to select a user to adjust the settings for.
Default Warehouse –
If a warehouse is selected, only machines set to that warehouse will be shown in production.
All machines will be shown if left blank.
Allow Production Scan Sounds –
Allows production scan sounds.
Remember Last Chosen Coil –
Automatically shows the coil that was last selected in the
capture coil
screen.
This also automatically selects the
lot
that was last selected for the coil.
Enable Multi-Build Printing –
Enables
multi-build printing
for the user.
Show all builds in work order list when using product filtering –
When enabled, it shows all builds for the order of the build that was scanned. If disable, the work order list shows just that singular build after scanning.
This only applies when the “Filter Type” is set to “Barcode” and the user scans into the “Scan” field.
Complete builds when scanning in work order list –
This controls whether or not the scan completes the build. If that is not enabled, it will just filter the list.
This only applies when the “Filter Type” is set to “Barcode” and the user scans into the “Scan” field.
This can also be set from the Work Order list as needed:
Complete builds when printing from component production or work order list detail
Completes the build when printing from component production or work order list detail.
Enable button to show/hide locked builds in work order list.
Show/Hide Locked Builds
Custom Report Settings –
This form can be used to set the report to be used in each production screen, for the selected user.

#### Production Screens

Production Screens – Paradigm ERP by Paragon – Documentation
Home
Production
Production Screens
Production has two tabs that can be used for producing any product (Work Orders and Component Production), and a third that is specialized for rollforming (Rollformer Production).
Work Orders
The Work Order list shows each open order at the top, and they can be
filtered
by any of the options at the top. Clicking on an order shows all of the builds for that order being produced at the selected machine. Clicking on a build at the bottom displays any attachments and the component list for it. This screen works well for producing everything needed for a single order (at a given machine) all one time.
Order Type Filter
An optional “Order Type Filter” can be enabled in Production settings for the Work Order list, to allow the user to filter between manufacture orders and sales orders.
To enable this, go to Production > Production Settings > Enable “Show order type selector in Work Orders”
Component Production
Component Production shows a list of the components being used by unfinished builds at the selected machine on the left, and selecting a component filters the list to just the products being made out of that component, which is most commonly used to make all of trim needed from a particular coil color before changing coils. The “Stock Order” section shows Manufacture Orders, which are used as internal orders for stock. The “Special Order” section shows Orders for customers.
Rollformer Production
Rollformer Production is similar to Component Production, but with additional group levels for orders and bundles to mirror the way the panels will be packed. Locking, printing, exporting, and completing will effect all of the lines in the bundle/order at once, rather than needing to handle each line individually. The “Stock Order” section shows Manufacture Orders, which are used as internal orders for stock. The “Special Order” section shows Orders for customers.
Lift Point
The lift point column will indicate the center of balance for the entire pack of panels. The lift point calculations assume that all metal is being stacked even on one end (diagram below), and is measured from the even side.
Weight Column Highlighting
If the pieces on the build is higher than or equal to “RF Max Pieces” or weight is higher than or equal to “RF Max Weight”, the field will be highlighted in red. This only is shown on the Rollformer Production screen.

#### Manufactured To Order Items With Low Stock

Manufactured To Order Items With Low Stock – Paradigm ERP by Paragon – Documentation
Home
Production
Manufactured To Order Items With Low Stock
This FAQ will go over the pop up to mark a manufacture to order (MTO) to be manufactured, when there is not enough in stock for an order.
Items With Low Stock
When an order is released and there are manufacture to order items that are not set to be manufactured, but there are not enough in stock for the order, the following form will be shown:
These items do not have a large enough quantity in stock. You can however set them to be manufactured.
The user can select the items to be manufactured and click “Continue”.

#### Machine Options

Machine Options – Paradigm ERP by Paragon – Documentation
Home
Production
Machine Options
This FAQ will go over machine options in Paradigm. Information on custom options can be found here:
Custom Options
Machine Options
Machine options are assigned by going to Production > Machine List and clicking on the folder icon beside the machine.
From there, machine options can be created. This will make the options available for any product being produced at that machine.
ID – The machine option ID.
Level – The machine option level. Only one option can be selected from level. In this example, texture or coated could be selected, but not both since they are both level one.
Default – Select whether or not it is the default option. Only one option per level can be set as default.
Type – Select whether it is a model or a part. This should be set to “Model” unless you are otherwise instructed by Paragon.
Dollar Adder – The amount added per unit.
Option – The name display for the option
Description – The description display for the option.

#### Production: Lock Build when Printing

Production: Lock Build when Printing – Paradigm ERP by Paragon – Documentation
Home
Production
Production: Lock Build when Printing
This FAQ will go over the “Lock Build When Printing” machine option.
Lock Build When Printing
If enabled, builds will be locked when they are printed from a
production screen

#### Edit Production Dates

Edit Production Dates – Paradigm ERP by Paragon – Documentation
Home
Production
Edit Production Dates
This FAQ will go over the Edit Production Dates button on orders and manufacture orders. Production are set based on the production lead days, more information on that can be found here:
Production Lead Days
Edit Production Dates – Order Screen
The “Edit Production Dates” button on orders and manufacture orders can be used before release.
Note
The Edit Production Dates button becomes disabled as soon as any Order Detail Line is
locked by manufacturing
From here, the production date can be chosen for each warehouse that items are being produced at.
Available Dates
Edit Production Dates – Production
To edit the production dates from production, click the “Unlock Production Dates” button highlighted below. Then click on a production date to change it.

#### Production Lines Added to A Bundle

Production Lines Added to A Bundle – Paradigm ERP by Paragon – Documentation
Home
Production
Production Lines Added to A Bundle
When an order is released with bundles on it, and the bundle is locked in Rollformer Production, all the lines in that bundle will be locked on the order. The production label printed at this time would include the listed items.
Locked Bundle
If an item is added to the bundle after it was originally locked/printed, it can be easy for the added line to get missed in Rollformer Production, since the other lines in that bundle have already been locked/printed.
To combat this, the lock button in Rollformer Production will appear orange if some of the lines in that bundle are not locked, but others are. The unlocked lines will also be highlighted orange:
The user must lock the build again in order to complete it, otherwise they will get this error:
Lines may have been added to this bundle after it was locked. Verify that all lines have been completed, then lock and complete this bundle.
Multiple Production Dates
A bundle could be displayed multiple times in the Rollformer Production screen. This issue arises if:
The bundle is released and not started by production.
Additional lines are added at a later date, after the original Production date has passed.
In this situation, the bundle will appear twice in the Rollformer Production screen, with each row displaying the warning icon and the message “Multiple Production Dates” to notify users of the discrepancy.
Clicking on the warning icon shows a more descriptive error message:
This bundle is showing twice because some items have different production dates. This should be addressed before manufacturing.
To resolve this situation, users can change the production dates to align them. This can be done through the build details on the order or by unlocking the “Prod Date” column and ensuring that both dates match. Addressing this discrepancy is essential for maintaining accurate production records and preventing confusion in order fulfillment processes.

#### Configuring a Product For Export To Eclipse

Configuring a Product For Export To Eclipse – Paradigm ERP by Paragon – Documentation
Home
Production
Configuring a Product For Export To Eclipse
This FAQ will go over how to set up a product for export to Eclipse.
Note:
When setting up a product for export it must match the data in Eclipse exactly, even the capitalization. Information on setting up a product for export to Connex can be found here:
Configuring A Product For Export To Connex
Machine List
Check the “Export to SC” box and set an export date. Data will only be exported if the date is today or before the set export date. This can be used to set the export date out a couple of days to export in advance.
RF Min Length – If the items on the build are shorter than the minimum length, the items will nest together until it reaches the minimum length.
For example if the minimum is 3 ft, then two 2 ft pieces would be exported as one 4 ft piece.
RF Max Pieces – If over the max pieces, it will export and then put it on hold.
RF Max Weight – If over the max weight, it will export and then put it on hold.
Inventory Item
Detail Tab
Set “Model No” to the Eclipse “PCode”.
SC Part Number can be set to “PartNum” in Eclipse. (Optional)
If enabled, items with an attribute named “ConnexProfile” or “RF_Profile” will use the value here for the profile name. Contact Paragon support to enable this.
Assembly Tab
Set the material component to the material in Eclipse.
Assembly type must be set to “Manufactured To Order”.
Production Tab
Set the machine name in Paradigm to the machine name in Eclipse.
Set the rollformer production step in Paradigm to be linked to the coil component.

#### Changing Pieces Ordered

Changing Pieces Ordered – Paradigm ERP by Paragon – Documentation
Home
Production
Changing Pieces Ordered
This FAQ will go over how to change the pieces ordered from production. This is commonly used for coil production, where the customer orders a certain footage but the actual coil produced may be a few feet longer or shorter. Information on line splitting in production can be found here:
Production: Line Split
To allow for the pieces what were ordered to be updated when completing the build, go to Production > Machine List and enable “Allow Changing Pieces Ordered”.
When enabled, the “Update Pieces Ordered” check box will appear when a build is complete.
If checked, the amount of pieces on the order will be updated to the amount of pieces entered here. This will change the order total, so use this feature with caution. The price per piece will not be refactored and will be kept the same, regardless of the price level set up.
If the quantity on a manufacture order is updated and there is a transfer linked to it, the quantity on the transfer will be updated as well.

#### Capture Coil

Capture Coil – Paradigm ERP by Paragon – Documentation
Home
Production
Capture Coil
This FAQ will go over how to enable and use the capture coil feature. This tracking is used for warranty purposes.
Note
that this is not lot tracking. Information on lot tracking can be found here:
Lot-Based Inventory (Track Coil Inventory By Coil ID)
Enabling Capture Coil
To enable capture coil, go to Production > Machine List and check the box on “Capture Coil” column on that machines that are going to need it.
Using Capture Coil
After that is enabled, when a build is completed at that machine it will prompt for the coil numbers used. If multiple numbers are used, then separate them by a comma. (i.e. 123,456,789)
Viewing Coil Numbers
The information for the coil numbers entered can be viewed on the “Coil History” list. More information on that can be found here:
Production: Coil History

#### Purging a Job From Beck/Connex or AMS/Eclipse

Purging a Job From Beck/Connex or AMS/Eclipse – Paradigm ERP by Paragon – Documentation
Home
Production
Purging a Job From Beck/Connex or AMS/Eclipse
This FAQ will go over how to purge a job that was released to Beck/Connex or AMS/Eclipse.
Purge A Build
To do this, click the folder icon on the line item.
Then click “Purge Build”. To check the status, click “Check Status”. This will display the current status of the lines as a pop up.
If the status of that line in Beck/Connex or AMS/Eclipse is anything other than “At Machine”, the line will be purged and the line will be unlocked. If the status is “At Machine”, the line will be unable to purge. Note that each bundle/pack/product needs to be purged separately when using this button.
Purge All Builds
All builds on the order can be purged by going to
Clear Locks
> Purge All Builds. This option is only shown if builds have been exported.

#### Scrap Calculations

Scrap Calculations – Paradigm ERP by Paragon – Documentation
Home
Production
Scrap Calculations
This FAQ will go over how scrap calculations are handled in Paradigm.
TIP
Scrap is factored into the TIP unit of measure by adding a waste percentage to it. More info on that can be found here:
TIP (Trim In Process) Unit Of Measure
Inventory Discard
For larger amounts of scrap, such as when a coil is damaged, use the inventory discard tool. More info on that can be found here:
Inventory Discard

#### Multi-Stage Production

Multi-Stage Production – Paradigm ERP by Paragon – Documentation
Home
Production
Multi-Stage Production
This FAQ will go over how to set up multi-stage production in Paradigm, which should be used when an item has multiple machines that are used to produce it. This builds off of an item that was previously set up for single stage production, more information on that can be found in this FAQ:
How To Make A “Manufactured To Order” Inventory Item
Open the inventory item and go to the production tab.
Then add the new stages to the production process.
Production
In production, the builds will show up on each machine. The builds on the second machine will show red until all previous stages are completed.
If the builds are attempted to be completed before the other stages has been completed, the follow error message will appear:
This item is not ready for this machine! Are you sure you want to complete this item?
If the item is completed anyways, the stage was that was skipped will be marked as complete as well.
After every stage of production for the build have been completed, the build will be posted.
Scan to Complete
When using the scan to complete feature, the first time it is scanned in it will mark it complete at the first machine. Then once it is scanned again, it will mark it complete at the next machine.

#### Assigning Staging Areas In Production

Assigning Staging Areas In Production – Paradigm ERP by Paragon – Documentation
Home
Production
Assigning Staging Areas In Production
This FAQ will go over how to assign staging areas in production.
Setup
Go to Production > Machine List and enable “Prompt for Staging Area” on the machine(s) that needs it.
Assign Staging Areas
Clicking on the folder on the left of the machine allows for the available staging locations at that machine to be chosen. If no options are selected, only staging areas from the machine’s warehouse are shown. Selecting a staging location simplifies the dropdown so the operator only needs to search through the staging areas they have access to, instead of all locations throughout the company.
Select Staging Areas
Now when an item is completed at that machine, it will prompt for the item to be assigned to a staging area. The staging area chosen here will appear in Fulfillment Pro and can be printed on the pick ticket as well.
Default Selection
The system will load a default staging area automatically into the selection drop down box, either:
If a build was previously completed for the same order and on the same machine, Paradigm selects the same staging area.
If no build has yet been completed for the order on the machine, Paradigm selects the last‑used staging area.

#### Production Lead Days

Production Lead Days – Paradigm ERP by Paragon – Documentation
Home
Production
Production Lead Days
Production Lead Times
Lead Days is based on business days, not calendar days. If lead days are set to one, and the order is shipping Monday, the production date will be Friday. Holidays are not factored into this calculation.
Lead days are set at the company level for each combination of warehouses and apply to all machines and products for that combination of warehouses.
Transfer Lead Times
More information on transfer lead times can be found here:
Transfer Lead Times
Per Machine Setting
Because the production date calculation is set at the company level, there can be times where certain product types with longer lead days will not have a valid production date set by default. To work around this, the default date filter set in Production can be modified at the machine level. While this doesn’t correct the listed production date on the build, it does cause the order to show in Production far enough in advance, which generally is all that is required to ensure the product is produced on time.
To set the default lead days for the production date filter, go to Production > Machine List.
From there, set the amount of lead days in the “Default Lead Days” column.
The default date filter in the various production screens will then be set to this many days in the future.

#### Component Tree

Component Tree – Paradigm ERP by Paragon – Documentation
Home
Production
Component Tree
The component tree is used in the component and rollformer production screens. Clicking on one of the components will show the builds that need to be produced from that coil across all orders.
There are two different options for displaying the amount that needs to be produced beside each component.
Show (Pieces) – The amount of pieces that need produced.
Show (Quantity) – The total quantity (pieces * length for linear items) from the order detail. For items produced by the linear foot, this will show the total footage.
The arrow beside component can be clicked to show the product quantity by width, and then by length.
Stock Orders
Clicking on the “Stock Orders” section will show only the Manufacture Orders.
Locked Items
Clicking on the “Locked Items” section will show only the locked builds.

#### Production: Export Button

Production: Export Button – Paradigm ERP by Paragon – Documentation
Home
Production
Production: Export Button
The export button is used in Production to send the build info to a machine. This is commonly used with the SWI Marxman integration, more info on that can be found on our website:
SWI Marxman Integration
The export button can be found by right clicking the header in Production, opening column chooser, then selecting “Export” from the column chooser list.
The export button functions as “Lock and Export”. When the it is clicked, the build will be locked and subsequently exported to the machine. Note that the build can also be locked without being marked for export.
If the export button is clicked again, the build will be unlocked and unmarked for export. This also typically triggers the build to be purged from the system to which it was originally exported.

#### Production: Recently Completed

Production: Recently Completed – Paradigm ERP by Paragon – Documentation
Home
Production
Production: Recently Completed
The recently completed builds list can be found by going to Production > Recently Completed.
Note that this will not work for builds that are exported to another system like Connex or Variobend.
The only builds that show up here, are ones that are on uncompleted orders. Once the orders are invoiced/completed, their builds are removed from the list. To view them, choose a machine from the dropdown list and the date range to view the recently completed builds.
Clicking the “Uncomplete Step” button will mark that build as uncomplete, and it will be displayed on the production lists again. Any coil numbers or lot assignments specified during the original completion are removed, as well as any label data.
The print button will print the same report as the Work Order List detail.

#### Production: Coil History

Production: Coil History – Paradigm ERP by Paragon – Documentation
Home
Production
Production: Coil History
The coil history list can be found by going to Production > Coil History.
This can also be accessed from a builds production detail tab. If the coil ID was specified, the button beside it will open the coil history list and will display other builds that were produced from that coil.
Once a coil ID is entered, the orders it was used for will appear.
The drop down list beside the order number will display all the items on for that order.
Partial Match
Clicking the partial match button will bring up all coils that contain what was entered in to the search bar. For example, if ‘12123’ is entered and the ‘Partial Match’ button is selected, it will add asterisks as wildcards to either side and bring up any coils that have ‘12123’ in their ID. More info on wildcards in Paradigm can be found here:
Wildcards

#### Production By Piece

Production By Piece – Paradigm ERP by Paragon – Documentation
Home
Production
Production By Piece
This feature is meant to be used at a secondary production step to scan individual pieces as they are produced. A common example of this is running Production by Piece at the brake to scan blanks that come off of a slitter that labels each blank with a barcode, such as an
SWI Marxman
. As the pieces are scanned, they are marked complete and display the production info for that piece.
Production by Piece can be found by going to Production > Production by Piece.
Then pieces can be scanned in the scan bar. Once the piece is scanned, it will be marked as complete and any info, attachments, and drawings will be shown. A sound will also be played if enabled; a different one is played depending on whether or not the scan is successful.
Item Scan
In the item scan section, all info, attachments, and drawings for the scanned piece will appear. Below that, there are buttons to create new packs, complete, and uncomplete pieces.
Complete Another – Marks another piece, from the build that was just scanned, as complete.
Complete All – Marks all pieces, in the build that was just scanned, as complete.
Uncomplete This One – Marks the piece that was just scanned as uncomplete.
Packs
– When items are scanned in, they will be added to the pack that is currently selected. When a new pack is created, it will take the piece that was last scanned in and move it to the new pack. In the example above, five pieces were scanned into the first pack, and when the new pack button was selected it took out the last piece that was scanned in to create the new pack. This created a pack of four and a pack of one. It can be returned to the original pack or to another one by just clicking on the pack.
Order Lines
To view the order lines, scan an item from the order, then select the machine. All lines to be produced at the selected machine for the scanned order will then be displayed, similarly to the Work Order List details section. The progress bar for the order is shown beside the machine dropdown at the top and will display how much of the order has been completed, and will update as the pieces for that order are scanned.
Scan – Scans one piece of that line.
View – Displays the info for the line, but does not mark a piece as complete.
Pcs – Number of pieces that need to be produced.
Width – The width of the piece in inches.
Inches – Length of the piece in inches.
Packs – The packs that the pieces are in, based on the packing done while scanning.
Packed Pieces – A progress bar with how many of that piece are completed.
Print Buttons
Print Pack – Prints all the items in the pack selected from the dropdown list as shown below. This is useful when putting labels on packs as they are created.
Print All Packs – Prints labels for every pack. These can be viewed on the side bar of the preview screen as highlighted below.
Print Preview – If checked, a print preview will appear when the print buttons are selected.
Started, Not Finished
This section displays the builds that are partially completed. Once all the pieces for a build are scanned in, it will no longer appear on this list. This allows the user to ensure that the jobs are all getting completed properly, since it is easy to miss scanning a piece on a large order. The list below will explain some of the columns used here.
Scan – Scans one piece of that line.
View – Displays the info for the line, but does not mark a piece as complete.
Pcs – Number of pieces that need to be produced.
Width – The width of the piece in inches.
Inches – Length of the piece in inches.
Packed Pieces – A progress bar with how many of that piece are completed.

#### Production: One Label Per Build

Production: One Label Per Build – Paradigm ERP by Paragon – Documentation
Home
Production
Production: One Label Per Build
The “One Label Per Build” setting controls whether or not labels are printed per line or per bundle. This setting only works in component production and works in conjunction with the “Create Pull Label when Printing” setting and does nothing unless that is also enabled.
These settings can be enabled by going to Production > Machine List and selecting the checkboxes on the corresponding machine.
When enabled, a label will be printed for every line when selecting the “Print All” button. If left disabled, it will print a label for each bundle instead.

#### Work Order List Filter/Sort Options

Work Order List Filter/Sort Options – Paradigm ERP by Paragon – Documentation
Home
Production
Work Order List Filter/Sort Options
To start filtering the work order list, first choose the machine and then select the order filter type.
Filter Types
Date – Filters to all builds on or before the selected date. This is based off of the date of production for the build.
Batch – Enter a batch ID to filter to the orders within that batch. More info on batching can be found here:
Production Batching
Trip – Filters to the orders with the given trip ID from Dispatching. Trips that are assigned to orders that are on the selected machine will appear in the dropdown list.
Barcode – Filter to the order that the build is in by scanning a production label. Checking the “Complete When Scanned” checkbox will mark the build as complete when scanned. This functions similarly to the Production scan tab, more info on that can be found here:
Production Scan Tab
Product – Filter by product ID, component, and description. This will filter to the orders that contain at least one line of the specified product ID, component, or description.
An option will then be shown above the build list to control whether or not to show all builds.
If left unchecked, only builds that match the info in the product, component, or description will display. If selected, all builds will be shown for that order.
Search Panel
Another way to filter down the list is by using “Ctrl + F” (or right click a header and select “Show Search Panel”) to display the search panel.
Sort By
Sort by options control how the build list at the bottom is sorted.
Length Asc – Sorts the list starting with the shortest to the longest length.
Length Desc – Sorts the list starting with the longest to the shortest length.
Bundle – Sorts the list by grouping bundles together. More info on production bundles can be found here:
Adding/Deleting Bundles From Production
More Columns
Units on Shelf Stock – Stock + Received – Committed + Produced – Manufacture Order Quantity
Units on Shelf Fulfillment – Stock + Received – Pulled from Fulfillment Pro
Pull From Stock – Click this button to mark the build as pulled from stock.

#### Production Scan Tab

Production Scan Tab – Paradigm ERP by Paragon – Documentation
Home
Production
Production Scan Tab
The Production scan tab can be found by going to Production > Scan to Complete. From this screen any production labels that have been completed can be scanned in to be marked as completed. This is mostly used on a workstation at the end of a production line in a warehouse, to quickly mark production labels as completed without having to manually find them on the list. They can also be marked as complete on the work order list, more info on that can be found here:
Work Order List Filter/Sort Options
After scanning a label, the build number and machine will be displayed and a sound will be played if enabled in production settings. A different sound will be played depending on whether or not the scan was succesful. The un-complete button can be clicked to mark the build as uncompleted if it was scanned in error. Another way this can be done is by scanning the label a second time to bring up the option to uncomplete it.
Scanning Pull Labels with Multiple Packs
If a pull label for a build is scanned and there are multiple packs to that build, a pop up will show how many packs are left. More info on splitting lines by labels can be found here:
Production: Line Splitting By Label
The keyboard shortcut to open the production scan tab is “ALT + [“. This can be programmed in the barcode scanner to automatically run that shortcut while scanning in the label, allowing the labels can be scanned in without first needing to open the production scan tab manually.

#### Production: Line Split

Production: Line Split – Paradigm ERP by Paragon – Documentation
Home
Production
Production: Line Split
In Production, builds can be split into multiple lines which is useful when a build is produced in smaller packs, is partially completed at the end of the day, or when a
substitute component
is used for part of that line. To split a build, click on the pencil icon beside the build.
Then select how to split the pack, and enter how many packs or pieces the build will get split into. In these examples, the build getting split has twelve pieces in it.
Single Split – Split a given quantity off of the build.
Pack Count – Split the build into a given quantity of packs.
Piece Count – Split the build into packs with the given quantity of pieces in each.
If the build can’t be split into even packs, packs at different quantities will be created. In this case, the build with seven pieces was split into a pack of three and two packs of two.
Once a pack is split, it will appear on the build list on separate lines, and a comment that says “[created by production]” or “[split by production]”. In this example, a build with twelve pieces was split into three builds with four pieces in each.
It will then appear on the order as separate lines too.
Lines can also be split without showing up on separate lines, more info on that can be found here:
Production: Line Splitting By Label

#### Production: Line Split By Label

Production: Line Split By Label – Paradigm ERP by Paragon – Documentation
Home
Production
Production: Line Split By Label
In Production, builds can be split by labels instead of splitting the build into two separate lines. This allows builds to be easily split, while keeping the same amount of lines on the order. When this is enabled, builds can still be split into two separate lines if needed. Pull label splitting from production will mark the given order line as pulled, or mark it as un-pulled when the user deletes the labels.
It is most useful when the person printing them knows how the product will be packaged and can create labels accordingly. Using this feature will not allow the creating a pull label when printing or
multi-build printing
features to be used. Before using it, contact Paragon so that the printed reports can be modified to be compatible with this feature.
Split Labels
To use this feature, first enable it on the machine list. This can be done by going to Production > Machine List and selecting the “Split Labels” check box.
Then go to the work orders lists, and click the edit button beside the build to create labels for it.
Once that screen is open, the label quantities can be easily entered by typing in the quantity for the label and clicking enter. The users hands do not even have to come off of the keyboard at all to do it. Create the labels until the pieces to split reaches zero and then click enter to save and close.
The “Split Line” button can be used to split the build into multiple lines. See this FAQ for more information:
Line Split
Using the “Advanced Split” button will show additional options for splitting.
Scanning Split Labels
When one of the pull labels is scanned to complete it, a pop up below the search bar will show how many un-scanned labels are remaining for that build. The “Complete Anyway” button can be clicked to complete the build if the user knows that all the parts for that build were completed, but a label didn’t get scanned or was damaged.

#### Show/Hide Locked Builds

Show/Hide Locked Builds – Paradigm ERP by Paragon – Documentation
Home
Production
Show/Hide Locked Builds
The show/hide locked builds button is an option in
production screens
This button can change whether or not locked builds will be displayed in the list, and if builds are hidden they will not print from the list.
When the button displays “Showing Locked Builds”, unlocked and locked builds will be displayed. Once the button is clicked, it will display “Hiding Locked Builds”.
This will hide the locked builds from the list and the “Complete” button will not be displayed. If part of the order is locked, and the locked builds are hidden, only the unlocked parts of the build will show up on the list. The “Pcs” column for the order will not change based off of how many builds are displayed, and will still display the total number of pieces for the order. To display the locked builds again, simply click the button to change it back.
How to Enable Show/Hide locked Builds button
This button can be enabled or disabled by going to Production > Production Settings > User Settings. From there, click the check box to enable it or leave it disabled.

#### Production Coil Split

Production Coil Split – Paradigm ERP by Paragon – Documentation
Home
Production
Production Coil Split
Use the “Coil Split” form in Production when a lot-tracked coil is slit into another (or multiple) lot-tracked coils.
Start by going to
Production
and selecting the “Coil Split” button.
Then select the coil that was used by entering its lot ID, then specifying the quantity of that coil that was used. Be careful to input pounds or feet, depending on the
unit of measure
. If the item is tracked by pounds, and length, width, and weight were specified on the coil, the “Weight Calculator” button can be used to calculate the weight of the coil used based on the dimensions of the piece used.
Next, click “Add Coil” and enter the product that was made out of that coil from the list of available
lot-tracked items
in the “Resulting Coil” section. A new lot ID will be automatically created for you based on the original lot ID. Specify length, width, and weight, and fill in the “Qty” field, being sure to enter feet or pounds based on the unit of measure. Pounds will be calculated automatically by just entering the length and the width, as long as the initial info was entered. Then add any necessary notes at the bottom.
Once that is all filled out, click the “Finish” button. If the button is grey, it means some necessary data is missing.
After the quick adjust is done, Production can also be configured to print a label for the new coil.
It will also create an inventory adjustment in Paradigm to move inventory into the new coil. This will take stock from the coil used and apply it to the the resulting coils. The resulting coils stock will be less because of the waste factor that is calculated.
Coil Used Stock Adjustment:
Resulting Coils Stock Adjustment:

#### Production Tips and Tricks

Production Tips and Tricks – Paradigm ERP by Paragon – Documentation
Home
Production
Production Tips and Tricks
More information on the production screens can be found here:
Production Screens
Production has two tabs that can be used for producing any product (Work Orders and Component Production), and a third that is specialized for rollforming (Rollformer Production). The Work Order list shows each open order at the top, and clicking on an order shows all of the builds for that order being produced at the selected machine. Component Production shows a list of the components being used by open orders at the selected machine on the left, and selecting a component filters the list to just the products being made out of that component, which is most commonly used to make all of trim needed from a particular coil color before changing coils. Rollformer Production is similar to Component Production, but with additional group levels for orders and bundles.
In the Work Order list, clicking the ‘Print’ button for an order will print all of the builds for that order, whereas clicking and individual build only prints that line.
The ‘Lock’ button on an order will become selected after all of the lines on that order have been locked.
Each form has a ‘Print Preview’ checkbox that can be selected to see what will print before doing so.
The size of each section on the work order list can be changed by grabbing the gray dividing line between the section and dragging it where desired.
In the Work Order list, for lines that have attachments (special trims, for example), use the ‘View Online’ button to preview that drawing on the website. Edits are not saved, so no need to worry about messing up the drawing!
In the Work Order list, use the pencil button to the left of a line in the detail to split off a certain quantity of that product to a new line. This allows some of an order to be marked as manufactured while leaving the rest to be produced.
In the Work Order list, the section of components in the bottom right has a pencil to the left of each component that allows it to be switched out for an acceptable substitute product if substitutes have been set up on that item’s ‘Alternative’ tab. More about substitutions can be found here:
Inventory Component Substitution
Coil numbers can be captured every time a line is produced (this is configurable per machine, go to settings>Machine List and set ‘Capture Coil Info’ to YES for that machine). This allows you to use the ‘Production by Coil’ button to search for a coil number and view all of the orders that have been produced out of that coil.
In the Component Production list, the list at the left contains two special filter options– ‘Locked lines’ which only shows lines that have been locked, and ‘Stock Orders’ which shows any Manufacture Orders.

#### Adding/Deleting Bundles From Production

Adding/Deleting Bundles From Production – Paradigm ERP by Paragon – Documentation
Home
Production
Adding/Deleting Bundles From Production
In order for a user to be able to add or delete a bundle from
Production
, they must have the permission to do so.
To enable this, go to System > User Security. Then from the user permissions tab, check or uncheck the box beside “Allow adding/removing bundles in production”. More information on setting up user permissions can be found here:
Creating Users And User Security
Adding Bundles
Once a user has been given permission, they will be able to click on the icon beside any order number in
Production
, and it will then open a form that will allow them to add and delete bundles where they want to. They will also be able to rename any existing bundles by clicking in the description field.
To add a bundle, click on the add button and enter the name of the bundle.
To delete a bundle, click on the delete button.
Clicking on the pencil icon on a line will bring up the option to split it.

#### Production Multi-Build Printing

Production Multi-Build Printing – Paradigm ERP by Paragon – Documentation
Home
Production
Production Multi-Build Printing
In order for multi-build printing to work, contact Paragon so that the production label can be modified to handle the data from this setting. Once that has be completed, follow that rest of these steps to set up and use it.
To enable multi-build printing, go to Production > Production Settings and select it from the User/Report Settings
This setting is user specific. In order to add it to another user, simply select that user from the dropdown and apply that setting.
The next step is to then go to Production > Machine List and enable “Create Pull Label when Printing” on all the machines from which the user will be printing labels.
Printing from Work Order List
To print multi-build production labels from the work order list, go to Production >
Work Orders
Then select the order from which to create the label.
Select items from the build that will get printed on a label together, then click the print button on the right.
A print
preview
for the label will then appear.
Any items that are the same will be combined into one line on the label, like below where the “PPTEG6” was combined into a single line of fifty.
If the print button from the work orders list (highlighted below) is selected, the lines for that order will each be printed on their own label, even if the builds in it are selected.
Printing from Component Production List
To print multi-build labels from the component production screen, go to Production >
Component Production
Then select the components to print together and click “Print Selected”.
Selected components from this list must be from the same order to print, otherwise this error will appear: “
You may only print a group of builds for a single order!
“.

#### Production Batching

Production Batching – Paradigm ERP by Paragon – Documentation
Home
Production
Production Batching
Production Batching allows a subset of the items released to manufacturing to be selected and grouped together into a batch, allowing printing and completing of the batch.
Go to Production and click on “Production Batching”
Then choose the machine that the batch will be created for.
Select the items that are to be included in the batch by clicking the boxes on the left side of the row, and clicking “Add Batch” in the Batch window.
The system will assign a Batch ID. Batch numbers can also be assigned to items by entering the values into the Batch ID column.
More builds can be added to the batch by selecting them, and then right-clicking on the batch that the items are being added to and selecting “Add Selected Builds to Batch”.
The batch can also be deleted from the right click options, or click “View Details” to view the list of builds in that batch. From here they can also be rearranged in the order that they need to be completed in by changing the sort number.
The “Pcs Buildable” column determines how many pieces can be built with the amount of available component inventory. The list of components that a manufactured item will be using can be viewed by clicking the drop-down arrow.
Tracking Completion
Tracking Completion via Printing Batch Lists
One option to track completion is by printing out the batch list and give it the respective employees. They can then fill out the paper as they go, and once completed, it can be given to Production manager to be marked complete.
To print out the batch, click the printer icon, which will have a listing of all the items that need to be produced like the one below. Barcodes can also be added.
Clicking the Complete green check mark will complete all builds in the batch.
The employee will then turn in this paper to the Production Manager after all the jobs have been completed, along with any notes.
Once the paper is printed, the builds in the batch will be locked by default. This is the recommended way to have it set up, otherwise the paper won’t match up with the build in Paradigm if someone modifies it. However, this setting can be disabled through Production > Production Settings.
Tracking Completion Through Paradigm Production
Another option is if the employee has a computer at their machine. The Production Manager can then create the batch and tell the employee which batch number is to be completed. The employee can then filter down the list they use for just that batch. This is done by selecting Batch from the filter type and entering the Batch ID.
The builds can then be locked and completed as normal
The Production Manager can then see the progress being made on the “Complete” progress bar in the Batch window.

---

[← Back to Contents](#table-of-contents---click-to-navigate)

### WORKFLOW 6: JOB COSTING & PROJECT TRACKING {#job-costing-project-tracking}

[← Back to Contents](#table-of-contents---click-to-navigate)

**Purpose**: Track costs by customer project and analyze profitability

**When You Use This**:
- Setting up customer jobs
- Tracking job costs
- Analyzing job profitability
- Managing job invoicing

Source: https://docs.goparagon.com/kb-category/job-costing/

#### Billable Job Expenses

Billable Job Expenses – Paradigm ERP by Paragon – Documentation
Home
Job Costing
Billable Job Expenses
This FAQ will go over how to create billable
job
expenses in Paradigm ERP. This is used to pass job expenses back to the customer, such as subcontractor labor, equipment, or supplies.
Creating the Billable Expense
To add a billable expense, create a purchase order or purchase invoice and select the
job
on the line. Only non-WIP jobs can have billable expenses created for it.
Or select the “Billable” check box on the line item options pop up after the job has been selected:
Adding the Billable Expense To An Order Or Invoice
To add the billable expense to an order or invoice, select the job on the transaction and the “Billable Expenses” button will be shown in the header. From there the expenses can be added and a markup can be applied.
If the sales product has a markup, it will be brought in by default. The sales price can also be manually entered to calculate the mark up percent.
Set Sales Product –
Sets a single sales product for the selected items.
Set Markup –
Sets a markup on the selected items.
Combine matching non-stock items –
Combines matching non-stock items onto the same line when adding them to the order or invoice.

#### Job Custom Fields

Job Custom Fields – Paradigm ERP by Paragon – Documentation
Home
Job Costing
Job Custom Fields
This FAQ will go over how to set the job custom field labels, input masks, and control whether or not the field is shown. These fields are used to track information about the job that is not already covered by other fields.
Set Job Custom Fields
Job custom field labels and input masks can be set by going to System > Company Preferences > Job Custom Fields
Job Custom Fields On A Job
Job Custom fields can be seen on the “Detail” tab of the job.

#### Job Refunds

Job Refunds – Paradigm ERP by Paragon – Documentation
Home
Job Costing
Job Refunds
This FAQ will go over job refunds in Paradigm via a GL line on a credit memo.
Credit Memo
To start, create a credit memo linked to the job and add the return amount. The negative pieces shipped with a positive sales price will give the credit memo a negative balance.
Require Voucher Links
Go to the Advanced tab and uncheck “Require Voucher Links” and then post the credit memo. This checkbox can be unchecked for GL line credits like this to allow the transaction to post without linking it to a voucher – it should
only
be used in this case. If it is misused then there will be WIP balance issues.

#### Accounting Flow For The Cost of A WIP Job

Accounting Flow For The Cost of A WIP Job – Paradigm ERP by Paragon – Documentation
Home
Job Costing
Accounting Flow For The Cost of A WIP Job
This FAQ will go over the general accounting flow for the cost of a WIP Job.
All cost ends up in the WIP account prior to the job posting. Job posting then takes all of the cost for the job and divides it up into each assigned
job class
(MAT, LABOR, etc.) and posts it into that class’s assigned COGS account.
If the job is posted, or if the material is posted on an invoice instead of a job transfer, the cost will post to COGS directly and not pass through WIP.
To view which accounts were affected by the posting of a transaction, use the “GL Recap” button. More information on that can be found here:
GL Recap
Stock Item
Cost goes into the WIP account when the
job transfer
for that item is posted.
Nonstock Item
Cost goes into WIP clearing account when the voucher for it posts, then moves from WIP Clearing to WIP when the
job transfer
for that item is posted.
Manufactured Item
Cost goes into the item’s standard posting (Inventory/COGS) account when it is completed in production. Cost pulls out of the item’s standard posting account and into WIP account when the
job transfer
for that item is posted.

#### Reassign Purchases to a Different Job

Reassign Purchases to a Different Job – Paradigm ERP by Paragon – Documentation
Home
Job Costing
Reassign Purchases to a Different Job
This FAQ will go over how to use the “Reassign to Job” button. This is used to take items that were purchased for one job and reassign them to another job or no job.
Purchase Invoice Header
Start by clicking the “Reassign to Job” button in the header on the purchase invoice.
Choose a job from the purchase invoice, and then the job to reassign it to.
Then click “Reassign” and a pop up will then appear, saying that the reassignment was successful.
Line Item Options
Individual lines can be moved to a different job, by clicking the folder icon beside the ID and then clicking “Move From Job”.
This can only be done for special order items on a job that use
WIP
and is not linked to a sales order. If this is not the case, follow the
section in this FAQ.
Next, select the quantity to transfer, along with the job, phase, and job class.
Then select “Move Off Job” and new transactions for that item will be created.
Below is the purchase invoice that was created, with a negative line from the original job and a positive line to the new job.
Job Transfers
Line items can be moved to a different job or no job by going to the
job transfers
form on a purchase invoice. On the form, click the “Move” button beside the item that is to be moved.
Then select the pieces to be moved, new job, job phase, and a job class. If moving items to no job, uncheck the “Move to Different Job” box.
Then select “Move Off Job” and then the pop up will say it was successful.
Reassigning Vouchers That Were Not Linked to A Job
Unpaid
If the voucher has not been paid yet: Unpost > Assign the Job > Post.

#### Create A Job Transfer for A Purchase Invoice

Create A Job Transfer for A Purchase Invoice – Paradigm ERP by Paragon – Documentation
Home
Job Costing
Create A Job Transfer for A Purchase Invoice
This FAQ will go over how to use the “Create Job Transfers” button on a purchase invoice. This is used for any bills for the job that didn’t have a PO created for it, such as trash collection.
The “Create Job Transfers” can be used from the pop up that is displayed when attempting to post a voucher that is not linked to a Purchase Order. It can also be found by clicking the “Job Transfers” button in the header on the purchase invoice.
Select the items to be added to the job transfer and click “Create Job Transfers”. It only gives this option for unlinked lines and does the same thing as the “Transfer All Unlinked” option on the
job dashboard
Click “Yes”.
The view related for that purchase invoice will then be displayed. Double click the job transfer to view it.

#### Admin Create Purchase Invoice for Job Transfer

Admin Create Purchase Invoice for Job Transfer – Paradigm ERP by Paragon – Documentation
Home
Job Costing
Admin Create Purchase Invoice for Job Transfer
This FAQ will cover how to create a purchase invoice for a job transfer, which can only be done by a user that has the security permissions for it. It is used for creating purchase invoices for jobs with items that do not have a PO, items that are nonstock, or GL lines. This will record the transfer of nonstock items to the job if the original purchase can not be located or does not exist in Paradigm. This should not be used often and instead of using this the original purchase of that item should be tracked down and linked to that line.
Once the post button on a job transfer is selected, any items that need links to a purchase invoice will be listed in a pop up. Click the red exclamation mark button to create a purchase invoice.
Then enter the amount of pieces to be added to the purchase invoice and click “Create”.
Security
To allow this, go to System > User Security. Then from the user permissions tab, check or uncheck the box beside “Allow editing pricing or discounts in orders and invoices”. More information on setting up user permissions can be found here:
Creating Users And User Security

#### Job Progress Posting

Job Progress Posting – Paradigm ERP by Paragon – Documentation
Home
Job Costing
Job Progress Posting
This FAQ will go over job progress posting in Paradigm. A progress post takes all of the cost that has been applied to the job to date and posts it, but does not complete the job. Paradigm does
not
do a “percent of completion” post to post a percentage of the cost and sales, it just takes the cost that has been applied so far and posts it.
To do this, go to the job and click the “Progress Post” button in the header.
Then click “Continue” on the pop up that appears.

#### Job Dashboard

Job Dashboard – Paradigm ERP by Paragon – Documentation
Home
Job Costing
Job Dashboard
This FAQ will go over the job dashboard in Paradigm. The job dashboard is used to show transactions linked to the selected job that need to be completed and jobs that are ready to be posted.
The job dashboard can be found by going to Accounts Receivable > Job Dashboard
It can also be found in the header on a job.
Select a job ID from the drop down.
Transfer All Unlinked
The “Transfer All Unlinked” button will create job transfers for any special order items on the purchase invoices that have no links to purchase orders.

#### Job Classes

Job Classes – Paradigm ERP by Paragon – Documentation
Home
Job Costing
Job Classes
This FAQ will go over how to assign and create a job class to an item and what happens if a job class is not assigned. Job classes are used to divide products into several cost types for the job, to allow for more accurate reporting. Common job classes are MAT (material), LABOR, EQUIP, etc.
Assigning A Job Class
To assign a job class, go to the item’s detail tab.
If an item doesn’t have a job class assigned, the following error will appear when trying to post a job transfer for that item:
An unexpected error occurred. Below is attached error. One or more lines are missing a Job Class. This must be assigned before it can be posted.
Changing Job Classes on A Detail Line
To change a job class for an item on a transaction, click the drop down on the current job class. To change the job class on all lines, click the pencil icon and select the class.
The job class can also be edited by double clicking it. This allows for the job class to be edited even on lines that are already released or locked.
Creating Job Classes
Job classes can be created by going to System > Company Preferences > Jobs
Classification – Job Class Name
Adder – Adder percent that is shown on the phases tab of a job.
Markup – Markup percent that is shown on the phases tab of a job.
Account ID – Choose the cost account that the cost assigned to this class will post to during job posting.
Quote Tax – Check the box if tax should calculated for this class on a quote.
Sort – Sort order that it will appear on the list.

#### Job Completion And Billing

Job Completion And Billing – Paradigm ERP by Paragon – Documentation
Home
Job Costing
Job Completion And Billing
This FAQ will go over the steps for completing a job.
Job Dashboard
To start, go to the job’s dashboard by going to Accounts Receivable > Job Dashboard and entering the job ID. This will display a list of transactions that need to be completed or posted prior to the job being posted.
Once all of the open transactions are completed or posted, the job will then appear on the right side of the screen in the list for jobs that can be posted and completed.
Billing
Go to the job and click the “Final Billing” button.
Then choose how much is being billed and the tax code to apply.
A pop up will then appear with the amount that was billed.
Click “Open Invoice” and then post the invoice to apply it to the customer’s account.
Posting
Go to the job and select the “Post” button from the header.
Then click “Continue”
A pop up will then appear will the following message:
Success – Journal created successfully!
Job posting takes the cost out of the WIP account for that job and posts it to the cost accounts designated on the job classes that were selected for each line transferred to the job. It also posts any use tax for those products along with the journal entry. Ideally the final billing and job posting are done in the same period so that the sales and cost hit simultaneously to keep the profit and loss report accurate.

#### Adding Cost to A Completed Job

Adding Cost to A Completed Job – Paradigm ERP by Paragon – Documentation
Home
Job Costing
Adding Cost to A Completed Job
This FAQ will go over how to add cost to a completed job.
Once a job is completed and posted, it is not longer a WIP job and job transfers cannot be added. Costs being added on after a job is completed will need to be done through an invoice.
Adding Cost To A Job
To add cost to a job that was already completed, go to the job detail tab and change the job status from “Completed” to “In Progress”. This will cause the status bar at the top to turn red and allow for the job to be selected on transactions.
After that is completed, return to the detail tab and change the job status back to “Completed”.

#### Creating And Converting Job Orders

Creating And Converting Job Orders – Paradigm ERP by Paragon – Documentation
Home
Job Costing
Creating And Converting Job Orders
This FAQ will go over creating orders for a job. The process for this is very similar to creating a regular order, except for the few differences listed below.
Creating an Order
To create an order for a job, first set the status on the job to “Accepted/Pending”, otherwise an order cannot be created for the job. More information on that can be found here:
Creating a Job
Create the order, enter the customer that is on the job, and select the job ID from the dropdown beside “Job”.
Then add the items to the order like normal.
Converting An Order
Converting An Order To a Job Transfer for A WIP Job
When the products on the order have been delivered to the job and the order needs to be completed, by default it will be converted to a Job Transfer to move the cost of the items to the job, but not post them to the profit and loss yet. This is only true for non-posted WIP jobs.
Converting an Order To an Invoice For A WIP Job
When converting an order for a WIP job that has already been posted, the order can only be converted to an invoice. If a WIP job is unposted, it can be converted to a job transfer or directly to an invoice. Converting directly to an invoice is used most commonly used when there is an addon after the agreement is signed that was not included in the original proposal amount and the customer is paying for it directly.
Orders converted to an invoice instead of a Job Transfer will be posted directly to COGs and Income on the Profit and Loss and do not pass through the WIP account. They will still count towards the job sales/cost totals for the job.
Converting An Order for a Non WIP Job
Orders for non-WIP jobs can only be converted to invoices, not Job Transfers, since they do not pass through the WIP account. Invoices and purchase invoices for a Non-WIP lump sum job will use the GL Accounts from the selected
job classes
, similar to how posting those transactions would work if they were for a posted WIP job.

#### Job Prepayments

Job Prepayments – Paradigm ERP by Paragon – Documentation
Home
Job Costing
Job Prepayments
This FAQ will go over how to create a prepayment for a job.
First go to Accounts Receivable > Customer Prepayments and click the green plus button.
Then enter the customer ID and a job ID to link it to.
Once the rest of the information is filled out, click “Post” to complete the prepayment.
Company Preferences
To set up prepayments to automatically apply to any invoices for that Job upon posting, go to System > Company Preferences > Jobs > Behavior. Then check the box highlighted below:

#### Job Returns

Job Returns – Paradigm ERP by Paragon – Documentation
Home
Job Costing
Job Returns
This FAQ will go over how to return items that were returned from a job. This process is very similar to credit memos, more information on those can be found here:
Credit Memos
First, create a job transfer by going to Accounts Receivable > Job Transfers and click on the green plus button.
Fill in the customer ID, job ID, and enter the item being returned and enter “-1” in the Pcs Ord column.
Once the item is entered with that negative quantity, a pop up will appear with the previous job transfers that have that item.
Double click the corresponding invoice and the quantity will be filled on the job transfer. Using this form will ensure that the items are returned at the correct cost.
Then post the transfer to complete the return.

#### Creating A Job

Creating A Job – Paradigm ERP by Paragon – Documentation
Home
Job Costing
Creating A Job
This FAQ will go over how to create a
job
in Paradigm.
To start, go to Accounts Receivable >
Jobs
and click the add button.
Enter the customer ID and copy in the customer info and contact methods if needed.
Then, go to the Detail tab and fill in the rest of the job information. The data here is not required, but it’s recommended to fill in most or all fields for better reporting.
It is important to set the job status here. If the status is set to “Estimating”, only quotes can be created for a job. Once the job is sold, set the status to “Accepted/Pending”, and orders can then be created for the job.
The job ID can be edited by clicking the pencil icon beside it.
Once all the information for the job has been filled out, click “Save”.

---

[← Back to Contents](#table-of-contents---click-to-navigate)

### WORKFLOW 7: FULFILLMENT & SHIPPING {#fulfillment-shipping}

[← Back to Contents](#table-of-contents---click-to-navigate)

**Purpose**: Pack and ship customer orders

**When You Use This**:
- Preparing orders for shipment
- Creating shipping labels
- Managing backorders
- Tracking deliveries

Source: https://docs.goparagon.com/kb-category/fulfillment-pro/

#### Fulfillment Pro: Employee Filters and Settings

Fulfillment Pro: Employee Filters and Settings – Paradigm ERP by Paragon – Documentation
Home
Fulfillment Pro
Fulfillment Pro: Employee Filters and Settings
This FAQ will go over how to create and edit Fulfillment settings for an employee. Information on how to create a new employee web login can be found here:
Create Employee Web Logins
To start go to System > Company Preferences > Employee Web Accounts
Log in with the administrator account (usually “
web_admin
“), click the dropdown in the top right corner, and select “Edit Employees.”
Then click on the “Details” button.
Click on the “Fulfillment Settings” to view or change the configuration settings for this user in Fulfillment. Each option has hover-text that explains its function.
Fulfillment Settings
Order Labels
The dropdown lists of report options for the single and multi-item labels include several standard sizes, but custom sizes can be created if needed.
Account Setup
The settings here control what the user can access in Fulfillment.
Default Warehouse – If a user doesn’t select a warehouse, this warehouse will be used. More info on how to select a warehouse can be found here:
Fulfillment Pro: Browser Settings
Pulled only after scanned (Pulling) – If this is checked, items will not be marked pulled until they are scanned. If unchecked, the label will be marked pulled when it is created. More info on pulling can be found here:
Fulfillment Pro: Pulling (Picking)
Pulled only after scanned (Receiving) – If this is checked, items will not be marked pulled until they are scanned. If unchecked, the label will be marked pulled when it is created. More info on receiving can be found here:
Fulfillment: Receiving
Enable Pick (shipping) Tickets – Allow the user to print a pick ticket for the selected locations. The items on the ticket will be marked as pulled. More info on picking can be found here:
Fulfillment Pro: Pulling (Picking)
Enable Lot (non-shipping) Tickets – Allow the user to print a ticket for items in the selected locations. This will
not
affect the pull status of any of the items.
Use Pull Labels – This allows the user to choose which lines they want to print, and which lines they don’t. It also allows them to print part of a line.
There are two different types of pull labels.
Single item labels only have one item on them. Depending on the label that is chosen, it includes product ID, pieces, bundle ID, and description.
Multiple item labels have more than one item on them. Depending on what label that is chosen, it will include a list of products with the product ID, pieces, bundle ID, and description.
More info on pull labels can be found here:
Fulfillment Pro: Pulling (Picking)
Hide Scan/Ship/Pull Button/Fields – Hides the scan button. Use this option if pulling labels when printed, and they aren’t being marked as shipped.
Enable Sets of Items to be Printed on Single Labels – Allow a user to print a selected group of items on individual labels.
Enable Multiple Items Per Label – Allow user to print multiple items on single label.
Force Ask for Name – Force user to choose employee name when printing pick tickets or scanning something as shipped or pulled, this option overrides
the setting in the pull list
. Otherwise, uses first and last name for user login. Do note that the user will only be asked for name when printing pull label if the label is being marked as pulled.
Enable Lock/Unlock Line – Allow user to lock and unlock single lines. No printing is necessary to lock lines. All pull labels will lose their reference to a line that is unlocked. This means that single labels will be invalid;
however,
multiple labels will only lose their reference to that line (they will still be valid for other lines).
Enable Manual Shipping of Items – Allow user to manually ship a product from the shipping list without scanning a label. More info on shipping can be found here:
Fulfillment Pro: Shipping
Enable Manual Packing of Items – Allow user to manually pack a product from the packing list without scanning a label. More info on packing can be found here:
Fulfillment Pro: Packing
Enable Pull Label Splitting – This enables a user to remove items from a pull label after it has been created. The quantity can either be put onto a new label (with the same pulling information as the original) or removed and put back in the pull list.
Use Staging Areas (Order Gathering) – Staging areas allow users to assign a label to a specific location for easier finding when shipping. Does not apply to pull labels made in Receiving. Forces the user to select a staging prior to printing a label for the line. More info on staging can be found here:
Fulfillment Pro: Staging Areas
Use Restage Dialog (Order Gathering) – The restage dialog allows for quick restaging with barcodes. This will show a button at the top of Fulfillment to open the restaging dialog.
Use Restage Staging Area – This is a tab in the restage dialog – it will allow moving all items from one staging area to another.
Use Staging Areas (Receiving) – Allows the user to set staging areas for pull labels made in receiving. More info on staging can be found here:
Fulfillment Pro: Staging Areas
Use Shipping List – The shipping list can be used to make sure all of the items in the order are on the truck. More info on shipping can be found here:
Fulfillment Pro: Shipping
Show Trip Full Button – The Trip Full button in the Shipping List allows the user to mark a trip as full, and use a backup trip if available. More info on that feature can be found here:
Fulfillment Pro: Trip Is Full
Use Pack Builder – The pack builder allows pull labels to be assigned to a pack. The label for the pack will mark all items in the pack as shipped when it is shipped. More info on packing can be found here:
Fulfillment Pro: Packing
Enable Back Order – This allows the user to set a quantity to back order. These quantities are back ordered when the order is completed. More info on back ordering can be found here:
Fulfillment Pro: Back Ordering
Enable Location Claiming – Claiming locations lets other users know that someone is gathering items for that location. More info on location claiming can be found here:
Fulfillment Pro: Location Claiming
Enable Header Labels – Allows user to print header labels for order. Header labels include basic order header information, but no items.
Remember Employee Name – If checked, after a print, or closing a list, the selected employee is saved. If unchecked, after a print, or closing a list, the selected employee is removed.
Show Payment Status – Shows how much of the order has been paid. Also shows the ID’s of related payment documents. Does not show any dollar amounts.
View Attachments – Allow user to see files attached to order detail lines. More information on attachments can be found here:
File Management & Attachments
Allow Editing Trip Details – Allow user to change trailer and status on the trip.
Transfers – Enables transfers. Transfer items will show at warehouse of origin. More information on transfers can be found here:
Fulfillment Pro: Transfers
Receiving – Enables PO Receiving. Allows user to create purchase invoices and receive products. More info on receiving can be found here:
Fulfillment: Receiving
Enable Info Labels in Receiving – Allows the user to print info labels for purchase invoices made in receiving, for items that are not linked to an order.
Group Transfers on Pick/Lot Tickets – Puts items that are transferred in a separate group in Pick/Lot tickets.
Hide Transfers on Pick/Lot at – Select a warehouse or warehouses from the drop down. Transfer items are not printed on pick/lot tickets that are printed at these warehouses.
Shelf Quantities – Shows button to load shelf quantities on pull list and pack builder.
List Filters
The list filters created here can be chosen by the user in the main orders list.
Adding A Filter From Another User
To add a filter from another user, click “Import From Another User”, select the user and the filter from the drop downs, and click “Add”.
Creating New Filters
Then select the days past and future, whether or not to include completed orders and the max age of the completed orders, and whether or not to include transfers. If “Completed Orders” is checked, orders will show up until they are completely shipped in Fulfillment or past the max completion age. If unchecked, orders will appear until they are marked completed; typically by converting it to an invoice in Paradigm.
Select the ship vias from the drop down that are to be shown with this filter, or click “Select All”. Once all the information is entered, click save.

#### Fulfillment Pro: Pulling (Picking)

Fulfillment Pro: Pulling (Picking) – Paradigm ERP by Paragon – Documentation
Home
Fulfillment Pro
Fulfillment Pro: Pulling (Picking)
This FAQ will go over using the pull list in Fulfillment Pro. The pull list is the regular list of orders that appears in the main screen of Fulfillment after choosing the filtering options. More information on pull list filters can be found here:
Fulfillment Pro: Filtering
“MF” – This shows where or not the manufacturing has be completed.
“X” = Not Complete
A checkmark = Complete
“% Complete” – This is a progress bar for the percentage of the entire order (including items not in the selected locations) that has been pulled, shown in blue. As those lines are marked shipped, the color changes to green. Hover the cursor over the bar to see the exact percentage.
“# Items” – This column contains two pieces of information. The checkbox will become checked after every location of product on that order is claimed. Directly beside the checkbox is the number of lines on the order included in the selected warehouse locations.
“Weight” – This is the weight of the items on the order that are in the selected warehouse locations. Depending on company settings, it may be the total weight of the order.
“Load Time” – This will be populated with the load time on the trip after the order is scheduled for delivery through Dispatching.
“Truck” – This will be populated with the truck name after the order is scheduled for delivery through Dispatching. This column may be turned off in the “Setup” form.
“Driver” – This will be populated with the driver name after the order is scheduled for delivery through Dispatching. This column may be turned off in the “Setup” form.
“Trip-Stop” – This column may display, depending on the settings in the “Setup” form and will be populated with the trip ID and stop number after the order is scheduled for delivery through Dispatching.
Some of these fields may be hidden, depending on the display settings and screen size.
Refreshing
If the refresh button in the top right is used, it will keep the current filters and just refresh the data in the list. This is the button that should be used to update the pull list (to bring in new orders or update information on the current orders). The pull list will automatically refresh every five minutes.
Using the browser refresh button will apply any changed settings and will clear the filters.
Clicking on an order will expand it to show the items in the selected warehouse locations. The entirety of the order that was clicked will be surrounded in a light-blue box, and there will be additional headers for each bundle and warehouse location on the order. Immediately above the first line of product will be a row of buttons, called action buttons. Above the line of action buttons may be additional rows of options, depending on the user/company settings.
Each line of product has multiple columns of information, including:
Fulfillment Pro: Packing
“P/S” – This is the quantity of the line that has been marked pulled (“P”) or shipped (“S”).
“NumLeft” – This is the quantity of that product that still needs to be printed/pulled.
“Qty” – This is the number of the product to be printed.
“Len” – This is the length of the product, if one has been entered on the order. This can be set to only show for products that have customizable measurements.
“Prod ID”, “Description”, and “Weight” – These come from the line on the order.
Description
” will also show the shelf where the items are stored if the optional shelf-builder tool is being used. Please contact Paragon if you are interested in this feature.
“TR from” – This stands for “Transferred From” and will display the origin warehouse for items that need to be transferred. The warehouse will show in red until the product is transferred out of the origin warehouse.
“Status” – This column will have different text based on the manufacturing and special-order status of the line.
“In Stock” means the product does not need to be manufactured.
“In Process” means the product must be manufactured for this order but is not done yet.
“MFG Complete” means the product must be manufactured and it has been completed.
“MFG: x, STK: y” this will be shown when the item is being pulled from stock (STK) and being manufactured (MFG).
“MFG Started” will be shown if the line is locked by production.
“PO Created” means a special order has been created, but it has not been entirely received yet.
“PO Received” means a special order has been created, and it has been entirely received.
“Attachment” becomes available when enabled in user settings. This option will display a button to view any .pdf attachments on the order detail line.
Unlock
Some of these fields may be hidden, depending on the display settings and screen size.
Trip Focus And Details
Trip Focus – Filters the pull list to the selected trip ID.
Trip Details – This displays the “Trip ID”, “Driver”, “Truck”, “Trailer”, and “Delivery Status” which pulls the info from Dispatching. The “Truck” and “Trailer” info are still editable,
only
if
“Truck” and “Trailer” are set to “TBD” in Dispatching. Example: If a trip is created and the user is unsure which truck and trailer combo for the selected driver that the load will fit best on, a yardman can update that once known. Once “Truck” and “Trailer” are set to the correct values, they can not longer be edited, although “Delivery Status” will still remain editable.
Pick Ticket
Pull Labels
Pull labels are a way of marking each line as pulled as it is gathered, allowing the salesperson to make changes literally up to the last second. Additionally, pull labels can/should be printed onto sticky-backed labels and affixed to the product that was pulled to aid in the tracking of that product until it leaves the warehouse, as well as avoid confusion about the order to which the product belongs. Pull labels include a scannable barcode that can be scanned in several places to track the path of the product through the warehouse.
To print a pull label, simply click the dark gray button (which will show “No Label” to start) in the “Qty” column after expanding an order in the pull list to mark that line to print.
The user can edit the “Qty” to any number less than the quantity ordered to pull a partial amount of that line. Changing the quantity on a line automatically marks it to print and changing the quantity to zero removes it from the lines marked to print. Additionally, an entire bundle can be marked to print at once by using the “Select Bundle” button, or an entire order can be marked by clicking “Select All” in the row of action buttons.
Single item labels will print one label per line that was selected, with a barcode on each label. Multi-Item labels will print one label that lists all the items selected, with a single barcode relating to the entire set of items. Multi-item labels are commonly used for small items that are placed into a box, with a single label on the outside of the box that can be scanned to reference everything in the box. Once the lines are printed, they are marked as pulled and locked on the order.
Printing Partial Amounts
The default pull label report will enter the quantity to pull on the label as simply a number, if the label contains all of that product in the bundle. If a partial amount is printed, or there are two (or more) lines for the same product and bundle, the quantity will print as:
[Printed Qty] of [Total Quantity]
(i.e. 4 of 17).
Printing Multiple Labels for A Single Item
Each row in the pull list will now show both a “qty” and a “lbl” field. Use “qty” to specify what quantity to print on each label, and “lbl” to specify how many labels to print.
Entering the per-label “Qty” and clicking the “lbl” button will auto-fill the number of labels needed at that quantity per label.
If the quantity does not break out evenly, for example three in a pack and ten ordered, entering a quantity of three and clicking “lbl” will print three labels with three quantity and one with one quantity.
Multi-item labels cannot be printed for a non-simple quantity line (this would be the same as a regular pull label).
Ask Name
Depending on the user settings, Fulfillment Pro may prompt the user to select their name from a list when the label prints. If the user account settings have the “
Force Ask for Name
” option selected, they have no control over this. If that option is not selected, they can turn the prompt to select their name on or off by clicking the “Settings” button at the top of the screen and changing the “Ask Name” option.
After a Label Is Printed
Printing a label will do one of two things to the line: either mark it as pulled or mark it as printed, depending on the user settings. If the user account is configured to mark the lines as pulled automatically, the quantity that was printed will immediately be deducted from the “NumLeft” column and will be added to the “P” (pulled) quantity in the “P/S” column. The user’s name will be recorded as the person who pulled the order and the line will be locked from all changes in Paradigm.
If the user account is not configured to automatically mark the lines as pulled, the line will be marked as printed instead. This will deduct the printed quantity from the available “Qty” to be printed but will not add it to the “P” (pulled) quantity in the “P/S” column. The line will not be locked from all changes in Paradigm, instead, the quantity ordered will remain unlocked (There is a setting in Paradigm under Company Preferences > Sales > Limits to lock the quantity on printed lines, if that is preferable for the company). If the quantity is changed in Paradigm after the label is printed, a warning will appear in Fulfillment Pro under the “NumLeft” for that line.
When the product that was marked printed has been gathered, the barcode will need to be scanned in the “Mark Scanned” field which appears after clicking the “Scan” button in the bottom-left corner of the screen (depending on the user settings, a “Pull” field may be in this position instead, in which case it should be used), at which point the user scanning the label will be recorded as the person who gathered the product, and the line will be locked from all changes in Paradigm. If the quantity has been changed from what was printed on the label, the user scanning the barcode will be presented with a warning that they have pulled too many (if the new quantity is smaller) or with a message asking whether to mark the labeled amount or the ordered amount as pulled (if the new quantity is larger).
After every line on the order at the selected locations has been marked as pulled, the order will be removed from the “Unpulled” filter. If additional actions need to be taken for that order, adjust the “Show” filter at the top to “All”. If labels are not being marked as pulled as soon as they are printed, consider using the “Unprinted” filter by default. When the last line of an order is printed, the order will be moved to the “Unpulled” filter, and after all the lines have been scanned, it will be moved again to the “All” list.
Most companies opt to have the pull labels and pick tickets mark the lines as pulled immediately and do not have the lines marked printed then scanned to mark them as pulled. Marking the lines as printed works best in cases where changes to the order are likely to happen while the order is being gathered, as it grants a larger window where the quantity ordered is still editable in Paradigm. They are also commonly used when pick tickets, not pull labels, are being printed, but the company still wants to know when that order is completely gathered.
If a line is added to the order after it is released, a small warning icon will appear under the “NumLeft” for that line to note that it was added after being released.
Lot Ticket
A second alternative to using pick tickets is to use lot tickets. The lot ticket printout looks identical to a pick ticket (except for the report name at the top of the printout and the lack of a barcode) but has different functionality. When a lot ticket is printed, the lines on the order are immediately marked as printed, which locks down everything about that line in Paradigm except for the quantity ordered. If the quantity ordered is changed after a lot ticket is printed, a warning will appear in Fulfillment Pro under the “NumLeft” for that line.
After the product has been gathered and the order has been checked for any edited quantities, either pull labels or a pick ticket should be printed out for that order to mark the lines as pulled, which locks the quantity ordered in Paradigm.
Lot tickets, like pick tickets, do not pay attention to the lines or quantities that have been marked to print, they always print everything that is showing for the selected order.
The lot ticket groups by product ID, so if part of a line has been marked as pulled, the quantity column will show:
[Pieces remaining to pull]/[Total of this product]
(i.e. 4/17).
Header Label
Header labels are a version of pack labels with diminished functionality. Depending on the company’s setup, it may not make sense to create pack labels, yet the user may still combine many products for one order into a single pallet, crate, box, etc. In this case the user may still want to be able to print a label for an order to affix to the pack of product simply to know which order the product is for, along with other important information.

#### Fulfillment Pro: Filtering

Fulfillment Pro: Filtering – Paradigm ERP by Paragon – Documentation
Home
Fulfillment Pro
Fulfillment Pro: Filtering
This FAQ will go over the different filtering options for the pull list in Fulfillment Pro.
Typically, Fulfillment only shows orders that have been released to manufacturing and have not yet been converted to an invoice or otherwise completed. However, orders will show in Fulfillment for at least an hour after they are released, regardless of whether they are invoiced. This allows for product to be gathered for a customer as he walks from the office to the yard. This kind of order will show in blue in the list and will have notes explaining to be careful to not double-pull the order, since the customer may already have been given the product.
A user’s saved filters can be set to show orders in Fulfillment Pro until every line has been marked as shipped, even if the order has already been converted to an invoice. Use this option when setting up filters for users if the company ever converts orders to invoices prior to the orders being gathered.
Location
Use the dropdown list to select the warehouse location(s) from which the product is being gathered. The pull list will be filtered to include only lines on orders where the inventory item is assigned to the selected locations. If an order has product at the selected location and product from elsewhere, the pull list will only show the products from the selected location. If a product has not been assigned a warehouse location, it will show up for every warehouse location.
The locations shown are from the warehouse stock tab of an item and are created in the warehouse settings. More information on how to add locations to a warehouse can be found here:
How to Add Locations To A Warehouse
Date
Fulfillment Pro: Employee Settings
Filter
Select from the different filters that are available for the user that is logged in. More information on creating filters can be found here:
Fulfillment Pro: Employee Settings
Show
Orders with the selected status or order type will be shown. By default, only orders that have lines remaining to be gathered at the selected locations will show. By changing this option to “All”, the pull list will show the orders that have already been completely gathered, but not yet invoiced. The third option in the list, “Unprinted” is like the “Unpulled” filter but designed for use in conjunction with certain types of pull labels, which mark lines as printed instead of pulled. The third and fourth options, “Unclaimed” and “My Claimed”, only will be available if location claiming has been enabled for the users login. “Transfers” will appear if the login has been granted permission to view transfers, and selecting it will limit the list to only transfers (both inventory transfers and special order transfers). The next option “Unshipped” shows orders that have not been entirely shipped through Fulfillment Pro. “Back Orders” shows orders that have been back ordered. “Unshipped-On Trip” shows orders that are un-shipped and on a trip.
Search Bar
Keep in mind the pick ticket, order, and invoice reports from Paradigm can have a barcode added to them that can be scanned to enter the order number, which could improve customer load times.

#### Fulfillment Pro: Shipping

Fulfillment Pro: Shipping – Paradigm ERP by Paragon – Documentation
Home
Fulfillment Pro
Fulfillment Pro: Shipping
This FAQ will go over the shipping list in Fulfillment. The shipping list extends the functionality of the pull and pack list by allowing pull and pack labels as well as pick tickets to be scanned as they are being loaded on the truck for delivery to ensure that the correct products are delivered. When the shipping list is used properly, the likelihood of a product being ordered but not included on the delivery greatly decreases.
Opening the Ship List
There are two main ways to access the shipping list. The first way is to scan a label into the “Ship” field at the bottom of the pull list (depending on the way the
options
are set, the user may have to first click the “Ship” button to see this field). This will open the ship list, load the lines from the scanned order in to the ship list, and mark the label that was scanned as shipped.
The second way to access the ship list is by clicking the “Ship” button from the row of action buttons that are displayed after expanding an order from the pull list. This method immediately loads the lines from the selected order into the shipping list. Depending on the way the options are set, the user may also be able to access the shipping list by clicking the “Scan” button at the bottom of the pull list and scanning a label into the “Mark Shipped” field.
Shipping List
user settings
, the button to manually mark a line as shipped may not appear.
If a line has not been pulled or packed yet, (and therefore not locked from changes in Paradigm) and the quantity is changed, a warning sign will appear beside the “Rem” quantity to draw attention to the quantity to make sure that the proper quantity has been pulled/shipped. A slightly different warning will show if the line was added to the order after the order was released.
As labels are scanned or lines are manually marked as shipped they will move from the list on the left to the list on the right. The list on the right shows all the items that have been marked as shipped, with group headers for location (green) and bundle (blue). A line can be marked as unshipped by clicking the “Unship” button.
Scanning a single pull label that is part of a pack, manually marking one of a pack’s lines as shipped, or manually marking one line of a multi-item label as shipped will move all the items associated with that label at once. However, scanning a production label that is part of a pick ticket will not move the entire pick ticket, only scanning the barcode on the pick ticket or manually marking one of its lines will move the entire pick ticket. Scanning a production label that is part of a pick ticket will remove it from the pick ticket and mark the scanned lines as shipped.
When scanning labels to mark them as shipped, if a label from a different order is scanned, the details from that order will be loaded into the shipping list as well (or the entire trip, if the new order is part of a trip). Orders can be removed from the shipping list by closing the shipping list, clicking the “Clear Orders” button to remove all orders, or by clicking “Remove Order” in the order number dropdown to remove a single order. Optionally, Fulfillment can be set to prompt the user before adding the new order into the shipping, list, more on that below.
Note that if the company is using Dispatching to schedule trips, the shipping list can be configured to open the entire trip, sorted and grouped by last stop to first stop, when an order on that trip is selected. Each stop includes the weight of the stop and the maximum length of products in that stop. Enable this by clicking the “Settings” button at the top of the screen and checking the “Show Entire trip” option.
After all the items are shipped, the option to get a signature and to open the camera to take a picture of the shipment will appear. These will be saved and can be accessed from the order screen by the
attachments
button.
Scanning A Label for An Order That Is not on the Trip
If a label for another order that is not on the trip is scanned the following error will appear:
You’ve scanned a label for another order. Would you like to add it to the list?
Clicking “Yes” will bring in the other order into the shipping list. If the shipping list should instead load the trip that the order is on, uncheck the box beside “Prompt new Order in Shipping List” from the Fulfillment settings.
UPC Scanning
Shipping List Sorting
Listed below is how the ship list sorts the items shown.
Trip ID (Descending)
Stop Order (descending)
Warehouse Location (ascending)
Longest Bundle Item (descending)
Bundle ID (ascending)
Line Type (descending)
Category Sort Number (descending)
Sub Category Sort Number (descending)
Product ID (ascending)

#### Fulfillment Pro: Set Up

Fulfillment Pro: Set Up – Paradigm ERP by Paragon – Documentation
Home
Fulfillment Pro
Fulfillment Pro: Set Up
This FAQ will go over the company wide set up options for Fulfillment Pro. These options can be configured by logging in with the administrator account, clicking the dropdown in the top right corner, and selecting “Setup”, then the “Fulfillment” tab.
Fulfillment Set Up Options
Hide Standard Lengths – If a non-linear item has a length, don’t show it. Otherwise show all available lengths.
Show Pull List Weights by Order – In the pull show entire order weight. Otherwise, show the weight of the items in the selected locations.
Show Truck Name in Pull List – Show truck name for trips in pull list.
Show Driver Name in Pull List – Show the driver name for trips in pull list.
Replace Salesperson with Trip ID + Stop Order – In the pull list show Trip ID + Stop Order instead of Salesperson.
Show Order Manufacture Status – In the pull list show a check on orders that have all items manufactured.
Show Double Pull Warning – In the order details, show a warning if the item is at risk to be double pulled.
Move Items to new Pick Ticket – When you print a second pick ticket Items for the selected location(s) will be moved from any existing pick tickets and put onto the new ticket.
UPC Scanning – Allows scanning UPC codes into pack builder and shipping list. (only works with one order in shipping list)
Pick Ticket Barcode – Shows barcode when printing pick ticket. Barcode is for the pull label ID that the pick ticket represents.
Send Back Order Emails – Send email to salesperson when backorders happen.
Split Connex Labels – When panel lengths are very small, some companies double them up. This enables handling for it coming from Connex labels.
Show Lot Info – Show extra lot info by default.
Mark Staged Lines as Pulled – Automatically mark lines as pulled when they are staged.
Priority Orders – Choose which orders are marked as
priority orders
Fulfillment Sign to Agreement – This is the agreement the customer will see when they sign.
CC Email all Back Orders – This is the email that is CCed on back order emails.
Staging Areas
This is where staging areas can be created. More information on that can be found in this FAQ:
Fulfillment Pro: Staging

#### Fulfillment Pro: Receiving

Fulfillment Pro: Receiving – Paradigm ERP by Paragon – Documentation
Home
Fulfillment Pro
Fulfillment Pro: Receiving
Fulfillment Pro can assist in the process of receiving Purchase Orders from vendors, both for regular stock orders and for customer special orders. Receiving through Fulfillment Pro will automatically convert the Purchase Orders to Purchase Invoices, update the units received on the purchase invoice, and mark it as received, greatly reducing the administrative work needed to track order reception as well as keeping inventory more accurate and current.
To begin, enable the “Receiving” setting in the employee
Fulfillment settings
. This will cause a button to appear in the Pull list header beside “Settings” for “Purchase Receiving”.
Then select the warehouse that the inventory is being received into at the top of the screen and select the correct employee name. The list on the left side of the screen is all the vendors in Paradigm that have open POs, the list on the right is recent receiving.
Find the vendor/PO that is to be received and click the “Open” button beside the correct Vendor ID.
Create Purchase Invoice
This will bring up a list of the open POs for that vendor (any PO that is not completed will show in this list). Click the “Add” button to select the PO(s) to be received, and optionally use the “i” button to view the lines on that PO. After all the POs are selected that are to be received, click the green “Create Purchase Invoice” button.
Receiving
After creating the purchase invoice, you will be presented with the actual receiving screen. Note that at this time, the PO(s) has been converted to a purchase invoice in Paradigm, and you can click the red X in the top right corner to stop receiving this purchase and switch to another – you can get back to this receiving document by opening it from the “Recently Received” list.
Items can be received manually by either using the +/- buttons beside the line, typing in a received quantity, or pressing the copy button to copy in the ordered quantity. Items with UPC codes can be received by scanning the UPC in the “Find Product” box in the middle-left of the screen – click red X in this field after scanning all items to bring up the entire receiving document again. Use the “Add Purchase Orders” button to add additional purchase orders into this receiving document.
When the shipment has been entirely received, click the green “Complete” button in the top left corner to mark the purchase invoice as received in Paradigm and complete the receiving process for that order in Fulfillment Pro. Click the “Camera” button to take a picture of the items received. These images will be attached to the purchase invoice.
Special Order Items
In the case of receiving an item for a special order that is linked to a sales order in Paradigm, the receiving list will provide an option to print out a label for that item as well as record where it has been staged (provided this
setting
is turned on for the current login).
Setting “Staging Areas” during Receiving can be helpful if the item is a Special Order and you do not have a regular spot to put it. Once enabled in
User Settings
, you can assign “Staging Areas” for those items in the “Receiving” window.
Order Transfers
If enabled in the
User Settings
, the option to set staging areas when receiving will also prompt for order transfers to record where those items were staged.
Info Label
If there is an item that is not linked to a sales order, you can also print an “Info” label by enabling it in
User Settings
A small “i” info icon will appear, informing you that this is only an info label. This can be helpful if the item received needs a label, but is not linked to a sales order.

#### Fulfillment Pro: Company Set Up

Fulfillment Pro: Company Set Up – Paradigm ERP by Paragon – Documentation
Home
Fulfillment Pro
Fulfillment Pro: Company Set Up
This FAQ will go over the company level
Fulfillment Pro
set up settings.
Set Up > Fulfillment
Hide Standard Lengths –
If a non-linear item has a length, don’t show it. If not enabled, show all available lengths.
Always Show UOM –
Always show the
unit of measure
Show Pull List Weights By Order –
In the pull list show entire order weight. If not enabled, show the weight of the items in the selected locations.
Show Truck Name in Pull List –
Show truck name for
trips
in
pull list
Show Driver Name in Pull List –
Show driver name for
trips
in
pull list
Replace Salesperson with Trip ID + Stop Order –
In the
pull list
show Trip ID + Stop Order instead of salesperson.
Show Order Manufacture status
In the
pull list
, show a check on orders that have all items manufactured.
Show Double Pull Warning
In the order details, show a warning if the item is at risk to be double pulled.
Move Items to new Pick Ticket
When you print a second pick ticket, items for the selected location(s) will be moved from any existing pick tickets and put onto the new ticket.
UPC Scanning
Allows scanning UPC codes into pack builder and
shipping list
. (This only works with one order in the shipping list.)
Pick Ticket Barcode (Pull Label)
Shows barcode when printing pick ticket. Barcode is for the pull label ID that the pick ticket represents.
Lot Ticket Barcode (Order Number)
Shows barcode when printing lot ticket. Barcode is for the order number that the lot ticket represents.
Show Measurements in Inches Pick/Lot Ticket
Shows all lengths in inches.
Show Model Drawings for Standard Trims Pick/Lot ticket
Show drawings for standard trims as well as
special trims
Send Back Order Emails
Send email to salesperson when back orders happen.
Show Multi-Order Packing
Show the setting in
Employee preferences
Enable Multi-Order Pack Builder
Split Connex labels
When panel lengths are very small, some companies double them up. This enables handling for it when coming from
Connex
labels.
Mark Staged Lines as Pulled
Automatically mark lines as pulled when they are staged.
Print Barcode Text
Print the barcode text below the barcode on pull/pack labels.
Priority Orders –
Set which orders count as “
Priority Orders
“: No Priority Orders,
Ship Via
Only, or
Ship Via
And Complete – Unpulled
Fulfillment Sign to Agreement
The agreement the customer sees when signing for the order in Fulfillment Pro.
Receiving Billing Correction ID
CC Email all Back Orders
The CC email for all back order emails.
Staging Areas

#### Fulfillment Pro: Quality Control

Fulfillment Pro: Quality Control – Paradigm ERP by Paragon – Documentation
Home
Fulfillment Pro
Fulfillment Pro: Quality Control
This FAQ will go over the Quality Control feature in Fulfillment Pro.
Quality Control Set Up
To set up quality control failure codes and priorities, go to the company website > Set Up > Fulfillment > Quality Control.
Failure Codes –
Failure codes are used to show what type of error caused the quality control to fail.
Priorities –
Priorities can be set on Employees,

#### Fulfillment Pro: Import From Vendor

Fulfillment Pro: Import From Vendor – Paradigm ERP by Paragon – Documentation
Home
Fulfillment Pro
Fulfillment Pro: Import From Vendor
This FAQ will go over how to use the “Import from Vendor” feature in Fulfillment Pro. This can be used to import a file from the vendor to mark what has been received.
Import From Vendor
This button can be found after choosing a vendor in the
Fulfillment Pro receiving
screen.
Choose the file to import and confirm the correct purchase orders are shown, and then click “Import”.
If lots are imported, go to the “Lots” form to confirm and adjust lots as needed and click “Complete” once receiving is complete.
Import Formats
Without Lots
Below is the format and example sheet when lots are not being imported. UPC code and description are optional fields.
Format
Example
With Lots
Below is the format and example sheet when importing lots. UPC code and description are optional fields.
Format
Example

#### Why Is This Order Not Showing In Fulfillment Pro?

Why Is This Order Not Showing In Fulfillment Pro? – Paradigm ERP by Paragon – Documentation
Home
Fulfillment Pro
Why Is This Order Not Showing In Fulfillment Pro?
This FAQ will go over how to find out why an order is not showing in
Fulfillment Pro
Order Not Released
Make sure that the order has been released. Unreleased orders or changes to an order will not be shown in Fulfillment Pro.
Items Set To Show In Fulfillment Pro
Check if the item(s) on the order have the “Show In Fulfillment” check box enabled on the item “Detail” tab.
Header Settings
Check that the header filter settings are correct. See this FAQ for more information on Fulfillment Pro filtering –
Fulfillment Pro: Filtering
Locations [1] –
Be sure the location for the order is selected. Select all locations if the location is not known.
Date [2] –
Filter [3] –
Try changing the filter and review the filter settings. More information on filter settings can be seen here –
Fulfillment Pro: Employee Filters and Settings
Completed Orders –
Completed orders will only be shown if the “Completed” orders check box is set on the filter, and the order is not older than the “Max Completion Age”.
Ship Via –
Check if the ship via on the order is included as a ship via on the selected filter.
Transfers –
Transfers will only be included if that is selected on the current filter.
Show [4] –
Try changing the show option to “All”. More information on the show options can be found here –
Fulfillment Pro: Filtering > Show
Wrong Warehouse Selected
Make sure the correct warehouse is selected. More information on those settings can be found here:
Fulfillment Pro: Browser Settings

#### Fulfillment Pro: Unlocking

Fulfillment Pro: Unlocking – Paradigm ERP by Paragon – Documentation
Home
Fulfillment Pro
Fulfillment Pro: Unlocking
This FAQ will go over the “unlock” feature in Fulfillment Pro.
This will only show if the user has permissions for it, and it allows for lines to be ignored without printing a label for them (in other words, manually mark as completed by clicking “Ignore”), as well as allowing lines that have been printed to be unlocked (by clicking “Unlock”).
If the line is unlocked, it removes all the pulling, packing, and shipping information for that line and marks it as open again.
Clicking the dropdown arrow to the right of the unlock dropdown will display an “Unlock Labels” option, which allows removing just one label from a line that may have several pull labels created for it (a line of 10 qty printed on 5 labels of 2 qty each), which prevents needing to reprint all of the labels for that line.
The “Unlock” button changes, depending if the line has any labels printed for it yet. Special order lines may be marked as “Ignored” when they originally appear in the list, but will be marked as open again automatically when the PO for that line is received in Paradigm (as long as the PO is linked to the order).

#### Fulfillment Pro: Pulled By Salesperson

Fulfillment Pro: Pulled By Salesperson – Paradigm ERP by Paragon – Documentation
Home
Fulfillment Pro
Fulfillment Pro: Pulled By Salesperson
This FAQ will go over the “Pulled by Salesperson” feature. An example of when this feature would be used is if a customer wants to purchase the products in their hand or the salesperson goes and pulls the product from the warehouse and the items therefore don’t need to be gathered from the warehouse via Fulfillment Pro.
Marking Lines as Pulled by Salesperson
The “Pulled by Salesperson” column can be checked on the sales order to mark the line as being gathered by the salesperson. (Learn how to add columns here:
Column Chooser
). Items will also be marked as “Pulled by Salesperson” when using the “Scan Items” form.
Lines that are marked as “Pulled by Salesperson” will be automatically marked as “Ignored” in Fulfillment Pro when the order is released:
Finally, when converting the order to an invoice, the salesperson will be prompted to confirm the product has been pulled. Clicking “Yes” will convert the order to an invoice like normal, clicking “No” will mark the lines as not pulled by salesperson and then convert the order to an invoice.
Inventory Default
Items can be set to have “Pulled by salesperson” selected by default, in the detail tab of the product. Select this for items that are typically gathered by the salesperson.
Show In Fulfillment or Pulled by Salesperson?
When to use the “Pulled by Salesperson” setting
If the product is normally pulled by a salesperson (store items)
When to use the “Show in Fulfillment” setting
If the product is normally pulled by yard workers (lumber, doors, trim, panel, etc)
When neither settings will be applicable
If the product is
never
pulled by the yard workers or sales person (samples, freight charges, fees, etc.)

#### Fulfillment Pro: Keyboard Shortcuts

Fulfillment Pro: Keyboard Shortcuts – Paradigm ERP by Paragon – Documentation
Home
Fulfillment Pro
Fulfillment Pro: Keyboard Shortcuts
This FAQ will go over the keyboard shortcuts in Fulfillment Pro.
ALT+x: Will close all screens in the pull list
ALT+f: Pops up a search bar in the pull list.
ALT+s: Opens the shipping list. If user is in the pull list, opens the current order.
ALT+p: Opens the pack builder. If user is in the pull list, opens the current order.
ALT+r: Opens the restage screen while closing other screens.
ALT+l: Lookup. If user in in pull list, pack builder, or the shipping list the shortcut will open current order (only opens first if multiple orders are open in pack/shipping)
ALT+u: Closes any screen open and puts cursor in the unload box. Note that user has to have the “Ask Name” setting disabled.

#### Fulfillment Pro: Popup Number Pad

Fulfillment Pro: Popup Number Pad – Paradigm ERP by Paragon – Documentation
Home
Fulfillment Pro
Fulfillment Pro: Popup Number Pad
This FAQ will go over how to enable and use the Fulfillment number pad. This makes typing quicker and easier on tablets and other touchscreen devices.
To enable this, go to the
browser settings
and check the box for “Popup Number pad:”.
Now when a number field is selected, this number pad will appear.

#### Fulfillment Pro: Dashboard

Fulfillment Pro: Dashboard – Paradigm ERP by Paragon – Documentation
Home
Fulfillment Pro
Fulfillment Pro: Dashboard
Depending on the user settings, the first screen as user will see when opening Fulfillment Pro will be the dashboard page. If it doesn’t auto-open, there is a button at the top of the pull list to open it. To set the dashboard to automatically open when logging in to Fulfillment Pro, open the “Settings” button at the top of the pull list and check the option for “Auto Open Dashboard”.
It can also be opened by clicking the button in the header.
Dashboard
The dashboard can contain up to five columns of information, depending on the actions the user has taken in Fulfillment Pro recently. There is a column for pulling, packing, shipping, transferring, and receiving; each of these columns are covered below. Each column pulls data from the last seven calendar days, regardless if the order is completed and removed from the pull list already, which allows employees to look up information on recent orders easily. Note that the progress bars on this form differ from those in the pull list in that the dashboard progress bars only look at items in the selected locations, not the entirety of the order like the pull list.
Recent Pulling
The “Recent Pulling” list shows orders on which the user has pulled at least one product. An order that is not completely pulled at the selected locations will always be filtered above those that are completely pulled. This means if an order is completely pulled, but an addon is added, the order will be filtered to the top of the list again. If more than one order is not completed, the order that has been pulled most recently will be at the top. If an order appearing in the recent pulling list is also included in the current pull list filter, clicking it will open the order in the pull list. If the order is not currently included in the pull list filter, clicking it will open the “Lookup” form for that order.
Recent Shipping
The “Recent Shipping” list shows orders on which the user has shipped at least one product. An order that is not completely shipped at the selected locations will always be filtered above those that are completely shipped. This means if an order is completely shipped, but an addon is added, the order will be filtered to the top of the list again. If more than one order is not completely shipped, the order that has been shipped most recently will be at the top. Clicking an order in the recent shipping list will open the shipping list, filtered to that order.
Recent Packing
The “Recent Packing” list shows orders on which the user has packed at least one product. An order that is not completely packed at the selected locations will always be filtered above those that are completely packed. This means if an order is completely packed, but an addon is added, the order will be filtered to the top of the list again. If more than one order is not completely packed, the order that has been packed most recently will be at the top. Clicking an order in the recent packed list will open the packed list, filtered to that order.
Recent Transferring
The “Recent Transferring” list shows transfers on which the user has received at least one product. An order that is not completely received/unloaded at the selected locations will always be filtered above those that are completely unloaded. This means if a transfer is completely unloaded, but an addon is added, the transfer will be filtered to the top of the list again. If more than one transfer is not completely unloaded, the transfer that has been unloaded most recently will be at the top. Clicking a transfer in the recent transferring list will open the unload list, filtered to that transfer.
Recent Receiving
The “Recent Receiving” list shows POs on which the user has received at least one product. A PO that is not completely received will always be filtered above those that are completely received. If more than one PO is not completely received, the PO that has been received most recently will be at the top. Clicking a PO in the recent receiving list will open the receiving list, filtered to that PO.

#### Fulfillment Pro: Browser Settings

Fulfillment Pro: Browser Settings – Paradigm ERP by Paragon – Documentation
Home
Fulfillment Pro
Fulfillment Pro: Browser Settings
This FAQ will go over the browser settings in Fulfillment Pro. These settings are accessed by clicking the settings button at the top of the list and only apply to the current device.
Settings
Warehouse – Shows orders for the selected warehouse
Simply Qty – Only 1 label will be able to be printed per line at a time. If unchecked, there will be the option of printing multiples of the same line.
Simple Unlock – The drop down option for unlocking certain labels will not be shown.
Popup Number Pad – Shows a pop up number pad instead of the regular keyboard. More information on the number pad can be found here:
Fulfillment Pro: Number Pad
Show PO in Shipping List – Choose whether or not to show customer POs in the shipping list.
Show Entire Trip – If the order is on a trip, show the entire trip. Otherwise, show just the order. (On the shipping list)
Prompt New Order In Shipping List – Prompt before adding a new order to the shipping list. More info on shipping can be found here:
Fulfillment Pro: Shipping
Sort Shipped Items in Chronological Order – Sort shipped items by shipped order, with the last shipped showing first.
Show Lookup by Bundle (For Orders) – If enabled, it will be easy to see bundles, but pull labels will be more difficult to find. If not enabled, pull label headers will stand out more than bundles.
Show Bundle Headers – Show or hide bundle headers in the pull list.
Auto Load Drawings – Load drawings automatically when an order is opened in the pull list.
Auto Open Dashboard – Open the dashboard every time page is loaded.
Print Header From Pack Builder – Enable this to allow printing header labels from pack builder.
Hide Priority Orders Side-Panel – Enabling this keeps the
Priority Orders
panel from appearing.
Print Settings
Use Browser Printing
Use Print Servers – If enabled, the print server selector screen will be shown.
More information on print servers can be found here:
Paradigm Print Servers
Receiving
Create Missing Labels On Receive – When a purchase invoice is completed or received, it will automatically print labels for any lines that are linked to a sales order.

#### Fulfillment Pro: Back Ordering

Fulfillment Pro: Back Ordering – Paradigm ERP by Paragon – Documentation
Home
Fulfillment Pro
Fulfillment Pro: Back Ordering
This FAQ will go over the back ordering feature in Fulfillment Pro.
Back Order
When more of a product is ordered than is available, typically a back order is made for the remaining quantity ordered. Fulfillment Pro has built-in features to make this process easier. By checking the “Enable Back Order” setting in the
employee Fulfillment settings
, that user will be able to input back order quantities for any ordered line. The quantity that they enter to back order will automatically be deducted from the quantity shipped column in Paradigm when the order is converted to an invoice, which will prompt a back order to be made when the invoice is posted.
When the back order option is enabled for a users login, a “Back Order” button will appear under the “Advanced Options” dropdown in the row of action buttons that are displayed after expanding an order from the pull list.
Clicking this option will switch the Lock/Unlock column with a back order column. Enter the quantity to back order for a line and press the “Back Order” button on that line to save that back order quantity. As soon as the button is pressed, the “NumLeft” for that row will be decreased by the quantity that was back ordered.
After specifying all back order amounts, click the “Close Back Order” button which will switch the back order column for the Lock/Unlock column again.
Pull labels cannot be printed for back ordered quantities. Back ordered items will continue to appear in the pack list but will not be able to be added to a pack. Back ordered items will not appear at all in the shipping list.
When a back order is created, a note is added to the order notes specifying what product and quantity was back ordered through Fulfillment Pro. An email can also automatically be sent to the salesperson on the order (contact Paragon Computing Solutions to enable this functionality – it can even send from an email account that is specified). The email will be sent to the first available email address from this list: salesperson on the order, salesperson on the customer, rep on the customer, or company default. The email addresses for the salesperson or rep looks for a Paradigm user with the same default salesperson, and uses the email address from that account.

#### Fulfillment Pro: Lots

Fulfillment Pro: Lots – Paradigm ERP by Paragon – Documentation
Home
Fulfillment Pro
Fulfillment Pro: Lots
Fulfillment Pro has the option to assign/view lots on lot-tracked inventory items. More information on lot-based inventory can be found here:
Lot-Based Inventory (Track Coil Inventory By Coil ID)
From the Pull List, click on an order that includes a lot-tracked product, go to the “Advanced” tab, and click on “Lots” to enter the lot assignment mode.
Click “Show Lots” on a line to bring up the “Inventory Lots” window.
Choose the Lot that you want assigned to the order line and click “Add”, or scan the lot ID if the lot is barcoded. The user can check the box “Deplete Lot” if this transaction is using the last of that lot. If the wrong lot was assigned, click “Remove” to remove it.
You can also assign a different Lot Quantity if you wish. The “Qty. Assigned” and the “Quantity Ordered” must equal. The Qty. Assigned defaults to the Lot Quantity, because usually you are selling the whole lot (coil, etc.). But sometimes the Quantity Assigned and the Quantity Ordered differ. When fulfilling the order, you can enter the correct quantity into “Qty. Assigned”. Then click the “Set Ordered to…” to change the quantity on the order in Paradigm to match the shipped quantity.

#### Fulfillment Pro: Location Claiming

Fulfillment Pro: Location Claiming – Paradigm ERP by Paragon – Documentation
Home
Fulfillment Pro
Fulfillment Pro: Location Claiming
When using Fulfillment Pro and pulling orders line-by-line, it can become difficult to tell if the product for a certain warehouse location is already being gathered by someone else. To help avoid having two people unknowingly working on the order at once, consider checking the “Enable Location Claiming” option in employee
Fulfillment options
If location claiming has been enabled, a section called “Location Claims” will appear above the row of action buttons that are displayed after expanding an order from the pull list. Each warehouse location that is both on the order and included in the filter will appear in this section, along with a “Claim” button. Clicking “Claim” turns that location green and will update all the other pull lists on other devices to show that someone is gathering the product.
Claimed locations will show as claimed for every user, regardless of if they are able to claim locations. Claimed locations can be unclaimed by the user that claimed it or another person.
If location claiming has been enabled on a users login, two additional filter options will appear at the top of the list – “Unclaimed Orders” and “My Claimed”.
“Unclaimed Orders” will show orders where at least one of the locations the user has selected is not claimed. “My Claimed” will show only orders that have been claimed by the selected employee and are not yet completed.

#### Fulfillment Pro: Lookup

Fulfillment Pro: Lookup – Paradigm ERP by Paragon – Documentation
Home
Fulfillment Pro
Fulfillment Pro: Lookup
This FAQ will go over the “Lookup” feature at the bottom of the pull list.
Label splitting
can also be done from here. Lookup information can still be found for completed orders that no longer show in Fulfillment Pro.
Note that scanning a label does not affect the pulling status.

#### Fulfillment Pro: Kiosk Printing

Fulfillment Pro: Kiosk Printing – Paradigm ERP by Paragon – Documentation
Home
Fulfillment Pro
Fulfillment Pro: Kiosk Printing
Using Kiosk Printing in Google Chrome allows the print preview popup to be bypassed by utilizing the “–kiosk-printing” startup command.
To start, create a shortcut to Google Chrome and name it “Fulfillment Pro – Print“.
Right click the short cut and click “Properties”.
Then change the “Target“ to:
“C:\Program Files\Google\Chrome\Application\chrome.exe” –kiosk-printing “
http://[WebServerIP]/Fulfillment/OrderFulfillment.aspx
The “Start in“ value can remain as “C:\Program Files\Google\Chrome\Application”.

#### Fulfillment Pro: Transfers

Fulfillment Pro: Transfers – Paradigm ERP by Paragon – Documentation
Home
Fulfillment Pro
Fulfillment Pro: Transfers
Fulfillment Pro can assist in the process of transferring inventory from one warehouse to another for both regular inventory transfers and transfers for customer orders. Processing transfers through Fulfillment Pro assists with ensuring that the proper items are being transferred, marking the proper quantities of items as transferred, and marking transfers and transfer trips as completed/posted.
To begin, enable the “Transfers” setting in the employee Fulfillment settings and create a filter for that login that has the “Transfers” option selected – this needs to be done for any login that either sends or receives transfers. More information on filtering can be found here:
Fulfillment Pro: Filtering
Transferring Out
The transfer process begins by transferring the product out of the origin warehouse. This process is nearly identical to the process of pulling/packing/shipping a customer order. Pull/pack labels are printed for the items being transferred from the list of transfers in the pull list. These labels are then scanned off in the regular shipping list to make sure that all the requested items are loaded and to tell Fulfillment Pro what items to expect at the destination warehouse. Note that if multiple transfers are assigned to a transfer trip through dispatching, the shipping list will load all of the transfers on that trip to be scanned at once, provided the setting for “Show Entire Trip” is enabled under the “Settings” button in Fulfillment Pro.
One key difference in the transfer out process is that in the pull list for regular inventory transfers, there is an option called “Adjust Qty” in the “Advanced” dropdown in the row of action buttons to adjust the quantity to transfer.
A transfer may be released for 100 of a product, but it is more convenient to send 95 – using the “Adjust Qty” option allows the person transferring out to easily record how much of the product is actually being sent. This is only an option for regular inventory transfers, not transfers for sales orders.
Transferring In
After the transfer has been loaded and scanned out at the origin warehouse, the next step is to transfer the product into the destination warehouse, or “Unload” it. This step will be done by the employee at the destination warehouse that is responsible for unloading the transfer truck.
To unload the transfer and mark it as having arrived at the destination warehouse, click the “Unload” button in the bottom left corner of the pull list.
Scanning the first label of an item on the transfer trip will load the entire list of transferred items on the left side of the screen and scanning those items will move them to the right side of the screen. The Trip ID for the transfer can be scanned as well. The left-hand list only includes items that have been marked as transferred out at the origin warehouse. Scan all the items that have been transferred, and the list on the left should be empty. If the list is not empty after scanning all products, the remaining items should be scrutinized to see if they were transferred or not.
The pull/pack labels that were used to transfer the product out of the origin warehouse and into the destination warehouse can be scanned again into the shipping list of the destination warehouse as the product is loaded for delivery, no need to reprint labels.

#### Fulfillment Pro: Priority Orders

Fulfillment Pro: Priority Orders – Paradigm ERP by Paragon – Documentation
Home
Fulfillment Pro
Fulfillment Pro: Priority Orders
Sometimes, orders need to be pulled right away, which is what the priority order feature facilitates. There are two kinds of order that can be marked as priority orders. The first kind of priority order is one where the customer is here now, has just placed their order and is coming out to the yard/warehouse to load it. The second kind of priority order is one where the order was released as a regular order, not all the lines have been pulled yet, and the order is converted to an invoice — which means the customer is here, paying for it, and will be out to pick it up soon.
Settings
If certain types of priority orders are not desirable, they can be disabled by logging in with the administrator account, clicking the dropdown in the top right corner, and selecting “Setup”. In the “Fulfillment” tab the “Priority Orders” dropdown can be used to determine the exact type of orders that prompt a priority order, including an option to turn priority orders off.
Hide Priority Side Panel
To hide the priority side panel, click on the Fulfillment settings button and check the box beside “Hide Priority Orders side-panel”. More information on the settings in Fulfillment can be found here:
Fulfillment: Pull List Settings
Ship Via
The priority of each ship via is set through Paradigm, in System>Ship Via. Each ship via can have a priority of “Normal”, “Priority”, or “No Priority”. A “Normal” priority ship via will only be marked as a priority order if it is converted to an invoice without having all the product on it pulled (i.e. Customer Pickup), a “Priority” ship via is immediately marked as a priority order upon releasing (i.e. Customer Here Now, Customer Waiting), and a “No Priority” ship via is never marked as a priority order (i.e. Salesman Gathering). More info on that can be found here:
Ship Vias
Dispatching
Orders that are on trips in Dispatching will never get marked as a priority order, which allows the COD orders to be converted to invoices prior to delivery without unnecessarily alerting the yard.
Completed – Unpulled
If an order is completed and unpulled, and the setting shown below is selected in Fulfillment setup, that order will be shown are high priority in Fulfillment.
Fulfillment
When a priority order becomes a priority order, whether by ship via or conversion, the order will, at minimum, appear highlighted in red in the pull list. However, if the user account has the setting for “Enable location claiming” checked, the order will immediately appear in Fulfillment Pro in a special list at each location that needs to gather product for that order, called the priority list. The priority list will open on the left of their screen on the pull list, accompanied by a distinct noise. The priority list takes some room to the left of the screen, while leaving whatever other screens were open on the right side.
Information that appears in the priority list includes the order number, which will show additional detail about the order when clicked. Directly beside the order number is an “Open” button, which will open the priority order in the pull list (this may need to adjust filters, which it will do and notify the user of). Listed below the order number is each warehouse location on that order, along with a “Claim” button. When an employee decides to take responsibility for gathering the product for that order at a warehouse location, he should click the “Claim” button for that warehouse location. This will turn that location green, and immediately update every other priority list that may be open on other devices to show that someone is gathering that product, to avoid having two people working on the order at once. After the last location has been claimed, the priority list will close.
After claiming a location, unreleasing a priority order and releasing it again will retain the location claims to keep the employee pulling the order from being confused.

#### Fulfillment Pro: Advanced Dropdown

Fulfillment Pro: Advanced Dropdown – Paradigm ERP by Paragon – Documentation
Home
Fulfillment Pro
Fulfillment Pro: Advanced Dropdown
This FAQ will go over the different options available in the “Advanced” drop down for an order.
Back Order
More information on this can be found here:
Fulfillment Pro: Back Ordering
Restage
Opens the restage form, more information on that can be found here:
Fulfillment Pro: Staging
Payment Info
Trim Drawings
This controls whether or not trim drawings are to be shown. If “Auto Load Drawings” is enabled, this option will not be shown.
Signature
This will open the signature window, for the customer to sign for the material getting picked up.
Camera
Opens the camera and any pictures taken will be attached to the order in Paradigm. More information on enabling the camera to take pictures through Chrome can be found here:
Enabling Tablet Camera – Google Chrome
Lots
Shows or hides the lot options. More information on that can be found here:
Fulfillment Pro: Lots
Shelf Quantity
Choosing this will display the shelf quantity for the item with the description.

#### Fulfillment Pro: Tracking Progress In Paradigm

Fulfillment Pro: Tracking Progress In Paradigm – Paradigm ERP by Paragon – Documentation
Home
Fulfillment Pro
Fulfillment Pro: Tracking Progress In Paradigm
The pulling, packing, or shipping status of each line in Fulfillment Pro can be viewed in Paradigm. Open the order, go to the “Trips/Pulling” tab, and click “Fulfillment Detail”. Each line on the order will be displayed, along with the back ordered pieces, whether the line has been pulled, packed, or shipped. The most advanced status is shown in the status column on the order, more information on that can be found here:
Row Statuses On Order Detail
By clicking the dropdown in any of the last three columns the detailed information for that step can be viewed. Paradigm contains a column in the order detail that displays who pulled the line.
Additionally, the Fulfillment status for all orders can be seen at once by clicking the “Fulfillment Detail” button in the audit trail header. Some actions not tracked in the Fulfillment detail form may be tracked in the audit trail.

#### Fulfillment Pro: Miscellaneous

Fulfillment Pro: Miscellaneous – Paradigm ERP by Paragon – Documentation
Home
Fulfillment Pro
Fulfillment Pro: Miscellaneous
Miscellaneous Info
If you are using the Production module and printing labels for products you manufacture, those labels can be made to include a scannable barcode that will allow the production label to function as a pull label (it can be scanned to add to a pack, mark as shipped, etc.).
If you are printing labels from your controller for products that are roll-formed, we may be able to configure a barcode to be printed on that label that will allow the label to function as a pull label (it can be scanned to add to a pack, mark as shipped, etc.). Contact Paragon Computing Solutions to see if this is an option with your controller provider (additional charges may apply).
If in the process of moving around on your property, you lose Wi-Fi Connectivity, a red flashing “no-WiFi icon” will appear in the upper left-hand corner of your screen to warn you that your lists may not have updated information. Printing may fail while in this state.
Contact Paragon Computing Solutions for current hardware recommendations on tablets, printers, and scanners. Also contact us to change the design of your pull, pack, or header labels.
Full screen
Click the Fulfillment Pro logo to toggle full screen on and off.
Prevent Items From Showing
For items that should not appear in Fulfillment Pro, such as service charges, uncheck the “Show in Fulfillment” checkbox in the inventory item’s detail tab in Paradigm.
Lock Clearing
To unlock a line, click the “Unlock” button. If there were labels printed already and a line is unlocked, those labels will be void and no longer scannable.
To unlock a specific label from that item, click on the drop down and click “Unlock Labels”.
Then choose a label to unlock by clicking the “Delete Label” button on it.
Lock Clearing In Paradigm
This can also be done in Paradigm, by click the line item option icon on an item that has been pulled.
Click “Clear Locks”.
Then select the check box beside “Shipping Status” and click “Unlock”.
Changing User Settings
When changing settings for a user and trying to test them out as you change them, log into an “Incognito” tab and log into the web admin account there. This will allow for both accounts to be logged in. This makes it easy to verify if the settings are correct.
Fulfillment Detail
To view all the Fulfillment detail on an order, go to the Trips/Pulling tab and select the “Fulfillment Detail” button.
This will display a list with the information from Fulfillment.
Ignore Lines
When a line is ignored, it is basically marking a line as pulled without pulling it. This might be used for products that are only gathered once the customer arrives, so the user might ignore the lines to get it off of the list until they arrive. If a special order line is ignored before it is received, it will automatically be unignored when the PO is received.
Payment Information
Sometimes, an employee will need to check if an order has indeed been paid for before loading the product for the customer. Enable the “Show Payment Status” option in the
login setup
to allow this option.
When the payment info option is enabled for your login, a “Payment Info” button will appear under the “Advanced Options” dropdown in the row of action buttons that are displayed after expanding an order from the pull list.
This form
does not
Prepayments for the order (or original order, in the case of a back order), as well as any payments to a related invoice will count towards the payment percentage.

#### Fulfillment Pro: Packing

Fulfillment Pro: Packing – Paradigm ERP by Paragon – Documentation
Home
Fulfillment Pro
Fulfillment Pro: Packing
This FAQ is going to go over the pack builder in Fulfillment and the different uses that it has. A pack label allows multiple items to be grouped together and have a single label printed that relates to all the items in the pack. Additionally, the pack builder allows for existing pull labels to be scanned to assign items to packs, greatly speeding the process of creating packs.
Opening Pack Builder
There are two main ways to access the pack builder. The first way is to click the “Pack” button in the Fulfillment header, beside the “Settings” button.
After opening the pack builder this way, an existing pull label must be scanned in the “Open Order” field in the top right corner to load the lines from that order into the pack builder.
The second way of opening the pack builder is by clicking the “Pack” button from the row of action buttons that are displayed after expanding an order from the pull list. This method immediately loads the lines from the selected order into the pack builder.
Pack List
The list on the left side of the pack builder shows the items on the order that have not yet been assigned to a pack, and the list on the right shows the packs for the order. Note that the unpacked item list is grouped by label, so a line that had two labels printed will show one line for each label.
If the pack list is filtered, the only packs that will display are packs that have at least one item in the locations the user has selected (all of the items in that pack will then display, even if they are not in the selected locations). Multi-Item labels will be grouped under a light-blue header when added to a pack, as the multi-item label is treated as a singular object.
If a line has not been pulled or packed yet, (and therefore not locked from changes in Paradigm) and the quantity is changed, a warning sign will appear beside the quantity to draw attention to the quantity to make sure that the proper quantity has been pulled. A slightly different warning will show if the line was added to the order after the order was released.
The “Description” will also show the shelf where the items are stored if the optional
shelf-builder tool
is being used. Please contact Paragon if you are interested in this feature.
Packed and Total
When two or more lines of the same product ID are on an order, a T: and P: label will show. “P” is the number of that item for the pack and “T” is the total number of that item on the order.
Creating Packs
To create the first pack for an order, either scan a label or click “Add” on an item. Scanning a label that is already assigned to a pack into a different pack will move it from the pack it had been on to the new pack. Scanning all the items out of a pack will delete the pack from the list. Note that prior to doing this, an arrow appears to the left of the “New Pack” text at the bottom of the list of packs on the right, indicating that the products will be added to a new pack.
After entering the first item, a new pack will be added to the top of the list of packs, and the item that is selected will be added to the pack. By continuing to click products or scan labels, the additional items will be added to the same pack (note that the arrow will be pointing to the newly-created pack ID at the top of the list). Creating additional packs can be done by selecting “New Pack” from the bottom of the list and scanning or adding another label. When multiple packs are being used for an order, be sure to select the correct pack from the list before scanning a label.
Packs can be expanded or collapsed by clicking their headers. Items can be removed from a pack by clicking the “Remove” button to the right of the line. All the items in a pack can be moved to the left-hand list at once by using the “Delete Pack” button at the bottom of the pack.
Pack labels can be printed by either expanding a pack and clicking “Print this Pack Only” at the bottom, or by clicking “Print All” at the top of the screen, which will print all the pack labels for that order at once. Packs that have not been assigned a staging area (if staging areas are being used) cannot be printed.
Label Splitting
Information on label splitting can be found here:
Fulfillment Pro: Label Splitting
UPC Scanning
UPC Scanning is available when enabled by an Admin user. By scanning any Item ID or an Alias (UPC, alternative ID) that is linked to the Item ID can be scanned into the “Pack Builder” > “Add Label” field.

#### Fulfillment Pro: Label Splitting

Fulfillment Pro: Label Splitting – Paradigm ERP by Paragon – Documentation
Home
Fulfillment Pro
Fulfillment Pro: Label Splitting
This FAQ will go over label splitting in Fulfillment Pro.
Split Label
The “Split Label” option allows for labels that have already been printed to be split into several labels without needing to “Unlock” the line from the pull list, losing all the original pulling information.
The split label form can be accessed either by clicking the label icon beside a line in the pack builder and selecting “Split Label”.
It can also be found by looking up the order in the “Lookup” form and selecting “Split Label”.
The split label form will show either just the line you selected, if the label selected was a single item label, or all the lines on a multi-item label. Enter a quantity to remove of a certain line, then click “Remove” to mark the specified quantity as unpulled, or “Split Label” to put the specified quantity onto a new label with the same pulling information as the first label.
Splitting a label will give a prompt to print the new label, click “yes” to print out a pull label for the split label. The original label can be reprinted by clicking “Reprint This Label” in the Split Label form.
The new, split label will not be assigned to a pack, even if the original label was. Labels that have been marked as shipped cannot be split.

#### Fulfillment Pro: Staging Areas

Fulfillment Pro: Staging Areas – Paradigm ERP by Paragon – Documentation
Home
Fulfillment Pro
Fulfillment Pro: Staging Areas
This FAQ will go over how to use staging and restaging in Fulfillment. Using staging areas allows pull and pack labels to record exactly where the product is being placed (i.e. the shelf, section of the floor, or bin). This staging area will then show in the pack builder and shipping lists (and optionally on printed paperwork as well) to make gathering product go much faster, as the employee does not have to waste time figuring out where the product has been placed.
Creating Staging Areas
To begin working with staging areas, the list of available staging areas for each warehouse location must be defined. To do this, click the dropdown in the top right corner and select “Setup”.
In the “Fulfillment” tab, scroll down to section titled “Staging Areas”, select the warehouse and warehouse location for which to add staging areas. Next, type the new staging area name in the “Staging Area Name” field and click “Save Staging Area”.
A list will appear under the “Staging Area Name” field that groups the staging areas under their respective staging locations. Use this area to reorder or delete staging areas. Note that staging locations are essentially just a group of staging areas.
To define a staging area for a location that is not a warehouse location (somewhere product is staged for the customer, but not stored), select the location “Other”, define a location name, and then define the staging area name. Staging areas that are used by employees pulling from a different warehouse location should also be configured as “Other” staging locations for ease of use.
Choosing Staging Areas
The most popular option when using staging areas is to enable the restage button in the header, and then scan items to assign them to the staging area.
After creating the staging areas and enabling the “Use Staging Areas” setting in the
Fulfillment settings
for the employee account(s), fields to define the staging area will appear in the pull list and the pack builder in Fulfillment Pro, along with “Restage” buttons. By default, the staging area selector appears in the order header and the location header for an order—selecting a staging area in the order header applies that area to all the products on the order, selecting the area in the location header only sets it for that location. The staging area is not finalized and stored until the label is printed, it may be changed multiple times as the order is pulled. The staging locations available are the warehouse locations selected at the top as well as the generic “Other” locations.
Before printing a pull label, a staging location and staging area will need to be selected. If the user does not select a staging area, and attempts to print a label, the print will fail and ask the user to select a staging area.
Restaging
If the staging area of a label is found to be incorrect, or the product is being moved to a different staging area, the restaging form should be used. Note that once a label has been marked as shipped, it can no longer be restaged.
To view the staging areas of the products on an order, click the “Restage” option under the “Advanced Options” dropdown from the row of action buttons that are displayed after expanding an order from the pull list.
This will display a list of all the lines that have had labels printed (along with the pulling information of that label), a summary of the number of lines at each location, and the lines that have not been printed yet. The staging areas for each line can be changed individually, or all the lines staged at one area can be restaged to another area by using the summary list at the top of the screen.
Labels can also be restaged with a scan of their barcode by using the “Restage” button in the Fulfillment header.
Select the new staging location and area, then scan a label to assign it to that staging area. Selecting a staging area can be achieved by scanning a Staging Area ID barcode that has the following syntax “>STG-[Area cntID]” or for example “>STG-252”. Note that the scan will only work if the location that the staging area is a part of is selected in the location drop down. This can be printed on a barcode and placed in that area to easily choose it. Please contact Paragon for a list of the staging area cntIDs. Utilizing this feature streamlines restaging significantly.
Entire staging areas of items can now be moved to another area through the “Area” tab in the “Restaging” window by selecting the current “Staging Area” and the new “Staging Area”. Then click “Restage All”. All items assigned to the current staging area will be reassigned to the new staging area.
Restaging – Pack Builder
Enabling staging areas also enables a button in the pack builder header to open the restaging form for the order to allow employees to quickly switch between the pack builder and restaging forms in case they find mistakes, or if they want to see where all the products are at once
From here, choose new areas to restage the items at.
Production
Staging locations can be recorded through production by changing a setting on the machine (Settings>Machine list). When a build is completed, they will be prompted to enter the staging area. More information on that can be found here:
Assigning Staging Areas In Production

#### Fulfillment Pro: Enabling Tablet Camera

Fulfillment Pro: Enabling Tablet Camera – Paradigm ERP by Paragon – Documentation
Home
Fulfillment Pro
Fulfillment Pro: Enabling Tablet Camera
This FAQ will go over how to enable the Chrome camera on a tablet. This is needed so that photos can be taken in Fulfillment Pro. The photos that are taken are stored as an attachment on the order in Paradigm.
Start by going to “
chrome://flags
” and searching for “Insecure origins treated as secure”. Then enter the “http://WebServerIP” URL only, not the Fulfillment Pro suffix. For example, if the URL for Fulfillment was “http://192.168.123.123/Fulfillment/OrderFulfillment.aspx”, then enter “http://192.168.123.123”
Next, make sure that Chrome has permissions to access the Camera by going to Settings > Privacy & Security > Site Settings.

---

[← Back to Contents](#table-of-contents---click-to-navigate)

### WORKFLOW 8: DISPATCHING & LOGISTICS {#dispatching-logistics}

[← Back to Contents](#table-of-contents---click-to-navigate)

**Purpose**: Coordinate delivery logistics and optimize shipping

**When You Use This**:
- Planning delivery routes
- Scheduling shipments
- Managing delivery coordination
- Tracking in-transit orders

Source: https://docs.goparagon.com/kb-category/dispatching/

#### Daily Deliveries

Daily Deliveries – Paradigm ERP by Paragon – Documentation
Home
Dispatching
Daily Deliveries
The Daily Deliveries screen displays the orders that need to be delivered and allows for the orders to be assigned to trips.
This screen can be found by going to Dispatching > Daily Deliveries.
Creating Dispatch Filters
Then select the checkboxes beside orders to be placed on a trip and create the trip from the form at the bottom. The order that they are selected in will determine the stop order of that trip when it’s created. If “CTRL” is held while clicking the maps link, it will put in the warehouse address into Google Maps as well as the ship to addresses.
In the Daily Deliveries screen, orders can be individually assigned to a trip using the trip ID dropdown. Select the “<Unassign>” trip to remove the order from all trips.
Order Right-Click Options
Right-clicking on an order from the list will bring up four different options.
Clear Edit Lock – Clears the edit locks for the order. More info on clearing edit locks can be found here:
Edit Locks
View Order in Map – This will open Google Maps in Paradigm and will show the shipping address on the map.
Print Pick List – Prints the pick list.
Daily Deliveries Columns
There are many columns to choose from for this list, so be sure to check out all of the different ones from the column chooser.
Trip ID – Click this drop down to view a list of the available trips, or to assign the order to one.
Driver – The driver for the trip that is assigned to the order. This can be changed by double-clicking the trip from the list on the right and changing the driver. More info on the driver list can be found here:
Driver List
Complete – A status bar that displays how much of the order is pulled/shipped based off of information from Fulfillment. The bar will fill up blue for pulling and green for shipping like the picture below.
Clicking the pencil icon highlighted below will give the user the option to split the order between two trips, which is useful if the order needs to be delivered on more than one truck. Note that splitting the order in this way will cause the order to show up in Daily Deliveries twice, once for each trip (
learn more
).
MC – Manufacturing Complete: Red gears means items need to be manufactured yet, green check mark means that manufacturing is complete, and if it is blank it means that nothing needs to be manufactured. Clicking on the icon in that column will display the list of builds for that order.
PO – PO Received: Green Arrow = Received, Red Arrow = Not Received, White = No PO. Clicking on the icon will display a list of the items on the purchase order.
TR – Transferred: Green = Transferred, Red = Not yet Transferred, White = No transfer is needed. More info on inventory transfers can be found here:
Inventory Transfers
Order Number – Clicking on the order number will open the order. Clicking on the box icon will display a list of the items in the order.
Ship Via
– The ship via assigned to the order.
Order Total – If an exclamation mark is displayed, it means the order is assigned to COD terms (
Payment Terms
) and the order has not been fully prepaid, meaning the driver will need to collect payment.
Max LG – The length of the longest item on the order, that is not a part of the categories specified in the column beside it. So in this case, the longest item that is not in the “Panel” or “Panel Trims” categories. If this is orange, it means that there is an item on the order that is over the max length for that truck or trailer. More info on setting up trucks and trailers can be found here:
Truck List
Trailer List
. There is also the option to exclude some items from the length check, more info on that can be found here:
Length Check Product Exclusion
Panels & Lumber – The length of the longest item from the selected category. This will turn orange if an item in that category is over the max length. Info on setting these up can be found here:
Max Length

#### Samsara Integration

Samsara Integration – Paradigm ERP by Paragon – Documentation
Home
NEW!
Samsara Integration
Home
Add-Ons and Integrations
Samsara Integration
Home
Dispatching
Samsara Integration
This FAQ will go over the Samsara integration with Paradigm and any setup that might need to be done. The
Samsara
Integration allows trips created in Paradigm
Dispatching
to be sent to the Samsara system or driver app. Proof of delivery information, such as pictures or documents collected in the Samsara driver app, are imported into Paradigm and attached to the trip and orders. When a driver departs a stop in Samsara, the stop is marked as complete in Paradigm.
Set Up
To view the Samsara integration settings, go to Company Preferences > Add-Ons.
API Key
Enter the Samsara API Key into the API Key text box.
Enable Extended Logging
The option “Enable Extended Logging” controls whether requests and responses from the Samsara API are logged in the Paradigm Server log file. This can be useful for troubleshooting, but should be disabled if everything is working correctly.
Driver Names
The
Driver names
in Paradigm must be an exact match with the driver names entered in the Samsara driver list.
Usage
Send to Samsara
A dispatch is created in Samsara by clicking the “Send To Samsara” button on the trip info screen. If any changes are made to a trip after it has been sent to Samsara, the dispatch will automatically be re-sent and updated in Samsara. Note that if the Dispatch has already been completed, Samsara will not allow it to be changed.
Samsara requires Latitude and Longitude information for all addresses. If the latitude and longitude cannot be auto determined by the
TomTom
service, it must be manually set on the order, in the ship to address section. When entering coordinates, use either format shown here:
40.689212380759265, -74.04455969155815
40°41’21.2″N 74°02’40.4″W
Clear Dispatch in Samsara
A Dispatch may be removed from Samsara by clicking the “Clear From Samsara” button on the trip info screen. Note that if the Dispatch has already been completed, Samsara will not allow it to be cleared.
Proof of Delivery Photos and Signatures
Photos and signatures recorded in the Samsara app will be imported as attachments on the trip and order. It will also mark stops as complete after the stop enters the Samsara “Departed” status. If enabled, Delivery Notifications will be triggered when the stops are marked as completed.

#### Trip Info

Trip Info – Paradigm ERP by Paragon – Documentation
Home
Dispatching
Trip Info
The trip info pop up contains all of the information about the trip. It allows the user to change trip header information, assign stop order, customize freight, print paperwork, and more.
Trip Info Header Buttons
Trips can be marked as complete by clicking the check mark in the top right. This will remove the trip from the
Truck Summary
in
Daily Deliveries
The “Convert Orders” button will convert all of the orders on the trip into invoices, then load the created invoices in the invoice list.
The “Paperwork” button will print out the driver paperwork for that trip and mark the orders as “Driver Out”, just like printing from the right-click menu in the truck summary.
Custom reports can be set up in the reports dropdown as well, like cover sheets or bills of lading. Select the report, and click the preview or print icons beside the report selector.
Stop Order Rows
From this section, the stop order can be changed by dragging the orders by using the highlighted button below or by typing in the stop order number in the “Stop Order” column. Another option is to use the “Optimize Stop Order” button, which will automatically sort them in the most efficient order using the
TomTom integration
. “View Route” will open the entire route in Google Maps.
Clicking on the Google Maps icon will search for the address on that stop in Google Maps.
The ETA Date and Time can be filled out or it can be marked as complete here. The trip can also be marked as complete by the driver from
Driver App
. Paradigm saves the timestamp of when the stop was marked complete, and shows that in the Date Completed column. This timestamp also can be seen on the Sales Order, by viewing the “Trips / Pulling” tab in the Order page header.
Order Row Options
Clicking on the box icon will display the list of items in the order.
Clicking on the manufacturing complete icon will display the list of builds for the order. Similar functionality is available for the “PO” (Purchase Orders) and “TR” (Transfers) columns.
Clicking on the paper clip icon will display the attachments for the order.
Right clicking on the row will allow the user to change the ship info for the order.
Calculating Distance and Freight Charges
Freight charges can be changed by expanding the stop by clicking the expansion icon, and then entering the amount in the ‘Freight’ column. Clicking the lock icon will prevent the freight charge from being changed. The distance and time for the trip in the top right corner can be manually entered, or can be generated by TomTom by clicking the refresh button. Learn more about calculating freight and distance here:
Mileage Calculator/Trip Optimizer
Trip Details Tab
The trip details tab allows for notes, truck info, and weight estimates to be added. These fields are for display and reporting purposes as need be.
The permit type drop down can be used to specify whether or not the trip needs or has permits.

#### Address List

Address List – Paradigm ERP by Paragon – Documentation
Home
Dispatching
Address List
This FAQ will go over the Address List in Paradigm.
Address List
The address list can be found by going to
Dispatching
> Address List. This list will only be shown if
address validation
is enabled.
Addresses can be added to the list with notes [1], and can also be marked as ‘Do Not Ship’ [2] (blacklist) .
Notes
If an address or county note is added, a notes icon will be shown. When there is a note for the address and county, two note icons will be shown.
When hovering over this icon, the message will be shown.
Address notes will be shown on the “Ship To” pop up, where they can be edited as well.
This will be shown in the “Driver Message and Notes” screen from
Daily Deliveries
, as well as in the
Driver App
County Notes
To add a county note, go to
Zip Codes
> Counties and enter the note.
Do Not Ship
If the address is marked as “Do Not Ship” and an order is released with that ship to address, the following message with appear:
Shipping to this address has been disable: [Address]
Disallow Shipping From Ship To Pop Up
Shipping can be disallowed to a certain address from the order “Ship To” pop up as well.

#### Fulfillment Pro: Trip Is Full

Fulfillment Pro: Trip Is Full – Paradigm ERP by Paragon – Documentation
Home
Dispatching
Fulfillment Pro: Trip Is Full
This FAQ will cover the “Trip is Full” feature of Fulfillment Pro.
Back orders
or
splitting the order
are the preferred ways of handling partial shipments. Information on partial invoicing can be found here:
Partial Invoices
Company Preferences
The first step to enable this feature is to go to System >
Company Preferences
> Order Conversion > and check “Create multiple invoices for an order as items are shipped via Fulfillment Pro”.
Show Trip Full Button
To enable this feature in Fulfillment Pro, the “Show Trip Full button” box must be checked. This can be done from the employee Fulfillment Pro settings, see this FAQ for more information:
Fulfillment Pro: Employee Filters and Settings
Fulfillment Pro
When enabled, the “Mark Trip Full” button will be shown on the
shipping list
Once the trip is full, click the “Mark Trip Full” button. When the trip is marked as full, remaining products will be set to go on the fallback trip. If a fallback trip is not set, the order will still get split but the remaining products will be marked as “No Trip”. Once a trip is marked as full, it cannot be undone. Ensure everything is correct before proceeding.
Fallback Trip
To set up a fallback trip, go to Dispatching >
Daily Deliveries
Truck Summary
Trip Info
> Fallback Trip.
Invoicing A Trip
Trip Info Screen
To invoice a trip from the trip info screen, click the “Convert Orders” button. This button will convert all of the orders on the trip into invoices, then load the created invoices in the invoice list.
Order Screen
When invoicing from the order screen and the order has been split across multiple trips, the following message will appear:
Invoice Items
Invoice By Trip
– Creates an invoice for each trip.
Remaining Items
– Invoices all items on a single invoice.

#### Multiple Orders

Multiple Orders – Paradigm ERP by Paragon – Documentation
Home
Dispatching
Multiple Orders
This will go over over the “Multiple Orders” pop up in
dispatching
Enable The Multiple Orders Prompt
To enable the prompt, go to Dispatching > Options > check the box for “Prompt on orders to the same location”. More information on dispatching settings can be found here:
Dispatching Settings
Multiple Orders
If an order is selected in
Daily Deliveries
or gets assigned to a trip and there are other orders at the same address, the following prompt will appear:
Multiple Orders – There are multiple orders going to the same location. Would you like to select them?
Yes – Assigns the order and any other orders at the same address to the selected trip.
No – Assigns the order to the trip, and the other orders at the same address remain on their existing trip.
Cancel – No change is made and the order remains on it’s current trip.

#### Dispatching Settings

Dispatching Settings – Paradigm ERP by Paragon – Documentation
Home
Dispatching
Dispatching Settings
This FAQ will go over the dispatching settings in Paradigm.
Dispatching settings can be found by going to Dispatching > Dispatching Settings
General
Max Length

#### Dispatching Map

Dispatching Map – Paradigm ERP by Paragon – Documentation
Home
Dispatching
Dispatching Map
This FAQ will go over the Dispatching Map in Paradigm’s Daily Deliveries and Daily Pickups lists. This feature requires the “Address Validation” feature from the
TomTom
integration to be enabled.
If the order does not have a valid address, the pins will not show on the map and this error will show when opening the map:
Using The Map
The button to show all orders can be found in the header.
Orders that have been selected in the daily delivery list will show blue. Unselected orders will be shown as black pins.
The map can be shown for just the selected orders by clicking the maps button in the trip creator.
Hover over the pins for the address information popup. All the orders going to that destination will be grouped together.
Click the folder icon to open the order(s).
Click the select/unselect button to select or unselect the order(s) in the daily delivery list.

#### Transfer Lead Times

Transfer Lead Times – Paradigm ERP by Paragon – Documentation
Home
Dispatching
Transfer Lead Times
This FAQ will go over how to enable and use the edit transfer lead times feature. More information on transfers on an order can be found here:
Transfers For An Order
Default Transfer Lead Times
To set up default transfer lead days, go to Company Preferences > Production Lead Times > Transfer Lead Times. Then enter in the transfer lead days for the different
warehouse
order transfer
will occur.
More information on lead days can be found here:
Production Lead Days
To edit the default lead days for a transfer, click the pencil button.
Enabling Edit Transfer Lead Times
To enable this, go to System > Company Preferences > Sales > Days/View Related
Using Edit Transfer Lead Times
To edit the transfer lead days on an order, click the “Transfer Dates” button.
Custom Transfer Dates Warning

#### Trip History

Trip History – Paradigm ERP by Paragon – Documentation
Home
Dispatching
Trip History
This FAQ will go over the trip history form in Dispatching.
Trip history can be found by going to Dispatching > Trip History
To find a specific trip, pick a date range or search for an order number. Double clicking on a trip will open the
trip info
screen.

#### Delivery Notification

Delivery Notification – Paradigm ERP by Paragon – Documentation
Home
Dispatching
Delivery Notification
The Paradigm Delivery Confirmation feature allows sending a confirmation email or SMS when a trip stop is marked as complete in the Paradigm Mobile app or manually sent from the
trip info
screen. This can be used with the Paradigm Mobile App add-on; more info on that can be found here:
Paradigm Mobile – Mobile Driver App Add-On
Set Up
Go to System > Company Preferences > Setup > Dispatching and enable the Delivery Confirmation Feature by selecting “Email All Customers” or “Email Only Specific Customers”.
When “Email All Customers” is selected, all customers will receive delivery confirmations unless they are specifically set up to not receive confirmation emails.
When “Email Only Specific Customers” is selected, only customers that are set up to receive delivery confirmations will receive the emails.
When an email notification is automatically sent, it will send from the email account configured for the “ParadigmAPI” user.
Select the Confirmation Email Template to tell Paradigm which email template to use when sending the confirmation email. These emails will also include the stop pictures that are taken. (Information on how to set up an email template can be found
here
If an email to SMS gateway such as ClickSend is available, delivery confirmation text messages can be sent to customers. The Text Message template can be set up in the Confirmation SMS Template field.
When a stop is completed in the Paradigm Mobile app, the email or SMS confirmation will be sent. More information on that can be found here:
Set Up Emailing From Paradigm
Customer Set Up
A confirmation email will be sent to the Ship To email address on an order if it exists. To send confirmations to other email addresses, add a customer attribute on the customer’s detail tab named “
DeliveryConfirmationAddress
” and in the value field, specify one or more email addresses. If using multiple email addresses, separate the email addresses with semi colons. The message will be sent to the additional email addresses even if the order does not contain a Ship To Email address.
If the “Send Email Delivery Confirmations” system setting is set to “Email All Customers”, any customer that has an order with a Ship To email address or has addresses assigned via the “
DeliveryConfirmationAddress
” attribute will receive confirmation emails. A customer can be “opted out” from receiving confirmation emails by adding the “
NeverSendConfirmationEmail
” customer attribute to the customer.
If the “Send Email Delivery Confirmations” system setting is set to “Email Only Specific Customers”, by default no delivery confirmations will be sent. To enable specific customers to receive the confirmations, add the “
AlwaysSendConfirmationEmail
” attribute to the customer.
If an email to SMS gateway is in use, SMS formatted delivery confirmation messages can be sent by adding the “
SMSSendDeliveryConfirmation
” attribute to a customer, and setting the SMS address in the value field. Note that SMS messages will not be sent if the delivery confirmations are not enabled for the customer. Multiple SMS addresses can be specified by entering a semi colon separated values.
Usage
Paradigm Mobile
Delivery email or SMS confirmations are sent when a “Delivery Stop” is marked complete in the Paradigm Mobile app.
Paradigm Dispatch
Delivery email or SMS confirmations can be manually triggered from the Paradigm Dispatch Trip screen after the stop is marked complete using the icon in the Complete column.

#### Outside Deliveries

Outside Deliveries – Paradigm ERP by Paragon – Documentation
Home
Dispatching
Outside Deliveries
Outside deliveries can be used to create shipments that show up in Daily Deliveries, without needing to create a sales orders for them. For example, this can be used when hauling products for someone else.
This screen can be found by going to Dispatching > Outside Deliveries
Creating A New Outside Delivery
Click the “New Outside Delivery” button to create a new one.
Clicking the arrow beside the bill to address will allow the user to copy the address to the ship from or the ship to address field.
Once the outside delivery has been created, it will appear on the
Daily Deliveries
screen, highlighted in yellow.
Charges
Charges can be added by selecting one from the “Add Charge” drop down. The total at the bottom will be the freight plus all of the charges together.
Creating Charges
If a new charge needs to be created, it can be done by going to Dispatching > Options > Charge Templates. From there, click the green plus to add a new one.

#### Dispatching: Product Exclusions from the Length Check

Dispatching: Product Exclusions from the Length Check – Paradigm ERP by Paragon – Documentation
Home
Dispatching
Dispatching: Product Exclusions from the Length Check
In Dispatching, there is the option to exclude items from the length check for a truck or trailer. This is commonly used for items that are on rolls, such as insulation. A thirty foot roll of it will easily fit on a trailer, but if the trailer is only fifteen feet long, Paradigm would flag that as being too long. This option allows this to be avoided.
To create length check exclusions, go to Dispatching > Options and click the “Add” button. Then start typing in the product ID and add it to the list. The listed items will be ignored when calculating the max length column values in Dispatching.

#### Truck Summary

Truck Summary – Paradigm ERP by Paragon – Documentation
Home
Dispatching
Truck Summary
This list shows the available trips for the selected day in the
Daily Deliveries
screen. These can be created in batches ahead of time via the trips list, more info on that can be found here:
Trips List
The truck summary shows the info for the trips, as well as allowing the trip statuses to be edited. If a trip is highlighted yellow, it means the trip has no orders assigned to it. More info on trip statuses can be found here:
Trip Statuses
. Double clicking on a trip will open the trip info, more about that can be found here:
Trip Info
Note that the truck summary can be moved around or unpinned, depending on the desired screen layout. It can even be dragged to a different screen, if the user preference to allow this is enabled in Dispatching>Options>General.
If unpinned, it will collapse to the side of the screen, and will reappear if the mouse hovers over the highlighted area.
Checkbox Filters
There are also checkbox filters at the top of the list.
Show Completed – If this is checked, completed trips will be shown on the list in gray.
All Warehouses – If this is checked, trips from all warehouses will be shown, instead of just trips for the selected warehouse.
Unassigned – If this is checked, only the trips that haven’t been assigned to an order will be displayed.
Right-Click Options
Right-clicking on a trip will bring up some more options.
Delete Trip – Deletes the trip. Any orders assigned to that trip will be unassigned.
View Orders – Opens a list of all the orders assigned to that trip.
Trip Options – Opens the trip info screen. More info on that can be found here:
Trip Info
View Map – Opens the trip in Google Maps.
View Map Roundtrip – Opens the round trip in Google Maps, including the ship-from warehouse address.
Print Driver Paperwork – Prints the driver paperwork for that trip.

#### Trip Statuses

Trip Statuses – Paradigm ERP by Paragon – Documentation
Home
Dispatching
Trip Statuses
Trip statuses are used in Paradigm, Driver App, and Fulfillment Pro. They are used to show the current status of the trip.
Once a trip status has been set, the color for on that row on the list will change in Daily Deliveries on the order list and on the truck summary list.
This will also be shown in the header on the
Trip Info
screen.
In Fulfillment Pro, the trip status can be viewed or changed by clicking on the “Trip Details” button.
If that button is not displayed, the “Allow Editing Trip Details” setting will need to be enabled for that user in the
Fulfillment settings
In the Driver App, it can be changed by tapping on the status by the trip ID and selecting one from the list.
Creating Trip Statuses
Trips statuses can be created by going to Dispatching > Options > Trip Statuses and clicking the “Add” button.
Enter the name, description, sort ID, and choose the color it will be highlighted in on the lists.

#### Why does the same order show up on Multiple Lines in Daily Deliveries?

Why does the same order show up on Multiple Lines in Daily Deliveries? – Paradigm ERP by Paragon – Documentation
Home
Dispatching
Why does the same order show up on Multiple Lines in Daily Deliveries?
There are a couple reasons as to why this happens. The first way is when an order is already released and on a trip, and a salesperson adds an item to that order. It will then show up on the order like this:
The new lines are not automatically placed on the same trip, since the new items may not fit on the truck. Instead, the new lines show up as unassigned in Daily Deliveries so the dispatcher can handle them correctly.
To combine the orders back into one line, simply add them both to the same trip ID. This can be done by selecting the same trip ID on the newly released portion of the order that is not assigned to a trip.
Another reason an order may show twice in the list is if the order is split into more than one trip in Dispatching.
More info on the Daily Deliveries screen can be found in this FAQ:
Daily Deliveries

#### Daily Pickups

Daily Pickups – Paradigm ERP by Paragon – Documentation
Home
Dispatching
Daily Pickups
The Daily Pickups screen displays the
released
purchase orders that need picked up and allows trips to be created for them. Pickups and deliveries from the
Daily Deliveries
cannot be combined on the same trips.
This screen can be found by going to Dispatching > Daily Pickups.
Displaying POs in Daily Pickups
In order for a PO to show up in this screen, it must have a ship via that’s type is set to “AP” and the “Show in Dispatching (AP) Only” option is checked. More info on ship vias can be found here:
Ship Vias
Filter down the list to find the purchase orders that need to be added to a trip. Purchase orders can be filtered by ship to warehouse ID or by selecting the “Show Filter Row” check box and typing in the columns.
Then select the checkboxes beside purchase orders to be placed on a trip and create the trip from the form at the bottom. The order that they are selected in will determine the stop order of that trip when it’s created. If “CTRL” is held while clicking the maps link, it will put in the warehouse address into Google Maps as well as the pick up address.
Purchase orders can also be individually assigned to a trip using the trip ID dropdown. Select the “<Unassign>” trip to remove the order from all trips.
Clicking on the purchase order number will open it, clicking on the box will show a list of all the items on the PO.
Truck Summary
This list shows the available trucks and drivers for the selected day. More info on the truck summary list can be found here:
Truck Summary

#### Max Length Categories

20 S Reamstown Rd
Stevens, PA 17578
866-971-0940

#### Trailer List

Trailer List – Paradigm ERP by Paragon – Documentation
Home
Dispatching
Trailer List
The trailer list is the list of trailers to choose from in Dispatching, which can be viewed by going to Dispatching > Trailer List.
To create a new trailer, click the plus button on the right and fill in the trailer information.
Trailer Name – Name of the trailer.
Max Length Ft – Maximum length a product can be on an order for this trailer.
Max Weight – Total weight from the orders assigned to this trailer cannot exceed this number.
Discontinued – Mark the trailer as discontinued.

#### Driver List

Driver List – Paradigm ERP by Paragon – Documentation
Home
Dispatching
Driver List
The driver list is the list of drivers to choose from in Dispatching, which can be viewed by going to Dispatching > Driver List.
To create a new driver, click the plus button on the right and fill in the driver information.
Name – Driver’s name.
Default Warehouse – For multi-warehouse companies, the location out of which the driver typically operates. Leave blank to have the driver available at all warehouses.
Default Truck – When the driver is selected, the truck selected here will be added by default.
Inactive – Mark the drive as inactive.
Phone Number – Driver’s phone number. Optionally used on printed paperwork, if wanted.

#### Truck List

Truck List – Paradigm ERP by Paragon – Documentation
Home
Dispatching
Truck List
The truck list is the list of trucks to choose from in Dispatching, which can be viewed by going to Dispatching > Truck List.
Creating Trucks
To create new trucks, click on the “Truck List” button in the header.
From there, click the plus button on the right and fill in the truck information. If this truck is to be used in the batch trip creator on the trips list, a default driver must be selected as well. More info on the trips list can be found here:
Trips List
Truck Name – Name of the truck.
Max Length – Maximum length a product can be on an order for this truck.
Max Weight – Total weight from the orders assigned to this truck cannot exceed this number.
Default Driver – Driver assigned to the truck by default.
Default Trailer – Trailer assigned to the truck by default.
Default Trip Time – Total default time (in hours) the trip should be set for.
Select by Default – Choose if the truck should be selected when the trips list is opened.
Discontinued – Mark the truck as discontinued.

#### Trips List

Trips List – Paradigm ERP by Paragon – Documentation
Home
Dispatching
Trips List
The ‘Trips’ menu item is used to see all trips, completed or uncompleted, for a selected day. The main use for this is creating trips for drivers in advance, so that if a driver is unavailable they can be removed from the list. Then the dispatcher to go through and see what drivers they have available for a given day. Once a trip is created it will show up in the “Daily Deliveries” tab on the right side and will appear yellow, since it doesn’t have order assigned to it yet.
Batch Creating Trips
To view the Trips list, go to Dispatching > Trips.
From this screen, drivers and trucks can be selected and added to a trip. To create a trip, first select the date to create the trip for from the trip date selector. Then select saved trip presets in the batch trip creator and click the “Create Trips” button as highlighted below, or enter them manually in the list at the bottom. The saved truck presets are trucks that are saved with a default driver from the trucks list. More info on creating those can be found here:
Truck List
Marking a Trip as Uncompleted
A trip that’s been completed in the “Daily Deliveries” screen can be marked as uncompleted here. Simply unselect the check box in the “Done” column to mark the trip as uncompleted.

#### Ship Vias

Ship Vias – Paradigm ERP by Paragon – Documentation
Home
Dispatching
Ship Vias
Ship vias in Paradigm determine how an order will be shipped. The list of ship vias can be viewed by going to System > Company Preferences drop down > Ship Vias.
Creating Ship Vias
From this screen existing ship vias can be edited, or new ones can be entered. When adding a ship via,
Dispatching filters
and
Fulfillment Pro filters
will need to be adjusted to include the new ship via, if being used. Also note, that editing a ship via that is assigned to transactions already does not update the ship via on the transactions. It is best to have Paragon assist with changes to ship vias that have been used already.
Type – Choose whether it is an AR or AP ship via. AR ship vias will show up in quotes, orders, invoices and on customers. AP ship vias will show up in RFQs, POs, purchase invoices, and vendors.
Ship Via – The name of the ship via. The only special characters that can be included are the following:
& + / . _ –
Sort – The order in which it will appear on the list of ship vias.
Fulfillment Priority – The priority in Fulfillment Pro. Choose from Never Priority, Normal, or Priority.
Show in Dispatching? (AP Only) – Whether or not to show POs assigned to this ship via the Dispatching Daily Pickups screen. Only applies to AP ship vias.
Ship-To Address Required – Select whether or not to require a ship-to address. More info on that can be found here:
Require Ship To Addresses
Request Freight – Select to request freight charge amount. If the user doesn’t fill in the freight info, this warning will appear.
Show on Web – Select whether or not this ship via option should display on the customer portal order screen.
Tax Code & Entity Use Code – These can be set if the
AvaTax
integration is set up.
Put Mfg On Hold – Used only for On Hold ship vias. This will put all the items it can on hold. Lines that have been produced or locked already aren’t affected. This is used in cases when an order needs to be put on hold, but unreleasing the order isn’t available.
Auto Freight – Automatically calculate freight. More info can be found in this FAQ:
Auto Freight
Pickup Only – This Ship Via is a “Customer Pickup” ship via. When a ship via with this setting enabled is selected on an order, the ship to information is removed from the order automatically. This setting is mostly utilized with AvaTax and Ship To ZIP Sales Tax.
Direct-Ship – This Ship Via is a “Direct Ship to Customer” ship via. This is used in conjunction with the
Special Order Purchasing Screen
to ensure direct-ship orders are converted to their own POs to preserve ship-to information.
Once that has been filled out, save the list and then close and reopen Paradigm to get the new ship vias to display on the lists.
Using a Ship Via on an Order
Ship vias get applied on to order when they’re released. It can get set in the drop down highlighted below, or if left blank, a pop up asking for a ship via will appear once the order is released.
This pop up can be enabled or disabled by going to System > Company Preferences > Sales > Limits
Ship Via Defaults
Below are the different places that ship via defaults can be set.
Company Preferences
User Preferences
Customer Detail

#### Create Dispatching Filters

Create Dispatching Filters – Paradigm ERP by Paragon – Documentation
Home
Dispatching
Create Dispatching Filters
This FAQ will go over how to create dispatching filters.
First, open “
Daily Deliveries
” and click the edit button next to the filter drop-down.
Click “Add”
Date Options
Filter on Trip Date – Checking this will make the filter adhere to the Trip Date in the header of the Daily Deliveries list. Leaving this unchecked will allow the filter to display orders from any date that meet the other criteria of the filter.
Is Default Filter – Checking this will set the filter to be the default filter that the Daily Deliveries list uses when opening.
Add/Subtract Days – Checking this allows a user to have the filter include a range of days, rather than just one day.
Day Type – This option allows a user to choose what type of offset they prefer.
Note:
Filter on Trip Date must be selected for this to work.
Finally, choose which
ship via’s
the filter should display and click save.
Note:
Selecting no ship vias will result in no orders showing in the list.
Filter Row
Another way to filter dispatching lists is by selecting the “Show Filter Row” option. This will display a blank row that will allow the user to type in values to filter each column.

## AI ASSISTANT GUIDELINES

**Your Role**: You are Western Intelligence, designed to assist with:
1. **Product Information**: Provide detailed specs, availability, and recommendations
2. **Technical Support**: Answer questions about installation, maintenance, and best practices
3. **Customer Service**: Help resolve customer inquiries professionally and efficiently
4. **Problem Solving**: Transform complex challenges into simple, actionable solutions
5. **Relationship Building**: Focus on long-term solutions that build customer loyalty
6. **Operational Support**: Assist with Paradigm system operations, accounting procedures, and daily workflows
8. **Policy Guidance**: Provide information on company policies, procedures, and standards

**Communication Style**:
- Professional, courteous, and helpful
- Clear and concise
- Solution-oriented
- Proactive in offering additional information
- Transparent and truthful

**Knowledge Retrieval**:
- Cross-reference product specifications
- Link related products and services
- Provide comprehensive answers
- Suggest complementary solutions
- Reference technical guides when appropriate
- Access operational procedures for workflow support
- Retrieve customer account information when needed
- Reference company policies and standards

**Remember**: You're built for the builder. Every interaction should reflect Western Building Supply's commitment to excellence, simplicity, and impactful solutions. You have access to comprehensive operational knowledge including:
- Complete product catalog and technical specifications
- Paradigm system procedures and troubleshooting
- Accounting workflows and financial procedures
- Customer account profiles and history
- Company policies and communication standards
- Daily operational procedures and best practices

---

[← Back to Contents](#table-of-contents---click-to-navigate)

### WORKFLOW 9: SYSTEM ADMINISTRATION & SETUP {#system-administration-setup}

[← Back to Contents](#table-of-contents---click-to-navigate)

**Purpose**: Configure Paradigm, manage users, and maintain system

**When You Use This**:
- Creating user accounts
- Setting system preferences
- Configuring reports
- Managing security and permissions

Source: https://docs.goparagon.com/kb-category/administration-and-setup/

#### Credit Card Processing Set Up

Credit Card Processing Set Up – Paradigm ERP by Paragon – Documentation
Home
Administration and Setup
Credit Card Processing Set Up
This FAQ will go over setting up credit card processing for EBizCharge or other credit card processors.
The configuration is done in two parts:
Company-wide configuration
Per-workstation configuration (Local Settings)
Company-wide configuration is a once-and-done thing, but each workstation that needs to run credit card payments has to have it enabled in Local Settings.
Some processors may need company-wide configuration before setting up the workstation configuration, so always do Company-wide Configuration for the processor before Per-Workstation Configuration.
Available Processors
External Credit Card Processing
– when receiving a credit card payment, the payment is treated like a cash payment. There is no interaction without outside services from inside Paradigm.
EBizCharge
– Process payments by manual entry via web browser or by a physical payment terminal, through the internet.
While this article is meant to be generic, this process still remains tightly-coupled to EBizCharge as it’s the only processor currently supported. It is likely subject to change when more processors are implemented.
External Credit Card Processing Set up
Company Wide Set up
Go to System >
Company Preferences
> Payment Processing > Credit Card Processing and set the following:
Processor –
Set to “None”.
Prompt user for authorization code if using external CC processor –
If enabled, this will prompt the user for an authorization code.
Default Workstation Values –
These settings will be used if the workstation does not have the given setting set.
Per-Workstation Configuration
Go to System > Local Settings > Credit Cards. Then select the “External Credit Card Processing” checkbox and the set up is complete. Enabling this disables any other processors/configurations set.
EBizCharge Credit Card Processing Set up
Paradigm ERP has an optional EbizCharge Integration, more info on that can be found here:
EbizCharge Credit Card Processing Integration
Instructions on how to configure EBizCharge on a credit card reader can be found here:
Connect A Credit Card Reader To An EBizCharge Account
Company Wide Set up
Some company-wide EBizCharge configuration is needed before the workstations will work.
In Paradigm, go to System >
Company Preferences > Add-Ons > Credit Card Processing
Credentials from EBizCharge support are needed to fill out the configuration here. The following credentials are required to get started: Username, Password, and Security Key.
If using Manual Entry, all the fields in the company-wide EBizCharge config section must be filled out to start accepting payments.
Login ID & Transaction Key can be left unset if the company does not want every workstation to be able to opt-in to credit card payments. If left unset, the workstation must set these credentials.
If
only
using Device API, only Default Commodity Code must be set.
Login ID:
User ID
Transaction Key:
API Password/////API SecurityID
The value of Transaction Key is the Password and the Security Key, separated by five forward slashes –
Secure URL:
https://soap.ebizcharge.net/eBizService.svc
Default Commodity Code:
Save Credit Card Numbers:
This shows/hides the “Saved Cards” tab in the manual entry web form.
Credit Card number will not be saved on the default
POS
customer:
Company Preferences > Add-Ons > Default POS Customer
Prompt user for authorization code if using external CC processor:
This prompts the user to enter a CC authorization code when using external CC processing.
Per-Workstation Configuration
EBizCharge includes support for Manual Entry, Device API processing, or both. This can be set by going to System > Local Settings.
Manual Entry Mode
Select EBiz Charge from the Processor dropdown.
Set Mode to “Manual Entry”.
Username, Password, and Security Key should be set to the credentials received from EBizCharge support.
These three are
optional
if the company has company-wide configuration set for them.
If the workstation would like to override the company-wide configuration for these, these should be set.
If the workstation would like to jump between companies with different EBizCharge accounts for each company, these should be left empty.
“Device Key” can be set to a device key that can be retrieved from the
Device Manager
This is optional
, but if set, a “Devices” tab will show in the web form allowing the user to initiate a transaction through the given terminal.
See
Pair a Payment Terminal with EBizCharge
for more information on pairing a device and getting the device key.
Ensure that the workstation has access to:
soap.ebizcharge.net
Device API Mode
Select “EBiz Charge” from the Processor dropdown.
Set Mode to “Device API”.
Set Device Key, Api Key, Pin, and Gateway Host URL – all four are required.
Api Key and Pin can be retrieved from the
Api Keys list
. This Api Key should be the same Api Key that the device is set to use. Contact Ebiz Support for assistance in getting Api keys.
Gateway Host URL can always be set to:
secure.ebizcharge.com.
Device Key can be retrieved from the
Device Manager
. See
Pair a Payment Terminal with EBizCharge
for more information on pairing a device and getting the device key.
Ensure that the workstation has access to: secure.ebizcharge.com.
Both
Select “EBiz Charge” from the Processor dropdown.
Set Mode to “Both”.
Following both of the how-to’s for Manual Entry and Device API, starting at step 3.
All fields are required in this mode (or the first three must have company defaults set).
Website Set Up
Once that is set up, choose the processor and payment types on the company website as well as the available online customer payment methods:
Online Payments > Website Setup
Credit Card Deposit GL Account
The default deposit account for credit card payments can be set by going to
General Ledger > Default GL Accounts

#### User Groups

User Groups – Paradigm ERP by Paragon – Documentation
Home
Administration and Setup
User Groups
This FAQ will go over how to create user groups in Paradigm.
Tasks
conversations
, and other forms can be assigned to a user group, to assign it to all
users
in that group.
Creating User Groups
To create a user group, go to System >
Company Preferences
> User Groups. Groups can be created from scratch or by copying them from a
user security role

#### Reset A Paradigm ERP User Password

Reset A Paradigm ERP User Password – Paradigm ERP by Paragon – Documentation
Home
Administration and Setup
Reset A Paradigm ERP User Password
This FAQ will go over how a user can reset their own password in Paradigm ERP. More information on user security can be found here:
Creating Users and User Security
Reset Password
After the user is logged in, they can reset their password by going to System > Reset Password

#### Company Preferences

Company Preferences – Paradigm ERP by Paragon – Documentation
Home
Administration and Setup
Company Preferences
This FAQ will go over company preferences in Paradigm. To apply company preference changes, Paradigm will need to be closed and reopened.
Company Preferences can be found by going to System > Company Preferences
Set Up
Defaults
Number of decimal places to display
– This controls how many decimal places will be displayed on prices, quantities, etc.
Number of edits for distance formula
– This is used for the “Possible Duplicate Customers” feature in the customer general tab. It is how many edits from the original information that it will still show as a possible duplicate.
Minimum Password Length –
Minimum required length for new passwords.
Enable live change notifications
– Enables live change notifications.
Password Requirements
Set the password requirements for
Paradigm user passwords
Audit Trail
Length of time to keep log info
– The amount of time that log info is stored.
Terms/Currency
Terms
– Default terms on AR transactions.
AP Terms
– Default terms on AP transactions.
Credit Memo Terms
– Default terms on credit memos.
Finance Charge Terms
– Default terms in the
Finance Charge
window.
Currency ID
– The currency being used.
Standard Discount Selection
More information on that can be found here –
Standard Discount Selection
Paths
These paths should not need to be edited and are set up by Paragon.
Custom Limit for Report Records
This setting allows a maximum number of transactions to be included in any single printed or exported file. In normal use, this setting should not be required and is intended only for situations in which very large batches, typically in excess of 400 records, are causing Paradigm to respond slower than expected.
When a limit is entered, Paradigm will cap each generated file at the specified number of records. Any remaining records will be automatically split into additional files. For example, setting the limit to “3” will prevent Paradigm from exporting or printing files that have more than three transactions in them.
Attempting to print
Input Masks
Phone Number Input Mask
– The format that phone numbers will appear in. For example,
(###) ###-####
will display as:
(717) 123-4567
Contact Methods Input Mask from used for all contacts
– Use this form to create unique masks for each contact method.
Dispatching
More information can be found here:
Delivery Notification
Theming
More information can be found here:
Custom Company Branding
Image Cache Settings
More information can be found here:
Image Caching
Inventory
Inventory Defaults
Default Vendor ID for Manufacture Order
– The default vendor when a manufacture order is created.
Default Job Classification
– Default
job classification
on a new inventory item.
Default Warehouse ID
– Default
warehouse
ID for a new inventory item.
Generic Product ID
– The product ID set here is used as as fallback when importing CSVs and a product doesn’t exist in Paradigm.
Default Category Discount Rounding Level
– The default
category discount
rounding level on a new item.
Inventory Item Class Stock
– The default stock
item class
Default Job Tax
– The default tax set on a job.
Behavior
Apply discounts to inventory items when used as components by default
– If this is checked, it will automatically enable this for new inventory items.
Update units pulled/committed periodically rather than immediately when posting. Contact Paragon to set this up.
– Updates units pull/committed periodically instead of immediately when posting. Contact Paragon for assistance setting this up.
Allow selecting discontinued products while there is remaining stock.
– When enabled, discontinued products can still be added to orders as long as there is stock remaining.
Include Quantity Being Produced in Quantity Available totals –
If enabled, this will included the “Quantity Being Produced” in the “Quantity Available” total.
More information can be found here:
Inventory Count Columns (Warehouse Quantities)
Set the GL department ID on transaction details based on the warehouse department. –
If enabled, the
GL department
ID on the transaction detail lines will be set based on the detail line warehouse department.
Inventory Cost Method
Average Cost
– More information on average cost can be found here:
Average Cost
LIFO (Last in First Out)
– More information on LIFO can be found here:
Cost Methods: LIFO
FIFO (First In First Out)
– More information on FIFO can be found here:
Cost Methods: FIFO
Export Settings
Exporter Type
– Choose
Connex
Eclipse
, or Smart Comm.
Connex Unit of Measure
– Enter the Connex
unit of measure
Sales
Appearance
Message to Display on Bottom of Statements
– This message entered here will be displayed at the bottom of customer statements. Contact Paragon if you would like to use this field.
Remit-to Message (max length 2 lines)
Company Logo Directory – (Logo must be more than 2.9″ wide X 1.2″ high)
– This is the file name that Paradigm will use for the logo on reports. This should not need to be changed and will be set up by Paragon.
Home tab logo directory (Company Logo will be used if none provided)
– This is the file name that Paradigm will use for the logo on the home screen.
Bill To and Ship To
– Choose what should be displayed along with the address in the Bill To and Ship To fields.
Days/View Related
Quote is valid for this many days
– The amount of days a quote is valid for.
Levels to go in View Related
View Related
Levels to go in Extended View Related
View Related
Allow editing transfer lead times per order
Transfer Lead Times
Credit Holds
Information on credit holds can be found here:
Customer Credit Holds
Behavior
Do Not Show Open Orders on a new Customer Invoice
– When enabled, this hides the “Open Orders” pop up on a new customer invoice.
Do Not Show Open Quotes on a new Customer Order
– When enabled, this hides the “Open Quotes” pop up on a new customer order.
Track Discounts in General Ledger
Track Discounts In GL
Do not remove customer PO from Invoices when adding orders to them
– Prevents customer POs from getting removed, when orders are added to them.
Keep Units Available up to date. (Otherwise it will stay the same as what it was when the line was first added.)
– This controls the “Qty Avail.” column in the order screen. If checked, it will show the current availability. If unchecked, the quantity available is stored when the order is created and not updated after that.
Never show terms discount on negative invoices
– Prevents terms discounts from showing on negative invoices.
Allow prepayment splitting and re-assigning
– Allows for prepayments to be split or reassigned, see more information here:
Reassigning Prepayments
Splitting Prepayments
Never apply prepayments from other orders
– Prevents
prepayments
from getting applied to orders other than the one that the prepayment was received on.
Prompt User to Manufacture MTO items with low stock upon releasing an order to manufacturing
– If a customer orders more of an item than what is available, a prompt will be show to the user to manufacture more.
These items do not have a large enough quantity in stock. You can however set them to be manufactured.
Show “regular price” and “amount saved” on receipts
– Shows the price before any discounts and the amount that was saved.
Prioritize exclusive pricing level even if price is greater
– More information on that can be found here:
Prioritize Exclusive Pricing Level Even If Price Is Greater
Ask User to confirm before allowing release
– Asks the user to confirm be releasing the order.
When this is enabled, a custom message can be entered to prompt the user.
Disable +/- keyboard shortcut to increment length
– Disables the “+/-” shortcut to change the length.
Print receipt when charging to customer account
– Prints a receipt when charging a customer account.
Store pricing level from selected customer on order
– This will set the price level in the advanced tab to the price level on that customer that is added to the order.
Ignore exclusive levels if “Compound Discounts” is turned off for a product
– If compound discounts is turned off for a product it will ignore
exclusive price levels
Show status field instead of job ID
– Shows the status field instead of the job ID field in the general tab on a transaction.
Show distances in kilometers –
Shows distance in kilometers instead of miles.
Auto-set freight to this percentage of the order total
Auto Freight
Default partial prepayment request amount
– The default amount that will be requested for a prepayment. More information on that can be found here:
Online Payments and Confirmations
Payment link additional expiration days
– The value that is entered for this setting will extend the number of days that
online payments
that are emailed to customers stay valid.
Cash Payment Rounding Level & Rounding Direction –
The rounding level for cash transactions when
receiving payment
, as well as the option to round down, up, or to the nearest. This is processed as a surcharge and posted to the cash surcharge GL account.
Default ship via
– The default ship via that is set when a quote, order, or invoice is created.
Automatic restocking fee
This fee will be added on credit memos, based on the percentage entered and the amount the customer is returning.
Warnings and Messages
Show warning beside subtotal if there are any zero prices
– This will display a red exclamation mark beside the subtotal if any lines are at zero dollar prices. This will not show a warning if the zero dollar lines were manually set to zero.
Warn user if their action will remove item’s set prices
– Shows a warn to the user if they are about to remove an item’s set prices.
Highlight comment field in orders if it has data
– This will highlight the comment field on an order if there is a comment in it.
Notify user if quote they are converting is past valid date
– Displays a warning if the quote being converted is past the valid date.
Past Valid Date – This quote is past its valid date. Are you sure you want to convert it?
Request lots when adding a line to a quote or order
– This will display the lot selection screen when a
lot tracked
item is added to a quote or order.
Select the lots you want to sell.
Warn User about missing POs upon order release
– Warns the user when releasing an order that has missing POs.
Warn user about missing contact method upon order release.
– Warns the user during order releasing if there is no contact method on the order, and there is other shipping info entered, and the
ship via
is not pickup or drop-ship.
Missing Contact Method – This order doesn’t have any contact method specified! You should add one before releasing to manufacturing. Are you sure you want to continue?
Warn user if ordering more items than available when releasing
– Warns the user when releasing if ordering more items than available.
Warn user if trying to manufacture more items than are buildable when releasing –
Warns the user when releasing if they are trying to manufacture more items than are buildable.
Limits
Allow Overriding Assembly Prices on Invoices and Orders
– Allows for overriding assembly prices on invoices and orders.
Show total margin fields on Quotes, Orders, and Invoices
– Displays the total margin field on quotes, orders, and invoices.
Require a “Ship Via” on all orders before releasing
– Requires a ship via to be set on an order before it can be released.
Some more information is needed before this order can be released.
Disallow editing shipping information if order is on a transfer
– Disallows for shipping information on an order to be edited if the order is on a transfer.
This order is already on a trip. You cannot change the address information! Contact your dispatcher.
Disallow editing pieces on order lines that have been printed
– Disallows editing the pieces amount on order lines that have been printed through Fulfillment Pro.
Disallow editing orders that are assigned to trips
– Disallows editing orders that are assigned to trips.
This Order is already on a trip – you need to consult a dispatcher to make any changes.
Allow using gift cards
Gift Cards
Hide employee commission percentage
– Hides the employee
commission
percentage on the commission tab.
Lock all invoice prices on conversion
– Locks all invoice prices when an order is converted to an invoice.
Prevent posting invoices with both taxes set to the same code (allow if zero rate)
– Prevents posting invoices when both taxes are set to the same code. If enabled, this will still allow for posting if the tax rates are zero.
Require salesperson before release or post
– Requires a salesperson to be added to the order before it can be released or posted.
Disallow releasing to this department
– Disallows releasing to the given department.
Customer Default Allowed Online Payment Types
– The default allowed payment types that customers are allowed to use when paying online. More information on that can be found here:
Online Customer Payment Method Options
Opportunities –
More information can be found here:
Leads And Opportunities
Purchases
Behavior
Leave Ship-to address blank when creating PO
– Leaves the ship to address blank when creating a new PO.
Track Discounts in General Ledger
Track Discounts In GL
Require unique bundle descriptions on each line before release
– Requires unique bundle descriptions to be entered before release.
Show the Print screen after releasing a PO
– Shows the print screen after releasing a purchase order.
Use current cost instead of standard cost
– Learn more about it here:
How To Use Current Cost Instead Of Standard Cost On POs And Purchase Invoices
. This will be ignored if the inventory standard cost is zero for that product.
Cascade received costs to related sales transactions
Cascading Costs From Purchases To Sales For Nonstock Products
Append order number to bundles on POs created for quotes or orders
. – Appends the order number to bundles on POs created for quotes or orders.
When creating POs from orders, assign them to the salesperson for the current user, rather than the order’s salesperson.
Company Logo
Company Logo Directory – (Logo must be more than 2.9″ wide X 1.2″ high)
– This is the file name that Paradigm will use for the logo on reports. This should not need to be changed and will be set up by Paragon.
Sales Tax
Apply Terms Discount For Receivables
Choose the amount that the discount applies to. More information on terms can be found here:
Payment Terms
The section shown below does not need to be set up and is just for Paragon’s use.
Add-Ons
Point of Sale
Default Customer ID
– Default customer ID when a new sale is created at
POS
If a user attempts to rename the customer set here, the follow message will be shown:
This is the default point of sale customer and cannot be renamed.
Display Sales Tax Codes
– When enabled, sales tax codes will be displayed.
UPS Integration
TomTom Routing Integration
Mileage Calculator/Trip Optimizer
AvaTax Integration
AvaTax
Contractor App
Bank Feed Integration
Bank Account Linking
Motive Dispatching Integration
Motive
SmartBuild Integration
Do It Best Integration
Payment Processing
Credit Card Processing
Credit Card Process Set Up
Surcharging
Credit Card Surcharges
ACH/EFT Payments
Integrated ACH Payments Addon
Jobs
Default Fields
Information on creating jobs can be found here:
Creating A Job
Labour Burden Percentage
– Default labor burden percentage on a new job.
Additional Revenue
– Default additional revenue percentage on a new job.
Default Contract Type
– Default contract type on a new job.
Default Invoicing Schedule
– Default invoicing schedule on a new job.
Job Accounting Customer –
The customer used on invoices converted from orders for non-WIP Lump Sum Jobs.
Default Exempt Tax Code
– Default exempt tax code on a new job.
Allow Partially taxable job final billing –
Enables additional job fields to specify a taxable/non-taxable portion of the job proposal amount, to be used in final billing.
Behavior
Use
WIP Account
for Un-Posted Jobs
– Uses a WIP account for unposted jobs.
Use Order Instead of Quotes for Job Estimating
– Uses orders instead of quotes for job estimating.
Use Static Proposal Amount When Contract Type is “Lump Sum”
– This keeps the proposal amount from changing after it is set.
Give Warning when converting a Job Order to an Invoice (Instead of to a Job Transfer)
– Warns the user when converting a job order to an invoice instead of a job transfer.
Allow Partial Posting of Jobs
– Allows for the partial posting of jobs.
Ask User for tax code when creating final Billings
– Asks the user for a tax code when final billings are being created.
Automatically Apply Job Prepayments To Any Invoices For That Job Upon Posting
– Automatically applies job prepayments to any invoices for the job when posting it.
Hide Non-WIP Jobs from other customers in job dropdown on orders and invoices.
– Hides non-WIP jobs from other customer in the job drop down on orders and invoices.
Automatically set the address on orders and job transfers to the job address
– Automatically sets the address on orders and job transfers to the job address.
When calculating Use Tax for a stocked manufactured item, attempt to get the cost from the original build detail
– Attempts to get the cost from the original build detail when calculating use tax for a stocked manufactured item.
Always convert orders for WIP jobs to invoices rather than job transfers.
– If enabled, it will auto-create credit memos reversing the total of those invoices, and immediately apply them against the original invoice.
Calculate job proposal amounts from order totals. –
If enabled, it will auto-calculate the proposal amount on jobs, as the total of the quotes or orders for that job.
This is also based on the “Use Orders for Estimate” setting on the job.
This will exclude backorders when calculating the proposal based on the totals of associated orders.
Auto-post job final billing invoice. –
If enabled, it will automatically post the
job final billing
invoice.
Job Classes
More information on job classes can be found here:
Job Classes
Order Conversion
Use Next Transaction Number for Converted Document –
When enabled, converted transactions will use the next available transaction number, instead of keeping the same ending number and changing the prefix.
See this FAQ for more information on transaction numbering:
Paradigm Transaction Numbering
Mark under shipped orders as “Open” (alternatively the system would prompt you to create a Back Order to fill the remaining order.)
– Marks under shipped orders as “Open”. If this is not enabled, Paradigm will prompt the user to create a back order.
Create new builds for back-ordered manufactured lines where the original build was completed for less than the ordered quantity –
When enabled, this will create new builds for back-ordered manufacture lines where the original build was completed for less than the ordered quantity.
When disabled, the original build will be re-used, meaning the item will not show back up in production when the back order is created.
Carry Over Empty Bundles when converting
– Carries over empty bundles when converting.
Create Multiple Invoices for an order as items are shipped via
Fulfillment Pro
– Creates multiple invoices for an order as items are shipped in Fulfillment Pro.

#### Data Utilities: Update And Delete

Data Utilities: Update And Delete – Paradigm ERP by Paragon – Documentation
Home
Administration and Setup
Data Utilities: Update And Delete
This FAQ will go over how to merge, rename, or batch delete items, vendors, and customers. It will also go over how to setup an excel file to do a batch import.
!! Be aware that once something is merged, there is no way to revert it. !!
Merging Items/Vendors/Customers
To merge an item, vendor, customer, or G/L account, go to System > Data Utilities > Misc > Rename and Delete. In this example it will be customer accounts merging. The delete permission for items, vendors, or customers is needed to use this feature.
Select the customer to remove and the account to merge it into, then click update and delete.
When a customer or vendor is merged, the contact methods will be kept from the old account and added to the new account.
Merging G/L Accounts
When merging G/L accounts, they must be the same type. If they aren’t, the merge will not work and this error will appear:
Batch Update and Delete
In order to create a batch update, an excel file needs to be creating in the correct format listed in Paradigm. This is only available for customers and inventory info. All that is required is the old ID and the new ID to merge it into, like the example below. The rules for import are as follows:
The file must be in an excel file.
The file must have two columns with headers.
The first column header is labeled OldID
The second column header is labeled NewID
Once that has been created, click on the “Batch Update and Delete” button by either customer or inventory, depending on what is being updated.
Then select the file button to upload and choose whether to rename only, merge only, or both.
Deleting Products
Batch update be used to delete multiple inventory items at once.
Enter the IDs of the products getting deleted in the “OldID” column and fill down the “MI” product (or any other product ID of your choosing) in the “NewID” column.
Select the file to import and select “Merge Only”.
This will merge the products and set the old product ID as an
alias
on the new product.
Changing Product IDs
Another use for this is when a batch of items need new product IDs.
Enter the current ID in the “OldID” column and the new one in the “NewID” column.
Select the file and choose “Rename Only” before importing.

#### Remaining DB Space

Remaining DB Space – Paradigm ERP by Paragon – Documentation
Home
Administration and Setup
Remaining DB Space
This FAQ will go over the “
Remaining DB Space: X.XGB Contact Paragon
” header warning in Paradigm ERP.
Remaining DB Space
The warning is shown because Paradigm’s SQL database is nearing 10GB, and it is using Microsoft SQL Server Express (free version) which is limited to databases of 10GB or less. This warning will be shown to all top-level administrators, starting when the database reaches 8GB.
To resolve this, upgrading to Microsoft SQL Server Standard (paid version) will likely be necessary. Paragon does not resell SQL Server Standard, please work with your IT company and/or a Microsoft certified reseller to see the licensing options.
Options To Reduce The Database Size
Audit trail is by far the largest table in most databases. As a temporary measure to free database space, the amount of time to keep audit trail data can be shortened in
company preferences
. Changes here may take up to a day to take effect.

#### Custom Business Logic

Custom Business Logic – Paradigm ERP by Paragon – Documentation
Home
NEW!
Custom Business Logic
Home
Administration and Setup
Custom Business Logic
This FAQ will go over the custom business logic that can be set up in Paradigm ERP. Contact
Paradigm Support
to get any of these set up.
Custom Messages
Custom messages can be set up to be shown for after a certain event in Paradigm.
Paradigm Events To Trigger Messages
Releasing An Order

#### Update/Install Paradigm

Update/Install Paradigm – Paradigm ERP by Paragon – Documentation
Home
Administration and Setup
Update/Install Paradigm
This FAQ will go over how to update or install Paradigm.
Updating Paradigm
For a Paradigm server update, Paragon will reach out and schedule a time for the server to get updated. After the server-side update is completed (typically after-hours), the workstations will automatically install the update the next time Paradigm is opened (typically the following morning).
After that, Paradigm will then close and install the update without needing Windows administrative permissions.
After the update is installed, Paradigm will reopen and will be ready for use.
Update Download Errors
If Paradigm is unable to download the update, the following message will appear:
The Paradigm ERP update was unable to be downloaded or was blocked by a firewall. Please contact support to resolve this.
Windows Defender Error
Another issue that can happen is Windows Defender blocking the install. More information on that can be found here:
Paradigm Update Blocked
If the Paradigm updater runs into any errors when installing, try restarting the workstation and then running the installer again. If this does not resolve the issue, contact Paragon Support.
Installing Paradigm
For the installation of Paradigm on the first workstation, contact Paragon Computing Solutions. Once the very first installation has been completed on a workstation, the steps below can be followed to install Paradigm on other workstations.
– Go to a different Paradigm workstation that is signed in and working.
– Sign in, and go to Help > Get Installer Link and copy the URL.
– Send the URL to the workstation that needs Paradigm on it.
– Open that URL in a browser to download the Paradigm update file.
– Run the Paradigm update file to install Paradigm.
– After it is installed, a shortcut named “Paradigm ERP” will be placed on the desktop.
Server URL
After Paradigm is open, the login screen will appear. Enter the user name [1], password [2], and server URL [3].
How to Find The Server URL
The server URL can be found in the login screen on an existing installation. See this FAQ for more information on setting up users in Paradigm:
Creating Users and User Security
The server URL can also be found by going to System > Company Preferences > Paths

#### Creating Users and User Security

Creating Users and User Security – Paradigm ERP by Paragon – Documentation
Home
Administration and Setup
Creating Users and User Security
This FAQ will go over the user security screen in Paradigm. This is used to assign users to roles and specific permissions. By default, a user is not allowed permissions for anything until it is granted to them.
User Security
To access user setup, go to System > User Security
This will display a list of users and their roles. Passwords for existing users can be changed directly in this form.
Creating Users
To create a new user, click the “Add New User” button in the header.
Enter a username, password, and template user. The new user will copy over the permissions, roles, user type, report security settings, dispatching filters, list layouts, and saved filters from the template user.
Password Requirements
Password requirements can be configured in the
company preferences
. Passwords may not match the user name.
User Lockout
Login Failed: Invalid Username or Password
Locked out users will create a task for all users that have access to “User Security”, notifying them that a user is locked out:
Login for user is disabled
To allow the user to login, it must be unlocked by an admin from the security screen. Resetting the password will clear out the failure count as well.
Administrator Only Permissions
The following is a list of permissions that only users with the user type “Administrator” have access to:
Editing other users’ filters, user preferences, email queue, or the task list.
AvaTax – Offline invoice reconciliation and posting invoices when the connection to AvaTax is down.
Releasing admin credit holds.
Company Setup
More sensitive activity in the audit trail.
Data Hub Settings.
Re-assigning a purchase invoice to a different job.
Editing a 1099 box on a posted transaction.
Viewing and Editing some fields in the employee screen.
Setting a price/discount on a line that goes below the item’s minimum margin.
Overriding a discount sensitivity code.
Roles
Roles are groups of permissions that can be added to a user. If more than one role is assigned to a user, they will be given permissions from all of their assigned roles. If a permission is not allowed in one role, but is allowed in another one, that permission will be granted to them. Roles only allow permissions, they do not remove them.
Adding Roles
To add a role to a user, select one from the drop down beside the user, or select multiple users and then click “Add Role to Selected Users”. Multiple roles may be added if needed.
Creating Roles
To create a new role, first click the “Edit User Roles” button in the header.
From there, click “New Role”.
Enter a role name.
Then select the check box options for each permission, or select multiple permissions and applying changes using the buttons at the top.
Editing Existing Users
Overriding Permissions
To view and edit permissions on an existing user, click the “User Permissions” tab or click the button on the right for a user.
From here, permissions can be adjusted for the selected user. The permissions changed here will override all of the roles assigned to the user. Left clicking will enable a permission and right clicking will disable it.
The User Permission list does not need to be filtered to a single user. This is useful to see which users have a access to a certain form.

#### Create Employee Web Logins

Create Employee Web Logins – Paradigm ERP by Paragon – Documentation
Home
Administration and Setup
Create Employee Web Logins
This FAQ will go over how to create employee web logins and
Fulfillment Pro
filters. Information on creating customer web logins can be found here:
Customer Portal: Create Customer Web Logins
To begin, go to System >
Company Preferences
> Employee Web Accounts.
Alternatively this can be done by logging into the internal website, which can be found by going to
Company Preferences
> Setup > Paths.
Log in with the administrator account, click the dropdown in the top right corner and select “Edit Employees”. The username for the administrator account is commonly “web_admin”.
New Employee Login
To create a new employee login enter the new account information in the blank line at the top of the list, highlighted in the screenshot below.
Emails are not required, they are mainly used to guarantee that users are unique. You can enter first and last name or combination of name and initials with
no
spaces (JohnDoe, JohnLDoe, etc.) – they must be unique.
Details
Click the “Details” button to specify the abilities that the new employee account will have, define the password and configure
Fulfillment Pro
. If a user is going to be using Fulfillment, check the
“Fulfillment Employee” check box in Paradigm
. Click “Save User” when finished.
The Salesperson, Customer ID, and Employee ID all use the ID from Paradigm, not the name (use “DOEJOH001”, not “John Doe”). The name entered for any employee must exactly match the name entered for them in Paradigm.
Fulfillment
More information on Fulfillment settings can be found here:
Fulfillment Pro: Employee Filters And Settings
App
Information on the app settings can be found here:
Paradigm Mobile: Overview

#### Payment Terms

Payment Terms – Paradigm ERP by Paragon – Documentation
Home
Administration and Setup
Payment Terms
This FAQ will go over Payment Terms in Paradigm.
Setting Up Terms
Payment terms in Paradigm can be viewed and edited by going to System > Company Preferences dropdown > Terms.
From there, fill in all of the info for the new terms.
Terms –
Name of the term.
The payment term names need to be unique.
Disc Date/Discount Days –
The date or amount of days the customer has to pay before to get the early payment discount.
Discount for early payment –
Discount given for payment on or before the discount date.
Date Due/Balance Due Days –
APR for late payment –
Fee percent for a late payment. This is used when calculating finance charges, more info on that can be found here:
Finance Charges
Date Driven Terms –
This option controls how the terms discount date and due date are calculated based on the Disc Date/Discount Days and the Date Due/Balance Due Days.
Due Next month if within X days –
Same-Day Payment Discount –
The discount applied when payment is made on the same day as the invoice.
COD (Dispatching) –
If checked, a warning icon will be shown beside the order total in
Daily Deliveries
Module –
Choose if the terms will appear in AP or AR modules.
If it should appear in both, choose AR/AP.
Sort –
The order the term will appear on the list.
After adding new terms, close and reopen Paradigm to get the new record to show up in the lists.
Terms Discount Calculation Options
The way terms discounts are calculated can be changed by going to System > Company Preferences > Sales Tax.

#### Report Security

Report Security – Paradigm ERP by Paragon – Documentation
Home
Administration and Setup
Report Security
Report security can be accessed by clicking on “Report Setup” on the
report list
after selecting a group on the left, or by clicking on the edit button on a print form. This edit button will not appear for all users, just those that have permission to edit report settings.
Reports List
Print Form On A Transaction
Report on a List
Adding Users
To give a user to access a report, check the “Enable” box on the role in the “Role Security” section or on the user in the “Allowed Users” section. Another option is to use the drop down beside “Copy Users” to add the users that have access to the report selected from the drop down.
Removing Users
To remove access to a report from a
user
, uncheck the “Enable” check box beside the
user
or
role

#### Set Up Emailing From Paradigm

Set Up Emailing From Paradigm – Paradigm ERP by Paragon – Documentation
Home
Administration and Setup
Set Up Emailing From Paradigm
Paradigm has the capability of sending emails directly from transaction forms and lists. This how-to will cover configuring a
user
to email from Paradigm ERP.
Once that is complete, check out this FAQ to learn how to email from Paradigm ERP:
Emailing From Paradigm
Email Settings
To access the email settings, go to System >
User Preferences
> Select the
user
to set up emailing for > Email Settings
Then select the Google or Microsoft login option, depending on which email account is being connected. If the email account type is unknown, contact your IT provider.
If manual set up is needed or the email account being set up is neither Google or Microsoft, see the “Manual Setup” section below.
Microsoft
If Microsoft is selected, the external browser will be directed to a Microsoft login page. Use the email account credentials to login.
After the login process is complete the following message will appear and the window can be closed:
Connection was successful. You may close this window
A message will appear if the login was successful:
Login Successful
– [emailaddress] is connected to your account.
Once the account a linked the below options will be show.
Re-Authenticate With Microsoft –
Prompts the Microsoft email account login window.
Log Out of Microsoft –
Log out of the connected Microsoft account.
Add Bcc Address to all emails –
If enabled, the Bcc addresses entered in the next form will be added to all emails.
Bcc Address to add to all emails –
Adds the entered address to all emails, if the previous option is enabled.
Google
If Google is selected, the external browser will be directed to a Google login page. Use the email account credentials to login.
Once the email and password has been entered, click
Continue
on the next screen.
Once the email and password has been entered, click
Continue
on the next screen.
In the next screen, check the box
Send email on your behalf.
and click
Continue
After the login process is complete the following message will appear and the window can be closed:
Connection was successful. You may close this window
A message will appear if the login was successful:
Login Successful
– [emailaddress] is connected to your account.
Once the account a linked the below options will be show.
Re-Authenticate With Google –
Prompts the Google email account login window.
Log Out of Google –
Log out of the connected Google account.
Add Bcc Address to all emails –
If enabled, the Bcc addresses entered in the next form will be added to all emails.
Bcc Address to add to all emails –
Adds the entered address to all emails, if the previous option is enabled.
Manual Setup
Email settings can be entered manually if needed, by using the “Manual Setup” button. A search online may be needed on how to configure the program being used for email to accept emails from other programs.
Custom Email Send From
The “Send From” address can be set manually if you are logged in with a Microsoft account and have a setup that allows emails from a different address than your standard address. Otherwise, this value should not be edited.
Email Error Message
Incorrect set up may cause this error message to appear:
The SMTP server requires a secure connection or the client was not authenticated.

#### Connect a Credit Card Reader to An EBizCharge Account

Connect a Credit Card Reader to An EBizCharge Account – Paradigm ERP by Paragon – Documentation
Home
Administration and Setup
Connect a Credit Card Reader to An EBizCharge Account
For information on configuring EBizCharge or other credit processors in Paradigm, go to this FAQ:
Credit Card Processing Set Up
If the Device Manager is not visible in the EBizCharge Gateway, contact EBiz Support and they will provide the pairing key.
888-500-7798 x 1
Pairing Process
This pairing process is valid as of July 2023, but is subject to change. This is not Paragon’s software, so please contact EBiz support for any assistance needed with this process.
Login to
https://secure.ebizcharge.com
https://sandbox.ebizcharge.com
for sandbox accounts) and navigate to Settings > Device Manager.
Click on the
add button.
Enter any preferred name for the device.
In Source Key field drop-down, select the appropriate API key.
A window should then pop up with a pairing key – enter this in the payment terminal where prompted.
Device Key
After pairing (in the EBizCharge portal > Settings > Device Manager), click on the newly paired device, and in the popup window, there will be a “Device Key” value listed.

#### Paradigm Dashboards

Paradigm Dashboards – Paradigm ERP by Paragon – Documentation
Home
Administration and Setup
Paradigm Dashboards
This FAQ will go over dashboards in Paradigm and Paradigm Mobile. Dashboards can be set up to display various metrics from Paradigm, contact Paragon support to get dashboards set up.
Paradigm Dashboard Examples
Card and list dashboards are supported too, as shown in the Paradigm Mobile section.
Paradigm Mobile Dashboards
Paradigm Mobile dashboards can be set up to any custom dashboard card or list needed, but charts are not supported on the mobile app. More information on the app can be found here:
Paradigm Mobile: Overview
The dashboard here can be customized to track different things, such as “Daily Quote Count” or “Weekly Invoice Count”.

#### Windows Location Access

Windows Location Access – Paradigm ERP by Paragon – Documentation
Home
Administration and Setup
Windows Location Access
As of Windows 11 version 24H2, Windows will show the following prompt when opening
Trim Draw
. This is a one-time popup caused by the fact that
Trim Draw
is a browser, and this popup is shown for all browsers.
Let Windows and apps access your location? –
Paradigm ERP (Current user) needs permission to use signals like GPS or Wi-Fi, which can be used to determine your precise locations. To stop receiving these message or change this later, go to Settings.
Disable Location Services
To disable location services in Windows, follow the instructions below:
Open Settings > Privacy & Security > Location.
Make sure that “Location Services” is set to off.
Under “Location” settings, check that “Allow apps to access your location” is turned off.

#### Cloud Server Hosting

Cloud Server Hosting – Paradigm ERP by Paragon – Documentation
Home
Administration and Setup
Cloud Server Hosting
This FAQ will go over the details of a cloud server hosting set up for Paradigm.
Cloud Server Set Up
Machine Integrations
If you are using any
machine integrations
, a VPN tunnel to the local network will be required.
No Machine Integrations
If you are not using any
machine integrations
, then a URL can be set up that points to the public IP of the Azure server. This URL can be used to log into Paradigm. If Paragon provides the URL, it’ll be [company].para-apps.com, or you can set up your own.
Cloud Server Hosting Pros and Cons
The Pros
Connect from anywhere with an internet connection.
Lower up-front server hardware costs.
Server offsite and backed up in cloud.
Quick to set up.
Minimal/no networking or IT changes required.
The Cons
Can be slower than a local network.
Cannot connect if internet connection is down.
Recurring hosting costs.

#### Creating Employees

Creating Employees – Paradigm ERP by Paragon – Documentation
Home
Administration and Setup
Creating Employees
This FAQ will go over how to create employees in Paradigm.
This can be done in System > Employee List > Add new Employee.
Fill out the fields. Paradigm will auto-create an Employee ID after the name fields are filled out.
Salesperson
Selecting the Salesperson box will include the employee in the salesperson dropdown. Information on setting the default salesperson for a user can be found here:
Default Salesperson
Fulfillment Employee
Selecting the Fulfillment Employee will include the employee in the employee selection dropdowns in Fulfillment. More information on Employee Web Logins can be found here:
Create Employee Web Logins

#### Web Browser Failed To Load

Web Browser Failed To Load – Paradigm ERP by Paragon – Documentation
Home
Administration and Setup
Web Browser Failed To Load
This FAQ will go over the two potential fixes for the following error:
Web browser failed to load. Contact Paragon Support. You may need a new version of C++ (VC_redist.x64.exe)
Installing VC_redist.x64.exe
The first fix is to go to following link, then download and install the file:
https://aka.ms/vs/17/release/vc_redist.x64.exe
Resetting The Paradigm Directory
If the issue is not resolved after the first fix, try resetting the Paradigm Directory. This FAQ will go over how to do that:
Reset The Directory For Paradigm

#### Paradigm API

Paradigm API – Paradigm ERP by Paragon – Documentation
Home
Administration and Setup
Paradigm API
To learn more about the Paradigm API options and available web hooks, contact
Paragon Support

#### User Preferences

User Preferences – Paradigm ERP by Paragon – Documentation
Home
Administration and Setup
User Preferences
This FAQ will go over the User Preferences in Paradigm. User preferences allow for each user’s experience to be customized.
User Preferences can be found in System > User Preferences.
User Defaults
Warehouse/Salesperson
User Default Warehouse ID
– This controls the default warehouse for newly created transactions.
More information on how to set up a default warehouse can be found here:
Warehouses
Default Salesperson for this user
– This controls the default salesperson for newly created transactions.
More information on how to set up a default salesperson can be found here:
Salesperson
Orders/Purchasing
New quotes default to Estimate-
This means that when a new quote is created it will be set to “Estimate” rather than “Quote”.
Automatically edit transactions when opened
– This option is on by default. If unselected, user will not be able to edit transaction as soon as they are open. The edit button in the top left corner will need to be clicked to edit transactions.
Expand all descriptions on detail lines
– This will enlarge the description on detail lines by default.
Default Ship Via
– The default ship via to use on a new transaction.
More information on ship vias can be found here:
Ship Vias
Terms
– The default terms to use on a new transaction. Note that Customer defaults have priority over this setting.
More information on payment terms can be found here:
Payment terms
POS
Automatically go to the next line after selecting a product on a new line
– If this box is not checked then moving to a new line will have to be manually done. If selected, this can be useful when entering numerous products.
Setup
High contrast mode
– This is an option for the display to have higher contrast between the colors. This may be useful for colorblind users.
Do searches in home tab-
If selected the CTRL+G keyboard shortcut will bring the user to the home search bar. If unselected, CTRL+G will open the search bar popup.
Allow dragging tabs out to float them
– Allows any tab in Paradigm to be dragged out, turning the tabs into separate floating elements that can be positioned anywhere on the screen(s). If disabled, floating tabs can only be done from right click menu on tab.
Show confirmation on closing Paradigm –
Shows a confirmation when closing Paradigm.
You are about to close Paradigm ERP. Do you want to continue?
Minutes before tabs are marked as unused
– Paradigm automatically marks tabs as unused after this many minutes of that tab not being focused.
Export/Import
Exporter Path
– This line is used for machine integrations and should not be edited.
Importer Path-
Sets default import path.
Auto Attach Path-
If set, when the
Attachment
screen is opened, it will auto attach any files in this folder.
More information on auto attaching can be found here:
Auto Attach
Connex
This will be filled in if the
Connex integration
is being used, contact Paragon for more information.
Printing/Startup
Printing Defaults
Number of copies to print
– This setting allows the user to change the default number of copies to print.
Use the print dialog box
– This will allow users to print from the Paradigm print dialog box instead of the computer default.
Keeping print form open after print
– This option would leave the printing screen up if selected. This would be useful when the user wants to change any settings in the printing form and reprint or print different copies.
Always open reports as popup
– This will open a preview of the report before printing.
PDF Defaults
File saving path
– The default PDF save destination when exporting a report to PDF.
Open PDF after saving
– If selected, after saving the file, the PDF will open automatically.
Startup
Show reminder list on startup
– The User has an option to automatically open the reminder list when starting Paradigm.
More information on the reminder list can be found here:
Reminder List
Email Settings
More information on email settings can be found here:
Set up Emailing from Paradigm
Email Signature
– This is what goes at the bottom of an email, it will be the signature of the sender.

#### ZIP Codes

ZIP Codes – Paradigm ERP by Paragon – Documentation
Home
Administration and Setup
ZIP Codes
This FAQ will go over how to set up ZIP Codes and County Messages in Paradigm. Paradigm has many ZIP codes saved by default.
Adding ZIP Codes
To set up a ZIP Code in Paradigm, go to System >
Company Preferences
> ZIP Codes.
From there, scroll to the bottom of the list and enter the ZIP information on the blank line.
County Messages
To set up a county message, select the “Counties” list from the ZIP code screen and then enter the message. Paradigm may need to be closed and reopened after new messages have been added for them to begin appearing on Ship To addresses.
This will be shown when the county is entered in the Ship To address.

#### Using the Paradigm Payroll Importer

Using the Paradigm Payroll Importer – Paradigm ERP by Paragon – Documentation
Home
Administration and Setup
Using the Paradigm Payroll Importer
This FAQ will go over how to use the Paradigm payroll importer, which can be done by can be done by exporting a .csv file from either QuickBooks or QuickBooks online and then importing it. If the import has not been setup yet, follow the steps in this FAQ to set it up:
Payroll Import Setup
QuickBooks Desktop
When utilizing QuickBooks Payroll with Paradigm Accounting, the QuickBooks Payroll Detail Report can be exported to a .csv file and imported as a journal entry In Paradigm.
After Completing a Payroll in QuickBooks, go to the Reports Menu > Employees and Payroll Section > and click “Payroll Item Detail”.
Set the Report Date to the Pay Date of the Payroll and click “Refresh”.
After the correct payroll data is displayed on the screen, click the Excel toolbar button and click “Create New Worksheet”.
When prompted to Send to Excel, click “Create a comma separated values (.csv) file”. – It cannot be exported as another file type and then saved as a .csv file.
Click Export and Save the File. Saved files
cannot be opened
before the import (since Excel reformats them) and resaved.
Navigate to the Paradigm QuickBooks Payroll File Import page, which is saved in the reports list.
Click “Choose File” and select the
raw
file exported from QuickBooks and it will automatically upload.
If the Upload/Import is Successful, a Paradigm GL Journal number will be displayed.
Go to the Paradigm > General Ledger > Journal Entries and locate, review, and post the Journal Entry.
QuickBooks Online
When utilizing QuickBooks Online Payroll with Paradigm Accounting, the QuickBooks Online Paycheck History and Payroll Summary By Employee Reports can be exported to an Excel file and imported as a Journal Entry In Paradigm.
After completing a Payroll in QuickBooks Online, go to the Reports > Payroll section and click
Paycheck History
. Verify the correct Pay Date is selected and then click “Share/Export to Excel” and save the Excel file.
Return to the Reports > Payroll section and click
Payroll Summary By Employee
. Verify the correct Pay Date is selected and then click “Share/Export to Excel” and save the Excel file.
Navigate to the Paradigm QuickBooks Payroll File Import page, which is saved in the reports list.
Click the first “Choose File” button and select the “Paycheck History” File exported in Step 1.
Click the second “Choose File” button and select the “Paycheck Summary By Employee” File exported in Step 2.
Click the “Import” button.
If the Import is Successful, a Paradigm GL Journal number will be displayed.
Go to the Paradigm Journal Entry screen and locate, review, and post the Journal Entry.
QuickBooks Online – Payroll Only
To export the IIF payroll file in QuickBooks Online, go to the
Gear
icon.
Choose
Payroll settings
Select the
Pencil icon
next to
Export
Choose
QuickBooks Desktop for Windows: downloadable IIF (Intuit Interchange Format) file
and select
Continue
You will be asked to type in the name of each account you are exporting your liabilities and expenses to. We also suggest that you have a copy of your QuickBooks chart of accounts handy for this.
Once the IIF file has been obtained, navigate to the Paradigm QuickBooks Payroll File Import page, which is saved in the reports list.
Click “Choose File” and select the IIF
file exported from QuickBooks and it will automatically upload.
If the Upload/Import is Successful, a Paradigm GL Journal number will be displayed.
Go to the Paradigm > General Ledger > Journal Entries and locate, review, and post the Journal Entry.
Other QuickBooks Exports
Exporting From QuickBooks

#### Payroll Import Set up

Payroll Import Set up – Paradigm ERP by Paragon – Documentation
Home
Administration and Setup
Payroll Import Set up
This FAQ will go over how to set up payroll imports into Paradigm, from either QuickBooks Desktop or QuickBooks Online.
QuickBooks Desktop
Payroll items are found in QuickBooks Desktop at Reports menu > Employee & Payroll section > Payroll Item Listing report.
Service items must be created in Paradigm with the same name as the payroll items in QuickBooks. The expense account of the payroll item in Paradigm must be set to the GL account the QuickBooks payroll item should post to. For example, if QuickBooks has a payroll item named “Federal Withholding”, a service item in Paradigm must be created and the Product ID must be “Federal Withholding”. The expense account for the item needs to be set to the account where the Federal Withholding should be posted to. If the payroll item name from QuickBooks is too long for the Paradigm product ID, a custom item attribute for “PayrollID” can be created, and the QuickBooks item name can be set as the value of that attribute.
For Company Paid Items, Such as
Social Security Company
, Set the Sub Category of the item in Paradigm to “Company”. Set the Sales GL account to the account that receives the liability (credit), and set the expense account to the item that should receive the expense (debit).
In Paradigm > General Ledger > Default GL Accounts > Payroll, the Payroll Bank Account must be set to the Bank Account the checks are written from.
QuickBooks Online
Service Items must be created in Paradigm with the same name as the Payroll Items in QuickBooks. The Expense account of the Service Item must be set to the GL account the QuickBooks payroll item should post to. For example, if QuickBooks has a payroll item named “Federal Withholding”, a service item in Paradigm must be created and the Product ID must be “Federal Withholding”. The expense account for the item needs to be set to the account where the Federal Withholding should be posted to. If the payroll item name from QuickBooks is too long for the Paradigm product ID, a custom item attribute for “PayrollID” can be created, and the QuickBooks item name can be set as the value of that attribute.
To view Pay and Tax Codes in QuickBooks Online:
In QuickBooks Online, click the “gear” icon on the top right of the screen.
Under Settings, click “Payroll Settings”.
On the Payroll Settings screen, scroll to the bottom of the screen and click the pencil icon in the “Accounting” section.
Payroll Items and their corresponding GL Account will be listed.
For Company Paid Items, Such as
Social Security Company
, Set the Sub Category of the item in Paradigm to “Company”. Set the Sales GL Account to the account that receives the Liability (credit), and set the Expense account to the item that should receive the Expense (debit).
In Paradigm > General Ledger > Default GL Accounts > Payroll, the Payroll Bank Account must be set to the Bank Account the checks are written from.
QuickBooks Online – Payroll Only
Payroll items are found in QuickBooks Desktop at Reports menu > Employee & Payroll section > Payroll Item Listing report.
Service items must be created in Paradigm with the same name as the GL Account names in QuickBooks. The expense account of the payroll item in Paradigm must be set to the GL account the QuickBooks payroll item should post to. For example, if QuickBooks has a GL Account named “PayrollExpenses:Wages”, a service item in Paradigm must be created and the Product ID must be “PayrollExpenses:Wages”. The expense account for the item needs to be set to the account where the Federal Withholding should be posted to. If the payroll item name from QuickBooks is too long for the Paradigm product ID, a custom item attribute for “PayrollID” can be created, and the QuickBooks item name can be set as the value of that attribute.
For Company Paid Items, Such as
Social Security Company
, Set the Sub Category of the item in Paradigm to “Company”. Set the Sales GL account to the account that receives the liability (credit), and set the expense account to the item that should receive the expense (debit).
In Paradigm > General Ledger > Default GL Accounts > Payroll, the Payroll Bank Account must be set to the Bank Account the checks are written from.

#### Users Logged In

Users Logged In – Paradigm ERP by Paragon – Documentation
Home
Administration and Setup
Users Logged In
To view all of the users logged into Paradigm, go to System > Users Logged In.
This will open the list of currently logged in users. Clicking the “End All” will log all users out of Paradigm, but clicking the red “X” will log out just that user. Users will be given a two minute warning before they are signed out.

#### Activate Receipt Printers and Cash drawers for use in Paradigm

Activate Receipt Printers and Cash drawers for use in Paradigm – Paradigm ERP by Paragon – Documentation
Home
Administration and Setup
Activate Receipt Printers and Cash drawers for use in Paradigm
Follow these steps to enable receipt printers and cash drawers for use in Paradigm on workstations. Currently the only printer brand that works with Paradigm is Epson.
A couple installation files will be needed in order to complete the next steps. These files can be found in the shared installers folder. If they aren’t available there, contact
Paragon Support
to have them added.
First, close any open instances of Paradigm.
Next, run
PosForDotNet-1.14.1.msi
Once that is done, copy the
Enable_64bit_OPOS.zip
file to the desktop of the workstation.
Extract the file to the desktop.
Open the folder and right click on
Fix_OPOS.bat
file and choose to run it as an administrator.
This will open a Windows Power Shell window. It will take a minute or so to run. When it finishes, it will close automatically.
Press any key to continue.
Note:
When Paradigm prints a receipt or opens the cash drawer, OPOS’s software puts a lock on the machine for whichever program sent the request. This means that until the “Locked in” program is closed, the other won’t be able to access the devices.

#### How to Set Up an Employee As a Salesperson

How to Set Up an Employee As a Salesperson – Paradigm ERP by Paragon – Documentation
Home
Administration and Setup
How to Set Up an Employee As a Salesperson
If an employee is not showing up in the list of salespeople on an order, they will need to be set as a salesperson from their detail tab.
To set the default salesperson for a user, see this FAQ:
Default Salesperson
Employee List
First go to System >
Employee List
Then go to the employee and on the general tab select the “Salesperson” check box.
Change “Salesperson” label
To change the salesperson field label on quotes, orders, and invoices, go to System > Company Preferences > Custom Setup > Custom Field Names

#### Turning Off Payment Prompts

Turning Off Payment Prompts – Paradigm ERP by Paragon – Documentation
Home
Administration and Setup
Turning Off Payment Prompts
This FAQ will go over how to turn off prompts that ask to collect credit card information and print receipts if that hardware is not at a particular terminal.
To start, go to System > Local Settings.
Unselect “Ask before printing receipt” to disable the print receipt prompt.
Select the “External Credit Card Processing” check box to disable the collect credit card prompt.
Once those are changed, click “Save” and the settings will be applied.

#### How to Copy List Layouts and Saved Filters

How to Copy List Layouts and Saved Filters – Paradigm ERP by Paragon – Documentation
Home
Administration and Setup
How to Copy List Layouts and Saved Filters
Copying List Layouts
In Paradigm, it is possible to copy one user’s layouts and/or custom filters to another user. To do either, open System > Company Preferences drop down > Custom Setup, then navigate to the ‘Copy Filters and Layouts’ tab.
Next, select the button for ‘Layout’ or ‘Filters’, depending on what is to be copied between users.
After selecting the appropriate option, select a user from which to copy and a user to receive the new settings. The last step is to select the forms that will be affected from the list to the right, and then click ‘Copy Settings’. In the example given below, the layout that Admin has for the
Production
, Purchase Order, and
Purchasing Agent
will be copied to the test user.
Copying A Single Filter From A List
To copy a filter on a list to another user, click the edit button beside the filter dropdown. Then go to the “Filter Settings” tab and click the “Copy filter to users” button. More information on saved filters can be found here:
Set Up Saved Filters (With Helpful Examples)
Then choose the users to copy and the filter to and click “Accept”. If a user has a filter with the same name as one being copied to it, the existing filter will be replaced with the one being copied.

#### How to Customize List Layouts

How to Customize List Layouts – Paradigm ERP by Paragon – Documentation
Home
Administration and Setup
How to Customize List Layouts
Customizing List Layouts
If a list form is customized, it will be saved for the next time it is used. List layouts can also be copied from one user to another (see
How To Copy List Layouts And Saved Filters
). If non-list forms need to be customized, check out this FAQ:
Customize Transaction Form Layouts
Once these changes have been made, close and reopen Paradigm to apply them.
Adding or Removing Column
Fields can be added or removed by right-clicking on the header and searching for the desired field from the ‘Column Chooser’ list.
Select or unselect a column to show/hide it.
Moving a Column
A column can be moved by clicking and dragging the column header it to the desired location. Two blue arrows will indicate where the column will be placed.
Resizing a Column
To resize a column, hover over the edge of the header until the cursor turns into a double sided arrow. Then simply click and drag to resize.
Resetting List Layouts
List layouts can be reset by right clicking the tab header and clicking “Clear saved layout”.
This can also be done by going to System > User Preferences > Layouts. From there, find the one that needs reset and click the red trash can icon.

#### State and ZIP Sales Tax Codes

State and ZIP Sales Tax Codes – Paradigm ERP by Paragon – Documentation
Home
Administration and Setup
State and ZIP Sales Tax Codes
Why use Default State and ZIP Sales Tax Codes?
Setting up default state and ZIP tax codes allows Paradigm to automatically adjust the sales tax on an order just by checking the ship to address. This comes in handy if customers are buying the product and then having it shipped out of state, so then the state tax doesn’t apply to them anymore. Because it is based on the ship to address, the person doing order entry will not have to make an effort to charge sales tax for each order. By default, the tax will be that of the selected customer, but if the state tax codes have been set up, entering a ship to address will cause Paradigm to change the sales tax on the order to that of the selected state or ZIP.
Setting up Default State Sales And ZIP Tax Codes
To set up the state and ZIP tax codes, go to System > Sales Tax Collected.
From here, sales tax codes can be created by entering the sales or ZIP tax code at the top, and applying a tax ID in the bottom section. More info on that can be found here:
Sales Tax Code Setup
State Defaults
To set up tax codes per state, click on the “State Defaults” button.
To save time, set up a state with the configuration of codes that is the most prevalent in all states. After doing this, click ‘Add All States’ and Paradigm will create entries that are set up identically to the first entry, for all states.
After this, create and apply tax codes to Sales Tax 1 for any states that are going to be used.
Any states that need a tax code different from the original state that was created will have to be changed as well. When an order is created and a ship to address is given to it, this is the list Paradigm will check to see what tax codes get applied to the order. The Job Tax fields in the State Tax Codes list are used for Jobs and Job Transfers only.
ZIP Defaults
To set up tax codes per state, click on the “ZIP Defaults” button.
Then select a ZIP code from the drop down and apply a tax ID.
Disable Tax Code by Ship-To State/ZIP Per Customer
To disable Paradigm from automatically selecting a tax code for any customer who gets taxed the same regardless of what state they are in, go to the customer’s detail tab and uncheck the box next to “Select tax code by ship-to State/ZIP”.
Sales Tax Code Setup
Changing The State or ZIP
If the state or zip changes on an order that has the customer set to automatically update tax codes, the tax code will be updated to the default for that state or zip and the following message will appear:
[Order Number] Sales tax codes have been updated.
Ship Vias
When the tax code is tied to the ship to address, it is important that the ship to address be set properly and not missed or abandoned if the ship via changes. To combat this, open the ship via list and check the “Ship to address required” column for any delivery ship vias, and the “Pickup Only” checkbox for any pickup ship vias (
Require Ship to Addresses
Ship Vias
). These settings work together to ensure the ship-to information is correct, and therefore the tax information as well.

#### Paradigm Settings, Preferences, and Security Settings Overview

Paradigm Settings, Preferences, and Security Settings Overview – Paradigm ERP by Paragon – Documentation
Home
Administration and Setup
Paradigm Settings, Preferences, and Security Settings Overview
Paradigm has many settings, preferences, and security options that can be adjusted for your entire company or per user. This is a list of the more commonly used and useful ones. Keep in mind that you may have to close and reopen Paradigm for some settings to apply.
User Preferences (System > User Preferences)
The
salesperson
that populates on orders by default can be changed in the ‘User Defaults’ tab.
The default warehouse for a user can be changed in the ‘User Defaults’ tab.
Prompts that trigger when
receiving payment
(credit card reader, signature, receipt) can be turned off for a particular workstation that doesn’t have the hardware. Learn how
here
Certain tabs can be set to open by default when a user logs in. Learn how
here
The behavior of list screens and the custom search fields at the top are controllable per user in the ‘List Defaults’ tab. Select the field to be searched in the ‘Custom Filter’ columns to change what the two search fields at the top of that list search through.
Email settings can be defined for each user. Learn how
here
Saved Filters are created and set for each user. Click
here
to learn how to set these filters up.
Company Preferences (System > Company Preferences)
In the ‘Sales’ tab, select ‘Show Total Margin field…’ to display a margin field for the entire order.
In the ‘Sales’ tab, select ‘Keep Units Available up to date…’ to cause the ‘Units Available’ field to continually update on order detail.
In the ‘Sales’ tab, use the ‘Credit Holds’ section to influence how credit holds are automatically applied.
In the ‘Sales’ tab, select ‘Allow messages and notes on posted invoices…’ to allow notes to be edited after completion.
In the ‘Purchases’ tab, select ‘Show the print screen…’ to automatically open the print screen after marking a PO as released to a vendor.
In the ‘Default’ tab, use the radio buttons to control what amount the discount is calculated off of for invoices with terms discounts.
Security Settings
Creating Users and User Security
Security can be found by going to System > User Security
From there, go to the user’s permission to set up the security for them. More information on setting up user permissions can be found here:
Creating Users And User Security
Report Settings
Reports that are run from forms or lists (as in clicking ‘Print’ on the order form) are controlled with their own set of permissions per report. To change which users can use which reports, click the pencil icon beside the list of reports. Select the report to change from the list at the top, then add or edit the list of users who can see and run the report at the bottom (note the ‘ALL_USERS’ option).
BE CAREFUL IN THIS FORM!
Changing information other than the users can cause reports to stop functioning. More information on report security can be found here:
Report Security
Changing Form Setup and Tab Stops
Most forms in Paradigm can have their column layout defined at a company level. Learn how to do this
here
. Two useful columns that can be added are the unit price, which displays the net total for that line item instead of a sales price and discount, and the units available, which can be controlled via a company preference (see above) to either store the units available as of the date the order was entered, or update dynamically to the current units available.

#### Set Up Saved Filters (With Helpful Examples)

Set Up Saved Filters (With Helpful Examples) – Paradigm ERP by Paragon – Documentation
Home
Administration and Setup
Set Up Saved Filters (With Helpful Examples)
This FAQ will go over how to set up saved filters for lists in Paradigm.
Many list forms in Paradigm allow for saved filters to be set up to quickly apply filters that are commonly used. These filters can do almost anything that you can dream up for them to do. Complex filters can be created for you by Paragon, but you can create filters for yourself as well.
Creating a Saved Filter
Start by going to the list for the new saved filter. Then click the pencil icon beside the saved filters drop down. In this example the filter will be for the invoices list.
How To Copy List Layouts And Saved Filters
Date To Search
The “Date To Search” can be changed, to specify which date is used in the date range.
SQL Tab
The SQL tab allows SQL “where” statements to be added to filter down the list. These statements must follow SQL syntax. Contact Paragon for assistance building SQL statements for more advanced filtering.
Header
Anything put in this column will act as a where statement. For example if the list needed to be filtered to inventory items that used lots and wasn’t in Fulfillment, the statement for that would be:
ysnUseLots=1 and ysnFulfillment=0
Detail
The first statement can be further filtered down by using the detail tab. This will filter info found in the detail tab. If the list needed to be filtered down to the test product (TEST001), the statement for that would be: strProductID = ‘TEST001’.
So the whole statement together would find inventory items that use lots, aren’t in Fulfillment, and where the product ID is “TEST001”.
Searching for a List of IDs
Another way to use the SQL filter is to look up a list of IDs. This can be done by inserting the list of IDs with an “in” statement in the header section. The list of IDs must setup like the example. The product ID surrounded by single quotes and separated by commons. Then the last product ID does not have a comma after it, and then the whole list wrapped in parenthesis. Example:
strProductID in (‘AAC’,’ABG’,’ABL’,’ABK’)
Common List Filters
Open Orders
Order List
My
Open Orders
Order List
Put the salespersons name in the salesperson box. Then uncheck “Completed” and “Include canceled orders”.
Recent
Order List
Invoice List
Quote List
Choose how recent the transactions should be from the date range list.
Customers With Balance
Customer List
Negative Qty Items
Inventory List
Insert this text into the header section of the SQL tab:
decUnitsInStock<
Unposted Invoices
Invoice List
Posted, not Paid
Invoice List
Open Quotes
Quote List
Received, not Posted
Purchase Invoice
Paste this text into the header section of the SQL tab:
ysnReceived=
1 and
ysnPosted=0

#### Admin Tips and Tricks

Admin Tips and Tricks – Paradigm ERP by Paragon – Documentation
Home
Administration and Setup
Admin Tips and Tricks
Data Utilities
More information on data utilities can be found here:
Data Utilities
To verify that all of the prices stored in
inventory items
price levels
customer special prices
, inventory special prices, and all other locations are correct and have been updated properly with pricing methods applied, use the ‘Recalculate All Pricing’ button in the ‘Inventory’ tab.
Customers, vendors, inventory items, and GL accounts can be combined using the ‘Rename and Delete’ button in the ‘Misc’ tab. Customers and inventory items also have the option to do a batch update. More info on that can be found here:
How To Merge Items/Vendors/Customers
Misc
Edit locks can be orphaned by crashes and force-closings of Paradigm. Use the ‘
Clearing
’ tab to clear these locks for a particular type of transaction.
When entering your check numbers for payments you have made, it is wise to begin them with one or two zeros. Check numbers are handled alphabetically, so the zeros help to ensure that they will always sort correctly.
You can copy saved filters and list layouts from one user to another in the Custom Setup form. Learn how to
here
You can adjust the starting numbers for your transactions, or change the beginning abbreviations in System > Company Preferences > Starting Transaction Numbers.
Note:
don’t keep this form open too long, or else the stored numbers that are displayed will be used, causing errors when closing the form.
Use the audit trail (System>Audit Trail) to monitor activity in Paradigm or to view the history of a transaction. This feature is available in the ‘
View Related
’ form as well, where it will be filtered to only audit trail entries for that transaction.
Each sales tax code in the system must be set as whether or not to tax ‘
Freight
’ or ‘Other’ charges that are entered in the corresponding field on the order forms. Use Accounts Receivable >
Sales Tax Collected
to change this setup.
The sales tax codes that are entered into an order can be automatically entered by Paradigm based on the ship to state. Click
here
to learn more.
The names that display in
Fulfillment
for your employees when completing lines is based on the ‘Nickname’ field in the employee’s detail tab.
For businesses with more than one operating location,
GL departments
can be used to keep track of cost and sales going to each location. Create the departments in General Ledger > Chart of Accounts > GL Departments and assign the Paradigm logins to departments. On each posting transaction, there will be a ‘Department’ field that can be populated to designate which department that transaction should apply against.

#### How to Trigger Searches Inside of Paradigm from an External Source

How to Trigger Searches Inside of Paradigm from an External Source – Paradigm ERP by Paragon – Documentation
Home
Administration and Setup
How to Trigger Searches Inside of Paradigm from an External Source
Paradigm_Search.exe is a program to allow triggering a search within Paradigm from an external program. It is located in the Paradigm Accounting directory (typically C:\ProgramData\Paragon Computing Solutions\Paradigm Accounting) and can be run from the command line as follows:
Paradigm_Search [Phone Number]
For example:
Paradigm_Search 7171234567
The phone number should be numbers only, no formatting. This would bring up information about the given customer or vendor and allow for immediately creating a quote, order etc. for them. This feature functions the same as the search all feature, more info on that can be found here:
Paradigm Search All
Because this search functionality can be used to search for phone numbers, a good candidate for this is to have a phone software search for a the phone number any time the phone rings.
Do Searches in Home Tab
There is an option in System > User Preferences > User Defaults to do the searches on the home tab, instead of a window pop up.
Disable Searches (Local Settings)
To disable searches for a workstation, go to System > Local Settings > Uncheck “Enable External Phone Number Search”

#### Disallow Manual Price Changes

Disallow Manual Price Changes – Paradigm ERP by Paragon – Documentation
Home
Administration and Setup
Disallow Manual Price Changes
In Paradigm, a setting exists to disallow a user from editing costs, prices, and discounts for lines on transactions in Paradigm.
Go to System > User Security. Then from the user permissions tab, check or uncheck the box beside “
Allow editing pricing or discounts in orders and invoices
“. More information on setting up user permissions can be found here:
Creating Users And User Security
This will control whether or not the user can change the sales price, edit the
pricing level
, set a custom price level, costs, and discounts on the transaction line in orders or invoices.
Note:
If this is disallowed, the user will still be able to edit the price in the following cases:
The product is marked as requiring POs in its detail tab, and the PO has already been created for that line.
The
standard discount
button will still be allowed.

#### Zebra and SATO Label Printer Set up

Zebra and SATO Label Printer Set up – Paradigm ERP by Paragon – Documentation
Home
Administration and Setup
Zebra and SATO Label Printer Set up
To access the Windows Printer Settings, go to Start Menu > “Printers and Scanners” or however it is termed in your Operating System and find the label printer. Either “click > Manage” or click on the little arrow and it should take you to an option window where you can choose Printer Properties and Printer Preferences.
Zebra
Open Printer Properties > Printer Settings and check “Always use Driver Settings”.
Also go to Printer Properties > Advanced > Printing Defaults – set your page size correctly.
Make sure the Printing Preferences > Options matches the above Printing Defaults.
Open Printer Preferences > Advanced Setup and check “Use Printer Settings”.
SATO
Open Printer Properties > Driver Settings > Settings and check “Always use driver settings”.
Then go to Printer Properties > Driver Settings > Configure Printer and set the page size correctly.
Also make sure that Printing Preferences > Page Setup matches the Printing Defaults (also is Portrait).

#### Default Salesperson

Default Salesperson – Paradigm ERP by Paragon – Documentation
Home
Administration and Setup
Default Salesperson
This FAQ will go over how to set a default salesperson. Note that the user will need to have permission to change the salesperson on a transaction to do this.
To set up an employee as a salesperson, see this FAQ:
How to Set Up an Employee As a Salesperson
Default Salesperson
Log in as the user who the default salesperson is being set up for or as an admin switch the “View As” drop down to the user you want to set this on.
Then go to System > User Preferences > User Defaults and set the Default Salesperson.

#### Auto Attach

Auto Attach – Paradigm ERP by Paragon – Documentation
Home
Administration and Setup
Auto Attach
This feature allows an Auto Attach Path to be specified in User Preferences. When set, when the
attachment
screen is opened, it will auto attach any files in this folder. If files are added to the folder while the attachments screen is open, they will also be attached. After files are attached, they are moved to an Archive subfolder.
Example Use Case:
Scanning in packing lists/invoices and attaching them to purchase invoices in Paradigm.
Setting Up Auto Attach
To use the Auto Attach feature, first create a folder in the desired location for the Attachments that you want to attach to documents or line items in Paradigm.
Then go to System >
User Preferences
> User Defaults and populate the “
Auto Attach Path:
” field with the path of the folder you created.
Using Auto Attach
To attach files to a document in Paradigm, click this button in the header on a transaction:
To attach files to a line item, click the button shown below.
As stated above, any files that are already in the folder that you mapped in User Preferences and any files that you add to the folder while the Attachments window is open will show up in the Attachments list.
The next button in the header shown below will display a combination of document and line item attachments, regardless of whether they were added through the Auto Attach feature or attached through “Add Attachment” in the Attachments window.

#### Installing Topaz Signature Pad

Installing Topaz Signature Pad – Paradigm ERP by Paragon – Documentation
Home
Administration and Setup
Installing Topaz Signature Pad
This FAQ will go over how to install and use a Topaz signature pad. Currently the Topaz T-LBK462 series signature pad is supported, more info on that can be found here:
T-LBK462
. If the signature pad is being used on an RDC, it must be a BSB model. More info about software, hardware, and FAQs can be found on Topaz’s website:
Topaz Systems Inc.
Installing a Signature Pad on a Local Workstation
To start, the signature pad must be disconnected from the computer.
Click this link and select the model number that matches the one on the back of the signature pad:
Topaz SigPlus Software
Follow the download steps and run the installer.
During the install, select yes when it asks if the DemoOCX shortcut is needed.
When the install finishes, open the configuration file (C:\Windows\SigPlus\SigPlus.ini), and update TabletComPort to “1” and save.
Then plug in the signature pad and open the device manager.
If “bsb”
is not
in the model number – There should be a section for Ports. If not click “Action” at the top and select “Add Legacy Hardware” to add a new port. Set the new port to COM1.
If “bsb”
is
in the model number – The signature pad should now show up as “USB Serial Port (COM9)”.
Then right-click on it, select Properties > Port Settings > Advanced. Then set the COM Port Number to “COM1”
If another device is already on COM1, just switch the other device to another unused port.
Open DemoOCX on your desktop and click Start. Anything drawn on the signature pad should show up.
Test in Paradigm as well then. This can easily be done by going to Accounts Receivable > Point of Sale and start a new sale. Then at the bottom select the Get Signature button and see if the signature appears.
When collecting a customers signature, the name of the person signing can be typed in as well, since signatures can be difficult to read.
Installing a Signature Pad on a RDC Machine
To use a signature pad on an RDC machine, it
must
be a
bsb
signature pad.
Right click on the link for the Remote desktop connection. Click Edit.
In Local Resources, choose more and then choose to forward ports for that connection. If the user is currently logged into the RDP machine, you will need to sign out and then sign back in for this to take effect.
If this is the first time setting up a signature pad for the RDP machine, install the Sigplus.exe using install mode.
Log into the server using an RDC as Administrator or an equivalent account.
Download and save SigPlus to your server:
Topaz SigPlus Software
From a CMD line, type “Change user /install” to enter “Install mode”. Install “SigPlus.exe”. Choose the tablet model during install and the COM1 connection type. After installing, from CMD line, type “Change user /execute” or restart server to place server back into “Execute mode” before using the application.
Copy the “SigPlus.ini” from C:\Windows on the server and place it into the root of C:\ on the server. Then rename it to “SigPlusRoot.ini”. Double-click this new “SigPlusRoot.ini” file to open it, as seen here.
Change TabletComPort to “1” and save it.
Open DemoOCX on the RDP and test to see if you can capture signatures.
More info on signature pads on an RDC machine can be found here:
Topaz RDC Info

#### Restore Deleted Transactions

Restore Deleted Transactions – Paradigm ERP by Paragon – Documentation
Home
Administration and Setup
Restore Deleted Transactions
Once an order is deleted, it is gone for good and there isn’t a way to “undelete” it. Consider disabling the delete permissions for most users to prevent this from happening again. Users without delete permissions are still able to mark an order as “Cancelled”, which does effectively the same thing as deleting the order, but rather than removing it completely, it leaves it in a state where it can be brought back if need be.
System > User Security. More information on setting up user permissions can be found here:
Creating Users And User Security

#### Paradigm Shortcut – Auto Sign In

Paradigm Shortcut – Auto Sign In – Paradigm ERP by Paragon – Documentation
Home
Administration and Setup
Paradigm Shortcut – Auto Sign In
This FAQ will go over how to set up the Paradigm Shortcut to automatically log in, remember the username, and other ways to speed up the login process.
Setting Up Auto Sign In
An optional first step is to copy and paste the Paradigm desktop shortcut, so that Paradigm can be launched without auto sign.
After copying the shortcut, right click on the Paradigm desktop shortcut and select properties.
Auto Sign In
To have Paradigm to automatically sign in when it’s run, go to the “Target:” field and put in all the login info at the end after “….ParadigmClient.exe”. Type in the username first, then password, then the Paradigm ERP Server URL in that order separated by a single space.
Example:
"C:\ProgramData\Paragon Computing Solutions\Paradigm Accounting\Paradigm_Client\ParadigmClient.exe" admin 123 http://ServerURL/api
The Paradigm ERP Server URL can be found in
Company Preferences > Paths
Shortcut > Target
Then click apply and then continue on the Access Denied popup.
After that open up Paradigm to make sure the changes applied.
Auto Fill URL and Username
In order to have Paradigm fill in everything but the password, put just the username and Paradigm ERP Server URL after the “….ParadigmClient.exe” separated by a single space.
Example:
"C:\ProgramData\Paragon Computing Solutions\Paradigm Accounting\Paradigm_Client\ParadigmClient.exe" admin http://SerrverURL/api
Then click apply and then continue on the Access Denied popup.
After that open up Paradigm to make sure the changes applied.

#### Default Printer

Default Printer – Paradigm ERP by Paragon – Documentation
Home
Administration and Setup
Default Printer
This FAQ will go over how to set the default printer in Paradigm.
Local Settings
Go to System > Local Settings > Default Report Printers and choose the corresponding
Report
Name and Printer Name.
These settings will override any printer the user has selected.

---

[← Back to Contents](#table-of-contents---click-to-navigate)

### WORKFLOW 10: GENERAL SYSTEM FEATURES {#general-system-features}

[← Back to Contents](#table-of-contents---click-to-navigate)

**Purpose**: Common navigation, dashboards, and features

**When You Use This**:
- Using the Paradigm dashboard
- Creating custom reports
- Searching and filtering data
- Using keyboard shortcuts

Source: https://docs.goparagon.com/kb-category/general/

#### Emailing From Paradigm

Emailing From Paradigm – Paradigm ERP by Paragon – Documentation
Home
General
Emailing From Paradigm
Paradigm has the capability of sending emails directly from transaction forms and list. This how-to will cover setting up customers to receive
statements
by email instead of mail, emailing from various forms and lists, resending emails, and email signatures.
Instructions on setting up to email from Paradigm can be found here:
Set Up Emailing From Paradigm
Sending Emails
After defining the
email settings for a user
, they are ready to begin sending emails through Paradigm. Most print forms have a button for ‘Email’ which will add the selected report as an attachment on the email.
After clicking ‘Email’, the email or emails with top priority from the contact methods list will appear in the email to field. Then use the form to change the email as needed, and click ‘Send’. Note that clicking the buttons for ‘To’, ‘Cc’, or ‘Bcc’ will open a list of the email addresses that have been entered into Paradigm, filtered first to the email addresses for the customer/vendor the email is going to. At minimum, a ‘To’ or ‘Cc’ email is required before sending an email.
The “Email to salesperson” button can be used to send an email to the salesperson on the current transaction.
Attachments
To send attachments on the order in the email, click the “Show
Attachments
” button on the print pop up. This will display a list of the attachments on the order and the attachments on the items. If the checkbox beside an attachment is selected, it will be added to the email.
Customer Send to Email Address
If statements should be sent to a separate email address, click the “Edit” button highlight below and enter in the “Send Statement Emails To:” field [2]. If the entered email is invalid, it will prompt the user that the entered email is invalid.
Emailing from Lists
Batch Emailing
To email from a list form, first filter the list to the records to run the
report
against, then select a report from the set of available reports at the bottom of the form. Then select the email icon from the bottom. Information on how to set a vendor’s default payment email can be found here:
Payments Default Email Address
. Information on how to set a customer’s default statement and batch email can be found here:
Customer Batch Email Address
Alternatively, use the ‘+’ to the left of each line in the list. Then hover the mouse over “Selected Items” and click the print icon at the bottom. From there select the email icon.
After gathering any information needed for the reports, Paradigm will open the ‘Email Batch’ list, with each email listed. Emails that are missing addresses will show in red and must be corrected by clicking the folder for that email before sending. After verifying the list of emails, click ‘Send’ to send all of the emails from the list. More info on the email batch form can be found here:
Email Batch Form
Online Payments and Confirmations
If the
online payments and confirmations
feature has been enabled, this pop up will be shown when batch emailing invoices to add a payment link in the email.
“Right Click” Option Emailing
Emails can also be sent from the list by “right clicking” the transaction. More information on right click options can be found here:
Right Click Options In Lists
Mass Email
Emails can also be sent to a list of email contacts without attaching a report (annual updates, price increase notifications, etc.) Filter to the contacts to email, select the ‘Mass E-Mail’ button, and click “Create Emails”. If an email is generated through this feature but there isn’t an email address, no record will be created for it in the email queue list.
To set a mass email for a customer or vendor, enter one in the “Send Batch Email To” field. Double clicking that field will automatically fill in the email with the highest priority set. If the entered email is invalid, it will prompt the user that the entered email is invalid.
Viewing Sent Emails
If an email fails to send for any reason, the user who sent it will be notified that they have an unsent email and will be asked to edit and resend it. The same list can be accessed at any time by opening the
Email Queue
list.
Sent emails can also be viewed on a transaction by going to the “Emails” tab. This will display any emails for that transaction, which user sent it, and when it was sent.
Paradigm Emailer
Paradigm sends emails from the server, via a program that is set to check for unsent emails at a regular interval. This program will attempt to send a failing email up to four times, pausing a minute between each attempt, but if it fails to send the fourth time it will stop attempting to send it. If a contact on a batch email does not have an email on their contact, it will appear on the list in red.

#### Conversations

Conversations – Paradigm ERP by Paragon – Documentation
Home
NEW!
Conversations
Home
General
Conversations
The Conversation feature in Paradigm provides an internal way for users to communicate messages and attachments with each other. The goal of the feature is to allow users to collaborate more easily and effectively without needing to leave Paradigm to find and share information.
Important
Conversations is
not
intended to be a tool for protecting private information. The goal of the feature is easy communication and transparency. It is not recommended to share sensitive information via Paradigm conversations.
The organizational structure puts each conversation into a thread that helps keep track of the discussion. Conversations can be shared with individual
Users
, multi-user
User Groups
, linked to
Customers
, Vendors, or
Jobs
, or linked to any type of Transaction, including Quotes, Orders, Invoices, Requests For Quote, Purchase Orders, and Purchase Invoices.
Where to Find Conversations
On the Home Page
The Conversation Panel is on the right side of the Home page in Paradigm. There are three buttons at the top of the panel, and below them a space for viewing recent conversations. This is designed to be a way to get a quick overview of what’s happening in the most recent conversations.
The four buttons at the top of the panel:
Open Conversations – Opens the Conversations window.
New Conversation – Opens the Conversations window to start a new conversation.
Refresh – Updates the conversations list.
Collapse Conversations – Collapse the list of recent conversations.
The Conversation Sidebar
On the far right side of any Transaction page (Quote, Order, Invoice, Purchase Order, etc.), there is a button with the text “Conversations” on it. Clicking this will open the Conversations sidebar panel. To hide the sidebar, click the Right Arrow >> button.
If there is a conversation linked to that quote or order that you have permission to see, the conversation history will load into the panel. If there is no available conversation yet linked to that quote or order, the panel will allow you to start a new conversation that is linked to that order.
Convert Transactions With Conversation
When a Conversation has been linked to a Transaction, such as an Order, the conversation will automatically be linked to any other transactions that are created by
converting the original transaction
. Using the “Convert” button in the ribbon to, for example, Convert an Order to Invoice will link the conversation to the new Invoice. When the program opens the newly created Invoice, the Conversation Sidebar for both the original Order and the new Invoice will show the same linked Conversation.
The Conversation Tab
On the Details page for Customers, Vendors, and Jobs, the last tab is labeled “Conversations.” This tab displays all conversations linked to the selected customer. You can view and start conversations related to the customer directly from this tab.
The Conversation Window
The Conversation Window offers the most full experience for viewing and managing conversations. It can be opened two ways: from the button in the Conversations Panel on the Home page, or from the button in the ribbon toolbar.
Home Page Search
Conversations can be viewed for a record when using the home page search.
Message Notifications
Sending messages that are visible to other users triggers audible sounds and visual notifications.
Message Sounds
When a message arrives within a user’s visibility scope, the user will hear a notification sound.
Unread Message Badge
Sending a message will cause notifications to appear for other users in the conversation. A Toast message will appear on screen, and an unread message badge will appear multiple places. When a toast message appears for a conversation that links to a single item, clicking on the toast message will cause Paradigm to open the page for the linked item.
Toast Notification
Unread Message Badge on the Transaction Tab
Unread Message Badge on the Home Page
Unread Message Badge in the Conversation Window
Unread Message Badge on the Windows Taskbar
Additional Message Visuals
Users can elevate the prominence of a message in two ways.
Messages that include a tag for a specific user display a red “@” character in the reading pane above the message This is visible only to the tagged user.
Toggling the Important button below the message text input box before sending causes the message to show in the reading pane with the word “Important” above it in red text. When important messages are received, the notification sound is different than the normal notification sound.
Organizing Conversations
Conversations can be organized and linked using several tools.
Conversations can be started directly from a transaction or customer page, which automatically links the conversation to that document.
In the main Conversations window, Transactions, Customers, Vendors, Jobs, and Users can be linked to a conversation by sending a message in the conversation that includes the selected tag.
There is no limit on the number of items to which a conversation may be linked.
Setting a type for a conversation allows it to be filtered through the Types filter.
Note
The intended link is not created until the message is sent.
Conversation Visibility
Once a Conversation is linked to a Transaction, Customer, Vendor, or Job, the conversation in its entirety is visible in the Conversation Sidebar or Tab for all users. To make a conversation visible to additional users, or to draw a user’s attention to it, you can tag the user (or a User Group in which they are a member) in the conversation. This will add the User or User Group to the Conversation’s listed Users, and cause the user to receive notifications for new messages in the conversation.
Note
The entire message history of a conversation is always visible.
Using the Selector Menus
Tag Selector
Typing the “@” symbol into the message text input box triggers the Tag Selector menu to appear. Note that this only triggers the menu if the message text input box is empty, or the character in front of the insertion point is a space. From here, there are a number of different ways to get a specific tag selected and into the message text input box. Following the “@” symbol, further typing refines the search until the intended item is found.
When the correct tag is highlighted, pressing “Enter” or double-clicking on it puts the tag into the message text field.
For example, in this illustration, typing “@” and then beginning to type the username “Admin” causes the Tag Selector to filter down to showing the intended user. Pressing “Enter” adds the tag to the text input box. Then, typing “@” to bring up the Tag Selector and typing “q/” causes the list to show Quotes. Pressing “Enter” adds the tag to the text input box for the quote that was focused.
Searching for Transactions by typing a few digits from the
Transaction ID
is also supported. The program tries to match the digits with Transaction IDs by comparing against the last digits in IDs. For example, typing in “@34” will match all Transactions that contain the digits “34” at the end of the ID, but not Transactions that contain “34” in the middle of the ID.
User Selector
Clicking on the “Tag Users” button will show the User Selector menu. All users are loaded into the list. To filter down the list, type letters into the filter row above the data in the table. To add as many users as intended, click the plus buttons beside the correct rows. Until the message is sent, the users are not added to the conversation.
User Groups
are helpful for adding any number of users with a single action.
Transaction Selector
Clicking on the “Tag Records” button makes the Transaction Selector menu appear, and typing some letters into the search text input box causes items to load. To add the intended item to the message, click the plus button on the correct row. This puts the tag link into the message text field. The conversation is not linked until the message is sent.
When the Transaction Selector is initially opened, before any search text is entered, it loads the currently open tabs, and any available
Related Transactions
to give suggestions. Typing text into the search text input box inside the menu functions as previously described, searching through Transactions to link.
Note
Clicking on a link in a conversation will open the item.
Removing Links
Above the Reading Pane, the display for “Users” and “Visible in” (Transactions, Customers, etc.) are each visible above the Reading Pane. Clicking on them will open a menu that displays the Users or items to which the conversation is currently linked. To remove a link, click the red X next to the link. From the “Visible in” menu, an item can be opened by clicking the Folder icon next to the link.
Filtering Conversations By User
If a user is part of the Admin User Group, the user filter will show at the top of the Conversations window. By default, this shows the username of the logged-in user, and the list of conversations is filtered to only show conversations that the user sees. To view the conversations that load by default into a different user’s view, click the user filter and select the user from the list. To see all conversations in the system, set the user filter to “All.” This view shows every conversation in the system, regardless of tags or links.
Conversation Type
Conversation types can be set and changed for conversations. This allows an easier way to control visibility of conversations. Setting a type for a conversation causes the left border of the conversation to change color to match the type color. These color codes make it easier to see which type a conversation is linked to. Details on setting up Conversation Types are discussed in a later section of this article.
Clicking the filter button will show the Types Filter sidebar.
Searching Conversations
To search all conversations, type keywords, participant names, or linked record IDs into the search bar at the top of the Conversations window. The upper section of the results will list out any messages that match the search criteria, while the lower section will display conversations that match the search criteria. Click on a message or conversation in the results to open it in the reading pane.
To search through the messages within the current conversation, click the magnifying glass located to the right of the conversation title above the reading pane, or press Ctrl + F. This opens a search input box. To search within the current conversation, type keywords into the search box, and press Enter or click the magnifying glass beside the search input box. The result panel will show all messages within the current conversation that match the search criteria. Click on a message in the results to jump to that message in the reading pane.
Managing Conversations
Leave A Conversation
To leave a conversation, open the Conversation Window and right-click on the conversation in the history list. Select “Leave Conversation” from the context menu. A conversation must have a link to a User or an item. This option will not be available if the current user is the last remaining participant in the conversation, and the conversation is not linked to any items. In that case, the conversation must be ended instead. Leaving
Mark A Conversation As Ended
Conversations can be ended by any participant in the conversation. Once ended, the conversation is moved out of the active list but can still be accessed by enabling the “Show Ended” filter.
If a user does not have Admin-level permissions and is not a participant in the conversation, this option will not be visible.
View Ended Conversations
To view ended conversations, enable the “Show Ended” filter in the Conversations window. The conversation list will change from showing open conversations to displaying ended ones. Select a conversation to read its messages.
Reopen a Conversation
To reopen an ended conversation, select it from the Conversation History list, and type a new message in the input area. Before Paradigm sends the message, it will show a confirmation prompt. The prompt gives the option to send the message in a new conversation, or to reopen the ended conversation and send the message there.
Conversation Titles
Additional Message Options
There are a number of different actions available to help with messages. The available actions include message attachments, message replies, and message forwards. Messages can also be copied to the clipboard or deleted.
Hovering on a Message
When the mouse pointer hovers over a message, a menu appears above it that contains three action buttons: Copy, Reply, and Forward. The first icon is Copy, which looks like a square. Selecting it places all of the message text onto the clipboard. The second icon is Forward, with an arrow pointing to the right. Selecting it opens a dialog box that puts the forwarded message into the attachments area, and allows entering additional text in the message input area before sending. The third icon is Reply, with a left-pointing arrow. Selecting it puts the message text into the attachments area within the current conversation, and allows entering additional text in the message input area before sending.
Right-Clicking On A Message
Right-clicking a message opens a context menu the following options: Copy, Forward, Reply, Create Task, Edit, and Delete. These buttons give the user the ability to copy the message text, reply directly to the message, forward it to another conversation, create a task from it, edit, or delete it. The copy, forward, and reply options function as previously described.
Selecting Create Task triggers a new task to be created. Paradigm opens the
Edit Task
dialog with the text of the selected message in the “Notes” field, and the “Assigned User” set to the currently logged in user.
Clicking edit will allow the user to adjust an already sent message. Any message that a user has sent can be edited by the user that sent it, there is not a time out period on when that can be edited. The text “Edited” will appear above any edited message.
Clicking the delete option immediately removes the message from the conversation for all participants.
Important Message
A message can be marked as important when the user needs a response right away. If the user preferences have it enabled, this will show a message pop up and cause the notification sound to play until the receiving user(s) have closed the message pop up or open the conversation.
Conversation Attachments
Conversations support adding attachments to messages, allowing users to share files directly within the chat.
To add an attachment through the Windows File Selection dialog, click the attachment button paperclip icon located in the message input area. This opens a file selection dialog where you can choose one or more files from your computer.
Files can be added via drag-and-drop directly into the message text input box.
To insert a file from the system clipboard, click to focus in the message text input box, and press Ctrl + V, or use the Paste option from the right-click context menu.
When attachments have been added to a message, a preview panel will display a thumbnail of the file above the message.
To remove an attachment from a message before sending it, click the X in the corner of the attachment thumbnail.
To change the format of any text in a message, select the text and use the formatting toolbar buttons. Standard keyboard shortcuts also work, such as Ctrl + B for bold.
Conversation Settings
Enabling or Disabling Conversations
Conversations can be enabled or disabled in
Company Preferences
Add-Ons
. The check box to adjust it is towards the right side of the Add-Ons page.
Setting up Conversation Type
To manage the Conversation Types, navigate to System >
Company Preferences
. The Conversation Types button is within the Company Preferences ribbon buttons. Click the Conversation Types button to open the dialog that allows editing the Types and colors.
User Preferences
The ability to set the options for how Paradigm behaves on the local workstation can be found within System >
User Preferences
> Conversations. Within this portion of the User Preferences dialog, the user can customize the default behavior and notification options.
User Security
The ability to set the options for how Paradigm behaves on the local workstation can be found within System >
User Security
. Two permissions can be found within the General Permissions portion of this page:
Allow viewing conversations as admin
Allow using external conversations
Behavior Settings
Auto open the Conversations Sidebar
: When enabled, the Conversations sidebar will automatically open if a transaction is accessed that has an open, linked conversation. This helps ensure users are immediately aware of relevant discussions tied to the transaction.
Notification Settings
These settings control how users are alerted to incoming messages, especially important ones.
Show Popup and Repeat Sound for Important Messages
: Displays a popup and continues to repeat the notification sound until the notification is addressed. This feature is useful for situations in which the user is not present at the screen at all times, such as a production employee.
Repeat Interval
Configurable between 1 and 30 seconds.
This applies only to messages marked as “Important.”
Treat All Messages as Important
: When enabled, all incoming messages, regardless of priority, will trigger the same popup and sound repetition behavior as important messages.
Enable Sounds
: Toggles all sound notifications on or off.
Sound Settings
Incoming Message
: Use this drop down menu to choose the sound that will play when a message is received.
Incoming Important Message
: Use this drop down menu to choose the sound that will play when a message that is marked “Important” is received. If “Treat All Messages as Important” is turned on, this sound will be used for all messages.
Sound options are limited to built-in choices.

#### File Management & Attachments

File Management & Attachments – Paradigm ERP by Paragon – Documentation
Home
General
File Management & Attachments
This FAQ will go over Paradigm file management and adding attachments to orders.
Attachments
To add an attachment or view the current attachments on a form, click the “Attach” button in the header. Attachments can automatically be pulled in from a specified file when the attach form is opened. To set up the Auto Attach feature, follow this FAQ:
Auto Attach
From here, the list of file attachments will be shown. Attachments can be added by clicking the “Add Attachment” button, or by dragging and dropping them into the popup.
Existing attachments can be added to the current transaction by using the “Link to Existing” button and searching for the order that has the attachment that is needed.
Drag and Drop
Files can also be added by simply dragging and dropping the file to the “Drop to Attach” section.
Once a file is attached, the paperclip will turn green in the header.
Detail Lines
Attachments can also be added to a specific detail line by clicking the paperclip icon on it.
Once a file is attached, the paperclip will turn green.
If the line has an
item image
, the paper clip will be blue.

#### Themes

Themes – Paradigm ERP by Paragon – Documentation
Home
General
Themes
This FAQ will go over the available themes in Paradigm and how to switch between them.
Switching Themes
To switch between themes, go to System > Local Settings > Misc. > Application Theme > Choose a theme from the drop down. This is a local setting so shared users can choose their preferred theme at their workstation.
To apply a theme, all tabs must be closed. A pop up will be shown to have the user confirm this:
Applying the them requires closing all tabs. Do you want to continue?
Available Themes
Light
Dark

#### Reset the Directory for Paradigm

Reset the Directory for Paradigm – Paradigm ERP by Paragon – Documentation
Home
General
Reset the Directory for Paradigm
This FAQ will go over how to reset the Paradigm directory.
Important
Before doing this, go to Paradigm and go to Help >
Get Installer Link
and download the updater.
To reset the directory on a standard local work station, right-click the Paradigm shortcut and select “Open file location”.
Alternatively, go to:
C:\ProgramData\Paragon Computing Solutions\Paradigm Accounting
and delete the “Paradigm_Client” folder.
3.
Then click on “Paradigm Accounting” in the address bar.
4.
From there, delete the “Paradigm Client” folder.
5.
Then run
Paradigm update file
, and the directory will be reset.

#### Paradigm Log Files

Paradigm Log Files – Paradigm ERP by Paragon – Documentation
Home
General
Paradigm Log Files
This FAQ will go over how to find Paradigm log files. When getting a log file from the folder, be sure to get the file that matches with the date of when the problem occurred.
Log Files
Send Log File
To email the log file directly to Paragon support, go to System > Send Log File. Note that this requires the user to be set up to email out of Paradigm, more information on that can be found here:
Set Up Emailing From Paradigm
Then add a message if needed and click “Send”.
Open Log File Folder
Click this button to open the log file folder. This folder contains all of the log files for the workstation.

#### Exporting From QuickBooks

Exporting From QuickBooks – Paradigm ERP by Paragon – Documentation
Home
General
Exporting From QuickBooks
Customers
Customer Export From QuickBooks Online
1.
In QuickBooks Online, go to Reports > Standard Reports.
2.
In the Sales and Customers section, click Customer Contact List.
3.
Click Columns, and then choose additional fields as needed.
4.
Click Export > Export To Excel.
Vendors
Vendor Export From QuickBooks Online
1.
In QuickBooks Online, go to Reports > Standard Reports.
2.
In the Expenses and Vendors section, click Vendor Contact List.
3.
Click Columns, and then choose additional fields as needed.
4.
Click Export > Export To Excel.
Items
Item Export From QuickBooks Online
1.
In QuickBooks Online, go to Reports > Standard Reports.
2.
In the Sales and Customers section, click Product/Service List.
3.
Click Columns, and then choose additional fields as needed.
4.
Click Export > Export To Excel.
Payroll Exports
Using the Paradigm Payroll Importer

#### Transaction List Summary Columns

Transaction List Summary Columns – Paradigm ERP by Paragon – Documentation
Home
General
Transaction List Summary Columns
This FAQ will go over transaction list summary columns in Paradigm.
Information on how to view attributes in a list can be found here:
Viewing Attributes on A List
Total Weight
This column shows the total weight on the transaction. This is available on the purchase invoice, purchase order, sales order, and invoice list.
Fulfillment Progress
This column shows the pulling & shipping progress from
Fulfillment Pro
. This is available on the sales order list.
Completion Status
This column shows the current completion status on the transaction. This is available on the sales order and manufacture order lists.
Available Statuses
CANCELED: If the order has been canceled.
ON HOLD: If it is not released to manufacturing.
RELEASED: If it is released to manufacturing.
MANUFACTURED: All manufacturing is done.
MFG AND PULLED: All manufacturing and all pulling is done.
COMPLETED: If the order has been completed.
Total Line Count
This column shows the number of lines on the transaction. This is available on the sales order, invoice, purchase order, and purchase invoice lists.
Lines Remaining to Manufacture
This column shows the number of lines remaining to be manufactured on the transaction. This is available on the sales order list.
Margin Total
This column shows the total margin for the entire transaction. This is available on the quote, order, and invoice lists.

#### Paradigm Update Blocked

Paradigm Update Blocked – Paradigm ERP by Paragon – Documentation
Home
General
Paradigm Update Blocked
This FAQ will go over one of the reasons that the Paradigm update may be failing. More information on updating Paradigm can be found here:
Update/Install Paradigm
Windows Defender
When Windows Defender blocks the Paradigm updater, a message will appear:
Unable to execute file in the temporary directory. Setup aborted. Error 5: Access is denied.
A message will also be shown in the protection history screen in Windows Defender:
Contact your IT company to set up a whitelist for the Paradigm update file.
Access Is Denied
This can happen if the file is in use when the updater tries to run, or if the user has not been granted modify permissions to their own installation file at one of the two file paths:
This Path can be found by right clicking on the Paradigm shortcut and selecting “Open File Location”. Then move up 2 folder levels to “Paradigm Accounting”.
Crystal Reports
If Paradigm ERP is opened and it states that it requires “Crystal Reports” to function, try the following below:
Run the installer as an “Administrator”.
This is done by right clicking the installer and choosing “Run as administrator”.
If that does not work, go to Windows programs and uninstall any Crystal Reports installers, then run the installer again.
If step #2 does not work, try running this manual installer:
Click here to download Crystal Reports Installer
If step #3 does not work, try restarting the workstation and running the file again.
If step #4 does not work, see if Windows Security or Smart App Control is blocking that file.
If these steps do not resolve it, contact
Paragon Support

#### Right Click Options

Right Click Options – Paradigm ERP by Paragon – Documentation
Home
General
Right Click Options
This FAQ will go over the Right Click Options in Paradigm.
“Right Click” List Actions
Several actions for items in lists are available by right clicking on the item in the list, including emailing. More information on emailing from Paradigm ERP can be found here:
Emailing From Paradigm
– Quotes
– Orders
Convert To Invoice
– When this option is used, the list of converted invoices will be shown after conversion is complete.
– Invoices
– Customer Prepayments
– Purchase Orders
– Purchase Invoices
Selecting Multiple
Shift or CTRL can be used to select multiple lines at once. This can be useful when posting numerous invoices, releasing multiple orders, or opening transactions.
When multiple invoices are opened at once, they will be show in the same tab and can be switched in between by using the arrow in the bottom left.
If a line is opened individually and it is currently open in a tab with multiple lines, it will be shown in the already open tab.
“Right Click” Transaction Line Actions
– Item
– Bundle

#### Customize Column Layouts

Customize Column Layouts – Paradigm ERP by Paragon – Documentation
Home
General
Customize Column Layouts
This FAQ will go over Columns in Paradigm.
Adding and Removing Columns from Lists
Use the “Column Chooser” button at the bottom of list screens to quickly add and remove columns.
The “Column Chooser” can also be accessed by right clicking on a column header.
Rearrange Columns
Columns in a list can now be rearranged by simply clicking and dragging the column header into its new position.
Resize Columns
Easily resize columns in Paradigm by hovering your cursor over the border between columns.

#### Record Duplication

Record Duplication – Paradigm ERP by Paragon – Documentation
Home
General
Record Duplication
This FAQ will go over how to duplicate transactions. Paradigm also has feature to “favorite” transactions to be duplicated, more information on that can be found here:
Favorited Transactions
Duplicating Transactions
To duplicate a transaction, click the “Duplicate” button in the header or click the drop down to select “Duplicate Without Items” instead. This will duplicate the transaction header information, but none of the line items will be duplicated to the new transaction.
A pop up in the right corner of the screen will appear, and then new duplicated transaction will be opened.
Duplicating Old Transactions
When duplicating an old transaction (quote, order, invoice, etc.), the new duplicated transaction will get the same products and quantities as the old one but will be updated with current prices. The “Valid Until” date will also be updated, as well as posting accounts, assemblies, machine assignments, etc. Duplicating a transaction does not make an exact copy of the old transaction, it creates a new transaction with all the same items and details as the original but with updated information as necessary.
Duplicating a Transaction with a Discontinued Item
When a transaction with a discontinued item is duplicated, a pop up with a list of the discontinued items on it will appear and the items will be added to the new order as comments.
If a discontinued item is duplicated, and it is set as an alias for a valid item, a pop up will appear with what item is replacing the discontinued one and it will be replaced on the order when it is duplicated.
Duplicating Records
To duplicate a record such as a customer, vendor, or item, click the “Duplicate” button in the header. Paradigm will prompt for a new unique ID for the duplicated record, then create it.

#### Error – Posting Aborted to Prevent Double Posting

Error – Posting Aborted to Prevent Double Posting – Paradigm ERP by Paragon – Documentation
Home
General
Error – Posting Aborted to Prevent Double Posting
“Posting aborted to prevent double posting.”
This error message will show only if the transaction is unposted, but there are posted General Ledger records for it. This is a failure case that
Paragon Support
will have to assist in resolving.

#### Audit Trail

Audit Trail – Paradigm ERP by Paragon – Documentation
Home
General
Audit Trail
This FAQ will go over the Audit Trail feature in Paradigm. This features allows users to view activity history and can be found by going to System > Audit Trail
This can also be opened with the following
keyboard shortcuts
CTRL + SHIFT + A:
Highlighting text (i.e. an order number) and then using this shortcut will the open audit trail screen for the highlighted text.
CTRL + F3:
Pressing this shortcut will open audit trail for the transaction that is currently open.
Audit Trail Screen
The Audit Trail shows activity history company wide (every user). This list can be filtered by predetermined date ranges or custom date ranges.
Focused Audit Trail
Focused audit trail are accessible in transaction screens. Focused audit trail can be viewed by everyone, whereas the full audit trail can only be seen by admins. The focused audit trail is just for the transaction included in “View Related” for the given transaction.

#### Tab Controls

Tab Controls – Paradigm ERP by Paragon – Documentation
Home
General
Tab Controls
This FAQ will go over the options that are shown for a tab in Paradigm. To view these options, right click the tab header.
Dock
– Docks the tab in Paradigm.
Float
– Moves the tab into a separate window.
Close
– Closes the selected tab.
Force Close
– Force closes the selected tab and clears the cached tab.
Close all but lists
– Closes all tabs, except for lists.
Close all but this
– Closes all tabs, except for the selected tab.
Duplicate Tab
– Duplicates the selected tab. This is only available on list tabs, and will copy over any filtering to the newly duplicated tab.
A copy of the list can also be opened by holding CTRL and then clicking the button in the ribbon.
Clear saved layout
– Clears the
saved layout
for the tab.

#### Keyboard Shortcuts

Keyboard Shortcuts – Paradigm ERP by Paragon – Documentation
Home
General
Keyboard Shortcuts
This FAQ will go over the keyboard shortcuts and keyboard navigation available in Paradigm.
General Single-Key Shortcuts
These shortcuts work throughout Paradigm and are accessed via a single keypress.
ESC: Cancel the current edit to a field. Also, in most cases, close current popup.
F2: When a text field is focused, put the cursor at the end of the text.
F3: Copy the current transaction’s ID to clipboard.
F5: Refresh the screen/data.
Page Down: When adding lines to a transaction, skip all remaining tab stops and jump to the first tab stop of the next line.
Page Up: When adding lines to a transaction, jump back up to the previous line’s first tab stop.
- (Plus): Duplicate the selected line (or previous line, if the cursor is in the new line) and increase the length by 1 foot if the line item is sold by the linear foot. (This will only work if the cursor is in the Pcs, Feet or Inches fields.)
– (Minus/Dash): Duplicate the selected line (or previous line, if the cursor is in the new line) and decrease the length by 1 foot if the line item is sold by the linear foot. (This will also work if the cursor is in the Feet or Inches fields.)
Shift + + (Shift and Plus): Duplicate the selected line (or previous line, if the cursor is in the new line) and increase the length by the difference in length between the previous two lines. (This will only work if the cursor is in the Pcs, Feet or Inches fields.)
Shift + – (Shift and Minus): Duplicate the selected line (or previous line, if the cursor is in the new line) and decrease the length by the difference in length between the previous two lines. (This will only work if the cursor is in the Feet or Inches fields.)
Arrow keys: move between fields, ignoring tab stops.
Record Selector Shortcuts
These shortcuts are available on most transactions and are accessed by clicking the checkbox beside the row.
Not all screens have all shortcuts available, but the general list of available record selector shortcuts is listed here:
B: insert a bundle line above the selected line.
D: Duplicate selected line(s).
I: Insert a new line above the selected line.
S: Enters Sort mode.
V: Open the inventory item on the selected line. (When multiple records are selected, the first record will be opened.)
Delete: deletes the selected line(s).
Purchase Invoice Only
R: Sets the Pcs Received equal to the Pcs Ordered for the selected line(s).
U: Sets the Pcs Received to zero for the selected line(s).
Transaction Detail Shortcuts (CTRL Shortcuts)
These shortcuts are available in most transaction forms, and generally apply to the currently-selected detail line(s). These shortcuts are accessed by pressing and holding CTRL, then pressing another key or keys. Some of these are recognizable as default Windows keyboard shortcuts as well.
Ctrl + A: Select all the text in current field.
Ctrl + B: Insert a new
bundle
line above the current line.
Ctrl + C: Copy.
Ctrl + D: Duplicate line(s).
Ctrl + E: Edit.
Ctrl + F: Find text within transaction.
Ctrl + G: Open the
search popup
. If text is highlighted, search for that text automatically.
Ctrl + H: Set focus to first tab stop in header (typically customer/vendor ID).
Transaction Header Tab Stops
. In list screens, put the cursor in the search row.
Ctrl + I: Insert blank line above current line.
Ctrl + J: Search highlighted text in the
search popup
and open the first match (Jump to highlighted ID).
Ctrl + K: Set focus to the cost field for the current line.
Ctrl + L: Open line item options for the current line (equivalent of clicking the folder icon on the line).
Ctrl + M: Open
model options
for current line.
Ctrl + N: Create a new transaction of the current type.
Ctrl + O: Go to or open this transaction’s list screen.
Ctrl + P: Print.
Ctrl + Q: Open the
Build/VAM/Assembly
for this line.
Ctrl + R: Open the rental screen for this line.
Ctrl + S: Save.
Ctrl + T: Open
trim draw
for the current line.
Ctrl + U:
Reset the form layout
to company default (removes sort/groups).
Ctrl + V: Paste.
Ctrl + W: Close the current tab.
Ctrl + X: Cut.
Ctrl + Y: In some cases, redo.
Ctrl + Z: In some cases, undo.
Ctrl + 1: Opens the “Add New” page.
Ctrl + 2: Opens the search drop down.
Ctrl + 4: Set margin for current line (equivalent of double-clicking the line’s margin).
Ctrl + F4: Close the current tab.
Ctrl + Del: Delete the current line.
Ctrl + Home: Go to the first line’s first tab stop.
Ctrl + End: Go to the new/last line’s first tab stop.
Ctrl + Page Up: Go to previous record in record selector.
Ctrl + Page Down: Go to next record in record selector.
Ctrl + Tab: Open the tab to the right of the current tab.
Ctrl + Shift + Tab: Open the tab to the left of the current tab.
Ctrl + Shift + T: Open the most recently closed transaction.
Ctrl + Shift + A: Open Audit Trail and search for the highlighted text.
Ctrl + F3: Open Audit Trail and search the current transaction’s ID.
Ctrl + Shift + E: Sends a quick email.
ALT + R: Removes the last added item in the
POS
screen.
Ctrl + Up Arrow or Down Arrow: Toggle through bundle lines if they exist.
Ctrl + Shift + Left Arrow or Right Arrow: Move between transaction header tabs. For example, it can be used to switch from the General tab to the Advanced tab.
List Screen Shortcuts (CTRL Shortcuts)
These shortcuts are available in most list forms. These shortcuts are accessed by pressing and holding CTRL, then pressing another key or keys.
Ctrl + H: Focuses the filter row
Ctrl + U: Clear filters and sorting.
Ctrl + Shift + U: Clear filters, sorting, and saved filters.
Ctrl + Up Arrow: Move from the top row of data up into the search row.
ALT Key Shortcuts
ALT key shortcuts can be used to navigate the top ribbon in Paradigm. The ALT key must be pressed and then let go. The keys for each button will be shown, and then the corresponding key can be pressed.
Pressing ALT, ESC goes up to the main ribbon, as shown below.
In most pop up screens, the ALT key can be held to select a button in the pop up. Once the ALT key is pressed, a letter underneath the buttons will be underlined as shown below.
CTRL Click Options
Use CTRL + Click
with any of the cases below:
Clicking a list button when that list is already open, will open a new tab with that list.
A notification will be shown if the user attempts to open a list that is already open, prompting them that they can open a second copy of the list by holding CTRL.
[Transaction Type] List Already Open You can open a second copy of this tab by holding CTRL while clicking.
When opening an address, it will include the origin warehouse as the starting point.
On the clear filter button, it will also clear the saved filter and date range filter.
The open-all button and open-selected button in list will open the items in separate tabs. (up to 30 items).
The button in checkbook/payable/vendor prepay will print without confirmation.
The “validate address” button on a customer or customer ship to will immediately accept the validated address.
When opening an assembly component product, it will open in a new tab.
The product finder from the inventory list, selecting a group in product finder will close it and filter the inventory list to all the items in that group.
When converting a quote to an order, it will skip the selection screen and just convert.
A customer opened from a sales tab will be opened docked rather than the default of floating.
A vendor opened from a purchasing tab will be opened docked rather than the default of floating.
Clicking the attachment button on a transaction detail line will open the trim draw/configurator/image list if applicable.
In the universal search, clicking the plus beside a customer/vendor will create an Order/PO rather than a Quote/RFQ.
Clicking “search” in the universal search will auto-open the first result after searching.
Misc. Shortcuts
Pressing “ESC” in the
trim draw
screen with “Reset” the drawing.

#### File Dropdown

File Dropdown – Paradigm ERP by Paragon – Documentation
Home
General
File Dropdown
This FAQ will go over the buttons in the “File” drop down in Paradigm ERP.
File Dropdown
Show Home Screen –
Shows the Paradigm home screen.
Refresh Local Cache –
Refreshes the local workstation cache.
Close Cached Tabs
– Closes the cached tabs.
Switch User –
Logs the user out and displays the login screen with the server URL filled in.
Log out –
Logs the user out and displays the login screen with the server URL and username filled in.

#### Log And Tasks

Log And Tasks – Paradigm ERP by Paragon – Documentation
Home
General
Log And Tasks
This FAQ will go over the Log and Tasks button in Paradigm and how to create a task directly from a customer ID.
Log and Tasks button
This feature can be found in the header on Quotes, Orders, Invoices and other transactions as well.
From this screen, new logs and tasks are able to be created.
Contact Log
The contact log can be used to keep track of any communication with a customer.
Tasks
More information on tasks can be found here:
How to Use the Task List
If a task linked to a transaction is overdue, the “Log and Tasks” button will be shown red in that transaction.
Creating a Task By Searching For a Customer ID
Searching for a customer ID in the home tab allows the user to create a task from the button highlighted below.

#### Paradigm Transaction Numbering

Paradigm Transaction Numbering – Paradigm ERP by Paragon – Documentation
Home
General
Paradigm Transaction Numbering
This FAQ will explain why Paradigm increments numbers into Orders and Invoices. Paradigm assigns transaction numbers in sequential order separately for each transaction type, but retains the numbers when converting from one transaction type to another.
Starting Transaction Numbers
This can be found by going to System > Company Preferences > Transaction Numbers. This screen defines the starting number each type of transaction will use.
Use Next Transaction Number for Converted Document
When the company preference below is enabled, converted transactions will use the next available number for that transaction type, instead of keeping the same ending number and changing the prefix.
-0000123.
Transaction Numbering (Synchronize Number Across Types – Enabled)
When enabling “Synchronize Numbers Across Types”, make sure this is done after hours. Enabling this during business hours may cause transaction numbering issues.
Transaction Numbering (Synchronize Number Across Types – Disabled)

#### Exporting from Lists

Exporting from Lists – Paradigm ERP by Paragon – Documentation
Home
General
Exporting from Lists
This FAQ will go over how to use the list exporting feature in Paradigm.
Enable Exporting From Lists
To enable exporting from lists, the “Allow exporting from list screens” permission needs to be enabled on a user in
User Security
Information on exporting inventory can be found here:
Inventory Import/Export
Exporting from List Screens
This export feature is located at the bottom of most list screens in Paradigm.
The exported file will pull the columns from the list screens and export them into an Excel sheet. Only the filtered records from the list will be exported. To customize the layout of the exported columns, see this FAQ:
Customizing Columns
Once the export option has been selected, the user will be prompted to enter a file name for the file being exported from Paradigm. The “Export Directory” line below the file name is where the .xlsx file will be saved. To change the default save location, click the folder button. If
Open exported file
is checked, the exported file will be opened automatically.
Instructions on exporting inventory items can be found here:
Inventory Import & Export
Exporting Contact Methods
“Export Contact Methods” is available in the customer list, vendor list, and the employee list. This option will export the contact information for the filtered contacts.

#### Reminder List

Reminder List – Paradigm ERP by Paragon – Documentation
Home
General
Reminder List
This FAQ will go over the Reminder List in Paradigm.
Reminder List
All the unposted or uncompleted tasks in Paradigm automatically get sent to a folder in the Reminder List. Once a task gets posted/completed, the reminder for that task will disappear.
Double clicking on a folder opens a filtered list of all the folder selected. The filter is set to show only unposted/uncompleted items.
Show Reminder List on Startup
If the “Show Reminder List on startup” box is checked, when Paradigm is opened, the Reminder List will popup.

#### Paragon Support

Paragon Support – Paradigm ERP by Paragon – Documentation
Home
General
Paragon Support
Contact the Paragon support team using one of the options below:
Send an email:
support@goparagon.com
Fill out the contact form:
https://goparagon.com/support/
Call the support line: 866-971-0940

#### Training Videos

Training Videos – Paradigm ERP by Paragon – Documentation
Home
General
Training Videos
This FAQ will go over where to view training videos.
Training Videos
To access Training Videos through Paradigm, go to Help > Training Videos
This will bring the user to the site to view training videos.

#### Custom Company Branding

Custom Company Branding – Paradigm ERP by Paragon – Documentation
Home
General
Custom Company Branding
This FAQ will go over how to display the company logo in the Paradigm home screen and customize the ribbon color.
Show Company Logo
To enable this, go to Company Preferences > Theming. Then check the box beside “Show company logo in home screen”.
The window title color can also be selected from here as well.
When enabled, this will display the logo that is displayed on reports.
Window Title Color
When the window title color is set, it will change the color of the title as shown in the image below.

#### How to Void A Check

How to Void A Check – Paradigm ERP by Paragon – Documentation
Home
General
How to Void A Check
This FAQ will go over how to void a check in Paradigm. Voiding a check will mark it as void but keep it in the check registry records, whereas deleting will void it and delete the check record. More information on the check registry can be found here:
Bank Account List
Check List
To void a check from the check list, go to Banking > Checks and open the check to be voided.
Then unpost the check and click “Void”.
Payable
To void a check that was used on a payable, go to Accounts Payable > Payables and open the payable that the check was used on.
Then click “Unpost” and then choose to “Delete” or “Void” the check.
Voided Checks
Once a check is voided, it will have the “Void” column checked and the memo field will say “Void” in the
check registry

#### Printing A Range of Checks

Printing A Range of Checks – Paradigm ERP by Paragon – Documentation
Home
General
Printing A Range of Checks
This FAQ will go over how to print a range of checks or to reprint checks.
Reprinting Checks
Select the check style, printer, bank account, and check numbers. Then choose whether or not to print the fields listed beside the check boxes.
Duplicate Check Numbers Warning
If there are any duplicate check numbers in the selected range, a warning will be shown:
Where to Reprint Checks
Banking > Checks
Banking > Bank Accounts > Bank Account Register
Banking > Payables List

#### Data Utilities

Data Utilities – Paradigm ERP by Paragon – Documentation
Home
General
Data Utilities
This FAQ will go over data utilities in Paradigm.
Data utilities can be found by going to System > Data Utilities
Utilities
Inventory
Update All Inventory Quantities
– Updates all inventory quantities.
This validates the inventory quantities and ensures that they are correct.
Recalculate All Pricing
– Recalculates all pricing using the given pricing methods. This will update items and
price levels
This is used after price levels or discounts are imported, to ensure that the prices are correct after the import.
Duplicate Price Level
Update Inventory Account IDs on Open transactions
This will update the transaction accounts for the item, category, or subcategory chosen. To update it on all products, check the box beside “All Products”
This is used after an item class is changed on an item, to set the new accounts to the item on all open transactions.
Misc
Rename and Delete Customer/Inventory/Vendors/GL Accounts
– More information on that can be found here:
How To Merge Items/Vendors/Customers
Clear SQL Proc Cache
– This causes SQL to redo its query optimizations. Use this if Paradigm is suddenly running very slowly.
Clear Image Cache
– Clears the Paradigm
image cache
File Count
– The number of cached
image
files.
Cache Size
– The total size of the image cache.
Clear Cache
– Clears the image cache.
Lock Clearing
More information on this can be found here:
Edit Locks

#### Reimbursing An Employee

Reimbursing An Employee – Paradigm ERP by Paragon – Documentation
Home
General
Reimbursing An Employee
This FAQ will go over how to reimburse an employee.
To do this, go to Banking > Checks
Create a new check, change the payee type to “Employee”, and select an employee.
Then fill out the rest of the check information.

#### Message to Print Presets

Message to Print Presets – Paradigm ERP by Paragon – Documentation
Home
General
Message to Print Presets
This FAQ will go over the message to print presets.
To use these, go to a transaction that has a message to print field and double click on it or click the pencil icon.
Then choose a preset from the drop down or click the pencil icon to create a new one.
Enter the new comment and then close the form to save it.

#### Advanced List Sorting

Advanced List Sorting – Paradigm ERP by Paragon – Documentation
Home
General
Advanced List Sorting
This FAQ will go over advanced list sorting in Paradigm. More info on list layouts can be found here:
How To Customize List Layouts
Sorting By Multiple Columns
After one column is chosen to be sorted by, hold shift and select more columns to sort by. To clear the sorting on one of the columns, hold “Ctrl” and click it.
This can also be done by right clicking the header and choose “Sort Ascending” or “Sort By Descending.”
This allows for multi-level sorting, like in this case where the list is being sorted by customer ID, then by amount received. An arrow in the header signifies that the list is sorting by that column.

#### Why Does the Total from the Sales Reports Not Agree with the Profit and Loss?

Why Does the Total from the Sales Reports Not Agree with the Profit and Loss? – Paradigm ERP by Paragon – Documentation
Home
General
Why Does the Total from the Sales Reports Not Agree with the Profit and Loss?
A report of sales based on invoices alone is not expected to agree with the profit and loss report. This is because there are amounts on invoices that don’t affect sales, and transactions that affect sales that aren’t invoices.
Here are a few things that can cause this sort of difference:
An item that doesn’t have a sales account as its default item sales account.
A direct GL line on an invoice for a non-sales account.
A journal entry that affected a sales account.
The sales reports may be set to include sales tax/freight in the totals, but those amounts aren’t configured to post to a sales account. The freight account can be changed by going to: General Ledger > Default GL Accounts

#### Server Requirements

Server Requirements – Paradigm ERP by Paragon – Documentation
Home
General
Server Requirements
Please contact Paragon for server requirements.

#### List Search Shows The Same Line Multiple Times (PO & RFQ Lists)

List Search Shows The Same Line Multiple Times (PO & RFQ Lists) – Paradigm ERP by Paragon – Documentation
Home
General
List Search Shows The Same Line Multiple Times (PO & RFQ Lists)
This FAQ will go over why the same line may show up multiple times in a search. This only applies to the PO and RFQ lists.
A line may show up multiple times in a list, if there are multiple results for a shown column.
For example, if the Customer PO from the order is being shown on the purchase order list and the PO has lines from two different orders, it will show up twice. Note that there is only one Purchase Order, it just shows up in the list twice.
More information on combining orders can be found here:
Merging Orders
Columns That May Cause This
Request for Quote List
Customer PO (Order)
Customer ID (Order)
Purchase Orders List
Customer PO (Order)
Customer ID (Order)

#### Receipts And Cash Drawers

Receipts And Cash Drawers – Paradigm ERP by Paragon – Documentation
Home
General
Receipts And Cash Drawers
This FAQ will go over receipts and cash drawers in Paradigm. More information on setting up receipt printers and cash drawers can be found here:
Activate Receipt Printers And Cash Drawers For Use In Paradigm
Local Settings (Per Workstation)
To select a receipt printer or cash drawer for a workstation, go to System > Local Settings and enter in the name of the device set in the OPOS Epson software. To test if it is connected, click “Test Drawer” or “Test Printer”.
Ask before printing receipt –
When enabled, a pop up will appear before printing the receipt.
Print Receipt –
If this is checked, receipts will be printed.
Exclude Barcode From Receipt –
Skips printing barcodes on receipts when enabled. Some older printers don’t support the barcode font that is used.
Auto-create new invoice upon completion in POS –
If enabled, a new invoice will be automatically created after the previous sale is complete.
Wait to claim printer/drawer until printing –
If this is enabled, the printer/drawer will not be claimed until Paradigm tries to print a receipt or open a cash drawer.
By default this will be turned off and the printer/drawer will be claimed as soon as the payment screen is opened.
Show Print Screen Upon Completion
– If this is enabled, the dialog for printing the invoice will show after the sale has been completed.
Signature Capture Mode
Upon Request –
The signature can be collected if selected
Always –
The signature pop up will always be shown.
Never –
The signature pop up will never be shown.
Point of Sale
Open Cash Drawer
To open the cash drawer from the
POS
form, click the “Open Drawer” button or press F9.
Receipt Format Settings
There are a few fields that be adjusted or enabled on a receipt:
Warehouse
Name
Warehouse
Description
Warehouse
Address
Amount Saved
This can be enabled/disabled by this company preference:
Show “regular price” and “amount saved” on receipts
Barcode
The barcode can be disabled in the local settings by checking the “Exclude Barcode From Receipt” option.
6.
Receipt Message – This can be set on the
warehouse
, in the “receipt message” field.

#### Paradigm Print Servers

Paradigm Print Servers – Paradigm ERP by Paragon – Documentation
Home
General
Paradigm Print Servers
Paradigm Print Servers allow single click printing from Fulfillment Pro over the network. It does not require any printer drivers to be installed on the workstation running Fulfillment Pro. It also allows different document types to be sent to different printers (i.e. Pick tickets sent to laser printer; Pack labels sent to thermal label printer)
Setup
The basic install process is as follows:
Run the Print Server installer on the workstation/server that is connected to the printer and will function as the print server.
During installation, the user will be prompted for the Paradigm server URL.
In Fulfillment Pro, under settings, the user can then choose the print server and printer that they wish to use for each document type.
“Force Refresh” for the printers to appear for the first time.
There is no limit to the number of print servers or printers that can be set up. Contact Paragon Computing Solutions for current print server installers and additional setup assistance.
Selecting a Print Server in Fulfillment
To choose a print server in Fulfillment, tap on the settings button. Then go to the “Print Settings” tab and check the box beside “Use Print Servers”. Print servers can then be selected.

#### Cancel and Void

Cancel and Void – Paradigm ERP by Paragon – Documentation
Home
General
Cancel and Void
This FAQ will go over canceling and voiding transactions in Paradigm. It will also go over if it can be undone and how to find transactions that are voided or canceled.
Cancel
When a transaction is canceled, the status bar will turn black and say “Canceled”. Any items that were released to production will be canceled as well and will no longer show up in Production. To “uncancel” the transaction, simply click the cancel button again and the order will be restored.
Void
When an invoice is voided, the status bar will say “VOID”. The invoice can still be opened after it is voided, but it cannot be undone.
Finding Void or Canceled Transactions
To find a void or canceled transaction on a list, go to the list and click the advanced filter button.
Check the box beside “Include canceled orders”. (“Include Voided Invoices” on the invoice list.)

#### How Paradigm Counts Users

How Paradigm Counts Users – Paradigm ERP by Paragon – Documentation
Home
General
How Paradigm Counts Users
This FAQ will go over how Paradigm counts users for licensing/billing.
Paradigm counts a user as a unique combination of a user and a workstation. The licensing is based on the peak number of concurrent users in a month. Note this does not count
Fulfillment Pro
or
Customer Portal Users
, just users of Paradigm.
Examples
If a user is logged in twice on a workstation, it only counts as one user.
If a user is logged in on two different workstations, it counts as two.
If two different users are logged in on the same work station, it counts as two.
If Paradigm has a user count limit set up, users in excess of the limit will be completely prevented from logging in. However, administrative users can force other users out if they want to.
Setting Up a User Count Limit
To set up a user count limit, go to System > Users Logged In
Then enter a limit at the bottom. This limit can be set to a number lower than the total license count. If it is set higher than the total license count, it will not override that limit.
If a user logs in and the login limit has been reached, they will be greeted with this message:
There is an insufficient number of user licenses.
A level one admin will have the option to log out users, as shown below.

#### SmartBuild

SmartBuild – Paradigm ERP by Paragon – Documentation
Home
General
SmartBuild
More information on SmartBuild can be found here:
SmartBuild Integrations

#### Employee Commission

Employee Commission – Paradigm ERP by Paragon – Documentation
Home
General
Employee Commission
This FAQ will go over how to set sales rep/salesperson defaults and outline the steps and considerations for getting a commission report created.
Assigning a default customer Sales Rep and/or Salesperson in Paradigm can be very helpful. If a default salesperson is set up on a customer, they will automatically be put on any new transactions for that customer. This can be helpful for knowing who is in charge of the order or who the customer’s contact is/was. The salesperson can then also be used to generate a commission report to aid in quickly calculating commission payments. Information on how to setup an employee as a salesperson can be found here:
How To Set Up An Employee As A Salesperson
Sales Rep/Salesperson Defaults
Customers
To set a sales rep or sales person for a customer, go to the “Detail” tab. The salesperson dropdown will only display the employees that are setup as a
salesperson
, but the sales rep can be set to any employee in the system.
Transactions
Salesperson
Typically when a new order is entered for a customer, the salesperson on that order will get set to the default salesperson from that Paradigm user’s User Preferences, but if a salesperson is specified on the customers detail, the salesperson from the detail tab will override the user’s default.
Sales Rep
If a customer has a sales rep set, the rep will automatically be entered in the commission field on the “Commission” tab.
Commission Report
Due to the many different ways a company may choose to calculate employee commissions, Paradigm does not have a built in commission calculator. Instead, commission calculations are typically handled by setting up a report that can look at whatever the preferred metrics are and then generate a commission calculation. Contact Paragon to have this report created, but take into consideration these factors prior to doing so.
Should commission be based on sales (posted invoices) or payments received during the time period?
Should it be based on profit or sales price?
Does only one person per invoice get commission?
Does everyone get the same commission?
Does commission vary depending on whether the customer is a new or a returning customer?
Does the customer type affect it?
Should commissions be totaled by the salesperson assigned to the order or the rep on the customer or the entries in the order commission tab?

#### Printing Reports From Lists

Printing Reports From Lists – Paradigm ERP by Paragon – Documentation
Home
General
Printing Reports From Lists
This FAQ will go over a couple different ways to print reports from lists.
Printing A Filtered List
First filter the list to the records that need to be printed. In this example, the orders for 9/15 for customer “TEST005” are being printed.
Then select the report [1], the printer [2] if it isn’t selected by default, and then click the print button at the bottom of the screen [3].
Printing Selected Records
Start by clicking the “+” button to select records.
A “Selected Items” button will appear on the left side of the screen.
Hover over the button to view the selected records, and click the print button at the bottom.
From here, the report [1] and printer [2] if it isn’t selected by default can be chosen. Once those are chosen, click “Print” [3].
Printing a Single Record
To print a single record from a list, first select the report [1] and printer [2] if it isn’t selected by default, from the bottom of the list.
Then right-click the record and select “Print”.
For information on limiting print batch sizes, see
Custom Limit for Report Records

#### Custom Attributes

Custom Attributes – Paradigm ERP by Paragon – Documentation
Home
General
Custom Attributes
This FAQ will go over how to set up custom attributes in Paradigm ERP. These are used to record data that doesn’t fit nicely into an existing standard field in Paradigm, like external account numbers, IDs, or other custom data points.
Creating an Attribute
Attributes can be created by going to System > Company Preferences > Attributes Setup. Another way to create them is by clicking the pencil icon highlighted in the images below.
First choose the attribute type from the drop down to select the form for which to create the attribute.
Then enter the attribute information.
On a transaction attribute, the “Required” field can be enabled to require a value to be filled in before releasing/posting.
The “List Item” number decides which column that it will display in on the list.
There are 4 columns available on the column chooser for custom attributes.
4.
Attribute options can be set up to have the user choose from a set of options instead of allowing for custom values to be filled in:
Viewing Attributes on A List
To view the custom attributes on a list, go to the list that matches the attribute type. Then open the column chooser and find the attribute on the list. Note that the list item number must be set for the attribute to show up. More info on editing list layouts can be found here:
How To Customize List Layouts
Assigning Attributes
Transaction Attributes
To add a attributes to a transaction, go to the “Status” tab. These attributes are editable even on completed or posted transactions. Any attributes that are added to an order are copied when the
Split Order
tool is used, regardless of whether the attributes are marked “Copy During Duplication.”
Customer Attributes
Customer attributes can be added on a customer’s “Detail” tab.
Inventory Attributes
Inventory attributes can be added on the item’s “Detail” tab.

#### Inactive Customers and Vendors

Inactive Customers and Vendors – Paradigm ERP by Paragon – Documentation
Home
General
Inactive Customers and Vendors
This FAQ will go over how to mark a customer or vendor as “Inactive”.
Marking A Customer or Vendor as Inactive
Go the customer or vendor and click on the detail tab. Then under “Requirements/Limits”, click the check box beside “Inactive”.
Once they are marked as inactive, they will be hidden and no longer show up on the list when adding customers or vendors to a transaction.
Finding Inactive Customers and Vendors
To view inactive customers and vendors, add the “Inactive” column to the vendor or customer list and check the box.
Another option is to select “Include Inactive” in the advanced filtering settings on the customer or vendor list. Learn more about filter settings here:
Set Up Saved Filters

#### Summary Tab

Summary Tab – Paradigm ERP by Paragon – Documentation
Home
General
Summary Tab
This FAQ will go over where the summary tab is, and some commonly used custom summaries. Contact Paragon to have custom summaries set up.
The summary tab can be found on Quote, Order, Invoice, RFQ, PO, and Purchase Invoice forms and shows information about lines on the order. Custom summaries can be set up here as well.
Clicking on the drop down arrow beside the amount will display the list of items that were counted.
Commonly Used Custom Summaries
Screw Calculator & Total Linear Footage
Contact Information
A contact information summary can be used to list out all the contact information such phone numbers or emails. It can also be customized to show only certain contact information, such as only the highest priority. In this example, the summary is shows the highest priority phone number along with it’s label.

#### Email Batch Form

Email Batch Form – Paradigm ERP by Paragon – Documentation
Home
General
Email Batch Form
The email batch form is used when sending multiple emails at once from list screens. It allows the set of emails to be reviewed and edited before being sent.
To edit an individual email, click on the folder icon or double click on the line. To make changes to all of the emails, click the “Edit All” button.
After all of the changes have been made, click the “Send Emails” to send them. The list of sent emails can then be viewed by going to the
email queue
Clicking the “Show Attachments” checkbox will display the reports and attachments for each email.
Clicking the hyperlink in the “Contact ID” column or “Transaction ID” column, to open the contact ID or all transactions for the email.
Edit All
When using the “Edit All” option, the changes will be applied to all of the emails in the batch. Leaving a field blank in the “Edit All” form will cause that field to not be edited on the batch emails when saving out of “Edit All” – in other words, only the fields that are given a value in this form will be saved to the emails.
New Subject Text & New Message Text
Add to Beginning – Adds the entered text to the beginning of the existing text on the generated emails.
Add to End – Adds the entered text to the end of the existing text on the generated emails.
Replace – Replaces the existing text on the generated emails.
Email Addresses
Append – Adds the entered send to addresses to every email in the batch. In this example, the email was added to the CC line on all of the emails.
Replace – Replaces the existing emails with the emails entered. In this example, the email from the previous example was replaced.
Email Batch Closing Warning
If the user tries to close the email batch form before sending them, the following error will appear:
Delete Unsent Emails? Closing without sending will delete the emails in this batch. Do you want to continue?

#### Email Queue

Email Queue – Paradigm ERP by Paragon – Documentation
Home
General
Email Queue
The email queue can be found by going to System > Email Queue.
This form can be used to view sent or unsent emails, resend emails, or search for a sent email. Administrator level 1 accounts will have an option to show emails from all users on this form. The list can also be filtered by whether or not the email was sent, and the reason for it failing to send can be seen as well. If an email shows that it sent on the email queue, but didn’t actually send, the issue is very likely to be on the mail server side, not Paradigm.
Viewing an Email
Open an email by clicking the folder icon or double-clicking the line.
From here, the email can be viewed, edited, and resent. Note that resending an email with a report attachment, such as for a sales order, will send a new version of the report reflective of the current state of the order, not the old one.

#### Workstation Minimum Requirements

Workstation Minimum Requirements – Paradigm ERP by Paragon – Documentation
Home
General
Workstation Minimum Requirements
System Requirements
8GB RAM
1920x1080p monitor
Currently-supported Windows OS
MacOS and Linux are not supported.
Suggestions
16GB RAM
Modern, midgrade or higher CPU
Windows Pro OS
Graphics card with GPU
Domain-joined, signed in with a domain user account
Hard-wired network connection

#### Automated Functions in Paradigm

Automated Functions in Paradigm – Paradigm ERP by Paragon – Documentation
Home
General
Automated Functions in Paradigm
Many of the standard functions in Paradigm can be automated to save time and ensure processes are done in a timely fashion and not forgotten. Here is a non-exhaustive list of scheduled jobs Paragon has set up previously – if you would like any of these set up, or if you have an idea for another automatic task that would help your business, please contact Paragon support.
Scheduled sending of reports – any report in Paradigm can be set up to automatically be emailed on a scheduled basis.
Statement/Invoice Sending to Customers
Invoice Posting
Notification for Items below Reorder Points
Notification of Production Complete for an Order
Notification for Special Orders Not Yet Received
Notification for Items with Price Changes
Sending Order Confirmation Links
Move Rollformer Export Date
Set Standard Cost to Average/Current Cost

#### Transaction Header Tab Stops

Transaction Header Tab Stops – Paradigm ERP by Paragon – Documentation
Home
General
Transaction Header Tab Stops
The tab stops for the fields of a transaction’s header can be customized at the company level for all users. These can be set up per form by going to System > Company Preferences > Custom Setup.
Information about setting custom tab stops/layouts for transaction detail can be found here:
Customize Transaction Form Layouts
From there, check the box beside the fields that the cursor should stop at when tabbing through. This can be done on the Sales, Purchases, Customers, Vendors, and Inventory tabs. After the last tab stop, the cursor moves to the first tab stop in the detail section of the transaction.
Once these settings are changed and saved, restart Paradigm to apply them.

#### View Related

View Related – Paradigm ERP by Paragon – Documentation
Home
General
View Related
The view related button can be used on almost any form, to find related documents for the current transaction. The related documents on this list are linked to the current transaction. They are usually linked by being converted into or from the current transaction, payments received, etc.
Stay Open
Checking the “Stay Open” check box will keep the list open after a transaction is opened from the list.
Transaction Levels in View Related
The view related list can be changed to search for less transaction levels by reducing the “Levels to go in View Related”, which can be found by going to Company Preferences > Sales > Days/View Related. The level amount selected here will determine how many levels of transactions the list will show. Each level is one transaction to the next, so three levels could show a quote converted into an order, then an invoice, and then a purchase order, but nothing past that since three levels have been reached.
If these numbers are different, the “Extended Search” option will display on the View Related form. This will search through even more levels for related documents.

#### Email Templates

Email Templates – Paradigm ERP by Paragon – Documentation
Home
General
Email Templates
Email templates can be found by going to System > Email Templates.
From there, choose a template from the dropdown to edit or click the “Add” button to create a new one.
Insert Tag
The insert tag allows for a value to be entered in the email that will change based off of the customer ID, transaction, and etc. To use a tag, select one from the drop down and click the blue link button to insert it into the email. It will be inserted into the email surrounded by brackets e.g. “[TransactionID].
Using an Email Template
When creating an email, a template can be applied by selecting one from the drop down at the top. The “Re-Apply” button can be used to apply the email template again. The “F2” key can be used to open the dropdown, and arrow keys or the digits 1-10 can select a specific template.

#### Paradigm Search All

Paradigm Search All – Paradigm ERP by Paragon – Documentation
Home
General
Paradigm Search All
The Paradigm search all feature allows for easy searching in Paradigm. This search bar can be accessed on the home screen or by pressing Ctrl + G (or Ctrl + J – more keyboard shortcuts are covered
here
). This search bar allows a user to search Paradigm for any of the following items.
Quote, Estimate, Order, Back Order
Invoice, Job Transfer, Finance Charge
Request for Quote, Purchase Order, Manufacture Order
Purchase Invoice, Bill
Prepayment, Receivable, Payable, General Journal, Checks
Inventory Items, Jobs, Inventory Builds
The underlined letters signify the shortcut to open these forms. So if for instance, if ‘Q’ was pressed, Paradigm would open a new quote form.
Another way to open those forms, or view lists is by just typing in the name of it in the search bar. For example, if “Order” was entered in the search bar, the sales orders list would be opened. A full list of all the forms and lists that can be found this way is listed at the end of this FAQ.
To search, simply enter the ID number of the item that is to be found. In some cases, records can be found by searching for things besides ID numbers. These cases are mentioned later on in this FAQ. Clicking on the magnifying glass will “drilldown” to the next level of the search.
Selecting an option from the drop-down limits the search results to only that type of item. In the case of customers, vendors, and products, unchecking the boxes below the search bar will limit the fields that Paradigm searches for the criteria that was provided. The back arrow beside the search bar will bring back the previous search and the drop-down arrow to the left of it will give a list of previous searches.
Searching for Documents
View Related
’ items for that transaction and highlight the line for the actual transaction you entered. To open a record, click on the folder icon beside it or double-click on it. To bring up a broader range of results, just enter the number portion of the ID (“0561472”) and all of the transactions with that number will be returned as well.
Clicking the binoculars will bring up a search bar. This will search the data in the rows.
Searching for Customers
A customer can be found by searching for Customer ID, First Name, Last Name, Company Name, Notes, Address and Phone Number. When a customer is searched for by their customer ID, their account balance and
credit limit
will be shown as well as any open quotes or orders from the last 30 days.
Searching for Vendors
Similarly, vendors can be found by searching for Vendor ID, Contact Person, Notes, Address and Phone Number. When a vendor ID is searched for, any purchase orders or request for quotes from that vendor which have been released but not completed will be shown.
Searching by Phone Number
If a phone number is searched and it is not in the system, there will be an option to add it to an existing contact. Clicking either customer or vendor will bring up the “Add Contact” form. This can be done automatically through the Paradigm search program, learn more about that
here
Searching for Products
If, when searching for an product in inventory, ‘All’ is selected from the drop-down, you must use the product ID of the product that you are trying to find. By selecting ‘Product’ from the drop-down, however, it is also possible to search by Description, Category, Subcategory, Vendor Number, and Notes.
Searchable Forms and Lists
This is the list that was referred to earlier in this FAQ. Entering any of these into the search bar will open the form for it. For example, entering “Customer” will open the customers list. Below is a list of the all searchable forms and lists:
Quotes, Orders, Invoices, Point of Sale, Customers, Jobs, Job Dashboard, Job Transfers, Customer Prepayments, Receive Payments, Gift Cards, Task List, Request For Quote, Purchase Orders, Purchase Invoices, Purchasing Agent, Vendors, Inventory List, Inventory Discard, Quick Build, Inventory Adjustments, Inventory Lots, Manufacture Orders , Builds, Inventory Transfers, Daily Deliveries, Daily Pickups, Trips, Transfers, Outside Deliveries, Work Orders, Component Production, Rollformer Production, Production Batching, Scan to Complete, Recently Completed, Coil Split, Coil History, Edit Favorites, Payables, Production by Piece, Reports, Credit Card Charges, Email Batches, Employees, General Journals, Deposits, Reconciliation, Checks, Withdrawals.
Search Bar in the Window Header
The search bar in the top left of the screen is mainly used to find forms in Paradigm, but can also be used to search for customers, order numbers, etc.
To find a form, start typing in the search bar and Paradigm will start to auto-complete the word being typed in, or click on the arrow to find it from the dropdown list.
If an order number, customer ID, or etc. is entered in this search bar, it will bring up the search all form and will search for it.

#### Paradigm Pricing Overview

Paradigm Pricing Overview – Paradigm ERP by Paragon – Documentation
Home
General
Paradigm Pricing Overview
How does Paradigm determine an item’s price when I enter it on an order?
In short, Paradigm finds the lowest possible price for the product.
To go into more detail, when a product is added to an order, Paradigm looks at two places to determine the sales price: the inventory item and the customer. Because of the many ways that items can be discounted (See:
Inventory Pricing Levels
Pricing Methods
Inventory Special Pricing
Customer Pricing Types
Customer Special Pricing
), and because sometimes more than one of these discounts apply, Paradigm has a procedure that chooses the best (lowest) price out of all of the possible prices. It is important to understand that all discounts and special prices are evaluated independently from each other, not on top of each other (The exception to this rule is that Customer Discount Percentages apply on top of non-exclusive price levels).
pricing method
exclusive price level
If a product is not pricing the way you think it should be, chances are there is a discount set up somewhere that results in a better price.

#### Wildcards

Wildcards – Paradigm ERP by Paragon – Documentation
Home
General
Wildcards
In Paradigm; most list screens, search forms, and filter criteria allow the use of wildcards. Wildcards are special, reserved characters that can be used in place of exact characters. The wildcards that can be used are an asterisk (*), percent sign (%), question mark (?), and pound sign (#) . The uses for these are as follows (Note that more than one wildcard can be used at once):
Asterisk and Percent Sign
The asterisk and percent sign work the same. They will take the place of a string of characters; that is to say, they stand for any amount of characters.
BLUE* or BLUE% will return all records that begin with BLUE (BLUECAR, BLUEPANEL, BLUEANDGREENAWESOMESAUCE).
*BLUE* or %BLUE% will return any record that contains BLUE (REALLYBLUECAR, SECONDSBLUEPANEL, YELLOWANDBLUEAWESOMESAUCE).
BL*UE or BL%UE will return any record starting with BL and ending in UE (BL404UE, BLSPACEUE).
Question Mark
The question mark takes the place of any one character.
BLU? will return any four-character record starting with BLU (BLUE, BLUR, BLUB).
BLU?? will return any five-character record starting with BLU (BLUFF, BLUNT, BLURS).
BL?E will return any four-character record starting with BL and ending in E (BLUE, BLSE).
Pound Sign
The pound sign takes the place of any one number.
1/# will return any record starting with “1/” and ending in a single number. (1/2, 1/3, 1/5).
BLU## will return any record starting with BLU and ending with two numbers. (BLU11, BLU23, BLU99).
A#BLU will return any record starting with A and ending in BLU. (A1BLU, A9BLU).
Brackets
Brackets match any single character within the brackets.
B[ae]ll (finds ball and bell, but not bill.)
Use an exclamation to exclude the characters in the brackets.
b[!ae]ll (finds bill and bull, but not ball or bell.)
Use a dash to include a range of characters.
13[7-9] (finds 137, 138, and 139.)

#### General/Misc Tips and Tricks

General/Misc Tips and Tricks – Paradigm ERP by Paragon – Documentation
Home
General
General/Misc Tips and Tricks
In forms with address fields, enter the ZIP code and Paradigm will automatically enter the city, state, county, and country. If the ZIP code you enter is not in Paradigm’s database, you will be prompted to add that zip code, and it will be available from that point forward.
There are many keyboard shortcuts in Paradigm. Learn more about them here:
Paradigm Keyboard Shortcuts
Use the ‘Y’ and ‘N’ keys to press the respective buttons in popups asking for a Yes or No.
In list forms, use the button to the left of the headers to clear all filters. The only filters that will remain is a selected saved filter.
In print selections, double-click a report to print it.
In most forms in Paradigm, numbers are stored up to five decimals (sometimes four), but are rounded to a certain amount of decimals for display purposes only.
Many reports have ‘Drill down levels’ where double-clicking on a certain row of data will drill down into the component parts of that line or section.
An inventory item can be opened and edited from an order or invoice by clicking the line item options (the folder to the left of a line) and clicking ‘Inventory’.
If you find yourself doing repetitive work or data manipulation, or if you are copying values from one report to another manually, please let your system administrator know! Chances are that Paragon can create a report that does the work for you.

#### How to Use the Task List

How to Use the Task List – Paradigm ERP by Paragon – Documentation
Home
General
How to Use the Task List
This FAQ will go over how to use the task list in Paradigm ERP.
Task List
The task list can be found by going to going to Home > Task List. It will also show up in the header if it has been set as a favorite or it can be automatically opened when Paradigm is opened, more information on that can be found here:
Favorite Tabs
Any uncompleted tasks for the current Paradigm user will show in this list by default. Red in the date and time field means that a task is overdue. Yellow means that the task is due in the next hour, otherwise the fields will appear white.
A user can also choose to see the tasks that they have created for another user by selecting “Created By Me” from the “Filter:” drop-down.
Tasks can also be filtered by date or a user can click Done or Total to see lists of completed or all tasks.
Creating a Task
To create a task, click on the green plus button.
By default, the assigned user on the new task will be the current user that is signed into Paradigm. To create the task for another user, select a different user from the drop-down or select a
user group
to assign it to. All users in the assigned
user group
will be assigned to the task and notified, see the section below for creating user groups.
If the task will involve a customer or vendor in some way, they can be selected from the
contact
drop-down so that information about them can be shown on the task. Next, select the date and time for the task and a task type. Task types can be defined in Paradigm by clicking on the pencil icon beside the task type drop-down (highlighted below). Finally, give the task a subject and leave any necessary notes for it.
Editing a Task
To edit a task, double click on it and click the edit icon in the top right of the task window.
Completing a Task
To complete a task, click on the check mark beside the task or click “Complete” in the task form seen above.
Schedule Next Step Button
In quotes, orders, and invoices the “Schedule Next Step” button can be found in the status tab.
From there a task can be created and assigned, and it will link back to the transaction it was created from.

#### Favorite Tabs

Favorite Tabs – Paradigm ERP by Paragon – Documentation
Home
General
Favorite Tabs
This FAQ will go over how to set up favorite tabs. Favorited tabs will appear in the ribbon of the home tab, allowing a user to bookmark their most used tabs for easy access.
Favorite Reports
Information on how to set up favorite reports can be found here:
Favorite Reports
Creating Favorite Tabs in Paradigm
In order to set up favorites for a login, go to the home tab and click the “Edit Favorites” button.
Either click the drop down and scroll down and select the tab to be added, or search for it by typing its name as shown below. Checking “Open On Startup” will cause Paradigm to open that tab by default whenever Paradigm is initially started. Use the “Sort” column to specify the order in which the favorites tabs should appear.
How to Select Default Startup Tabs
Start by clicking “Edit Favorites” from the home tab.
Select the forms that are to open on startup by clicking the check box next to it.
For the ones that are selected, enter sort values to set the order that they open up during startup.
Then close out the window and the next time that Paradigm is opened using the current user name, those selected tabs will open.

#### Customize Transaction Form Layouts

Customize Transaction Form Layouts – Paradigm ERP by Paragon – Documentation
Home
General
Customize Transaction Form Layouts
This FAQ will go over the editing the layout of columns in forms for quotes, orders, invoices, etc. These changes can be saved at at a company level, so that the form appears that way every time the form is opened. If a transaction layout is changed, but isn’t saved as a company layout, it will revert back to the way it was once Paradigm is reopened.
Adding or Removing Columns
To add or remove columns, right click on a column header, then choose “Show Column Chooser”
Select or unselect a column to show/hide it.
Rearranging Column Order
To rearrange columns, simply click and drag the column header into its new position.
Adding or Removing Tab Stops
Tab stops determine which columns your cursor will stop in as you tab through a line item. To set a column as a tab stop or remove a tab stop, right click on the column header for the column and select “Tab Stop” from the option list.
Saving The Layout
Any changes made to the layout will only be temporary unless the layout is then saved as the Company Standard Layout. (The layout will revert back to the company standard upon closing and reopening the form.) To save the layout as the Company Standard, right click on any column header and select “Save as Company Layout”. (Saving a Company Layout is only available to
users
with Company Preference “Edit”
permissions
.)

---

[← Back to Contents](#table-of-contents---click-to-navigate)

### WORKFLOW 11: INTEGRATIONS & ADD-ONS {#integrations-add-ons}

[← Back to Contents](#table-of-contents---click-to-navigate)

**Purpose**: Connect Paradigm to external systems and add functionality

**When You Use This**:
- Integrating with external software
- Using add-on modules
- Importing/exporting data
- Syncing with other systems

Source: https://docs.goparagon.com/kb-category/add-ons-integrations/

#### Integrated ACH Payments Addon

Integrated ACH Payments Addon – Paradigm ERP by Paragon – Documentation
Home
Add-Ons and Integrations
Integrated ACH Payments Addon
This FAQ will go over how to set up ACH Payments in Paradigm (also called EFT Payments in Canada). This can be set up for only AR or only AP, or both. This integration does not verify that funds are available or the bank details are correct. The whole process is very similar to a paper check, just done electronically.
This option is dependent on the bank, and if the bank can process a NACHA file. The bank may not accept it at all, may only have a manual upload version, or may have an automated upload option. Talk to the bank and see what options are offered around NACHA files. Once that is complete, contact Paragon to set this up.
For payments from customers, the actual upload to the bank will happen once per day for all of the payments received that day. For payments to vendors, if they are configured for automatic upload, they are sent immediately.
Set Up
Company Preference Set Up
Once ACH file upload credentials and details are received from the bank, go to
Company Preferences
> Add-Ons > and fill in the file upload credentials and connection details.
Enable ACH Payments –
Contact Paragon to get this enabled.
Enable Telephone ACH Transactions (TEL)
– Enables ACH transactions that can be confirmed by phone.
Enable In Person Consumer ACH Transactions (PPD)
– Enables ACH transactions that can be confirmed in person.
AR File Action –
The bank should supply their preferred upload option. The options are: Upload with Omega, Upload With SFTP, Upload with Web Dav, Manual Download Only.
AP File Action –
The bank should supply their preferred upload option. The options are: Download To Local File, Upload with Omega, Upload With SFTP, Upload with Web Dav.
If “Download to Local File” is selected for the AP side, it will use the selected file path in
User Preferences
> Printing/Startup > PDF Defaults > File saving path. If no file path is selected, the user will be prompted to select one on making the payment. This file would then be manually uploaded/sent to the bank for processing.
Bank-supplied Connection Details –
This information will be supplied by the bank.
Set file upload credentials
– Enter the ACH bank username and password.
If Omega is selected as the upload option, enter the Omega username and password, then enter the rest of the connection details. These should be supplied by the bank.
AR Payment Deposit Account –
Choose the bank account registered with ACH, to receive ACH deposits. This account must have account details entered in Paradigm, see this section:
ACH Bank Set Up
AP Payment Account –
Choose the bank account registered with ACH, to make ACH payments. This account must have account details entered in Paradigm, see this section:
ACH Bank Set Up
ACH/EFT Clearing Bank Account –
ACH Payments to vendors are recorded in the clearing account and an entry will be auto created to clear this account and record a withdrawal in the bank account for each ACH file uploaded.
Confirmation Email Template (Optional) –
On enabling ACH, an Email Template will be created, if there is not an existing one with the name “ACH Confirmation Email”. This template can be modified as desired, or another one can be selected.
This is the confirmation emailed to the customer after receiving an ACH payment from them, if “Telephone” is selected in the “Pay With ACH” screen.
Web ACH Agreement –
The web ACH agreement that is shown to the customer.
Web ACH Details Storage Agreement –
The web ACH details storage agreement that is shown to the customer.
Security
Go to System >
User Security
> enable “ACH Payments” for roles or users that need to view the list of ACH payments.
ACH Bank Set Up
Set up the selected AR Payment Deposit Account and/or the selected AP Payment Account. For the AR side, this will be the bank the funds are going into, and for the AP side this is the account the funds will be pulled from.
This can be added to the checking accounts in
Chart of Accounts
> Edit GL Account > ACH tab. This information is supplied by the bank. This cannot be set if bank account is set as the ACH clearing account.
Account Number –
Account Number on bank account.
Routing Number –
Bank’s Routing Number.
EIN Federal Tax ID –
Tax ID provided by the bank.
Balance NACHA File –
Some banks require an OFFSET/balance line, to balance to NACHA file.
e.g. There’s a file with
credit
debit
Use today’s date –
This is up to the preference of the bank.
If not enabled, it will automatically set date 2 days in advance.
Bank Name –
Name of bank.
Company Name –
Name on Account.
Immediate Origin: (iTreasury ACH ID) –
Immediate Destination –
Sets the receiving bank. The Routing Number will be used if left empty.
EFT Payments Set Up
Complete the steps in the company preference set up, with the exception of having “EFT Payments” enabled instead of “ACH Payments”.
Enter Transaction Codes/CPA Codes. These codes should be supplied by the bank. (
CPA Codes – EFT
EFT Bank Account Set Up
Account Number –
Account Number on bank account.
Institution Number –
Bank’s Institution/Transaction Number.
Use today’s date –
This is up to the preference of the bank.
If not enabled, it will automatically set the date 2 days in advance.
Company Name –
Company ID –
Vendor Set Up
If ACH payments are enabled, and the selected
Preferred Payment Method
on the vendor detail tab is ACH, the vendor can be registered for ACH payments. Only one account can be linked per vendor.
The “Account Name” is the general name for the account, usually a vendor name but could be something like “Lumber Company Checking”. The “Account Holder’s Name” is the actual name on the bank account. That may be the vendor name or it could be an individual’s name, depending on the business. The “Account Holder’s Name” will appear on the transaction lines of the NACHA file.
Once the vendor is registered, buttons will be shown to unregister the vendor or to edit the registration.
Usage
ACH Payments To Vendors
ACH payments can be made to the vendor from
Pay Bills Multi-Vendor
. The total payment amount per vendor needs to be a positive amount.
When paying vendors that are registered for ACH payments from the Pay Bills Multi-Vendor screen, the “ACH/EFT” payment type filter can be used. The default “AR Payment deposit account” from ACH settings will be auto-selected when the user selects “ACH/EFT”.
Once the purchase invoices have been selected, click the “Post and Pay with ACH” button. After posting, a list of the ACH payments will be shown. In most cases, this will save a NACHA file, which then needs to be manually uploaded on the bank’s site. After that the ACH remittance forms can be
emailed
to the vendors from the payable list screen.
Once the payable is posted, the bank account changes to a clearing account, and a withdrawal is made between clearing and source account. One withdrawal is made per payment batch, with a detail line for each payment that was in the ACH. This is done so that the records in Paradigm match how the funds will be withdrawn from the account.
Vendor Prepayments
ACH payments can also be generated from a vendor prepayment, using the “Create ACH File” button.
ACH Payments From Customers
For most banks, ACH payments can only be processed for business accounts. If the customer does not have a business account, they will be directed to the
EBizCharge
ACH form.
Saved ACH Accounts
POS
customer:
Company Preferences > Add-Ons > Default POS Customer
Authorization On File
To mark a customer as “Authorization On File”, click the pencil icon to enter the max authorization amount and confirm the authorization on file.
Receive ACH Payments
To receive ACH payments, select the “Pay With ACH” button in the
receive payment
screen. To edit the charge amount, click “Edit Charge Amount” and then select “Pay with ACH”. ACH payments cannot be received for the customer saved as the default
POS
customer.
Select or add a bank account, and choose whether the customer is there in person or calling in. Any account details that are entered will be securely saved for future use. An exception to that is the default
point of sale
customer will not show the ACH registration screen or show the “Pay With ACH” option.
Telephone
If the customer is calling in, select “Telephone” and the message below must be read. After that has been completed, select “Pay With ACH”.
Note that this only works with
Personal
bank accounts, not
Business
accounts.
In-Person
If the customer is there in person, select “In-person” and the ACH agreement must be printed, signed, and kept on file. After that has been completed, select “Pay With ACH”.
Online Payments
When a customer is paying through
online payments and confirmation
or
customer portal
, they will have the option to choose between ACH or Credit Card when paying if both options are enabled. More information on how to enable online payments can be found here:
Online Payments > Customers
Paying via ACH
Once a customer is paying via an ACH, they will be prompted to fill in their bank account information. Once entered it will be saved and can be used on future transactions.
Once the payment is complete, a confirmation email will be sent to the customer. See the example email below:
Batch Emailing
Sending
batch emails
with
online payments and confirmation
links is an easy way to send invoices to your customers to have them pay via ACH. See the example email below:
ACH Receivables
After the customer pays via ACH, a receivable will be created with the payment method set to “ACH” and “ACH Processed” shown in the banner after the ACH has been processed.
ACH Receivable Unposting
Unposting the receivable
before
the ACH has been processed will show the following message:
You are about to unpost receivable “RCV-XXXXXXX”. There is an unprocessed ACH Payment for this receivable. Unposting this receivable will delete the ACH payment. Are you sure you want to continue?
Unposting the receivable
after
the ACH has been processed will show the following message:
You are about to unpost receivable “RCV-XXXXXXX”. There is already a processed ACH payment for this receivable. Unposting will not cancel the ACH payment. If this payment is unposted and reprocessed, it will create another ACH payment. Are you sure you want to continue?
ACH Payments List

#### Trim Draw

Trim Draw – Paradigm ERP by Paragon – Documentation
Home
Add-Ons and Integrations
Trim Draw
This FAQ will go over how to use trim draw in Paradigm. This feature is used when special trims are entered onto a transaction. To learn more about setting up special trims, follow this FAQ:
Special Trim Set Up
. More information about how to view and edit trims that have been saved on a transaction for a customer can be found in the knowledge base FAQ article
Managing Customer Favorite Trims
To start, click the trim draw icon on the special trim that was entered.
If a user attempts to release an order and there are lines that still need trim drawings, the following warning will appear:
One or more lines on this order are missing a trim drawing. Do you want to continue anyway?
Paradigm Trim Design
Stretchout –
Total trim stretchout.
Bends –
Total Bends
Hems –
Total Hems
Width Shown –
Not the max width, the width as it is currently rotated in the editor.
Height Shown –
Not the max height, the height as it is currently rotated in the editor.
Name of Drawing –
This field allows for the drawing to be titled. The drawing name helps organize the drawings in favorite or recent drawings.
Notes –
This field can be used to show any notes/comments on the drawing. Once it is filled out, it will highlight the note in the comment line on the order.
Description –
This field can be used to show any customizations, or give some context to what the product is.
Measurements –
This form shows the measurements and degrees of each leg, as well as the length of each hem. This can be used to make adjustments to the drawing.
Header Buttons
Undo
Toggle Paint Side – Switches to the paint side.
Rotate Clock-wise or Counter Clock-wise
Zoom In or Zoom Out
Save to Paradigm –
Saves the drawing and closes the window.
When using the drawing admin, the form below will appear. Fill out the info for the trim and name the new folder or add it to an existing one.
6.
Save and New –
Saves the drawing to Paradigm and prompts to enter the information for the next trim.
Auto
Auto – Click to draw a segment or select parts of the trim to adjust them.
Select – Select parts of the trim and adjust them.
Draw – Click to draw a segment to where the cursor is.
Edit
Clicking the “Edit” button in the header allows for the user to click a segment or bend and then manually enter the length or degree. Pressing enter will highlight the next part of the trim.
Pitch Calculator
The pitch calculator can be accessed when a bend selected in edit mode, click the arrow to display the drop down and enter in the pitch info. The pitch of both sides of the bend are needed for this to work.
Hem
Clicking the hem button will allow the user to add hems to the trim (also CTRL + H). Clicking and dragging will allow the user to change the length of the hem. Select “Open Hem” or “Close Hem” and then click on the hem to set it as an open or closed hem. The measurements form can be used to edit the hem as well. The default hem size can be set in the “Advanced Config” form, shown later in this FAQ.
Right Click
Right clicking in the trim drawing area will display the options listed below.
Reset – Reset the drawing to nothing.
Pressing the “ESC” key will do this as well.
Auto – Click to draw a segment or select parts of the trim to adjust them.
Select – Select parts of the trim and adjust them.
Draw – Click to draw a segment to where the cursor is.
Edit – Turns on edit mode.
Hem – Allows the user to add hems.
Bead – Click a leg to add a bead to it. Paradigm will prompt for an amount of beads to be entered.
Delete – Select a line or bend to delete.
Undo
Other End – Draw from or mirror the other end of the sketch.
Toggle Paint – The colored side is the painted side. This will switch it to the other side.
Rotate – Rotate the drawing Clock-wise or Counter Clock-wise
Mirror – Create a mirrored duplicate attached to the active end.
Zoom Fit – Fit the trim to the drawing area.
Recent Drawings – Opens the recent drawings list.
180 Degree Bends (Reversal)
When a trim is bent 180 degrees (also known as a reversal), a “P” or “U” will be displayed on the bend and “REV-P” or “REV-U” will be shown on the saved drawing. Clicking on the bend will switch between them. “U” means that it will be bent towards the unpainted side, and “P” means that it will be bent towards the painted side.
Settings (User Preferences)
Here the trim draw settings can be edited and saved as the default settings. These preferences are set just for the current user.
Saved Drawings
From the saved drawings window, recent drawings, standard trims, or favorite drawings can be selected. To favorite a trim, click the “Favorite” button. Once a trim is selected it will be shown in trim draw and can be edited. More information on creating standard trims can be found here:
Company Standard Trims
. Saved drawings can also be found managed through the Customer page. More information can be found in the knowledge base FAQ article
Managing Customer Favorite Trims
Selecting the attachment button on a special trim line will allow the user to select a favorited trim here as well.
More
Delete –
Select a line or bend to delete.
Reset –
Reset the drawing to nothing.
Other End –
Draw from or mirror the other end of the sketch.
Toggle Paint –
The colored side is the painted side. This will switch it to the other side.
Add Bead –
Click a leg to add a bead to it. Paradigm will prompt for an amount of beads to be entered.
Mirror –
Create a mirrored duplicate attached to the active end.
Zoom Fit –
Fit the trim to the drawing area.
Download –
Download a PNG file of the drawing.
Download (Outline Only) –
Downloads a PNG file of the drawing that is only the outline.
Fix –
View in fixed mode. This is helpful for pieces with a combination of long and short sections. Note that when in fix mode, the drawing will be saved as it is on the screen. Make sure it is entirely visible, it can be adjusted by right clicking and dragging, using the arrow keys, and the zoom buttons.
Preview –
View what the saved drawing will look like.
Advanced –
A string can be entered that was generated by a previous drawing, or the string from this drawing can saved to use later.
Instructions –
This is a window that will display explanations for the different features.
Advanced Config –
Only available from the
Drawing Admin
Advanced Config
To open the “Advanced Config”, click the “More” dropdown:
Settings
Remove Paint On Save –
Does not show paint line on the saved drawing, just the paint-side arrows.
Use Decimal Measurements –
Save drawings with decimal measurements. (0.5″ instead of 1/2″)
Show “Degrees to Bend” on Saved Drawing –
Shows the degrees to bend (exterior angle) when enabled.
Minimum Inches –
Minimum leg length allowed.
Snap Inches & Snap Angle –
The minimum allowed values for each field.
Disable Beads –
Disables adding beads.
Bead Side Option –
Adds an additional prompt when adding beads, to choose the side of the trim the bead should be placed on.
Bead Name –
Sets the name in the “More” drop down.
Bead Label
This will be used on the drawing as the text indicating where the bead should be placed.
Hems
Count Reversal as Hem –
Counts a
reversal
as a hem.
Default Closed Hem –
Default length for a closed hem.
Default Open Hem –
Default length for an open hem.
Open Hem Text –
Open hem text shown on the drawing.
Closed Hem Text –
Closed hem text shown on the drawing.
Closed & Open Hem Sizes –
A list of allowed hem sizes, in decimal, separated by commas.
Minimum and Maximum Hem –
If hem sizes are not specified, the minimum and maximum hem field will be shown.
Min and Max Size
Set the minimum and maximum sizes based on the full stretchout in inches. This is to prevent a case like having a 60″ stretchout drawing for a 42″ coil. Only actual hems count, does not include reversals.
Min Width (No Hem) – The minimum width for a drawing with no hems.
Max Width (No Hem) – The maximum width for a drawing with no hems.
Only apply to these hem sizes – Only applies the min and max widths to trims that include a hem of the listed sizes.
If the trim does not have a hem that is the same size as the ones listed, the “No Hem” minimum and maximums will apply.
For example if the listed hem sizes are 0.375 and 0.5, but a 1″ hem is used, the “No Hem” min and max will be used.
Min Width (One Hem) – The minimum width for a drawing with one hem.
Max Width (One Hem) – The maximum width for a drawing with one hem.
Min Width (Two Hems) – The minimum width for a drawing with two hems.
Max Width (Two Hems) – The maximum width for a drawing with two hems.

#### Samsara Integration

Samsara Integration – Paradigm ERP by Paragon – Documentation
Home
NEW!
Samsara Integration
Home
Add-Ons and Integrations
Samsara Integration
Home
Dispatching
Samsara Integration
This FAQ will go over the Samsara integration with Paradigm and any setup that might need to be done. The
Samsara
Integration allows trips created in Paradigm
Dispatching
to be sent to the Samsara system or driver app. Proof of delivery information, such as pictures or documents collected in the Samsara driver app, are imported into Paradigm and attached to the trip and orders. When a driver departs a stop in Samsara, the stop is marked as complete in Paradigm.
Set Up
To view the Samsara integration settings, go to Company Preferences > Add-Ons.
API Key
Enter the Samsara API Key into the API Key text box.
Enable Extended Logging
The option “Enable Extended Logging” controls whether requests and responses from the Samsara API are logged in the Paradigm Server log file. This can be useful for troubleshooting, but should be disabled if everything is working correctly.
Driver Names
The
Driver names
in Paradigm must be an exact match with the driver names entered in the Samsara driver list.
Usage
Send to Samsara
A dispatch is created in Samsara by clicking the “Send To Samsara” button on the trip info screen. If any changes are made to a trip after it has been sent to Samsara, the dispatch will automatically be re-sent and updated in Samsara. Note that if the Dispatch has already been completed, Samsara will not allow it to be changed.
Samsara requires Latitude and Longitude information for all addresses. If the latitude and longitude cannot be auto determined by the
TomTom
service, it must be manually set on the order, in the ship to address section. When entering coordinates, use either format shown here:
40.689212380759265, -74.04455969155815
40°41’21.2″N 74°02’40.4″W
Clear Dispatch in Samsara
A Dispatch may be removed from Samsara by clicking the “Clear From Samsara” button on the trip info screen. Note that if the Dispatch has already been completed, Samsara will not allow it to be cleared.
Proof of Delivery Photos and Signatures
Photos and signatures recorded in the Samsara app will be imported as attachments on the trip and order. It will also mark stops as complete after the stop enters the Samsara “Departed” status. If enabled, Delivery Notifications will be triggered when the stops are marked as completed.

#### Managing EBizCharge Saved Credit Cards

Managing EBizCharge Saved Credit Cards – Paradigm ERP by Paragon – Documentation
Home
Add-Ons and Integrations
Managing EBizCharge Saved Credit Cards
Credit card payments can be processed through
Online Payments
or
Manual Entry
after
Credit Card Processing
has been set up. If
Paradigm’s EBizCharge integration
has also been set up, credit cards can
optionally be saved
Viewing and Deleting Saved Cards
In the Customer Details screen, saved credit cards can be viewed in the table on the right labeled “EBizCharge Saved Cards.” Clicking the red X next to a card entry will send the request to EBizCharge to delete it. Note that all card information displayed in this table is read-only, as it is retrieved from EBizCharge and is not stored in Paradigm’s database.

#### DataHub

DataHub – Paradigm ERP by Paragon – Documentation
Home
Add-Ons and Integrations
DataHub
This FAQ will go over the functionality of DataHub and the different types of data that can be transferred between companies that are both using
Paradigm ERP
. Written confirmation is required from both companies before a DataHub connection can be set up, even if only one company is going to receive data.
DataHub also has the option to receive POs directly from certain vendors, such as
Do It Best
and Orgill.
Contact
Paragon Support
for more information on pricing and getting DataHub connections set up. Information on DataHub preferences can be found here:
DataHub: Preferences
Vendor Data From Customers
This section will go over the data that a vendor could be set up to receive from their customer(s).
Sales Orders
When a customer releases a purchase order it will appear as a sales order for the vendor, if that is set up to be transferred.
The orders can be imported individually or all as one order.
The vendor’s order number will be sent back to the “Vendor Order Number” field on the customer’s PO.
When the sales order is uploaded as a purchase order by the customer, the vendor that received the PO will be notified.
When the purchase order is imported as a sales order by the vendor, the customer that sent the PO will be notified.
Custom options
in the purchase order can be imported as well.
DataHub: Pending Orders
Customer Releasing PO
Vendor Importing As Sales Order
Customer Data From Vendors
This section will go over the data that a customer could be set up to receive from their vendor(s).
Purchase Invoices
When a vendor posts an invoice it will show up as a pending purchase for the customer, if that is set up to be transferred. It can then be imported as a purchase invoice in the customer’s system.
This can be used to convert the POs to a purchase invoice.
This can also be used to import the costs and pieces received onto the purchase invoice.
DataHub: Pending Purchases
Item Updates
When a vendor and customer make changes to their sales prices, descriptions, or any other item change, it will show up in the item updates screen for the company(s) set up to receive those item updates.
If the vendor’s sales price is updated, it will been shown as the updated cost for the customer. The customer can then use this to update their cost, as well as the sales price based on the item’s mark up amount.
DataHub: Price Changes and Item Updates
Fulfillment Pro – Pull Label Data
Fulfillment Pro pull label
data can be transferred to the customer, so items being shipped from the vendor do not need to be relabeled and the existing pull labels can be scanned.

#### AvaTax Integration

AvaTax Integration – Paradigm ERP by Paragon – Documentation
Home
Add-Ons and Integrations
AvaTax Integration
This FAQ will go over the set up and usage of Avalara AvaTax in Paradigm, after an Avalara account has been set up. Paradigm’s sales tax calculations are fully bypassed by AvaTax.
Important
Contact Paragon Support before setting this up, so that the necessary changes can be made.
Set Up Mode
Enabling set up mode allows for AvaTax configuration to be done without using AvaTax for tax calculations.
Sandbox Mode
This setting is for testing; any transactions sent to AvaTax will not be finalized, even if they are posted in Paradigm. This should only be enabled on the test database that Paragon support will set up after the initial set up is complete in set up mode on the main database.
Account Connection
Go to Paradigm > System > Company Preferences > Add-Ons.
Then fill in the Avalara AvaTax credentials:
Account ID:
Provided by Avalara
License Key:
Provided by Avalara
Sandbox Credentials?:
This setting is for testing and should only be checked if “Sandbox Credentials” are provided. When enabled, any transactions sent to AvaTax will not be committed, even if they are posted in Paradigm.
Company Code:
Click “Activate Connection” after filling in the account ID and license key, then select the company name from the dropdown.
This will normally be “DEFAULT”.
Check the “Setup Mode” option before clicking “Activate AvaTax”, to avoid a premature activation of the AvaTax tax calculations.
Setup Mode:
Allows for AvaTax configuration to be done without using AvaTax for tax calculations.
Be sure that “Sandbox Credentials” is not checked when enabling testing mode.
Document Recording:
Allows documents to be marked as committed in AvaTax – this should be checked.
Use Address Validation:
Enables or disables the address validation feature (It is highly recommend that this is enabled).
Enable Logging:
Log detailed transaction activity. Only check this box if instructed to do so by support.
Ensure that
https://sandbox-rest.avatax.com/
and
https://rest.avatax.com
are available/whitelisted.
Sales Tax Code Configuration
If a tax code is not specified in any of the forms below, the default tax code “P0000000” will be used.
Company Preference
Go to System > Company Preferences > Add-Ons and select a tax code for the charges in the “Other” field in Paradigm (may vary based on how the company utilizes that field) and select a tax code for finance charges as well.
Warehouses
Go to Inventory > Inventory Settings > Warehouses and select a location code for the warehouse.

#### Paradigm Mobile: Overview

Paradigm Mobile: Overview – Paradigm ERP by Paragon – Documentation
Home
Add-Ons and Integrations
Paradigm Mobile: Overview
This FAQ will go over the Paradigm Mobile App. It can be downloaded from the Google Play Store or the App Store. More information on the app can be found here:
Paradigm Mobile Add-On
Paradigm Mobile User Setup
Employee Web logins or Customer portal login information can be used to access the mobile app. If a customer portal login is used, the user will not be able to view tasks. To change which parts of the app the user can access, go to “App Settings” and check or uncheck the box beside each feature. If the user is a driver, select the corresponding driver from the drop down. If a driver is assigned, the user will have access to the delivery feature. More information on setting up Employee Web logins and Customer Portal users can be found here:
Customer Portal: Create Customer Web Logins
and
Create Customer/Employee Web Logins And Fulfillment Filters
Paradigm Mobile
Dark Mode
Dark mode will be enabled on devices that support light/dark mode.
Settings
Clicking on the three lines in the top left corner will open up the side bar. More information on that can be found here:
Paradigm Mobile: Settings
Delivery
Deliveries for the given date and for the driver assigned to the user that is signed in will be shown here. More information on this can be found here:
Paradigm Mobile: Delivery
Trip
Choose a date, warehouse, and select whether or not to include completed trips. This will display all of the trips that are assigned to the driver. Tapping on a trip will display the deliveries for it. More information on that can be found here:
Paradigm Mobile: Trips
Receipt
This can be used to take a picture of a receipt for record. Once the picture is taken, fill out the rest of the information and click submit. More information on the receipt capture in Paradigm Mobile can be found here:
Paradigm Mobile: Receipt Capture
It will then be shown in Paradigm in the receipt capture list. More information on that can be found here:
Receipt Capture
Inventory
This will display the inventory list and allow for barcodes to be scanned as well. More information on the inventory list in Paradigm Mobile can be found here:
Paradigm Mobile: Inventory
Task List
This will display the tasks for the user that is signed in. More information on that can be found here:
Paradigm Mobile: Task List
Dashboard
The dashboard here can be customized to track different things, such as “Daily Quote Count” or “Weekly Invoice Count”. More information this can be found here:
Paradigm Mobile: Dashboard
Customers
This will show the customer list. Tapping on a customer will display the rest of their information. More information about that can be found here:
Paradigm Mobile: Customer List
Vendors
This will show the vendor list. Tapping on a vendor will display the rest of their information and allow for a purchase order to be created. More information about that can be found here:
Paradigm Mobile: Vendor List

#### Paradigm Mobile: Vendor List

Paradigm Mobile: Vendor List – Paradigm ERP by Paragon – Documentation
Home
Add-Ons and Integrations
Paradigm Mobile: Vendor List
This FAQ will go over the Vendor List feature in Paradigm Mobile. More information on the app can be found here:
Paradigm Mobile: Overview
This will show the list of vendors. Use the search bar to look for a specific vendors.
Info
Tap on a vendor to view details and contact methods.
Logs
Displays the
logs
created for the vendor.
Purchases
Displays the total purchases from a vendor, based on the past days selected.
Orders
Displays the purchase orders between the chosen dates. Tapping on an order will display the details.
Create Orders
Tap “New Purchase Order” to create a new order.
Select the “Green Plus” button beside “Details:” to add items.
Adding Items
When adding items, first search for the item and then select the unit measure, pieces, and if required, the length.

#### Paradigm Mobile: Inventory

Paradigm Mobile: Inventory – Paradigm ERP by Paragon – Documentation
Home
Add-Ons and Integrations
Paradigm Mobile: Inventory
This FAQ will go over the inventory list in Paradigm Mobile. More information on the app can be found here:
Paradigm Mobile: Overview
From here, the list of inventory items can be found. The button on the top right can be used to scan a barcode to search for a product.
Inventory Detail
Selecting an item will bring up detailed information for that product.
Warehouse Stock And Aliases
Below the inventory detail, warehouse stock information and aliases will be shown.
Sales
Selecting the “Sales” tab will allow the user to select a certain number of past days to view sales for.
Purchases
Selecting the “Purchases” tab will allow the user to select a certain number of past days to view purchases for.

#### Online Payments

Online Payments – Paradigm ERP by Paragon – Documentation
Home
Add-Ons and Integrations
Online Payments
This FAQ will go over the steps needed to receive online payments in Paradigm.
1. Receiving Payments
Receiving Credit Card Payments –
To receive credit card payments, an account will need to be set up with the
EBizCharge Integration
Receiving ACH Payments –
To receive ACH payments, an account can be set up with
EBizCharge
or can be set up with the bank using the
Integrated ACH Payments Addon
Additional paperwork and setup is required on the EBizCharge side for ACH payments, and this is not automatically included with a credit card account.
2. Customer Online Access
For customers to pay online, one or both of these add-ons can be used:
Online Payments and Confirmations
Allows for the sending of a confirmation email directly through Paradigm as well as requesting a prepayment or invoice payment.
Customer Portal
Allows for accounts to be created for customers, so they can access their own quotes, orders, and invoices online and make payments.
3. Website Set Up
Once the initial steps have been completed, configure the processing and available payment methods for online payments:
Online Set Up
> Payments
These options can be configured by going to the company website > logging in with the administrator account (i.e. web_admin), clicking the dropdown in the top right corner, and selecting “Setup”, then the “Payments” tab.
Company Website
The company website can be found by going to System > Company Preferences > Setup > Company Website
Payments
Online Payments –
Enables online payments.
Save Payment Info –
When enabled, payment details will be stored on the customer and presented as options to choose from the next time the customer pays a bill, to save time.
This does not apply to the “CASH” customer.
Online Payments and Confirmations –
Choose the processor and available payment methods for
Online Payments and Confirmation
links.
Customer Portal –
Choose the processor and available payment methods for
customer portal payments
Choose Payment Method –
If a customer has multiple options for their payment method, the window below will be shown.
ACH (Personal) –
Directs the customer to the EbizCharge personal ACH payment page.
EBizCharge is used in this case because personal bank accounts cannot be processed through the
Paradigm ACH integration
ACH (Business) –
Directs the customer to the
Paradigm ACH integration
payment page.
Credit Card –
Directs the customer to the EbizCharge credit card payment page.
Customers
Company Preference Default –
See this section of the company preference FAQ:
Customer Default Allowed Online Payment Types
Customer Level Setting –
The available customer payment options when paying online depends on what is enabled on the customer’s detail settings.
If the customer does not share any allowed payment methods with the methods set up in
Company Website > Setup > Payments
, the following warning will be shown in the
customer’s web account set up
screen:

#### Do It Best Integration

Do It Best Integration – Paradigm ERP by Paragon – Documentation
Home
Add-Ons and Integrations
Do It Best Integration
This FAQ will go over the integration with Do It Best, using
DataHub
in Paradigm.
Usage
Price changes and item updates will be shown in DataHub >
Item Updates
Order Confirmations will be shown in DataHub >
Pending Purchases
A customer can be signed up to the loyalty program under the Customer > Do it Best Customer Loyalty tab.
Orders, Invoices can be tagged with a loyalty number before the customer has been configured for it, and it will link up to their account later.
If a Do It Best Retail Inventory File is set up it can be imported to push the prices, inventory count, and shelf numbers from Paradigm. Contact Paragon to have this enabled.
Order Confirmation Download/Find POs and Import as PI
Use the Find POs and Import as PI to find the existing PO(s) (by P.O. Number), and convert them, which will then import the
expected quantity received
and the line costs.
Fulfillment Pro – Purchase Invoices
Purchase Invoices that haven’t been claimed by anyone in Fulfillment Receiving will show up under a new list on the right-hand side under Pending Receiving:
A purchase invoice is “claimed” by whichever employee receives the first line. It will move to that employee’s Recently Received list at that point, and be hidden from other employees in the Pending Receiving list. Expected quantity received (“Inv:” in the screenshot) can then be used in Fulfillment and received as needed:
PO Upload – Purge a faulty PO from DataHub and re-upload
If there is an error on the PO from Do it Best, it can be purged from DataHub by clicking “Purge from DataHub”. This will delete it from DataHub, and un-release it in Paradigm. You should then make your edits, and re-release to re-upload it to DataHub and Do it Best.
Customer Loyalty
Customer Loyalty – Handling new customer joining loyalty program from an order/invoice/POS
Before the sales from the POS is complete, enter the customer’s new Customer Loyalty number in the Do It Best Customer Loyalty field here:
Continue to add invoices for this customer under POS/the CASH customer until the customer has its own record. Those sales will be linked up to their Do It Best Loyalty account later when they enter the same loyalty number in the new customer’s information (see below).
This field is also available on Quotes, Orders, and Invoices under the Advanced tab. This field will automatically populate if the customer has been configured.
Customer Loyalty – Adding New Customer to Loyalty Program
In the Customer view > Do it Best Customer Loyalty tab, click Enroll Customer to enroll a new customer. This can be before or after they’ve used a loyalty code.
Enter the new or previously used Loyalty Number in the first field. The loyalty number can be used in the “
Search All
” field and the customer ID field directly to select that customer.
Enter all other relevant info. Fields that have the page icon are synced to fields on the customer (City, State, Zip etc. are all synced as part of Mailing Address).
Customer Loyalty – Unenroll/Delete
If the loyalty info was never uploaded to Do it Best yet, the button will appear as “Cancel Enrollment”, and can be clicked without issue.
If the loyalty info has been uploaded already, the button will appear as “Delete Loyalty Data“. In this case, the deletion must be done outside of Paradigm, from Do It Best. After Do It Best has deleted it from their end, the information can be deleted from Paradigm.
Do It Best Upload
Manual uploads can be done by going to Data Utilities > Do It Best.

#### Configuring A Product For Export to Variobend

Configuring A Product For Export to Variobend – Paradigm ERP by Paragon – Documentation
Home
Add-Ons and Integrations
Configuring A Product For Export to Variobend
This FAQ will go over how to set up a product for export to Variobend.
Note:
When setting up a product for export it must match the data in Variobend exactly, even the capitalization.
Export Modes
The following export modes are available. If the export mode needs to be changed, please contact Paragon support.
Locked Order – Exports orders when they are locked, regardless of the Build’s production date. This export mode is set up by default.
Production Date – Exports orders based on production date and locks the lines when they are exported.
Mark For Export – Exports orders when the Export button is clicked on the Production screen.
Materials
Variobend needs the material and the thickness to correctly bend different materials. These are stored as inventory
attributes
on the coil items in Paradigm and can be imported by Paragon if needed.
VariobendThickness – The thickness of the coil in mm.
Min and max thicknesses are set under Settings > Variobend Settings > General settings “Material Thickness” sections
VariobendMaterial – The name of the material that corresponds to the Variobend material (case sensitive).
Materials can be set up under the “Material Database” in Variobend settings.
Note: If there are issues with “Steel”, try using “mat_steel”. This is a special case because it is “Standard material”.
Color – If a Color is assigned to the Paradigm Coil item, it will be sent to Variobend.
Machine Settings
Specify the Variobend Machine Name in Paradigm at Production > Machine List and link it to the correct Warehouse if you have multiple locations.
Item Export Set Up
Assembly Tab
Assembly Type must be set to “Manufactured to Order”.
For
special trims
, the “Custom Assembly” checkbox needs to be checked.
Set the Paradigm Component to the Variobend material.
Production Tab
Set the Machine Name to the Variobend Machine Name
Set the linked component on the rollformer Production step to the coil.
Set the Warehouse ID to the Variobend Location Name
Special Trim
For special trims to export, the steps in the previous sections need to be completed. Once those are done, special trims should export to Variobend.
Standard Trim
For standard trims to export, the steps in the previous sections must be completed, along with the steps below.
Standard Drawings
Set up drawings for the standard trims in Variobend. Once the drawings are set up, provide Paragon with the folder name they are located in.
Make sure the source in the top right corner of Variobend is the SERVER, not the FOLDER. Standard drawings must be in the SERVER for them to be used by the integration.
Set “Model No.” to the Variobend drawing name.
Export Detail
When Paradigm exports Standard Trim Jobs to VarioDesk, profiles are selected as follows: (runs until valid profile is found)
Checks for VariobendProfileID Inventory attribute on the Item
VariobendProfileID is an internal value referencing a profile in VarioDesk. The export process auto sets this value when a matching profile is found
Checks for VariobendProfileID Inventory attribute on Item(s) of the same model.
Checks for Variobend profile in the VarioDesk Server folders specified by the profile folder setting that have the same profile name as the Paradigm Item Model Number.
Checks for
Model Trim profile setup
from Paradigm Trim Draw. If found, this drawing is sent to the Model Trims folder in VarioDesk.
If no profile is found, a Task is created to warn the user that a profile must be created.
Notes:
Once a model trim is sent to Variobend, it is linked via the VarioBendProfileID attribute and used until it the attribute is deleted. If there are changes made to the profile in VarioDesk, the changes will be reflected in future exports.
If there is a profile in VarioDesk with a name that matches a Paradigm Model Number, but it is not in one of the folders specified in PROFILEFOLDERS, it will be ignored.

#### PARADIGM CONNECTOR END USER LICENSE AGREEMENT

PARADIGM CONNECTOR END USER LICENSE AGREEMENT – Paradigm ERP by Paragon – Documentation
Home
Add-Ons and Integrations
PARADIGM CONNECTOR END USER LICENSE AGREEMENT
This Paradigm Connector End User License Agreement (“EULA”), is entered into by and between Paragon Computing Solutions LLC, a Pennsylvania limited liability company (“Paragon”) and any user of the listed software or services. When you use the software or services, you enter into a binding contract with us.
NOW THEREFORE, in consideration of the mutual covenants set forth herein, and intending to be legally bound, Paragon and Licensee agree as follows:
Definitions. For purposes of this EULA, the terms defined in this Section 1 shall have the following meanings:
- “Confidential Information” means any proprietary information, whether written or oral, pertaining to the business, financial condition, strategies, plans, policies, clients or customers, inventions, trade secrets, computer programs, or processes of the disclosing party that is furnished or disclosed by one party to the other in connection with this EULA. Notwithstanding anything herein to the contrary, information shall not be deemed to be Confidential Information if it (i) becomes known to the receiving party or any affiliates without any such restriction as the result of disclosure by a third party which has the right to make such disclosure or (ii) is independently developed or formulated by the receiving party or its affiliates, or (iii) otherwise is or becomes generally available through no fault of the receiving party or its affiliates.
- “Documentation” means any online or printed material provided regarding usage of the software or service.
- “Intellectual Property Rights” means all inventions, patents, copyrights, moral rights, trade secrets, trademarks, service marks, know-how, mask works and all other intellectual property rights, whether or not registered or perfected, anywhere in the world, and all registrations, initial applications, renewals, extensions, continuations, divisions or reissues for any of the foregoing.
- “Software or Services” or “Licensed Program” shall mean the Paradigm Connector application and shall include without limitation any (i) machine-readable instructions, (ii) any collection of machine-readable data, such as a database, (iii) all Customizations and (iv) all other materials, including the Documentation, in any form that relates to the such software; provided that the Licensed Program shall contain executable versions only, and shall not include source code.
- “Non-Conformity” shall mean the failure of the Licensed Program to perform in accordance with the Documentation due to the:
- Licensee’s use of the Licensed Program in a manner not contemplated by the Documentation;
Maintenance, Support. Except as otherwise provided in a separate written agreement with Paragon, Paragon shall have no obligation to maintain or support the Licensed Program.
Proprietary Rights. Licensee shall (a) take all necessary and reasonable steps so as to ensure that no unauthorized access, or use is made thereof, and (b) agrees to notify Paragon immediately of the existence of circumstances surrounding any unauthorized knowledge, possession or use of the Licensed Program, or any part thereof, by any person or entity.
Enhancements. Paragon may develop Enhancements to the Licensed Program in the future. Unless expressly provided under this EULA, Licensee has no rights in or to any Enhancements.
Limited Warranty. Paragon warrants that the Licensed Program shall perform substantially as described in the Documentation. No advertising, description, or other representation, whether made by Paragon, or any dealer, distributor, agent, representative or employee of Paragon, shall be binding on Paragon. In the event the Licensed Program does not perform substantially as described in the Documentation, Paragon will provide reasonable programming services to correct errors or defects in the Licensed Program for ninety (90) days after the Acceptance Date (“Warranty Period”); provided (a) Licensee notifies Paragon in writing explaining any defects or errors in the Licensed Program, (b) such notice is received by Paragon during the Warranty Period, (c) the error or defect is not caused by a Non-Conformity and (d) Paragon can recreate such error or defect. THIS WARRANTY SHALL TERMINATE IF LICENSEE MODIFIES THE LICENSED PROGRAM OR USES THE LICENSED PROGRAM IN OTHER THAN ITS SPECIFIED OPERATING ENVIRONMENT AS DEFINED IN THE DOCUMENTATION. EXCEPT AS STATED ABOVE, (I) THE LICENSED PROGRAM IS PROVIDED “AS IS” AND NO WARRANTY, CONDITION, UNDERTAKING OR TERM, EXPRESS OR IMPLIED, STATUTORY OR OTHERWISE, AS TO CONDITION, QUALITY, PERFORMANCE, INFRINGEMENT, MERCHANTABILITY, DURABILITY OR FITNESS FOR PURPOSE OF THE LICENSED PROGRAM IS GIVEN OR ASSUMED BY PARAGON AND ALL SUCH WARRANTIES, CONDITIONS, UNDERTAKINGS AND TERMS ARE HEREBY EXCLUDED; (II) PARAGON DOES NOT WARRANT THAT THE LICENSED PROGRAM IS FREE FROM “BUGS” AND OTHER MINOR DEFECTS, AND (III) ALL WARRANTIES ARE EXPRESSLY DISCLAIMED. THE ENTIRE RISK ARISING OUT OF USE OR PERFORMANCE OF THE LICENSED PROGRAM REMAINS WITH THE LICENSEE.
Indemnification. Licensee shall indemnify and hold Paragon harmless from all third-party claims or actions, and liabilities, costs, and expenses related thereto, arising out of Licensee’s use of the Licensed Program, unless related to an assertion that the use of the Licensed Program by Licensee infringes upon any United States copyrights, patents or trade secrets.
Limitation of Services. Except for services expressly set forth in this EULA, Licensee acknowledges and agrees that Paragon is not obligated to and is not providing any other services to Licensee (including accounting or additional technology related services). In no event shall Paragon be liable to the Licensee for any claim related to the alleged furnishing or failure to furnish any other services. Paragon warrants that it will perform all services that it is expressly obligated to perform under this EULA in a good and workmanlike manner. THE FOREGOING IS PARAGON’S SOLE AND EXCLUSIVE WARRANTY REGARDING ANY SERVICES. EXCEPT AS STATED ABOVE, (I) THE SERVICES ARE PROVIDED “AS IS” AND NO WARRANTY, CONDITION, UNDERTAKING OR TERM, EXPRESS OR IMPLIED, STATUTORY OR OTHERWISE, AS TO CONDITION, QUALITY, PERFORMANCE, INFRINGEMENT, MERCHANTABILITY, DURABILITY OR FITNESS FOR PURPOSE IS GIVEN OR ASSUMED BY PARAGON AND ALL SUCH WARRANTIES, CONDITIONS, UNDERTAKINGS AND TERMS ARE HEREBY EXCLUDED, AND (II) ALL WARRANTIES ARE EXPRESSLY DISCLAIMED. NOTWITHSTANDING ANY OTHER TERM OF THIS AGREEMENT, PARAGON’S LIABILITY FOR SERVICES SHALL IN NO EVENT EXCEED THE FEES PAID BY LICENSEE UNDER THIS EULA DURING THE PRIOR TWELVE MONTHS. IN CONNECTION WITH ANY SERVICES, IN NO EVENT SHALL PARAGON BE LIABLE FOR ANY INDIRECT DAMAGES WHATSOEVER, WHETHER FORESEEABLE OR NOT (INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF BUSINESS PROFITS, BUSINESS INTERRUPTION, LOSS OF BUSINESS INFORMATION, OR ANY INDIRECT, CONSEQUENTIAL, INCIDENTAL OR SPECIAL DAMAGES), EVEN IF PARAGON HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
Confidentiality.
- Each party understands that the other party has or may disclose Confidential Information in the course of exercising its rights or performing its obligations under this EULA. As between the parties, the Confidential Information of each party will remain its sole property. Except as expressly provided herein, each party will hold the Confidential Information of the other party in strict confidence and protect such Confidential Information from disclosure using the same care it uses to protect its own confidential information of like importance, but not less than reasonable care. Except as expressly provided herein, no Confidential Information will be disclosed by the receiving party without the prior written consent of the other party, except that each party may disclose this EULA and the other party’s Confidential Information to its directors, employees, attorneys, agents, auditors, insurers, potential investors and subcontractors who require access to such information in connection with their employment or engagement and who are obligated to keep such information confidential in a manner no less restrictive than set forth in this Section 16. The party employing or engaging such persons is responsible and liable for their compliance with such confidentiality obligations.
- The parties recognize and agree that the use or disclosure of any Confidential Information of a party in a manner inconsistent with the provisions of this EULA may cause the disclosing party irrevocable damage for which adequate remedy at law will not be available. Accordingly, each party shall be entitled to seek temporary and/or permanent injunctive relief against such breach or violation from any court of competent jurisdiction immediately upon request, without the need to obtain a bond or other security. The right of each party to seek injunctive relief shall not limit in any manner that party’s right to seek other and/or additional remedies at law or in equity. If Confidential Information is required to be disclosed by law or a governmental authority, including pursuant to a subpoena or court order, such Confidential Information may be disclosed, provided that the party required to disclose the Confidential Information: (i) promptly notifies the disclosing party of the disclosure requirement; (ii) cooperates with the disclosing party’s reasonable efforts to resist or narrow the disclosure and to obtain an order or other reliable assurance that confidential treatment will be accorded the disclosing party’s Confidential Information; and (iii) furnishes only Confidential Information that the party is legally compelled to disclose according to advice of its legal counsel.
- Upon written request, or at the expiration or termination of this EULA for any reason, all documented Confidential Information (and all copies thereof) owned by the requesting party will be returned or destroyed by the receiving party, with written certification thereof delivered to the other party.
Marketing. Notwithstanding any other provision of this EULA, including Section 16, Paragon shall have the right, without Licensee’s consent, to use advertising and promotional materials which include Licensee’s name or trademark when promoting Paragon, making proposals to provide services to prospective customers and/or for submissions to trade competitions, awards and the like.
Force Majeure. Neither party shall be liable for breach of its obligations under this EULA (other than an obligation to make payment of any monies due) to the extent that such breach is caused by industrial disputes, lockouts, power failures, acts of government, war, hostilities, riots, civil disturbance, acts of God or other matters beyond the reasonable control of the party concerned, whether existing at the date of signature of this EULA or arising thereafter.
Survival. Notwithstanding any termination of this EULA, Sections 12, 13, 14 and 16 shall survive and continue to be in full force and effect.
Severability. If any part of this EULA shall be rendered or declared unenforceable by any decision of any court of competent jurisdiction, the remainder of this EULA shall remain in full force and effect and shall be construed as if such unenforceable provision had not been in this EULA, unless the absence of the unenforceable provision shall substantially destroy the business purpose of this EULA.
Audit. During the License Term and for a period of three (3) years after its expiration or termination, Licensee shall take reasonable steps to maintain complete and accurate records of Licensee’s use of the Licensed Program sufficient to verify compliance with this EULA.
Counterparts. This EULA may be executed in one or more counterparts, each of which may be deemed an original, but all of which together shall constitute one and the same instrument. This EULA may be executed by facsimile or electronic (.pdf) signature and a facsimile or electronic (.pdf) signature will constitute an original for all purposes.
- All exhibits, schedules and attachments hereto are incorporated into the EULA by reference and are a part thereof.
- This EULA constitutes the full and entire understanding and agreement between the parties hereto with regard to the subject matter hereof, and supersedes all prior EULAs, understandings, inducements or conditions, express or implied, oral or written, except as contained herein. The parties further agree that this EULA shall not be modified, except by a written EULA signed by both parties.
- This EULA shall be binding upon the parties hereto and their respective permitted successors and assigns.
- If any provision of this EULA is held by a court of competent jurisdiction to be invalid, void, or unenforceable, the remaining provisions shall continue in full force and effect and in no way be affected, impaired or invalidated.
- THIS EULA AND ITS VALIDITY, INTERPRETATION, PERFORMANCE AND ENFORCEMENT SHALL BE GOVERNED BY THE INTERNAL LAWS OF THE COMMONWEALTH OF PENNSYLVANIA, NOTWITHSTANDING ANY CONFLICT OF LAW RULES. ANY DISPUTES HEREUNDER SHALL BE LITIGATED EXCLUSIVELY IN THE STATE AND FEDERAL COURTS HAVING JURISDICTION IN LANCASTER COUNTY, PENNSYLVANIA, BY NON-JUR TRIAL, AND PARAGON AND LICENSEE EACH AGREE TO SUCH JURISDICTION AND WAIVE ALL RIGHTS TO JURY TRIAL.
- No waiver by Paragon of any condition, or the breach of any term or covenant contained in this EULA, whether by conduct or otherwise, in any one or more instances, shall be deemed or construed as a further or continuing waiver of any such condition or breach or a waiver of any other condition.
- Headings contained herein are for convenience of reference only and are not to be considered in construing this EULA. Words used herein, regardless of the number and gender specifically used, shall be deemed and construed to include any other number, singular or plural, and any other gender, masculine, feminine or neuter, as the context indicates is appropriate. The word “including” when used herein is intended to be exclusive of the word or phrase it modifies and is not intended to be exclusive or limiting.
- All notices, claims, requests, demands, and other communications pursuant to this EULA shall be in writing and shall have been deemed to have been duly delivered if delivered in person or deposited in the United States mail, first class postage prepaid, addressed as set forth on the following signature page or to such other or additional persons or addresses as Paragon or Licensee may subsequently designate in writing delivered to the other party in accordance with this subparagraph (h).

#### Paradigm Mobile: Privacy Policy

Paradigm Mobile: Privacy Policy – Paradigm ERP by Paragon – Documentation
Home
Add-Ons and Integrations
Paradigm Mobile: Privacy Policy
Last updated: December 08, 2021
This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the
Privacy Policy Generator
Interpretation and Definitions
Interpretation
The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
Definitions
For the purposes of this Privacy Policy:
Account
means a unique account created for You to access our Service or parts of our Service.
Affiliate
means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
Application
means the software program provided by the Company downloaded by You on any electronic device, named Paradigm Mobile
Company
(referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Paragon Computing Solutions LLC, 20 S. Reamstown Rd, Stevens PA 17578.
Country
refers to: Pennsylvania, United States
Device
means any device that can access the Service such as a computer, a cellphone or a digital tablet.
Personal Data
is any information that relates to an identified or identifiable individual.
Service
refers to the Application.
Service Provider
means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.
Usage Data
refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).
You
means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
Collecting and Using Your Personal Data
Types of Data Collected
Personal Data
While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
Email address
First name and last name
Phone number
Address, State, Province, ZIP/Postal code, City
Usage Data
Usage Data is collected automatically when using the Service.
Usage Data may include information such as Your Device’s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.
Use of Your Personal Data
The Company may use Personal Data for the following purposes:
To provide and maintain our Service
, including to monitor the usage of our Service.
To manage Your Account:
to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.
For the performance of a contract:
the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.
To contact You:
To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application’s push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.
To provide You
with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.
To manage Your requests:
To attend and manage Your requests to Us.
For business transfers:
We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.
For other purposes
: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.
We may share Your personal information in the following situations:
With Service Providers:
We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.
For business transfers:
We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.
With Affiliates:
We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.
With business partners:
We may share Your information with Our business partners to offer You certain products, services or promotions.
With other users:
when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.
With Your consent
: We may disclose Your personal information for any other purpose with Your consent.
Retention of Your Personal Data
The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.
Transfer of Your Personal Data
Your information, including Personal Data, is processed at the Company’s operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.
Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.
The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.
Disclosure of Your Personal Data
Business Transactions
If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.
Law enforcement
Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).
Other legal requirements
The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:
Comply with a legal obligation
Protect and defend the rights or property of the Company
Prevent or investigate possible wrongdoing in connection with the Service
Protect the personal safety of Users of the Service or the public
Protect against legal liability
Security of Your Personal Data
The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
Children’s Privacy
Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.
If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent’s consent before We collect and use that information.
Links to Other Websites
Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party’s site. We strongly advise You to review the Privacy Policy of every site You visit.
We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
Changes to this Privacy Policy
We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.
We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.
You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
Contact Us
If you have any questions about this Privacy Policy, You can contact us:
By visiting this page on our website:
https://goparagon.com/contact-us

#### SmartBuild Import On Quotes And Orders

SmartBuild Import On Quotes And Orders – Paradigm ERP by Paragon – Documentation
Home
Add-Ons and Integrations
SmartBuild Import On Quotes And Orders
Paradigm
This FAQ will go over the free and paid version of the SmartBuild Integration Import feature. The paid version allows access to a feature that imports from SmartBuild directly, without having to copy over the file. This is an efficient way to get all of the parts for a job, into an order or quote.
Manual Import
This is the base version of this feature.
Go to Outputs.
Download the CSV File. This CSV File will be directly importable into Paradigm.
From there, the file can be imported into a quote or an order. Information how to import an order from an excel file can be found here:
Customer Portal: Importing An Order From An Excel File
Go to the order screen in Paradigm and select “Import File”. Choose the CSV File.
This will import the entire file into the order. If the imported SmartBuild SKU does not match an ID or
alias
in Paradigm, it will be imported as a
comment line
Direct Import From Smartbuild
The “Smart Build Import” option in the dropdown will give a list of all the buildings that have been drawn. Thus, skipping the CSV file download step. Note that this is part of the paid feature. The “Import Descriptions” option can be selected as well, to import descriptions from SmartBuild.
SmartBuild Viewer Link
Once imported, the SmartBuild viewer link will be saved as an attachment and a “SmartBuild” button will be shown on the advanced tab.
Customer Portal
Manual Import
Go to Outputs.
Download the CSV File.
Choose the CSV file.
Direct Import From SmartBuild
If the add on has been purchased, go to the quotes and click “SmartBuild Import”. After clicking this, the user may need to login if they have not previously.
Select “Import To Quote”
This allows for the building to be quickly entered as a quote document in Paradigm instead of having to navigate to the file and reupload it.
SmartBuild Price
To indicate to Paradigm that it should use the price of a specific inventory item on the quote or order that is in the SmartBuild import rather than the price that is in Paradigm, add an attribute named
SmartBuildImportPrice
to the Inventory Item. Items without this attribute will be set to the price that is in Paradigm.

#### Paradigm Privacy Policy

Paradigm Privacy Policy – Paradigm ERP by Paragon – Documentation
Home
Add-Ons and Integrations
Paradigm Privacy Policy
Last updated: July 25, 2024
This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the
Privacy Policy Generator
Interpretation and Definitions
Interpretation
The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
Definitions
For the purposes of this Privacy Policy:
Account
means a unique account created for You to access our Service or parts of our Service.
Affiliate
means an entity that controls, is controlled by or is under common control with a party, where “control” means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
Application
means the software program provided by the Company named Paradigm Accounting, Paradigm ERP, or Paradigm Connector.
Company
(referred to as either “the Company”, “We”, “Us” or “Our” in this Agreement) refers to Paragon Computing Solutions LLC, 20 S. Reamstown Rd, Stevens PA 17578.
Country
refers to: Pennsylvania, United States
Device
means any device that can access the Service such as a computer, a cellphone or a digital tablet.
Personal Data
is any information that relates to an identified or identifiable individual.
Service
refers to the Application.
Service Provider
means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.
Usage Data
refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).
You
means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
Collecting and Using Your Personal Data
Types of Data Collected
Personal Data
While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
Email address
First name and last name
Phone number
Address, State, Province, ZIP/Postal code, City
Usage Data
Usage Data is collected automatically when using the Service.
Usage Data may include information such as Your Device’s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
When You access the Service by or through a device, We may collect certain information automatically, including, but not limited to, the type of device You use, Your device unique ID, the IP address of Your device, Your operating system, the type of Internet browser You use, unique device identifiers and other diagnostic data.
We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a device.
Use of Your Personal Data
The Company may use Personal Data for the following purposes:
To provide and maintain our Service
, including to monitor the usage of our Service.
To manage Your Account:
to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.
For the performance of a contract:
the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.
To contact You:
To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application’s push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.
To provide You
with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.
To manage Your requests:
To attend and manage Your requests to Us.
For business transfers:
We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.
For other purposes
: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.
We may share Your personal information in the following situations:
With Service Providers:
We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.
For business transfers:
We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.
With Affiliates:
We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.
With business partners:
We may share Your information with Our business partners to offer You certain products, services or promotions.
With other users:
when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.
With Your consent
: We may disclose Your personal information for any other purpose with Your consent.
Financial Institutions:
The Company uses Plaid Inc. (“Plaid”) to gather your data from financial institutions. By using the Service, you grant the Company the right, power, and authority to act on your behalf to access and transmit your personal and financial information from your relevant financial institution. You agree to your personal and financial information being transferred, stored, and processed by Plaid in accordance with
Plaid’s end user privacy policy
Retention of Your Personal Data
The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.
Transfer of Your Personal Data
Your information, including Personal Data, is processed at the Company’s operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.
Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.
The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.
Disclosure of Your Personal Data
Business Transactions
If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.
Law enforcement
Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).
Other legal requirements
The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:
Comply with a legal obligation
Protect and defend the rights or property of the Company
Prevent or investigate possible wrongdoing in connection with the Service
Protect the personal safety of Users of the Service or the public
Protect against legal liability
Security of Your Personal Data
The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
Children’s Privacy
Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.
If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent’s consent before We collect and use that information.
Links to Other Websites
Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party’s site. We strongly advise You to review the Privacy Policy of every site You visit.
We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
Changes to this Privacy Policy
We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.
We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the “Last updated” date at the top of this Privacy Policy.
You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
Contact Us
If you have any questions about this Privacy Policy, You can contact us:
By visiting this page on our website:
https://goparagon.com/contact-us

#### UPS Worldship Integration

UPS Worldship Integration – Paradigm ERP by Paragon – Documentation
Home
Add-Ons and Integrations
UPS Worldship Integration
This FAQ will go over the
UPS Integration
in Paradigm.
Usage
Start by pasting the order number into the import key. Note that if user has a printed order with a barcode on the order, simply scan the barcode into the field.
This will import the shipping information from the order.
Delivery/Package
Select the UPS service, this is how the products will be delivered.
Fill out the packing information, this is what the product will be put in so the dimensions and weight must be accurate.
Shipment Process
After every field is filled out, go ahead and process the shipment (F10).
Users may get this message if a printer is not set up, more information on how to set up a printer can be found here:
Printer Setup
If no printer is selected, the shipment will still process but labels will not be printed.
Freight Markup
The integration can add the freight amount to the order. Users can set up a company preference to specify an additional amount that gets added to the UPS WorldShip Freight Charge.
This can be done from System >
Company Preferences
> Add-Ons > UPS Integration.
Tracking the Order
The integration will auto attach a link to the UPS tracking website.

#### Motive Integration

Motive Integration – Paradigm ERP by Paragon – Documentation
Home
Add-Ons and Integrations
Motive Integration
This FAQ will go over the Motive integration with Paradigm and any set up that might need to be done. The
Motive
Integration allows trips created in Paradigm
dispatching
to create “Dispatches” in the Motive fleet system. These dispatches appear in the Motive Driver app. Proof of delivery information such as signatures and pictures collected in the Motive Driver App for these dispatches are imported into Paradigm and
attached
to the trip and orders.
Set Up
To view the Motive integration settings, go to Company Preferences > Add-Ons
Set the Form Type and sort order for any forms that should be included with the dispatch
(Motive Support should specify which forms apply to a client).
A minimum of 2 forms are required per form type.
Forms set to the “ShipperReturn” form type will be used as both Shipper and Return Types.
If no forms are set to “Return” or “ShipperReturn”, no “Return” stop will be added to the dispatch.
(Dispatches always start with a Pickup location and then the stop locations. A “Return” location is the same as the “Pickup” location, indicating the driver should return to the warehouse)
Dispatching >
Truck List
For each truck that will be utilized with Motive Dispatches, select the Corresponding Motive ID in the Motive Vehicle ID column.
(Vehicles must be created in Motive prior to opening the Truck List screen in order for the truck to be listed in the Vehicle ID dropdown)
Dispatching >
Driver List
For each driver that will receive Motive Dispatches, select the Motive User ID that corresponds to the driver in the Motive User ID field.
Usage
Send to Motive
A dispatch is created in Motive by clicking the “Send To Motive” button on the
trip info screen
. If any changes are made to a trip after it has been sent to Motive, the dispatch will automatically be re-sent and updated in Motive.
Note
that if the Dispatch has already been completed, Motive will not allow it to be changed.
Motive requires Latitude and Longitude information for all addresses. If the latitude and longitude cannot be auto determined by the TomTom service, it must be manually set on the order, in the ship to address section. When entering coordinates, use either format shown here:
40.689212380759265, -74.04455969155815
40°41’21.2″N 74°02’40.4″W
Clear Dispatch in Motive
A Dispatch may be removed from Motive by clicking the “Clear From Motive” button on the
trip info screen
Note
that if the Dispatch has already been completed, Motive will not allow it to be cleared.
Proof of Delivery Photos and Signatures
Photos and signatures recorded in the Motive app will be imported as
attachments
on the trip and order. It will also mark stops as complete after the stop enters the Motive “Departed” status. If enabled,
Delivery Notifications
will be triggered when the stops are marked as completed.

#### DataHub: Preferences

DataHub: Preferences – Paradigm ERP by Paragon – Documentation
Home
Add-Ons and Integrations
DataHub: Preferences
This FAQ will go over the
DataHub
preference settings in Paradigm.
Main
API URL & API Key –
This is provided by Paragon Support.
Transactions
Import Vendor’s PO Number to Reference Field Instead of Vendor Order Number –
This will cause the vendor’s PO number to be displayed in the “Reference” field, instead of “Vendor Order #”.
Preferred PO Number Mode –
Select the preferred PO number to be filled in.
The options are: PO Number (Default), Job ID, PO Number & Reference
Price Changes/Item updates
Compare/Update Cost2 instead of Cost –
This will use Cost2 to compare and update, instead of Cost.
Import Description to Sales Description in addition to Purchase Description –
Vendor Descriptions are always compared against the inventory item’s Purchase Description field.
If this is enabled, the Vendor Description value will be applied to the Sales Description field in addition to the Purchase Description field. This setting will not change how the comparison is done – if the Vendor Description is the same as the current inventory item’s Purchase Description, no changes will be applied to either Purchase or Sales Description even if Sales Description doesn’t match Vendor Description.
Paradigm Server CPU Usage
– The max number of processors (“Logical processors” in Task Manager) Paradigm Server can utilize when loading Item Updates.
If the machine only has one processor, the default is 1.
Leave the value blank to use this default calculation.

#### DataHub: Pending Purchases

DataHub: Pending Purchases – Paradigm ERP by Paragon – Documentation
Home
Add-Ons and Integrations
DataHub: Pending Purchases
This FAQ will go over outgoing and incoming purchase orders in
DataHub
Pending Purchases
To start, go to DataHub > Pending Purchases. This is used to import a purchase order or vendor invoice that was transferred using DataHub.
Choose a filter and a date range. The “Pending Transactions” filter shows only transactions that have come in and haven’t been imported yet. Once imported, it will move to the “Recently Closed” list. If an order needs to be “reimported”, it can be imported again from the “Recently Closed List”.
If “Auto-set Pcs Received” is checked, the pieces received will be filled in with the number of pieces on the imported invoice.
Select the invoices or orders that are to be imported and click the import option. Once the transactions are imported, the PO or PI created for them will open in Paradigm.
Import As PO –
Creates a purchase order
Import as PI –
Creates a purchase invoice.
Find POs and Import as PI –
Finds the purchase orders and imports as a purchase invoice.
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

#### DataHub: Pending Orders

DataHub: Pending Orders – Paradigm ERP by Paragon – Documentation
Home
Add-Ons and Integrations
DataHub: Pending Orders
This FAQ will go over the “Pending Orders” form in
DataHub
. This is used to import a customer’s order that was transferred using
DataHub
Pending Orders
To start, go to DataHub > Pending Orders
Choose a filter and a date range. The “Pending Transactions” filter shows only transactions that have come in and haven’t been imported yet. Once imported, it will move to the “Recently Closed” list. If an order needs to be “reimported”, it can be imported again from the “Recently Closed List”.
Click the dropdown on the purchase order number to preview the items on an order and to see the products that are linked to those items.
Select the orders that are to be imported and click “Import As Order”. “Import All as One Order” can be used if the orders selected all have the same customer ID. This will import all the purchase orders together into one sales order.
If an item has the
attribute
“DataHubAlwaysImportDescription”, it will always use the DataHub description. One exception is that the attribute will be ignored on import if the custom options that were sent imported without error.
Unmapped Items
When importing an order and items on the order are not mapped to an item in Paradigm, the inventory item mapper will appear.
Map the items by selecting them from the drop down. If “Auto-fill Related Products” is checked when entering product mappings, all entries found with the same source product key will be auto-filled. To import the item as a miscellaneous product, check the box on the line. Once they are all mapped, click “Import Transactions”.
Mappings set here are never saved, if the Item Mapper is being shown on Pending Orders frequently, use the plus button in there to create those items, or go to their product and create an inventory
alias
. Alternatively, use the “ignore” to import as a “Misc” item.
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
Company A
has the following custom options set up:
Company B
has the following machine options set up:
If Company A selects the “Single Striations” option, it will be imported to Company B’s side and will select their “SINGLE STRI.” machine option.
Failed Custom Option Imports
If the custom option to be imported is “CUPOLA”, but the custom option on the receiving company is saved as “CUP”, the option will fail to import and an error message like below will be shown.
If the custom options match, but the selected value is not available, that will be shown in the error message as well.
For example: If Company A selected “Blue”, but Company B only has “Yellow”, “Red”, and “Green” option.
If a
custom option
fails to import, a message (example below) will be shown after the import and the information will be added to the Detail Notes field on the line:
One or more errors occurred when importing model options: DataHub options for line:…..
Imported Orders
Once the purchase orders are imported, the sales orders created for them will open in Paradigm. The sales order numbers will replace the PO numbers for the customer.
To navigate between each one, use the record arrows.
If “Import All as One Order” was used, the sales order will open and the different purchase orders will be grouped with bundles.

#### DataHub: Price Changes and Item Updates

DataHub: Price Changes and Item Updates – Paradigm ERP by Paragon – Documentation
Home
Add-Ons and Integrations
DataHub: Price Changes and Item Updates
This FAQ will go over how to do price changes and item updates in DataHub.
To start, go to DataHub > Item Updates
Adjust the filter and then click “Refresh” or press F5 to load the list. The server will begin to process the items that need to be compared. If any other users attempt to refresh this list after another user has already started this process, they will see the same progress bar and finished list.
This can take several minutes, depending on how many items it needs to compare.
Item Updates
If the filter is changed after the list is loaded, click refresh to apply it.
Items Missing UOMs
This list shows the items where matches were found for Vendor’s ID and the Product ID in Paradigm, but no unit of measure on the item matched the vendor’s unit of measure. Click the green plus to create a new item for that vendor product, or click the arrow to open the item. Once the changes are complete, click “Save Item Mappings”.
If the unit of measure on the product from the vendor and the product for the customer are not spelled the same, but still match (i.e. “EACH” and “EA”), then the UOM can just be selected by using the drop down.
Unmapped Items
This list contains items where there was no match between the Vendor’s ID and the Product ID in Paradigm. These are typically items that haven’t been ordered from the given vendor. Click the green plus to create a new item for that vendor product. Once the changes are complete, click “Save Item Mappings”.
Item Update Job Issues
If item updates are not getting completed or seem to be stuck, login as an admin and click the “Cancel/Clear Existing Job” button. This will cancel and clear any existing/previously run “Item Updates” job that may be stuck or currently running.

#### Paradigm Mobile: Trips

Paradigm Mobile: Trips – Paradigm ERP by Paragon – Documentation
Home
Add-Ons and Integrations
Paradigm Mobile: Trips
This FAQ will go over Trips in Paradigm Mobile. More information on the app can be found here:
Paradigm Mobile: Overview
Choose a date, warehouse, and select whether or not to include completed trips. This will display all of the trips that are assigned to the driver. Tapping on a trip will display the deliveries for it. More information on deliveries can be found here:
Paradigm Mobile: Delivery
Click the camera icon to add a picture to the trip. Pictures taken in the “Trip” form will be attached only to the trip, while pictures take in the “
Delivery
” form will be attached to only the order. The barcode here can be scanned into Fulfillment to load the trip.

#### Paradigm Mobile: Delivery

Paradigm Mobile: Delivery – Paradigm ERP by Paragon – Documentation
Home
Add-Ons and Integrations
Paradigm Mobile: Delivery
This FAQ will go over the Delivery feature in Paradigm Mobile, also sometimes called the Driver App. More information on the app can be found here:
Paradigm Mobile: Overview
Deliveries for the given date and for the driver assigned to the user that is signed in will be shown in the “Open” list [1]. Completed deliveries will be shown in the “Completed” list [2]. Clicking the Google Maps button will plot the entire trip [3].
Swipe to the right on a stop to display the button on the left to call the customer.
Delivery Detail
Tapping on a stop will display the delivery details.
Signature [1] – Tap on this to open the signature form.
Pictures taken in the “Delivery” form will be attached only to the order, while pictures take in the “
Trip
” form will be attached to only the trip.
If the stop is marked as having damage, an email will be sent to the dispatcher email address set in
Dispatching Settings
To send this email, the “ParadigmAPI” user must be
set up to email from Paradigm
The trip stop will be marked as completed – this will be shown in the
Trip Info
screen in Paradigm.
SMS – This will open a prompt to send a text to the customer.
The suggested messages can be customized, contact Paragon if you would like to change them.
Address Notes [5] – Tap the plus button to add an address note.
This will add a note to the address that is saved in the
Address List
. This can be used to record jobsite information, such as entry codes, drop off locations, or people that should be called at the time of delivery.
Notes [6] – Click the pencil icon to view and edit the notes.
Scrolling down will show the signature on the order and the attachments. Tap on the signature field to view the signature and click the green plus button to add an attachment.
Delivery Settings
Listed below are settings for deliveries that can be changed for the Paradigm Mobile App. Contact Paragon if you would like to configure any of these settings.
Driver Paperwork – This setting can control whether or not the trip is displayed in the app before the driver paperwork is printed.
SMS Message Templates – Standard templates can be added that appear on the trip screen that allow the driver to select a message and text it to the customer. These messages can be customized, an example would be “I will be there in 1 Hour”.
Terms Messages – Messages can be configured on a per Order Terms basis to display a message to the driver. For example if the order terms were COD, a message for the driver could be displayed that said “Payment Must Be Collected Before Unloading”.
Signing Terms and Conditions – A Terms and Conditions Message can be set up. This will appear in the trip Signature screen. Example: “By Signing, You agree that all items were received in good condition”.
Typed Signature: If this option is enabled, a typed name is required after collecting a signature.

#### Paradigm Mobile: Customer List

Paradigm Mobile: Customer List – Paradigm ERP by Paragon – Documentation
Home
Add-Ons and Integrations
Paradigm Mobile: Customer List
This FAQ will go over the Customer List feature in Paradigm Mobile. More information on the app can be found here:
Paradigm Mobile: Overview
This will show the list of customers. Use the search bar to look for a specific customer.
Tapping on a customer will display the rest of their information.
Info
The info screen displays the bill to addresses, notes, and contact methods.
Contacts
The contacts screen displays the
saved contacts
for the customer.
Ship To
The ship to screen will display the saved ship IDs for the customer.
Tasks
Displays the
tasks
created for the customer.
Logs
Displays the
logs
created for the customer.
Sales
Displays the customers total sales, based on the past days selected.
Payments
Displays the customer’s payments within the given date range, as well as their current balance.
Orders
Displays the customer’s orders between the chosen dates. Tapping on an order will display the details.
Create Orders
Tap “New Order” to create a new order.
Select the “Green Plus” button beside “Details:” to add items.
Adding Items
When adding items, first search for the item.
The select the unit measure, pieces, and if required, the length.
Quotes
Displays the customer’s quotes between the chosen dates. Tapping on a quote will display the details.
Tap “New Quote” to create a new quote, the process is the same as on an order, covered in the previous section.
Invoices
Displays the customer’s invoices between the chosen dates. Tapping on an invoice will display the details.
Invoice Detail

#### Paradigm Mobile: Settings

Paradigm Mobile: Settings – Paradigm ERP by Paragon – Documentation
Home
Add-Ons and Integrations
Paradigm Mobile: Settings
This FAQ will go over the settings in Paradigm Mobile. More information on the app can be found here:
Paradigm Mobile: Overview
To get to the settings, tap the button in the top left.
Here, the settings and some diagnostic features can be used.
Settings – Here the server address and delivery date range can be changed.
The delivery date range controls how many days in the past to include when searching for “open” trips.
Send Report – This will send a report the server. This is a troubleshooting option that uploads some diagnostic information to the server. It should only be used if Paragon directs a user to use this feature.
Send Pictures – This forces the device to upload any pictures that were not previously uploaded. This is a troubleshooting feature and should only be used if Paragon directs a user to use this feature.
Save offline pictures to device – This saves any non-uploaded pictures in the app to the devices photo gallery. This is a troubleshooting feature and should only be used if Paragon directs a user to use this feature.
Log out – This logs the user out.

#### Paradigm Mobile: Receipt Capture

Paradigm Mobile: Receipt Capture – Paradigm ERP by Paragon – Documentation
Home
Add-Ons and Integrations
Paradigm Mobile: Receipt Capture
This FAQ will go over the receipt capture feature in Paradigm Mobile. More information on the app can be found here:
Paradigm Mobile: Overview
. Information on how to use receipt capture in Paradigm can be found here:
Receipt Capture
This can be used to take a picture of a receipt for record. Once the picture is taken, fill out the rest of the information and click submit. It will then be shown in Paradigm in the receipt capture list.

#### Paradigm Mobile: Task List

Paradigm Mobile: Task List – Paradigm ERP by Paragon – Documentation
Home
Add-Ons and Integrations
Paradigm Mobile: Task List
This FAQ will go over the Task List feature in Paradigm Mobile. More information on the app can be found here:
Paradigm Mobile: Overview
This will show the tasks for the Paradigm user that is linked to the user login that is logged in. This will only be displayed if the login being used is an employee web login.
New tasks can be created by tapping the plus button.
Enter the subject and any notes for the task. Then select the due date and time.

#### Maintenance Tracking Addon

Maintenance Tracking Addon – Paradigm ERP by Paragon – Documentation
Home
Add-Ons and Integrations
Maintenance Tracking Addon
The
maintenance tracking add on
can be used to keep track of maintenance and report when equipment needs to be repaired or replaced. It can also be used to store user manuals and other equipment-related documents, schedule repairs or preventative maintenance based on calendar days or usage, and track part numbers used to complete a repair.
Main Menu
Select the warehouse to view the maintenance for or set it to [ALL] to view the maintenance for all locations. The warehouse set here will also apply to any other lists that are viewed.
View Equipment –
A list of all the equipment.
Add Log –
Add a log for a piece of equipment.
View Tasks –
Opens the task list.
Repair Order –
Create a repair order for a piece of equipment.
Calendar –
This calendar will show the repair orders on it. Clicking on a repair order will bring up the details for it.
Upcoming Repairs –
This list will show overdue and upcoming repairs in the next 30 days.
Side Bar
Task List –
Displays the list of tasks assigned to the user that is signed in.
Equipment
Main Menu –
Displays the main menu shown in the first section above.
Equipment List –
View and add equipment to the list.
Repair Schedules –
View and create repair schedules.
Repair Orders –
View and create repair orders.
Equipment types –
View and add equipment types.
Repair Types –
View and add equipment types.
Log Types –
View and add log types.
Quick Log –
Add a new log for a piece of equipment.
Inspections
Inspections –
View history and start an inspection.
Create Template –
Create a new inspection template.
Task List
This a list of all the
tasks
assigned to the user that is currently signed in, and these will also show up in Paradigm for the user that is linked to the web account that is signed in. These tasks are generated by repair orders, or manually added.
Select a date range of tasks to view.
Filter the list by who it was created by.
Refreshes the list.
Creates a new task.
Search the task list.
View the details for the task.
Mark the task as complete.
Equipment
Equipment List
This is a list of all the equipment for the selected location.
Show the discontinued equipment.
Search the equipment list
View the equipment details.
Add new equipment.
Adding Equipment
Equipment Type –
Choose the equipment type from the dropdown list. If it is not on the list, it can be added by going to the equipment types section.
Location –
Choose the location that the equipment is at from the dropdown list.
Asset Number –
This is typically used for a G/L account ID.
Rental –
If the item is a rental, check the “Is Rental?” box and select the corresponding rental product in the dropdown.
See this FAQ for more information:
Equipment Rental
Linked Equipment Type –
If this equipment is referenced elsewhere in Paradigm, use this drop down to link it.
Storing Manuals for Equipment
Manuals can be stored with equipment by attaching the manual file to it. This can be found by clicking the “Details” button on the equipment that is getting the manual uploaded to it.
Then click the plus sign beside equipment attachments and upload the manual file.
Repair Schedules
This is a list of the repair schedules for the selected location.
Search the repair schedules list.
Click on a row to view the details for it.
Create a new repair schedule.
Creating a Repair Schedule
First, choose the equipment and repair type for the repair schedule.
Then choose the interval of how often the repair will be scheduled.
Interval-based – This will schedule a repair when the interval set is reached. This is based of off logs, so in this example every 500 hours the oil change will be scheduled.
Both – When both interval-based and date-based, whichever criteria is met first will create the repair order – then both will restart counting.
Choose the user that the scheduled repair order will be assigned to.
Save the repair schedule and it will be shown on the list.
Repair Orders
This a list of repair orders in the date range for the selected location.
The date range of repair orders to view, and whether or not to show completed repair orders.
Repair order type.
Search the repair order list.
Click on a row to view its details. Any rows in red means it is overdue.
Create a new repair order.
Creating Repair Orders
Usually repair orders are generated automatically by the repair schedule, but repair orders can be manually created here.
Choose the equipment and repair type for the repair order.
Then choose date on which the repair order will be scheduled.
Assign a user and add any notes to the repair order.
Save the repair order and it will be added to the list.
Storing Materials Used
To store the materials and parts used for a repair, first find the repair on the list and click on it to open the repair order details. Then click on the “New” button in the material details section and enter in the item’s information.
Equipment Types
This is a list of equipment types, which are used when adding a piece of equipment to the equipment list.
Add a new equipment type.
Edit the existing equipment type.
Delete the equipment type.
Adding Equipment Types
Enter the type and name of the new equipment type. The type is the ID for the equipment type and can usually be the same as the name.
Save and the equipment type will be added to the list.
Repair Types
This is a list of repair types, which are used when creating a repair schedule or a repair order.
Add a new repair type.
Edit existing repair type.
Delete the repair type.
Adding Repair Types
Add a name and description to the new repair type.
Then choose the equipment type that the repair type is for.
Then save and it will be added to the list.
Log Types
This is a list of log types, which are used when creating logs for equipment.
Add a new log type.
Edit existing log type.
Delete the log type.
Adding Log Types
Enter the code and name of the new log type. The code is the ID for the log type and can usually be the same as the name.
Then save and the log type will be added to the list.
Quick Log
In this screen, logs can be added for equipment.
Choose the equipment to create the log for.
Select the log type.
Enter the amount of whatever the log type is set to.
Add notes to the log.
Save the log. It will then appear in the detail section for equipment on the equipment list.
Inspections
The inspections list will display the available inspection templates and allows the user to start an inspection for a piece of equipment. This will help with meeting OSHA equipment requirements.
Once an inspection has been started, fill in the user, equipment, and log amount.
Then complete each check or mark as “Defect” in the following screens. If “Defect” is selected a repair order may be created if the check is set up to do so, see the next section for more details.
Create Template
The Inspection Wizard Designer can be used to create an inspection checklist.
Inspection groups can be created with multiple checks in each groups. Optionally a repair order can be created if “Defect” is selected during the check, by checking “Create Repair Order?”.

#### Shelf Label Print Tool

Shelf Label Print Tool – Paradigm ERP by Paragon – Documentation
Home
Add-Ons and Integrations
Shelf Label Print Tool
This FAQ will go over how to setup and use the print label site, which is useful for printing labels for items from Paradigm. The is a feature of the
store management app
This is normally used in a hardware store environment where labels are printed out with item prices on them. A print server is required to be set up in order to print from this web page. Contact Paragon to have the print server set up.
To access the print label site, find the link to the print label webpage and login.
From there, all the print settings can be configured.
Print Server
– Choose the server from which to print from.
Printer
– Select the desired printer to be used.
Available Labels
– A list of all available labels.
Add New Label
– Choose a label to import. It is required for it to Zebra’s printing language (.zpl)
Print File
– Select a file to be printed, most times being a PDF, but all the supported file types are: .zpl, .pdf, .html, or .txt.
Label
– Select the label style to be printed.
Print on Scan/Enter
– When enabled, it will automatically print when a Product ID is scanned or entered.
Printing by Product ID
Enter the Product ID and the number of copies to be printed.
If the Print on Scan/Enter option is selected, the number of copies will need to be set before entering the Product ID.
The sales price for the label will take price levels into account. For example, if an alternative code for a box of fifty is scanned, and there is a
nonexclusive pricing level discount
for that
unit of measure
, the discounted price will be printed. The pricing used is the Cash customer’s price for 1 of the selected unit of measure.
If an alias ID is entered, the alias UPC code will then be printed onto the shelf label. More info on aliases and UPC codes can be found here:
Setting Up UPC Codes And Aliases
Printing by Batch
Printing by batch will print out labels for every item that had a price change within a given date range and category selection.
Select the date range.
Then select the item category or “[All]”.
A .xlsx file can also be uploaded with a list of product IDs to print out.
The format is a column with a header named “strProductID” and the IDs listed below that.
Optionally, the subcategory can be set as well.
Creating Printing Labels
Print labels in Paradigm are printed using Zebra’s Printing Language (.zpl). Contact Paragon to have labels created, or try they can be created and modified at this link:
Labelary Online ZPL Viewer
. Follow the example below for more info.
Currently the fields available for print labels are:
strProductID
strVendorNumber
curSalesPrice
decUnitMeasureQty
strUnitMeasure
memDescription
strCategory
strSubCategory
strUPCCode
strUPCThenProduct
strShelfID1
strShelfID2
These fields will be entered into the label code, to pull the correct information to print on the label. E.g. strProductID would display the Product ID, memDescription would be the item’s description and etc. More info on that in the example below.
Once the label is generated, it can be uploaded through the webpage:
Using Labelary to Modify a Label
For example, here’s have a simple shelf label with the product ID, sales price, and a UPC code. To view this, copy and paste the lines below into
Labelary Online ZPL Viewer
^XA
^FO10,16^Aen,25,10^FB360,1,0,r,^FD[strProductID]^FS
^FO10,39^a0n,40,35^FD[curSalesPrice]^FS
^FO60,75^BY3,3.0,10^Bun,40,y,n,y^FD[strUPCCode]^FS
^XZ
Now, to add the product description onto it beside the sales price, copy and paste the sales price line below itself and replace “curSalesPrice” with “memDescription”.
Then to move the new field to the right so it doesn’t overlap the sales price, change the x coordinate to move it to the right.
The x coordinate in this case is the “10” in “^FO10,39^”, which will be changed to “230” like the example below.
^XA
^FO10,16^Aen,25,10^FB360,1,0,r,^FD[strProductID]^FS
^FO10,39^a0n,40,35^FD[curSalesPrice]^FS
^FO
,39^a0n,40,35^FD[
memDescription
]^FS
^FO60,75^BY3,3.0,10^Bun,40,y,n,y^FD[strUPCCode]^FS
^XZ

#### Store Management App

Store Management App – Paradigm ERP by Paragon – Documentation
Home
Add-Ons and Integrations
Store Management App
This FAQ will go over how to use the store management app. This also includes the shelf label tool:
Shelf Label Print Tool
Store Management App
The store management app is mostly geared towards retail hardware stores. It allows for items locations to be set to a specific location within a store or warehouse. This will allow the new employee to find that bucket of roofing cement in 15 minutes, rather than the 35 minutes it would have taken without this information. It also scales well on smaller devices, so it can easily be used on a mobile scanner that an employee can carry with them, such as this one:
Zebra TC21/TC26
To use the shelf assignment tool, find the shelf assignment tool webpage. It should be saved in the reports list. The URL will look something like this:
http://192.168.123.456:8080/Inventory/Inventory
Once on the webpage, a product ID or an alias can be typed or scanned in. This will bring up all the information for that particular item.
Quick Order
The quick order form can be used to quickly order the given quantity. When an item is ordered from here, it looks for an open PO for the item’s default vendor that was created by the Store Management Tool. If it finds one, it adds this item to it; otherwise it first creates a new PO and then adds the item to it.
After the item is added, the PO number will be displayed.
The suggested numbers shown are:
Last Purchased Quantity, Reorder Quantity, 1, 10, 25
Stock
This tab shows the on shelf quantity, quantity available, and other info about this item.
The on shelf quantity is calculated by: Stock + Received – quantity pulled by
Fulfillment Pro
Adjust
This tab is useful for when the inventory needs to be adjusted.
Customer Portal login
is required for this tab.
Adjust Button – Adjust the current stock quantity to the actual quantity.
Order Button – Create a purchase order or select an existing one. This allows the scanned item to be added to a PO, enabling a PO to be built by walking through the store and scanning items.
Shelf Locations
This tab will display the shelves that the item is on.
Sometimes, an item like the one below might have three or more shelves – a primary sales shelf, an endcap, and a backstock shelf etc. The shelf levels can be viewed and set here if the user is signed in.
Clicking on the shelf number will bring up a list of all the items on that shelf.
Shelf Manager
If “Shelf Manager” is selected from the section above, it will go to the drop down and search bar to look for products on certain shelves.
To add an item to a shelf, start by typing/scanning a shelf ID in the search field, or by selecting one from the dropdown.
Once a shelf is selected, then products can be entered/scanned into the search field to add the item onto the shelf.
If the button highlighted above is selected, it will bring up the “Clear Shelf” button.
This will clear all items on the selected shelf.
This is useful when when verifying if the items on that shelf are accurate or if some reorganizing is being done. Clearing the shelf, then scanning in the shelf ID and then all the items is an easy way to do this.
Barcode Format
Format for shelf barcodes is a pound sign (#), followed by the ID of the shelf. E.g. “#1234”.
Shelf IDs can be found by selecting the pencil button beside the shelf dropdown. The pencil will only appear if the user is logged in with a
Customer Portal account
barcode
can then be printed with this information, to allow scanning that barcode to select the shelf ID.
Viewing Shelf Data in Paradigm
To view the shelf IDs for an item, go to Inventory > Inventory and open the item.
Then go to the Detail tab and there it will display a list of Shelf IDs.
Shelf Data in Fulfillment
If the shelf location is set, it will be shown after the item description in the
pull list
It will also then appear with the description in the
pack builder

---

[← Back to Contents](#table-of-contents---click-to-navigate)

---

## QUICK REFERENCE & SUPPORT {#reference-support}

[← Back to Contents](#table-of-contents---click-to-navigate)

### Quick Reference

**Daily Checklist**
- Check Paradigm for new orders
- Process pending invoices
- Update inventory as needed
- Prepare fulfillment
- Close any open transactions

**Key System Paths**
- [Accounting Workflow](#workflow-4-accounting--financial-management)
- [Orders Workflow](#workflow-1-customer-orders--account-management)
- [Inventory Workflow](#workflow-2-inventory--pricing)
- [Purchasing Workflow](#workflow-3-purchasing--vendor-management)
- [Reports](#workflow-10-general-system-features)

### Common Tasks Reference

**Create a New Order**
- See: [Workflow 1: Customer Orders & Account Management](#workflow-1-customer-orders--account-management)
1. Go to Order Entry in Paradigm
2. Enter customer information
3. Add line items with quantities
4. Confirm pricing and totals
5. Save and release order

**Create a Purchase Order**
- See: [Workflow 3: Purchasing & Vendor Management](#workflow-3-purchasing--vendor-management)
1. Go to Purchase Orders
2. Select vendor
3. Add items and quantities
4. Review costs
5. Submit for approval if required

**Record Received Inventory**
- See: [Workflow 2: Inventory & Pricing](#workflow-2-inventory--pricing)
1. Receive PO in Paradigm
2. Match received quantities to invoice
3. Record in inventory system
4. Update vendor payment info

**Generate Financial Report**
- See: [Workflow 4: Accounting & Financial Management](#workflow-4-accounting--financial-management)
1. Go to Reports
2. Select report type (P&L, Balance Sheet, etc.)
3. Choose date range
4. Generate and review
5. Save or print

### Workflow Index (Quick Links)

| Workflow | Purpose | Link |
|----------|---------|------|
| 1 | Customer Orders & Accounts | [Go →](#workflow-1-customer-orders--account-management) |
| 2 | Inventory & Pricing | [Go →](#workflow-2-inventory--pricing) |
| 3 | Purchasing & Vendors | [Go →](#workflow-3-purchasing--vendor-management) |
| 4 | Accounting & Financial | [Go →](#workflow-4-accounting--financial-management) |
| 5 | Production & Manufacturing | [Go →](#workflow-5-production--manufacturing) |
| 6 | Job Costing & Projects | [Go →](#workflow-6-job-costing--project-tracking) |
| 7 | Fulfillment & Shipping | [Go →](#workflow-7-fulfillment--shipping) |
| 8 | Dispatching & Logistics | [Go →](#workflow-8-dispatching--logistics) |
| 9 | System Administration | [Go →](#workflow-9-system-administration--setup) |
| 10 | General System Features | [Go →](#workflow-10-general-system-features) |
| 11 | Integrations & Add-Ons | [Go →](#workflow-11-integrations--add-ons) |

### Key Contacts

- **Accounting Questions**: accounting@wbswyo.com
- **Customer Service**: 16 North Rd | Until 5:00 PM daily
- **Operations/IT**: Contact your manager
- **Paradigm Support**: Paragon Computing Systems

### Support Resources

- Paradigm Help: In-system help (F1)
- Paragon Support: Paradigm vendor technical support
- Western Procedures: Ask your supervisor
- System Access: Contact IT Administrator

---

## DOCUMENT INFO

- **Created**: February 2, 2026
- **System**: Paradigm ERP (Paragon Computing)
- **Company**: Western Building Supply
- **Content**: 
  - 487 complete Paradigm articles
  - 11 workflows fully documented
  - Customer and vendor directory
  - Company procedures and operations
- **Status**: COMPLETE & INTEGRATED
- **Format**: Fully navigable with clickable links (works offline in browsers)

**This is your complete operational reference for using Paradigm at Western Building Supply.**

[← Back to Contents](#table-of-contents---click-to-navigate)

---

### Western Building Supply Website Content (westernbuildingsupplyllc.com)

#### Page: HOME
URL: https://westernbuildingsupplyllc.com/home-1

Quality supplies and structures for your construction needs.
Our Mission
Our focus is on building people and fostering lasting relationships. Exceptional customer service and high-quality manufactured components are simply the by-products of that process.
Quality
Experience
The quality of our products and components are equal or superior to the best on the market.
Not only have we been family owned and operated for over a decade, but we’ve also been building for 25 years. Our team is the best in the business.
Solutions
Our solutions are always custom. Never again do you need to buy a kit and pay a fortune to customize it. We make sure you get the exact building or product you want without jumping through hoops.
Delivery
Our community, customers, and employees are near and dear to us. We always strive to go the extra mile to take care of your needs and your projects. Seriously. We can help you solve most of your building challenges.

#### Page: WHAT WE DO
URL: https://westernbuildingsupplyllc.com/what-we-do

SERVICES
Job Site Delivery
Reliable, Timely Deliveries
Getting the right materials to your job site can be complex and costly, but at WBS, we’ve got you covered. Our seasoned professionals and specialized equipment ensure swift, hassle-free delivery of any quantity of building materials. We take special care with loading, handling, and route planning so your materials arrive on time, in great condition, and ready for the job at hand.
Pole Barn Design
At WBS, we specialize in pole barn design that combines advanced engineering with premium materials for cost-effective, versatile structures. Whether you’re looking for an agricultural building, a commercial facility, or a home workshop, our designs balance strength, efficiency, and customization to deliver a durable, high-performing build—every time.
Engineering
Our in-house engineering team ensures your building project is structurally sound and compliant with industry standards. We use cutting-edge software, expert insights, and meticulous attention to detail—delivering precise layouts, stamped seals, and a hassle-free process from concept to completion. Whether you’re constructing a pole barn or a commercial facility, our engineering expertise provides the confidence you need to build with ease and efficiency.
PRODUCTS
Sturdy, Safe & High-Quality Wood Trusses
WBS’s wood trusses handle heavy roof loads, ensuring robust structural integrity for any build. Backed by Simpson Strong-Tie technology and an automated truss saw, each truss is cut precisely—up to 86’ long. Our press-table assembly ensures accuracy, shorter lead times, and easy installation. We even pre-mark pole barn trusses for purlins. Whether you’re constructing a doghouse or a commercial facility—big or small—WBS delivers consistent value, performance, and engineering support, every time.
Steel Roof Manufacturer
Western Building Supply produces top-quality steel roofing in-house, eliminating the middleman to reduce errors, shorten lead times, and ensure efficient deliveries. Our advanced machinery manufactures classic AG panels, commercial R panels, soffit material, and custom trims (10’6" to 21’) in various gauges and colors, minimizing handling risks and guaranteeing durable, high-performing roofing for every project.
Laminated Columns
At WBS, we’re your premier source for laminated columns—custom-built (up to 40' long) to reduce twist, bow, and rot while enabling true engineering for greater structural performance. Compared to solid posts, our laminated design provides a more reliable foundation, streamlines truss setting, and ensures a stronger, longer-lasting build.
Post Frame Structures
Post frame construction is an efficient, adaptable solution, relying on durable posts for cost-effective, long-lasting buildings. At WBS, we specialize in post frame (pole barn) kits and leverage decades of building experience along with in-house manufacturing of all major components. This allows us to deliver quality, value, and trust every step of the way—from order placement to on-site delivery—so you can focus on building while we handle the details.

#### Page: CONTACT
URL: https://westernbuildingsupplyllc.com/contact-1

Contact Us
Drop us a line!
This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
Better yet, see us in person!
We love our customers, so feel free to visit during normal business hours.
Western Building Supply
16 North Rd, Wheatland, WY 82201, USA
3073222888
Hours
Mon
07:00 am – 05:00 pm
Tue
Wed
Thu
Fri
08:00 am – 05:00 pm
Sat
Closed
Sun

#### Page: WHY WBS?
URL: https://westernbuildingsupplyllc.com/why-wbs%3F

- Quality
We believe quality is more than a promise—it’s the foundation of everything we do. Every product and component we create meets or exceeds the industry’s highest standards, giving you peace of mind that your build is in good hands.
- Experience
For over 25 years, we’ve combined hands-on expertise with the warmth of a family-owned business. Our team is deeply committed to helping you succeed, bringing skill, passion, and a personal touch to every project.
- Solutions
Why settle for off-the-shelf kits that cost a fortune to customize? At WBS, we tailor each solution to your specific needs, ensuring you get exactly the building—or product—you’re envisioning, without the extra hurdles.
- Delivery
Our commitment to community, customers, and employees pushes us to go the extra mile. From timely logistics to hands-on support, we’re here to tackle your building challenges head-on, making your entire experience smooth and worry-free.

#### Page: TESTIMONIES
URL: https://westernbuildingsupplyllc.com/testimonies

Testimonial 1
Testimonial 2

#### Page: PRO CONTRACTORS | Western Building Supply
URL: https://westernbuildingsupplyllc.com/pro-contractors

WBS Pro Contractors are some of the most highly recommended in Wyoming. Whether you’re in the market for a skilled roofer or need a licensed General Contractor for a commercial or residential build, remodel, or renovation, we’re sure these fine companies will get the job done right.
Billy Evans Construction
Billy Evans Construction is a highly recommended Contractor in Wheatland, WY with 18 years of experience and many recommendations from clients in the community.
Capitol Roofing
From the first phone call through the life of your roof or gutters, we’ll be there when you need us! Whether you’re building, remodeling, or repairing storm damage, we hope you’ll give us the opportunity to earn not just your business, but your trust!
Capstone Industries
Duramacks Structures
Capstone exists to bring a paradigm shift to the realm of construction in the communities it serves by employing Biblical Kingdom principles in service, relationships with its employees and customers, and finance management. Capstone is the WBS 2021 Contractor of the Year.
We are committed to maintaining a high standard of integrity and workmanship in all that we do. We have a broad range of experience in many different aspects of the construction industry. Your complete satisfaction is our goal. Partner with us on your next building project. We’ll be happy to work with you!
Green Vista Roofing
We are committed to providing homeowners with roofing options that minimize energy usage. We can install solar reflective Energy Star rated asphalt shingles. We also provide full gutter installation and repair services.
Hayes Construction
When you are ready to build your dream or want to add on to your existing home, let Hayes Construction Inc. handle your custom projects. You’ll love your high-quality project that is one-of-a-kind.
Homestead Structures
JK Professional Roofing
Your premier builder for storage sheds, garages, and pole barns in Gillette WY. We realize the harsh wintry elements of Wyoming that your building has to withstand! We understand because we live here too! So that’s why we design buildings as beautiful, rugged and strong as the country around us!
JC's Carpentry
Our owner J.C. has over 20+ years of experience in construction which includes All Post Frame structures, Pole barns, Steel buildings, Steel Reroofs, Steel Residing, Interior Liners, Riding Arenas, Storage Facilities, Custom Barn Homes, Custom Homes and a variety of Ag & Commercial Buildings with uses that range from indoor sports training facilities to celebration halls.
With so many projects and years in the industry we found certain areas just seemed to need MORE…. It may be More Care, More Quality or just More Experience needed but we knew we had to go out and do just that by offering a company with builders that DO MORE! Our crews have built many barns throughout Northern CO and Southern WY and have great references to follow the completion of projects that back our mission to bring Quality Buildings that are built by Quality Builders who care!
Superior Contracting LLC
Fully insured local roofing contractor in Wheatland, WY. 8+ roof systems, gutters, skylights, and heat tape. Quality and integrity at every step.
Construction business and building pole barns. We can take your dream from bare ground, build the road, dig the footer, put in the septic, and build the pole barn. Let us make your dreams become reality!
Norb Olind Construction
Our highly experienced team of professionals can execute projects in a wide range from small projects to an entirely new home or commercial building for you. Our craftsmen strive to build you a product that will meet your highest expectations within your financial budget.
Proudly building commercial and residential fences and pole barns since 1998. We believe in excellent customer service, quality materials, and outstanding workmanship. “Bring your vision to Big D’s and we will make your dreams come true!”
Bear Mountain Construction
Young Guns Construction

#### Page: CONTRACTOR OF THE YEAR
URL: https://westernbuildingsupplyllc.com/contractor-of-the-year-1

At Western, we believe contractors are more than builders. They are leaders, craftsmen, and culture-setters who shape the future of our industry. That is why Western is more than a supply house. It is a platform and an experience. It is a place where contractors sharpen their craft, grow their leadership, and become part of a culture that is changing the way building is done.
Every year, we recognize one contractor who rises above the rest with the honor of Contractor of the Year. This award is not just about projects completed. It is about embodying the Western way. It is about building with integrity, leading crews, and representing what it means to be a Western builder.
When you walk into our shop, you will see championship-style banners hanging high. Each one is more than fabric. It is a story stitched into Western’s legacy. These banners honor contractors whose faces have been marred by dust, sweat, and long days in the arena of real work. They honor those who pressed into the storm, refused to compromise, and spent themselves in a worthy cause. They also stand as a call to the next generation of builders. They remind us that building is not just a trade. It is a craft, a calling, and a culture you can belong to.
Every banner stands for who we are: Designed to Lead and Called to Serve.
Being named Contractor of the Year is not just an award. It is a mark of distinction within the Western platform, one of the highest honors a builder can earn in our community. And when your banner goes up, it is not only a recognition of what you built, it is the standard you set for others who will follow in your footsteps. It declares that you dared greatly. It declares that you are shaping the future of building. You did not just build barns. You built with excellence. You built with integrity.

#### Page: Privacy Policy
URL: https://westernbuildingsupplyllc.com/privacy-policy

Privacy Policy - Western Building Supply
Western Building Supply values your privacy. We collect personal information such as your name, phone number, email, and ZIP code for the sole purpose of providing product estimates, responding to inquiries, and improving our services.
Your information will never be sold, shared, or disclosed to third parties, except as required by law. By submitting a form on our website or through our advertisements, you consent to being contacted by Western Building Supply regarding your request.
If you have questions about this policy, please contact us at: sales@wbswyo.com

