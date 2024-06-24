import {combineReducers, createStore} from "redux";
import {counterSettingReducer} from "./counterSettingReducer";

const rootReducer = combineReducers({
    count: counterSettingReducer
})

export type AppRootCounterStateType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);

// @ts-ignore
window.store = store