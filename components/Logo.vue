<template>
  <section v-bind:class="">
    <div class="z-40 container text-center">

      <div class="relative round-logo">

        <div class="round-logo--center">
          <div v-for="n in edgeCount" v-bind:key="n" :class="'round-logo--edge border-'+color" :style="'transform: rotate('+(n*edgeAngle)+'deg)'"></div>
        </div>
        
        <span :class="'text-4xl round-logo--circle bg-'+color+' hover:bg-'+color+'-700 '">
          <span :class="'round-logo--text text-'+textColor">
            <h1 v-if="header" class="text-4xl md:text-6xl uppercase">{{header}}</h1>
            <div v-if="subheader" class="mb-6 text-xl md:text-2xl uppercase">{{subheader}}</div>
          </span>
        </span>

        <slot/>

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
      subheader: {
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

.round-logo {
  display: inline-block;
  position: relative;
  z-index:999;
}

@screen md {
  .round-logo {
    margin-top: -50%;
  }
}

.round-logo--circle {
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
}

.round-logo--circle:before {
  content:'';
  display:inline-block;;
  vertical-align:middle;
  padding-top:100%;
}
.round-logo--text {
  display:inline-block;
  position:relative;
  vertical-align:middle;
}

.round-logo--center {
  height:0;
  width:0;
  position:absolute;
  top:50%;
  left:50%;
  transform: translateX(-50%) translateY(-50%);
}

.round-logo--edge {
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
