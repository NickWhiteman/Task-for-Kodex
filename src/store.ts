import { applyMiddleware, combineReducers, createStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { appReducer } from "./reducer";
import { rootSaga } from "./rootSaga";
import { IAppState } from "./types";

export interface IRootState {
  appStore: IAppState
}

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore<IRootState, any, any, any>(
  combineReducers({
    appStore: appReducer
  }),
  applyMiddleware(...middleware)
);

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;