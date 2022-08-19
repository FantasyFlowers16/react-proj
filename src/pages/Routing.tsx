import React from 'react'
import { TodosPage } from './todoPage/TodosPage'
import { UsersPage } from './usersPage/UsersPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Menu } from '../components/menu/Menu'
import Style from '../app.module.css'
import { UserPage } from './userPage/UserPage'

export const Routing: React.ElementType = () => {
  interface MatchParams {
    name: string;
}

  return (
    <div className={Style.layout}>
      <BrowserRouter>
        <Menu className='menu' />
        <div className={Style.content}>
          <Routes>    
            <Route path="/users" element={<UsersPage/>}/>
            <Route path="/todos" element={<TodosPage/>}/>
            <Route path="/users/:userId" element={<UserPage/>}/>
        </Routes>
        </div>

      </BrowserRouter>
    </div>
  )
}
