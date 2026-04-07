# Inventory Import: Price Levels

Source: https://docs.goparagon.com/kb/inventory-import-price-levels/

---

Inventory Import: Price Levels – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Inventory Import: Price Levels
Inventory Import: Price Levels
This FAQ will go over importing price level data in Paradigm. More information on inventory import & export can be found here:
Inventory Import & Export
This table contains the data found in the price level tab on an item.
How Should Inventory Price Levels Be Set Up And How Do They Work?
Importing New Price Level Data
When importing new price level data, be sure to include the following columns: product ID (strProductID), price level (strLevel), unit measure (strUnitMeasure), minimum (decMinQuantity), maximum (decMaxQuantity), pricing method (strPricing), and discount amount (decDiscount). Be sure that the price levels have a leading zero when importing (i.e. 01,02, etc).
When importing select the “Add new price levels only.” to only add new records, or select “Update existing and add new price levels.” to update existing and add new records.
Be sure to not include a cntID column when adding new data. Including a cntID will update the existing record that has that ID, more information on that in the next section.
Updating Existing Price Level Data
The easiest way to set up an import sheet is to first export the product IDs you want to make changes to. Be sure to include the cntID and product ID column.
Then make the desired changes in the sheet and then import it back into Paradigm. Be sure to choose the “Update existing price levels only.” option when importing.
Example
A common use case for this is updating discount amounts.
First export the cntID, product ID, price level, and discount columns. Be sure that the price levels have a leading zero as shown in the example.
Then adjust the discount amount for each level and then import it into Paradigm.
