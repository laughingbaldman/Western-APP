# Ship Vias

Source: https://docs.goparagon.com/kb/ship-vias/

---

Ship Vias – Paradigm ERP by Paragon – Documentation
Home
Dispatching
Ship Vias
Ship Vias
Ship vias in Paradigm determine how an order will be shipped. The list of ship vias can be viewed by going to System > Company Preferences drop down > Ship Vias.
Creating Ship Vias
From this screen existing ship vias can be edited, or new ones can be entered. When adding a ship via,
Dispatching filters
and
Fulfillment Pro filters
will need to be adjusted to include the new ship via, if being used. Also note, that editing a ship via that is assigned to transactions already does not update the ship via on the transactions. It is best to have Paragon assist with changes to ship vias that have been used already.
Type – Choose whether it is an AR or AP ship via. AR ship vias will show up in quotes, orders, invoices and on customers. AP ship vias will show up in RFQs, POs, purchase invoices, and vendors.
Ship Via – The name of the ship via. The only special characters that can be included are the following:
& + / . _ –
Sort – The order in which it will appear on the list of ship vias.
Fulfillment Priority – The priority in Fulfillment Pro. Choose from Never Priority, Normal, or Priority.
Show in Dispatching? (AP Only) – Whether or not to show POs assigned to this ship via the Dispatching Daily Pickups screen. Only applies to AP ship vias.
Ship-To Address Required – Select whether or not to require a ship-to address. More info on that can be found here:
Require Ship To Addresses
Request Freight – Select to request freight charge amount. If the user doesn’t fill in the freight info, this warning will appear.
Show on Web – Select whether or not this ship via option should display on the customer portal order screen.
Tax Code & Entity Use Code – These can be set if the
AvaTax
integration is set up.
Put Mfg On Hold – Used only for On Hold ship vias. This will put all the items it can on hold. Lines that have been produced or locked already aren’t affected. This is used in cases when an order needs to be put on hold, but unreleasing the order isn’t available.
Auto Freight – Automatically calculate freight. More info can be found in this FAQ:
Auto Freight
Pickup Only – This Ship Via is a “Customer Pickup” ship via. When a ship via with this setting enabled is selected on an order, the ship to information is removed from the order automatically. This setting is mostly utilized with AvaTax and Ship To ZIP Sales Tax.
Direct-Ship – This Ship Via is a “Direct Ship to Customer” ship via. This is used in conjunction with the
Special Order Purchasing Screen
to ensure direct-ship orders are converted to their own POs to preserve ship-to information.
Once that has been filled out, save the list and then close and reopen Paradigm to get the new ship vias to display on the lists.
Using a Ship Via on an Order
Ship vias get applied on to order when they’re released. It can get set in the drop down highlighted below, or if left blank, a pop up asking for a ship via will appear once the order is released.
This pop up can be enabled or disabled by going to System > Company Preferences > Sales > Limits
Ship Via Defaults
Below are the different places that ship via defaults can be set.
Company Preferences
User Preferences
Customer Detail
