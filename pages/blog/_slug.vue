
<template>

  <div>

    <app-nav />

    <header-section colorFrom="blue" colorTo="blue-dark">
      <h1 class="uppercase text-6xl text-white mb-4">{{article.title}}</h1>
    </header-section>

    <div class="container narrow pt-24">
      <img :src="'/blogimages/'+article.img" style="" />
    </div>

    <article class="container narrow content pt-12 pb-48">

      <nuxt-content :document="article" />

    </article>

    <app-footer colorFrom="blue" colorTo="blue-dark" />

  </div>

</template>


<script>

  // import PageHero from '~/components/PageHero.vue'
  import HeaderSection from '~/components/HeaderSection.vue'
  import AppNav from '~/components/AppNav.vue'
  import AppFooter from '~/components/AppFooter.vue'

  export default {
    components: {
      AppNav, AppFooter, HeaderSection
    },
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()

      return { article }
    }
  }
</script>
