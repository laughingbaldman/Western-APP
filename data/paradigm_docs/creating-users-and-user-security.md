# Creating Users and User Security

Source: https://docs.goparagon.com/kb/creating-users-and-user-security/

---

Creating Users and User Security – Paradigm ERP by Paragon – Documentation
Home
Administration and Setup
Creating Users and User Security
Creating Users and User Security
This FAQ will go over the user security screen in Paradigm. This is used to assign users to roles and specific permissions. By default, a user is not allowed permissions for anything until it is granted to them.
User Security
To access user setup, go to System > User Security
This will display a list of users and their roles. Passwords for existing users can be changed directly in this form.
Creating Users
To create a new user, click the “Add New User” button in the header.
Enter a username, password, and template user. The new user will copy over the permissions, roles, user type, report security settings, dispatching filters, list layouts, and  saved filters from the template user.
Password Requirements
Password requirements can be configured in the
company preferences
. Passwords may not match the user name.
User Lockout
After 5 failed login attempts to a given account, it will be locked and a task will be created for all users that have security permissions, notifying them that it happened. The following message will be shown to the user logging in:
Login Failed: Invalid Username or Password
.
Locked out users will create a task for all users that have access to “User Security”, notifying them that a user is locked out:
Login for user is disabled
To allow the user to login, it must be unlocked by an admin from the security screen. Resetting the password will clear out the failure count as well.
Administrator Only Permissions
The following is a list of permissions that only users with the user type “Administrator” have access to:
Editing other users’ filters, user preferences, email queue, or the task list.
AvaTax – Offline invoice reconciliation and posting invoices when the connection to AvaTax is down.
Releasing admin credit holds.
Company Setup
More sensitive activity in the audit trail.
Data Hub Settings.
Re-assigning a purchase invoice to a different job.
Editing a 1099 box on a posted transaction.
Viewing and Editing some fields in the employee screen.
Setting a price/discount on a line that goes below the item’s minimum margin.
Overriding a discount sensitivity code.
Roles
Roles are groups of permissions that can be added to a user. If more than one role is assigned to a user, they will be given permissions from all of their assigned roles. If a permission is not allowed in one role, but is allowed in another one, that permission will be granted to them. Roles only allow permissions, they do not remove them.
Adding Roles
To add a role to a user, select one from the drop down beside the user, or select multiple users and then click “Add Role to Selected Users”. Multiple roles may be added if needed.
Creating Roles
To create a new role, first click the “Edit User Roles” button in the header.
From there, click “New Role”.
Enter a role name.
Then select the check box options for each permission, or select multiple permissions and applying changes using the buttons at the top.
Editing Existing Users
Overriding Permissions
To view and edit permissions on an existing user, click the “User Permissions” tab or click the button on the right for a user.
From here, permissions can be adjusted for the selected user. The permissions changed here will override all of the roles assigned to the user. Left clicking will enable a permission and right clicking will disable it.
The User Permission list does not need to be filtered to a single user. This is useful to see which users have a access to a certain form.
