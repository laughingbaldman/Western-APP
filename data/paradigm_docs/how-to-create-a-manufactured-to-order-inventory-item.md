# How to Create a “Manufactured to Order” Inventory Item

Source: https://docs.goparagon.com/kb/how-to-create-a-manufactured-to-order-inventory-item/

---

How to Create a “Manufactured to Order” Inventory Item – Paradigm ERP by Paragon – Documentation
Home
Inventory and Pricing
How to Create a “Manufactured to Order” Inventory Item
How to Create a “Manufactured to Order” Inventory Item
This FAQ will go over over how to make a “Manufactured To Order” (MTO) item.
Create The Inventory Item
1.
Create the base inventory item to be produced. See
Creating an Inventory Item
.
Adjust the Assembly / Kit
2.
Go to the Assembly/Kit tab. Check the ‘Custom Assembly’ checkbox if you want the assembly to be editable per order, or leave it unchecked if you want the assembly to stay the same. Select the ‘Manufactured to Order’ Assembly type. Add the products or service charges needed in order to produce the product. Be sure that you select the correct units of measure, and normally the lengths should match the length of the parent item.
Adjust the Production
3.
Go to the production tab and enter the machine that is needed to manufacture your item. On the far right, specify whether this item should default to manufacture. Both of these things will need to be set up for each warehouse location that the product will be produced.
4.
Create an order using your inventory item and release it to manufacturing to verify that your setup is correct.
For more information on Assembly types, click
here
.
Manufactured To Order Set Up Issues
No Components
If the item assembly type is set to “Manufactured To Order” but no components are entered, the following warning will be shown: A ‘Manufactured To Order’ item must have at least one component or it will not be releasable on an order.
If the item is attempted to be released to manufacturing, the following message will be shown:
There is a missing build on line: X, product: [PRODUCTID]. This is commonly caused by items that are set to be manufactured not having any components.
