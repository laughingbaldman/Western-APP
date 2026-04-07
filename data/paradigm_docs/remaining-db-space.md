# Remaining DB Space

Source: https://docs.goparagon.com/kb/remaining-db-space/

---

Remaining DB Space – Paradigm ERP by Paragon – Documentation
Home
Administration and Setup
Remaining DB Space
Remaining DB Space
This FAQ will go over the “
Remaining DB Space: X.XGB Contact Paragon
” header warning in Paradigm ERP.
Remaining DB Space
The warning is shown because Paradigm’s SQL database is nearing 10GB, and it is using Microsoft SQL Server Express (free version) which is limited to databases of 10GB or less. This warning will be shown to all top-level administrators, starting when the database reaches 8GB.
To resolve this, upgrading to Microsoft SQL Server Standard (paid version) will likely be necessary. Paragon does not resell SQL Server Standard, please work with your IT company and/or a Microsoft certified reseller to see the licensing options.
Options To Reduce The Database Size
Audit trail is by far the largest table in most databases. As a temporary measure to free database space, the amount of time to keep audit trail data can be shortened in
company preferences
. Changes here may take up to a day to take effect.
