import React from 'react'
import { ITodo } from '../../../types/types'
import styles from './toDoItemSmall.module.scss'
import cx from 'classnames';
import {Draggable, DraggingStyle, NotDraggingStyle} from 'react-beautiful-dnd'

interface TodoItemProps {
  todo: ITodo,
  index: number
}
export const TodoItemSmall: React.ElementType<TodoItemProps>  = ( { todo, index }) => {
  return (
    <Draggable draggableId={todo.id.toString()} index={index} key={todo.id}>
      {
        (provided) => (
        <div   
          className={`${cx(`${styles.container}`, {[styles.containerCompleted]: todo.completed})}`}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div style={{display:'flex'}}>
            <div className={styles.number} >{todo.id}</div>
            <div className={styles.taskContainer}>
              <div className={styles.taskText}>{todo.title}</div>
            </div>
            </div>
        </div>
        )
      }

    </Draggable>
  )
}
