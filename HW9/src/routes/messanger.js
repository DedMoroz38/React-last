import Header from '../components/header/header';
import { ChatList } from '../components/chats/chats.js';
import { Messages } from '../components/messagesList/messagesListContainer';
import { Routes, Route } from 'react-router-dom';


export const Messager = () => {
    return (
        <div>
            <Header />

            <div className='top'>
                <div className='container'>
                    <div className='main-box'>
                        <ChatList />
                        <Routes>
                            <Route path="/chats/:chatId" element={<Messages />} />
                        </Routes >
                    </div>
                </div>
            </div>
        </div >
    );
}
