<template>

    <div class="separator-wrapper">

      <header>

        <app-nav/>

        <div class="cover-image full-height" style="background-image: url('/images/shoes2.jpg');">

          <div class="background-filter">
             <div class="hero-text">
               <h1>Blog</h1>
             </div>
          </div>

        </div>

        <div class="separator-top-right seperator-up"></div>

      </header>

      <main>

        <div class="container seperator-compensate text-spacing">



        </div>

        <div class="separator-bottom-right seperator-down"></div>

      </main>

      <app-footer />

    </div>

</template>

<script>

import AppNav from '~/components/AppNav.vue'
import AppFooter from '~/components/AppFooter.vue'

export default {
  components: {
    AppNav, AppFooter
  }
}

</script>

<style>

  .author{
    border-radius: 50px;
    margin: auto;
    display: block;
    margin-bottom: 50px;
  }

</style>
