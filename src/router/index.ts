import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UploadVideoViewVue from '@/views/UploadVideoView.vue'
import ListViewVue from '@/views/ListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/video-list',
      name: 'video-list',
      component: ListViewVue
    },
    {
      path: '/upload-video',
      name: 'upload',
      component: UploadVideoViewVue
    },
  ]
})

export default router
