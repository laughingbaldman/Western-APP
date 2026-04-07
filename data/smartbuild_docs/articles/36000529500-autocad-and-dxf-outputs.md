# AutoCad and DXF outputs

Source: https://support.smartbuildsystems.com/support/solutions/articles/36000529500-autocad-and-dxf-outputs

---

Solution home
SMARTBUILD - Interfacing with other software
AutoCad
AutoCad and DXF outputs
Print
Modified on: Wed, Nov 6, 2024 at  7:12 AM
Currently our best path from a Smartbuild job to a AutoCad format is through SketchUp.
To convert a SketchUp file to an AutoCAD DXF file using SketchUp Pro, follow these steps:
Open Your Model in SketchUp Pro
: Launch SketchUp Pro and open the model file you want to export.
Check for Clean Geometry (Optional)
:
Before exporting, make sure your model is clean and organized. Layers and groups can help manage complex models.
It’s a good idea to check if everything is on the correct layer and there’s no hidden geometry you don’t want to include.
Select Export Options
:
Go to
File
>
Export
>
2D Graphic
or
3D Model
depending on whether you want a 2D or 3D DXF file.
Choose DXF as the Export Format
:
In the export dialog box, select
AutoCAD DWG/DXF
as the file format.
Configure Export Settings
:
Click on
Options
to open export settings for the DXF file.
Here, you can set the
version compatibility
(e.g., AutoCAD 2010, 2013) to ensure compatibility with the version of AutoCAD you are using.
Specify whether you want to export edges, faces, construction geometry, and other specific elements based on what you need in the DXF file.
Set the
unit
(e.g., inches, feet, millimeters) if needed, as DXF files rely on the scale you set here.
Export the File
:
After configuring settings, choose a location, name the file, and click
Export
.
SketchUp Pro will generate the DXF file and save it in the specified location.
Open and Verify in AutoCAD
(Optional):
Open the exported DXF file in AutoCAD to verify that all elements were transferred correctly.
Check for any missing elements or issues with scaling, and make any adjustments if necessary.
This process should work for most SketchUp Pro versions and ensure that your model translates accurately to the DXF format for use in AutoCAD.
Did you find it helpful?
Yes
No
Send feedback
Sorry we couldn't be helpful. Help us improve this article with your feedback.
Related Articles
Help Desk Software
by Freshdesk
