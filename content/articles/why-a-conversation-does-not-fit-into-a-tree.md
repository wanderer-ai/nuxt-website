---
title: Why a conversation does not fit into a tree
img: why-a-conversation-does-not-fit-into-a-tree.jpg
author:
  name: Chris
---

Some botbuilders portray conversations as causal [decision trees](https://en.wikipedia.org/wiki/Decision_tree) or [behavior trees](https://en.wikipedia.org/wiki/Behavior_tree_(artificial_intelligence,_robotics_and_control)). In this chapter I would like to explain the reason why a guided conversation should not be a tree, and why network structures are better suited.

<!--more-->

You might be familiar to the situation concerning one or the other botbuilder on the market: Some conversations can only be solved with cumbersome self-programming. That's because conversations are sometimes built as a visual tree.

I generally do not consider conversations as a tree structure. Not even if they are planned. For me, guided conversations essentially consist of questions, answers and complex conclusions. However, in my opinion much more important than these components, are the connections between them. Only these define how and when a particular question or answer is triggered in a conversation.

Within conversations, I have identified various theoretical patterns that can not just be described with simple tree structure.

## Different patterns within conversations
Conversations can be broken down into different patterns. Some are simple. Others are more complicated. However, you can construct any kind of a complex conversation from these patterns.

### 1. Simple question chains
The first form is a simple sequential chain of various questions that are asked one after the other independent of their answers.

This type of pattern is typical for the beginning of a conversation. For example, when we have to collect some basic information on which the subsequent conversation is based on. Incidentally, such chains can still be modeled easily in tree structures.

![chain-structures-in-conversations](/blogimages/why-a-conversation-does-not-fit-into-a-tree/question-chain.png)

### 2. Tree structures of questions and answers
There are also pure tree structures in conversations. Yet, you will see that these are not the only structures in planned discussions.

The interesting thing about tree structures in conversations is that the questions that are below a particular node are completely equal. Therefore, it should never matter which of the other questions is asked next. For example, they could easily be chosen randomly. If the order of questions is important, however, question chains are the better choice.

![tree-structures-in-conversations](/blogimages/why-a-conversation-does-not-fit-into-a-tree/question-tree.png)

### 3. Diamond structures as a basis for networks
One could also say that these are different branches of a conversation, which grow together again at a certain point and thereby form conclusions. At least two or more suggestions lead to a new node. Conclusions in discussions are important. By them, it is possible to track down hidden intensions and to plan the course of the further conversation.

Nevertheless, it is not possible to just build that with some chatbot kits. Such things sometimes have to be solved by cumbersome self-programming.

![conclusion-structures-in-conversations](/blogimages/why-a-conversation-does-not-fit-into-a-tree/node-diamond.png)

### 4. Network-like conversational structures
We can create network-like conversation structures by combining chains, tree structures, diamond patterns and circles. Even very complex conversation patterns of questions and suggestions can be implemented.

![network-structures-in-conversations](/blogimages/why-a-conversation-does-not-fit-into-a-tree/network.png)

### 5. Deep Contextual Conclusions
These are conclusions that depend on many factors at the same time. They do not only depend on conditions that are directly related to a conclusion. The triggering conditions can also be stacked as seen in the following graphic.

![keeping-the-context](/blogimages/why-a-conversation-does-not-fit-into-a-tree/deep-conclusion.png)

## You do not see the network for the trees
I can understand that this headline may confuse you. Let me explain it to you. After all, that might be the reason why a tree structure is sometimes found in botbuilders even though it does not belong there.

The network-like planned structure of how conversations can proceed differs fundamentally from the structure that the conversation assumes in the actual course of the conversation. This means you can plan a conversation as a network, but in the direct conversation it takes on a tree structure again. Moreover, these trees are more visible in reality than the underlying networks of information and expertise.

Due to this fact not all possible paths that are defined in a network are ultimately followed. When questions have been answered, they are usually not asked again in a conversation. You can see that on the graphic below. I marked the course of the conversation in black. Do you recognize the tree inside the network?

![trees-in-networks](/blogimages/why-a-conversation-does-not-fit-into-a-tree/tree-inside-network.png)

> Theoretically defined network-like conversations will collapse based on the decisions made within a conversation to individual conversation trees.

The path that a conversation takes in the course can therefore be depicted as a tree, but not the theoretical possibilities and ramifications that a conversation can bring.

Finally, one could say that a distinction must be made between the theoretically planned progression possibilities (network) and the respective individual course of the conversation (tree structure). If you want to display conversations digitally, this must be taken into account.

If you try to map network-like structures in trees anyway, this sometimes results in complicated structures at the end points of the trees (the leaves). They occur as attempt to re-implement the network logic by individual programming. Does this sound familiar to you from your conversational kit?

[Title image from Pixabay](https://pixabay.com/de/photos/baum-natur-holz-kahl-baumstamm-3097419/)
