# Track Discounts in GL

Source: https://docs.goparagon.com/kb/track-discounts-in-gl/

---

Track Discounts in GL – Paradigm ERP by Paragon – Documentation
Home
Accounting
Track Discounts in GL
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
.
To create a warranty work invoice, set all the lines on an invoice to a 100% discount and then check the “Post Discount to Warranty Work” box on the advanced tab.
