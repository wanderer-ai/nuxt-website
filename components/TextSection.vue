<template>

  <!-- v-bind:style="'background-image: url('+image+');'" -->

  <section :id="id" class="text-section overflow-hidden">

    <div class="absolute h-full w-full bg-cover blur" style="background-image: url('/images/wanderer-builder.png');"></div>

    <div class="absolute h-full w-full bg-white opacity-75"></div>

    <div class="py-48">
      <div class="container">
        <div class="flex flex-wrap justify-center lg:justify-start">
          <div class="w-full lg:w-1/2">
            <div class="relative">
              <div class="absolute bg-grey opacity-50 h-full w-full rounded-xl"></div>
              <div class="relative p-6 lg:p-12">
                <h2 v-if="header" class="uppercase text-4xl">{{header}}</h2>
                <div class="text-xl">
                  <slot></slot>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>

  export default {
    props: {
      header: {
        type: String,
        default: ''
      },
      image: {
        type: String,
        default: ''
      },
      id: {
        type: String,
        default: ''
      },
    }
  }

</script>


<style>

/* .bg-h-full {
  background-size: auto 100%;
} */

.text-section {
  position: relative;
  z-index:5;
}

</style>
