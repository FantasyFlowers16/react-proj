import * as UserActionsCreators from './user'
import * as ToDoActionsCreator from './todo'


export default {
  ...UserActionsCreators, 
  ...ToDoActionsCreator
}