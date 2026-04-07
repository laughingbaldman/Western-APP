# Payment Terms

Source: https://docs.goparagon.com/kb/payment-terms/

---

Payment Terms – Paradigm ERP by Paragon – Documentation
Home
Administration and Setup
Payment Terms
Payment Terms
This FAQ will go over Payment Terms in Paradigm.
Setting Up Terms
Payment terms in Paradigm can be viewed and edited by going to System > Company Preferences dropdown > Terms.
From there, fill in all of the info for the new terms.
Terms –
Name of the term.
The payment term names need to be unique.
Disc Date/Discount Days –
The date or amount of days the customer has to pay before to get the early payment discount.
Discount for early payment –
Discount given for payment on or before the discount date.
Date Due/Balance Due Days –
The date or amount of days the customer has to pay before getting a late payment fee. If date driven terms are selected and “31” is entered into this column, it will always select the last day of the month.
APR for late payment –
Fee percent for a late payment. This is used when calculating finance charges, more info on that can be found here:
Finance Charges
.
Date Driven Terms –
This option controls how the terms discount date and due date are calculated based on the Disc Date/Discount Days and the Date Due/Balance Due Days.
Unchecked: the Discount Days and Balance Due days are simply added to the invoice date to produce the discount date and due date. In this setup, an invoice dated 6/5 with Net 10 terms will be due the 15th, and an invoice dated 6/8 will be due 6/18.
Checked: The Discount Date and Date Due columns are used as the day of the month for the discount date and due date. In this setup, an invoice dated 6/5 with Net 30th terms will be due 6/30 and an invoice dated 6/8 would also be due 6/30. The due date can also be pushed to the next month, more on that below. Date Driven Terms are also sometimes referred to as “proxy terms”.
Due Next month if within X days –
This setting is only used with terms that are marked as “Date Driven”. If the invoice date is within this specified number of days of the date due set by date driven terms, it will push the due date to the next month. “Due Next Month if within X days” is almost always set to the same number as the “Date Due”. In the example below, if the invoice terms were set to a date-driven terms that were due on the 30th, and the “Due next month if with X days” was set to 30, the due date would be pushed to 7/30 since 6/30 is within 30 days of 6/22.
Same-Day Payment Discount –
The discount applied when payment is made on the same day as the invoice.
COD (Dispatching) –
If checked, a warning icon will be shown beside the order total in
Daily Deliveries
.
Module –
Choose if the terms will appear in AP or AR modules.
If it should appear in both, choose AR/AP.
Sort –
The order the term will appear on the list.
After adding new terms, close and reopen Paradigm to get the new record to show up in the lists.
Terms Discount Calculation Options
The way terms discounts are calculated can be changed by going to System > Company Preferences > Sales Tax.
