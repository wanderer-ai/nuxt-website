<template>

    <div>

      <app-nav />

      <header-section colorFrom="blue" colorTo="blue-dark">
        <h1 class="uppercase text-6xl text-white mb-4">Story</h1>
      </header-section>

      <div class="container narrow content pt-24 pb-48">

        <p>
          Hey! My name is Chris. I am developer, coder and enthusiastic web freelancer from Germany.
          I am also the maintainer and developer of Wanderer.ai.
        </p>

        <h2 id="technology">The beginning</h2>

        <p>
          A while ago me and a friend of mine where spending much time in a software as a service project.
          The goal was to help and support people writing unique and beautiful blog articles.
          The core of the product was a chatbot that should guide people through the process and give tips while writing.
        </p>

        <p>
          But at this time it was not possible for us to find a chatbot solution or service platform that fits our needs.
          Complex flow editors, cumbersome self programming, intransparent pricing models and imposed brandings were only a few stones on our way.
          But the biggest problem was, that it was just not possible to react to the complex context of the conversation in an easy and elegant way
          without heavily increasing the complexity of the chatbot flow and our program code.
        </p>

        <p>
          I also realized that we were packing very specific expert knowledge in a bulky format and bury it forever on servers and inside platforms.
          Besides, it did not seem to make sense for the conversation sending every request to serveral APIs and servers.
        </p>

        <h2 id="technology">Technology</h2>

        <p>
          Unfortunately we had to give up the project because it was too complex to map our conversational flow in our expert system. But the idea of the chatbot itself remained.
          I asked myself if there is an easy and elegant way of storing and maintaining complex contexts and its reactions.
          Then I remembered a technology I researched a few years ago. At this time I was playing with graph databases and traversal algorithms.
          I suddenly had the idea of storing conversational structures inside a graph model. Suprisingly this was very easy and I recognized, that a graph can do even more.
          It cannot only store data, it can also contain simple logical structures at graph level, which are normaly depicted with a programming language.
          I called this structure a <strong>logic graph</strong>. Then I discovered, that a logic graph can be executed by following the rules of a simple traversal algorithm.
          At this moment I was able to simply ask the graph structure: “What is the next logic action based on your expert knowledge and my previous conversation?”
          And the graph will answer immediatley. I called this technology <strong>logic graph traversal</strong>.
        </p>

        <p>
          A logic graph has the possibility to drive very complex context dependent applications like Wanderer.ai.
        </p>

      </div>

      <app-footer colorFrom="blue" colorTo="blue-dark" />

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

  /* .author{
    border-radius: 50px;
    margin: auto;
    display: block;
    margin-bottom: 50px;
    position: relative;
    z-index: 9999;
  } */

</style>
