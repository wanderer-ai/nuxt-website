<template>

  <section class="plans relative bg-white mb-48" >

    <!-- <vertex color="yellow" :edgeCount="5" :edgeAngle="110" :edgeLength="200" :size="100" class="z-10" style="bottom:50%;left:50%;"/> -->

    <div class="relative z-20 plans--clip">
      <div class="container relative">

        <div class="-px-3 flex flex-wrap justify-center lg:justify-start items-stretch">

          <div class="px-3 w-full lg:w-1/2">
            <div class="px-8 lg:px-12 bg-gradient-to-br from-green to-green-light h-full text-white py-48">
              <h2 class="uppercase text-4xl pb-4"><icon name="heart" scale="2"></icon> Free Forever</h2>
              <div class="text-lg">
                <ul>
                  <li><icon name="check" scale="1"></icon> No <strong>registration</strong></li>
                  <li><icon name="check" scale="1"></icon> <strong>Build</strong> bots on Wanderer.ai</li>
                  <li><icon name="check" scale="1"></icon> <strong>Run</strong> bots on Wanderer.ai</li>
                  <li><icon name="check" scale="1"></icon> <strong>Download</strong> your bots</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="px-3 w-full lg:w-1/2">
            <div class="px-8 lg:px-12 bg-gradient-to-br from-orange to-yellow h-full text-white py-48">
              <h2 class="uppercase text-4xl pb-4"><icon name="crown" scale="2"></icon> Professional</h2>
              <div class="text-lg">
                <ul>
                  <li><icon name="check" scale="1"></icon> No <strong>registration</strong></li>
                  <li><icon name="check" scale="1"></icon> <strong>Build</strong> bots on Wanderer.ai</li>
                  <li><icon name="check" scale="1"></icon> <strong>Run</strong> bots on Wanderer.ai</li>
                  <li><icon name="check" scale="1"></icon> <strong>Download</strong> your bots</li>
                  <li><icon name="check" scale="1"></icon> <strong>Website and App</strong> integration</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- <div class="px-3 mb-6 w-full lg:w-1/3">
            <div class="relative">
              <div class="absolute bg-grey opacity-50 h-full w-full rounded-xl"></div>
              <div class="relative p-6 lg:p-12">
                <h2 class="uppercase text-2xl">🚀 Enterprise</h2>
                <div class="text-lg">
                  <ul>
                    <li><icon name="check" scale="1"></icon> No <strong>registration</strong></li>
                    <li><icon name="check" scale="1"></icon> <strong>Build</strong> bots on Wanderer.ai</li>
                    <li><icon name="check" scale="1"></icon> <strong>Run</strong> bots on Wanderer.ai</li>
                    <li><icon name="check" scale="1"></icon> <strong>Download</strong> your bots</li>
                    <li><icon name="check" scale="1"></icon> <strong>Website and App</strong> integration</li>
                    <li><icon name="check" scale="1"></icon> <strong>Integrate</strong> the builder into <strong>your products</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </div> -->

        </div>
      </div>
    </div>
  </section>

</template>

<script>

import Vertex from '~/components/Vertex.vue'
import Icon from '~/node_modules/vue-awesome/components/Icon'
import '~/node_modules/vue-awesome/icons/check'
import '~/node_modules/vue-awesome/icons/heart'
import '~/node_modules/vue-awesome/icons/crown'

export default {
  components: {
    Icon, Vertex
  }
}

</script>


<style>

.plans--clip {
  -webkit-clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 85%);
  clip-path: polygon(0 15%, 100% 0, 100% 100%, 0% 85%);
}

</style>
