# TIP (Trim in Process) Unit of Measure

Source: https://docs.goparagon.com/kb/tip-trim-in-process-unit-of-measure/

---

TIP (Trim in Process) Unit of Measure – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
TIP (Trim in Process) Unit of Measure
TIP (Trim in Process) Unit of Measure
A TIP (Trim In Process) is equivalent to a 1″ x 12″ piece of metal. In order to find TIP, the width unit and
unit of measure
quantity per linear foot values need to be found.
After that, TIP can be calculated using the steps below, and there’s the option follow along with the
training video
. In the examples the coil will be 42″ wide, 2.1lbs per linear foot, and the percentage of waste will be 5%.
Calculating TIP
To find the TIP factor, divide one by the width of the coil.
In this case it would be:
1/42 = 0.0238095238095238
The TIP factor would be 0.02381
Waste Factor
Optional:
In order to account for the wasted material, multiply by the percentage of waste (Typically 4-6%). Percentage of waste should be adjusted occasionally based off of the actual coil usage, in this case it’ll be 5%.
Add the TIP and the waste factor together.
Adding the waste factor to the example above, the equation would be:
0.02381 * 1.05 = 0.025
The final TIP factor would be 0.025.
Adding The TIP To the Coil
Go to Inventory > Inventory List and open the coil that needs the new tip factor. Then select the gear beside “Sales Unit Measure:”.
Type the TIP into the “Unit Quantity” column and enter the TIP before the percentage of waste was added (0.02381) in the in the “Weight” column. TIP must be set up as a linear unit of measure. Also be sure to have the base unit of measure set, in this case it’s lbs.
Multiple TIP unit of measures can be set up on each coil with different scrap rates if need be. Below the 3%, 5%, and 7% waste factors are set up.
If the unit of measure quantity per LF was one (coil inventoried by LF) instead of LB as in the example above, the TIP calculation is simply (1/[Coil Width]) with the waste added on top, for example (1/42)*1.05 = 0.025.
Calculating TIP When LB is the Base Unit Of Measure
This will go over how to calculate TIP when LB is the
base unit of measure
.
First to get the width unit, divide one by the width of the coil.
In this case it would be:
1/42 = 0.0238095238095238
Next, find the unit of measure quantity per linear foot. This is measured by lbs. per linear foot or just linear feet.
In this example it’ll be lbs. per linear foot, which is 2.1 lbs.
To then find the TIP factor, multiply the width unit x unit of measure quantity per linear foot.
In this example it would be:
0.0238095238095238 x 2.1 = 0.05
Then in order to account for the wasted material, multiply by the percentage of waste (Typically 4-6%). Percentage of waste should be adjusted occasionally based off of the actual coil usage, in this case it’ll be 5%.
Add the TIP and the waste factor together.
In this case the equation would be:
0.05 x 1.05 = 0.0525
The final TIP factor would be 0.0525.
