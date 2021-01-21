<template>

  <div :class="'relative z-30 bg-white text-'+textColor+''">

    <div class="container py-4">

      <nav class="flex flex-wrap justify-between uppercase">

        <div>
          <a class="" href="/" title="Wanderer.ai">
              <!-- <icon name="robot"></icon>-->Wanderer.ai 
          </a>
        </div>

        <!-- Note: Use absolute links for sites outside of NUXT! Because NUXT will generate index.html files and folders for thode links if they are relative! -->

        <div class="flex justify-between">
          <a class="pl-4" href="https://wanderer.ai/builder" target="_blank">Builder</a>
          <a class="pl-4" href="/story">Story</a>
          <a class="pl-4" href="/pricing">Pricing</a>
          <a class="pl-4" href="/faq">FAQ</a>
          <a class="pl-4" href="/roadmap">Roadmap</a>
          <a class="pl-4" href="https://wanderer.ai/docs" target="_blank">Docs</a>
          <!-- <a class="pl-4" href="/imprint">Imprint</a> -->
        </div>

      </nav>

    </div>

  </div>

</template>

<script>

  import '~/node_modules/vue-awesome/icons/robot'
  import Icon from '~/node_modules/vue-awesome/components/Icon'

  export default {
    components: {
      Icon
    },
    props: {
      textColor: {
        type: String,
        default: 'black'
      }
    }
  }

</script>

<style>

</style>
