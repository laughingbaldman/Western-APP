# Column Names for Inventory

Source: https://docs.goparagon.com/kb/column-names-for-inventory/

---

Column Names for Inventory – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Column Names for Inventory
Column Names for Inventory
I am wanting to import inventory, but do not know the column name to which my data corresponds.
Here is a list of commonly modified information on inventory items and the column name that Paradigm uses to store that information. The Product ID is a required field. See also:
Unit of Measure fields
,
Warehouse fields
,
Pricing fields
.
Field
Stored Column Name
Additional Info
strAdditionalInfo
Addon Product
strAddonProductID
Custom Assembly Check box
ysnAssembly
Assembly Type
intAssemblyType
Category
strCategory
Color
strColor
Color Set
strColorSetID
Current Cost
curCurrentCost
Expense Account
strCOGSAccountID
Inventory Account
strInventoryAccountID
Item Class
strItemClass
Manufacturer
strManufacture
Manufacturer Number
strManufactureNumber
Percent Markup
decPricingPercent
Pricing Method
strPricing
Purchase Description
memPurchaseDescription
Purchase Unit of Measure
strPurchaseUnitMeasure
Sales Account
strSalesAccountID
Sales Description
memDescription
Sales Price
curSalesPrice
Sales Unit of Measure
strUnitMeasure
Standard Cost
curCost
Standard Cost 2
curCost2
Sub-Category
strSubCategory
Sub-Category ID
intSubCategoryID
Vendor ID
strVendorID
Vendor Number
strVendorNumber
Vendor Site
strSiteName
To import into certain fields, you must first add any new entries into another table in Paradigm. These fields are: strCategory, strColor, strColorSetID, strItemClass, strPurchaseUnitMeasure, strUnitMeasure, strSubCategory, and all of the GL Account and Vendor fields.
