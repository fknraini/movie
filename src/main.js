import App from "./App.vue";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Movie from "@/views/Movie.vue";

import "./css/main.css";
import "bootstrap/dist/css/bootstrap.css";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/movies",
    name: "Movie",
    component: Movie,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
createApp(App).use(router).mount("#app");
