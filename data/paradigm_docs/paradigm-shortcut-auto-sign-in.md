# Paradigm Shortcut – Auto Sign In

Source: https://docs.goparagon.com/kb/paradigm-shortcut/

---

Paradigm Shortcut – Auto Sign In – Paradigm ERP by Paragon – Documentation
Home
Administration and Setup
Paradigm Shortcut – Auto Sign In
Paradigm Shortcut – Auto Sign In
This FAQ will go over how to set up the Paradigm Shortcut to automatically log in, remember the username, and other ways to speed up the login process.
Setting Up Auto Sign In
An optional first step is to copy and paste the Paradigm desktop shortcut, so that Paradigm can be launched without auto sign.
After copying the shortcut, right click on the Paradigm desktop shortcut and select properties.
Auto Sign In
To have Paradigm to automatically sign in when it’s run, go to the “Target:” field and put in all the login info at the end after “….ParadigmClient.exe”. Type in the username first, then password, then the Paradigm ERP Server URL in that order separated by a single space.
Example:
"C:\ProgramData\Paragon Computing Solutions\Paradigm Accounting\Paradigm_Client\ParadigmClient.exe" admin 123 http://ServerURL/api
The Paradigm ERP Server URL can be found in
Company Preferences > Paths
Shortcut > Target
Then click apply and then continue on the Access Denied popup.
After that open up Paradigm to make sure the changes applied.
Auto Fill URL and Username
In order to have Paradigm fill in everything but the password, put just the username and Paradigm ERP Server URL after the “….ParadigmClient.exe” separated by a single space.
Example:
"C:\ProgramData\Paragon Computing Solutions\Paradigm Accounting\Paradigm_Client\ParadigmClient.exe" admin http://SerrverURL/api
Then click apply and then continue on the Access Denied popup.
After that open up Paradigm to make sure the changes applied.
