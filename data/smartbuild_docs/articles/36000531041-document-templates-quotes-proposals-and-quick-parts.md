# Document Templates - Quotes, Proposals and Quick Parts

Source: https://support.smartbuildsystems.com/support/solutions/articles/36000531041-document-templates-quotes-proposals-and-quick-parts

---

Solution home
FAQ
FAQ
Document Templates - Quotes, Proposals and Quick Parts
Print
Modified on: Thu, Dec 12, 2024 at 11:35 AM
Our document templates are used for a quick and easy process to export a document with minimal effort to produce a professional looking proposal to the customer.   One challenge with this and our {token} based reporting system is that if you use a token on your output that may report the
{WainscotColor}
, this color simply reports whatever your wainscote color was set to in that particular job.  It does not take in consideration if that job even had wainscote at all.   This can cause the salesperson to need to manually review and edit each output to assure there are not items like this listed that may not be included, causing confusion with the customer.
In order to avoid this, we now support using merge fields within your Word document templates. This can help exclude certain items from your documents, if they do not apply to a certain project.   Examples include wainscote, liners, and soffit materials.  So you've probably never heard of merge fields (quick parts), and if not that's fine because we can help!
Here is a short video showing how to set up a new use case:
Quick Parts - Merge Fields
A few examples of these formulas that can be used, are listed below. They can be copied and pasted to your documents. If you have never used merge fields within a Word document, our team can assist you in implementing one of the examples below, or possibly create a new one for a unique situation.
If we take the first example listed below, lets walk through how it would work.
{ IF "{JOB-HasWainscot}"="true""{WainscotColor} {JOB­ WainscotMaterial} Wainscote Material'"'Wainscote Not Applied"}
If there
IS
wainscote applied to a job, it would report as this:
Black Ag Panel Wainscote Material
If there is
NOT
wainscote applied to a job, it would report as this:
Wainscote Not Applied
EXAMPLES:
"{JOB-HasWainscot}"="true""{WainscotColor} {JOB­ WainscotMaterial} Wainscote Material'"'Wainscote Not Applied"
"{JOB-Overhangs}"="0'""Soffit Not Applied-No Overhang""{Overhang} Overhang with {SoffitMaterial}"
"{JOB-InternalHasLiner}"="true""{JOB-lnternalWallMaterial} Wall
Liner Material""Wall Liner Not Applied"
"{JOB-HasCeiling}"="true""{JOB-CeilingMaterial} Ceiling Liner
Material""Ceiling Liner Not Applied"
"{JOB-WallFramingStyle}"="post""Eave Posts {EaveSpacing} O.C."''Walls - Stud Framed"
"{JOB-WallFramingStyle}"="post""{TrussCarrierStyle}
Ply
{TrussCarrierMaterial}
Truss Carriers""{JOB-WallStudMaterial} Studs"
"{JOB-WallFramingStyle}"="stud""Stud {JOB-StudSpacing} O.C.""Walls- Post Framed"
You can download our sample document attached that already has some of these set up.   If you open this document in WORD, you will be able to "right click"  on any of these already set up to see them, they are hidden by default.
Next click the edit field, and you will see the Quick Parts menu open.  It will look something like this:
You can follow this example to create more use cases.
Here is a short video showing how to set up a new use case:
Quick Parts - Merge Fields
docx
new quote.docx
(117 KB)
Did you find it helpful?
Yes
No
Send feedback
Sorry we couldn't be helpful. Help us improve this article with your feedback.
Related Articles
Help Desk Software
by Freshdesk

## Attachments
- new quote.docx: F:/Western Intel V2/Western Intel/data/smartbuild_docs/attachments/36000531041/document-templates-quotes-proposals-and-quick-parts-attachment-1.docx
