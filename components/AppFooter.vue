<template>

  <footer>
    <colored-section :color="color" :textColor="textColor">
      <div class="">

        <a class="" href="https://wanderer.ai/">
          © 2020 Wanderer.ai
        </a>

        <br>

        <a class="" href="https://steampixel.de/en/">
          This is a SteamPixel project
        </a>

        <br>

        <a href="https://twitter.com/wanderer_ai" class="twitter" title="Twitter link">
          Twitter
        </a>

        <br>

        <a href="https://github.com/wanderer-ai" class="github" title="Github link">
          GitHub
        </a>

        <br>

        <a href="/imprint">Imprint</a>

        <br>

        <a href="/privacy-policy">Privacy Policy</a>

      </div>
    </colored-section>
  </footer>

</template>

<script>

  import ColoredSection from '~/components/ColoredSection.vue'

  export default {
    components: { ColoredSection },
    props: {
      color: {
        type: String,
        default: 'white'
      },
      textColor: {
        type: String,
        default: 'black'
      }
    }
  }
</script>


<style>

  /* Social */

  .github, .twitter {
      fill: #bababa;
  }

  /* Cookie bar */
  .Cookie--dark-lime {
      background: #111 !important;
      color: #fff !important;
      padding: 1em !important;
  }

  .Cookie--dark-lime .Cookie__button {
      background: #27A844 !important;
  }

  .Cookie--dark-lime .Cookie__button:hover {
      background: #27A844 !important;
  }

  .Cookie--dark-lime .Cookie__button {
      background: #27A844 !important;
      padding: 0.5em 0.5em !important;
      color: #fff !important;
      border-radius: 0 !important;
  }

</style>
