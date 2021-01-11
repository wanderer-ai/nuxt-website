<template>
  <div :class="'page-devider page-devider--'+position">

    <div class="page-devider--overlay">

      <svg v-if="position=='bottom'" class="page-devider--svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon fill="white" points="0,100 100,0 100,100"/>
      </svg>

      <svg v-if="position=='top'" class="page-devider--svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon fill="white" points="0,0 100,0 100,100"/>
      </svg>

    </div>

    <!-- <div :class="'page-devider--circle bg-'+circleColor">
      <div class="page-devider--circle-center">
        <div v-for="n in edgeCount" v-bind:key="n" :class="'page-devider--circle-edge border-'+circleColor" :style="'transform: rotate('+(n*edgeAngle)+'deg)'"></div>
      </div>
    </div> -->

  </div>
</template>

<script>

  export default {

    props: {
      id: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      position: {
        type: String,
        default: 'bottom'
      },
      // circleColor: {
      //   type: String,
      //   default: 'yellow'
      // },
      // edgeCount: {
      //   type: Number,
      //   default: 3
      // },
      // edgeAngle: {
      //   type: Number,
      //   default: 150
      // }
    }
  }

</script>

<style>

.page-devider {
  padding-top:5vw;
}

.page-devider--bottom {
  padding-top: 5vw;
}

.page-devider--top {
  padding-bottom: 5vw;
}

.page-devider--overlay {
  width: 100%;
  height: 10vw;
  position: absolute;
}

.page-devider--bottom .page-devider--overlay{
  bottom: 0;
}

.page-devider--top .page-devider--overlay{
  top: 0;
}

.page-devider--svg {
  width: 100%;
  height: 100%;
  /* set height to pixels if you want angle to change with screen width */
}

/* .page-devider--circle {
  z-index: 999;
  top:0%;
  left:50%;
  height:100px;
  width:100px;
  border-radius: 100%;
  position: absolute;
}

.page-devider--circle-center {
  height:0;
  width:0;
  position:absolute;
  top:50%;
  left:50%;
  transform: translateX(-50%) translateY(-50%);
}

.page-devider--circle-edge {
  position:relative;

  transition: all 0.3s ease-in-out;
  width:1000px;
  height:0px;
  border-width:2px;
  border-style:dashed;
  transform-origin: top left;
} */

</style>
