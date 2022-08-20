import { combineReducers } from "redux";
import { OptionsReducer } from "./optionsReduces";

export const rootReducer = combineReducers({
    options: OptionsReducer,
})

export type RootState = ReturnType<typeof rootReducer>