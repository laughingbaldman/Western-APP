# Physical Inventory Count with Lots

Source: https://docs.goparagon.com/kb/physical-inventory-count-with-lots/

---

Physical Inventory Count with Lots – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Physical Inventory Count with Lots
Physical Inventory Count with Lots
Physical inventory count with lots is very similar to a regular
physical inventory count
, except for the couple differences listed below.
Create Physical Count Worksheets
Printing a Physical Inventory Sheet
To print physical inventory count sheet for lot tracked items, first create physical count worksheet.
Add the lot tracked items and then print out the “Physical Inventory Count” report.
Importing An Excel File
The excel sheet must be set up without headers, with the product ID in the first column, count in the second column, and the lot name in the third column like the example below:
After filling in the Excel file, go to Inventory > Physical Count Worksheets and click the green plus button.
From there, click the “Import Lot Items” button at the top.
Then choose the file to import and it will be added to the sheet in Paradigm. Be sure the employee ID and warehouse ID are correct and click the save button.
Adding Items to the Adjustment
Only Adjust Counted Lots
If checked, when adjusting lot-based products, only the lots included in the worksheets will be adjusted. Any lot not included in a worksheet will keep its current stock quantities.
If un-checked, all lots for the selected products will be adjusted to zero if they are not included in the worksheet.
Add Units For Lots on Unposted Builds To Worksheet Quantities
If checked, when adjusting lot-based products, any lot assignments on un-posted builds will get added into the adjusted qty to prevent the stock from being subtracted twice.
If un-checked, lot assignments on un-posted builds will be ignored, so the worksheets must include those in their count to get the correct number. (Or the count must be done when there is no production in progress.)
Add Current Units Pulled To Worksheet Quantities
Checking this box will include units pulled in the stock calculation on the analysis. This can be used so that the inventory count is accurate, even after invoices are posted.
If there are 10 units in stock, with 7 units counted and 3 units pulled, selecting this option will adjust the total back to 10 units.
If this is not checked and the pulled number is not figured into the physical count of 7 units, posting the invoice would cause the 3 units to be taken out of stock, leaving the total at 4 units.
This will only work if the units pulled has not changed since the count was made.
To account for this if the units pulled have changed since it was last made, the amount pulled with need to manually be added into the number on the physical count sheet.
