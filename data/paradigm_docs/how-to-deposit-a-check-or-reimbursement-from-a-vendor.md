# How to Deposit a Check or Reimbursement from a Vendor

Source: https://docs.goparagon.com/kb/how-to-deposit-a-check-or-reimbursement-from-a-vendor/

---

How to Deposit a Check or Reimbursement from a Vendor – Paradigm ERP by Paragon – Documentation
Home
Purchase Order and Vendors
How to Deposit a Check or Reimbursement from a Vendor
How to Deposit a Check or Reimbursement from a Vendor
This FAQ will go over how record a deposit if a vendor has sent a reimbursement check or a refund.
1. Create a Purchase Invoice
Go to Accounts Payable > Purchase Invoices and add a new Purchase Invoice.
Choose the Vendor
Select “Debit Memo” for the Purchase Invoice Type
Select G/L for line type and then select the account to post against (optional).
If this is a reimbursement for inventory items you may want to select the appropriate inventory item so that it removes it from inventory.
Enter the amount as a negative.
IMPORTANT:
If you are posting the Debit memo against an inventory item, you will need to put in a negative amount for Pcs/Qty Received and a positive Cost.
Post the transaction.
2. Create A Deposit
Next, you will add this amount to a Deposit. This can be done by go to Banking > Deposits and click Add to create a new deposit. Another option is to add it to an existing deposit.
Select the Accounts Payable account.
Select the Vendor.
Enter the amount (as a positive number).
Post Transaction.
3. Create A Payable
Lastly, you will need to make a Payable to apply the Deposit amount to the Debit Memo. Go to Accounts Payable > Payables and click the Add button to create a new one.
Select the Vendor
Change the check number to “None”.
Pay the full amount of the Debit Memo and the full amount of the balancing transaction from the Deposit. (Note: When a transaction such as a Deposit or Journal Entry is posted against an AP or AR account, Paradigm will create a “balancing document”. In this case, a Purchase Invoice is created and it will appear as a regular Purchase Invoice.)
Leave the Amount Paid as 0.00
Post the transaction
A variation of this process would be when a credit is given to be applied to your account. In this case, you would not create a Deposit, then you would use the Debit Memo to pay on your account with a Payable.
