import { CREATE_CHAT, REMOVE_CHAT, ADD_MESSAGE } from "./actions";
import { nanoid } from "nanoid";
import firebase from "firebase";
// import firebase from "firebase";

const config = ({
    apiKey: "AIzaSyA9jR5nfhJ2vvdJGZp4C8D7mZTC6YJIII8",
    authDomain: "messanger-9cfd0.firebaseapp.com",
    databaseURL: "https://messanger-9cfd0-default-rtdb.firebaseio.com",
    projectId: "messanger-9cfd0",
    storageBucket: "messanger-9cfd0.appspot.com",
    messagingSenderId: "81386173000",
    appId: "1:81386173000:web:2533380398753c22665e7d",
    measurementId: "G-LY946C6Y33"
});
firebase.initializeApp(config);


const db = firebase.database();
const dbChats = [];
db.ref("chats").on("value", (snapshot) => {
    snapshot.forEach((snap) => {
        console.log(snap.val());
        const key = Object.keys(snap.val())
        console.log(key);
        dbChats.push(snap.val()[`${key[0]}`]);
    });
});

const dbMessages = [];
db.ref("messages").on("value", (snapshot) => {
    snapshot.forEach((snap) => {
        const key = Object.keys(snap.val())
        console.log(key);
        console.log(snap.val());
    });
});


const inintialMessageState = {
    messages: {

    },
}

const initialState = {
    chats: dbChats,
}

const filterChatById = (targetId) => ({ id }) => targetId !== id;
export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_CHAT: {
            return {
                ...state,
                chats: [
                    ...state.chats,
                    {
                        id: nanoid(),
                        name: action.payload.name,
                    }
                ],
            }
        }
        case REMOVE_CHAT: {
            return {
                ...state,
                chats: state.chats.filter(filterChatById(action.payload)),
            }
        }
        default: {
            return state
        }
    }
}

export const messageReducer = (state = inintialMessageState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const { chatId, obj } = action.payload;
            const newMessages = { ...state.messages };
            newMessages[chatId] = [...(newMessages[chatId] || []), obj]
            console.log(newMessages);
            return {
                messages: newMessages
            }
        }
        default: {
            return state
        }
    }
}

