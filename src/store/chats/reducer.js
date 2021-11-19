import { CREATE_CHAT, REMOVE_CHAT, ADD_MESSAGE } from "./actions";
import { nanoid } from "nanoid";

const inintialMessageState = {
    messages: {},
}

const initialState = {
    chats: [
    ],
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
            return {
                messages: newMessages
            }
        }
        default: {
            return state
        }
    }
}

