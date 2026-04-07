# AvaTax Integration

Source: https://docs.goparagon.com/kb/avatax-integration/

---

AvaTax Integration – Paradigm ERP by Paragon – Documentation
Home
Add-Ons and Integrations
AvaTax Integration
AvaTax Integration
This FAQ will go over the set up and usage of Avalara AvaTax in Paradigm, after an Avalara account has been set up. Paradigm’s sales tax calculations are fully bypassed by AvaTax.
Important
Contact Paragon Support before setting this up, so that the necessary changes can be made.
Set Up Mode
Enabling set up mode allows for AvaTax configuration to be done without using AvaTax for tax calculations.
Sandbox Mode
This setting is for testing; any transactions sent to AvaTax will not be finalized, even if they are posted in Paradigm. This should only be enabled on the test database that Paragon support will set up after the initial set up is complete in set up mode on the main database.
Account Connection
Go to Paradigm > System > Company Preferences > Add-Ons.
Then fill in the Avalara AvaTax credentials:
Account ID:
Provided by Avalara
License Key:
Provided by Avalara
Sandbox Credentials?:
This setting is for testing and should only be checked if “Sandbox Credentials” are provided. When enabled, any transactions sent to AvaTax will not be committed, even if they are posted in Paradigm.
Company Code:
Click “Activate Connection” after filling in the account ID and license key, then select the company name from the dropdown.
This will normally be “DEFAULT”.
Check the “Setup Mode” option before clicking “Activate AvaTax”, to avoid a premature activation of the AvaTax tax calculations.
Setup Mode:
Allows for AvaTax configuration to be done without using AvaTax for tax calculations.
Be sure that “Sandbox Credentials” is not checked when enabling testing mode.
Document Recording:
Allows documents to be marked as committed in AvaTax – this should be checked.
Use Address Validation:
Enables or disables the address validation feature (It is highly recommend that this is enabled).
Enable Logging:
Log detailed transaction activity. Only check this box if instructed to do so by support.
Ensure that
https://sandbox-rest.avatax.com/
and
https://rest.avatax.com
are available/whitelisted.
Sales Tax Code Configuration
If a tax code is not specified in any of the forms below, the default tax code “P0000000” will be used.
Company Preference
Go to System > Company Preferences > Add-Ons and select a tax code for the charges in the “Other” field in Paradigm (may vary based on how the company utilizes that field) and select a tax code for finance charges as well.
Warehouses
Go to Inventory > Inventory Settings > Warehouses and select a location code for the warehouse.
