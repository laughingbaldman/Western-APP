# Change A Batch Of Items To Stock Or Non-Stock

Source: https://docs.goparagon.com/kb/change-a-batch-of-items-to-stock-or-non-stock/

---

Change A Batch Of Items To Stock Or Non-Stock – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Change A Batch Of Items To Stock Or Non-Stock
Change A Batch Of Items To Stock Or Non-Stock
This FAQ will go over how to set a batch of items to stock or non-stock.
Inventory Adjustment
If setting the items from stock to non-stock, the first step is to do an inventory adjustment to set the stock to zero.
A physical count worksheet can be used to do this in bulk:
How To Do A Physical Inventory
Export Items
First,
export
the items that need to be adjusted from the inventory list. Include the “StrItemClass” column.
After the items are exported, set the new
item class
. The “Track Inventory” setting on the item class will control whether or not the items will be set to track stock. Changing the item class will also update the default GL accounts on the item.
After those changes are made,
import
that file into Paradigm to apply the changes.
