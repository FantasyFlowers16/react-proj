import React from 'react'
import { ITodo } from '../../../types/types'
import styles from './toDoItem.module.scss'
import cx from 'classnames';
interface TodoItemProps {
  todo: ITodo
}
export const TodoItem: React.ElementType<TodoItemProps>  = ( { todo }) => {
  return (
    <div   className={`${cx(`${styles.container}`, {[styles.containerCompleted]: todo.completed})}`}>
      <div style={{display:'flex'}}>
        <div className={styles.number} >{todo.id}</div>
        <div className={styles.taskContainer}>
          <div className={styles.taskTitle}>Что нужно сделать:</div>
          <div className={styles.taskText}>{todo.title}</div>
        </div>
        </div>
    </div>
  )
}
