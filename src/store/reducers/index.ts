import { combineReducers } from "redux";
import { CheckersReducer } from "./checkersReducer";

export const rootReducer = combineReducers({
    checkers: CheckersReducer,
})

export type RootState = ReturnType<typeof rootReducer>