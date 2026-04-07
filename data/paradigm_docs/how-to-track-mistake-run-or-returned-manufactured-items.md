# How to Track Mistake Run or Returned Manufactured Items

Source: https://docs.goparagon.com/kb/how-to-track-mistake-run-or-returned-manufactured-items/

---

How to Track Mistake Run or Returned Manufactured Items – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
How to Track Mistake Run or Returned Manufactured Items
How to Track Mistake Run or Returned Manufactured Items
This FAQ will go over how to track mistake run or returned manufactured items that are still in stock and available for sale.
There are two ways that this can happen:
Case 1
The wrong product is on the order, and the shop made that wrong item. This is by far the most common case.
Case 2
The correct product is on the order, but the shop made the wrong item.
The invoice shouldn’t exist yet in either case, as it is preferred that the invoices only get created after confirmation of delivery, or when the customer arrives to pick up the product. If the invoice does exist, it would need to be unposted and voided first off.
Mistake Customer
In part of the solution for this, a
MISTAKE
customer is created and then used on the the mistake orders.
Solution for Case 1
For the first case, all that needs to be done is
splitting
the already completed wrong product onto a
MISTAKE
order. In this example, burgundy was added to the order instead of aged copper.
Then put the correct items back on the original order, and release it (or instead put/split the replacement items onto a new order to keep things separate). This would be the same case for both panel and trim.
Add the mistake customer to the order that was created from the split (usually OE1).
The “inventory” of mistake trims will be reflected on the
MISTAKE
orders, and their value will already be costed out, because they are already marked completed in Production. The dollar amount on trim is small, and trims are often damaged and discarded anyway, so this process is typically acceptable. Mistake panels would remain in the panel inventory account until the order is converted to an invoice and posted when someone purchases the mistake panel.
Solution for Case 2
For the second case, the production that has been marked completed doesn’t match the product that was actually made, so the build that is marked complete needs to be uncompleted and ran again later. Instead, a build that matches the items that were actually produced needs to be completed.
The process would start in Production’s “
Recently Completed
” tab, where the builds that were marked completed can be found. Uncomplete them, these can simply remain uncompleted to be run again at a later date, as they are the correct items.
Then release an order for the
MISTAKE
customer for the items that were actually produced.
After that is released, immediately go to Production and mark those items as completed to record the production that was already done.
Selling the Mistake Run Product
Once a customer wants to buy the product, switch out the
MISTAKE
customer ID for the ID of the customer buying it.
Lot Tracked Product
Another way this can be done, is by creating
lot
records when a mistake order is placed. To do this, create a lot tracked item for each profile and follow the instructions below.
In this example, case 1 will be fixed using this method. To start, do this, start by splitting the mistake item onto a new order.
After that immediately go to the order that was split off and mark it as complete. This removes the order from the “Open Orders” list without invoicing it.
Next, go to production and create a new
quick build
. Put in the the mistake length panel ID and enter total quantity that was made of the mistake item.
Then click “Edit Build” and change the component to the mistake made item by clicking on the pencil icon. Note that the mistake run item will need to be set up as a
substitute
for the placeholder item before this can be done.
Then click “Finish”. Once that is clicked, the lot screen will appear. Fill in the lot information and enter in notes as to what was mistake run.
Viewing Mistake Run Items
To view the mistake run items, go the mistake item and click “Lots”.
This will show the lots that were created for the mistake run items.
Selling Mistake Run Items
To sell the mistake run items, add the lot tracked mistake run item code and select the mistake run product to sell from the lot selection screen.
