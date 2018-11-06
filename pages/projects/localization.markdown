# Particle Filter Localization
This is one of the coolest projects I've gotten to be a part of. It was the final for a grad class called Mobile Robot Programming where the assignment was basically "use the stuff I've taught you this semester and figure out how to get this robot from point A to point B given a black and white map and some sensors".

Before I get into the details, [here's a cool video](https://www.youtube.com/watch?v=reMMjOel4Ks) showing it off in action. The kinect sensor had some issues seeing glass walls, so at one point you can see me in my shorts standing in the way to give it a better idea of where the wall is.

#### The Robot
The class used [these bad boys](https://robots.ros.org/pioneer-3-dx/) with built-in sonars to test our solutions on. Additionally, the ones we used all had kinect sensors mounted on them, as well as little laptops to run the programs.

#### The Problem
In a nutshell: localization! There are a ton of cool articles, videos, and projects about this all over the internet to look up, but the gist is: how do you make a robot figure out where it is? And how do you get it to move somewhere else while keeping track of its position? For our class, the problem spaced was reduced to 5 starting positions to make things easier. However we did test our solution without that added information and it still managed to localize (most of the time).

#### The Method
To figure out where on the map it is (localization), this bot uses a Point Cloud, and something called a Particle Filter. You can read a super complicated Wikipedia article on particle filters [here](https://en.wikipedia.org/wiki/Particle_filter) and a decidedly less complicated article on point clouds [here](https://en.wikipedia.org/wiki/Point_cloud) but the basic idea is this:

The robot starts with a random sample of point vectors facing in random directions. In our case, we were given 5 possible starting locations to shrink the scope a little bit, so as you can see in the video we created smaller point clouds around the areas we knew we could start. It then takes sensor readings every interval and *filters* out all the *particles* that are impossible given its current readings. So for example, if it sees a wall that's 1 foot in front of it, it'll filter out any points that don't have a wall 1 foot away in the direction they're facing, with some margin of error of course.

It then creates a new sample of random points up to some defined max that are based off of the ones that still exist, so it gets slightly less random and slightly more confident with each filter step. If everything goes well, this cloud should shrink in size and generally approximate the location of the bot.

Once it figures out where it is, it uses [A*](https://en.wikipedia.org/wiki/A*_search_algorithm) to navigate from its current location to the end point. The algorithm is slightly modified to take into account the size of the robot, since if it was represented as the size of a point at its center, it would path too close to the walls.

If it ever loses too much confidence in where it is while pathing, it'll stop and look around again until the distribution of the point cloud focuses back up.

#### The Results
As you can see, it worked! ...Mostly. We never were able to fix the kink you can see in the video where it gets kind of "stuck" looking at a corner. Eventually it wiggles itself back and forth until it makes its way out of there, but it takes a while.

It's not perfect, but we were actually the first team to ever get something working. Previous years didn't quite manage to make it all the way. Plenty of other teams in our class got something that worked just as well as ours though, so our professor figured it was the addition of the kinect sensor (previous years only had the sonar). I like to think we were just the smartest, though ;).