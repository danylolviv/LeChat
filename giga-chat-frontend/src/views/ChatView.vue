<template>
  <h2>Send chat</h2>
  <input v-model="txtChatInput" v-on:input="typing" placeholder="Enter chat" /> <br />
  <button @click="sendChat">Send</button>
  <ul>
    <li v-for="(chat, index) in chatStore.isTyping" v-bind:key="index">
      {{chat}} is typing
    </li>
  </ul>
  <h2>{{chatStore.currentRoom}} chats:</h2>
  <ul>
    <li v-for="(chat, index) in chatStore.chats" v-bind:key="index">
      {{chat.user}} : {{chat.text}}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ChatStore } from "@/stores/chatStore";
import { ref } from "vue";
import { UserStore } from "@/stores/userStore";
const txtChatInput = ref("");

const chatStore = ChatStore();
const userStore = UserStore();
chatStore.getMessages();
chatStore.updateTyping();
function sendChat(){
  chatStore.sendMessage({
    user: userStore.userName,
    text: txtChatInput.value,
  });
}

function typing(){
  chatStore.isTypingText({
    user: userStore.userName,
    text: txtChatInput.value,
  });
}
</script>

<style scoped>

</style>