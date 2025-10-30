<template>
  <el-container class="h-screen pointer-events-none">
    <!--  头部导航条  -->
    <el-header class="flex items-center justify-between" height="120px">
      <!-- LOGO -->
      <div class="h-20 w-50 flex items-center justify-right">
        <ShinyText
          text="BanaPeach"
          :disabled="false"
          :speed="3"
          class="text-[22px]"
        />
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
        class="pointer-events-auto  "
      />
      <!-- display: flex：让父容器启用弹性布局 -->
      <!-- justify-content: center：主轴居中（默认是水平）-->
      <!-- align-items: center：交叉轴居中（垂直）-->

      <!-- 布局占位 -->
      <div class="h-20 w-50"/>
    </el-header>

    <el-main> </el-main>
    <el-footer> </el-footer>
  </el-container>
</template>

<script setup lang="ts">
  import GooeyNav from '@/components/vue-bits/components/GooeyNav/GooeyNav.vue'
  import ShinyText from '@/components/vue-bits/text/ShinyText/ShinyText.vue'
  import { ref } from 'vue'

  const particleCount = ref(15)
  const timeVariance = ref(300)
  const particleR = ref(100)

  const navItems = [
    { label: '首页', href: null },
    { label: '关于', href: null },
    { label: '博客', href: null },
    { label: '作品集', href: null },
    { label: '项目', href: null },
    { label: '工具', href: null },
    { label: '联系', href: null }
  ]
</script>

