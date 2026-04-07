# Configuring A Product For Export to Variobend

Source: https://docs.goparagon.com/kb/configuring-a-product-for-export-to-variobend/

---

Configuring A Product For Export to Variobend – Paradigm ERP by Paragon – Documentation
Home
Add-Ons and Integrations
Configuring A Product For Export to Variobend
Configuring A Product For Export to Variobend
This FAQ will go over how to set up a product for export to Variobend.
Note:
When setting up a product for export it must match the data in Variobend exactly, even the capitalization.
Export Modes
The following export modes are available. If the export mode needs to be changed, please contact Paragon support.
Locked Order – Exports orders when they are locked, regardless of the Build’s production date. This export mode is set up by default.
Production Date – Exports orders based on production date and locks the lines when they are exported.
Mark For Export – Exports orders when the Export button is clicked on the Production screen.
Materials
Variobend needs the material and the thickness to correctly bend different materials. These are stored as inventory
attributes
on the coil items in Paradigm and can be imported by Paragon if needed.
VariobendThickness – The thickness of the coil in mm.
Min and max thicknesses are set under Settings > Variobend Settings > General settings “Material Thickness” sections
VariobendMaterial – The name of the material that corresponds to the Variobend material (case sensitive).
Materials can be set up under the “Material Database” in Variobend settings.
Note: If there are issues with “Steel”, try using “mat_steel”. This is a special case because it is “Standard material”.
Color – If a Color is assigned to the Paradigm Coil item, it will be sent to Variobend.
Machine Settings
Specify the Variobend Machine Name in Paradigm at Production > Machine List and link it to the correct Warehouse if you have multiple locations.
Item Export Set Up
Assembly Tab
Assembly Type must be set to “Manufactured to Order”.
For
special trims
, the “Custom Assembly” checkbox needs to be checked.
Set the Paradigm Component to the Variobend material.
Production Tab
Set the Machine Name to the Variobend Machine Name
Set the linked component on the rollformer Production step to the coil.
Set the Warehouse ID to the Variobend Location Name
Special Trim
For special trims to export, the steps in the previous sections need to be completed. Once those are done, special trims should export to Variobend.
Standard Trim
For standard trims to export, the steps in the previous sections must be completed, along with the steps below.
Standard Drawings
Set up drawings for the standard trims in Variobend. Once the drawings are set up, provide Paragon with the folder name they are located in.
Make sure the source in the top right corner of Variobend is the SERVER, not the FOLDER. Standard drawings must be in the SERVER for them to be used by the integration.
Set “Model No.” to the Variobend drawing name.
Export Detail
When Paradigm exports Standard Trim Jobs to VarioDesk, profiles are selected as follows: (runs until valid profile is found)
Checks for VariobendProfileID Inventory attribute on the Item
VariobendProfileID is an internal value referencing a profile in VarioDesk. The export process auto sets this value when a matching profile is found
Checks for VariobendProfileID Inventory attribute on Item(s) of the same model.
Checks for Variobend profile in the VarioDesk Server folders specified by the profile folder setting that have the same profile name as the Paradigm Item Model Number.
Checks for
Model Trim profile setup
from Paradigm Trim Draw. If found, this drawing is sent to the Model Trims folder in VarioDesk.
If no profile is found, a Task is created to warn the user that a profile must be created.
Notes:
Once a model trim is sent to Variobend, it is linked via the VarioBendProfileID attribute and used until it the attribute is deleted. If there are changes made to the profile in VarioDesk, the changes will be reflected in future exports.
If there is a profile in VarioDesk with a name that matches a Paradigm Model Number, but it is not in one of the folders specified in PROFILEFOLDERS, it will be ignored.
