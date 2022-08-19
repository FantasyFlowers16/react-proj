import axios from "axios";
import { Dispatch } from "react";
import { ITodo, IUser, ToDoAction } from "../../types/types";
import { ToDoActionsType } from "../actions";

export const fetchTodos = () => {
  return async (dispatch: Dispatch<ToDoAction>) => {
    try {
      dispatch( {type: ToDoActionsType.FETCH_TODO} )
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
      dispatch( {type: ToDoActionsType.FETCH_TODO_SUCCESS, payload: response.data} )
    } catch (e) {
      dispatch( {type: ToDoActionsType.FETCH_TODO_ERROR, payload : 'Произошла ошибка при загрузки задач'} )
    }
  }
};
export const fetchTodosCompleted = () => {
  return async (dispatch: Dispatch<ToDoAction>) => {
    try {
      dispatch( {type: ToDoActionsType.FETCH_TODO_COMPLETED} )
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?completed=true&_limit=3')
      dispatch( {type: ToDoActionsType.FETCH_TODO_COMPLETED_SUCCESS, payload: response.data} )
    } catch (e) {
      dispatch( {type: ToDoActionsType.FETCH_TODO_ERROR, payload : 'Произошла ошибка при загрузки задач'} )
    }
  }
};
export const fetchTodosUncompleted = () => {
  return async (dispatch: Dispatch<ToDoAction>) => {
    try {
      dispatch( {type: ToDoActionsType.FETCH_TODO_UNCOMPLETED} )
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?completed=false&_limit=3')
      dispatch( {type: ToDoActionsType.FETCH_TODO_UNCOMPLETED_SUCCESS, payload: response.data} )
    } catch (e) {
      dispatch( {type: ToDoActionsType.FETCH_TODO_ERROR, payload : 'Произошла ошибка при загрузки задач'} )
    }
  }
};
export const  updateCompletedTodos = (list: ITodo[]) => {
  return (dispatch: Dispatch<ToDoAction>) => {  
    try {
      dispatch( {type: ToDoActionsType.UPDATE_TODO_COMPLETED_LIST, payload: list })
    } catch (e) {
      dispatch( {type: ToDoActionsType.FETCH_TODO_ERROR, payload : 'Произошла ошибка при загрузки задач'} )
    }
  }
};
export const  updateUncompletedTodos = (list: ITodo[]) => {
  
  return (dispatch: Dispatch<ToDoAction>) => {
    try {
      dispatch( {type: ToDoActionsType.UPDATE_TODO_UNCOMPLETED_LIST, payload: list})
    } catch (e) {
      dispatch( {type: ToDoActionsType.FETCH_TODO_ERROR, payload : 'Произошла ошибка при загрузки задач'} )
    }
  }
};
export const updateTodos = (list: ITodo[]) => {
  return async (dispatch: Dispatch<ToDoAction>) => {
    try {
      dispatch( {type: ToDoActionsType.UPDATE_TODO_LIST, todos: list} )
    } catch (e) {
      dispatch( {type: ToDoActionsType.FETCH_TODO_ERROR, payload : 'Произошла ошибка при загрузки задач'} )
    }
  }
};
export const updateTodo = (list: ITodo[], id: number) => {
  return async (dispatch: Dispatch<ToDoAction>) => {
    try {
      list.forEach(el => el.id===id ? el.completed = !el.completed : el.completed)
      dispatch( {type: ToDoActionsType.UPDATE_TODO_LIST, todos: list} )
    } catch (e) {
      dispatch( {type: ToDoActionsType.FETCH_TODO_ERROR, payload : 'Произошла ошибка при загрузки задач'} )
    }
  }
};
export const changeTodosIsTask = () => {
  return async (dispatch: Dispatch<ToDoAction>) => {
    try {
      dispatch( {type: ToDoActionsType.CHANGE_TODO_IS_TASK} )
    } catch (e) {
      console.log(e)
    }
  }
};
export const changeTodosIsWall= () => {
  return async (dispatch: Dispatch<ToDoAction>) => {
    try {
      dispatch( {type: ToDoActionsType.CHANGE_TODO_IS_WALL} )
    } catch (e) {
      console.log(e)
    }
  }
};