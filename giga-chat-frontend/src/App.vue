<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { UserStore } from "@/stores/userStore";

const userStore = UserStore();
</script>

<template>


    <div class="container">
      <nav class="navbarContainer">
        <button><RouterLink to="/">Home</RouterLink></button>
        <button><RouterLink to="/createUser">Create User</RouterLink> </button>
        <button><RouterLink to="/room">Room</RouterLink></button>
        <span v-if="userStore.userName.length > 0">
      | Logged in as: {{ userStore.userName }}</span
        >
      </nav>
      <br />
      <RouterView />
    </div>
</template>
<style scoped>
 .container{
   display: flex;
   flex-direction: column;
 }
 .navbarContainer{
   display: flex;
   justify-content: center;
   padding: 2%;
   background: #181818;
   color: white;
 }
 a{
   color: hsla(160, 100%, 37%, 1);
   text-decoration: none;
 }
 nav button {
   padding: 1%;
   margin-right: 3%;
   background: #181818;
 }
</style>