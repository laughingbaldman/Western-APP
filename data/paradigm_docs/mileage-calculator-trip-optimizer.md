# Mileage Calculator/Trip Optimizer

Source: https://docs.goparagon.com/kb/mileage-calculator-trip-optimizer/

---

Mileage Calculator/Trip Optimizer – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Mileage Calculator/Trip Optimizer
Mileage Calculator/Trip Optimizer
The mileage calculation feature allows a user to calculate a freight charge for an order, based on the mileage between the warehouse it will ship from and the customer’s ship to address on the order.
Enabling Mileage Calculation
In order to enable the mileage calculator, an account must be created with TomTom:
https://developer.tomtom.com/store/maps-api
Once registered with them, take the API Key that they provide, go to
Company Preferences > Add Ons
, and enter it into the TomTom Routing Integration.
Check the “Enable Mileage calculation” check box and select whether not to enable “Address Validation”.
Finally, this URL should be whitelisted on your network:
https://api.tomtom.com
Address Validation
Address validation is used to correct small mistakes in the address that is entered on the customer. It will make changes things like “Av” to “Ave” or it may change “St” to “Ave”, depending on which is correct. When an address can be validated, a message will appear to have the user select the address to be used. A green checkmark will be displayed beside a validated address.
Street Name Found
If the street is found, but no address with that number was found on that street, the following message will be shown:
Street was found, but no address with that number was found on that street.
Address Cannot Be Validated
If an address cannot be validated, a yellow exclamation point will be shown.
Lock Address
In rare cases, address validation may change an address even though it is correct. To keep an address from being changed, click the “Lock Address” check box.
This will display a lock symbol. Address validation can be disabled completely in the
company preferences
if needed.
Create Mileage Rates
Go to System > Company Preferences dropdown > Mileage Rates
Min Charge
– This is the minimum amount the customer will be billed for freight at that rate.
Rate
– The amount the customer will be charged per mile.
Sort
– Determines what order the rates will show in the dropdown on the order form.
Rounding Level
– The final freight charge will be rounded up to the next increment of this number.
Calculate Freight Charges
Quotes,
Orders
, Invoices
On a transaction, click on the ruler icon next to the freight field. This will calculate the distance for a one way trip, without factoring in traffic.
After the mileage is calculated, choose the rate and click Accept.
If the exact address cannot be found, the following message will appear asking to calculate based on the ZIP code instead:
Street was found, but no address with that number was found on that street. Do you want to estimate distance based on the ZIP code?
Trips
To calculate the mileage on a trip, click the refresh button beside distance on the trip detail. This will calculate the distance and time for a round trip, without factoring in traffic.
To change the freight charge for an order on the trip info screen, click the button beside the current freight charge.
Then choose the new rate and click Accept.
Using Route Optimization
Route optimization utilizes the same TomTom integration as the Mileage calculator. To use it, open up a trip’s detail screen and click on “Optimize Stop Order”. Paradigm will then use TomTom to calculate the optimal route for the entire trip and automatically update the stop order.
Note:
TomTom doesn’t take into account current traffic patterns when determining the best route. It will optimize the route to find the shortest mileage for commercial vehicles.
Dispatching Map
The
Dispatching Map
gives the option to see addresses marked with a pin on the map.
