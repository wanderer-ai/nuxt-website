<template>

    <div class="separator-wrapper">

      <header>

        <app-nav/>

        <full-height class="cover-image" style="background-image: url('/images/roads.jpg');">

          <div class="background-filter">
             <div class="hero-text">
               <h1>Frequently asked questions</h1>
             </div>
          </div>

        </full-height>

        <div class="separator-top-right seperator-up"></div>

      </header>

      <main>

        <div class="container seperator-compensate text-spacing">

          <h2>What is the current status of the project?</h2>
          <p>
            Currently you cannot use Wanderer.ai. The project is in a very early stage of development.
          </p>

          <h2>Under which license will the software be available?</h2>
          <p>
            That's not very clear right now. But it will be an open source license like MIT or Apache2.
          </p>

          <h2>Does the project use deep learning or neuronal networks?</h2>
          <p>
            No. The core of the project uses a logic graph to find the next meaningful action based on a complex context.
            This technology combines some kind of flow programming with traversal algorithms.
            Nevertheless, deep learning and neuronal networks can be coupled to generate new information for the graph.
          </p>

          <h2>Why should my company use a chatbot that is transparent to the user?</h2>
          <p>
            You should first ask yourself what the benefit of your chatbot should be.
            Should the chatbot primarily help the user to solve their own problem?
            Or should the bot influence the user with invisible and secret information to reach a hidden goal defined by the company?
            In general, I believe that transparent chatbots will create more trust between customers and a company.
          </p>

          <h2>Can I run the chatbots server side?</h2>
          <p>
            No. At the moment this is not supported. This may be supported in the future.
          </p>

          <h2>Can a bot communicate with third-party APIs?</h2>
          <p>
            Yes. The bot can communicate with all sorts of APIs that support JSON.
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
            If the project and the technology are successful, I will think about a server variant.
          </p>

          <h2>Can I improve the flow based on statistics?</h2>
          <p>
            This is not possible at the moment. But as soon as possible I will integrate a feature that will allow users to donate their data to visualize the user experience.
          </p>

          <h2>Is it possible to use NLP and speech recognition?</h2>
          <p>
            Yes. This can either be done via APIs or pure front end technologies can be used.
          </p>

          <h2>Why is everything happening in front end?</h2>
          <p>
            This has several reasons:
            <ul>
              <li>I want to keep the project and the technical dependencies rather small for the moment and focus more on what exactly a logic graph is and what it can do.</li>
              <li>I want to make integrating bots into existing websites and apps extremely easy and therefore avoid server stacks.</li>
              <li>I want to explore how bots can deliver great results for users with maximum privacy.</li>
            </ul>
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

        </div>

        <div class="separator-bottom-right seperator-down"></div>

      </main>

      <app-footer />

    </div>

</template>

<script>

import AppNav from '~/components/AppNav.vue'
import AppFooter from '~/components/AppFooter.vue'
import FullHeight from '~/components/FullHeight.vue'

export default {
  components: {
    AppNav, AppFooter, FullHeight
  }
}

</script>

<style>

  .author{
    border-radius: 50px;
    margin: auto;
    display: block;
    margin-bottom: 50px;
  }

</style>
