<template>
  <div class="container">
    <h2>Send chat</h2>

    <div class="chatHeader">
      <strong>{{chatStore.currentRoom}} chats:</strong>
      <strong class="justTyping" >Typing:</strong>
      <div v-for="(chat, index) in chatStore.isTyping" v-bind:key="index">
        <strong class="typingName">{{chat}}...</strong>
      </div>
    </div>

    <div class="chatContainer" >
      <div class="messageContainer" v-for="(chat, index) in chatStore.chats" v-bind:key="index">
        <strong class="name">{{chat.user}}</strong>
        <p class="message">{{chat.text}}</p>
      </div>
    </div>
    <input v-model="txtChatInput" v-on:input="typing" placeholder="Enter chat" /> <br />
    <button @click="sendChat">Send</button>
  </div>
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
  txtChatInput.value = ''
}

function typing(){
  chatStore.isTypingText({
    user: userStore.userName,
    text: txtChatInput.value,
  });
}
</script>

<style scoped>
.typingName{
  color: hsla(160, 100%, 37%, 1);
}

.justTyping{
  margin-left: 40%;
}


.chatHeader{
  display: flex;
  flex-direction: row;
  align-items: center;

  background: #26343e;
  width: 50%;
  height: 60px;
  padding-left: 20px;
  color: #868585;
}

.name{
  color: hsla(160, 100%, 37%, 1);
  opacity: 0.7;
}

.message{
  margin-bottom: 0;
}

.chatContainer{
  overflow: scroll;
  height: 400px;
  width: 50%;
  background: #2c3e50;
  border-radius: 15px 15px 15px 0px;
  overflow-x: hidden;
  padding-bottom: 20px;
}
.messageContainer{
  margin: 7px;
  padding: 5px 15px 3px 5px ;
  height: fit-content;
  width: fit-content;
  min-width: 200px;
  border-radius: 5px 5px 5px 0px;
  background: #181818;
 color: white;
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
  width: 50%;
  border-color: hsla(160, 100%, 37%, 1);
  background: #2c3e50;
  color: hsla(160, 100%, 37%, 1);
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: hsla(160, 100%, 37%, 1);
  opacity: 0.4; /* Firefox */
}

button{
  width: 20%;
  margin-left: 15%;
  padding: 1%;
  margin-right: 3%;
  background: #181818;
  color: hsla(160, 100%, 37%, 1);
  text-decoration: none;
}
</style>