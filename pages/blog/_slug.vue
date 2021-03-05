
<template>

  <div>

    <app-nav />

    <header-section colorFrom="blue" colorTo="blue-dark">
      <h1 class="uppercase text-6xl text-white mb-4">{{article.title}}</h1>
    </header-section>

    <div class="container narrow pt-12">
      <img :src="'/blogimages/'+article.img" class="mb-2" />
      <div class="text-sm">{{date(article.createdAt)}} by {{ article.author.name }}</div>
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
    },
    methods: {
      date (d) {
        let date = new Date(Date.parse(d))
        return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate()
      }
    },
    head() {
      return {
        title: 'Wanderer.ai - '+this.article.title,
        meta: [
          { hid: 'description', name: 'description', content: this.article.description },
          { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
          { hid: 'twitter:site', name: 'twitter:site', content: '@wanderer_ai' },
          { hid: 'twitter:title', name: 'twitter:title', content: this.article.title },
          { hid: 'twitter:description', name: 'twitter:description', content: this.article.description },
          { hid: 'twitter:image', name: 'twitter:image', content: 'https://wanderer.ai/blogimages/'+this.article.img }
        ]
      }
    }
  }
</script>
