# Journal Entry Import Format

Source: https://docs.goparagon.com/kb/journal-entry-import-format/

---

Journal Entry Import Format – Paradigm ERP by Paragon – Documentation
Home
Accounting
Journal Entry Import Format
Journal Entry Import Format
General ledger journal entries can be imported into Paradigm from a
.csv
text file. The import file has two different formats, one for header entries and another for detail entries.
Import Formats
Header Line
LineType,Date,Reference,GLDepartmentCode
Example: H,01/20/2019,Payroll Import,DEPT
Detail Line
LineType, GLAccountNumber, GLDepartmentCode,Description,Debit, Credit
Example: D,1-1100,DEPT,Net Payroll From Checking,0,5510.25
Header Fields
LineType – Must be a value of “
H”
to indicate a Header line.
Date – The posting date of the journal entry in MM/DD/YYYY format. Entering “[TODAY]” will use the current date.
Reference – The description of the journal entry.
GLDepartmentCode – (Optional) – A GL Department code that matches a Paradigm GL Department code.
Detail Fields
LineType – Must be a value of “
D
” to indicate a Detail Line.
GLAccountNumber – A GL Account Number that matches a GL Account number found in the Paradigm Chart of Accounts.
GLDepartment – A GL Department code that matches a Paradigm GL Department code. If blank, the default department will be assigned by the import procedure.
Description – The description or memo for the journal line. These description can not contain commas.
Debit – The line item amount if it’s a Debit line item.
Credit – The line item amount if its a Credit line item.
(Note that a line item cannot contain both a Debit and Credit Amount. Use value of 0 for the field that does not contain an amount)
JobID – Optional – If used,  it must match an existing Paradigm Job ID.
JobPhase – Optional – If used, it must match a phase for the provided Job ID.
Job Phase Classification – Optional – If used, it must match a classification for the Job Phase.
Importing Examples
The import file must start with a Header Line, followed by the associated Detail lines like the example below. A file may contain multiple Header/Detail sections, a new journal entry will be created for each one.
Example
H,01/20/2019,Payroll Import,DEPT
D,1-1100,DEPT,Net Payroll From Checking,0,5510.25
D,6-1140,DEPT,Payroll Wages,5100,0
D,6-1426,DEPT,Employer Tax Expense,410.25,0
Import Example with Job Info
H,1/20/2019,Payroll Import,DEPT
D,1-1100,DEPT,Net Payroll From Checking,0,5510.25,JOB-00000,Phase 1,Labor
D,6-1140,DEPT,Payroll Wages,5100,0,JOB-00000,Phase 1,Labor
D,6-1426,DEPT,Employer Tax Expense,410.25,0,JOB-00000,Phase 1,Labor
Excel .CSV File Example
