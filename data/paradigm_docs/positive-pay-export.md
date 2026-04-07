# Positive Pay Export

Source: https://docs.goparagon.com/kb/positive-pay-export/

---

Positive Pay Export – Paradigm ERP by Paragon – Documentation
Home
Accounting
Positive Pay Export
Positive Pay Export
This FAQ will go over the Positive Pay Export options in Paradigm.
Bank Account Set Up
The Positive Pay format can be set up by going to General Ledger >
Chart Of Accounts
> open the
bank account
and then set the export format.
Using The Positive Pay Export
To use the “Positive Pay Export”, go to the
Bank Account Register
and set the date range, then click “Positive Pay Export”.
A pop up will be shown to select the date and will show how many checks were found.
Positive Pay Export Formats
This is a comma separated column list used when doing a Positive Pay Export.
The following columns are supported: CHECKNUMBER,AMOUNT,PAYEE,DATE,ACCOUNTNUMBER,ISSUE,ISSUEORVOID,VENDORID
If you want to include column headers, add the desired name after the column name, separated with a colon:
CHECKNUMBER:CheckNum
The resulting string might look like this: CHECKNUMBER:CheckNum,AMOUNT:Amt,PAYEE:Payee
Available Formats
Format #0:
CHECKNUMBER,AMOUNT,PAYEE,DATE
Format #1:
ACCOUNTNUMBER,DATE,CHECKNUMBER,AMOUNT,PAYEE
Format #2:
ACCOUNTNUMBER:BankAccountNumber,AMOUNT:CheckAmount,CHECKNUMBER:CheckNum
,DATE:CheckDate,ISSUEORVOID:IssueOrVoid,PAYEE:PayeeName
Format #3:
CHECKNUMBER,PAYEE,AMOUNT,DATE
Format #4:
VENDORID,PAYEE,DATE,CHECKNUMBER,AMOUNT
Format #5:
CHECKNUMBER,AMOUNT,DATE,PAYEE
Format #6:
CHECKNUMBER,DATE,PAYEE,AMOUNT
Format #7:
CHECKNUMBER,AMOUNT,ISSUE,DATE,VENDORID,ACCOUNTNUMBER
CUSTOM:
Enter the columns needed.
Export Page
A Positive Pay Export page can be set up in Paradigm.
This can be used to export bank account data in the Positive Pay format, the following formats are available:
Format #0 (Default): CheckNum,CheckAmount,Payee,CheckDate
Format #1: BankAccountNumber,CheckDate,CheckNum,CheckAmount,Payee
Format #2: BankAccountNumber,CheckAmount,CheckNum,CheckDate,IssueOrVoid,PayeeName. This format also includes a header line.
Format #3: CheckNum, PayeeName, CheckAmount, CheckDate
Format #4: Vendor ID, PayeeName, Date, Check Number, Amount
Format #5: CheckNum, CheckAmount, CheckDate, PayeeName
Format #6: CheckNum, CheckDate, PayeeName, CheckAmount
