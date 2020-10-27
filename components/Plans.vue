<template>

  <section class="plans overflow-hidden bg-white bg-h-full bg-no-repeat bg-left" >
    <div class="">
      <div class="container">
        <div class="-px-3 flex flex-wrap justify-center lg:justify-start">

          <div class="px-3 mb-6 w-full lg:w-1/2">
            <div class="relative">
              <div class="absolute bg-grey opacity-50 h-full w-full rounded-xl"></div>
              <div class="relative p-6 lg:p-12">
                <h2 class="uppercase text-2xl">💕 Free</h2>
                <div class="text-lg">
                  <ul>
                    <li>✅ No <strong>registration</strong></li>
                    <li>✅ <strong>Build</strong> bots on Wanderer.ai</li>
                    <li>✅ <strong>Run</strong> bots on Wanderer.ai</li>
                    <li>✅ <strong>Download</strong> your bots</li>
                  </ul>
                </div>
                <link-button :edgeCount="2" :edgeAngle="110" class="mt-6" url="https://wanderer.ai/builder/" bg-color="red" text-color="white" label="Build now" />
              </div>
            </div>
          </div>

          <div class="px-3 mb-6 w-full lg:w-1/2">
            <div class="relative">
              <div class="absolute bg-grey opacity-50 h-full w-full rounded-xl"></div>
              <div class="relative p-6 lg:p-12">
                <h2 class="uppercase text-2xl">👑 Professional</h2>
                <div class="text-lg">
                  <ul>
                    <li>✅ No <strong>registration</strong></li>
                    <li>✅ <strong>Build</strong> bots on Wanderer.ai</li>
                    <li>✅ <strong>Run</strong> bots on Wanderer.ai</li>
                    <li>✅ <strong>Download</strong> your bots</li>
                    <li>✅ <strong>Website and App</strong> integration</li>
                  </ul>
                </div>
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
                    <li>✅ No <strong>registration</strong></li>
                    <li>✅ <strong>Build</strong> bots on Wanderer.ai</li>
                    <li>✅ <strong>Run</strong> bots on Wanderer.ai</li>
                    <li>✅ <strong>Download</strong> your bots</li>
                    <li>✅ <strong>Website and App</strong> integration</li>
                    <li>✅ <strong>Integrate</strong> the builder into <strong>your products</strong></li>
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

  import LinkButton from '~/components/LinkButton.vue'

  export default {
    components: {
      LinkButton
    }
  }

</script>


<style>


</style>
