# DataHub: Price Changes and Item Updates

Source: https://docs.goparagon.com/kb/datahub-price-changes-and-item-updates/

---

DataHub: Price Changes and Item Updates – Paradigm ERP by Paragon – Documentation
Home
Add-Ons and Integrations
DataHub: Price Changes and Item Updates
DataHub: Price Changes and Item Updates
This FAQ will go over how to do price changes and item updates in DataHub.
To start, go to DataHub > Item Updates
Adjust the filter and then click “Refresh” or press F5 to load the list. The server will begin to process the items that need to be compared. If any other users attempt to refresh this list after another user has already started this process, they will see the same progress bar and finished list.
This can take several minutes, depending on how many items it needs to compare.
Item Updates
This will show any items that have changes made to them. When finding changes for the unit of measure, DataHub will treat “EA” and “EACH” as the same value. Check the box beside each of the fields that are to be changed [1] and then select the items to be updated. The list will filter to the boxes that are selected here. For example, if “Description” is unchecked and a row only has changes to the description, it will be hidden. Then click “Apply Updates” [3]. The export button [2] can be used to export the item update information to Excel.
If the filter is changed after the list is loaded, click refresh to apply it.
Items Missing UOMs
This list shows the items where matches were found for Vendor’s ID and the Product ID in Paradigm, but no unit of measure on the item matched the vendor’s unit of measure.  Click the green plus to create a new item for that vendor product, or click the arrow to open the item. Once the changes are complete, click “Save Item Mappings”.
If the unit of measure on the product from the vendor and the product for the customer are not spelled the same, but still match (i.e. “EACH” and “EA”), then the UOM can just be selected by using the drop down.
Unmapped Items
This list contains items where there was no match between the Vendor’s ID and the Product ID in Paradigm. These are typically items that haven’t been ordered from the given vendor. Click the green plus to create a new item for that vendor product. Once the changes are complete, click “Save Item Mappings”.
Item Update Job Issues
If item updates are not getting completed or seem to be stuck, login as an admin and click the “Cancel/Clear Existing Job” button. This will cancel and clear any existing/previously run “Item Updates” job that may be stuck or currently running.
