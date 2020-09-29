<template>
  <section v-bind:class="'bg-'+color+' py-12 md:py-24'">
    <div class="container">

      <h2 v-if="header" class="text-center text-white text-6xl uppercase">{{header}}</h2>

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
      }
    }
  }

</script>


<style>



</style>
