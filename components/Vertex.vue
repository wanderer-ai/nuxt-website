<template>

    <div class="vertex">

      <div :class="'vertex--center vertex--animate--'+animationDirection">
        <div v-for="n in edgeCount" v-bind:key="n" :class="'vertex--edge border-'+color" :style="'transform: rotate('+(startAngle+(n*edgeAngle))+'deg); width:'+(edgeLength+(n*100))+'px;'">
          <div :class="'vertex--child bg-'+color+' '" :style="'width:'+(size*0.5)+'px;height:'+(size*0.5)+'px;'" />
        </div>
      </div>

      <div :class="'vertex--circle bg-'+color+' '" :style="'width:'+size+'px;height:'+size+'px;'" />

    </div>

</template>

<script>

  export default {
    props: {
      color: {
        type: String,
        default: 'green'
      },
      size: {
        type: Number,
        default: 200
      },
      edgeLength: {
        type: Number,
        default: 300
      },
      edgeCount: {
        type: Number,
        default: 3
      },
      startAngle: {
        type: Number,
        default: 0
      },
      edgeAngle: {
        type: Number,
        default: 208
      },
      animationDirection: {
        type: String,
        default: 'clock'
      },
    }
  }

</script>


<style>

.vertex {
  display: block;
  position: absolute;
  transition: all 0.3s ease-in-out;
}

.vertex--animate--clock {
  -webkit-animation:spin 60s linear infinite;
  -moz-animation:spin 60s linear infinite;
  animation:spin 60s linear infinite;
}

.vertex--animate--counter {
  -webkit-animation:counterspin 60s linear infinite;
  -moz-animation:counterspin 60s linear infinite;
  animation:counterspin 60s linear infinite;
}

@-moz-keyframes spin {
  50% { -moz-transform: rotate(20deg); }
  100% { -moz-transform: rotate(0deg); }
}
@-webkit-keyframes spin {
  50% { -moz-transform: rotate(20deg); }
  100% { -moz-transform: rotate(0deg); }
}
@keyframes spin {
  50% { -moz-transform: rotate(20deg); }
  100% { -moz-transform: rotate(0deg); }
}

@-moz-keyframes counterspin {
  50% { -moz-transform: rotate(-20deg); }
  100% { -moz-transform: rotate(0deg); }
}
@-webkit-keyframes counterspin {
  50% { -moz-transform: rotate(-20deg); }
  100% { -moz-transform: rotate(0deg); }
}
@keyframes counterspin {
  50% { -moz-transform: rotate(-20deg); }
  100% { -moz-transform: rotate(0deg); }
}

.vertex--circle {
  text-decoration: none;
  border-style: none;
  border-radius: 100%;
  outline: none;
  position: relative;
}

.vertex--center {
  height:0;
  width:0;
  position:absolute;
  top:50%;
  left:50%;
  transform: translateX(-50%) translateY(-50%);
}

.vertex--edge {
  position:relative;
  transition: all 0.3s ease-in-out;
  height:0px;
  border-width:2px;
  border-style:dashed;
  transform-origin: top left;
}

.vertex--child {
  text-decoration: none;
  border-style: none;
  border-radius: 100%;
  outline: none;
  position: absolute;
  top:0px;
  right:0px;
  transform:translateX(50%) translateY(-50%);
  transition: all 0.3s ease-in-out;
}

.vertex:hover .vertex--child {
  border:5px solid #c334eb;
}

.vertex:hover .vertex--circle {
  border:5px solid #c334eb;
}

.vertex:hover .vertex--edge {
  border-color:#c334eb;
}

</style>
