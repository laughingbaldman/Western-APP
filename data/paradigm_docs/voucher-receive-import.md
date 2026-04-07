# Voucher Receive Import

Source: https://docs.goparagon.com/kb/voucher-receive-import/

---

Voucher Receive Import – Paradigm ERP by Paragon – Documentation
Home
Purchase Order and Vendors
Voucher Receive Import
Voucher Receive Import
This FAQ will go over how to import a file to import purchasing invoice received quantities and costs. More information on the Voucher Lot Receive import can be found here:
Voucher Lot Receive Import
Import
To import the file, go to the Purchase Invoice > Import File > Voucher Receive Import
Import File Format
The import file must be a
.xls
or
.xlsx
.
The column header names do not need to match exactly, but the importer will skip the first row so a header must be used.
Only columns shown in the screenshot above marked with an asterisk will be imported.
This format used here is the same as the format exported through Customer Portal, using the “Export To Excel” button on the invoice.
Excel Sheet Example
Import Logic
Below is a summary if the importer logic when importing.
Bundle Header Name
If it finds a bundle match it will put the entirety of that product on that line, unless there are multiple of that product in that bundle. In that case it will place it on remaining items.
If the importer finds at least one valid product (including aliases), bundle, or linear measurement match in the import, then it will enforce bundle ID matches on all the imported lines.
Unmatched bundle IDs will be added as a comment line: “Bundle Not Found…”.
If it is in this bundle mode and one of the import lines does not have a bundle, then it may only be matched to VI lines that are not in a bundle. Otherwise it is also rejected as “Bundle not found…”
If there are no valid bundle/product/LM matches, then bundles are ignored completely and point 1 will be skipped
If the unit of measure is linear, it will then try to match it based off of the length.
If the product being imported does not have a matching length anywhere on the order, it will be shown as a comment on the order.
If an item is imported with a different unit of measure (i.e. Bag instead of Each), then the unit of measure from the import will be used if it exists on the item.
If the unit of measure does not exist, the line will still be imported but the unit of measure will be ignored.
If no match is found, a comment will be added.
Invalid Product –
Could not match the ID to the Vendor Number, Product ID, or Alias.
Product not on Purchase Invoice –
Matched to a Vendor Number or Product ID, but could not find it on the purchase invoice at the given bundle* or linear measurement.
Bundle Not Found –
Matched to a Vendor Number or Product ID but could not find the given bundle on the purchase invoice*.
*Bundle only is factored in if at least one full match is found in a bundle. If there is not a match found in a bundle, it will attempt to match without the bundle and only on vendor number, product ID, or linear measurement.
