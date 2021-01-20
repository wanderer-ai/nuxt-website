<template>

    <div>

      <app-nav />

      <header-section colorFrom="red-dark" colorTo="red">
        <h1 class="uppercase text-6xl text-white mb-4">Public Roadmap</h1>
      </header-section>

      <div class="container narrow content py-24">

        <h2>Implement API node</h2>
        <strong>Status: Planned</strong>
        <p>
          With this node you can quickly and easily send data to JSON Apis or retrieve data.
        </p>

        <h2>Provide website interaction nodes</h2>
        <strong>Status: Planned</strong>
        <p>
          Some nodes should be provided to simplify the interaction with the surrounding website.
          This makes it easier for the bot to react to events on the website and trigger events on the website.
        </p>

        <h2>Implement simple utterances system</h2>
        <strong>Status: Planned</strong>
        <p>
          This should give you the opportunity to communicate more freely with the bot.
        </p>

        <h2>Headless flow CMS</h2>
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
