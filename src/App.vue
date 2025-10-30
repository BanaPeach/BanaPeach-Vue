<template>
  <div class="relative p-0 w-screen h-screen overflow-hidden demo-container bg-black">
    <PixelBlast
      :variant="variant"
      :pixel-size="pixelSize"
      :color="color"
      :pattern-scale="patternScale"
      :pattern-density="patternDensity"
      :pixel-size-jitter="pixelSizeJitter"
      :enable-ripples="enableRipples"
      :liquid="liquid"
      :speed="speed"
      :edge-fade="edgeFade"
    />
  </div>
  <!-- 绝对定位到背景上面 -->
  <div class="absolute top-0 left-0 w-full h-full pointer-events-none">
    <Home />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import PixelBlast, {
    type PixelBlastVariant
  } from '@/components/vue-bits/backgrounds/PixelBlast/PixelBlast.vue'
  import Home from '@/views/home/Home.vue'

  const variant = ref<PixelBlastVariant>('square')
  const pixelSize = ref(4)
  const patternScale = ref(2)
  const patternDensity = ref(1)
  const pixelSizeJitter = ref(0)
  const enableRipples = ref(true)
  const liquid = ref(false)
  const speed = ref(0.5)
  const edgeFade = ref(0.25)
  const color = ref('#A7EF9E')
</script>
