<template>
  <div class="overflow-hidden">

    <nuxt/>

    <a href="/roadmap"class="ribbon bg-white text-black p-4 shadow-md hidden sm:block">Public Prototype</a>

    <wanderer-chat flow-url="https://raw.githubusercontent.com/wanderer-ai/wanderer-flows/master/tutorial/intro/welcome.json" base-path="/"></wanderer-chat>

  </div>
</template>

<script>

export default {
  components: {

  }
}
</script>

<style lang="postcss">

html {
 scroll-behavior: smooth;
}

/*
  Break long words
*/
.break-long-words {
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-all;
  word-break: break-word;
  hyphens: auto;
}

/*
  Ribbon
*/
.ribbon {
  z-index:999;
  width: 300px;
  position: fixed;
  text-align: center;
  top: 25px;
  right: -100px;
  transform: rotate(45deg);
}

/*
  Blur
*/
/* .blur {
  filter: blur(4px);
} */

/*
  HTML Content
*/
.content p {
  @apply mb-6 text-xl;
}

.content a {
  text-decoration:underline;
}

.content h2 {
  @apply mb-2 uppercase text-2xl text-grey-dark;
}

.content h3 {
  @apply mb-2 uppercase text-xl text-grey-dark;
}

@screen md {
  .content h2 {
    @apply text-4xl;
  }

  .content h3 {
    @apply text-2xl
  }
}

.content ol {
  @apply mb-6 text-xl list-decimal pl-10;
}

.content ul {
  @apply mb-6 text-xl list-disc;
}

.content ul li {
  list-style: inside;
}

.content table {
  @apply mb-6;
  border-spacing: 16px;
  border-collapse: separate;
}

/*
  Containers
*/
.container {
  @apply px-6;
  @screen md {
    @apply px-12;
  }
}

/*
  Narrow containers
*/
.container.narrow {
  max-width:768px;
}

/*
  Object fit
*/
/* .fit-cover {
  object-fit:cover;
} */

</style>
