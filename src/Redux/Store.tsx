import { rootReducer } from "./Reducers";
import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)

  
  export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
  })
  
  export const persistor = persistStore(store)


// import { rootReducer } from "./Reducers";
// import { configureStore } from "@reduxjs/toolkit";

// export const store = configureStore({reducer : rootReducer})