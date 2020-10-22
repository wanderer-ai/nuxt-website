<template>

    <div class="relative round-button">
      <div class="round-button--center">
        <div v-for="n in edgeCount" v-bind:key="n" :class="'round-button--edge border-'+bgColor" :style="'transform: rotate('+(n*edgeAngle)+'deg)'"></div>
      </div>
      <a :href="url" :target="target" :class="'grow-on-hover text-xl round-button--circle bg-'+bgColor+' hover:bg-'+bgColor+'-700 '">
        <span :class="'round-button--text text-'+textColor">{{label}}</span>
      </a>
    </div>

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
      },
      target: {
        type: String,
        default: '_self'
      },
      edgeCount: {
        type: Number,
        default: 3
      },
      edgeAngle: {
        type: Number,
        default: 150
      },
    }
  }

</script>

<style lang="postcss">

  .round-button {
    display: inline-block;
    position: relative;
    z-index:999;
  }

  .round-button--circle {
    text-decoration: none;
    border-style: none;
    border-radius: 100%;
    display: inline-block;
    text-align: center;
    outline: none;
    cursor: pointer;
    text-align: center;
    padding:0;
    position: relative;
    -webkit-box-shadow: 0px 0px 10px 0px rgba(48,48,48,1);
    -moz-box-shadow: 0px 0px 10px 0px rgba(48,48,48,1);
    box-shadow: 0px 0px 10px 0px rgba(48,48,48,1);
  }

  .round-button--circle:before {
    content:'';
    display:inline-block;;
    vertical-align:middle;
    padding-top:100%;
  }
  .round-button--text {
    display:inline-block;
    position:relative;
    vertical-align:middle;
    max-width:90%;
  }

  .grow-on-hover {
    transition: all 0.3s ease-in-out;
  }
  .grow-on-hover:hover, .grow-on-hover:focus, .grow-on-hover:active {
    transform: scale(1.1);
  }

  .round-button--center {
    height:0;
    width:0;
    position:absolute;
    top:50%;
    left:50%;
    transform: translateX(-50%) translateY(-50%);
  }

  .round-button--edge {
    position:relative;
    /* opacity:0; */
    transition: all 0.3s ease-in-out;
    width:1000px;
    height:0px;
    border-width:2px;
    border-style:dashed;
    transform-origin: top left;
  }

  /* .round-button:hover .round-button--edge {
    opacity:1;
  } */

</style>
