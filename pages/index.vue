<template>

    <div>

      <start-hero>
        <h1 class="text-6xl uppercase">Wanderer.ai</h1>
        <div class="mb-6 text-2xl uppercase">Graph theory driven reactive conversations</div>
        <link-button class="" url="#welcome" bg-color="green" text-color="white" label="Learn more" />
      </start-hero>

      <div class="separator-top-right seperator-up separator-green"></div>

      <colored-section id="welcome" color="green" header="Welcome! This is Wanderer.ai">
        <p class="mb-6">Like a wanderer this software traverses the complex context of expert knowledge to create a unique chat experience.</p>
        <link-button class="" url="#context-first" bg-color="white" text-color="black" label="Learn more" />
      </colored-section>

      <div class="separator-bottom-right seperator-down separator-green"></div>

      <text-section id="context-first" image="/images/graph6.JPG" header="Context first!">
        <p class="mb-6">
          Create non blocking reactive chatbots.
          Like in real conversations this chatbot is able to interrupt a current question because the situative context has changed.
        </p>
        <link-button class="" url="#privacy-by-design" bg-color="blue" text-color="white" label="Learn more" />
      </text-section>

      <div class="separator-top-right seperator-up separator-blue"></div>

      <colored-section id="privacy-by-design" color="blue" header="Transparent, Privacy by design, Open Source">
        <p class="mb-6">
          It should never be best practice to send every user input to intransparent server systems. This chatbot will respect privacy!
          It will run completely independent of any servers only at client side.
        </p>
        <link-button class="mt-6" url="#free-the-knowledge" bg-color="white" text-color="black" label="Learn more" />
      </colored-section>

      <div class="separator-bottom-right seperator-down separator-blue"></div>

      <text-section id="free-the-knowledge" image="/images/graph7.JPG" header="Free the knowledge!">
        <p class="mb-6">
          Stop encapsulating expert knowledge in complex and cumbersome program code or server black boxes.
          Knowledge should be easily accessible by all people. Host your chat flows on GitHub for example.
        </p>
        <link-button class="mt-6" url="#technology" bg-color="yellow" text-color="white" label="Learn more" />
      </text-section>

      <div class="separator-top-right seperator-up separator-yellow"></div>

      <colored-section id="technology" color="yellow" header="Driven by a modern technology stack">
        <p class="mb-6">
          This bot is using a modern and flexible technology stack containing projects like
          <a target="_blank" href="https://nodejs.org/en/">Node.js</a>,
          <a target="_blank" href="https://nuxtjs.org/">Nuxt.js</a>,
          <a target="_blank" href="https://vuejs.org/">Vue.js</a>,
          <a target="_blank" href="http://js.cytoscape.org/">Cytoscape.js</a>,
          <a target="_blank" href="https://lernajs.io/">Lerna</a>
          and <a target="_blank" href="https://mustache.github.io/">Mustache.js.</a>
        </p>
        <link-button class="mt-6" url="#editor" bg-color="white" text-color="black" label="Learn more" />
      </colored-section>

      <div class="separator-bottom-right seperator-down separator-yellow"></div>

      <text-section id="editor" image="/images/graph8.JPG" header="Simple, free and powerfull web editor">
        <p class="mb-6">
          Create your chatbot within a simple, free and powerful editor. No need for registrations or payments to build your bot.
        </p>
        <link-button class="mt-6" url="#stay-tuned" bg-color="red" text-color="white" label="Learn more" />
      </text-section>

      <div class="separator-top-right seperator-up separator-red"></div>

      <colored-section id="stay-tuned" color="red" header="Want to learn more?">
        <p>
          Stay up to date, follow <a href="https://twitter.com/wanderer_ai">@wanderer_ai</a> and read
          <a href="https://twitter.com/dampfpixel">@dampfpixel's</a> chatbot builder
          <a href="https://steampixel.de/en/tag/lets-build-an-open-source-chatbot-builder/">blog series</a>.
          Also watch the <a href="https://github.com/wanderer-ai">git repos</a>.
        </p>
      </colored-section>

      <div class="separator-bottom-right seperator-down separator-red"></div>

    </div>

</template>

<script>

import StartHero from '~/components/StartHero.vue'
import ColoredSection from '~/components/ColoredSection.vue'
import TextSection from '~/components/TextSection.vue'
import LinkButton from '~/components/LinkButton.vue'

export default {
  components: {
    StartHero, ColoredSection, TextSection, LinkButton
  }
}
</script>

<style>


</style>
