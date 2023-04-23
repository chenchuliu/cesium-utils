<template>
  <div id="cesiumContainer"></div>
</template>


<script setup lang="ts">
import { Viewer, Ion } from 'cesium';
import { onMounted, ref, markRaw } from 'vue';
import { useMapStore } from '@/store/map';
import { accessToken } from '@/config/cesiumConfig'
Ion.defaultAccessToken = accessToken

const containerRef = ref('cesiumContainer')
const mapStore = useMapStore()

onMounted(() => {
  const viewer = new Viewer(containerRef.value)
  const rawViewer = markRaw(viewer)
  mapStore.setViewer(rawViewer)
})
</script>

<style >
#cesiumContainer {
  width: 100vw;
  height: 100vh;
}
</style>