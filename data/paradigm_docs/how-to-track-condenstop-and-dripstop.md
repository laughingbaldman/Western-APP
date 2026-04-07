# How to Track CondenStop and DripStop

Source: https://docs.goparagon.com/kb/how-to-track-condenstop-and-dripstop/

---

How to Track CondenStop and DripStop – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
How to Track CondenStop and DripStop
How to Track CondenStop and DripStop
This FAQ will go over how to track CondenStop and DripStop in Paradigm. In this example, it will be for tracking CondenStop, but they are done the same way.
There are three different ways this can be done:
Custom Options
,
Machine Options
, and setting up separate product IDs. Using product IDs allows for stock to be tracked on the CondenStop and DripStop.
Custom Options
Create A Custom Option
Create a
custom option
for the panels. Set it to suppress the options popup so the pop up doesn’t need to be confirmed for every line, but can be accessed if needed.
Name the option “CondenStop” and enter a description. If “CondenStop” is to appear in the description, be sure the add a “Tag to Replace”. Add this tag to the description of the items and when CondenStop is selected it will be added to the description.
Create an option set that has “CondenStop” as an option and add a price adder if needed. This price adder will be added to every linear foot.
Using the Custom Option
Now when the panel is added to an order, the custom option button will be shown in the description.
From here, CondenStop can be selected.
It will then be shown in the description (if the tag to replace was added to the description) and the dollar adder will be added.
Machine Options
This can be used if all the items at a certain machine would be able to have CondenStop or DripStop applied to them.
To set this up, go to Production > Machine List. Then click on the folder icon beside the machine that is getting the options.
Then enter the options and enter a dollar adder if needed.
Separate Product ID
For this to be done, CondenStop or DripStop has to be added to the assemblies of these items.
First, duplicate an existing item and add characters to the ID to signify it has CondenStop or DripStop.
Then go to the assembly of the new item and add the “DripStop” or “CondenStop”.
