# Inventory Tips and Tricks

Source: https://docs.goparagon.com/kb/inventory-tips-and-tricks/

---

Inventory Tips and Tricks – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Inventory Tips and Tricks
Inventory Tips and Tricks
Item classes
are used to quickly and easily assign default values to inventory items. Classes assign defaults to three things: posting accounts, whether or not the item tracks stock, and the default tax settings. Classes can be created and edited by clicking the ‘Item Class’ link at the top of the ‘General’ tab in an inventory item. Note that any of the settings can be changed from the default on the item, the class is purely a default.
Discount sensitivity codes
can be assigned to an item to control the maximum percentage of discount can be given from the ‘Discount Sales Price’ customer pricing type. Additionally, users will be warned if they put a discount larger than the specified max discount onto a detail line. Click the ‘Disc. Sensitivity Code’ link to create the desired code, then select it on an item to limit the discounts.
The rounding precision of an item can be set to control how the price is rounded when dealing with certain pricing types. Prices are rounded up to the next increment of the price level.
When working with ‘Markup Standard Cost’ or ‘Percent of Margin’
pricing types
, the sales price can be typed in and Paradigm will calculate the percentage markup.
In the item detail, setting the ‘Create PO’s’ flag to YES will cause the item to show in blue text when it is entered on an order, and it will be selected to convert by default when converting an order to a PO.
Mark an item as ‘
Discontinued
’ to remove the item as an option from dropdowns without deleting it.
By default, items that have linear measurements that are not linear will not allow their lengths to be edited on order detail lines. If this is required for an item, check the box for ‘Enable editing linear measurements for non-linear UOMs’, found on the item detail tab.
Individual items can be marked as taxable or non-taxable under each tax ID that is created. To mark an item as not being taxable under a certain code, first, check the box for ‘Custom Tax Settings’ located at the top of the detail tab, then uncheck the ‘Taxable’ column for certain tax codes. ‘Taxable as Component’ is used in certain cases for use tax.
Use
Models
to group similar items together and gain functionality on the order form.
To set up an alternate code for a product ID, enter the new code under the ‘Alternative’ tab in the ‘Alias’ section. Each alias must be unique from any other alias or product ID.
For components that are used in production that may have other products substituted for them, set up the acceptable substitute in the ‘
substitute
’ section. The wizard button will help you assign appropriate substitute quantities.
For items that are purchased from more than one vendor, the alternate vendor IDs, vendor numbers, and costs can be entered in the ‘Vendors’ tab. These will be used when the item is entered onto a PO for the alternate vendor. More information on that can be found here:
Set Up Alternate Vendors
Many assembly types can be assigned in the ‘Assembly/Kit’ tab. Click
here
to learn more about them.
Paradigm has several options to edit sets of items at once. Learn more about
Edit Pricing
,
Edit Price Levels
,
Import/Export
.
Other Lists and Inventory Quantity/Cost Management
When items are manufactured for stock, use a Manufacture Order which can be accessed in Purchase Order > Manufacture Orders. Enter the product and quantity to be made and release it to production.
Inventory that is removed from stock and thrown away can be adjusted out of the inventory in Paradigm by using the inventory discard feature. Learn more about it
here
.
The inventory warehouse list can be used to see a list of each item and warehouse to quickly see how the stock is distributed across warehouses. This form is accessed under Inventory> Inventory Warehouse List and contains the same information that can be found for one item in its ‘Warehouse Stock’ tab.
To adjust inventory, use either
Worksheets and Analyses
or Inventory Adjustments. When using inventory adjustments, be sure to enter the appropriate cost when inventory is being added, ensure that the count is in the same terms as the item is (counting bags of an item instead of eaches can cause big variations in inventory), and be sure to use the correct adjustment column for adjusting inventory to the new quantity. Using the ‘New Qty’ column will set the inventory equal to the entered number, whereas entering a ‘Qty Diff’ will only change the quantity by the entered amount. Also, be sure that adjustments are not unposted if any of the inventories of the items have changed since the adjustment was posted as this will cause inventory to go off again. Note that the account against which the difference in cost is posted can be controlled in the adjustment header.
Promotions or sales can be set up using the
Promotions
form.
The
Purchasing Agent
can be used to more easily reorder products.
