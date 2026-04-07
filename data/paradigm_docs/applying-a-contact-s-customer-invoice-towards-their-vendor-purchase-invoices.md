# Applying A Contact’s Customer Invoice Towards their Vendor Purchase Invoices

Source: https://docs.goparagon.com/kb/applying-a-contacts-customer-invoice-towards-their-vendor-purchase-invoices/

---

Applying A Contact’s Customer Invoice Towards their Vendor Purchase Invoices – Paradigm ERP by Paragon – Documentation
Home
Accounting
Applying A Contact’s Customer Invoice Towards their Vendor Purchase Invoices
Applying A Contact’s Customer Invoice Towards their Vendor Purchase Invoices
If a vendor to your business is also a customer to your business, you may find it necessary to apply the amount owed to you from an invoice for the customer, against any outstanding purchase invoices from the vendor. To do this, you will first want to create a clearing account that can be used for this process, whenever it is necessary.
Moving the Customer Invoice Amount to the Clearing Account
Once a clearing account has been created, add a new invoice for the customer, but set the Invoice Type to “
Credit Memo
”.
Enter a GL line on the credit memo and use the clearing account that was created earlier.
Then, set the pieces ordered to negative one and enter the total amount from the customer invoice into Sales Price column on the credit memo.
Finally, set the sales tax to NO TAX and post the credit memo.
After posting the credit memo, a form will pop up to select which invoices the credit should be applied to. Choose the invoice for which this credit memo has been made, then click Finish. This make a receivable to apply the invoice against the credit that was just created.
Applying the Amount in the Clearing Account to a Vendors Purchase Invoices
First, add a new purchase invoice for the vendor and set the Voucher Type to “Debit Memo.”
Next, enter a GL line on the debit memo and use the same clearing account that was used on the credit memo.
Then, set the Pieces Received to negative one and the cost equal to the amount entered on the credit memo.
Finally, set the use tax to NO TAX and post the debit memo.
The debit memo can now be applied to any of the purchase invoices from the vendor, either through the pay bills form or by opening up a purchase invoice and creating a payable for it.
