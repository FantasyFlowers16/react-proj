import React from 'react'
import { User } from '../../components/User/User'


export const UserPage : React.ElementType= ( {id}) => {

  return (
   <User  userId={id} />
  )
}
