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
    <el-container class="h-screen pointer-events-none">
      <!--  头部导航条  -->
      <el-header class="flex items-center justify-between" height="120px">
        <!-- LOGO -->
        <div class="h-20 w-50 flex items-center justify-right">
          <ShinyText text="BanaPeach" :disabled="false" :speed="3" class="text-[22px]" />
        </div>
        <!-- 导航条 -->
        <GooeyNav
          :items="navItems"
          :animation-time="500"
          :particle-count="particleCount"
          :particle-distances="[90, 0]"
          :particle-r="particleR"
          :time-variance="timeVariance"
          :initial-active-index="0"
          :colors="[1, 2, 3, 1, 2, 3, 1, 4]"
          class="pointer-events-auto"
        />
        <!-- display: flex：让父容器启用弹性布局 -->
        <!-- justify-content: center：主轴居中（默认是水平）-->
        <!-- align-items: center：交叉轴居中（垂直）-->

        <!-- 布局占位 -->
        <div class="h-20 w-50" />
      </el-header>
      <!-- 内容区 -->
      <el-main>
        <router-view/>
      </el-main>
      <!-- 页脚 -->
      <el-footer> </el-footer>
    </el-container>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import PixelBlast, {
    type PixelBlastVariant
  } from '@/components/vue-bits/backgrounds/PixelBlast/PixelBlast.vue'
  import GooeyNav from '@/components/vue-bits/components/GooeyNav/GooeyNav.vue'
  import ShinyText from '@/components/vue-bits/text/ShinyText/ShinyText.vue'

  // region 背景
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
  // endregion

  // region 导航条
  const particleCount = ref(15)
  const timeVariance = ref(300)
  const particleR = ref(100)

  const navItems = [
    { label: '首页', href: "/" },
    { label: '博客', href: "/blog" },
    { label: '作品集', href: "/portfolio" },
    { label: '项目', href: "/projects" },
    { label: '工具', href: "/tools" },
    { label: '关于', href: "/about" },
    { label: '联系', href: "/contact" },
  ]
  // endregion
</script>

<style scoped></style>
