# Nonexclusive Pricing Levels (Quantity Discounts)

Source: https://docs.goparagon.com/kb/nonexclusive-pricing-levels-quantity-discounts/

---

Nonexclusive Pricing Levels (Quantity Discounts) – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Nonexclusive Pricing Levels (Quantity Discounts)
Nonexclusive Pricing Levels (Quantity Discounts)
This FAQ will go over how to create nonexclusive pricing levels. For each inventory item, you can add multiple pricing levels with discounts or markups for that product. Each of these levels can be added multiple times for different quantity ranges and
units of measure
.
In this example there is an order with the same item in three different units of measure, priced at $0.10 per unit, with no price level applied.
Here is an example that has a
non-exclusive
5% discount for the unit measure:
Bag/100
, and a 10% discount for the unit measure:
Bag250
Select pricing level and exclusivity of your price level. Non-exclusive price levels are typically assigned to level one.
Non-exclusive price levels are available for every customer, regardless of that customer’s pricing method. These are normally used to create quantity price breaks, where anybody who buys a certain amount of that product will get a discount.
Select a
unit of measure
, and the min – max range of quantity on which to apply the discount.
The previous example is set at -999999 up to 9999999 to apply this price level to any number of “Bag/100” bought.
Select your rounding level. Check the rounding level because it will control the rounding of the Sales Price. Over a 1000 pcs, it will change the total drastically. Typically, this should match the Rounding Precision under the General tab.
Here is the same order from above, but with the shown price level applied.
Note that while the example above uses alternate units of measure, the same approach can apply to an item’s standard unit of measure for certain ranges of quantities purchased, like shown below.
