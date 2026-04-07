# Average Cost Calculation

Source: https://docs.goparagon.com/kb/average-cost-calculation/

---

Average Cost Calculation – Paradigm ERP by Paragon – Documentation
Home
Accounting
Average Cost Calculation
Average Cost Calculation
An item’s average cost is calculated as its [total value remaining in inventory] divided by the [total stock quantity]. Transactions that add inventory into stock are the only way that the average cost of a product changes. All sales or usage of an item will go out at the item’s average cost, unless the item’s stock is negative, in which case Standard Cost will be used instead.
Average cost is not date-based, it is transaction-based. The average cost is not the average purchase cost over the last 90 days, it is the average cost of all of the units still in stock. This cost is an accounting cost, not necessarily a purchasing cost.
The example tables below display how it works in different situations. The average cost calculation is quite simple if inventory never goes negative, but when it does, the average cost can be difficult to understand – the examples below should help understand a few special cases. Each row in these examples is a separate inventory transaction.
Information on changing an item’s average cost can be found here:
Change an Item’s Average Cost
Regular
Quantity Changed
Cost Each
Total Value Change
Running Value
Running Stock
Total Value/Total Stock = Average Cost
+5
$5
$25
$25
5
$5
+5
$10
$50
$75
10
$7.50
-7
$7.50
$-52.50
$22.50
3
$7.50
This is the simple example, where stock never goes negative. 5 units are purchased at $5, and 5 units at $10, resulting in 10 units in stock at $7.50 average cost. A sale of 7 units goes out at the average cost of $7.50, leaving 3 in stock still at $7.50 average cost.
Negative Stock
Quantity Changed
Cost Each
Total Value Change
Running Value
Running Stock
Total Value/Total Stock = Average Cost
-5
$8
$-40
$-40
-5
$8
+5 (of 7)
$8
$40
$0
0
$0
+2 (of 7)
$10
$20
$20
2
$10
Late posting for negative stock for 5 units
$2
$10
In this example the inventory starts negative with 5 being sold at a cost of $8 each. 7 units are then bought in at $10 each, which totals to a cost of $70. Since we have only accounted for selling 5 at $8 ($40) and having 2 in stock at $10 ($20), only $60 of cost has been recorded even though we bought a total of $70. To account for this, a late posting for negative stock of $10 (5 units at $2 = $10) is made to correct the inventory value and COGS account.
In example above, the items were sold with an estimated cost of $8. When the product is received and the final cost of $10 is brought in, the late posting of $10 ($2 for each unit) is needed to correct the inventory value and COGS account in Paradigm.
Adjusting Average Cost
Quantity Changed
Cost Each
Total Value Change
Running Value
Running Stock
Total Value/Total Stock = Average Cost
+10
$8
$80
$80
10
$8
+5
$11
$55
$135
15
$9
-15
$9
$-135
$0
0
$0
+15
$10
$150
$150
15
$10
In this example we start with a purchase of 10 units at $8 and a purchase of 5 units at $11. If the $8 average cost resulting from the purchase in row 1 needs to be changed to the item’s last purchase cost of $10, an inventory adjustment is required. The process of making that two-line adjustment can be found here:
Change an Item’s Average Cost
The results of this adjustment are the 15 units being removed at their average cost of $9, then being brought back in at $10. The valuation difference of $70 is directly posted to COGs by the inventory adjustment.
