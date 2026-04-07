# Importing A List of Orders

Source: https://docs.goparagon.com/kb/importing-a-list-of-orders/

---

Importing A List of Orders – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Importing A List of Orders
Importing A List of Orders
This FAQ will go over how to import Quotes and Orders in Paradigm from the Quotes List page or the Sales Order List page. The Excel import tool can be used to import multiple orders at once into Paradigm from a single Excel spreadsheet.
Excel Import File Format
Paradigm supports importing orders or quotes from Excel spreadsheets only. The file must be in Excel format (.xlsx or .xls). The structure for creating the spreadsheet is described below.
Line Type Column
Order Detail Columns
Order Header Columns
Build Detail Columns
Importing Into the List Page
The Import button is located at the top right corner of the Quote List page and the Sales Order List page. Click the button highlighted below at the top of the quote or order list. This opens a Windows “Open File” dialog.
Find the Excel file and click “Open.” This will import the file. Once the file is imported, all orders that were created will open in a single page. The imported orders can be looked through by using the record selector arrows in the bottom left of the page.
Column Types
There are four sets of columns that provide the information to Paradigm about the order: Line Type, Header, Detail, and Build. See the details below for which columns are required and optional for each column type.
Line Type
The first column in the spreadsheet must be “LineType.” This indicates to Paradigm what kind of information is in each row.
The value of each cell in this column must be “H,” “D,” or “C.”
Order Header Row
The spreadsheet must have at least one header row.
An order begins with a header row marked by the line type “H,” that contains all of the order header information, such as customer, billing, shipping, or payment.
Each row that has a line type of “H” (Header) signals to Paradigm the start of a new order.
All Order Detail and Build Detail lines following an “H” row will be put onto that order.
Order Detail Rows
If a header row has no detail rows, Paradigm will create an order with the header information set, but no detail lines within it.
Detail rows need to have the Line Type set to “D.”
These rows define the order’s products, quantities, pricing, etc.
Build Detail Rows
Build Detail Rows are optional. If none are included, Paradigm will generate builds according to its normal functionality.
Set the Line Type to “C” (component) to indicate the row contains Build Details.
A set of Build Detail rows applies to the Order Detail row that comes directly above it.
Build Detail rows will be ignored during the import by Paradigm unless the following criteria are met:
The Order Detail row must have the value of the column
YsnManufacture
set to 1. See column “Q” in the example above for an illustration of this.
The item in Paradigm that matches the Product ID of the Order Detail row must have both
Assembly Type
set to
Manufacture to Order
and
Custom Assembly
turned on.
Order Header Columns
The following Order Header fields are supported. Columns that are not required do not need to be entered in the file. Columns that have an asterisk on their description mean that if that column is excluded in the file, default values from the customer will be used.
Column Type: Column Name
Description
string: LineType
Required – value must be H
string: StrCustomerID
Required – It must match an existing Paradigm customer ID.
DateTime: DtmDate
Date of Order
string: StrCustomerPO
Customer PO Number
string: StrBillToCompany
Bill To Company Name*
string: StrBillToAttention
Bill To Attention*
string: StrBillToSalutation
Bill To Salutation*
string: StrBillToCareOf
Bill To Care Of*
string: StrBillToFirstName
Bill To First Name*
string: StrBillToLastName
Bill To Last Name*
string: StrBillToAddress
Bill To Address*
string: StrBillToCounty
Bill To County*
string: StrBillToCity
Bill To City*
string: StrBillToState
Bill To State*
string: StrBillToZip
Bill To Zip*
string: StrBillToCountry
Bill To Country*
string: StrBillToContactName
Bill To Contact Name*
string: StrBillToPhoneNumber
Bill To Phone Number*
string: StrShipToCompany
Ship To Company*
string: StrShipToSalutation
Ship To Salutation*
string: StrShipToAttention
Ship To Attention*
string: StrShipToCareOf
Ship To Care Of*
string: StrShipToFirstName
Ship To First Name*
string: StrShipToLastName
Ship To Last Name*
string: StrShipToAddress
Ship To Address*
string: StrShipToCounty
Ship To County*
string: StrShipToCity
Ship To City*
string: StrShipToState
Ship To State*
string: StrShipToZip
Ship To Zip*
string: StrShipToCountry
Ship To Country*
string: StrShipToPhoneNumber
Ship To Phone Number*
string: StrShipToContactName
Ship To Contact Name*
DateTime: DtmShipDate
Ship To Date*
string: StrShipVia
Ship Via
string: StrTerms
Terms
string: StrSalesperson
Salesperson
DateTime: DtmCancelDate
Cancel Date
string: StrNotes
Notes
decimal: CurFreight
Freight
decimal: CurOther
Other
decimal: DecSalesTax
Sales Tax Rate
decimal: DecSalesTax2
Sales Tax Rate 2
string: StrMessage
Message To Print
string: StrSalesTaxCode
Sales Tax Code
string: StrSalesTaxCode2
Sales Tax Code 2
decimal: CurSalesTax
Sales Tax Amount
decimal: CurSalesTax2
Sales Tax Amount 2
string: StrWarehouseID
Warehouse ID
string: StrDepartmentID
Department ID
string: StrPricingLevel
Pricing Level
DateTime: DtmValidUntil
Valid Until Date
string: StrShipToContactMethod
Ship To Contact Method
string: StrBillToContactMethod
Bill To Contact Method
string: StrContactID
Contact ID
string: StrEmail
Ship To Email
string: StrPaymentMethod
Prepayment Type
decimal: CurPaymentAmount
Prepayment amount – This is required if strPaymentMethod is supplied.
string: StrOrderType
Order Type – Valid values are: Order, Quote, Estimate
Order Detail Columns
The following Order Detail fields listed below are supported. Columns that are not required do not need to be entered in the file.
Column Type: Column Name
Description
string: LineType
Required – value must be D
string: StrProductID
Required – It must match an existing Paradigm Product ID
decimal: DecPcsOrdered
Required – Pieces Ordered
string: MemDescription
Description
integer: IntTaxable
Whether or not the item is taxable – 1 = Taxable, 0 = Not Taxable
string: StrUnitMeasure
Unit of Measure
decimal: DecWeight
Weight
string: StrWarehouseID
Warehouse ID
decimal: CurSalesPrice
Sales Price
string: StrColor
Color
string: StrNotes
Notes
decimal: DecLinearAmount1
Feet value when linear measurements are in use
decimal: DecLinearAmount2
Inch value when linear measurements are in use
boolean: YsnManufacture
Whether or not the item is to be manufactured – 1 = Yes, 0 = No
string: StrComment
Comment
string: MemBaseDescription
Base Description
string: StrDepartmentID
Department ID
decimal: CurCost
Cost
Build Detail Columns
The following Build Detail fields listed below are supported. Columns that are not required do not need to be entered in the file.
Column Type: Column Name
Description
string: LineType
Required – value must be “C”
string: StrProductID
Required – It must match an existing Paradigm Product ID
decimal: DecPcsOrdered
Required – Pieces Ordered
string: MemDescription
Description
string: StrUnitMeasure
Unit of Measure
decimal: DecLinearAmount1
Feet value when linear measurements are in use
decimal: DecLinearAmount2
Inch value when linear measurements are in use
