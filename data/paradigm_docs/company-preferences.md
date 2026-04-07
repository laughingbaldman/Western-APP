# Company Preferences

Source: https://docs.goparagon.com/kb/company-preferences/

---

Company Preferences – Paradigm ERP by Paragon – Documentation
Home
Administration and Setup
Company Preferences
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
.
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
If the user has filtered the Invoice list to show 8 transactions and selects “Download as PDF,” Paradigm will produce two files containing three records each and one file containing the remaining 2 records.
Attempting to print
a number of transactions that exceeds the set limit will not succeed. For the example given previously, the following error will show: “Printing more than 3 items is not currently supported. You may choose to save to a PDF and it will export split into multiple PDFs.” The exception to this is printing from the Inventory List page, which does not check the number of records against this setting.
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
.
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
,
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
– This will be displayed underneath the logo on customer statements, quotes, orders, invoices, pick tickets. Going over 2 lines may cause the message to display on top of other fields.
Company Logo Directory – (Logo must be more than 2.9″ wide X 1.2″ high)
– This is the file name that Paradigm will use for the logo on reports. This should not need to be changed and will be set up by Paragon.
Home tab logo directory (Company Logo will be used if none provided)
– This is the file name that Paradigm will use for the logo on the home screen.
Bill To and Ship To
– Choose what should be displayed along with the address in the Bill To and Ship To fields.
Days/View Related
Business days to add to order date to calculate ship date
– The amount entered here will be the amount of business days that is added to the order date to calculate the ship date.
Quote is valid for this many days
– The amount of days a quote is valid for.
Levels to go in View Related
–
View Related
Levels to go in Extended View Related
–
View Related
Allow editing transfer lead times per order
–
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
–
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
,
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
.
Show status field instead of job ID
– Shows the status field instead of the job ID field in the general tab on a transaction.
Show distances in kilometers –
Shows distance in kilometers instead of miles.
Auto-set freight to this percentage of the order total
–
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
–
This fee will be added on credit memos, based on the percentage entered and the amount the customer is returning.
Warnings and Messages
Show warning beside subtotal if there are any zero prices
– This will display a red exclamation mark beside the subtotal if any lines are at zero dollar prices. This will not show a warning if the zero dollar lines were manually set to zero.
There is 1 line on this order with a zero price.
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
Missing Purchase Orders – There are 1 items that need purchase orders. Do you want to create them now?
Warn user about missing contact method upon order release.
– Warns the user during order releasing if there is no contact method on the order, and there is other shipping info entered, and the
ship via
is not pickup or drop-ship.
Missing Contact Method – This order doesn’t have any contact method specified! You should add one before releasing to manufacturing. Are you sure you want to continue?
Warn user if ordering more items than available when releasing
– Warns the user when releasing if ordering more items than available.
There is 1 line with too few items available. (Look for lines with the warehouse highlighted in red) Do you want to continue releasing the order?
Warn user if trying to manufacture more items than are buildable when releasing –
Warns the user when releasing if they are trying to manufacture more items than are buildable.
Insufficient Buildable – There is 1 line with too few units buildable. (Look for lines with the Units Buildable field highlighted in red). Do you want to continuing releasing this order?
Limits
Allow Overriding Assembly Prices on Invoices and Orders
– Allows for overriding assembly prices on invoices and orders.
Allow Posting of invoices with $0.00 Detail Lines
– Allows posting an invoice with a $0.00 detail line.
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
–
Gift Cards
Hide employee commission percentage
–  Hides the employee
commission
percentage on the commission tab.
Lock all invoice prices on conversion
– Locks all invoice prices when an order is converted to an invoice.
Disallow removing ship date once set
– Disallows for the ship date to be removed once it has been set.
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
–
Track Discounts In GL
Require unique bundle descriptions on each line before release
– Requires unique bundle descriptions to be entered before release.
Require a ship date before release.
– Requires a ship date before release.
Show the Print screen after releasing a PO
– Shows the print screen after releasing a purchase order.
Use current cost instead of standard cost
– Learn more about it here:
How To Use Current Cost Instead Of Standard Cost On POs And Purchase Invoices
. This will be ignored if the inventory standard cost is zero for that product.
Cascade received costs to related sales transactions
–
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
Always reset tax 2 to the default when posting invoices (Only set this if you are not using tax 2 for anything at all)
– Resets tax 2 to default when the invoice is posted.
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
SmartBuild Integration
Do It Best Integration
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
Disallow Posting Job Transfer or Journal Entry Lines set as taxable under both tax 1 and tax 2
– Disallows posting job transfers or journal entry lines that are set as taxable under both tax 1 and tax 2.
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
