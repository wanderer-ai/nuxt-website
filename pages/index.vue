<template>

    <div class="separator-wrapper">

      <header>

        <app-nav/>

        <full-height class="cover-image" style="background-image: url('/images/shoes3.jpg');">

          <div class="background-filter">
             <div class="hero-text">
               <img src="/images/footprint.png" class="logo" />
               <h1>Wanderer.ai</h1>
               <h2>Next level open source chatbot ai</h2>
             </div>
          </div>

        </full-height>

        <div class="separator-top-right seperator-up separator-green"></div>

      </header>

      <main>

        <!--<section class="" style="">
          <div class="container">
            <div class="row mockup">
              <div class="col mockup--item">
                <img src="/images/tablet.png">
              </div>
            </div>
          </div>
        </section>-->

        <section class="highlight highlight-green">
            <div class="container">
              <full-height class="d-flex align-items-center">
                <div class="row">
                  <div class="col-sm d-none d-md-block">
                    <!--<img src="/images/smartphone.png" class="full-height--img">-->
                  </div>
                  <div class="col-sm">
                    <h2>Welcome! This is Wanderer.ai</h2>
                    <p>Like a wanderer this software traverses the complex context of expert knowledge to create a unique chat experience.</p>
                  </div>
                </div>
              </full-height>
            </div>
        </section>

        <div class="separator-bottom-right seperator-down separator-green"></div>

        <section class="full-hight-image seperator-compensate" style="background-image: url('/images/graph6.JPG');">
            <div class="container">
              <full-height class="d-flex align-items-center">
                <div class="row">
                  <div class="col-sm">
                    <div class="glass">
                      <h2>Context first</h2>
                      <p>
                        Wanderer.ai will leverage chatbot context to the next level by storing and executing its artificial intellicenge (AI) inside a logic graph.
                      </p>
                    </div>
                  </div>
                  <div class="col-sm d-none d-lg-block">

                  </div>
                </div>
              </full-height>
            </div>
        </section>

        <div class="separator-top-right seperator-up separator-blue"></div>

        <section class="highlight highlight-blue">
            <div class="container">
              <full-height class="d-flex align-items-center">
                <div class="row">
                  <div class="col">
                    <h2>Transparent, Privacy by default, Open Source</h2>
                    <p>
                      It should never be best practice to send user input to intransparent server systems. Build a bot that respects privacy!
                    </p>
                  </div>
                </div>
              </full-height>
            </div>
        </section>

        <div class="separator-bottom-right seperator-down separator-blue"></div>

        <section class="full-hight-image seperator-compensate" style="background-image: url('/images/graph7.JPG');">
            <div class="container">
              <full-height class="d-flex align-items-center">
                <div class="row">
                  <div class="col-sm d-none d-lg-block">

                  </div>
                  <div class="col">
                    <div class="glass">
                      <h2>Free the knowledge!</h2>
                      <p>
                        Stop encapsulating expert knowledge in complex and cumbersome program code or server black boxes.
                        Knowledge should be acessible by all people.
                      </p>
                    </div>
                  </div>
                </div>
              </full-height>
            </div>
        </section>

        <div class="separator-top-right seperator-up separator-yellow"></div>

        <section class="highlight highlight-yellow">
            <div class="container">
              <full-height class="d-flex align-items-center">
                <div class="row w-100">
                  <div class="col">
                    <h2 class="techstack--header">Driven by a modern technology stack</h2>
                    <div class="row">
                      <div class="col techstack--item"><a target="_blank" href="https://nuxtjs.org/"><img src="/images/stack/nuxt.png" title="Nuxt" alt="Nuxt" /></a></div>
                      <div class="col techstack--item"><a target="_blank" href="http://js.cytoscape.org/"><img src="/images/stack/cytoscape.png" title="Cytoscape" alt="Cytoscape" /></a></div>
                      <div class="col techstack--item"><a target="_blank" href="https://nodejs.org/en/"><img src="/images/stack/nodejs.png" title="NodeJs" alt="NodeJs" /></a></div>
                      <div class="col techstack--item"><a target="_blank" href="https://vuejs.org/"><img src="/images/stack/vue.png" title="Vue" alt="Vue" /></a></div>
                    </div>
                  </div>
                </div>
              </full-height>
            </div>
        </section>

        <div class="separator-bottom-right seperator-down separator-yellow"></div>

        <section class="full-hight-image seperator-compensate" style="background-image: url('/images/graph8.JPG');">
            <div class="container">
              <full-height class="d-flex align-items-center">
                <div class="row">
                  <div class="col-sm">
                    <div class="glass">
                      <h2>Simple but powerfull web editor</h2>
                      <p>
                        Create your chatbot within a free and powerful editor. No need for registrations or payments.
                      </p>
                    </div>
                  </div>
                  <div class="col-sm d-none d-lg-block">

                  </div>
                </div>
              </full-height>
            </div>
        </section>

        <div class="separator-top-right seperator-up separator-red"></div>

        <section class="highlight highlight-red">
            <div class="container">
              <full-height class="d-flex align-items-center">
                <div class="row">
                  <div class="col">
                    <h2>Want to learn more?</h2>
                    <p>
                      Stay up to date, follow <a href="https://twitter.com/wanderer_ai">@wanderer_ai</a> and read
                      <a href="https://twitter.com/dampfpixel">@dampfpixel's</a> chatbot builder
                      <a href="https://steampixel.de/en/tag/lets-build-an-open-source-chatbot-builder/">blog series</a>.
                      Also watch the <a href="https://github.com/wanderer-ai">git repos</a>.
                    </p>
                  </div>
                  <!--<div class="col">
                    <h2>Interested in our services?</h2>
                    <p>
                      We offer several services like consulting, enterprise support plans and custom development. Any questions? Send a mail to <a href="info@steampixel.de">info@steampixel.de</a>
                    </p>
                  </div>-->
                </div>
              </full-height>
            </div>
        </section>

        <div class="separator-bottom-right seperator-down separator-red"></div>

      </main>

      <app-footer />

    </div>

</template>

<script>
import AppNav from '~/components/AppNav.vue'
import AppFooter from '~/components/AppFooter.vue'
import FullHeight from '~/components/FullHeight.vue'

export default {
  components: {
    AppNav, AppFooter, FullHeight
  }
}
</script>

<style>


</style>
