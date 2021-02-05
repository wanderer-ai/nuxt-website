<template>
  <header class="header-section relative">

    <div :class="'header-section--clip z-20 relative py-12 sm:py-24 bg-gradient-to-br from-'+colorFrom+' to-'+colorTo">
      <div class="container">

        <div class="flex flex-wrap">

          <div class="w-full xl:w-1/2">
            <slot/>
          </div>

          <div class="w-full xl:w-1/2 hidden xl:block">
            <parallax direction="down" :factor="0.5" class="w-full h-full">
              <vertex color="white" :edgeCount="3" :edgeAngle="312" :size="200" animationDirection="clock" style="bottom:-100px;right:-100px;" />
            </parallax>
          </div>

        </div>

      </div>
    </div>

    <div class="hidden lg:block">
      <parallax direction="up" :factor="0.5">
        <vertex :color="colorTo" :edgeCount="3" :edgeAngle="100" :size="100" animationDirection="counter" class="z-10" style="bottom:-200px;left:100px;"/>
      </parallax>
    </div>

  </header>
</template>

<script>

  import Vertex from '~/components/Vertex.vue'
  import Parallax from '~/components/Parallax.vue'

  export default {
    components: {
      Vertex, Parallax
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
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 95%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 95%, 0 100%);
}

@screen md {
  .header-section--clip {
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  }
}



</style>
