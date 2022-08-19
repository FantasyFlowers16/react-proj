import * as H from "history";
import { ToDoActionsType, UserActionsType } from "../store/actions";


export interface RouteComponentProps<P> {
  match: match<P>;
  location: H.Location;
  history: H.History;
  staticContext?: any;
}

export interface match<P> {
  params: P;
  isExact: boolean;
  path: string;
  url: string;
}
export interface ICoords {
  lat:string,
  lng: string

}
export interface IAddress {
    street: string;
    city: string;
    zipcode:string;
    geo: ICoords,
    suite: string
    
}
export interface ICompany {
  name: string;
  catchPhrase: string;
  bs:string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  address: IAddress,
  company: ICompany,
  phone: string,
  username: string,
  website: string,
}

export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}



export interface FetchUsersAction {
  type: UserActionsType.FETCH_USERS,
}
export interface FetchUserSuccesssAction {
  type: UserActionsType.FETCH_USERS_SUCCESS,
  payload: any[],
}
export interface FetchUsersErrorAction {
  type: UserActionsType.FETCH_USERS_ERROR,
  payload: string,
}
export interface SortUsersAction {
  type: UserActionsType.SORT_USERS,
  users: IUser[]
}
export interface ChangeUsersFilterTypeAction {
  type: UserActionsType.CHANGE_USERS_FILTER_TYPE,
  filterType: string,
}
export interface ChangeUsersFilterDirrectionAction {
  type: UserActionsType.CHANGE_USERS_FILTER_DIRRECTION,
  dirrecrion: boolean,
}


export interface FetchToDoAction {
  type: ToDoActionsType.FETCH_TODO,
}
export interface FetchToDoCompletedAction {
  type: ToDoActionsType.FETCH_TODO_COMPLETED,
}
export interface FetchToDoUncompletedAction {
  type: ToDoActionsType.FETCH_TODO_UNCOMPLETED,
}
export interface FetchToDoCompletedSuccesssAction {
  type: ToDoActionsType.FETCH_TODO_COMPLETED_SUCCESS,
  payload: ITodo[],
}
export interface FetchToDoUncompletedSuccesssAction {
  type: ToDoActionsType.FETCH_TODO_UNCOMPLETED_SUCCESS,
  payload: ITodo[],
}


export interface FetchToDoSuccesssAction {
  type: ToDoActionsType.FETCH_TODO_SUCCESS,
  payload: any[],
}
export interface FetchToDoErrorAction {
  type: ToDoActionsType.FETCH_TODO_ERROR,
  payload: string,
}
export interface ChangeToDoIsWallAction {
  type: ToDoActionsType.CHANGE_TODO_IS_WALL,
}

export interface ChangeToDoIsTaskAction{
  type: ToDoActionsType.CHANGE_TODO_IS_TASK
}

export interface UpdateToDoListAction{
  type: ToDoActionsType.UPDATE_TODO_LIST,
  todos: ITodo[]
}
export interface UpdateToDoCompletedListAction{
  type: ToDoActionsType.UPDATE_TODO_COMPLETED_LIST,
  payload: ITodo[],
}
export interface UpdateToDoUncompletedListAction{
  type: ToDoActionsType.UPDATE_TODO_UNCOMPLETED_LIST,
  payload: ITodo[],
}




export type UserAction = FetchUsersAction | FetchUserSuccesssAction | FetchUsersErrorAction  | SortUsersAction | ChangeUsersFilterTypeAction | ChangeUsersFilterDirrectionAction
export type ToDoAction = FetchToDoAction | FetchToDoSuccesssAction | FetchToDoErrorAction | ChangeToDoIsTaskAction | ChangeToDoIsWallAction | UpdateToDoListAction | 
            FetchToDoCompletedSuccesssAction | FetchToDoUncompletedSuccesssAction | UpdateToDoCompletedListAction | UpdateToDoUncompletedListAction | FetchToDoCompletedAction |FetchToDoUncompletedAction
