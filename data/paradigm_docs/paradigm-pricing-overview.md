# Paradigm Pricing Overview

Source: https://docs.goparagon.com/kb/paradigm-pricing-overview/

---

Paradigm Pricing Overview – Paradigm ERP by Paragon – Documentation
Home
General
Paradigm Pricing Overview
Paradigm Pricing Overview
How does Paradigm determine an item’s price when I enter it on an order?
In short, Paradigm finds the lowest possible price for the product.
To go into more detail, when a product is added to an order, Paradigm looks at two places to determine the sales price: the inventory item and the customer. Because of the many ways that items can be discounted (See:
Inventory Pricing Levels
,
Pricing Methods
,
Inventory Special Pricing
,
Customer Pricing Types
,
Customer Special Pricing
), and because sometimes more than one of these discounts apply, Paradigm has a procedure that chooses the best (lowest) price out of all of the possible prices. It is important to understand that all discounts and special prices are evaluated independently from each other, not on top of each other (The exception to this rule is that Customer Discount Percentages apply on top of non-exclusive price levels).
For example: take a situation where a product has a $10 base price and an inventory special price of $9, and the customer pricing is Discount Sales Price 15%. Paradigm will choose the
pricing method
that ends in the best price, so it will choose to enter the 15% discount, resulting in an $8.50 sales price.
Another example: a product has a $10 base price and an
exclusive price level
that discounts the sales price 5%, and the customer is set up for that price level. The customer also has a special price of $9.75 set up for that item. Paradigm will choose to enter it at the 5% price level discount, resulting in a $9.50 sales price.
If a product is not pricing the way you think it should be, chances are there is a discount set up somewhere that results in a better price.
