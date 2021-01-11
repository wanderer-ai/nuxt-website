<template>
  <section :id="id" class="colored-section relative">

    <vertex :edgeAngle="70" :edgeCount="2" :edgeLength="800" :size="150" :color="colorFrom" class="z-10" style="top:-200px;left:300px;"/>

    <div :class="'colored-section--clip z-20 relative py-24 bg-gradient-to-br from-'+colorFrom+' to-'+colorTo">

      <div class="container">
        <div class="flex flex-wrap">

          <div :class="'w-full xl:w-1/2 '">
            <slot></slot>
          </div>

          <div :class="'w-full xl:w-1/2 hidden xl:block'">
            <vertex :edgeAngle="70" :edgeCount="3" :edgeLength="300" color="white" style="bottom:300px;right:100px;"/>
          </div>

        </div>
      </div>

    </div>

  </section>
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

.colored-section--clip {
  -webkit-clip-path: polygon(0 0, 100% 15%, 100% 85%, 0 100%);
  clip-path: polygon(0 0, 100% 15%, 100% 85%, 0 100%);
}

</style>
