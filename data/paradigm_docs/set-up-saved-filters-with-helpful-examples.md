# Set Up Saved Filters (With Helpful Examples)

Source: https://docs.goparagon.com/kb/setting-up-saved-filters-with-helpful-examples/

---

Set Up Saved Filters (With Helpful Examples) – Paradigm ERP by Paragon – Documentation
Home
Administration and Setup
Set Up Saved Filters (With Helpful Examples)
Set Up Saved Filters (With Helpful Examples)
This FAQ will go over how to set up saved filters for lists in Paradigm.
Many list forms in Paradigm allow for saved filters to be set up to quickly apply filters that are commonly used. These filters can do almost anything that you can dream up for them to do. Complex filters can be created for you by Paragon, but you can create filters for yourself as well.
Creating a Saved Filter
Start by going to the list for the new saved filter. Then click the pencil icon beside the saved filters drop down. In this example the filter will be for the invoices list.
From there, add all the ways the list will get filtered down. In this example it will get filtered down to the test customer (TEST001), and all the invoices from the last 60 days.
Once that has been filled out, go to the filter settings tab. Then name the new filter and change the rest of the settings. In this example it will order by the date descending (DtmDate) and will show up second from the top on the filters list (2). Selecting default would apply the filter when the list is opened. Information on copying filters to another user can be found here:
How To Copy List Layouts And Saved Filters
Date To Search
The “Date To Search” can be changed, to specify which date is used in the date range.
SQL Tab
The SQL tab allows SQL “where” statements to be added to filter down the list. These statements must follow SQL syntax. Contact Paragon for assistance building SQL statements for more advanced filtering.
Header
Anything put in this column will act as a where statement. For example if the list needed to be filtered to inventory items that used lots and wasn’t in Fulfillment, the statement for that would be:
ysnUseLots=1 and ysnFulfillment=0
Detail
The first statement can be further filtered down by using the detail tab. This will filter info found in the detail tab. If the list needed to be filtered down to the test product (TEST001), the statement for that would be: strProductID = ‘TEST001’.
So the whole statement together would find inventory items that use lots, aren’t in Fulfillment, and where the product ID is “TEST001”.
Searching for a List of IDs
Another way to use the SQL filter is to look up a list of IDs. This can be done by inserting the list of IDs with an “in” statement in the header section. The list of IDs must setup like the example. The product ID surrounded by single quotes and separated by commons. Then the last product ID does not have a comma after it, and then the whole list wrapped in parenthesis. Example:
strProductID in (‘AAC’,’ABG’,’ABL’,’ABK’)
Common List Filters
Open Orders
Order List
My
Open Orders
Order List
Put the salespersons name in the salesperson box. Then uncheck “Completed” and “Include canceled orders”.
Recent
Order List
Invoice List
Quote List
Choose how recent the transactions should be from the date range list.
Customers With Balance
Customer List
Negative Qty Items
Inventory List
Insert this text into the header section of the SQL tab:
decUnitsInStock<
0
Unposted Invoices
Invoice List
Posted, not Paid
Invoice List
Open Quotes
Quote List
Received, not Posted
Purchase Invoice
Paste this text into the header section of the SQL tab:
ysnReceived=
1 and
ysnPosted=0
