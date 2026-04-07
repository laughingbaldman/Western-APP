# Paradigm Transaction Numbering

Source: https://docs.goparagon.com/kb/paradigm-transaction-numbering/

---

Paradigm Transaction Numbering – Paradigm ERP by Paragon – Documentation
Home
General
Paradigm Transaction Numbering
Paradigm Transaction Numbering
This FAQ will explain why Paradigm increments numbers into Orders and Invoices. Paradigm assigns transaction numbers in sequential order separately for each transaction type, but retains the numbers when converting from one transaction type to another.
Starting Transaction Numbers
This can be found by going to System > Company Preferences > Transaction Numbers. This screen defines the starting number each type of transaction will use.
Use Next Transaction Number for Converted Document
When the company preference below is enabled, converted transactions will use the next available number for that transaction type, instead of keeping the same ending number and changing the prefix.
For example, quote number QO-0000123 would convert to the next available order number instead of using OE-0000123.
If this option is disabled when the quote is being converted and orders are already using OE-0000123 and OE1-0000123, it will increase the number in the prefix and set it to OE
2
-0000123.
Transaction Numbering (Synchronize Number Across Types – Enabled)
When enabling “Synchronize Numbers Across Types”, make sure this is done after hours. Enabling this during business hours may cause transaction numbering issues.
When enabled, Paradigm will choose the next available number for quotes, orders, invoices, back orders, and job transfers, instead of each transaction type having their own starting transaction number. This will prevent cases when two unrelated orders sharing the same order number suffix (1000 shared by SI-1000 and SI1-1000).
When a new order is created, Paradigm gets the next available number from quotes, orders, invoices, back orders, and job transfers. When that order is converted to an invoice, it retains the number from the order, and adds a number after the prefix. For example, order OE-1000 is not converted to invoice SI-1001, it is converted to invoice SI1-1000. When an invoice is directly created (not converted), Paradigm assigns the invoice number based on the next available number, which would be SI-1001 if OE-1000 already exists.
Transaction Numbering (Synchronize Number Across Types – Disabled)
When a new order is created, Paradigm grabs the next available order number. When that order is converted to an invoice, it retains the number from the order, and adds a number after the prefix. For example, order OE-1000 is not converted to invoice SI-1001, it is converted to invoice SI1-1000. When an invoice is directly created (not converted), Paradigm assigns the invoice number based on the next available invoice number, which could be SI-1000. This results in two unrelated orders sharing the same order number suffix (1000 shared by SI-1000 and SI1-1000), but makes it so the same number is used for all transactions converted off of the original.
