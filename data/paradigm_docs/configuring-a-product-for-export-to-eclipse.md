# Configuring a Product For Export To Eclipse

Source: https://docs.goparagon.com/kb/configuring-a-product-for-export-to-eclipse/

---

Configuring a Product For Export To Eclipse – Paradigm ERP by Paragon – Documentation
Home
Production
Configuring a Product For Export To Eclipse
Configuring a Product For Export To Eclipse
This FAQ will go over how to set up a product for export to Eclipse.
Note:
When setting up a product for export it must match the data in Eclipse exactly, even the capitalization. Information on setting up a product for export to Connex can be found here:
Configuring A Product For Export To Connex
Machine List
Check the “Export to SC” box and set an export date. Data will only be exported if the date is today or before the set export date. This can be used to set the export date out a couple of days to export in advance.
RF Min Length – If the items on the build are shorter than the minimum length, the items will nest together until it reaches the minimum length.
For example if the minimum is 3 ft, then two 2 ft pieces would be exported as one 4 ft piece.
RF Max Pieces – If over the max pieces, it will export and then put it on hold.
RF Max Weight – If over the max weight, it will export and then put it on hold.
Inventory Item
Detail Tab
Set “Model No” to the Eclipse “PCode”.
SC Part Number can be set to “PartNum” in Eclipse. (Optional)
If enabled, items with an attribute named “ConnexProfile” or “RF_Profile” will use the value here for the profile name. Contact Paragon support to enable this.
Assembly Tab
Set the material component to the material in Eclipse.
Assembly type must be set to “Manufactured To Order”.
Production Tab
Set the machine name in Paradigm to the machine name in Eclipse.
Set the rollformer production step in Paradigm to be linked to the coil component.
