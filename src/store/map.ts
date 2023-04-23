import { defineStore } from 'pinia'
import type { Viewer } from 'cesium'

export interface MapStore {
  viewer: Viewer | null
}

export const useMapStore = defineStore({
  id: 'map',
  state: (): MapStore => ({
    viewer: null
  }),
  actions: {
    setViewer(viewer: Viewer) {
      this.viewer = viewer
    }
  }
})
