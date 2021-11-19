export const getChats = (state) => state.chats || [];
export const getChatList = (state) => getChats(state).chats;

// export const getMessage = (state) => state.messages || {};
// export const getMessageList = (state) => getChats(state).messages;