<template>
  <section :id="id" :class="'colored-section overflow-hidden bg-'+color+' py-12 md:py-24 lg:py-48'">
    <div class="container">
      <div class="flex flex-wrap justify-center lg:justify-end">
        <div :class="'w-full lg:w-1/2 text-'+textColor">
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
      textColor: {
        type: String,
        default: 'white'
      },
      id: {
        type: String,
        default: ''
      },
    }
  }

</script>


<style>

.colored-section {
  position: relative;
  /* -webkit-box-shadow: 0px 0px 10px 0px rgba(48,48,48,1);
  -moz-box-shadow: 0px 0px 10px 0px rgba(48,48,48,1);
  box-shadow: 0px 0px 10px 0px rgba(48,48,48,1); */
  z-index: 10;
}

</style>
