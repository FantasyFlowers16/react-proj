import { ITodo, IUser } from "./types"

export interface UserState {
  users: IUser[],
  loading: Boolean,
  error: null | string,
  filterUsers: filterUserItem[],
  filterType: string,
  filterDirrection: boolean | null,
} 
export interface TodosState {
  todos: ITodo[],
  loading: Boolean,
  error: null | string,
  completedTodos: ITodo[],
  loadingCompleted: boolean,
  loadingUncompleted: boolean,
  uncompletedTodos: ITodo[],
  isTask: boolean,
  isWall: boolean,
} 
export interface  filterUserItem {
  name: string,
  id: number,
  type: string,
  filter:boolean;
}
