# Value Added Manufacturing Set up (VAM)

Source: https://docs.goparagon.com/kb/value-added-manufacturing-setup/

---

Value Added Manufacturing Set up (VAM) – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Value Added Manufacturing Set up (VAM)
Value Added Manufacturing Set up (VAM)
This FAQ will go over how to set up value added manufacturing (VAM).
To create a Value-Added item for painting raw coil, begin by creating an inventory code for the raw steel that will be painted, leaving the
assembly tab
empty. Create a second code called a “Paint Release” code that will be used when requesting coil to be painted from the coaters (“PR” followed by the
color
abbreviation works well for these IDs). Be sure to check the box beside “VAM Service Charge” in the detail tab, and to use the same
unit of measure
that will be used by the painter when they invoice you.
Finally, open or create the inventory item for the painted coil, go to the assembly tab, select the “Value-Added Manufacturing” assembly type, and put the raw coil and the paint release code in the assembly with quantities that correspond to one unit of the painted coil.
When the paint release code is entered on a Purchase Order or Purchase Invoice, a VAM selection form will appear. Use this form to select the coil to be produced, the warehouse the final product will be shipped to, and the quantity to be produced in the top half of the form; and use the bottom half of the form – which is a list of components associated with the product selected – to specify what warehouse to pull the raw material out of as well as the cost of the paint. After closing the form (ALT + C), the cost of the paint will be entered to the line on the PO or PI, and the description will be updated based on the rest of the information given in the Value Added Selection form.
