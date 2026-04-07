# Configuring a Product for Export to Connex

Source: https://docs.goparagon.com/kb/configuring-a-product-for-export-to-connex/

---

Configuring a Product for Export to Connex – Paradigm ERP by Paragon – Documentation
Home
Production
Configuring a Product for Export to Connex
Configuring a Product for Export to Connex
This FAQ will go over how to set up a product for export to Connex. Be sure to have Beck set up an auto delete for completed jobs in Connex, to keep Connex running smoothly.
More information on the Connex integration can be found here:
Beck Connex Integration
. Information on setting up a product for export to Eclipse can be found here:
Configuring A Product For Export To Eclipse
Note:
When setting up a product for export it must match the data in Connex exactly, even the capitalization.
Machine List
Check the “Export to SC” box, Optionally, set an export date as well. If no export date is set, builds will export to Connex on their production date. If an export date is set, builds will be exported if their production date is on or before the export date. A common use for this feature is to allow the operators to move the export date to Monday on Saturday, so they can work ahead if Saturday is slow.
RF Min Length – If the items on the build are shorter than the minimum length, the items will nest together until it reaches the minimum length.
For example if the minimum is 3 ft, then two 2 ft pieces would be exported as one 4 ft piece.
RF Max Pieces – If over the max pieces, it will export and then put it on hold.
RF Max Weight – If over the max weight, it will export and then put it on hold.
Export to Connex
In Connex
Profile in Connex needs to be mapped to a machine in Connex
In Paradigm
Detail Tab
Set “Model No.” to the Connex Profile.
If enabled, items with an attribute named “ConnexProfile” or “RF_Profile” will use the value here for the profile name. Contact Paragon support to enable this.
Assembly Tab
Assembly Type must be set to “Manufactured to Order”.
Set the Paradigm Component to the Connex material.
Production Tab
Set the Machine Name to the Connex Machine Name
Set the linked component on the rollformer Production step to the coil.
Set the Warehouse ID to the Connex Location Name
