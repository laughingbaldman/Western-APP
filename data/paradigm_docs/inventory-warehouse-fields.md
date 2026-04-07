# Inventory Warehouse Fields

Source: https://docs.goparagon.com/kb/inventory-warehouse-fields/

---

Inventory Warehouse Fields – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Inventory Warehouse Fields
Inventory Warehouse Fields
I am wanting to import Inventory Warehouse information, but do not know the column name to which my data corresponds.
Here is a list of field names from the Inventory Warehouse table into which you are able to import. The Product ID and Warehouse ID are required. NOTE: Some fields not specified below will show up in certain dropdowns–these are fields from the Inventory table and are not actually stored in the Warehouse table. ALSO: the stock levels and cost information in this table are automatically calculated, changing them in the data accomplishes nothing. See also:
Inventory fields
,
Unit of fields
,
Pricing fields
.
Field
Stored Column Name
Product ID
strProductID
Warehouse
strWarehouseID
Reorder Point
decReorderPoint
Reorder Quantity
decReorderQty
Warehouse Location
strWarehouseLocation
Shelf ID
strShelfID
Notes
strNotes
Buyer
strBuyerUserName
Max Quantity
decMaxQty
To import into certain fields, you must first add any new entries into another table in Paradigm. These fields are: strWarehouseID, strWarehouseLocation, strShelfID, and strBuyerUserName.
