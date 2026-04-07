# Multi Warehouse

Source: https://docs.goparagon.com/kb/multi-warehouse/

---

Multi Warehouse – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Multi Warehouse
Multi Warehouse
This FAQ will go over how to set up and use multiple warehouses in Paradigm. This can be used to keep inventory amounts separated for different locations and warehouses. Contact
Paragon Support
to add a second warehouse, so that we can help make sure everything is set up correctly.
How to Add a New Warehouse
To add a new warehouse to Paradigm, follow the FAQ here:
Warehouses
After a new warehouse is created, it can be used in the forms listed below.
Default Warehouses
The default warehouse field on the item’s detail tab can be used if the item should always come from a certain warehouse, such as a manufactured item where the machine to produce it is at the selected warehouse. Clicking the advanced button here will display the pop up that is covered in the next section.
Advanced Default Warehouses
Advanced default warehouse set up can be found by going to Inventory > Inventory Settings > Default Warehouses. Only use the default warehouses pop up if an item has complicated defaults. (e.g. – If sold from warehouse A, pull from B, but if sold from C then pull from D)
Here the warehouse that an item is produced at by default can be set, depending on which warehouse it is being shipped from. The shipping warehouse is the warehouse ID that is in the order header, and the production warehouse is the warehouse ID on the detail line. In this example, when “AAC” is shipped from “MAIN”, it will be produced at “Warehouse #1”.
Default Warehouse – User Preferences
The default warehouse can also be set by going to System > User Preferences > User Defaults > Warehouse/Salesperson.
Inventory Transfers
Inventory can be transferred between different warehouses using the inventory transfer form. More information on inventory transfers can be found here:
Inventory Transfers
Inventory by Warehouse
The new warehouse will be shown in the Inventory by Warehouse form, which can be found by going to Inventory > Inventory by Warehouse
Each item will be displayed once for every warehouse. The warehouse quantities shown here are the totals for just that warehouse, not the item’s entire inventory.
Inventory Count Columns
The warehouse will appear on a row on an item in the inventory count columns on the Warehouse Stock tab. More information on the inventory count columns can be found here:
Inventory Count Columns
Keep Stocked –
If this is not checked the item will never show up in
Purchasing Agent
, otherwise it will be shown if it is included in the chosen filter. In the Store Management Tool, it will make price change labels not get printed for that item at that location.
Transfer Lead Times
Transfer lead times can be set up for the different location combinations. More information on that can be found here:
Production Lead Days
