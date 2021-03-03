---
title: Conversations in relational databases
img: conversations-in-relational-databases.jpg
author:
  name: Chris
---

There are many different approaches for mapping conversations in databases. In this chapter I would like to explain you which approaches are suitable and why.

<!--more-->

To decide which database is the right one to represent a planned chatbot conversation, you first need to know which structures can be identified within conversations. [I have already written a separate article about this topic in which I have shown why conversations consists of network like structures.](https://steampixel.de/en/part-2-why-a-conversation-does-not-fit-into-a-tree/) I therefore assume that conversations in guided conversations essentially consist of the following elements that can be interconnected:

* Questions
* Suggested answers
* Connections between them

In the further course of this blog series, additional elements will be added. For the reason of simplicity, I reduce the conversation to its core elements at this point.

## Relational approaches
Have you ever wondered why relational data is usually managed in tabular form? If you look at a classic [CRUD](https://wikipedia.org/wiki/CRUD), the reason for that will quickly clear up.

There is often a tabular or list-like overview from which actions such as CREATE, EDIT and DELETE can be executed. The visualization of the data corresponds to their representation in the database. This has the great advantage that you do not have to translate what you see into a different structure for the database. A tabular CRUD is a kind of WYSIWYG (What you see is what you get) for tabular data. Rows and columns in a list of records represent rows and columns in a database table.

It would require a lot of conecptual effort and coding for developers to display the data in the frontend, for example, as a tree or network. In [this NestedSet example on GitHub](https://github.com/steampixel/SimplePhpTree) you'll see what basic programming is required to store trees in a MySQL table in order to read them out in just one query. The generation of the tree in the frontend also requires much more logic than a simple table.

## What does this mean for the storage of network structures?
Networks are far more complex than trees. Because they make it possible that different branches can grow together again and thereby form a new trunk. So we have a finite number of items, each with n links to other items, which in turn have n links to other items.

Transferring to our model of questions and given options of answering we come to the following conclusion:

* We need a table where we can store the questions with their properties
* We need a table where we can store the suggestions along with their properties
* We need a table in which we can store the links between the questions and the possible answers

__Questions:__

| id | label |
| -- | ----- |
| 1  | Hey! How are you? |
| 2  | Why are you stressed? |
| 3  | What about your job? |
| 4  | What do you want to do next? |

__Suggestions:__

| id | label |
| -- | ----- |
| 1  | I'am stressed |
| 2  | I'am fine |
| 3  | My job is stupid :-( |
| 4  | It’s not your business. |
| 5  | My boss is stupid |
| 6  | Please! Stop talking! You stupid bot! |
| 7  | Book a holiday for me. |

__Edges:__

| id | from | to | from_type   | to_type    |
| -- | ---- | -- | ----------- | ---------- |
| 1  | 1    | 1  | question    | suggestion |
| 2  | 1    | 2  | question    | suggestion |
| 3  | 2    | 3  | question    | suggestion |
| 4  | 2    | 4  | question    | suggestion |
| 5  | 3    | 4  | question    | suggestion |
| 6  | 3    | 5  | question    | suggestion |
| 7  | 1    | 4  | question    | question   |
| 8  | 6    | 2  | question    | question   |
| 9  | 4    | 6  | question    | suggestion |
| 10 | 4    | 7  | question    | suggestion |
| 11 | 1    | 2  | suggestion  | question   |
| 11 | 2    | 4  | suggestion  | question   |
| 11 | 3    | 4  | suggestion  | question   |
| 11 | 5    | 4  | suggestion  | question   |

As you can see it is difficult to map network-like conversations in tabular form, although it is theoretically possible. The problem we face here is essentially that the data is unstructured. Questions can be connected with answer options but also directly with other questions. Answers lead to further questions. If you increase the number of items and add more item types, the problem becomes much more complex.

Also, splitting the edge table into multiple tables with unique connection types would not reduce the complexity here and would only move the problem.

Imagine what would happen, if you had to build an editor for conversations based on this data model. Although it would be theoretically possible, it is neither elegant nor simple.

In addition to storage, another problem occurs at this stage: Imagine you have to read the next meaningful question from the database. And the best elegant, with only one query and without much detours. You will not succeed with a language like SQL. You'll need to use recurring subqueries or stored procedures and you would have to design a relatively complex program logic. A possible procedure might look like this:

1. Select the first question from the database
2. Select all the answer options that belong to this question
3. Check if the question or one or more of these answers have been fulfilled
4. Select the next questions for each answer
5. Start the procedure for these questions again from the beginning ...

## Document stores
Pure document stores like MongoDB have similar problems. You can either choose to nest your data at the document level or, alternatively, reference it at the level of the records. In the end, however, you will not find a way to elegantly store and read unstructured connections. The problem remains the same.

## Graph approaches
Surely you've already guessed it. The only reasonable way to represent unstructured connections between different items are graph databases. They allow you to map your network structure exactly as you would expect it to be in reality. This gives you the possibility of storing the conversation structure the same way you would design it with an editor.

In my next chapter I’ll show you what this might look like.

[Here you will find more articles on the topic](https://steampixel.de/en/tag/lets-build-an-open-source-chatbot-builder/)

[Title image from Pixabay](https://pixabay.com/de/photos/karten-katalog-schubladen-holz-194280/)
