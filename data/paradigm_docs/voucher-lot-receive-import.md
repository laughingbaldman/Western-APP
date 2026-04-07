# Voucher Lot Receive Import

Source: https://docs.goparagon.com/kb/voucher-lot-receiving-import/

---

Voucher Lot Receive Import – Paradigm ERP by Paragon – Documentation
Home
Purchase Order and Vendors
Voucher Lot Receive Import
Voucher Lot Receive Import
This FAQ will go over the lot receiving import on purchase invoices, to import received quantities and costs. More information on the Voucher Receive import can be found here:
Voucher Receive Import
Import
To import the file, go to the Purchase Invoice > Import File > Voucher Lot Receive Import
Fulfillment Pro Receiving
When a user is confirming the
received amount in Fulfillment Pro
, they will have the option to scan the lot IDs.
Non-VAM Coil Import File Format
The import file must be a
.xls
or
.xlsx
.
The column header names do not need to match exactly, but the importer will skip the first row so a header must be used.
Only columns shown in the screenshot above marked with an asterisk are required.
Excel Sheet Example
VAM Coil Import File Format
The import file must be a
.xls
or
.xlsx
.
The column header names do not need to match exactly, but the importer will skip the first row so a header must be used.
Only columns shown in the screenshot above marked with an asterisk are required.
Use the component lot name column only if specifying the master
value added manufacturing
(VAM) coil the painted coil was produced from, in the case of a lot tracked coil being produced from a lot tracked coil.
Excel Sheet Example
Importer Logic
The product ID in the file must exist on the voucher.
The lot details on the voucher will be reset with the details and quantity received from the file.
If the same product is on multiple lines of the voucher, the import only affects the first one and receives all of the imported data on that line.
To calculate quantity, if the
base unit of measure
is a linear unit of measure, then the lot quantity will be calculated by the length.
If the unit of measure is “CWT”, then it will calculated it by weight/100.
Otherwise it will calculate the quantity by the weight.
If the import includes the Lot Qty column, then it will use that as long as it is not zero.
