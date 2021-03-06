# HughBorg
HughBorg was a fun project I actually did twice - once in high school with some friends and then a second time (better) in college by myself. They both used [ZotBot](https://crawl.develz.org/tavern/viewtopic.php?f=22&t=2333) as a base with a couple improvements.

They're named after [Hugh](https://memory-alpha.fandom.com/wiki/Hugh), a Borg that achieves sentience after being rescued by the crew of the enterprise. In the ZotBot link above, the author says these bots `...are commonly called "borgs" in the context of roguelikes` and I guess I had some pretty high hopes for this one.

### Both
In both of them I added a little script that helps you escape enemies you can't see. As a human it's really easy to tell that an enemy turned invisible and attack the same location, but for the bot once it disappears it might as well cease to exist. The function is super simple and has you run away if you take damage but can't tell where it was from.

### Old HughBorg (high school)
The original plan for this was to implement a form of reinforcement learning that we designed, which we later found out was essentially a modified version of [Q-learning](https://en.wikipedia.org/wiki/Q-learning). This was an interesting idea but unfortunately ended up being a bit of a mess. The concept behind it was that the bot would work according to "commandments" which it would learn over time by playing more. These were things like "Thou should drink \[potion type\]" or "Thou shalt not attack 24 1 lvl 3". Don't ask me what the second one means because I don't actually remember. I think the first number might have been the enemy type from the giant array at the top, the second was the number of enemies and the third was your current level. Maybe?

The commandments had different confidence levels (Thou should, Though shalt, Though should not, Though shalt not) and were supposed to strengthen or weaken over time based on data from playthroughs. They were done using string parsing which in retrospect was much harder than just nested objects or something more practical. And because they were written right into the code, they didn't update automatically. The bot said its new commandments with its dying breath and we dug up the logs to copy paste them after each death.

We also tried to do a couple other tricks, like different priority levels for enemies so it would know the order to attack in, deciding when to chop an enemy to eat, deciding when to pick up equipment, things like that. None of the ideas made it all the way to fruition really. It was tough working with the limited API and we were pretty inexperienced.

### New HughBorg (college)
This was a way more streamlined version that ended up also being much more effective. Instead of commandments and decisions of all types, it just used a simple minimax function based on average health and damage of you and your enemies to decide whether to stay and fight or run away. And it actually saw a bunch of improvement both over ZotBot and HughBorg1. It's less exciting so there isn't as much to talk about, but it worked pretty okay!