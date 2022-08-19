import React from 'react'
import { useTypesSelector } from '../../../hooks/useTypeSelector'
import { ITodo } from '../../../types/types'
import { Loader } from '../../common/loader/Loader'
import { TodoItem } from '../item/TodoItem'
import styles from './toDoList.module.scss'


export const TodoList: React.ElementType = ({todos}) => {
  const {loading} = useTypesSelector(state=> state.todo)
    return (
      <div className={styles.container}> 
        { todos.map((todo: ITodo) => {
          return (
          <TodoItem key={todo.id} todo={todo}  />
          )
        })}
    </div>
    )
}
