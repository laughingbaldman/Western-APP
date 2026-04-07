# Inventory Import: Inventory Item Images

Source: https://docs.goparagon.com/kb/inventory-import-inventory-item-images/

---

Inventory Import: Inventory Item Images – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Inventory Import: Inventory Item Images
Inventory Import: Inventory Item Images
This FAQ will go over importing and assigning inventory item images in Paradigm. More information on inventory import & export can be found here:
Inventory Import & Export
The inventory item images table contains the URLs for the images shown on items.
More information on inventory item images can be found here:
Item Images
Importing New Item images
When importing new inventory item images, be sure to include the following columns: product ID (strTransID), file name (strFileName – set this to
Link
), and URL (URL).
When importing select the “Add new item image URLs only.” to only add new records, or select “Update existing and add new item image URLs.” to update existing and add new records.
Be sure to not include the CntID column when adding new data. Including the CntID will update the existing record that has that ID, more information on that in the next section.
Updating Existing Item Image Data
The easiest way to set up an import sheet is to first export the product IDs you want to make changes to. Be sure to include the CntID and product ID (strTransID) column.
Then make the desired changes in the sheet and then import it back into Paradigm. Be sure to choose the “Update existing item image URLs only.” option when importing.
Example
A common use case for this is updating the URL.
First export the cntID, strTransID, and URL.
Change the URL in the sheet and then import it into Paradigm.
