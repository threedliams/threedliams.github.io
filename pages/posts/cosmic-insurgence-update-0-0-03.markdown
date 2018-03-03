As I mentioned in the last post, this version is made up entirely out of changes to the backend. As before, here is the changelog:

Backend updates:  
- Added Planet class  
- Added resource income fields for planets (quark income, etc.)  
- Added leader field for planet, currently takes a Character pointer  

- Added Character class  
- Added list of owned planets for character  
- Added field for player's relationship to character  
- Added field for character's loyalty to the empire  

- Added list of owned planets for Player  
- Added rebellion field for player  

EVML/Interpreter updates:  
- Added resource based threshold unlocks for events  

As you can see, most of the changes are hard to show off in an interesting way, since they're all fields that are there so that they can be used in the future. However, they did pave the way for me to put together the threshold unlocks for events. This means that you can specify prerequisites that need to be fulfilled for the event to show up.

And an example:

Here's a modified version of our usual sample event that shows the prerequisite syntax in action (changes highlighted):

<name>Prereq Test</name>  
<img>Data/images/preTest.bmp</img>  
<desc>This is a sample event. It should only show up after you've reached 40 quarks</desc>  
<u><i><pre>quarks=40</pre></i></u>  
<opt>  
&nbsp;&nbsp;&nbsp;&nbsp;<txt>option 1</txt>  
</opt>  
<opt>  
&nbsp;&nbsp;&nbsp;&nbsp;<txt>option 2</txt>  
</opt>  
<opt>  
&nbsp;&nbsp;&nbsp;&nbsp;<txt>option 3</txt>  
</opt>  
<opt>  
&nbsp;&nbsp;&nbsp;&nbsp;<txt>option 4</txt>  
</opt>  
<opt>  
&nbsp;&nbsp;&nbsp;&nbsp;<txt>option 5</txt>  
</opt>  
<opt>  
&nbsp;&nbsp;&nbsp;&nbsp;<txt>option 6</txt>  
</opt>  
<unique>false</unique>  
<lock>false</lock>  
<rand>50</rand>  

Here's the console output this generates as we add quarks to our total from a separate event:

![console output](http://threedliams.github.io/assets/update0-0-03/prereqDemonstration.jpg)

Moving on from here, these are the changes I plan to include in the next update:

1. Make prerequisites more robust. Right now the syntax (resource)=(value) actually means that the event will show up whenever the resource is greater than the value. I'd like to change that and add support for <, >, <=, >=, and fix the = so that it actually means =.

2. I need to refactor the graphics functions to make them more useful and less specific to what the game looks like right now. The more general I can make these functions, the easier it will be to add new pages and windows in the future. I would also like to separate the graphics loop from the game loop before we get too far down the line. Right now the graphics and game loop are one and the same, which is bad practice.

3. I have started using a lot of enums for representation and interpretation of event results, since they make it easy to pass representations to other classes and functions. (If I want to add 10 might, it's easier and safer to pass (mightEnum, 10) to a function than it is to pass ("mightString", 10). I need to standardize and organize these so that, again, they're more robust and useful for the future. For instance I have representations for the different resources so that they can be easily passed from the interpreter to the player class. However I also have representations in a separate class for the resources when they're used as threshold values. It would be much easier and smarter to put all of these enums in one place so that representations are standard across the entire program.

That should be enough to keep me occupied for the next few days. Looking further forward, the event system is getting close to where I want it to be in terms of features. The next major addition I think I'll be implementing is a clear representation of the results of choosing an option. This will probably end up being it's own update because of the amount of work that I anticipate going into it, and because it will probably require a restructuring of how events are interpreted. Right now they're just all sitting in an events folder, but once we start getting result pages for events, they'll need individual folders for each event containing the .evml file and whatever representation I choose for a results page (probably just an image and a description).
