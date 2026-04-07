# Paradigm Update Blocked

Source: https://docs.goparagon.com/kb/paradigm-update-blocked/

---

Paradigm Update Blocked – Paradigm ERP by Paragon – Documentation
Home
General
Paradigm Update Blocked
Paradigm Update Blocked
This FAQ will go over one of the reasons that the Paradigm update may be failing. More information on updating Paradigm can be found here:
Update/Install Paradigm
Windows Defender
When Windows Defender blocks the Paradigm updater, a message will appear:
Unable to execute file in the temporary directory. Setup aborted. Error 5: Access is denied.
A message will also be shown in the protection history screen in Windows Defender:
Contact your IT company to set up a whitelist for the Paradigm update file.
Access Is Denied
This can happen if the file is in use when the updater tries to run, or if the user has not been granted modify permissions to their own installation file at one of the two file paths:
This Path can be found by right clicking on the Paradigm shortcut and selecting “Open File Location”. Then move up 2 folder levels to “Paradigm Accounting”.
Crystal Reports
If Paradigm ERP is opened and it states that it requires “Crystal Reports” to function, try the following below:
Run the installer as an “Administrator”.
This is done by right clicking the installer and choosing “Run as administrator”.
If that does not work, go to Windows programs and uninstall any Crystal Reports installers, then run the installer again.
If step #2 does not work, try running this manual installer:
Click here to download Crystal Reports Installer
If step #3 does not work, try restarting the workstation and running the file again.
If step #4 does not work, see if Windows Security or Smart App Control is blocking that file.
If these steps do not resolve it, contact
Paragon Support
.
