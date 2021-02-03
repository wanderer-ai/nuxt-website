<template>

    <div>

      <app-nav />

      <header-section colorFrom="red-dark" colorTo="red">
        <h1 class="uppercase text-4xl md:text-6xl text-white mb-4">Public Roadmap</h1>
      </header-section>

      <div class="container narrow content pt-24 pb-48">

        <p>
          This software is currently public alpha. Not all features have been implemented yet. Here you can see what's next on the list.
        </p>

        <h2>1. Release Chatbot Web Component</h2>
        <strong>Status: In progress</strong>
        <p>
          With the help of the web component you can easily integrate your bots into your website or app.
        </p>

        <h2>2. Logic and Data</h2>
        <strong>Status: In progress</strong>
        <p>
          Sometimes you want to process data, calculate or generate new values.
          To do this, data must be exchanged between the nodes and some special nodes are required for processing.
        </p>

        <h2>3. Implement API node</h2>
        <strong>Status: Planned</strong>
        <p>
          With this node you can quickly and easily send data to JSON Apis or retrieve data.
        </p>

        <h2>4. Provide website interaction nodes</h2>
        <strong>Status: Planned</strong>
        <p>
          Some nodes should be provided to simplify the interaction with the surrounding website.
          This makes it easier for the bot to react to events on the website and trigger events on the website.
        </p>

        <h2>5. Implement simple utterances system</h2>
        <strong>Status: Planned</strong>
        <p>
          This should give you the opportunity to communicate more freely with the bot.
        </p>

        <h2>6. Provide a Guide view as chat alternative</h2>
        <strong>Status: Planned</strong>
        <p>
          The guide is an alternative to the classic chatbot interface. The guide can, for example, help to make decisions. However, the possibilities for interaction are clearly in the foreground here.
        </p>

        <h2>7. Headless flow CMS</h2>
        <strong>Status: Planned</strong>
        <p>
          This simple server application allows you to store and manage flows and media centrally. Simply connect the builder to your instance and access your flows and files directly.
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
