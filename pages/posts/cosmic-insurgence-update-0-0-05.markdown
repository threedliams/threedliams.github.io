# Cosmic Insurgence Update 0.0.05
I was a bit more busy with school work than I had expected, so this update is a bit late. The good news is I made it larger to compensate, and since I have little work this weekend/next week, I may be able to push out another one before the week is over.

As always, here is the changelog for this update:

Interpreter/EVML:
-Unified <txt> and <desc> tags to just be <txt> because they overlapped completely in terms of function.
-Restructured options to support multiple triggers off of one option
-Restructured options to support multiple results off of one trigger

Graphics:
-Added result page. Displays text and image based on the trigger fired after an option is selected. Includes a confirmation button.
-Added a quit button to the home page.

Character (NPC):
-Added affinity for income calculation. This percent is multiplied with the income of the planet the character controls to get the final income value.

Faction:
-Added faction class
-Factions are collections of characters. They will eventually be the teams you are fighting with for control of the galactic senate. Your cabinet will be made up of people from your faction. Your faction members will oversee the planets you have influence over.
-Added faction resource values
-Added faction income, calculated by adding the income of every member

Misc Backend:
-Changed quark/might/intel to doubles so affinity calculations can be made


This update ended up being a mix of front and back end changes, as well as the final touches on my current vision of the interpreter/EVML language.

Starting with the Interpreter/EVML changes, I reworked the way options are set up to make them more robust.

Each option now has a list of triggers, which are picked at random when the option is chosen. This should give the game more longevity since you won't be able to predict exactly the outcome of every event you've seen before. Each trigger can also now support multiple results. This means that, while before you could only add a value to one resource, now you can add any number of values to any number of resources with one single trigger.

In order to better visualize these changes, I also added a results page on the graphics end of things, which displays an image and some text describing the result you just got. Here is our old sample event, modified for the new syntax:

<name>Sample Event</name>  
<img>Data/images/sampleImage.bmp</img>  
<txt>This is a sample event. Here are some options to choose from:</txt>  
<opt>
&nbsp;&nbsp;&nbsp;&nbsp;<txt>option 1</txt>  
&nbsp;&nbsp;&nbsp;&nbsp;<trigger>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img>Data/images/smiley.bmp</img>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<txt>Good trigger! You just got 10 quarks and 10 might!</txt>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<rand>80</rand>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<result>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<scope>player</scope>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<target>quarks</target>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mod>add</mod>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<value>10</value>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</result>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<result>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<scope>player</scope>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<target>might</target>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mod>add</mod>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<value>10</value>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</result>  
&nbsp;&nbsp;&nbsp;&nbsp;</trigger>  
&nbsp;&nbsp;&nbsp;&nbsp;<trigger>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img>Data/images/frowny.bmp</img>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<txt>Bad trigger! You just got nothing!</txt>  
&nbsp;&nbsp;&nbsp;&nbsp;</trigger>  
</opt>  
<unique>false</unique>  
<lock>false</lock>  
<rand>50</rand>  

This is result page you get when the good trigger fires after choosing option 1:

![good trigger](http://threedliams.github.io/pages/assets/update0-0-05/goodTrigger.jpg)

And this is what shows up when you get the bad trigger:

![bad trigger](http://threedliams.github.io/pages/assets/update0-0-05/badTrigger.jpg)

I also made a couple small changes to the main screen:

![main screen](http://threedliams.github.io/pages/assets/update0-0-05/newMainScreen.jpg)

There is a quit button in the bottom left, and the resource values are now represented as doubles. This is to allow for the affinity calculations for income to work correctly later down the line.

The big backend addition for this update was factions. I sat down with my co-designer and we ironed out some of the details so that I could put in a framework for the factions.

Originally our plan was to make a character control multiple planets, but that ended up feeling weird in the "galactic senate" kind of setting. Instead we have characters only having control over the planet they represent, but the characters join together to create factions that share common interests.

The player will be in charge of their own faction and planet, adding more characters and planets to their faction by poaching them from other factions. The idea is that each leader will have something they covet, be it power, military strength, or wealth. If you can sufficiently impress or threaten them, they may break off of their faction and join yours, adding their income and abilities to your cause.

These characters can then be recruited to form your cabinet (more on that later), and help you gain more power and political influence.

In this update, the factions have resource values and incomes calculated based on the income of all of the planets with leaders under faction control, multiplied by the affinity factor of the leader.

That's about it for this update. I'll be working on improving faction/character/planet functionality for some time, and I'll also be sitting down with my co-designer to plan out some systems better so we can move forward from here. Now that the the intepreter/EVML is in a pretty good place, we can finally put all of our focus on the functionality of the game systems.