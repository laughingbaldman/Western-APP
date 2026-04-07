# Motive Integration

Source: https://docs.goparagon.com/kb/motive-integration/

---

Motive Integration – Paradigm ERP by Paragon – Documentation
Home
Add-Ons and Integrations
Motive Integration
Motive Integration
This FAQ will go over the Motive integration with Paradigm and any set up that might need to be done. The
Motive
Integration allows trips created in Paradigm
dispatching
to create “Dispatches” in the Motive fleet system. These dispatches appear in the Motive Driver app. Proof of delivery information such as signatures and pictures collected in the Motive Driver App for these dispatches are imported into Paradigm and
attached
to the trip and orders.
Set Up
To view the Motive integration settings, go to Company Preferences > Add-Ons
Set the Form Type and sort order for any forms that should be included with the dispatch
(Motive Support should specify which forms apply to a client).
A minimum of 2 forms are required per form type.
Forms set to the “ShipperReturn” form type will be used as both Shipper and Return Types.
If no forms are set to “Return” or “ShipperReturn”, no “Return” stop will be added to the dispatch.
(Dispatches always start with a Pickup location and then the stop locations. A “Return” location is the same as the “Pickup” location, indicating the driver should return to the warehouse)
Dispatching >
Truck List
For each truck that will be utilized with Motive Dispatches, select the Corresponding Motive ID in the Motive Vehicle ID column.
(Vehicles must be created in Motive prior to opening the Truck List screen in order for the truck to be listed in the Vehicle ID dropdown)
Dispatching >
Driver List
.
For each driver that will receive Motive Dispatches, select the Motive User ID that corresponds to the driver in the Motive User ID field.
Usage
Send to Motive
A dispatch is created in Motive by clicking the “Send To Motive” button on the
trip info screen
. If any changes are made to a trip after it has been sent to Motive, the dispatch will automatically be re-sent and updated in Motive.
Note
that if the Dispatch has already been completed, Motive will not allow it to be changed.
Motive requires Latitude and Longitude information for all addresses. If the latitude and longitude cannot be auto determined by the TomTom service, it must be manually set on the order, in the ship to address section. When entering coordinates, use either format shown here:
40.689212380759265, -74.04455969155815
40°41’21.2″N 74°02’40.4″W
Clear Dispatch in Motive
A Dispatch may be removed from Motive by clicking the “Clear From Motive” button on the
trip info screen
.
Note
that if the Dispatch has already been completed, Motive will not allow it to be cleared.
Proof of Delivery Photos and Signatures
Photos and signatures recorded in the Motive app will be imported as
attachments
on the trip and order. It will also mark stops as complete after the stop enters the Motive “Departed” status. If enabled,
Delivery Notifications
will be triggered when the stops are marked as completed.
