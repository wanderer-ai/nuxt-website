<template>

  <div :class="'text-'+textColor+' z-50 absolute w-full'">

    <div class="container pt-4">

      <nav class="flex flex-wrap justify-between uppercase">

        <div>
          <a class="" href="/" title="Wanderer.ai">
              Wanderer.ai
          </a>
        </div>

        <div class="flex justify-between">
          <a class="" href="/story">Story</a>
          <a class="pl-4" href="/pricing">Pricing</a>
          <a class="pl-4" href="/faq">FAQ</a>
          <a class="pl-4" href="/imprint">Imprint</a>
        </div>

      </nav>

    </div>

  </div>

</template>

<script>

  export default {
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
