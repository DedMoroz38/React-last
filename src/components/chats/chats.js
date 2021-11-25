import { chatsConnect } from '../../connect/chats/index.js';
import img from '../../images/trash.svg';
import { NavLink } from 'react-router-dom';
import { nanoid } from 'nanoid';
import firebase from 'firebase';
import { useParams } from 'react-router-dom';
import { useRef } from 'react';

let NewMessage = '';
function Chats({ chats, addChat, removeChat }) {
    const inputEl = useRef(null);
    const db = firebase.database();
    const ChatName = (event) => {
        NewMessage = event.target.value;
    };

    const AddChat = () => {
        if (NewMessage.length === 0) {
            return;
        } else {
            const id = chats.chats.length;
            const NewChat = {
                name: NewMessage,
                id: id
            }
            addChat(NewChat);
            db.ref("chats").child(id).push(NewChat);
        }
        inputEl.current.value = '';
    };
    const RemoveChat = (id) => {
        removeChat(id);
        var adaRef = firebase.database().ref(`chats/${id}`);
        adaRef.remove()
    }


    return (
        <div className="chats">
            <h2>Chats</h2>
            <div className="chats-adder">
                <input ref={inputEl} type="text" onChange={ChatName} placeholder='Новый чат...' />
                <button onClick={() => AddChat()}>+</button>
            </div>
            <ul className='chat-list'>
                {chats.chats.map((item) => (
                    <NavLink key={item.id}
                        to={`/chats/${item.id}`}
                        className='chat-box'>
                        <p>{item.name}</p>
                        <button onClick={() => RemoveChat(item.id)}><img src={img} alt='delete' /></button>
                    </NavLink>
                ))}
            </ul>
        </div>
    );
}
export const ChatList = chatsConnect(Chats);
