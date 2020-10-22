<template>

    <div>

      <app-nav />

      <page-hero color="yellow" header="Pricing"></page-hero>

      <div class="container narrow content">

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

      <div class="separator-bottom-right seperator-down separator-white"></div>

      <app-footer color="yellow" textColor="white" />

    </div>

</template>

<script>

import PageHero from '~/components/PageHero.vue'
import AppNav from '~/components/AppNav.vue'
import AppFooter from '~/components/AppFooter.vue'

export default {
  components: {
    PageHero, AppNav, AppFooter
  }
}

</script>

<style>


</style>
