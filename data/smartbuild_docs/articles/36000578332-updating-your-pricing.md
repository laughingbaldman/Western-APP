# Updating your Pricing

Source: https://support.smartbuildsystems.com/support/solutions/articles/36000578332-updating-your-pricing

---

Solution home
SMARTBUILD - Setup and Implementation
Getting Started with Setting Up Smartbuild
Updating your Pricing
Print
Modified on: Mon, Jul 14, 2025 at  1:31 PM
Youtube Video to Updating Pricing
24.1 - Pricing Data Updates
The pricing data includes the cost, markup, price, taxable status, and lock markup status of each item in the database. During this entire material setup process, the pricing data of each item could have been added. This data will also need to be updated periodically due to any changes.
To update pricing data, there are three options:
Change pricing data directly in the PRICES page
Using the EDIT MARKUP option on the PRICES page
Upload new prices on the PRICES page
Navigate to the PRICES Page by selecting PRICING in the SETTINGS drop down menu. Once on the PRICES page you can choose any of the options listed above.
24.2 - Change Pricing Data directly on SmartBuild Window
After the PRICES page is displayed, double click the field (cost, price, markup or taxable status) you want changed. Once the existing data is highlighted, enter the new data.
24.3 - Change Pricing Data by Using the EDIT MARKUP Option
From the PRICES page, select the EDIT MARKUP button.
The EDIT MARKUP dialog box will be displayed. Enter the new markup and click on OK. The new markup will be stored, and a new price will be calculated from the new markup value and the existing cost.
24.4 - Change Pricing Data by Uploading a File
The third way to edit the pricing data is with the Basic Upload File option. This process begins with downloading the pricing data from SmartBuild. From the PRICES page, select the DOWNLOAD button. SmartBuild is set to only download the Cost and Price columns along with the Vendor Sku (if there is one), if there is no vendor Sku present, it uses the Sku instead to fill the Vendor Sku data in the file.
The CSV or XLSX file will be downloaded to your computer.
When editing the pricing with this process, you MAY edit only the Cost and/or Price columns.
An example of this file is shown below:
If you wish to edit other fields such as the Vendor Sku, Taxable, Weight, or Lock Markup, it is highly recommended to process these changes within the Setup Wizard instead!
The minimum fields required for the pricing upload are the SmartBuild Sku and/or the Vendor Sku, plus the price. This heading MUST be Vendor Sku though. If you need to edit additional data, it is recommended to do that in the setup wizard in that respective category.
You can upload the additional data listed above as needed,
only IF
you download all.
Sometimes the same Vendor Sku is used for multiple items, which is
OKAY only if
the pricing for these items is the same.  When this is true, the pricing upload with one entry will upload the pricing for ALL materials with that same Vendor Sku. For example, one trim item that comes in multiple colors was defined with the same Vendor Sku. One entry in the upload file will cause the pricing data of ALL colors to be updated.
If you are using a Special order item code that is common across multiple products, all with different individual pricing,
YOU WILL CORRUPT YOUR PRICING IF YOU ONLY UPLOAD THE VENDOR Sku
, One entry in the upload file will cause the pricing data of ALL colors will be updated.
There are certain things to consider when changing the PRICING data.
First,
save a backup copy of the downloaded file
, in case you determine that you’ve made major mistakes while changing the data. Hopefully you’ll never need the backup, but it couldn’t hurt to have one.
If you don’t want to calculate the markup, delete the MARKUP column and just upload the COST/PRICE data. SmartBuild will calculate the markup based on the new cost/price.
If the upload file contains a PRICE column ONLY, SmartBuild will change the COST to same value as PRICE and set MARKUP to 0.
If you upload new COST/MARKUP data, SmartBuild will recalculate the PRICE based on that new data (even if a different PRICE is uploaded at the same time). The new MARKUP has priority over the PRICE.
IF you are trying to Upload the Cost, Markup, and Price, and are having issues, keep in mind, rounding can cause an issue within Excel. If you are trying to upload all three columns, and SmartBuild is not coming up with the exact same Markup % value, it will give you an error and abort. Simply delete the markup % column before uploading to SmartBuild.
*Hint - if you’re building the excel file and the Price column is not a value, but actually a formula of = Cost *(times) Markup%, simply copy and paste the value in the price column, and then delete the Markup % column.
Save the file then re-upload the file to SmartBuild.
The UPLOAD MATERIAL PRICING page will be displayed. Click on the CHOOSE FILE button, and choose the appropriate CSV or XLSX file via Windows Explorer. Select UPLOAD.
When the upload is completed, SmartBuild will display the upload status. If successful, a message indicating the number of prices uploaded will be displayed. If not successful, SmartBuild will provide informative error messages to help identify the problem in the upload file.
Did you find it helpful?
Yes
No
Send feedback
Sorry we couldn't be helpful. Help us improve this article with your feedback.
Related Articles
Help Desk Software
by Freshdesk
