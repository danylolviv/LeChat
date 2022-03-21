<template>
<div class="container">
  <input v-model="txtRoomListener" placeholder="Enter room name" /> <br />
   <button class="createRoom">
     <router-link v-bind:to="'/chat/' + txtRoomListener" @click="createRoom">Create room</router-link>
   </button>
  <div class="roomContainer" >
    <RouterLink class="roomBtn" v-bind:to="'/chat/' + room.name"  v-for="(room, index) in chatStore.listOfRooms"
                  @click="joinRoom(room.name)" v-bind:key="index">
        <button class="but">{{ room.name }}</button>
      </RouterLink>
  </div>
</div>

</template>

<script setup lang="ts">
import { ChatStore } from "@/stores/chatStore";
import { ref } from "vue";

const chatStore = ChatStore();
const txtRoomListener = ref("");
chatStore.sendRoomRequest();

function joinRoom(name: string){
  chatStore.joinChat(name);
}

function createRoom(){
  chatStore.joinChat(txtRoomListener.value)
}
</script>

<style scoped>
.createRoom{
  background: #c5c5c5;
  color: white;
}
.roomBtn{
  padding: 20px;
  border-radius: 10px;
}

.but{
  width: fit-content;
  background: #4d4343;
  border-color: hsla(160, 100%, 37%, 1);
}

.roomContainer{
  width: 60%;
  display: flex;
  justify-content: flex-start;
}

.container{
  border-radius: 15px;
  padding: 2%;
  height: auto;
  min-height: 650px;
  background: #181818;
  color: white;
}

input{
  width: 40%;
  border-color: hsla(160, 100%, 37%, 1);
  background: #2c3e50;
  color: hsla(160, 100%, 37%, 1);
}

button{
  width: 20%;
  padding: 1%;
  margin-right: 3%;
  background: #181818;
  color: hsla(160, 100%, 37%, 1);
  text-decoration: none;
  border-color: aqua;
}
a{
  color: hsla(160, 100%, 37%, 1);
  text-decoration: none;
}
</style>
