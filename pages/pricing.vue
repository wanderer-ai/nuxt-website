<template>

    <div>

      <app-nav />

      <header-section colorFrom="green-dark" colorTo="green">
        <h1 class="uppercase text-6xl text-white mb-4">Pricing</h1>
      </header-section>

      <div class="container narrow content py-24">

        <p>
          This software is open source but it is not completely free.
          That means that you have to purchase a license if you plan to run the botbuilder or single chatbots on your own website or inside your apps.
          Use the botbuilder and the chatbots for free as long as you use them with the Wanderer.ai domain.
        </p>

        <p>
          The pricing model is not very clear right now.
          But I want to keep it simple. So you have to purchase a license code for each domain or App on which one or more bots are running.
        </p>

      </div>

      <div class="container">

        <plans />

      </div>

      <app-footer colorFrom="green-dark" colorTo="green" />

    </div>

</template>

<script>

import HeaderSection from '~/components/HeaderSection.vue'
import AppNav from '~/components/AppNav.vue'
import AppFooter from '~/components/AppFooter.vue'
import Plans from '~/components/Plans.vue'

export default {
  components: {
    AppNav, AppFooter, Plans, HeaderSection
  }
}

</script>

<style>


</style>
