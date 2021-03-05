---
title: The power of logik graphs in chatbot conversations - A simple pool day example
img: the-power-of-logic-graphs-in-chatbot-conversations.jpg
author:
  name: Chris
---

A logic graph brings new powers to the guided parts of chatbot conversations. It is still difficult to explain what exactly a logic graph is and how it leads to a reactive context. You have to experience it for yourself. Here is a simple live example that briefly shows the most important options.
<!--more-->

While the bot asks you when it would be a good time to go to the pool, the context suddenly changes. In this case, a timer simulates the arrival of the weather report. Because it is supposed to rain, the bot breaks off the conversation about the day at the pool and talks to you about the latest cinema films. It does not matter whether the question has already been answered. It can simply be interrupted. Test it yourself. It doesn't matter if the question is already answered or if you just leave it unanswered.

[Take a look at this live example.](https://wanderer.ai/builder/?flow=https%3A%2F%2Fraw.githubusercontent.com%2Fwanderer-ai%2Fwanderer-flows%2Fmaster%2Fblog%2Fpool_day.json)

![chain-structures-in-conversations](/blogimages/the-power-of-logic-graphs-in-chatbot-conversations/pool-day.png)

However, you can later choose to go to the pool despite the rain. This immediately reactivates the old pool context.

You can also repeat all of the questions by clicking on the little repeat icon near your answer and simply choose a different one. The bot will then react accordingly.

By the way: None of this requires any programming as the logic is implemented at the graph level. Have fun experimenting with the demo!

[Title image from Pixabay](https://pixabay.com/de/photos/sommer-schwimmbad-tropisch-1836046/)
