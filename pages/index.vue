<template>

    <div>

      <app-nav textColor="black" />

      <start-hero id="start">

        <logo :edgeCount="3" :edgeAngle="190" color="yellow" text-color="white" header="Wanderer.ai" subheader="Privacy by design reactive chatbot">

          <div class="w-full absolute bottom-0 -mx-3 hidden sm:block">
            <!-- <link-button class="mx-3 mb-6 sm:mb-0" target="_blank" url="/" bg-color="yellow" text-color="white" label="Wanderer.ai" />
            <link-button class="mx-3 mb-6 sm:mb-0" target="_blank" url="/" bg-color="blue" text-color="white" label="Graph theory driven" />
            <link-button class="mx-3 mb-6 sm:mb-0" target="_blank" url="/" bg-color="green" text-color="white" label="Reactive conversations" /> -->

            <link-button :edgeCount="1" :edgeAngle="170" class="mx-3 mb-6 sm:mb-0" target="_blank" url="https://wanderer.ai/builder" bg-color="blue" text-color="white" label="Build your bot now!" />
            <link-button :edgeCount="2" :edgeAngle="50" class="mx-3" url="#welcome" bg-color="green" text-color="white" label="Learn more" />
          </div>

        </logo>

      </start-hero>

      <div class="separator-top-right seperator-up separator-green"></div>

      <colored-section id="welcome" color="green" header="Hey 👋! This is Wanderer.ai">
        <p class="mb-6">Like a wanderer this software traverses the complex context of expert knowledge to create a unique chat experience.</p>
        <link-button :edgeCount="2" :edgeAngle="110" class="" url="#context-first" bg-color="white" text-color="black" label="Learn more" />
      </colored-section>

      <div class="separator-bottom-right seperator-down separator-green"></div>

      <text-section id="context-first" image="/images/graph6.JPG" header="💡 Context first!">
        <p class="mb-6">
          Create non blocking reactive chatbots.
          Like in real conversations this chatbot is able to interrupt a current question because the situative context has changed.
        </p>
        <link-button :edgeCount="4" :edgeAngle="30" class="" url="#privacy-by-design" bg-color="blue" text-color="white" label="Learn more" />
      </text-section>

      <div class="separator-top-right seperator-up separator-blue"></div>

      <colored-section id="privacy-by-design" color="blue" header="🔒 Transparent, Privacy by design, Open Source">
        <p class="mb-6">
          It should never be best practice to send every user input to intransparent server systems. This chatbot will respect privacy!
          It will run completely independent of any servers only at client side.
        </p>
        <link-button :edgeCount="2" :edgeAngle="200" class="mt-6" url="#free-the-knowledge" bg-color="white" text-color="black" label="Learn more" />
      </colored-section>

      <div class="separator-bottom-right seperator-down separator-blue"></div>

      <text-section id="free-the-knowledge" image="/images/graph7.JPG" header="📖 Free the knowledge!">
        <p class="mb-6">
          Stop encapsulating expert knowledge in complex and cumbersome program code or server black boxes.
          Knowledge should be easily accessible by all people. Host and share your chat flows on GitHub for example.
        </p>
        <link-button :edgeCount="3" :edgeAngle="70" class="mt-6" url="#technology" bg-color="yellow" text-color="white" label="Learn more" />
      </text-section>

      <div class="separator-top-right seperator-up separator-yellow"></div>

      <colored-section id="technology" color="yellow" header="💣 Driven by a modern technology stack">
        <p class="mb-6">
          This bot is using a modern and flexible technology stack containing projects like
          <a class="underline" target="_blank" href="https://nodejs.org/en/">Node.js</a>,
          <a class="underline" target="_blank" href="https://nuxtjs.org/">Nuxt.js</a>,
          <a class="underline" target="_blank" href="https://vuejs.org/">Vue.js</a>,
          <a class="underline" target="_blank" href="http://js.cytoscape.org/">Cytoscape.js</a>,
          <a class="underline" target="_blank" href="https://lernajs.io/">Lerna</a>
          and <a class="underline" target="_blank" href="https://mustache.github.io/">Mustache.js.</a>
        </p>
        <link-button :edgeCount="2" :edgeAngle="100" class="mt-6" url="#editor" bg-color="white" text-color="black" label="Learn more" />
      </colored-section>

      <div class="separator-bottom-right seperator-down separator-yellow"></div>

      <text-section id="editor" image="/images/graph8.JPG" header="💪 Simple, free and powerfull web editor">
        <p class="mb-6">
          Create your chatbot within a simple, free and powerful editor. No need for registrations or payments to build your bot.
        </p>
        <div class="-mx-3">
          <link-button :edgeCount="2" :edgeAngle="50" class="mx-3 mb-6 sm:mb-0" url="#stay-tuned" bg-color="red" text-color="white" label="Learn more" />
          <link-button :edgeCount="1" :edgeAngle="10" class="mx-3" target="_blank" url="https://wanderer.ai/builder" bg-color="blue" text-color="white" label="Try it now!" />
        </div>
      </text-section>

      <div class="separator-top-right seperator-up separator-red"></div>

      <colored-section id="stay-tuned" color="red" header="🎓 Want to learn more?">
        <p class="mb-6">
          Stay up to date, follow <a class="underline" href="https://twitter.com/wanderer_ai">@wanderer_ai</a> and read
          <a class="underline" href="https://twitter.com/dampfpixel">@dampfpixel's</a> chatbot builder
          <a class="underline" href="https://steampixel.de/en/tag/lets-build-an-open-source-chatbot-builder/">blog series</a>.
          Also watch the <a class="underline" href="https://github.com/wanderer-ai">git repos</a>.
        </p>
        <link-button :edgeCount="2" :edgeAngle="200" class="mt-6" url="#start" bg-color="white" text-color="black" label="Back to top" />
      </colored-section>

      <div class="separator-bottom-right seperator-down separator-red"></div>

      <app-footer />

    </div>

</template>

<script>

import StartHero from '~/components/StartHero.vue'
import ColoredSection from '~/components/ColoredSection.vue'
import TextSection from '~/components/TextSection.vue'
import LinkButton from '~/components/LinkButton.vue'
import AppNav from '~/components/AppNav.vue'
import AppFooter from '~/components/AppFooter.vue'
import Logo from '~/components/Logo.vue'

export default {
  components: {
    StartHero, ColoredSection, TextSection, LinkButton, AppNav, AppFooter, Logo
  }
}
</script>

<style>


</style>
