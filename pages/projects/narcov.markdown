# Narcov
CallbackBot (or my personal branch, narcov) is a chat bot written to work with discord servers. It started out as a quick and dirty, poorly written joke app, but I quickly got annoyed at how long it took to add whatever new functionality my friends kept bothering me about. Instead, I refactored it to make it much more extensible and data driven so that `my friend Eric can get off his butt and write his own callbacks instead of asking me all the time`.

The callbacks are all written in JSON using what I thought would be a more intuitive format for non-developers. Although looking back, it might actually be _more_ confusing than a giant if tree, even though it's more extensible. You can define exact or fuzzy matching for your callback, and when the bot notices a match in an incoming message, it will immediately do whatever combination of sent messages, pictures, or emoji reactions you tell it.

Besides the callbacks you can also generate markov chains based off of individual or combined chat history. So to generate a markov chain from just my history I would use `!markov me`, but if I wanted to generate a combination of my history and my friend Eric's history I would do `!markov me + [Eric's username]`. You can also `!markov everyone` and `!markov random`.

![narcov](/pages/projects/narcov.png)

In addition to markov, the other genericly available functions are `!magic [question]` which generates a magic 8 ball response, and `!roll [x]d[y]` to roll x number of y sided dice and add the results.

My personal branch (narcov) contains all of my friend group's callbacks (mostly references to the Eric Andre show) as well as one extra piece of functionality. If you have the text "bird up" anywhere in your message, it generates a markov response from the transcribed text of a few Eric Andre show episodes.