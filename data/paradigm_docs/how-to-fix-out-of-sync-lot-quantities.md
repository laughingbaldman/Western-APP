# How to Fix out of Sync Lot Quantities

Source: https://docs.goparagon.com/kb/how-to-fix-out-of-sync-lot-quantities/

---

How to Fix out of Sync Lot Quantities – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
How to Fix out of Sync Lot Quantities
How to Fix out of Sync Lot Quantities
Issue:
The quantity in the Lots Management window does not link to the Quantities in the Warehouse stock tab of the inventory item. In this example, our lot quantity was 100, and the quantity shown in the warehouse was 80.
This FAQ is designed to correct an issue where the lot quantity does not equal the inventory quantity.  Keep in mind, the lot form will include units that are showing in the “received” column on the item. This will not need to be done very often, the main reason it can happen is from transactions getting unposted that were already posted before the item was set to track lots.
Step 1:
Create an inventory adjustment that removes all of the inventory from the lots, and post it. In this case, 100 will get put in the qty sold column for the lots. It is OK for now if there is still inventory on the item, or if inventory goes negative. In this case it gets set to -20. This is necessary because items with inventory in a lot cannot be switched to not track lots.
Step 2:
Go to affected inventory item > Detail tab and uncheck the Use Lots box.
Step 3:
Create a second inventory adjustment to remove all inventory from the product, setting the stock to 0. This is important because items with inventory cannot be set to track lots.
Step 4:
Go back to the Detail tab and check the “Use Lots” box.
Step 5:
Create a third Inventory Adjustment to bring in the correct inventory and lots, making sure to enter the correct cost on the line as well.
The lot quantity and inventory quantity will now match.
