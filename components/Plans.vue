<template>

  <section class="plans relative bg-white mb-48" >

    <!-- <vertex color="yellow" :edgeCount="5" :edgeAngle="110" :edgeLength="200" :size="100" class="z-10" style="bottom:50%;left:50%;"/> -->

    <div class="relative z-20 plans--clip">
      <div class="container relative">

        <div class="-px-3 flex flex-wrap justify-center lg:justify-start items-stretch">

          <div class="px-3 w-full lg:w-1/3 text-center mb-8 lg:mb-0">
            <div class="px-8 lg:px-12 bg-grey h-full text-white py-12 py-12 lg:py-48">
              <h2 class="uppercase text-2xl md:text-4xl pb-4"><icon name="heart" scale="2"></icon> Free Forever</h2>
              <div class="text-lg">
                <ul class="mb-8">
                  <li><icon name="check" scale="1"></icon> No <strong>registration</strong></li>
                  <li><icon name="check" scale="1"></icon> No <strong>payments</strong></li>
                  <li><icon name="check" scale="1"></icon> <strong>Build</strong> bots on Wanderer.ai</li>
                  <li><icon name="check" scale="1"></icon> <strong>Run</strong> bots on Wanderer.ai</li>
                  <li><icon name="check" scale="1"></icon> <strong>Download and share</strong> your bots</li>
                </ul>
                <page-button bgColor="white" textColor="black" href="https://wanderer.ai/builder">Start building</page-button>
              </div>
            </div>
          </div>

          <div class="px-3 w-full lg:w-1/3 text-center mb-8 lg:mb-0">
            <div class="px-8 lg:px-12 bg-gradient-to-br from-orange to-yellow h-full text-white py-12 lg:py-48">
              <h2 class="uppercase text-2xl md:text-4xl pb-4 break-long-words"><icon name="crown" scale="2"></icon> Professional</h2>
              <div class="text-lg">
                <ul class="mb-8">
                  <li><icon name="check" scale="1"></icon> No <strong>registration</strong></li>
                  <li><icon name="check" scale="1"></icon> <strong>Free minor updates and bug fixes</strong></li>
                  <li><icon name="check" scale="1"></icon> Run <strong>unlimited Bots</strong> on a single Domain or inside a single App</li>
                </ul>
                <page-button bgColor="white" textColor="black" href="#">Available soon</page-button>
              </div>
            </div>
          </div>

          <div class="px-3 w-full lg:w-1/3 text-center">
            <div class="px-8 lg:px-12 bg-grey h-full text-white py-12 lg:py-48">
              <h2 class="uppercase text-2xl md:text-4xl pb-4"><icon name="rocket" scale="2"></icon> Enterprise</h2>
              <div class="text-lg">
                <ul class="mb-8">
                  <li><icon name="check" scale="1"></icon> No <strong>registration</strong></li>
                  <li><icon name="check" scale="1"></icon> <strong>Free minor updates and bug fixes</strong></li>
                  <li><icon name="check" scale="1"></icon> Integrate <strong>the builder</strong> within your services and apps</li>
                </ul>
                <page-button bgColor="white" textColor="black" href="#">Available soon</page-button>
              </div>
            </div>
          </div>

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
import '~/node_modules/vue-awesome/icons/rocket'
import PageButton from '~/components/Button.vue'

export default {
  components: {
    Icon, Vertex, PageButton
  }
}

</script>


<style>

.plans--clip {
  -webkit-clip-path: polygon(0 2%, 100% 0, 100% 100%, 0 98%);
  clip-path: polygon(0 2%, 100% 0, 100% 100%, 0% 98%);
}

@screen lg {
  .plans--clip {
    -webkit-clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 85%);
    clip-path: polygon(0 15%, 100% 0, 100% 100%, 0% 85%);
  }
}

</style>
