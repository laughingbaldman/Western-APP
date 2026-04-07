# Inventory Import: Special Prices

Source: https://docs.goparagon.com/kb/inventory-import-special-prices/

---

Inventory Import: Special Prices – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Inventory Import: Special Prices
Inventory Import: Special Prices
This FAQ will go over importing special pricing data in Paradigm. More information on inventory import & export can be found here:
Inventory Import & Export
This table contains the data found in the special pricing tab on an item.
Importing New Special Price Data
When importing new special pricing data, be sure to include the following columns: product ID (strProductID), unit measure (strUnitMeasure), begin date (dtmBeginDate), end date (dtmEndDate), and special price (curSpecialPrice).
When importing select the “Add new special prices only.” to only add new records, or select “Update existing and add new special prices.” to update existing and add new records.
Be sure to not include a cntID column when adding new data. Including a cntID will update the existing record that has that ID, more information on that in the next section.
Updating Existing Special Price Data
The easiest way to set up an import sheet is to first export the product IDs you want to make changes to. Be sure to include the cntID and product ID column.
Then make the desired changes in the sheet and then import it back into Paradigm. Be sure to choose the “Update existing special prices only.” option when importing.
Example
A common use case for this is updating special prices.
First export the cntID, product ID, begin date, end date, and special price columns.
Change the special prices in the sheet and then import it into Paradigm.
