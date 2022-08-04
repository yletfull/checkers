import { combineReducers } from "redux";
import { CheckersReducer } from "./checkersReducer";
import { OptionsReducer } from "./optionsReduces";

export const rootReducer = combineReducers({
    checkers: CheckersReducer,
    options: OptionsReducer,
})

export type RootState = ReturnType<typeof rootReducer>