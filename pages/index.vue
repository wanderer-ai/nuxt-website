<template>

    <div>

      <app-nav textColor="black" />

      <header-section id="start">
        <h1 class="uppercase text-4xl sm:text-6xl text-white mb-4">Privacy by design reactive chatbot for the web</h1>

        <ul class="mb-8 text-white text-xl">
          <li><icon name="check" scale="1"></icon> Open Source</li>
          <li><icon name="check" scale="1"></icon> Privacy by design</li>
          <li><icon name="check" scale="1"></icon> Multilingual bots</li>
          <li><icon name="check" scale="1"></icon> No registering or payments needed</li>
          <li><icon name="check" scale="1"></icon> Works without internet connection</li>
          <li><icon name="check" scale="1"></icon> Reactive context graph technology</li>
          <li><icon name="check" scale="1"></icon> Share your bots with all peoples</li>
        </ul>

        <!-- <p class="text-xl text-white mb-8">
          Build <strong>multilingual</strong> bots <strong>without registering or payments</strong>.
          Run your bots <strong>server independent</strong> only at client side and without internet connection.
          <strong>Share your bots</strong> with all peoples. Keep your data <strong>always yours</strong>.
        </p>
         -->
        <page-button href="https://wanderer.ai/builder">Build your bot now, really ;-)</page-button>

      </header-section>

      <!-- <div class="container">
        <div class="relative">
          <div class="absolute w-1/2 border-2 border-solid border-black rounded-md" style="right:0;margin-top:-30%;z-index:99;">
            <video autoplay loop>
              <source src="/videos/wanderer-builder.webm" type='video/webm; codecs="vp8, vorbis"' />
            </video>
          </div>
        </div>
      </div> -->

      <text-section>
          <icon name="graduation-cap" scale="8" class="mb-4"></icon>
          <p class="text-xl md:text-2xl mb-8">
            <strong>Perfect for absolute beginners:</strong>
            Create your chatbot within a simple, <strong>free and powerful flow builder</strong>. No need for registrations or payments to start.
            Its easy!
          </p>
          <page-button bgColor="green" textColor="white" href="https://wanderer.ai/builder">Start now!</page-button>
      </text-section>

      <colored-section id="welcome" colorFrom="green-dark" colorTo="green">
        <icon name="glasses" :inverse="true" scale="8" class="mb-4"></icon>
        <p class="text-white text-xl md:text-2xl mb-8">
          <strong>Awesome for bot nerds:</strong>
          This bot traverses complex contexts of logic and knowledge. This leads to non blocking chatbots.
          Like in real conversations this bot is able to interrupt a current question because the <strong>situative context</strong> has changed.
        </p>
        <page-button bgColor="white" textColor="black" href="https://wanderer.ai/builder">Try it now!</page-button>
      </colored-section>

      <text-section>
          <icon name="lock" scale="8" class="mb-4"></icon>
          <p class="text-xl md:text-2xl mb-8">
            <strong>Privacy by design:</strong>
            It should never be best practice to send every user input to intransparent server systems. This chatbot will <strong>respect privacy</strong>!
            Therefore, it is perfect for applications with a <strong>high level of security</strong>.
          </p>
          <page-button bgColor="blue" textColor="white" href="https://wanderer.ai/builder">Start now!</page-button>
      </text-section>

      <colored-section id="welcome" colorFrom="blue-dark" colorTo="blue">
        <icon name="share-alt" :inverse="true" scale="8" class="mb-4"></icon>
        <p class="text-white text-xl md:text-2xl mb-8">
          <strong>Always your data: </strong>Stop encapsulating expert knowledge in complex and cumbersome program code or server black boxes.
          Knowledge should be <strong>easily accessible</strong> by all people. Host and share your chat flows <strong>wherever you like</strong>.
        </p>
        <page-button bgColor="white" textColor="black" href="https://wanderer.ai/builder">Try it now!</page-button>
      </colored-section>

      <text-section>
          <icon name="rocket" scale="8" class="mb-4"></icon>
          <p class="text-xl md:text-2xl">
            <strong>Techstack:</strong>
            This bot is using a modern and flexible technology stack containing projects like
            <a class="underline" target="_blank" href="https://nodejs.org/en/">Node.js</a>,
            <a class="underline" target="_blank" href="https://nuxtjs.org/">Nuxt.js</a>,
            <a class="underline" target="_blank" href="https://vuejs.org/">Vue.js</a>,
            <a class="underline" target="_blank" href="http://js.cytoscape.org/">Cytoscape.js</a>,
            <a class="underline" target="_blank" href="https://lernajs.io/">Lerna</a>,
            <a class="underline" target="_blank" href="https://github.com/TomFrost/jexl">Jexl</a>
            and <a class="underline" target="_blank" href="https://mustache.github.io/">Mustache.js.</a>
          </p>
      </text-section>

      <app-footer colorFrom="red" colorTo="red-dark" />

    </div>

</template>

<script>

import HeaderSection from '~/components/HeaderSection.vue'
import PageButton from '~/components/Button.vue'

import ColoredSection from '~/components/ColoredSection.vue'
import TextSection from '~/components/TextSection.vue'
import AppNav from '~/components/AppNav.vue'
import AppFooter from '~/components/AppFooter.vue'
import Logo from '~/components/Logo.vue'

import Icon from '~/node_modules/vue-awesome/components/Icon'
import '~/node_modules/vue-awesome/icons/graduation-cap'
import '~/node_modules/vue-awesome/icons/glasses'
import '~/node_modules/vue-awesome/icons/lock'
import '~/node_modules/vue-awesome/icons/share-alt'
import '~/node_modules/vue-awesome/icons/rocket'
import '~/node_modules/vue-awesome/icons/check'

export default {
  components: {
    Icon, ColoredSection, TextSection, AppNav, AppFooter, Logo, HeaderSection, PageButton
  }
}
</script>

<style>


</style>
