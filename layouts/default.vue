<template>
  <div class="overflow-hidden">

    <nuxt/>

    <a href="/roadmap"class="ribbon bg-white text-black p-4 shadow-md">Public Prototype</a>

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
  Ribbon
*/
.ribbon {
  display:block;
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

.content h2 {
  @apply mb-2 uppercase text-4xl text-grey-dark;
}

.content h3 {
  @apply mb-2 uppercase text-2xl text-grey-dark;
}

.content ul {
  @apply mb-6 text-xl;
}

.content ul li {
  list-style: inside;
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
