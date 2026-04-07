# Import Credit Card Transactions

Source: https://docs.goparagon.com/kb/credit-card-transaction-import/

---

Import Credit Card Transactions – Paradigm ERP by Paragon – Documentation
Home
Accounting
Import Credit Card Transactions
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
A value with a * character as a prefix and and a suffix  is a contains match.
For example, if the credit card transaction payee is “ABC Acme”, setting an attribute value “*ABC*” on a vendor will auto set that vendor’s name on any credit card transactions that contain the phrase “ABC”.
A value with a * character as a prefix is an “Ends With” match.  (i.e. *Acme is “Ends with” Acme)
A value with a * character as a suffix is a “Starts With” match.  (i.e. Acme* is “Starts with” Acme)
Multiple terms can also be specified, separated by a space.  An example would be “*Acme* *ABC*”   This would match the vendor name to any payee’s that contain “Acme”
and
“ABC”.
Note
the attribute can be added multiple times to the same vendor, allowing different pattern matches to match to the vendor.
