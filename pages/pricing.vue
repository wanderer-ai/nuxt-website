<template>

    <div>

      <app-nav />

      <header-section colorFrom="orange" colorTo="yellow">
        <h1 class="uppercase text-6xl text-white mb-4">Pricing</h1>
      </header-section>

      <div class="container narrow content pt-24 pb-12">

        <p>
          This software is open source but it is not completely free.
          That means that you have to purchase a license if you plan to run the botbuilder or single chatbots on your own website or inside your apps.
          Use the botbuilder and the chatbots for free as long as you use them with the Wanderer.ai domain.
        </p>

      </div>

      <plans />

      <div class="container narrow content pb-48">

        <p>

          Do you work for an NGO or a non-profit organization? Are you a student or do you need Wanderer.ai for research purposes?
          Then you can get your license at a reduced price or for free.
          <a href="mailto://hello@wanderer.ai">Get in touch with us.</a>

        </p>

      </div>

      <app-footer colorFrom="orange" colorTo="yellow" />

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
