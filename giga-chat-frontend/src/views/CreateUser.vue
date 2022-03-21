<template>
  <div class="container">
    <h5 >User details</h5>
    <input v-model="inputName" placeholder="Enter name" /> <br />
    <input v-model="inputEmail" placeholder="Enter email" /><br />
    <input type="password" v-model="inputPassword" placeholder="Enter password" /><br />
    <button @click="handleCreateUser">Create</button>
  </div>

</template>

<script setup lang="ts">
import { UserStore } from "../stores/userStore";
import { ref } from "vue";

const userStore = UserStore();
const inputName = ref("");
const inputEmail = ref("");
const inputPassword = ref("");

function handleCreateUser() {
  userStore.createUser(inputName.value, inputEmail.value, inputPassword.value);
}
</script>

<style scoped>

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
.container{
  border-radius: 15px;
  background: #181818;
  padding: 5%;
}

h5{
  color: white;
}

button{
  width: 50%;
  padding: 1%;
  margin-right: 3%;
  background: #181818;
  color: hsla(160, 100%, 37%, 1);
  text-decoration: none;
}


</style>
