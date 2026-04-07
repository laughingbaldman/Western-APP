# Store Use Items

Source: https://docs.goparagon.com/kb/store-use-items/

---

Store Use Items – Paradigm ERP by Paragon – Documentation
Home
Accounting
Store Use Items
Store Use Items
When items are consumed from inventory by a company’s own use, use tax is typically owed on the cost of those items. This FAQ will go over two different ways this can be recorded in Paradigm, but note that we are not tax accountants and you should check with your accountant to confirm how use tax needs to be tracked in your situation.
Inventory Adjustment and Journal Entry
The first way this can be done is by creating an inventory adjustment to correct the item’s stock amount, and a journal entry to account for the tax.
First, create an inventory adjustment to remove the consumed inventory. Set the “Qty Diff” to a negative amount of the number used (in the case pictured below, five units were consumed). When creating the inventory adjustment, be sure to change the account to the store use cost/expense account.
After the adjustment has been posted, go to General Ledger > Journal Entries and create a new journal entry.
On the new journal entry, credit the sales tax account for the use tax amount, and debit the store use account. Post the journal entry.
Store Use Customer
A faster way this can be done is by creating a Store-Use customer and charging the items to this account, then writing the account balance off periodically. This method, while faster, does affect the sales reports – if this is not acceptable for the relatively minor amount of store-use transactions, use the process described above.
The first step is to create the customer and set its
pricing type
to “Markup Standard Cost” with a pricing percentage of 0% in the detail tab. This will cause the prices to calculate as the items’ standard cost.
After the customer has been made, create an invoice for that customer and add the items to be removed from inventory, and select the correct tax rate at the bottom of the invoice. This will calculate a tax amount based on the cost of the materials, since the price calculates as the cost of the item.
Lastly, add a G/L line for the “Store Use” account to the invoice for -1 pcs, and set the sales price equal to the transaction total, to bring the balance of the invoice to $0 (ensure this line is not marked as taxable). Post the invoice.
Alternatively, the store use invoices can be posted to the account without the offsetting G/L line, and instead be written off via a journal entry at the end of the period.
