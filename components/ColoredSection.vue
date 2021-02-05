<template>
  <section :id="id" class="colored-section relative">

    <div class="hidden xl:block">
      <parallax direction="up" :factor="0.5" class="">
        <vertex :edgeAngle="70" :edgeCount="2" :edgeLength="800" :size="150" :color="colorFrom" animationDirection="clock" class="z-10" style="top:-200px;left:300px;"/>
      </parallax>
    </div>

    <div :class="'colored-section--clip z-20 relative py-24 bg-gradient-to-br from-'+colorFrom+' to-'+colorTo">

      <div class="container">
        <div class="flex flex-wrap">

          <div :class="'w-full xl:w-1/2 '">
            <slot></slot>
          </div>

          <div :class="'w-full xl:w-1/2 hidden xl:block'">
            <parallax direction="down" :factor="0.3" class="">
              <vertex :edgeAngle="70" :edgeCount="3" :edgeLength="300" animationDirection="counter" color="white" style="bottom:0;right:0;"/>
            </parallax>
          </div>

        </div>
      </div>

    </div>

  </section>
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

.colored-section--clip {
  -webkit-clip-path: polygon(0 0, 100% 5%, 100% 95%, 0 100%);
  clip-path: polygon(0 0, 100% 5%, 100% 95%, 0 100%);
}

@screen md {
  .colored-section--clip {
    -webkit-clip-path: polygon(0 0, 100% 15%, 100% 85%, 0 100%);
    clip-path: polygon(0 0, 100% 15%, 100% 85%, 0 100%);
  }
}

</style>
