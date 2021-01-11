<template>
  <section class="circle-section py-24">
    <div class="z-40 container text-center">

      <div class="relative circle-section--wrapper">

        <div class="circle-section--center">
          <div v-for="n in edgeCount" v-bind:key="n" :class="'circle-section--edge { border-'+color" :style="'transform: rotate('+(n*edgeAngle)+'deg)'"></div>
        </div>

        <span :class="'circle-section--circle bg-'+color">
          <span :class="'circle-section--text text-center'">

            <slot/>

          </span>

        </span>

      </div>

    </div>

    <div class="circle-section--buttons">
      <slot name="buttons" />
    </div>

  </section>
</template>

<script>

  export default {

    props: {
      id: {
        type: String,
        default: ''
      },
      color: {
        type: String,
        default: 'yellow'
      },
      edgeCount: {
        type: Number,
        default: 3
      },
      edgeAngle: {
        type: Number,
        default: 220
      }
    }
  }

</script>

<style>

.circle-section {
  position: relative;
}

.circle-section--wrapper {
  display: inline-block;
  position: relative;
  z-index:998;
}

.circle-section--circle {
  text-decoration: none;
  border-style: none;
  border-radius: 100%;
  display: inline-block;
  text-align: center;
  outline: none;
  text-align: center;
  padding:0;
  position: relative;
  padding:3rem;
  max-width: 50%;
}

.circle-section--circle:before {
  content:'';
  display:inline-block;;
  vertical-align:middle;
  padding-top:100%;
}

.circle-section--text {
  display:inline-block;
  position:relative;
  vertical-align:middle;
}

.circle-section--center {
  height:0;
  width:0;
  position:absolute;
  top:50%;
  left:50%;
  transform: translateX(-50%) translateY(-50%);
}

.circle-section--edge {
  position:relative;
  /* opacity:0; */
  transition: all 0.3s ease-in-out;
  width:1000px;
  height:0px;
  border-width:2px;
  border-style:dashed;
  transform-origin: top left;
}

.circle-section--buttons {
  position:absolute;
  bottom:0;
  left:50%;
  transform: translateX(-50%);
  z-index:999;
}

</style>
