# Customer Credit Holds

Source: https://docs.goparagon.com/kb/customer-credit-holds/

---

Customer Credit Holds – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Customer Credit Holds
Customer Credit Holds
This FAQ will go over the different credit hold settings and functionality in Paradigm.
Credit Holds
Company Preference Settings
Company credit hold settings can be found by going to System > Company Preferences > Sales > Credit Holds
Set credit hold when past invoice due date by X days –
A credit hold will be applied if a customer has unpaid invoices that are overdue by a specified number of days. The overdue period is calculated from the invoice’s due date, not the days since invoicing. For example, if an invoice is dated on the 1st with a due date of the 15th, it would be 5 days overdue on the 20th, not 20 days overdue.
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
UN-PAID INVOICES OLDER THAN 20 DAYS
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
Permission denied. (You are not authorized to release an order above $1,000.00)
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
