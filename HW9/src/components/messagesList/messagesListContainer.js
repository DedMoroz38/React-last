import { useParams } from 'react-router-dom';
import img from '../../images/send.svg';
import { useRef } from 'react';
import { chatsConnect } from '../../connect/chats/index.js';
import { useDispatch } from "react-redux";
import { nanoid } from 'nanoid';
import { MessagesListPresentational } from './messagesList';
import firebase from "firebase";

let NewMessage = '';
const AuthorName = 'Author';
export const MessagesList = ({ chats, addMessage, messages }) => {
    const db = firebase.database();
    const inputEl = useRef(null);
    const { chatId } = useParams();
    // const post = chats.chats.find(chat => chat.id === chatId);
    let messageList = [];
    if (messages.messages[chatId] !== undefined) {
        messageList = messages.messages[chatId];
    }
    const dispatch = useDispatch();

    const NewMessageFc = (event) => {
        NewMessage = event.target.value;
    }
    const AddMessage = () => {
        if (NewMessage.length !== 0) {
            const a = addMessageWithThunk(chatId, NewMessage, AuthorName);
            dispatch(a);
            NewMessage = '';
        }
    }
    const inputUpdate = () => {
        inputEl.current.value = '';
        inputEl.current.focus();
    }





    function addMessageWithThunk(chatId, message, authorName) {
        return dispatch => {
            const id = nanoid();
            addMessage(chatId, { authorName: authorName, message: message, key: id });
            const dbObj = { authorName: authorName, message: message, key: id }
            db.ref("messages").child(chatId).push(dbObj);
            const botMessage = 'Hi!';
            const botName = 'Bot';
            const botId = nanoid();
            setTimeout(() => addMessage(chatId, { authorName: botName, message: botMessage, key: botId }), 2000);
        }
    }




    return (
        <MessagesListPresentational
            NewMessageFc={NewMessageFc}
            AddMessage={AddMessage}
            img={img}
            messageList={messageList}
            ref={inputEl}
            inputUpdate={inputUpdate}
        />
    );
}
export const Messages = chatsConnect(MessagesList)
