<template>

    <div class="vertex">

      <div class="vertex--center">
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
    }
  }

</script>


<style>

.vertex {
  display: block;
  position: absolute;
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
}

</style>
