# How to Do a Book-to-System Inventory Valuation Adjustment

Source: https://docs.goparagon.com/kb/how-to-do-a-book-to-system-inventory-valuation-adjustment/

---

How to Do a Book-to-System Inventory Valuation Adjustment – Paradigm ERP by Paragon – Documentation
Home
Accounting
How to Do a Book-to-System Inventory Valuation Adjustment
How to Do a Book-to-System Inventory Valuation Adjustment
Throughout the course of business, it is possible for the value of inventory on the valuation report to diverge from the value of inventory on the Balance Sheet. Common causes of this issue include nonstock items posting to an inventory account, purchase invoices affecting the inventory GL accounts directly rather than using a product ID, items changing to a different item class, and more. This difference, sometimes referred to as an inventory variance, should be periodically adjusted to zero to keep the reported GL value (book value) agreeing with the inventory valuation report (system value).
To do a “book-to-system” inventory valuation adjustment, first correct all of the average costs, negative inventories, and ideally correct the quantities on the products as well to ensure the reported inventory valuation is accurate. Then filter the inventory list to just the stocked items (using the “Track Stock” column) and run the “Inventory Valuation by Date” report from the reports list at the bottom.
A faster way to run the “Inventory Valuation by Date” report is to run it for a single item, and then set the “Show all products?” parameter to “Yes”.
Then run a Balance Sheet report as of the same date as the valuation report.
Compare the reported values for each account between the two reports, and make a journal entry to correct the inventory GL account values, typically by offsetting the difference to the “Inventory Adjustments” cost of sales account.
Then post the journal entry, and rerun the reports to make sure the accounts are balanced.
