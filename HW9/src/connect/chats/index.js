import { connect } from "react-redux";
import { getChats, createChat, removeChat, addMessage } from "../../store/chats";


const mapStateToProps = (state) => ({
    chats: getChats(state),
    messages: state.messages,
})

const mapDispatchToProps = (dispatch) => ({
    addChat(chat) {
        return dispatch(createChat(chat));
    },
    removeChat(chatId) {
        return dispatch(removeChat(chatId));
    },
    addMessage(chatId, message) {
        return dispatch(addMessage(chatId, message));
    }
})


export const chatsConnect = connect(mapStateToProps, mapDispatchToProps);