<template>
  <a :href="url" :class="'text-'+textColor+' bg-'+bgColor+' hover:bg-'+bgColor+'-700 font-bold py-2 px-4 rounded'">
    {{label}}
  </a>
</template>

<script>

  export default {
    props: {
      url: {
        type: String,
        default: ''
      },
      bgColor: {
        type: String,
        default: 'green'
      },
      textColor: {
        type: String,
        default: 'white'
      },
      label: {
        type: String,
        default: ''
      }
    }
  }

</script>


<style>



</style>
