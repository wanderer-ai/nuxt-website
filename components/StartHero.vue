<template>
  <div :id="id" class="h-screen overflow-hidden relative">

    <div class="absolute h-full w-full bg-cover blur" style="background-image: url('/images/wanderer-builder.png');"></div>

    <div class="absolute h-full w-full blur hidden md:block">
      <video class="h-full w-full fit-cover" autoplay muted loop>
        <source src="/videos/wanderer-builder.webm" type="video/mp4">
      </video>
    </div>

    <div class="absolute h-full w-full bg-white opacity-75"></div>

    <div class="flex absolute h-full w-full items-center justify-center">
      <div class="container text-black text-center">
        <slot/>
      </div>
    </div>

  </div>
</template>

<script>

  export default {
    props: {
      id: {
        type: String,
        default: ''
      }
    }
  }

</script>

<style>



</style>
