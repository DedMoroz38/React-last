import { useParams } from 'react-router-dom';
import img from '../../images/send.svg';
import { chatsConnect } from '../../connect/chats/index.js';
import { useDispatch } from "react-redux";
import { nanoid } from 'nanoid';

let NewMessage = '';
const AuthorName = 'Author';
const MessagesList = ({ chats, addMessage, messages }) => {
    const { chatId } = useParams();
    const post = chats.chats.find(chat => chat.id === chatId);
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
        <div className='message-box'>
            <div className='message-name'>
                <h3>Name</h3>
            </div>
            <div className='message-area'>
                {messageList.map((item) => (
                    <div key={item.key}>
                        <p className='AuthorName'>{item.authorName}</p>
                        <p>{item.message}</p>
                    </div>
                ))}
            </div>
            <div className='message-send'>
                <input
                    autoFocus
                    placeholder='Сообщение...'
                    onChange={NewMessageFc}
                ></input>
                <button onClick={AddMessage}>
                    <img src={img} alt='send' />
                </button>
            </div>
        </div>
    );
}
export const Messages = chatsConnect(MessagesList);