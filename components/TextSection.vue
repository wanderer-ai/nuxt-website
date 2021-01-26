<template>

  <section :id="id" class="text-section overflow-hidden text-grey-dark">

    <div class="text-section--background"></div>
    <div class="text-section--background"></div>

    <div class="py-24 sm:py-48">
      <div class="container">
        <div class="flex flex-wrap justify-center lg:justify-start">
          <div class="w-full lg:w-1/4">
          </div>

          <div class="w-full lg:w-1/4">

          </div>
          <div class="w-full lg:w-1/2 relative ">

            <slot></slot>

          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>

  import '~/node_modules/vue-awesome/icons/graduation-cap'
  import Icon from '~/node_modules/vue-awesome/components/Icon'

  // import Vertex from '~/components/Vertex.vue'

  export default {
    components: {
      Icon
    },
    props: {
      id: {
        type: String,
        default: ''
      },
    }
  }

</script>


<style>

.text-section--background {
  position: absolute;
  height: 100%;
  width: 100%;
  /* background-image: url('/images/background.png');
  background-size: cover;
  background-position: center center;
  filter: blur(0.5rem) opacity(10%); */
}

</style>
