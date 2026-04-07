# How to Trigger Searches Inside of Paradigm from an External Source

Source: https://docs.goparagon.com/kb/how-to-trigger-searches-inside-of-paradigm-from-an-external-source/

---

How to Trigger Searches Inside of Paradigm from an External Source – Paradigm ERP by Paragon – Documentation
Home
Administration and Setup
How to Trigger Searches Inside of Paradigm from an External Source
How to Trigger Searches Inside of Paradigm from an External Source
Paradigm_Search.exe is a program to allow triggering a search within Paradigm from an external program. It is located in the Paradigm Accounting directory (typically C:\ProgramData\Paragon Computing Solutions\Paradigm Accounting) and can be run from the command line as follows:
Paradigm_Search [Phone Number]
For example:
Paradigm_Search 7171234567
The phone number should be numbers only, no formatting. This would bring up information about the given customer or vendor and allow for immediately creating a quote, order etc. for them. This feature functions the same as the search all feature, more info on that can be found here:
Paradigm Search All
Because this search functionality can be used to search for phone numbers, a good candidate for this is to have a phone software search for a the phone number any time the phone rings.
Do Searches in Home Tab
There is an option in System > User Preferences > User Defaults to do the searches on the home tab, instead of a window pop up.
Disable Searches (Local Settings)
To disable searches for a workstation, go to System > Local Settings > Uncheck “Enable External Phone Number Search”
