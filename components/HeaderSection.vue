<template>
  <header class="header-section relative">

    <div :class="'header-section--clip z-20 relative py-24 bg-gradient-to-br from-'+colorFrom+' to-'+colorTo">
      <div class="container">

        <div class="flex flex-wrap">

          <div class="w-full xl:w-1/2">
            <slot/>
          </div>

          <div class="w-full xl:w-1/2 hidden xl:block">
            <vertex color="white" :edgeCount="3" :edgeAngle="312" :size="200" style="bottom:0px;right:-30px;" />
          </div>

        </div>

      </div>
    </div>

    <div class="hidden lg:block">
      <vertex :color="colorTo" :edgeCount="3" :edgeAngle="100" :size="100" class="z-10" style="bottom:-200px;left:100px;"/>
    </div>

  </header>
</template>

<script>

  import Vertex from '~/components/Vertex.vue'

  export default {
    components: {
      Vertex
    },
    props: {
      id: {
        type: String,
        default: ''
      },
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

.header-section--clip {
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
}

</style>
