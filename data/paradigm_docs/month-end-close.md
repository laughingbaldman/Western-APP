# Month End Close

Source: https://docs.goparagon.com/kb/month-end-close/

---

Month End Close – Paradigm ERP by Paragon – Documentation
Home
Accounting
Month End Close
Month End Close
This FAQ will go over the recommended month end closing procedures for Paradigm ERP.
Unposted Transactions
Go to System >
Reminder List
to check for any Unposted Transactions. If any are listed, go to the corresponding list screen and review and post transactions as needed.
Bank, Credit Card, and Undeposited Funds Accounts
Reconcile all bank and credit card accounts.
Instructions on that can be found here:
Bank Reconciliations
Check for any old unreconciled transactions.
Old unreconciled transactions may indicate duplicate or incorrect entries and may require correcting entries.
Run the Undeposited Funds Reconciliation report by going to System > Reports > General Ledger.
Verify the Difference calculation on this report is $0.00.
Accounts Receivable
Check the Order List “Finished, Not Invoiced” filter and look for orders that should have been invoiced but are not.
This can also be seen in the “Missed Invoicing for Completed Orders” report.
Reviewing Orders listed under the “In Progress” filter is recommended as well.
Run the Receivables Aging Totals by going to System >
Reports List
> Accounts Receivable and set the date to the last day of the month you are closing.
Verify the Difference amount listed for
customer prepayments
and Accounts Receivable is $0.00.
Run the “Unapplied Credits” report and review any unapplied credits for customers.
This shows unapplied credits that could be cleared against invoices, or applied as order prepayments for a customer. See this FAQ for more information on prepayments:
Reassigning Prepayments
4.
Review customer balances, checking for any balances that appear incorrect.
Accounts Payable
Run the “Accounts Payable Aging” report by going to System > Reports List > Accounts Payable and set the date to the last day of the month being closed.
Verify the Difference amount listed for
vendor prepayments
and Accounts Payable is $0.00.
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
Compare the GL Account totals on the Inventory Valuation report to the Inventory Account balances on the Balance Sheet.  If there are small differences, create a journal entry to adjust the general ledger account balances to match the account balances on the Inventory Valuation report. More info on that process can be found here:
How To Do A Book-To-System Inventory Valuation Adjustment
.
If there are large differences, more investigation is needed to determine the cause and Paradigm support may need to be contacted to assist with finding the underlying issues.
From the Inventory List, run the Standard Cost Deviation report from the list footer and set the option to compare Standard Cost to Average Cost.
Note any large differences between standard cost and average cost and update standard costs or research incorrect average costs.
Repeat this process for any manufactured items, but choose the option to compare standard cost and assembly cost.
Go to the Inventory > Inventory Builds to view the Build List. Select the “Open Builds” filter, which will show open builds on released orders. Sort the list by the production date column, and review any old, unposted builds to determine if they should be posted.
Lot Depletion
If using
lot tracking
, adjust the depleted lots to 0 on at least a monthly basis. Learn how to mark lots depleted
here
and how to generate a lot depletion inventory adjustment
here
.
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
.
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
