# Fulfillment Pro: Priority Orders

Source: https://docs.goparagon.com/kb/fulfillment-pro-priority-orders/

---

Fulfillment Pro: Priority Orders – Paradigm ERP by Paragon – Documentation
Home
Fulfillment Pro
Fulfillment Pro: Priority Orders
Fulfillment Pro: Priority Orders
Sometimes, orders need to be pulled right away, which is what the priority order feature facilitates. There are two kinds of order that can be marked as priority orders. The first kind of priority order is one where the customer is here now, has just placed their order and is coming out to the yard/warehouse to load it. The second kind of priority order is one where the order was released as a regular order, not all the lines have been pulled yet, and the order is converted to an invoice — which means the customer is here, paying for it, and will be out to pick it up soon.
Settings
If certain types of priority orders are not desirable, they can be disabled by logging in with the administrator account, clicking the dropdown in the top right corner, and selecting “Setup”. In the “Fulfillment” tab the “Priority Orders” dropdown can be used to determine the exact type of orders that prompt a priority order, including an option to turn priority orders off.
Hide Priority Side Panel
To hide the priority side panel, click on the Fulfillment settings button and check the box beside “Hide Priority Orders side-panel”. More information on the settings in Fulfillment can be found here:
Fulfillment: Pull List Settings
Ship Via
The priority of each ship via is set through Paradigm, in System>Ship Via. Each ship via can have a priority of “Normal”, “Priority”, or “No Priority”. A “Normal” priority ship via will only be marked as a priority order if it is converted to an invoice without having all the product on it pulled (i.e. Customer Pickup), a “Priority” ship via is immediately marked as a priority order upon releasing (i.e. Customer Here Now, Customer Waiting), and a “No Priority” ship via is never marked as a priority order (i.e. Salesman Gathering). More info on that can be found here:
Ship Vias
Dispatching
Orders that are on trips in Dispatching will never get marked as a priority order, which allows the COD orders to be converted to invoices prior to delivery without unnecessarily alerting the yard.
Completed – Unpulled
If an order is completed and unpulled, and the setting shown below is selected in Fulfillment setup, that order will be shown are high priority in Fulfillment.
Fulfillment
When a priority order becomes a priority order, whether by ship via or conversion, the order will, at minimum, appear highlighted in red in the pull list. However, if the user account has the setting for “Enable location claiming” checked, the order will immediately appear in Fulfillment Pro in a special list at each location that needs to gather product for that order, called the priority list. The priority list will open on the left of their screen on the pull list, accompanied by a distinct noise. The priority list takes some room to the left of the screen, while leaving whatever other screens were open on the right side.
Information that appears in the priority list includes the order number, which will show additional detail about the order when clicked. Directly beside the order number is an “Open” button, which will open the priority order in the pull list (this may need to adjust filters, which it will do and notify the user of). Listed below the order number is each warehouse location on that order, along with a “Claim” button. When an employee decides to take responsibility for gathering the product for that order at a warehouse location, he should click the “Claim” button for that warehouse location. This will turn that location green, and immediately update every other priority list that may be open on other devices to show that someone is gathering that product, to avoid having two people working on the order at once. After the last location has been claimed, the priority list will close.
After claiming a location, unreleasing a priority order and releasing it again will retain the location claims to keep the employee pulling the order from being confused.
