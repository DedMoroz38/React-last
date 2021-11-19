import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { chatsReducer, messageReducer } from './chats';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { gistsReducer } from './gits/reducer'
import { persistStore, persistReducer } from 'redux-persist'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    chats: chatsReducer,
    messages: messageReducer,
    gists: gistsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
);


export const persistor = persistStore(store);