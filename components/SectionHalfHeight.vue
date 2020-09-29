<template>
  <div class="section-half-height" v-bind:style="{ 'minHeight': elementHeight }">
    <slot></slot>
  </div>
</template>

<script>

  export default {
    data: function(){
      return {
        elementHeight: '50vh',
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
          this.elementHeight = (window.innerHeight/2)+'px';
        }
      }
    }

  }

</script>


<style>

  .section-half-height{
    min-height: 50vh;/* noscript fallback */
    position: relative;
  }

</style>
