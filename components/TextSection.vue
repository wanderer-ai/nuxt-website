<template>

  <section :id="id" class="bg-white py-24 lg:py-48 bg-cover md:bg-contain bg-no-repeat bg-left" v-bind:style="'background-image: url('+image+');'">
    <div class="container">
      <div class="flex flex-wrap justify-center xl:justify-start">
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



</style>
