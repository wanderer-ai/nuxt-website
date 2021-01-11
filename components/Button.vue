<template>

  <a :href="url" :target="target" :class="'inline-block p-4 uppercase text-l bg-'+bgColor">
    <span :class="'text-'+textColor">
      <slot/>
    </span>
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
        default: 'white'
      },
      textColor: {
        type: String,
        default: 'black'
      },
      target: {
        type: String,
        default: '_self'
      },
    }
  }

</script>

<style lang="postcss">



</style>
