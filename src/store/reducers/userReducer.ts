import { IUser, UserAction} from '../../types/types'
import { UserState } from '../../types/typeState'
import { UserActionsType } from '../actions'


const initialState: UserState = {
  users:[],
  loading: false,
  error: null,
  filterType: '',
  filterDirrection: true,
  filterUsers: [
    {
      name:'Имя',
      id: 1,
      filter: true,
      type: 'name'
    },
    {
      name:'Телефон',
      id: 2,
      filter: true,
      type: 'phone'
    }
  ],
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionsType.FETCH_USERS:
      return{ loading: true, error: null, users: [], filterUsers: state.filterUsers, filterType: '', filterDirrection: null }
    case UserActionsType.FETCH_USERS_SUCCESS:
      return{ loading: false, error: null, users: action.payload , filterUsers: state.filterUsers, filterType: '', filterDirrection: null }
    case UserActionsType.FETCH_USERS_ERROR:
      return{ loading: false, error: action.payload , users: [] , filterUsers: state.filterUsers, filterType: '', filterDirrection: null }
    case UserActionsType.SORT_USERS :
      // var newUsers = JSON.parse(JSON.stringify(state.users.map(value => Object.assign({}, value))));
      // if(state.filterDirrection){
      //   newUsers = state.users.sort((a, b) => (a[state.filterType  as keyof IUser] < b[state.filterType as keyof IUser] ? -1 : 1))
      // }else {
      //   newUsers = state.users.sort((a, b) => (a[state.filterType  as keyof IUser] > b[state.filterType as keyof IUser] ? -1 : 1))
      // }
      return{ loading: false, error: null , users: action.users, filterUsers: state.filterUsers, filterType: state.filterType, filterDirrection: state.filterDirrection }
    case UserActionsType.CHANGE_USERS_FILTER_TYPE:
      return{ loading: false, error: null , users: state.users, filterUsers: state.filterUsers, filterType: action.filterType, filterDirrection: !state.filterDirrection }
    case UserActionsType.CHANGE_USERS_FILTER_DIRRECTION:
      return{ loading: false, error: null , users: state.users, filterUsers: state.filterUsers, filterType: state.filterType, filterDirrection: action.dirrecrion }
    default: 
      return state
  }
}