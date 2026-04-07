# Row Statuses on Order Detail

Source: https://docs.goparagon.com/kb/row-statuses-on-order-detail/

---

Row Statuses on Order Detail – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Row Statuses on Order Detail
Row Statuses on Order Detail
This FAQ will go over the different row statuses on an
order detail
line.
Status Text
There are two columns that can be used to show the status on detail rows. They are called “Status” and “Status Icon”. There are several different statuses that a line can have.
The status column gives a quick view of whether that line is completed or not. If multiple statuses apply, it will display the most completed one. The exception to this is manufactured lines, which will not show statuses higher than “Mfg Locked” until manufacturing for that line has been completed. These are listed with the highest priority first:
Shipped
Includes the name of the person who marked as shipped and shows a truck icon.
Packed
Includes the name of person who packed it and the staging area. [
Fulfillment Pro: Packing
]
Pulled
Includes the name of person who pulled it and the staging area. [
Fulfillment Pro: Pulling (Picking)
]
PO Received
This line has been received on a purchase invoice. [
Receiving Material
]
PO Created
A purchase order has been created for the item. [
Create Purchase Orders by Default
]
RFQ Created
A request for quote has been created for the item.
Ignored
The item has been ignored in Fulfillment Pro [
Ignoring Lines
].
Mfg Complete
Item has been completed in manufacturing. [
Manufactured To Order Item
]
Mfg Locked
Item is currently locked by manufacturing. Manufacturing Locked happens when a member of the production team clicks the “Lock” button on the order detail.
Mfg Exported
Item has been exported to manufacturing. [
Connex
,
Variobend
,
Eclipse
]
Printed
Transferred Out
Includes name of person who transferred it. [
Inventory Transfers
]
Transferred In
Includes name of person who transferred it. [
Inventory Transfers
]
Auto-Complete
This is shown if the item is set to not show in Fulfillment Pro.
On Hold
If order is released to manufacturing but the line has changes that were not yet released.
Qty Changed
If order is released to manufacturing but the quantity has changes that were not yet released.
Released
If order has been released but nothing else has been done to the line.
No status
Comments
,
bundle lines
and
GL
lines never display a status.
This is also the default status for a line on an unreleased order.
Status Icon
If the line status is Ignored-Complete, Auto-completed, Manufactured, PO received, Pulled, Packed, or Shipped, it will show a green checkmark:
If the line status is Printed, Mfg. Exported, Mfg. Locked, RFQ Created, PO Created, or Transfered Out, it will show a partial circle:
If a line status is Released, Qty Changed, On Hold or Ignored, it will show an empty circle:
If no other statuses apply, it will show a blank box
How to Show Line Status Text and Icon
If the line status text and icon do not appear in the order, right-click the order header and select “
Show Column Chooser
“. Then select “Status Icon” and “Status”.
