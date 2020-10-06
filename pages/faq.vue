<template>

    <div>

      <page-hero color="red" header="Frequently asked questions"></page-hero>

      <div class="separator-top-left seperator-up separator-white"></div>

      <div class="container narrow content">

        <h2>What is the current status of the project?</h2>
        <p>
          Currently you cannot use Wanderer.ai in production projects. The project is in a early stage of development.
          But you can already use the bot builder to build and test your chatbots. Feedback is welcome.
        </p>

        <h2>The chatbot is reactive and non blocking. What does that mean?</h2>
        <p>
          That means that the programm will generate a pulsing traversal structure :-) Ok. That sounds very nerdy.
          So let me explain:
          Thanks to this kind of technology the graph don't have to wait for user input to generate new conclusions.
          Imagine the following situation: The bot can hand over a question with a few suggestions to the chat.
          Than the bot will wait for user input. But while it waits for user input the context and the situation can change.
          So the current question or topic can become useless or subordinate.
          So for example while the bot waits a timer can expire or an API or the website can generate some other contextual information.
          The bot than will take all the new information into account and will for example prefer suddenly another question.
          Its like in real life: While you're talking to your friend about getting into the pool today, it could suddenly start raining.
          So the whole topic becomes useless. The topic will than change an you will maybe continue talking about the newest cinema films.
        </p>

        <h2>What makes the logic graph so special?</h2>
        <p>
          In short, there are no active blocking nodes as in many other chatbots.
          Each time an underlying piece of information changes, the graph will include the entire context again.
          This means that past conclusions, decisions and actions are questioned again.
          Through this technology, different tasks can be parallelized and the conversation becomes more dynamic.
          It also makes no difference how and when information gets into the graph.
          Information can be actively inquired, responded by APIs, provided before the conversation starts, or injected by external processes at any time.
          This means that a logic graph responds to the whole environment rather than just the user input.
          New information affects the whole graph, not just the next question or action.
        </p>

        <h2>What means privacy by design?</h2>
        <p>
          Since this bot runs completely in the users browser, it will not communicate any user input or information to any servers by default.
          Yes of course: You can use API-Nodes and Webhocks. But you have to build such a structure first. So its your descission if you want to send
          user input to somewhere. Also you can decide on your own which information will be sent to which servers.
        </p>

        <h2>Can I use the bot builder for free?</h2>
        <p>
          Yes! Absolutely. You can just use the botbuilder on the Wanderer.ai website for free. You don't have to register or pay to use this application.
          This becomes only relevant if you plan to run the builder or chatbots under your own public domains. In this case you have to purchase a license.
        </p>

        <h2>How can I embed the chatbot to a website?</h2>
        <p>
          Note: This is not possible at the moment because the chatbot webcomponent ist not ready for production right now! But yes. This is planned.
          First you have to download your chatbot flow file from the Wanderer Builder. You can store it than for example to your websites filesystem.
          Than you can simply include a JavaScript webcomponent to your website that will then load your flow. Thats it.
          But again. You have to purchase a valid license if you plan to integrate your chatbot to your public website.
        </p>

        <h2>Under which license will the software be available?</h2>
        <p>
          For the moment this is commercial software.
          That means that you have to purchase a license if you plan to run the botbuilder or single chatbots on your own website
          Use the botbuilder and the chatbots for free as long as you use them with the Wanderer.ai domain.
          But the detailed terms are not very clear right now.
        </p>

        <h2>Can you tell me something about the future pricing model?</h2>
        <p>
          As I mentioned before you need to purchase a license key, if you plan to run a chatbot using a public domain. The pricing model is not very clear right now.
          But I want to keep it simple. So you have to purchase a license code for each domain to use this software on it.
        </p>

        <h2>Does the project use deep learning or neuronal networks?</h2>
        <p>
          No. The core of the project uses a logic graph to find the next meaningful action based on a complex context.
          This technology combines some kind of flow programming with traversal algorithms and graph theory.
          Nevertheless, deep learning and neuronal networks can be coupled through APIs to generate new information for the graph.
        </p>

        <h2>Why should my company use a chatbot that is transparent to the user?</h2>
        <p>
          You should first ask yourself what the benefit of your chatbot should be.
          Should the chatbot primarily help the user to solve their own problem?
          Or should the bot influence the user with invisible and secret information to reach a hidden goal defined by the company?
          In general, I believe that transparent chatbots will create more trust between customers and a company.
        </p>

        <h2>I cannot use logic inside message templates. Why?</h2>
        <p>
          This project uses logic-less templates powered by Mustache.js. That means that you can output data to your messages.
          But logic is not supported inside messages itself. You cannot declare variables or call functions from inside templates.
          The reason is, that the logic should be depicted through the graph structure and not inside hidden and cumbersome templates.
          This is part of the strict design pattern of Wanderer.ai
        </p>

        <h2>Can I run the chatbots server side?</h2>
        <p>
          No. At the moment this is not supported. This will be supported in the future.
        </p>

        <h2>Can a bot communicate with third-party APIs?</h2>
        <p>
          Yes. The bot can communicate with all sorts of APIs that will response pure JSON.
        </p>

        <h2>How can I secure my API keys if the bot runs completely in the browser?</h2>
        <p>
          That's a really good question. In general, API communication should be reduced as much as possible.
          This creates systems that are less dependent, more data protection friendly and easier to maintain. However, Wanderer.ai will not stop you from targeting APIs.
          If you need API keys, you should first redirect the requests through your own server, which attaches the keys to the request.
        </p>

        <h2>Can I integrate third-party chat channels like WhatsApp or Facebook?</h2>
        <p>
          No. Since Wanderer.ai currently only runs in front end, the connection to other chat channels is technically not possible at the moment.
          If the project and the technology are successful, I will think about a server variant. But for the moment this is a brwoser only solution.
        </p>

        <h2>Can I improve the flow based on statistics?</h2>
        <p>
          This is not possible at the moment because the software is privacy by design.
          But you can however ask the users for data donations and you can than collect the user information through an API for example.
          But you can also use analytics services like Google Analytics or etracker for example to get insights to the users flow.
        </p>

        <h2>Is it possible to use NLP?</h2>
        <p>
          NLP is a really big topic. So in general you can use all Services, that are reachable through an API.
          But there are plans to implement a very simple pattern based uterrances system. So you can extract some simple intents.
        </p>

      </div>

      <div class="separator-bottom-right seperator-down"></div>

    </div>

</template>

<script>

import PageHero from '~/components/PageHero.vue'

export default {
  components: {
    PageHero
  }
}

</script>

<style>


</style>
