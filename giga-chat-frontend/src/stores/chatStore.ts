import { defineStore } from "pinia";
import type { Chat } from "@/models/Chat";
import type { Room } from "@/models/Room";
import { ChatService } from "@/services/chat.service";

const chatService = new ChatService();

export const ChatStore = defineStore({
  id: "ChatStore",
  state: () => ({
    chats: [] as Chat[],
    currentRoom: "",
    listOfRooms: [] as Room[],
    isTyping: [] as string[],
  }),
  actions: {
    sendMessage(chat: Chat){
      chat.room = this.currentRoom;
      chatService.sendMessage(chat);
    },
    getMessages(){
      chatService.getMessage((data: Chat) => {
        this.chats.push(data);
      });
    },
    isTypingText(chat: Chat){
      chat.room = this.currentRoom;
      chatService.startTyping(chat);
    },
    updateTyping(){
      chatService.updateIsTyping((data: string[]) => {
        this.isTyping = [];
        data.forEach((user) => {
          this.isTyping.push(user);
        });
      });
    },
    joinChat(nameOfChat: string){
      this.chats = [
        { user: "System", text: "Hello, welcome !" },
        { user: "System", text: "To start chatting. Type in the field below" },
      ];
      const newRoom = {name: nameOfChat} as Room;
      this.currentRoom = nameOfChat;
      chatService.joinRoom(newRoom);
    },
    getAllChats(){
      chatService.getRooms((data: Room[]) => {
        this.listOfRooms = [];
        data.forEach((room) => {
          this.listOfRooms.push(room);
        });
      });
    },
    sendRoomRequest(){
      chatService.sendRoomsEmit();
      this.getAllChats();
    },
  },
});
