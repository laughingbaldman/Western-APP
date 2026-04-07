# Online Payments

Source: https://docs.goparagon.com/kb/online-payments/

---

Online Payments – Paradigm ERP by Paragon – Documentation
Home
Add-Ons and Integrations
Online Payments
Online Payments
This FAQ will go over the steps needed to receive online payments in Paradigm.
1. Receiving Payments
Receiving Credit Card Payments –
To receive credit card payments, an account will need to be set up with the
EBizCharge Integration
.
Receiving ACH Payments –
To receive ACH payments, an account can be set up with
EBizCharge
or can be set up with the bank using the
Integrated ACH Payments Addon
.
Additional paperwork and setup is required on the EBizCharge side for ACH payments, and this is not automatically included with a credit card account.
2. Customer Online Access
For customers to pay online, one or both of these add-ons can be used:
Online Payments and Confirmations
–
Allows for the sending of a confirmation email directly through Paradigm as well as requesting a prepayment or invoice payment.
Customer Portal
–
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
.
Choose Payment Method –
If a customer has multiple options for their payment method, the window below will be shown.
ACH (Personal) –
Directs the customer to the EbizCharge personal ACH payment page.
EBizCharge is used in this case because personal bank accounts cannot be processed through the
Paradigm ACH integration
.
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
