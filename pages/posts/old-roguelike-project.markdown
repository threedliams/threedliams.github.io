A while back I worked on a roguelike project with a friend, which unfortunately has been put on hold for the time being, but I figured I'd show off some of the cool things we got done before we moved on.

First off, here are the links to the Design Outline and Design Schedule:

[Design Outline](https://docs.google.com/document/d/1HTeFUFN2jtsJp0dz_KSbObui2KouDlnlqyMYqEJsVas/edit?usp=sharing)

[Design Schedule](https://docs.google.com/document/d/19jkcKVm0c2X_802pKi3qG-oW32mC049u11vHhXovUTQ/edit?usp=sharing)

As you can see from the design doc, our main focus was on the idea of "mutations" as a primary game mechanic. We always found mutations in other roguelikes to be the most interesting and fun parts, so we figured, why not try to make a full game based on a more fleshed out mutation mechanic? Unfortunately because of how busy we got with school and work, we never really got far enough to put the mutations in place.

However, we did manage to code a good amount of a basic roguelike engine using the windows version of PDCurses for graphics. I put together a couple gifs to show off some of the different features we got done:

Pathing:

![pathing example](http://threedliams.github.io/assets/oldProject/pathing1.gif)

This gif I created is a visual representation of the pathing algorithm calculating the shortest path between an off screen enemy and the player behind a wall.

The pathing algorithm used here is a naive version of the A* algorithm, meaning the only heuristic used in calculation is the distance between the current node and the goal node. The "o" tiles represent nodes that have been added to the open set, the "x" tiles represent tiles that have been added to the closed set, and the "!" tiles represent the final calculated path.

FOV:

![fov example](http://threedliams.github.io/assets/oldProject/FOV.gif)

This gif shows off the FOV algorithm, and how the different angles and distances from the wall segment effect the vision of the player.

The FOV algorithm used is a simple ray casting algorithm. Although the example makes it appear that shadow casting would be more efficient, that is only because the player's vision has been enhanced to include the whole map. In the next example where the player's vision is at it's normal size, the use of ray casting will make more sense.

Exploration and Limited FOV:

![exploration example](http://threedliams.github.io/assets/oldProject/exploration.gif)

Not as much going on here programmatically, this just shows how the FOV behaves when it is limited to a smaller size, and demostrates map memorization. The dark yellow spaces are areas that have been touched by the FOV, and are now remembered by the player as a result. This means the player won't forget where they've been and backtrack endlessly.

Using the Full Window:

![full window example](http://threedliams.github.io/assets/oldProject/fullWindow.jpg)

This static image takes advantage of the full capabilities of the graphics window we set up. This should give you a better idea of how the game would actually look, with the map in the center moving according to the player surrounded by the various message displaying windows.

As shown, there are 2 separate windows that currently both behave as consoles. One spanning the bottom of the screen, traditionally reserved for event messages and dialogue, and one to the right usually used to hold status information such as health and mana.

