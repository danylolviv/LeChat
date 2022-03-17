import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CreateUser from "../views/CreateUser.vue";
import RoomView from "../views/RoomView.vue";
import ChatView from "../views/ChatView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/chat/:name",
      name: "Chat",
      component: ChatView,
    },
    {
      path: "/room",
      name: "Room",
      component: RoomView,
    },
    {
      path: "/createUser",
      name: "CreateUser",
      component: CreateUser,
    },
  ],
});

export default router;
