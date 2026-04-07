# Minimum Acceptable Margin

Source: https://docs.goparagon.com/kb/minimum-acceptable-margin/

---

Minimum Acceptable Margin – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
Minimum Acceptable Margin
Minimum Acceptable Margin
This FAQ will go over how to set a minimum margin. Minimum margins can be used to give users a prompt if they define a discount, terms discount, or sales price that goes below the minimum discount percentage (also known as a margin violation), as well as recommend the lowest allowable price.
Minimum Margin
To do this, open an inventory item and type the margin that must be exceeded for each order detail line in the “Minimum Margin” field. Setting the minimum margin to 0% will not allow any negative margins, while removing the margin from the field and leaving it blank will not enforce any minimum margin.
The calculated margin based on the standard cost and sales price, will be shown below the sales price as “Calculated Margin”.
This can also be set at a category level.
If a user manually types in a sales price or discount that results in a net price with less than the specified discount, a warning will show. The warning will suggest a discount or sales price, depending on which field was edited.
This sales price could result in a margin less than the minimum defined for this product. Consider using price of $X or more.
Note:
Only users that are set as administrators can override this. Additionally, this control only affects manually entered discounts or sales prices, not
price levels
,
category discounts
,
special prices
, etc.
