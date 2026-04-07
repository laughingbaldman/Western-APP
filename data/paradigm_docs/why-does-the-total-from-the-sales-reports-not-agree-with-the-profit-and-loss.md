# Why Does the Total from the Sales Reports Not Agree with the Profit and Loss?

Source: https://docs.goparagon.com/kb/why-does-the-total-from-the-sales-reports-not-agree-with-the-profit-and-loss/

---

Why Does the Total from the Sales Reports Not Agree with the Profit and Loss? – Paradigm ERP by Paragon – Documentation
Home
General
Why Does the Total from the Sales Reports Not Agree with the Profit and Loss?
Why Does the Total from the Sales Reports Not Agree with the Profit and Loss?
A report of sales based on invoices alone is not expected to agree with the profit and loss report. This is because there are amounts on invoices that don’t affect sales, and transactions that affect sales that aren’t invoices.
Here are a few things that can cause this sort of difference:
An item that doesn’t have a sales account as its default item sales account.
A direct GL line on an invoice for a non-sales account.
A journal entry that affected a sales account.
The sales reports may be set to include sales tax/freight in the totals, but those amounts aren’t configured to post to a sales account. The freight account can be changed by going to: General Ledger > Default GL Accounts
