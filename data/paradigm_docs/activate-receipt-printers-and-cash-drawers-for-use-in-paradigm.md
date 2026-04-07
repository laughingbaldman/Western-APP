# Activate Receipt Printers and Cash drawers for use in Paradigm

Source: https://docs.goparagon.com/kb/activate-receipt-printers-and-cash-drawers-for-use-in-paradigm/

---

Activate Receipt Printers and Cash drawers for use in Paradigm – Paradigm ERP by Paragon – Documentation
Home
Administration and Setup
Activate Receipt Printers and Cash drawers for use in Paradigm
Activate Receipt Printers and Cash drawers for use in Paradigm
Follow these steps to enable receipt printers and cash drawers for use in Paradigm on workstations. Currently the only printer brand that works with Paradigm is Epson.
A couple installation files will be needed in order to complete the next steps. These files can be found in the shared installers folder. If they aren’t available there, contact
Paragon Support
to have them added.
First, close any open instances of Paradigm.
Next, run
PosForDotNet-1.14.1.msi
.
Once that is done, copy the
Enable_64bit_OPOS.zip
file to the desktop of the workstation.
Extract the file to the desktop.
Open the folder and right click on
Fix_OPOS.bat
file and choose to run it as an administrator.
This will open a Windows Power Shell window. It will take a minute or so to run. When it finishes, it will close automatically.
Press any key to continue.
Note:
When Paradigm prints a receipt or opens the cash drawer, OPOS’s software puts a lock on the machine for whichever program sent the request. This means that until the “Locked in” program is closed, the other won’t be able to access the devices.
