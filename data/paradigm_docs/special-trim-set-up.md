# Special Trim Set Up

Source: https://docs.goparagon.com/kb/special-trim-setup/

---

Special Trim Set Up – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Special Trim Set Up
Special Trim Set Up
This FAQ will go over how to set up a special trim item and pricing for it in Paradigm.
Assembly Set Up
To start, duplicate an existing trim. Go to the Assembly tab and check the box beside “Custom Assembly”.  When this is checked, the trim draw button will appear when the item is added to a transaction. Then ensure that the assembly type is set to “Manufactured to Order”.
Set the Pieces column to “1” on the “Slit” component, and set it to “0” on the “Bend”, “Hem” (or “Open Hem”), and coil component. Then set the coil component unit of measure to “TIP”. More info on the TIP unit of measure can be found here:
TIP (Trim In Process) Unit Of Measure
If the special trim is a linear item, set the feet column to “1” and the inches column to “0” on all of the components. If it is not a linear item, set those columns to the length of the trim.
Set the mapping column to match the settings in the example. This controls where the information about the trim profile is saved when it is created in trim draw.
Slit – No Mapping
Bend – Set mapping to “Bend”
Hem – Set mapping to “Hem” or “Open Hem”
Material – Set mapping to “Stretchout”
Production
In the production tab, choose the machine and set the “Linked Component” to the coil or flat sheet. Then set the production default location and check the box under “Manufacture By Default”.
Special Trim Pricing Calculation Breakdown
Trim LF Price – $2.15
3 Bends @ $0.15 = $0.45
$0.15 is the sales price on the “BEND” item.
1 Hem @ $0.30 = $0.60
$0.30 is the sales price on the “HEM” item.
(This price would be increased by $0.20 per hem if “OPEN HEM” was selected instead.)
4 3/4″ Stretchout @ $0.2295 = $1.090125
Coil Sales Price * UOM Quantity = Stretchout Price
In this example: $7.50 * 0.0306 = 0.2295
$0.45 + $0.60 + $1.090125 = $2.140125 rounded to
$2.15
Special Trim Build Detail
To view the special trim pricing breakdown on a line, click the folder icon > Build / Assembly > Build Detail
Pricing And Discounts
If the current LF price for a coil is still needed for resale, but that price is not calculating special trims correctly, add a
nonexclusive pricing level
on the coil. Set the coil unit of measure on the price level to the same one on the special trim, add a negative discount to mark it up, and check the box beside “Use Pricing Discounts When Used as a Component” to have that price level apply when it is used as a component.
The component price is rounded based on the component item’s rounding level. The components are totaled, then rounded to the special trim rounding level. To ensure accurate pricing, set the coil
rounding precision
to “0.0001”.
Multiple Special Trim Prices On The Same Coil
To have multiple special trim prices from the same component, additional TIP units of measure can be set up.
Once that is set up, price levels for the additional TIP UOMs can be set up.
Then set the unit of measure on the special trim to be the new TIP unit of measure.
Replacement Product
The replacement product on a standard trim can be set to a special trim code, so that if a user needs to make changes to the trim profile they can swap the item on the order. If the standard trim has a model drawing, it will select that
model drawing
for the special trim and open the trim draw screen to edit it. When selecting a new replacement product, it will now remove the previous trim drawing from the line.
