<template>

    <div>

      <app-nav />

      <header-section colorFrom="red-dark" colorTo="red">
        <h1 class="uppercase text-4xl md:text-6xl text-white mb-4">Frequently asked questions</h1>
      </header-section>

      <div class="container narrow content pt-24 pb-48">

        <h2>What is the current status of the project?</h2>
        <p>
          Currently you cannot use Wanderer.ai in production projects. The project is in an early stage of development.
          But you can already use the bot builder to build and test your chatbots. Feedback is welcome.
        </p>

        <h2>The chatbot is reactive and non blocking. What does that mean?</h2>
        <p>
          Thanks to this kind of technology the graph don't have to wait for user input to generate new conclusions.
          Imagine the following situation: The bot can hand over a question with a few suggestions to the chat.
          Then the bot will wait for user input. But while it waits for user input the context and the situation can change.
          So the current question or topic can become useless or subordinate.
          So for example while the bot waits a timer can expire or an API or the website can generate some other contextual information.
          The bot then will take all the new information into account and will for example prefer suddenly another question.
          Its like in real life: While you're talking to your friend about getting into the pool today, it could suddenly start raining.
          So the whole topic becomes useless. The topic will then change an you will maybe continue talking about the newest cinema films.
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
          Since this bot runs completely in the user's browser, it will not communicate any user input or information to any servers by default.
          Yes of course: You can use API-Nodes and Webhocks. But you have to build such a structure first. So it's your descission if you want to send
          user input to somewhere. Also, you can decide on your own which information will be sent to which servers.
        </p>

        <h2>How can I embed the chatbot to a website?</h2>
        <p>
          Note: This is not possible at the moment because the chatbot web component is not ready for production right now! But yes. This is planned.
          First, you have to download your chatbot flow file from the Wanderer Builder. You can store it then for example to your website's filesystem.
          Then you can simply include a JavaScript webcomponent to your website that will then load your flow. That's it.
        </p>

        <h2>Can I use the bot builder for free?</h2>
        <p>
          Yes! Absolutely. You can just use the bot builder on the Wanderer.ai website for free. You don't have to register or pay to use this application.
          This becomes only relevant if you plan to run the builder or chatbots under your own public domains or inside your Apps and if you use professional plugins.
          In this case you have to purchase a license.
        </p>

        <h2>Under which license will the software be available?</h2>
        <p>
          This project uses a dual licensing model. Most of the packages are available under the AGPLv3. But some plugins require a professional license.
          That means that you have to purchase a license if you plan to run the bot builder or single chatbots on your own website using this professional plugins.
          Use the professional plugins for free as long as you use them with the Wanderer.ai domain.
        </p>

        <h2>Can you tell me something about the future pricing model?</h2>
        <p>
          The pricing model is not very clear right now.
          But I want to keep it simple. So you have to purchase a professional license for each domain a chatbot with professional plugins is running.
        </p>

        <h2>Where are the flows stored?</h2>
        <p>
          At the moment Wanderer.ai will not store any data for you. So you have to download your flows. You can then store them wherever you want.
          Store your conversation flow on your device or upload it to GitHub to share it with others.
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
          This is part of the strict design pattern of Wanderer.ai. It would also be a major security hole.
        </p>

        <h2>Can I run the chatbots server side?</h2>
        <p>
          No. At the moment this is not supported. This will maybe supported in the future.
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
          No. Since Wanderer.ai currently only runs in the browser front end, the connection to other chat channels is technically not possible at the moment.
          If the project and the technology are successful, I will think about a server variant. But for the moment this is a browser only solution.
        </p>

        <h2>Can I improve the flow based on statistics?</h2>
        <p>
          This is not possible at the moment because the software is privacy by design.
          But you can however ask the users for data donations and you can then collect the user information through an API for example.
          But you can also use analytics services like Google Analytics or etracker for example to get insights to the users flow.
        </p>

        <h2>Is it possible to use NLP?</h2>
        <p>
          NLP is a really big topic. So in general you can use all Services, that are reachable through an API.
          But there are plans to implement a very simple pattern based uterrances system. So you can extract some simple intents in the future.
        </p>

      </div>

      <app-footer colorFrom="red-dark" colorTo="red" />

    </div>

</template>

<script>

// import PageHero from '~/components/PageHero.vue'
import HeaderSection from '~/components/HeaderSection.vue'
import AppNav from '~/components/AppNav.vue'
import AppFooter from '~/components/AppFooter.vue'

export default {
  components: {
    AppNav, AppFooter, HeaderSection
  }
}

</script>

<style>


</style>
