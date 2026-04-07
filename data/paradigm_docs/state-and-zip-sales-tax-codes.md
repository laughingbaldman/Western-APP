# State and ZIP Sales Tax Codes

Source: https://docs.goparagon.com/kb/state-sales-tax-codes/

---

State and ZIP Sales Tax Codes – Paradigm ERP by Paragon – Documentation
Home
Administration and Setup
State and ZIP Sales Tax Codes
State and ZIP Sales Tax Codes
Why use Default State and ZIP Sales Tax Codes?
Setting up default state and ZIP tax codes allows Paradigm to automatically adjust the sales tax on an order just by checking the ship to address. This comes in handy if customers are buying the product and then having it shipped out of state, so then the state tax doesn’t apply to them anymore. Because it is based on the ship to address, the person doing order entry will not have to make an effort to charge sales tax for each order. By default, the tax will be that of the selected customer, but if the state tax codes have been set up, entering a ship to address will cause Paradigm to change the sales tax on the order to that of the selected state or ZIP.
Setting up Default State Sales And ZIP Tax Codes
To set up the state and ZIP tax codes, go to System > Sales Tax Collected.
From here, sales tax codes can be created by entering the sales or ZIP tax code at the top, and applying a tax ID in the bottom section. More info on that can be found here:
Sales Tax Code Setup
State Defaults
To set up tax codes per state, click on the “State Defaults” button.
To save time, set up a state with the configuration of codes that is the most prevalent in all states. After doing this, click ‘Add All States’ and Paradigm will create entries that are set up identically to the first entry, for all states.
After this, create and apply tax codes to Sales Tax 1 for any states that are going to be used.
Any states that need a tax code different from the original state that was created will have to be changed as well. When an order is created and a ship to address is given to it, this is the list Paradigm will check to see what tax codes get applied to the order. The Job Tax fields in the State Tax Codes list are used for Jobs and Job Transfers only.
ZIP Defaults
To set up tax codes per state, click on the “ZIP Defaults” button.
Then select a ZIP code from the drop down and apply a tax ID.
Disable Tax Code by Ship-To State/ZIP Per Customer
To disable Paradigm from automatically selecting a tax code for any customer who gets taxed the same regardless of what state they are in, go to the customer’s detail tab and uncheck the box next to “Select tax code by ship-to State/ZIP”.
Paradigm will never replace a 0% tax rate with a positive tax rate, unless the tax code is setup to allow replacement. This means out-of-state customers should be set with default tax codes from the state the company is located in, ensuring that when the customer picks up the order, they are still taxed (if no ship to address is selected). More info on tax code setup can be found here:
Sales Tax Code Setup
Changing The State or ZIP
If the state or zip changes on an order that has the customer set to automatically update tax codes, the tax code will be updated to the default for that state or zip and the following message will appear:
[Order Number] Sales tax codes have been updated.
Ship Vias
When the tax code is tied to the ship to address, it is important that the ship to address be set properly and not missed or abandoned if the ship via changes. To combat this, open the ship via list and check the “Ship to address required” column for any delivery ship vias, and the “Pickup Only” checkbox for any pickup ship vias (
Require Ship to Addresses
,
Ship Vias
). These settings work together to ensure the ship-to information is correct, and therefore the tax information as well.
