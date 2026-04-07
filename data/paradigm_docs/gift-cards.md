# Gift Cards

Source: https://docs.goparagon.com/kb/gift-cards/

---

Gift Cards – Paradigm ERP by Paragon – Documentation
Home
Order Entry and Customers
Gift Cards
Gift Cards
This FAQ will go over how to enable, sell, and use gift cards.
Enabling Gift Card Use
In order to begin using gift cards, they first need to be enabled. This can be done by going to System > Company Preferences > Sales and then from the Limits settings, check “Allow using gift cards.”
Once that is done, restart Paradigm, otherwise some of the gift card buttons will not appear.
The next step is to set gift cards to post to their own G/L account. Do not reuse another account, this account should only be used for gift cards. To set this up, go to General Ledger > Default GL Accounts, and then change the “Gift Card Liability” account on the receivables tab.
Filling Out Gift Cards
Gift cards can only be filled out through the point of sale module.
To fill out a gift card, click on the sell gift card button.
Then enter the gift card amount and scan the gift card or manually enter the numbers.
The gift card will then appear as a line item on the order.
To change the amount on the card, just change the sales price for that line.
Gift cards do not need to be registered with Paradigm ahead of time. They are registered when they are filled out for the first time.
It is recommended that the barcodes on the cards are in CODE39 or CODE128.
Using Gift Cards
If using a gift card to make a payment, choose the “Gift Card (F8)” option in the “
Receive Payment
” form. You can then scan in the gift card and process it from that form.
After the gift card is processed, you will be shown a popup with the remaining balance on the card.
Administration
Viewing gift card history and checking balances can be done in Paradigm in the “Gift Card List” found in Accounts Receivable.
Gift Card List – A list of all gift cards with a balance. Gift cards without a balance will be shown if “Show Closed Cards” is checked.
Gift Cards – Prompts for a gift number, once it is entered all info for that gift card will be shown.
Cards can be deleted if no longer needed, or if there is a remaining balance, you can use the “Deplete Card” button to post the remaining balance to an adjustment account.
A gift card ID will automatically get marked as “Closed” when its balance reaches zero. After that point if the card gets filled again, a new gift card record will be created. It will be treated as a new gift card account and the history for that gift card will reset.
History from closed gift card accounts can be found by checking the “Show Closed Cards” checkbox in the gift card list and searching for the card number.
Use the “Gift Card Reconciliation” report from the report list to see the total of all the open gift cards compared to the total balance in the gift card GL account. This report should be regularly checked to ensure that it is in balance. This report can be found by going to System > Reports > Accounts Receivable
