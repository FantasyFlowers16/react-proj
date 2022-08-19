import { ToDoAction} from '../../types/types'
import { TodosState } from '../../types/typeState'
import { ToDoActionsType } from '../actions'


const initialState: TodosState = {
  todos:[],
  completedTodos: [],
  uncompletedTodos: [],
  loading: false,
  loadingCompleted: true,
  loadingUncompleted: false,
  error: null,
  isTask: true,
  isWall: false,
}

export const todoReducer = (state = initialState, action: ToDoAction): TodosState => {
  function updateObject(newValues: any) {
    // Encapsulate the idea of passing a new object as the first parameter
    // to Object.assign to ensure we correctly copy data instead of mutating
    return Object.assign({}, state, newValues)
  }
  
  switch (action.type) {
    case ToDoActionsType.FETCH_TODO:
      return updateObject({ loading: true})
    case ToDoActionsType.FETCH_TODO_SUCCESS:
      return updateObject({ loading: false, todos: action.payload, })
    case ToDoActionsType.FETCH_TODO_COMPLETED:
      return updateObject({ loadingCompleted: true, completedTodos: []})
    case ToDoActionsType.FETCH_TODO_UNCOMPLETED:
      return updateObject({ loadingUncompleted: true, uncompletedTodos: []})
    case ToDoActionsType.FETCH_TODO_COMPLETED_SUCCESS:
      return updateObject({  completedTodos: action.payload, loadingCompleted: false })
    case ToDoActionsType.FETCH_TODO_UNCOMPLETED_SUCCESS:
      return updateObject({  uncompletedTodos: action.payload, loadingUncompleted: false })
    case ToDoActionsType.UPDATE_TODO_COMPLETED_LIST:
      return updateObject({  completedTodos: action.payload})
    case ToDoActionsType.UPDATE_TODO_UNCOMPLETED_LIST:
      return updateObject({  uncompletedTodos: action.payload})   
    case ToDoActionsType.FETCH_TODO_ERROR:
      return updateObject({ loading: false,  error: action.payload })   
    case ToDoActionsType.CHANGE_TODO_IS_TASK:
      return updateObject( { isTask: true, isWall:false })   
    case ToDoActionsType.CHANGE_TODO_IS_WALL:
      return updateObject( { isTask: false, isWall:true })   
    case ToDoActionsType.UPDATE_TODO_LIST:
      return updateObject({ todos: action.todos})   
    default: 
      return state
  }
}