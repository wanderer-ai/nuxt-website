<template>
  <div class="parallax">
    <slot></slot>
  </div>
</template>

<script>

  export default {
    data: function () {
      return {
        windowHeight: null,
        bodyHeight: null,
        documentPosY: null
      }
    },
    props: {
      direction: {
        type: String,
        default: 'up'
      },
      factor: {
        type: Number,
        default: 0.5
      }
    },
    mounted: function () {
      this.$nextTick(function () {

        window.addEventListener('scroll', this.adjustPosition)
        window.addEventListener('resize', this.adjustDocumentHeight)

        this.adjustDocumentHeight();
        this.adjustPosition();

      })
    },
    destroyed: function () {

      window.removeEventListener('scroll', this.adjustPosition)
      window.removeEventListener('resize', this.adjustDocumentHeight)

    },
    methods: {
      adjustDocumentHeight: function () {
        // Get the position from top relative to the document
        var bounding = this.$el.getBoundingClientRect()['top'];
        this.windowHeight = window.innerHeight;
        var body = document.body;
        var html = document.documentElement;
        this.bodyHeight = Math.max( body.scrollHeight, body.offsetHeight,
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
        var scroll = window.scrollY;
        this.documentPosY = bounding + scroll;
      },
      adjustPosition: function () {

        // Add the elements top position relativ to the window to the current scroll to get the position inside the document
        var scroll = window.scrollY;

        var parallaxValue = 0;

        if(this.direction=='up') {
          parallaxValue = (scroll-this.documentPosY+(this.windowHeight/2)-(this.$el.offsetHeight/2))*this.factor * -1 ;
        } else {
          parallaxValue = (scroll-this.documentPosY+(this.windowHeight/2)-(this.$el.offsetHeight/2))*this.factor;
        }

        this.$el.style['top'] = parallaxValue + 'px';

      }
    }
  }

</script>


<style>

.parallax {
  position: relative;
  top:0;
}

</style>
