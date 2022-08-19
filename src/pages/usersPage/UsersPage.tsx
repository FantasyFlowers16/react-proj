import React, { useEffect } from 'react'
import List from '../../components/common/list/List'
import { UserItem } from '../../components/Users/usersItem/UserItem'
import { UsersListHeader } from '../../components/Users/usersList/UserListHeader/UsersListHeader'
import { IUser } from '../../types/types'
import { useTypesSelector } from '../../hooks/useTypeSelector'
import { useActions } from '../../hooks/useActions'
import { Loader } from '../../components/common/loader/Loader'



export const UsersPage : React.ElementType= () => {
  const {users, error, loading} = useTypesSelector(state => state.user)
  const { fetchUsers } = useActions()
  useEffect(() => {
    fetchUsers()
  }, [])
  if (loading) {
    return (
      <Loader />
    )
  }
  if (error) {
    return (
      <h1>{error}</h1>
    )
  }
  return (
    <div style={{width: '100%'}}>
      <UsersListHeader  />
      <List
      type='users'
      items={users}
      renderItem = {(user: IUser) => <UserItem user={user} key={ user.id} />}
    />
    </div>

  )
}
