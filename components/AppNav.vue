<template>

  <div :class="'relative z-30 bg-white text-'+textColor+''">

    <div class="container py-4">

      <div class="flex items-stretch">

        <nav class="flex flex-wrap flex-grow justify-between uppercase">

          <div class="w-full md:w-auto">
            <a class="font-bold text-grey-dark" href="/" title="Wanderer.ai">
                <!-- <icon name="robot"></icon>-->Wanderer.ai
            </a>
          </div>

          <!-- Note: Use absolute links for sites outside of NUXT! Because NUXT will generate index.html files and folders for thode links if they are relative! -->

          <div class="w-full md:w-auto flex flex-wrap justify-between -mx-2">

            <a class="mx-2" href="https://wanderer.ai/builder" target="_blank">Builder</a>
            <a class="mx-2" href="/story">Story</a>
            <a class="mx-2" href="/pricing">Pricing</a>
            <a class="mx-2" href="/faq">FAQ</a>
            <a class="mx-2" href="/roadmap">Roadmap</a>
            <a class="mx-2" href="https://wanderer.ai/docs" target="_blank">Docs</a>

            <!-- <a class="pl-4" href="/imprint">Imprint</a> -->
          </div>

        </nav>

        <!-- Ribbon placeholder -->
        <div class="hidden sm:block w-20"></div>

      </div>

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
