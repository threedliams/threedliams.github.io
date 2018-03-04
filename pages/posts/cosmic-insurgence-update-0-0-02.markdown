Although I never mentioned it, the version of the Cosmic Insurgence project was 0.0.01 as of the first post on it, making this the first real update.

Here's a quick changelog before I dive in:

- Added support for nested tags to pave the way for triggers
- Tags now use a stack in the background to determine nesting
- System is completely naive about nesting, at the moment any tag can be nested in any other (<name><img>(image path)</img>(event name)</name> technically works even though it doesn't make sense from a semantics point of view)
- Basic trigger syntax implemented. Read updated EVML documentation for details.
- Added player class to keep track of resources.
- Added global gameState class to keep track of general game state, and allow triggers to modify the game state. Currently only holds the player.
- Resource totals for quarks, intel and might added to main screen for testing purposes.

The most exciting part of this is definitely the triggers, as everything else was just back end added to make sure that the triggers are working. The current syntax is available in the documentation (Removed an edit link to my personal google drive here. Sorry, but that was a weird idea. I'll add it back in some other form later.). I'm not sure how clear this really is, or if this will even be the final version, I haven't played around with it enough to see if it works well. In any case, here's a sample file for clarification:

<name>Sample Event</name>  
<img>Data/images/sampleImage.bmp</img>  
<desc>This is a sample event. Here are some options to choose from:</desc>  
<opt>  
&nbsp;&nbsp;&nbsp;&nbsp;<txt>option 1</txt>  
&nbsp;&nbsp;&nbsp;&nbsp;<scope>player</scope>  
&nbsp;&nbsp;&nbsp;&nbsp;<target>quarks</target>  
&nbsp;&nbsp;&nbsp;&nbsp;<mod>add</mod>  
&nbsp;&nbsp;&nbsp;&nbsp;<value>10</value>  
</opt>  
<unique>false</unique>  
<lock>false</lock>  
<rand>50</rand>  

From a graphical point of view, this looks exactly the same as the previous sample events, but it's much more (that is to say, at all) functional that the earlier versions. Now if I select this option, I can get a number to count up, which doesn't look very exciting in a static picture, but here it is anyway:

![counting up](http://threedliams.github.io/pages/assets/update0-0-02/newMainScreen.jpg)

The Main screen was changed slightly to show a few of the player's current resources for testing purposes.

Moving on from here, this will probably be the first in a long series of updates with little to no graphical changes, besides some refactoring and shifting around I need to do to make the graphics system more robust and useable. Since work will be almost entirely focused on the back end and game engine side of things, any screenshots will probably be in the form of boring old console output.

Getting more specific, I'm planning to add the overarching framework for a few of the larger game constructs (planets, other characters). By itself that's a pretty simple task, but it also comes with the need to establish some interaction, and link up any new fields and scopes with the interpreter. In addition, I have some improvements to make to events in the form of threshold unlocks (this event can only show up when you have a certain value of a certain resource) and event-to-event interaction (this event can only be unlocked by the trigger of another event).