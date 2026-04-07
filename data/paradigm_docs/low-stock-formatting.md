# Low Stock Formatting

Source: https://docs.goparagon.com/kb/low-stock-formatting/

---

Low Stock Formatting – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Low Stock Formatting
Low Stock Formatting
This FAQ will go over how Paradigm decides when to format the warehouse ID and quantity available in red.
Warehouse ID
Unreleased Orders
On unreleased orders, if the Pcs Ordered on a line is higher than the Quantity Available the warehouse ID will be highlighted in red.
In the example below, that item has 15 in stock. The line is set to order 16 pcs which is more than what is available so the warehouse ID is shown in red. Quantity available will still show 15, since the line has not been released yet.
Released Orders
The warehouse ID on released order lines will only turn red if the quantity available is less than zero. In the example below, the released line has 16 on order but there are only 15 in stock which causes the quantity available to be -1.
Editing a Released Line
If the Pcs Ordered on the line is changed, the line is unreleased and the Qty Available will be updated. In the example below, the item has 15 in stock and 10 Pcs ordered which causes the Qty Available to be 5.
If the Pcs Ordered is edited to 17 Pcs Ordered but is not released, the Qty Available will then show 15 since the line is no longer committed. The warehouse ID will also be highlighted red, since there are more Pcs Ordered than the Qty Available.
Units Available
The units available field will be shown in red if it is negative.
Unreleased Orders
On unreleased orders, if the Pcs Ordered on a line is higher than the Quantity Available, the Quantity Available and warehouse field will be highlighted in red.
In the example below, that item has 30 in stock. The line is set to order 31 pcs which is more than what is available. Quantity available will still show 30, since the line has not been released yet.
Released Orders
The Quantity Available on released order lines will only turn red if the quantity available is less than zero. In the example below, the released line has 31 on order but there are only 30 in stock which causes the quantity available to be -1.
Editing a Released Line
If the Pcs Ordered on the line is changed, the line is unreleased and the Qty Available will be updated. In the example below, the item has 30 in stock and 15 Pcs ordered which causes the Qty Available to be 15.
If the Pcs Ordered is edited to 32 Pcs Ordered but is not released, the Qty Available will then show 30 since the line is no longer committed. The quantity available will also be highlighted red, since there are more Pcs Ordered than the Qty Available.
Unit Buildable
The units buildable field will be shown in red on a released order if it is negative.
