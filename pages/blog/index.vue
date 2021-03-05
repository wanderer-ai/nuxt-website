
<template>
  <div>

    <app-nav />

    <header-section colorFrom="blue" colorTo="blue-dark">
      <h1 class="uppercase text-6xl text-white mb-4">Blog Posts</h1>
    </header-section>

    <div class="container narrow pt-24 pb-48">

        <div class="mb-16" v-for="article of articles" :key="article.slug">
          <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
            <img class="mb-2" :src="'/blogimages/'+article.img" />
            <div class="">
              <div class="text-sm mb-2">{{date(article.createdAt)}} by {{ article.author.name }}</div>
              <h2 class="text-2xl">{{ article.title }}</h2>
              <div class="mb-4">{{ article.description }}</div>
              <div class="underline">Read more</div>
            </div>
          </NuxtLink>
        </div>

    </div>

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
      const articles = await $content('articles')
        .only(['title', 'description', 'img', 'slug', 'author', 'createdAt'])
        .sortBy('createdAt', 'desc')
        .fetch()

      return {
        articles
      }
    },
    methods: {
      date (d) {
        let date = new Date(Date.parse(d))
        return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate()
      }
    }
  }
</script>
