# Multi-Stage Production

Source: https://docs.goparagon.com/kb/multi-stage-production/

---

Multi-Stage Production – Paradigm ERP by Paragon – Documentation
Home
Production
Multi-Stage Production
Multi-Stage Production
This FAQ will go over how to set up multi-stage production in Paradigm, which should be used when an item has multiple machines that are used to produce it. This builds off of an item that was previously set up for single stage production, more information on that can be found in this FAQ:
How To Make A “Manufactured To Order” Inventory Item
Open the inventory item and go to the production tab.
Then add the new stages to the production process.
Production
In production, the builds will show up on each machine. The builds on the second machine will show red until all previous stages are completed.
If the builds are attempted to be completed before the other stages has been completed, the follow error message will appear:
This item is not ready for this machine! Are you sure you want to complete this item?
If the item is completed anyways, the stage was that was skipped will be marked as complete as well.
After every stage of production for the build have been completed, the build will be posted.
Scan to Complete
When using the scan to complete feature, the first time it is scanned in it will mark it complete at the first machine. Then once it is scanned again, it will mark it complete at the next machine.
