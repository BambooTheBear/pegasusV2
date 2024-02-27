// src/router/index.js or src/router/index.ts
import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import Analyze from "../views/Analyze.vue"

const routes = [
  { path: "/", component: Home },
  { path: "/analyze", component: Analyze },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
