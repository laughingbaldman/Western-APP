# Production Settings

Source: https://docs.goparagon.com/kb/production-settings/

---

Production Settings – Paradigm ERP by Paragon – Documentation
Home
Production
Production Settings
Production Settings
This FAQ will go over the production settings in Paradigm ERP. These settings can be found by going to Production > Production Settings
Company Settings
Panel Category –
Items in the category selected here will use quantity (length) instead of pieces in the
Production Batching
screen.
Length Unit –
The units that the length is shown in on the
production screens
.
For example: if set to “ft” then 4′ shows as 4, if set to “in” it shows as 48
Set manufacture lock on build when it is added to a batch. –
Sets a
manufacture lock
on the build when it is added to a
batch
.
Show order type selector in Work Orders.
–
Shows the order type select in the
Work Orders List
screen.
Only allow selecting lots that have stock at the current warehouse –
When enabled, only
lots
at the current
warehouse
will be shown to the user in a production
lot
screen.
Max Build Age (days) –
Sets the max age that a build can be and still be shown in
production screens
. This will filter out any builds with a production date more than this many days in the past.
This age limit is useful for large databases to speed up production screen load and refresh times.
Set to 0 to disable the limit.
User Settings
Settings changed will be applied to the user that is logged in. Admin users will have the option to select a user to adjust the settings for.
Default Warehouse –
If a warehouse is selected, only machines set to that warehouse will be shown in production.
All machines will be shown if left blank.
Allow Production Scan Sounds –
Allows production scan sounds.
Remember Last Chosen Coil –
Automatically shows the coil that was last selected in the
capture coil
screen.
This also automatically selects the
lot
that was last selected for the coil.
Enable Multi-Build Printing –
Enables
multi-build printing
for the user.
Show all builds in work order list when using product filtering –
When enabled, it shows all builds for the order of the build that was scanned. If disable, the work order list shows just that singular build after scanning.
This only applies when the “Filter Type” is set to “Barcode” and the user scans into the “Scan” field.
Complete builds when scanning in work order list –
This controls whether or not the scan completes the build. If that is not enabled, it will just filter the list.
This only applies when the “Filter Type” is set to “Barcode” and the user scans into the “Scan” field.
This can also be set from the Work Order list as needed:
Complete builds when printing from component production or work order list detail
–
Completes the build when printing from component production or work order list detail.
Enable button to show/hide locked builds in work order list.
–
Show/Hide Locked Builds
Custom Report Settings –
This form can be used to set the report to be used in each production screen, for the selected user.
