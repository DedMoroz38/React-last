import { useParams } from 'react-router-dom';
import img from '../../images/send.svg';
import { chatsConnect } from '../../connect/chats/index.js';
import { useDispatch } from "react-redux";
import { nanoid } from 'nanoid';
import { MessagesListPresentational } from './messagesList';

let NewMessage = '';
const AuthorName = 'Author';
export const MessagesList = ({ chats, addMessage, messages }) => {
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
        }
    }






    function addMessageWithThunk(chatId, message, authorName) {
        return dispatch => {
            addMessage(chatId, { authorName: authorName, message: message, key: nanoid() });
            const botMessage = 'Hi!';
            const botName = 'Bot';
            setTimeout(() => addMessage(chatId, { authorName: botName, message: botMessage, key: nanoid() }), 2000);
        }
    }




    return (
        <MessagesListPresentational
            NewMessageFc={NewMessageFc}
            AddMessage={AddMessage}
            img={img}
            messageList={messageList}
        />
    );
}
export const Messages = chatsConnect(MessagesList)
