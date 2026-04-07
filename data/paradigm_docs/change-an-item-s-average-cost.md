# Change an Item’s Average Cost

Source: https://docs.goparagon.com/kb/changing-an-items-average-cost/

---

Change an Item’s Average Cost – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Change an Item’s Average Cost
Change an Item’s Average Cost
From time to time, it may become necessary to adjust the average cost of an item. Average cost is a calculated field based on the transactions for the item, so a transaction will need to be created to adjust the cost. This is best done via a two-line inventory adjustment.
Create a new inventory adjustment.
On the first line, select the product to adjust. By default, the new quantity is loaded as zero. This is what we want, as it will remove all inventory on the product, at the old average cost.
On the second line, select the product ID again.
Set the new quantity to the original inventory quantity for that item (or the current actual inventory).
Set the “Cost Each” on the second line to the desired average cost.
Post the adjustment.
Note that since the second line of the adjustment builds on the first line, it’s important to enter the items in this order. If you need to change things on the adjustment lines after they are initially entered, it is best to delete both of the lines and add them back in, rather than editing the existing lines.
More than one item’s average cost can be corrected on a single adjustment.
The cost difference between the original average cost and the new average cost will hit the GL to offset to the previous transactions that posted to create the original average cost, correcting the GL totals as of the date of the adjustment.
In the example below, the average cost for an item is changed from 78.20 each to 75.00 each.
