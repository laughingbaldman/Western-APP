# Do It Best Integration

Source: https://docs.goparagon.com/kb/do-it-best-integration/

---

Do It Best Integration – Paradigm ERP by Paragon – Documentation
Home
Add-Ons and Integrations
Do It Best Integration
Do It Best Integration
This FAQ will go over the integration with Do It Best, using
DataHub
in Paradigm.
Usage
Price changes and item updates will be shown in DataHub >
Item Updates
.
Order Confirmations will be shown in DataHub >
Pending Purchases
.
A customer can be signed up to the loyalty program under the Customer > Do it Best Customer Loyalty tab.
Orders, Invoices can be tagged with a loyalty number before the customer has been configured for it, and it will link up to their account later.
If a Do It Best Retail Inventory File is set up it can be imported to push the prices, inventory count, and shelf numbers from Paradigm. Contact Paragon to have this enabled.
Order Confirmation Download/Find POs and Import as PI
Use the Find POs and Import as PI to find the existing PO(s) (by P.O. Number), and convert them, which will then import the
expected quantity received
and the line costs.
Fulfillment Pro – Purchase Invoices
Purchase Invoices that haven’t been claimed by anyone in Fulfillment Receiving will show up under a new list on the right-hand side under Pending Receiving:
A purchase invoice is “claimed” by whichever employee receives the first line. It will move to that employee’s Recently Received list at that point, and be hidden from other employees in the Pending Receiving list. Expected quantity received (“Inv:” in the screenshot) can then be used in Fulfillment and received as needed:
PO Upload – Purge a faulty PO from DataHub and re-upload
If there is an error on the PO from Do it Best, it can be purged from DataHub by clicking “Purge from DataHub”. This will delete it from DataHub, and un-release it in Paradigm. You should then make your edits, and re-release to re-upload it to DataHub and Do it Best.
Customer Loyalty
Customer Loyalty – Handling new customer joining loyalty program from an order/invoice/POS
Before the sales from the POS is complete, enter the customer’s new Customer Loyalty number in the Do It Best Customer Loyalty field here:
Continue to add invoices for this customer under POS/the CASH customer until the customer has its own record. Those sales will be linked up to their Do It Best Loyalty account later when they enter the same loyalty number in the new customer’s information (see below).
This field is also available on Quotes, Orders, and Invoices under the Advanced tab. This field will automatically populate if the customer has been configured.
Customer Loyalty – Adding New Customer to Loyalty Program
In the Customer view > Do it Best Customer Loyalty tab, click Enroll Customer to enroll a new customer. This can be before or after they’ve used a loyalty code.
Enter the new or previously used Loyalty Number in the first field. The loyalty number can be used in the “
Search All
” field and the customer ID field directly to select that customer.
Enter all other relevant info. Fields that have the page icon are synced to fields on the customer (City, State, Zip etc. are all synced as part of Mailing Address).
Customer Loyalty – Unenroll/Delete
If the loyalty info was never uploaded to Do it Best yet, the button will appear as “Cancel Enrollment”, and can be clicked without issue.
If the loyalty info has been uploaded already, the button will appear as “Delete Loyalty Data“. In this case, the deletion must be done outside of Paradigm, from Do It Best. After Do It Best has deleted it from their end, the information can be deleted from Paradigm.
Do It Best Upload
Manual uploads can be done by going to Data Utilities > Do It Best.
