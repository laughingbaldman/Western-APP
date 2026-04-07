# Units Buildable

Source: https://docs.goparagon.com/kb/units-buildable/

---

Units Buildable – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Units Buildable
Units Buildable
The Units Buildable column will calculate the units that can be built for a given manufactured line item, based on the current
quantity available
of the components used to make that item.
This will only count components that have “Show in
Fulfillment
” enabled in the detail tab. (Non manufactured stock products will simply show the current quantity available)
Insufficient Buildable
The following warning will be shown if the user is releasing an order and they are trying to manufacture more items than are buildable. This means that based on the
units available
of the components, production will not be able to manufacture what the order requires.
Insufficient Buildable – There is 1 line with too few units buildable. (Look for lines with the Units Buildable field highlighted in red). Do you want to continuing releasing this order?
This can be enabled/disabled by the company preference here:
Warn user if trying to manufacture more items than are buildable when releasing
