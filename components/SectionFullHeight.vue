<template>
  <section class="section-full-height" v-bind:style="{ 'minHeight': elementHeight }">
    <slot></slot>
  </section>
</template>

<script>

  export default {
    data: function(){
      return {
        elementHeight: '100vh',
        oldInnerWidth: 0,
        oldInnerHeight: 0
      };
    },
    mounted: function () {
      // Add resize event
      window.addEventListener('resize', this.handleResize)
      this.handleResize();
    },
    beforeDestroy: function () {
      // Remove resize event
      window.removeEventListener('resize', this.handleResize)
    },
    methods:{
      handleResize: function(){
        // Only resize the height if the height and the width of the screen has changed.
        // Only if the width and height has changed the screen orientation has changed.
        if(window.innerWidth!==this.oldInnerWidth&&window.innerHeight!==this.oldInnerHeight){
          this.oldInnerWidth = window.innerWidth;
          this.oldInnerHeight = window.innerHeight;
          this.elementHeight = window.innerHeight+'px';
        }
      }
    }

  }

</script>


<style>

  .section-full-height{
    min-height: 100vh;/* noscript fallback */
    position: relative;
    overflow: hidden;
  }

</style>
