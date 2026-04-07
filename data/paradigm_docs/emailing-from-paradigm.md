# Emailing From Paradigm

Source: https://docs.goparagon.com/kb/emailing-from-paradigm/

---

Emailing From Paradigm – Paradigm ERP by Paragon – Documentation
Home
General
Emailing From Paradigm
Emailing From Paradigm
Paradigm has the capability of sending emails directly from transaction forms and list. This how-to will cover setting up customers to receive
statements
by email instead of mail, emailing from various forms and lists, resending emails, and email signatures.
Instructions on setting up to email from Paradigm can be found here:
Set Up Emailing From Paradigm
Sending Emails
After defining the
email settings for a user
, they are ready to begin sending emails through Paradigm. Most print forms have a button for ‘Email’ which will add the selected report as an attachment on the email.
After clicking ‘Email’, the email or emails with top priority from the contact methods list will appear in the email to field. Then use the form to change the email as needed, and click ‘Send’. Note that clicking the buttons for ‘To’, ‘Cc’, or ‘Bcc’ will open a list of the email addresses that have been entered into Paradigm, filtered first to the email addresses for the customer/vendor the email is going to. At minimum, a ‘To’ or ‘Cc’ email is required before sending an email.
The “Email to salesperson” button can be used to send an email to the salesperson on the current transaction.
Attachments
To send attachments on the order in the email, click the “Show
Attachments
” button on the print pop up. This will display a list of the attachments on the order and the attachments on the items. If the checkbox beside an attachment is selected, it will be added to the email.
Customer Send to Email Address
To set up a customer to receive emailed invoices/statements instead of mailed invoices/statements, enter the address to send these reports to the customer’s “‘”Send Batch Emails To:” field [1]. This email address will be used when populating emails for customer statements and invoices.
If statements should be sent to a separate email address, click the “Edit” button highlight below and enter in the “Send Statement Emails To:” field [2]. If the entered email is invalid, it will prompt the user that the entered email is invalid.
Emailing from Lists
Batch Emailing
To email from a list form, first filter the list to the records to run the
report
against, then select a report from the set of available reports at the bottom of the form. Then select the email icon from the bottom. Information on how to set a vendor’s default payment email can be found here:
Payments Default Email Address
. Information on how to set a customer’s default statement and batch email can be found here:
Customer Batch Email Address
Alternatively, use the ‘+’ to the left of each line in the list. Then hover the mouse over “Selected Items” and click the print icon at the bottom. From there select the email icon.
After gathering any information needed for the reports, Paradigm will open the ‘Email Batch’ list, with each email listed. Emails that are missing addresses will show in red and must be corrected by clicking the folder for that email before sending. After verifying the list of emails, click ‘Send’ to send all of the emails from the list. More info on the email batch form can be found here:
Email Batch Form
.
Online Payments and Confirmations
If the
online payments and confirmations
feature has been enabled, this pop up will be shown when batch emailing invoices to add a payment link in the email.
“Right Click” Option Emailing
Emails can also be sent from the list by “right clicking” the transaction. More information on right click options can be found here:
Right Click Options In Lists
Mass Email
Emails can also be sent to a list of email contacts without attaching a report (annual updates, price increase notifications, etc.) Filter to the contacts to email, select the ‘Mass E-Mail’ button, and click “Create Emails”. If an email is generated through this feature but there isn’t an email address, no record will be created for it in the email queue list.
To set a mass email for a customer or vendor, enter one in the “Send Batch Email To” field. Double clicking that field will automatically fill in the email with the highest priority set. If the entered email is invalid, it will prompt the user that the entered email is invalid.
Viewing Sent Emails
If an email fails to send for any reason, the user who sent it will be notified that they have an unsent email and will be asked to edit and resend it. The same list can be accessed at any time by opening the
Email Queue
list.
Sent emails can also be viewed on a transaction by going to the “Emails” tab. This will display any emails for that transaction, which user sent it, and when it was sent.
Paradigm Emailer
Paradigm sends emails from the server, via a program that is set to check for unsent emails at a regular interval. This program will attempt to send a failing email up to four times, pausing a minute between each attempt, but if it fails to send the fourth time it will stop attempting to send it. If a contact on a batch email does not have an email on their contact, it will appear on the list in red.
