<template>
  <section :id="id" v-bind:class="'bg-'+color+' py-12 md:py-24 lg:py-48'">
    <div class="container">
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/2"></div>
        <div class="w-full md:w-1/2 text-white">
          <h2 v-if="header" class="text-4xl uppercase">{{header}}</h2>
          <div class="text-xl">
            <slot></slot>
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
      color: {
        type: String,
        default: 'green'
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
