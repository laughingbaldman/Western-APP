# How to Refund Tax That was Mistakenly Charged

Source: https://docs.goparagon.com/kb/how-to-refund-tax-that-was-mistakenly-charged/

---

How to Refund Tax That was Mistakenly Charged – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
How to Refund Tax That was Mistakenly Charged
How to Refund Tax That was Mistakenly Charged
This FAQ will go over how to refund that was mistakenly charged. In this example, the tax being refunded was a 6% tax charge on a $100 invoice.
If AvaTax Is Being Used
If
AvaTax
is being used, follow the steps below:
Create and post a
credit memo
with the entity use code assigned to credit back the tax.
Then create and post a new invoice that is
tax exempt
.
After that, apply the invoice and credit memo against each other through a receivable.
If AvaTax Is Not Being Used
If
AvaTax
is not being used, follow the steps below:
Create an invoice, set the tax code to the same as the original invoice, and enter the miscellaneous item (MI) on two lines.
Set “Pcs Ord” to -1 on the first item, be sure it is marked as taxable in the “Tax” column, and set the sales price set to the taxable total of the invoice being refunded. This essentially “returns” the taxable product.
Set “Pcs Ord” to 1 on the second item, mark as nontaxable by entering “0” in the “Tax” column, and set the sales price set to the taxable total of the invoice being refunded. This essentially correctly “sells” the item as nontaxable, like it should have been originally.
The total will be a negative amount for the tax, and the invoice will be postable.
