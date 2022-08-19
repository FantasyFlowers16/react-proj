import React from 'react'
import { IUser } from '../../../types/types'
import { Link} from 'react-router-dom'
import styles from './userItem.module.scss'
interface UserItemProps {
  user: IUser
}
export const UserItem: React.ElementType<UserItemProps>  = ( {user}) => {
  return (
    <div>
      <Link to={`/users/${user.id}`} >
        <div className={styles.container} >
          <div>{user.name} </div>
          <div>{user.phone} </div>
          {/* {user.id}. {user.name} проживает в городе {user.address.city} на улице {user.address.street} */}
        </div>
      </Link>
    </div>
  )
}
