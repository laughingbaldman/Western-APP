# Inventory Pricing Columns

Source: https://docs.goparagon.com/kb/inventory-pricing-columns/

---

Inventory Pricing Columns – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Inventory Pricing Columns
Inventory Pricing Columns
I am wanting to import Inventory Pricing information, but do not know the column name to which my data corresponds.
Here is a list of field names from the Inventory Pricing table into which you are able to import. All of the fields except Notes and Sales Price are required. NOTE: Some fields not specified below will show up in certain dropdowns–these are fields from the Inventory table and are not actually stored in the Warehouse table. See also:
Inventory fields
,
Unit of Measure fields
,
Warehouse fields
.
Field
Stored Column Name
Product ID
strProductID
Level
strLevel
Unit Measure
strUnitMeasure
Unit Measure Quantity
decUnitMeasureQty
Minimum Quantity
decMinQuantity
Maximum Quantity
decMaxQuantity
Pricing Method
strPricing
Discount
decDiscount
Notes
strNotes
Sales Price
curSalesPrice
Exclusive?
ysnExclusive
Rounding Level
dblRoundingLevel
To import into certain fields, you must first add any new entries into another table in Paradigm. These fields are: strUnitMeasure and decUnitMeasureQty.
