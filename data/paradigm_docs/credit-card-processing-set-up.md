# Credit Card Processing Set Up

Source: https://docs.goparagon.com/kb/credit-card-processing-setup/

---

Credit Card Processing Set Up – Paradigm ERP by Paragon – Documentation
Home
Administration and Setup
Credit Card Processing Set Up
Credit Card Processing Set Up
This FAQ will go over setting up credit card processing for EBizCharge or other credit card processors.
The configuration is done in two parts:
Company-wide configuration
Per-workstation configuration (Local Settings)
Company-wide configuration is a once-and-done thing, but each workstation that needs to run credit card payments has to have it enabled in Local Settings.
Some processors may need company-wide configuration before setting up the workstation configuration, so always do Company-wide Configuration for the processor before Per-Workstation Configuration.
Available Processors
External Credit Card Processing
– when receiving a credit card payment, the payment is treated like a cash payment. There is no interaction without outside services from inside Paradigm.
EBizCharge
– Process payments by manual entry via web browser or by a physical payment terminal, through the internet.
While this article is meant to be generic, this process still remains tightly-coupled to EBizCharge as it’s the only processor currently supported. It is likely subject to change when more processors are implemented.
External Credit Card Processing Set up
Company Wide Set up
Go to System >
Company Preferences
> Payment Processing > Credit Card Processing and set the following:
Processor –
Set to “None”.
Prompt user for authorization code if using external CC processor –
If enabled, this will prompt the user for an authorization code.
Default Workstation Values –
These settings will be used if the workstation does not have the given setting set.
Per-Workstation Configuration
Go to System > Local Settings > Credit Cards. Then select the “External Credit Card Processing” checkbox and the set up is complete. Enabling this disables any other processors/configurations set.
EBizCharge Credit Card Processing Set up
Paradigm ERP has an optional EbizCharge Integration, more info on that can be found here:
EbizCharge Credit Card Processing Integration
Instructions on how to configure EBizCharge on a credit card reader can be found here:
Connect A Credit Card Reader To An EBizCharge Account
Company Wide Set up
Some company-wide EBizCharge configuration is needed before the workstations will work.
In Paradigm, go to System >
Company Preferences > Add-Ons > Credit Card Processing
Credentials from EBizCharge support are needed to fill out the configuration here. The following credentials are required to get started: Username, Password, and Security Key.
If using Manual Entry, all the fields in the company-wide EBizCharge config section must be filled out to start accepting payments.
Login ID & Transaction Key can be left unset if the company does not want every workstation to be able to opt-in to credit card payments. If left unset, the workstation must set these credentials.
If
only
using Device API, only Default Commodity Code must be set.
Login ID:
User ID
Transaction Key:
API Password/////API SecurityID
The value of Transaction Key is the Password and the Security Key, separated by five forward slashes –
/////
Secure URL:
https://soap.ebizcharge.net/eBizService.svc
Default Commodity Code:
30000000
Save Credit Card Numbers:
This shows/hides the “Saved Cards” tab in the manual entry web form.
Credit Card number will not be saved on the default
POS
customer:
Company Preferences > Add-Ons > Default POS Customer
Prompt user for authorization code if using external CC processor:
This prompts the user to enter a CC authorization code when using external CC processing.
Per-Workstation Configuration
EBizCharge includes support for Manual Entry, Device API processing, or both. This can be set by going to System > Local Settings.
Manual Entry Mode
Select EBiz Charge from the Processor dropdown.
Set Mode to “Manual Entry”.
Username, Password, and Security Key should be set to the credentials received from EBizCharge support.
These three are
optional
if the company has company-wide configuration set for them.
If the workstation would like to override the company-wide configuration for these, these should be set.
If the workstation would like to jump between companies with different EBizCharge accounts for each company, these should be left empty.
“Device Key” can be set to a device key that can be retrieved from the
Device Manager
.
This is optional
, but if set, a “Devices” tab will show in the web form allowing the user to initiate a transaction through the given terminal.
See
Pair a Payment Terminal with EBizCharge
for more information on pairing a device and getting the device key.
Ensure that the workstation has access to:
soap.ebizcharge.net
.
Device API Mode
Select “EBiz Charge” from the Processor dropdown.
Set Mode to “Device API”.
Set Device Key, Api Key, Pin, and Gateway Host URL – all four are required.
Api Key and Pin can be retrieved from the
Api Keys list
. This Api Key should be the same Api Key that the device is set to use. Contact Ebiz Support for assistance in getting Api keys.
Gateway Host URL can always be set to:
secure.ebizcharge.com.
Device Key can be retrieved from the
Device Manager
. See
Pair a Payment Terminal with EBizCharge
for more information on pairing a device and getting the device key.
Ensure that the workstation has access to: secure.ebizcharge.com.
Both
Select “EBiz Charge” from the Processor dropdown.
Set Mode to “Both”.
Following both of the how-to’s for Manual Entry and Device API, starting at step 3.
All fields are required in this mode (or the first three must have company defaults set).
Website Set Up
Once that is set up, choose the processor and payment types on the company website as well as the available online customer payment methods:
Online Payments > Website Setup
Credit Card Deposit GL Account
The default deposit account for credit card payments can be set by going to
General Ledger > Default GL Accounts
