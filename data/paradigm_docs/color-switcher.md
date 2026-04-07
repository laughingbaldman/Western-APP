# Color Switcher

Source: https://docs.goparagon.com/kb/color-switcher/

---

Color Switcher – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Color Switcher
Color Switcher
This FAQ will go over how to use the color switcher in Paradigm. This feature can be used only on quotes and orders.
The color switcher can be used to find and replace characters in the product IDs selected. The is mainly used to switch colors (i.e. Replacing “BL” with “AG” in the list of selected product IDs on an order.), but it can also be used to switch product IDs to any other product ID.
Color Switcher
Selecting Items For Color Switcher
Items that are selected will be shown when color switcher is open. If no items are selected then entire order will be brought in.
However, if the order has been released, only lines that have not yet been locked by production will be able to load into the color switcher.
Using Color Switcher
Text entered in the “Find Text” field will be found in the product ID and replaced with the text entered in the “Replace With” field. If the resulting product ID is a valid item in Paradigm, it will be shown in the “Product ID” column.
If a match is not found, a red blank is shown in the “Product ID” column. The “Show Only Unmatched” check box can be used to show only the unmatched product IDs.
The item can then either be skipped by selecting the “Skip” button or by manually selecting the new product. The “Skip All Unmatched” button can be used to mark all the product IDs without a match to be skipped.
Color Drop Downs
Color suggestions will be shown in the “Find Text” based on the colors of the selected products that have a color abbreviation defined. The matches column is the number of product IDs the color code matched with.
More information on color abbreviations can be found here:
Inventory Color List
If only one color is found for all of the items in the list, the color code will be filled in automatically.
Color suggestions will be shown in the “Replace With” dropdown for the colors with an abbreviation filled in the Inventory Color List.
Replace With Nothing
The “Replace With Nothing” check box can be use to remove the “Find Text”. This can be used to remove characters from the product ID, such as to replace CP6WH with CPWH.
Text can also be added if the “Find Text” is blank and there is text in the “Replace With” field.
Color Switcher Logic
The color switcher goes from
right
to
left
and replaces the first match it finds.
For example if the find text is “WH” and the replace text is “AG”, the code WH9WH would be changed to WH9AG. If WH9AG is a valid item, it stops. If it is not a valid item, it would check AG9WH as well.
