# Shelf Label Print Tool

Source: https://docs.goparagon.com/kb/shelf-label-printing-tool/

---

Shelf Label Print Tool – Paradigm ERP by Paragon – Documentation
Home
Add-Ons and Integrations
Shelf Label Print Tool
Shelf Label Print Tool
This FAQ will go over how to setup and use the print label site, which is useful for printing labels for items from Paradigm. The is a feature of the
store management app
.
This is normally used in a hardware store environment where labels are printed out with item prices on them. A print server is required to be set up in order to print from this web page. Contact Paragon to have the print server set up.
To access the print label site, find the link to the print label webpage and login.
From there, all the print settings can be configured.
Print Server
– Choose the server from which to print from.
Printer
– Select the desired printer to be used.
Available Labels
–  A list of all available labels.
Add New Label
– Choose a label to import. It is required for it to Zebra’s printing language (.zpl)
Print File
– Select a file to be printed, most times being a PDF, but all the supported file types are: .zpl, .pdf, .html, or .txt.
Label
– Select the label style to be printed.
Print on Scan/Enter
– When enabled, it will automatically print when a Product ID is scanned or entered.
Printing by Product ID
Enter the Product ID and the number of copies to be printed.
If the Print on Scan/Enter option is selected, the number of copies will need to be set before entering the Product ID.
The sales price for the label will take price levels into account. For example, if an alternative code for a box of fifty is scanned, and there is a
nonexclusive pricing level discount
for that
unit of measure
, the discounted price will be printed. The pricing used is the Cash customer’s price for 1 of the selected unit of measure.
If an alias ID is entered, the alias UPC code will then be printed onto the shelf label. More info on aliases and UPC codes can be found here:
Setting Up UPC Codes And Aliases
Printing by Batch
Printing by batch will print out labels for every item that had a price change within a given date range and category selection.
Select the date range.
Then select the item category or “[All]”.
A .xlsx file can also be uploaded with a list of product IDs to print out.
The format is a column with a header named “strProductID” and the IDs listed below that.
Optionally, the subcategory can be set as well.
Creating Printing Labels
Print labels in Paradigm are printed using Zebra’s Printing Language (.zpl). Contact Paragon to have labels created, or try they can be created and modified at this link:
Labelary Online ZPL Viewer
. Follow the example below for more info.
Currently the fields available for print labels are:
strProductID
strVendorNumber
curSalesPrice
decUnitMeasureQty
strUnitMeasure
memDescription
strCategory
strSubCategory
strUPCCode
strUPCThenProduct
strShelfID1
strShelfID2
These fields will be entered into the label code, to pull the correct information to print on the label. E.g. strProductID would display the Product ID, memDescription would be the item’s description and etc. More info on that in the example below.
Once the label is generated, it can be uploaded through the webpage:
Using Labelary to Modify a Label
For example, here’s have a simple shelf label with the product ID, sales price, and a UPC code. To view this, copy and paste the lines below into
Labelary Online ZPL Viewer
.
^XA
^FO10,16^Aen,25,10^FB360,1,0,r,^FD[strProductID]^FS
^FO10,39^a0n,40,35^FD[curSalesPrice]^FS
^FO60,75^BY3,3.0,10^Bun,40,y,n,y^FD[strUPCCode]^FS
^XZ
Now, to add the product description onto it beside the sales price, copy and paste the sales price line below itself and replace “curSalesPrice” with “memDescription”.
Then to move the new field to the right so it doesn’t overlap the sales price, change the x coordinate to move it to the right.
The x coordinate in this case is the “10” in “^FO10,39^”, which will be changed to “230” like the example below.
^XA
^FO10,16^Aen,25,10^FB360,1,0,r,^FD[strProductID]^FS
^FO10,39^a0n,40,35^FD[curSalesPrice]^FS
^FO
230
,39^a0n,40,35^FD[
memDescription
]^FS
^FO60,75^BY3,3.0,10^Bun,40,y,n,y^FD[strUPCCode]^FS
^XZ
