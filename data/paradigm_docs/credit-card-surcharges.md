# Credit Card Surcharges

Source: https://docs.goparagon.com/kb/credit-card-surcharges/

---

Credit Card Surcharges – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Credit Card Surcharges
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
