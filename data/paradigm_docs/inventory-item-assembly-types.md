# Inventory Item Assembly Types

Source: https://docs.goparagon.com/kb/inventory-item-assembly-types/

---

Inventory Item Assembly Types – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Inventory Item Assembly Types
Inventory Item Assembly Types
There are several types of assemblies available for use in Paradigm. They can be set up to properly handle manufactured items such as trim, miscellaneous assemblies such as a broom and broom handle, value-added processes such as painting bare coil, as well as rapidly entering several lines on an order. On top of this, the ‘Custom Assembly’ checkbox can be checked to allow editing the components on an order and calculate the cost, price, and weight of the product based its components. The types are explained in more detail below.
General Assembly
This type of assembly is to be used for items such as a set of drill bits, where each of the bits are inventoried separately but can be sold as a set for a better price. When an invoice with a general assembly on it posts, the components are removed from stock, the assembled item is added into inventory, and then that inventory is immediately removed by the invoice (it is sold). This allows one item to remove multiple items from inventory when it is sold.
Use cases:
Drill bit sets, broom and broom handle, garage door openers, etc.
Manufactured to Order
This is the most common type of assembly. Products that are set as manufactured to order will create a build when they are released on an order. This build then shows up in the production module and when completed, will move inventory from the components to the produced item, ready to be removed by the invoice for that order. Note that items will only show in production when they have also been assigned a machine to be produced at on the ‘Production’ tab in the item.
Use cases:
trims, panels, cut lumber, trusses, etc.
Kit/Group
This type of assembly will add the component parts to the order as their own detail lines under a comment line with the description of the header item. When added onto an order it will trigger a prompt which allows the user to enter how many of the product should be added to the order, and each of the components is added to the order with the assembly quantity multiplied by the number requested.
Use cases:
garage doors, horse stalls, sets of inventory items for fast pricing (all standard trims for example), etc.
Value-Added Manufacturing
This type of assembly is used for combining products into another product from a purchase transaction. A common use case for this type of assembly is painting raw coil. In this case, the painted coil would be marked as Value-Added Manufacturing and would have raw coil and a paint item in its assembly. The paint code needs to be marked as a ‘VAM Service Charge’ in its item detail tab. When the paint code is purchased from a vendor –aka coil is painted–a prompt will be brought up to select the final product that is being brought into stock (the painted coil), but all that will be paid for is the paint.
Use cases:
painting raw coil, attaching boots to posts, etc.
Kit/Bundle
This type of assembly will add the component parts to the order as their own detail lines under a
bundled line
with the description of the header item. When a kit is added onto an order it will trigger a prompt which allows the user to enter how many of the product should be added to the order, and each of the components is added to the order with the assembly quantity multiplied by the number requested.
Use cases:
garage doors, horse stalls, sets of inventory items for fast pricing (all standard trims for example), etc.
Custom Assembly
This checkbox allows for greater control of the general assembly and manufactured to order assembly types.
If ‘Custom Assembly’ is checked, the price, cost, and weight of the item will be calculated as the sum of the components when it is entered into an order. It will also allow that assembly to be changed each time it is used (by double-clicking the product ID on the order). Because of this, items that are marked as custom assemblies should have 0 cost and 0 sales price in their ‘General’ tab, to avoid confusion and be sure that the assembly is priced accurately. Use cases:
special bent trim
, custom trusses, etc.
If ‘Custom Assembly’ is not checked, the price, cost, and weight of the item are simply what is defined in that item’s ‘General’ tab, allowing prices to be controlled separately from the component parts. These assemblies are not editable on the order detail.
Use cases:
stock or standard trim, stock trusses, panels, etc.
