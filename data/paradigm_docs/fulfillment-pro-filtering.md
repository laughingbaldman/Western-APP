# Fulfillment Pro: Filtering

Source: https://docs.goparagon.com/kb/fulfillment-pro-filtering/

---

Fulfillment Pro: Filtering – Paradigm ERP by Paragon – Documentation
Home
Fulfillment Pro
Fulfillment Pro: Filtering
Fulfillment Pro: Filtering
This FAQ will go over the different filtering options for the pull list in Fulfillment Pro.
Typically, Fulfillment only shows orders that have been released to manufacturing and have not yet been converted to an invoice or otherwise completed. However, orders will show in Fulfillment for at least an hour after they are released, regardless of whether they are invoiced. This allows for product to be gathered for a customer as he walks from the office to the yard. This kind of order will show in blue in the list and will have notes explaining to be careful to not double-pull the order, since the customer may already have been given the product.
A user’s saved filters can be set to show orders in Fulfillment Pro until every line has been marked as shipped, even if the order has already been converted to an invoice. Use this option when setting up filters for users if the company ever converts orders to invoices prior to the orders being gathered.
Location
Use the dropdown list to select the warehouse location(s) from which the product is being gathered. The pull list will be filtered to include only lines on orders where the inventory item is assigned to the selected locations. If an order has product at the selected location and product from elsewhere, the pull list will only show the products from the selected location. If a product has not been assigned a warehouse location, it will show up for every warehouse location.
The locations shown are from the warehouse stock tab of an item and are created in the warehouse settings. More information on how to add locations to a warehouse can be found here:
How to Add Locations To A Warehouse
Date
This will only affect the filtering if the selected filter has “By Date” selected. Note that this is by the order’s ship date. More information on that can be found here:
Fulfillment Pro: Employee Settings
Filter
Select from the different filters that are available for the user that is logged in. More information on creating filters can be found here:
Fulfillment Pro: Employee Settings
Show
Orders with the selected status or order type will be shown. By default, only orders that have lines remaining to be gathered at the selected locations will show. By changing this option to “All”, the pull list will show the orders that have already been completely gathered, but not yet invoiced. The third option in the list, “Unprinted” is like the “Unpulled” filter but designed for use in conjunction with certain types of pull labels, which mark lines as printed instead of pulled. The third and fourth options, “Unclaimed” and “My Claimed”, only will be available if location claiming has been enabled for the users login. “Transfers” will appear if the login has been granted permission to view transfers, and selecting it will limit the list to only transfers (both inventory transfers and special order transfers).  The next option “Unshipped” shows orders that have not been entirely shipped through Fulfillment Pro. “Back Orders” shows orders that have been back ordered. “Unshipped-On Trip” shows orders that are un-shipped and on a trip.
Search Bar
At the top of the pull list, there is a “Search” field. This field can be used to search for just about anything relating to the orders that are currently showing in the pull list. Examples of fields searched include: order number, customer name, ship to city, customer PO, salesperson, ship via, product ID, description, order notes, trip ID, invoice number, production label, etc.
Keep in mind the pick ticket, order, and invoice reports from Paradigm can have a barcode added to them that can be scanned to enter the order number, which could improve customer load times.
