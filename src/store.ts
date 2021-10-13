import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./reducer";
import { IAppState } from "./types";

export interface IRootState {
  appStore: IAppState
}

const store = configureStore<IRootState>({
  reducer: {
    appStore: appReducer
  },
});

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;