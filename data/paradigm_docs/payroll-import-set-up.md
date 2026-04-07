# Payroll Import Set up

Source: https://docs.goparagon.com/kb/payroll-import-setup/

---

Payroll Import Set up – Paradigm ERP by Paragon – Documentation
Home
Administration and Setup
Payroll Import Set up
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
Service Items must be created in Paradigm with the same name as the Payroll Items in QuickBooks. The Expense account of the Service Item must be set to the GL account the QuickBooks payroll item should post to. For example, if QuickBooks has a payroll item named “Federal Withholding”, a service item in Paradigm must be created and the Product ID must be “Federal Withholding”. The expense account for the item needs to be set to the account where the Federal Withholding should be posted to.  If the payroll item name from QuickBooks is too long for the Paradigm product ID, a custom item attribute for “PayrollID” can be created, and the QuickBooks item name can be set as the value of that attribute.
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
