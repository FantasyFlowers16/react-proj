import axios from "axios";
import { Dispatch } from "react";
import { IUser, UserAction } from "../../types/types";
import { UserActionsType } from "../actions";

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch( {type: UserActionsType.FETCH_USERS} )
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      dispatch( {type: UserActionsType.FETCH_USERS_SUCCESS, payload: response.data} )
    } catch (e) {
      dispatch( {type: UserActionsType.FETCH_USERS_ERROR, payload : 'Произошла ошибка при загрузки пользователя'} )
    }
    }
  };
  export const sortUsers = (filterDirrection: boolean | null,filterType: string, users: IUser[]) => {
    return async (dispatch: Dispatch<UserAction>) => {
      try {
        if(filterDirrection){
          users.sort((a, b) => (a[filterType as keyof IUser] < b[filterType as keyof IUser] ? -1 : 1))
        }else {
          users.sort((a, b) => (a[filterType as keyof IUser] > b[filterType as keyof IUser] ? -1 : 1))
        }
        dispatch( {type: UserActionsType.SORT_USERS, users: users } )
      } catch (e) {
        console.log(e)
      }
    }
  };
  export const changeFilterType = (type: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
      try {
        dispatch( {type: UserActionsType.CHANGE_USERS_FILTER_TYPE, filterType:type} )
      } catch (e) {
        console.log(e)
      }
      }
    };
  export const changeFilterDirrection = (status: boolean) => {
    return async (dispatch: Dispatch<UserAction>) => {
      try {
        dispatch( {type: UserActionsType.CHANGE_USERS_FILTER_DIRRECTION, dirrecrion: status } )
      } catch (e) {
        console.log(e)
      }
      }
    };