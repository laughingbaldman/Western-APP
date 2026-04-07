# Production Lead Days

Source: https://docs.goparagon.com/kb/production-lead-days/

---

Production Lead Days – Paradigm ERP by Paragon – Documentation
Home
Production
Production Lead Days
Production Lead Days
Production lead days controls how the production date for a build is calculated from the ship date on the order. This can be changed by going to System > Company Preferences > Production Lead Times
Production Lead Times
For each combination of production warehouse (Warehouse From) and ship from warehouse (Warehouse To), set how many days prior to the ship date the item should be produced (Lead Days). If a new warehouse is added, click the “Recalc” button to load in the new combinations between the new warehouse and the existing warehouses.
Lead Days is based on business days, not calendar days. If lead days are set to one, and the order is shipping Monday, the production date will be Friday. Holidays are not factored into this calculation.
If the designated amount of lead days is not possible, Paradigm will use the earliest available production date. For example, if lead days are 2, and an order is entered on the 5th to be shipped on the 6th, the production date will be set to the 5th even though the designated production date would be the 4th. The production date will not be set to a past date.
Lead days are set at the company level for each combination of warehouses and apply to all machines and products for that combination of warehouses.
Transfer Lead Times
More information on transfer lead times can be found here:
Transfer Lead Times
Per Machine Setting
Because the production date calculation is set at the company level, there can be times where certain product types with longer lead days will not have a valid production date set by default. To work around this, the default date filter set in Production can be modified at the machine level. While this doesn’t correct the listed production date on the build, it does cause the order to show in Production far enough in advance, which generally is all that is required to ensure the product is produced on time.
To set the default lead days for the production date filter, go to Production > Machine List.
From there, set the amount of lead days in the “Default Lead Days” column.
The default date filter in the various production screens will then be set to this many days in the future.
