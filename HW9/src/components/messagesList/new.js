// import firebase from 'firebase';
// import { useState, useEffect, useParams, useCallback } from 'react';


// export default function MessageFieldContainer() {
//     const { chatId } = useParams();
//     const chats = []

//     const [messages, setMessages] = useState([]);

//     const onAddMessage = useCallback(
//         (message) => {
//             firebase.database()
//                 .ref("messages")
//                 .child(chatId)
//                 .child(message.id)
//                 .set(message);
//         },
//         [chatId]
//     );

//     useEffect(() => {
//         firebase.database().ref("messages").child(chatId).on("value", (snapshot) => {
//             const newMessages = [];

//             snapshot.forEach(entry => {
//                 newMessages.push(entry.val());
//             });

//             setMessages(newMessages);
//         });
//     }, []);


//     if (!chatId) {
//         return (
//             <>
//                 <p chats={chats} chatId={null} onAddChat={() => { }} />
//             </>
//         );
//     }

//     if (!chats[chatId]) {
//         return <Redirect to="/nochat" />;
//     }

//     return (
//         <>
//             <header>Header</header>
//             <div>
//                 <div>
//                     <ChatList chatId={chatId} />
//                 </div>
//                 <div>
//                     <MessagesList messages={messages} />
//                     <Input onAddMessage={onAddMessage} />
//                 </div>
//             </div>
//         </>
//     );
// }