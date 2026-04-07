# Delivery Notification

Source: https://docs.goparagon.com/kb/delivery-notification/

---

Delivery Notification – Paradigm ERP by Paragon – Documentation
Home
Dispatching
Delivery Notification
Delivery Notification
The Paradigm Delivery Confirmation feature allows sending a confirmation email or SMS when a trip stop is marked as complete in the Paradigm Mobile app or manually sent from the
trip info
screen. This can be used with the Paradigm Mobile App add-on; more info on that can be found here:
Paradigm Mobile – Mobile Driver App Add-On
Set Up
Go to System > Company Preferences > Setup > Dispatching and enable the Delivery Confirmation Feature by selecting “Email All Customers” or “Email Only Specific Customers”.
When “Email All Customers” is selected, all customers will receive delivery confirmations unless they are specifically set up to not receive confirmation emails.
When “Email Only Specific Customers” is selected, only customers that are set up to receive delivery confirmations will receive the emails.
When an email notification is automatically sent, it will send from the email account configured for the “ParadigmAPI” user.
Select the Confirmation Email Template to tell Paradigm which email template to use when sending the confirmation email. These emails will also include the stop pictures that are taken. (Information on how to set up an email template can be found
here
)
If an email to SMS gateway such as ClickSend is available, delivery confirmation text messages can be sent to customers. The Text Message template can be set up in the Confirmation SMS Template field.
When a stop is completed in the Paradigm Mobile app, the email or SMS confirmation will be sent. More information on that can be found here:
Set Up Emailing From Paradigm
Customer Set Up
A confirmation email will be sent to the Ship To email address on an order if it exists. To send confirmations to other email addresses, add a customer attribute on the customer’s detail tab named “
DeliveryConfirmationAddress
” and in the value field, specify one or more email addresses. If using multiple email addresses, separate the email addresses with semi colons. The message will be sent to the additional email addresses even if the order does not contain a Ship To Email address.
If the “Send Email Delivery Confirmations” system setting is set to “Email All Customers”, any customer that has an order with a Ship To email address or has addresses assigned via the “
DeliveryConfirmationAddress
” attribute will receive confirmation emails. A customer can be “opted out” from receiving confirmation emails by adding the “
NeverSendConfirmationEmail
” customer attribute to the customer.
If the “Send Email Delivery Confirmations” system setting is set to “Email Only Specific Customers”, by default no delivery confirmations will be sent. To enable specific customers to receive the confirmations, add the “
AlwaysSendConfirmationEmail
” attribute to the customer.
If an email to SMS gateway is in use, SMS formatted delivery confirmation messages can be sent by adding the “
SMSSendDeliveryConfirmation
” attribute to a customer, and setting the SMS address in the value field. Note that SMS messages will not be sent if the delivery confirmations are not enabled for the customer. Multiple SMS addresses can be specified by entering a semi colon separated values.
Usage
Paradigm Mobile
Delivery email or SMS confirmations are sent when a “Delivery Stop” is marked complete in the Paradigm Mobile app.
Paradigm Dispatch
Delivery email or SMS confirmations can be manually triggered from the Paradigm Dispatch Trip screen after the stop is marked complete using the icon in the Complete column.
