import {combineReducers} from 'redux'
import { userReducer } from './userReducer'
import { todoReducer } from './toDoReducer'

export const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer,
})

export type RootState = ReturnType<typeof rootReducer>