<template>

  <footer class="footer-section relative">

    <div :class="'footer-section--clip z-20 relative py-24 bg-gradient-to-br text-white from-'+colorFrom+' to-'+colorTo">
      <div class="container">

        <div class="flex">

          <div class="w-full xl:w-1/2">

            <p class="text-3xl mb-8">
              Stay up to date, follow <a class="underline" href="https://twitter.com/wanderer_ai">@wanderer_ai</a> and read
              <a class="underline" href="https://twitter.com/dampfpixel">@dampfpixel's</a> chatbot builder
              <a class="underline" href="https://steampixel.de/en/tag/lets-build-an-open-source-chatbot-builder/">blog series</a>.
              Also watch the <a class="underline" href="https://github.com/wanderer-ai">git repos</a>.
            </p>

            <div class="">

              <a class="" href="https://wanderer.ai/">
                © 2020 Wanderer.ai
              </a>,

              <a class="" href="https://steampixel.de/en/">
                This is a SteamPixel project
              </a>,

              <a href="https://twitter.com/wanderer_ai" class="twitter" title="Twitter link">
                Twitter
              </a>,

              <a href="https://github.com/wanderer-ai" class="github" title="Github link">
                GitHub
              </a>,

              <a href="/imprint">Imprint</a>,

              <a href="/privacy-policy">Privacy Policy</a>,

              <a href="/license">License</a>

            </div>

          </div>

          <div class="w-full xl:w-1/2 hidden xl:block">
            <vertex color="white" :edgeCount="3" :startAngle="140" :edgeAngle="30" :edge-length="140" :size="200" style="bottom:-100px;right:-30px;"/>
          </div>

        </div>

      </div>
    </div>

    <vertex :color="colorFrom" :edgeCount="4" :startAngle="340" :edgeAngle="40" :size="100" class="z-10" style="top:-150px;left:100px;"/>

  </footer>

</template>

<script>

  import Vertex from '~/components/Vertex.vue'

  export default {
    components: {
      Vertex
    },
    props: {
      colorFrom: {
        type: String,
        default: 'orange'
      },
      colorTo: {
        type: String,
        default: 'yellow'
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
  /* .Cookie--dark-lime {
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
  } */

  .footer-section--clip {
    -webkit-clip-path: polygon(0 0, 100% 25%, 100% 100%, 0 100%);
    clip-path: polygon(0 0, 100% 25%, 100% 100%, 0 100%);
  }

</style>
