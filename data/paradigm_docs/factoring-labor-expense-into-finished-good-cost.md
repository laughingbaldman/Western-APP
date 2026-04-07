# Factoring Labor Expense Into Finished Good Cost

Source: https://docs.goparagon.com/kb/factoring-labor-expense-into-finished-good-cost/

---

Factoring Labor Expense Into Finished Good Cost – Paradigm ERP by Paragon – Documentation
Home
Accounting
Factoring Labor Expense Into Finished Good Cost
Factoring Labor Expense Into Finished Good Cost
This FAQ will go over how to factor labor expense into the finished good cost, also known as “Item Labor Recovery”. This process can be used for manufacturing expense recovery of any type, such as equipment or maintenance expenses.
Create A Labor Offsetting Expense Account
Go to
General Ledger > Chart Of Accounts > Add > Expense Account
and create a “Labor Offsetting Expense” account. This account will hold the negative balance of the labor expense. We recommend to set this to the same account ID as the labor account, with a “.1” added to the ended for reporting purposes.
Labor Item Set Up
Set up a non-stock item labor item by choosing a non-stock
item class
[1] and set the cost as well [2]. The cost amount will depend on the amount of cost that should be factored into the finished good item. Set the expense
account
to the “Labor Offsetting Expense” account [3]. It is recommended not to set this to a standard “Labor” account, otherwise that labor account will not show the true labor expense.
As production builds with the labor component are completed, expense will be pulled from this account and included in the finished good item’s inventory/cost account.
Add Labor Item To The Assembly
After the labor item is set up, it can be added to the
manufactured item’s
assembly. To do this for all manufactured items, the
Assembly data import
can be used.
