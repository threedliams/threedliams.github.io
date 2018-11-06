# Cosmic Insurgence Update 0.0.04
Another backend update, this time focused on refactoring and interpreter improvements. As always, here is the changelog:

Graphics changes:  
- Separated game loop from graphics functions  
- Made button more robust: Currently take a code to return on click instead of always firing the draw event function. In the future may change this to a function pointer with a button specific function if the number of button codes gets out of hand.  
- Changed buttons to fire on mousedown => mouseup instead of just firing on mousedown. This allows users to change their mind mid click and drag the mouse away to cancel the click.  

EVML/Interpreter changes:  
-added support for <, >, <=, >= operators and corrected = operator to work like == instead of >  
-added event to event interaction syntax  
-added escape character: '\\'  

Backend changes:  
-added event to event interaction  
-finished up the definition for the scope functions so that character, planet, and universe (all planets) can be modified through events. The planet and character used are currently random.

To start off, I'll explain the graphics changes:

The main reason for these refactoring edits is that a lot of what's going on with the graphics side of things started out as placeholders just to test the interpreter. I'm slowly weeding out these placeholders and replacing them with final versions, starting with this update and the changes to the button class and graphics loop function.

As of the last update, the button was designed to only fire one function, the generate event function, since that was currently the only place I had a button. I've now set it up so that multiple buttons with different uses can be added easily. Currently they're using codes to denote their function at the moment, but it might be valuable in the future to use a function pointer to reduce the amount of if blocks required.

Before this update, the game processing was all happening in the graphics loop, so I extracted the game pieces out of graphics and placed them in main/GameState. This allows me to be more free and safe with what I'm rendering, since the game loop just calls a function to render a page instead of having everything wrapped up and blended together.


Now let's move on to the real meat of this update, the interpreter and backend changes.

Like I said before, I wanted to add support for comparison operators besides '=' for checking event prerequisites. Well, that's been implemented, and I created a bunch of events to test out the changes. All together it's too much text to put the events here, but I'll at least provide a picture of the console output showing what's going on:

![console output](http://threedliams.github.io/pages/assets/update0-0-04/operatorSupport.jpg)

All the events were based on 40, so you can see that once the quark count hits and passes 40, the available events changes as appropriate. The abbreviations are GT = Greater Than, LT = Less Than, EQ = Equals, etc.

While implementing these changes on the interpreter side, I realized I have the need for an escape character so that the greater than and less than signs don't make the interpreter think I'm opening or closing a tag, so I used '\\' since that's what I'm most accustomed to.


I've also added support for an option to use one event to unlock another event. This can be used if, for example, you want to generate a unique character in one event, and then unlock any events focused on or featuring that character. Here is our usual sample event, with the unlock trigger added in option 2:

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
<opt>  
&nbsp;&nbsp;&nbsp;&nbsp;<txt>option 2</txt>  
&nbsp;&nbsp;&nbsp;&nbsp;<scope>event</scope>  
&nbsp;&nbsp;&nbsp;&nbsp;<target>unlockable</target>  
&nbsp;&nbsp;&nbsp;&nbsp;<mod>lock</mod>  
&nbsp;&nbsp;&nbsp;&nbsp;<value>false</value>  
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

I tried to keep the syntax as similar to a normal, game state modifying option as possible. In this case the target, "unlockable" is the name of another event. Here is the option in action through console output. The first print out of the available events is before selecting option 2, and the second after:

![unlockable console output](http://threedliams.github.io/pages/assets/update0-0-04/unlockable.jpg)


That's about it for this update. I also finished up the scope definitions so that you can modify Planet and Character values with events, but since those aren't used anywhere there's not really anything to show. In the next update, I anticipate adding support for result pages of some kind. After that, the last features I can think of that the interpreter still needs are:

1. Support for multiple triggers off of one option. These triggers should be weighted and chosen randomly to add replay value. After a few play throughs you can discover which options are more likely to be favorable, but that doesn't mean they'll necessarily help you out every time.

2. Support for multiple value changes off of one trigger. This is pretty self explanatory, I just want to be able to define a trigger that adds, for example, 10 quarks and 10 might to your totals, when right now all that's supported is 1 type of resource at once.

Besides that, all that should be left are adding better syntax and semantics checking so that mistakes can be conveyed better. Once the interpreter is in a place where I'm happy with it for the time being, I'll start focusing on the gameplay constructs and interaction.

School work is slowly but surely starting to pick up, so updates are going to start slowing down from this point. So far it's nothing too bad, so I still anticipate being able to at least do one update a week. Hopefully it stays that way moving forward.