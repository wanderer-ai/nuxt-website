<template>
  <section v-bind:class="'pt-24 pb-12 md:py-24'">
    <div class="container text-center">

      <div class="relative round-header">
        <div class="round-header--center">
          <div v-for="n in edgeCount" v-bind:key="n" :class="'round-header--edge border-'+color" :style="'transform: rotate('+(n*edgeAngle)+'deg)'"></div>
        </div>
        <span :class="'text-4xl round-header--circle bg-'+color+' hover:bg-'+color+'-700 '">
          <span v-if="header" :class="'round-header--text text-white'">{{header}}</span>
        </span>
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
      edgeCount: {
        type: Number,
        default: 3
      },
      edgeAngle: {
        type: Number,
        default: 190
      },
    }
  }

</script>


<style>

.round-header {
  display: inline-block;
  position: relative;
  z-index:999;
}

.round-header--circle {
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
  max-width: 300px;
}

.round-header--circle:before {
  content:'';
  display:inline-block;;
  vertical-align:middle;
  padding-top:100%;
}
.round-header--text {
  display:inline-block;
  position:relative;
  vertical-align:middle;
}

.round-header--center {
  height:0;
  width:0;
  position:absolute;
  top:50%;
  left:50%;
  transform: translateX(-50%) translateY(-50%);
}

.round-header--edge {
  position:relative;
  /* opacity:0; */
  transition: all 0.3s ease-in-out;
  width:1000px;
  height:0px;
  border-width:2px;
  border-style:dashed;
  transform-origin: top left;
}

</style>
