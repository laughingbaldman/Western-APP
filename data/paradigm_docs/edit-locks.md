# Edit Locks

Source: https://docs.goparagon.com/kb/edit-locks/

---

Edit Locks – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Edit Locks
Edit Locks
Edit lock errors are caused when two users attempt to modify the same record at the same time, since only one user is allowed to edit a record simultaneously. Their purpose is to prevent data from being changed without being saved. If a user tries to edit a transaction that’s locked, this error will be displayed:
Record Locked – Record is currently locked by [user]. Please wait a moment, and try again. (Table name: [table]).
The best way to get around this is to ask the user currently editing this transaction (In this case “sales”) to save and close the transaction. But sometimes edit locks will be abandoned on an order due to crashes or other mishaps, which means the lock is still in place even though the user no longer has the transaction open. These locks can be cleared if the user has permissions for it. If the user doesn’t have permission to clear locks, a way to clear an abandoned edit lock is to have the user with the current lock open the transaction and edit/save it. If a user has a transaction open in a tab that isn’t focused, the edit lock will automatically be removed after five minutes.
Request Edit Record
If a user tries to edit a transaction while another user is already editing it, a pop up will be shown asking the user if they want to request access:
Request Edit Record – This record is locked by user: [USERNAME]. Do you wish to request permission to edit?
The user editing the transaction will receive a notification, and can choose to “Confirm” or “Deny” the request. If an option is not chosen within 15 seconds, the request will automatically be accepted.
Once the request is accepted or denied, the user that requested it will received a notification.
This feature is only available if the following
company preference
is enabled:
Enable live change notifications
Clearing An Edit Lock
To clear an edit lock, click the “Clear Locks” button in the transaction header. This button will be disabled if the transaction is already completed or posted.
Then in the pop up click the “Edit Lock” check box and then select “Unlock”.
This will then allow the transaction to be edited, and the other user (sales) will no longer be able to edit the transaction.
Clearing Edit Locks Through Data Utilities
Another way to clear edit locks is through data utilities. This can be found by going to System > Data Utilities > Clearing. Select the document type that needs the locks cleared from it and select “Clear Locks”.
Template Edit Locks
Template edit locks will be set on a quote or order when it is set as a
template
.
Customer Portal Edit Locks
Edit locks can also be caused from customer portal users editing an order. All Paradigm users have permission to override the customer portal user and edit the order.
Edit Lock Permissions
To enable this, go to System > User Security
Then open the user’s settings and select “Allow clearing locks on orders and invoices”. More information on setting up user permissions can be found here:
Creating Users And User Security
