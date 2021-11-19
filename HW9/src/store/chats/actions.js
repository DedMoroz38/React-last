export const CREATE_CHAT = 'CREAETE_CHAT';
export const REMOVE_CHAT = 'REMOVE_CHAT';
export const ADD_MESSAGE = 'ADD_MESSAGE';

export const createChat = (chat_name) => ({
    type: CREATE_CHAT,
    payload: chat_name,
})

export const removeChat = (chatId) => ({
    type: REMOVE_CHAT,
    payload: chatId,
})

export const addMessage = (chatId, obj) => ({
    type: ADD_MESSAGE,
    payload: { chatId, obj },
})


