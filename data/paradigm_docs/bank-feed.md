# Bank Feed

Source: https://docs.goparagon.com/kb/bank-feed/

---

Bank Feed – Paradigm ERP by Paragon – Documentation
Home
Accounting
Bank Feed
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
.
Clicking the “Create” button on an unlinked deposit will create a receivable. The user still needs to manually select the customer and post.
Clicking this button on a
bank account
will create a write check if there is a check number specified. If a check number is not specified, a withdrawal will be created.
Ignore – Ignores the bank transaction and hides it from the list.
Before a transaction is matched, these optional columns can be filled out for the transaction as well:
Department
,
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
