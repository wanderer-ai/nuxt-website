<template>
  <div class="overflow-hidden">

    <nuxt/>

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
  Blur
*/
/* .blur {
  filter: blur(4px);
} */

/*
  Seperators
*/
/* .separator-wrapper{
  overflow: hidden;
  width: 100%;
}

.separator-top-right {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 50px 100vw 0 0;
  position: relative;
  border-color: transparent white transparent transparent;
  z-index:999;
}

.separator-top-left {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 50px 0 0 100vw;
  position: relative;
  border-color: transparent transparent transparent white;
  z-index:999;
}

.separator-bottom-right {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 100vw 50px 0;
  position: relative;
  border-color: transparent white transparent transparent;
  z-index:999;
}

.separator-bottom-left {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 50px 100vw;
  position: relative;
  border-color: transparent transparent transparent white;
  z-index:999;
}

.seperator-up{
  margin-top: -50px;
  margin-bottom: 0;
}

.seperator-down{
  margin-top: 0;
  margin-bottom: -50px;
}

@screen md {

  .separator-top-right {
    border-width: 100px 100vw 0 0;
  }

  .separator-top-left {
    border-width: 100px 0 0 100vw;
  }

  .separator-bottom-right {
    border-width: 0 100vw 100px 0;
  }

  .separator-bottom-left {
    border-width: 0 0 100px 100vw;
  }

  .seperator-up{
    margin-top: -100px;
  }

  .seperator-down{
    margin-bottom: -100px;
  }

  .seperator-compensate{
    padding-top:100px;
    padding-bottom:100px;
  }
}

.separator-top-right.separator-green{ border-color: transparent #27A844 transparent transparent; }
.separator-top-right.separator-blue{ border-color: transparent #007AFF transparent transparent; }
.separator-top-right.separator-yellow{ border-color: transparent #FEC106 transparent transparent; }
.separator-top-right.separator-red{ border-color: transparent #E03347 transparent transparent; }
.separator-top-right.separator-white{ border-color: transparent #fff transparent transparent; }
.separator-top-left.separator-green{ border-color: transparent transparent transparent #27A844; }
.separator-top-left.separator-blue{ border-color: transparent transparent transparent #007AFF; }
.separator-top-left.separator-yellow{ border-color: transparent transparent transparent #FEC106 ; }
.separator-top-left.separator-red{ border-color: transparent transparent transparent #E03347; }
.separator-top-left.separator-white{ border-color: transparent transparent transparent #fff; }
.separator-bottom-right.separator-green{ border-color: transparent #27A844 transparent transparent; }
.separator-bottom-right.separator-blue{ border-color: transparent #007AFF transparent transparent; }
.separator-bottom-right.separator-yellow{ border-color: transparent #FEC106 transparent transparent; }
.separator-bottom-right.separator-red{ border-color: transparent #E03347 transparent transparent; }
.separator-bottom-right.separator-white{ border-color: transparent #fff transparent transparent; }
.separator-bottom-left.separator-green{ border-color: transparent transparent transparent #27A844; }
.separator-bottom-left.separator-blue{ border-color: transparent transparent transparent #007AFF; }
.separator-bottom-left.separator-yellow{ border-color: transparent transparent transparent #FEC106 ; }
.separator-bottom-left.separator-red{ border-color: transparent transparent transparent #E03347; }
.separator-bottom-left.separator-white{ border-color: transparent transparent transparent #fff; } */

/*
  HTML Content
*/
.content p {
  @apply mb-6 text-xl;
}

.content h2 {
  @apply mb-2 uppercase text-4xl;
}

.content h3 {
  @apply mb-2 uppercase text-2xl;
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
