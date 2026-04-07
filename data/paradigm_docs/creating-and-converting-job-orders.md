# Creating And Converting Job Orders

Source: https://docs.goparagon.com/kb/creating-and-converting-job-orders/

---

Creating And Converting Job Orders – Paradigm ERP by Paragon – Documentation
Home
Job Costing
Creating And Converting Job Orders
Creating And Converting Job Orders
This FAQ will go over creating orders for a job. The process for this is very similar to creating a regular order, except for the few differences listed below.
Creating an Order
To create an order for a job, first set the status on the job to “Accepted/Pending”, otherwise an order cannot be created for the job. More information on that can be found here:
Creating a Job
Create the order, enter the customer that is on the job, and select the job ID from the dropdown beside “Job”.
Then add the items to the order like normal.
Converting An Order
Converting An Order To a Job Transfer for A WIP Job
When the products on the order have been delivered to the job and the order needs to be completed, by default it will be converted to a Job Transfer to move the cost of the items to the job, but not post them to the profit and loss yet. This is only true for non-posted WIP jobs.
Converting an Order To an Invoice For A WIP Job
When converting an order for a WIP job that has already been posted, the order can only be converted to an invoice. If a WIP job is unposted, it can be converted to a job transfer or directly to an invoice. Converting directly to an invoice is used most commonly used when there is an addon after the agreement is signed that was not included in the original proposal amount and the customer is paying for it directly.
Orders converted to an invoice instead of a Job Transfer will be posted directly to COGs and Income on the Profit and Loss and do not pass through the WIP account. They will still count towards the job sales/cost totals for the job.
Converting An Order for a Non WIP Job
Orders for non-WIP jobs can only be converted to invoices, not Job Transfers, since they do not pass through the WIP account. Invoices and purchase invoices for a Non-WIP lump sum job will use the GL Accounts from the selected
job classes
, similar to how posting those transactions would work if they were for a posted WIP job.
