# Smartbuild Webinar 1.103

Source: https://www.youtube.com/watch?v=L9M1KnRsFPs

---

Video URL: https://www.youtube.com/watch?v=L9M1KnRsFPs
Channel: SmartBuild Systems LLC
Upload Date: 20251120
Duration (seconds): 684

## Transcript
Kind: captions
Language: en
Good morning everybody.
I think we'll get started here. I think
first of all just want to thank everyone
for being here. Thank you for uh you
know being part of the smart build team.
We really rely on you uh for what we do
and we do appreciate your patience. Um,
you know, I know there's a lot of things
that people want to see and we have a
lot of requests. So, we do our best to
fulfill those. And sometimes it takes
some time. You know, things will come
around.
If you do have uh requests and uh
questions, please keep those coming. We
do listen to those. I know sometimes it
takes a while. Uh but our team here,
this de development team works really
hard. Um, and so today there's quite a
bit of stuff to go over. We had quite a
bit of uh fixes and cleanup and some bug
stuff that I won't really get into the
bugs today, but we did send out a list
of all the fixes. So, uh, you can review
those. If you have any questions about
those, we can discuss those at the end.
But
at this point, I'm just going to jump in
here. I am trying to give a pretty high
level view of the new stuff and how it
works. Not necessarily going to get
super detailed, but we can get into
details at the end if you want or you
can contact support um you know in the
next few days or whenever you need to
and and we can figure out a way to
answer your questions. And that's
actually where I'm going to start here.
So, I'm going to go into the settings.
I'm going to go up uh to the setup
wizard
and
I'm just going to touch on the setup
here and then we're going to go into the
3D model and I'll actually show you this
in the 3D model after we get through
some of the setup. So, I'll kind of
quickly go through a few of these
things. Um,
couple things that are new that I've
already set up quite a bit of this, but
in the framing,
um, if we go into just say like a 2x6
member that I have in my database and
I type in knee knee brace in the search,
I already came in here and, you know, I
found this usage and I moved it over to
the left, you just double click. And
basically, this just means now for this
new knee brace uh framing member, I have
the 2x6 available for that. And so,
we'll take a look at that. So, just, you
know, if you want to use these knee
braces, you do have to set up a
material. Uh same thing here for collar
ties, which we'll take a look at here
again. Um, but you do have to make sure
to add those usages to whatever
materials that you would use for these
particular uh framing parts if you want
to use those.
The other big materials here, I'll
switch over to the trim.
And I set kind of just some generic
stuff up here down at the bottom, but we
have added post wrap and beam wrap
for porches mostly. And so we'll we'll
see those in the 3D model. But in order
to use those, you do have to come in
here and set up some trim materials.
And I'll open up this post wrap
material.
Um, so just kind of a generic material
that I set up here. It's just like any
other piece of trim. Um, and I did set
this again with a usage of the uh, post
wrap. So, you'll have to do a similar
kind of thing there. I just have a 10-ft
part length. I have all the colors here.
U, whatever colors you actually want to
use for post wrap, you can put those in
here. Um, and you can get into these
colors and you can put on some what we
call bump maps. Um,
really like kind of textures that you
can get and probably some of you are
aware of that. Um, but um, if you're
not, we can help you with that. You can
get some like kind of wood grain looking
things and you can even upload custom
bump maps to get some different looks on
these uh post wraps and really anything
with the color. Um if you don't put any
bump map or anything on there, it's just
going to be a flat kind of color. So you
can set these up just like other trims.
And couple things to keep in mind. Um,
this width is going to be that bottom
piece of the beam wrap that's horizontal
at the bottom of the beam. And so this
is going to be a 6 inch wide. Oh, this
is post wrap. Sorry, I'm mixing these
up. Um,
with the post strap, yeah, this is going
to be the width of the post wrap all the
way around.
And one thing to know about this is
whatever size you put in here, it's
going to basically just shrink wrap
around the post.
Um it's just going to make sure that
post is covered with the post wrap. So,
you got to be careful that um you're
picking the right material because a 3D
model, you know, if you picked a 4 inch,
say post wrap for this, it's still going
to wrap a 6-in post. So, this is not
super important at the moment with post
wrap, it's just going to wrap around
that entire post. But, you can come in
here and whatever sizes you do have, you
know, you can have the description and
the skew for these. Um and then again
your part lengths and colors.
Similar kind of thing but a little bit
more going on here with the beam wrap.
Um same thing with the colors and the
lengths and the usages.
These two the width and the height do
become uh more important here where this
is going to be the width of the bottom
of the beam wrap that horizontal piece
at the lower end of the beam wrap. And
then this is going to be kind of like
the legs coming up on the sides. And the
back and the front are going to be the
same. They're both going to use this
height. Um, you can set this to zero. If
you set that to zero, it's just going to
use like a flat stock piece on the
bottom. Um, and you will get the open
wall base trim. And we'll look at some
of those trim. So, if you do just have a
flat piece on the bottom with some trim,
you can use that. Um, if you do have
legs on these of some sort, I just put
in three inches here, but whatever uh
you would use,
um, you'll when we get into the model,
you'll see that those will come up on
the sides and they'll even get rid of
your panels if you have panels there
depending on uh the height of these. So,
you can end up to where you just have
beam wrap with no panel. and we'll take
a look at that in a second. But
um
yeah, so for the beam wrap th those are
the two important dimensions that you
want to set up.
And one other thing I guess I'll point
out real quick here. I do have um a 6-in
cedar board that I set up which I also
used for post wrap.
um with some part lengths. And I have a
bunch of colors in here. Probably not
necessary, but um this will become
important. This is just a board, I
guess, but I'm also going to be using
for post wrap.
And I'll demonstrate
how you can also use assemblies for
these post wraps and even for beam
wraps. But we'll just take a look at uh
the post wraps real quick. And it's
going to point out another new feature
here. So, for these trim assemblies, um,
I really only set up the cedar 6-in
cedar board here. So, I'll open these
up. And if you're not familiar with
these assemblies, we do have a whole
video that goes into these. So, I'm not
going to go too deeply into these, but
basically the way these work is you can
pick a primary material and then these
entries down here, you add these in and
you can add in
different type depending on which uh
type of material. You can do posts,
sheathing or trim. But for the trim, you
can do closures and fasteners and
sealant and other. And when you do
other, you can actually call that
whatever you want. So when it shows up
on your job review, um it'll whatever
you want that to say is what it uh what
it will display on your material list.
And you can come in here and set up
different calculations
uh to calculate all these different
types of materials based on lineal
footage or square footage or per item
depending on what you're selecting. And
then when you if you choose say for post
wrap like I'm doing here, if you choose
the six inch cedar board for your post
wrap, it's going to add in all these
entries or accessories and things that
you're calculating automatically. So it
kind of just bundles all those things
together and calculates those for you.
And we do have a video on this and we
can help you get these set up.
But the way that I'm using these is for
the post wrap for just a 6-in cedar
board where I have individual boards on
all four faces of each post. And if
you've been using these assemblies, the
thing that is new here is that there's
now a primary quantity added.
So before when you selected the 6-in
cedar board, you would just get one of
those.
And that kind of makes sense for, you
know, some different parts of pieces of
trim, but especially for the post strap
is mostly why we did this. If you have
like four individual boards around a
post, there was really no good way to
get the quantity for those within an
assembly. And really, these are just for
trim assemblies at this point. But, um,
I put in a quantity of four. And so when
I choose the six-inch cedar board for
post strap, it is going to give me four
of these for every post.
If you have a post strap that you know
is like a two-piece post wrap, then
you'd want to put in two here and then
you'll end up with a quantity of two. If
you know you just order post wrap as
kind of a single item, you can just put
one here and one will

## Description
The expected Live release date is the evening of Thursday, November 20, 2025

 

Structural Single ply truss carriers

New Truss Carrier Style options of Non-Structural and Single Structural

Non-Structural is the existing behavior that requires Truss or Rafters to bear on posts. 

Single Structural is new and allows Trusses or Rafters to bear on the Single Truss Carrier

Decorative Post wraps

New Post Wrap Trim material can be set up like other trim materials with lengths, pricing and colors

Note:  At this time, no matter the dimensions of the post vs the post wrap, the Post Wrap Trim will completely ‘shrink wrap’ around the post so be careful to select the correct size as it will not visually show a mistake in the 3d model

Tokens and Calc Bases for lineal footage and number of Post Wrap Trim

Porch Beam Wrap

New Beam Wrap Trim material can be set up like other trim materials with lengths, pricing and colors

Dim 1 is the width of the horizontal piece at the bottom of the beam wrap

Dim 2 is the width/length of the vertical pieces for both the back and front

If Dim 2 is zero then only the bottom flat piece will be used

With flat bottom gable trusses, the return framing for the beam wrap will automatically be placed

Collar Ties for Rafters

New Collar Tie Framing material can be set up like other framing materials with lengths and pricing

Knee Braces

New Knee Bracing Framing material can be set up like other framing materials with lengths and pricing

Knee braces will only be placed where a truss or rafter connects with a post 

Save defaults for Attached Buildings

One set of defaults for each of the 4 existing types of attached buildings (Porch, Lean-to, Awning and Attached Building) can now be saved in a job as part of the input

This is limited by the ‘Edit Distributor’ user permission and the ‘Can Edit Framing Rules’ distributor permission.  (If a user/distributor does not have these settings then the Save Defaults is not available)

This is the first phase of a larger project to allow unlimited custom saved defaults that includes all relevant job questions to be available for Attached Buildings

Change for when Jamb Post Material is set to ‘Match Post’ and Post Material is set to ‘Auto’

If the Post Material is set to ‘Auto’ and the Jamb Post Material is set to ‘Match Post’ then the Jamb Post Material will now always match the resulting material of the Post Material Span Tables (and not itself be subject to the Post’s Span Tables)

Quantities for Trim Assemblies Primary Materials

For example, the Primary Material in a Trim Assembly for Cedar Post Wrap could use a quantity of 4 individual boards for each face of open posts.  This will apply the correct quantities to the material list according to consolidation logic from a single Trim Assembly. If a Post Wrap is a 2 part material then a quantity of 2 can be used.

Note:  This Primary Quantity will not change any Entries calculations

New Document Tokens and Calc Bases

# of Outriggers 

# of roof planes

Lineal footage Bottom Plate, Top Plate, Very Top Plate, Interior Skirtboard, Interior Girt, Interior Top Girt, Base Rail

A new ‘See Cost’ User permission allows an Admin to hide Job Review Cost information on a user by user basis

The Job Name column’s width when adjusted in the Jobs list will now be saved 

The Price when editing a job can currently be hidden or shown by double clicking on the Job Name, the last state of the price (hidden or visible) will now be saved as a ‘cookie’ so the next time a job is open it will remember which one you prefer

 

Bug Fix- Roof Edge and Top of wall Trim correct location

Bug Fix- Parent Loading Table questions are ignored at Child level 

Bug Fix- Slider door truss carrier cuts on the inside of both posts instead of the center 

Bug Fix- Editing Assembly removes usage from Primary Material

Bug Fix- Time out when update Builders and Starting Models from Framing Rules

Bug Fix- Error Message when trying to download the TAAS Job File

Bug Fix- Packages turned off when Taking eModeler jobs

Bug Fix- Product Systems menu edits Assembly description

Bug Fix- Unable to download user list from Admin

Bug Fix- {TrussTypes} Token extra space on document template

Bug Fix- Can not open the Starting Model folder if it has ' or '' character in the folder name

Bug Fix- NULL in Loading Tables upload

Bug Fix- Special character (.) in package name error

Bug Fix- Set Up Wizard Search improvement

Bug Fix- Cross Section Output Shows Truss Spacing for Rafters in some cases

Bug Fix- Viewer link not working if logged in to different distributor

Bug Fix- eModeler- Hidden settings break job Tab

 

API updates

API response for Starting Model list resolved
