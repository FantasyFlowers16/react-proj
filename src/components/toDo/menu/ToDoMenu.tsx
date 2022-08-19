import React from 'react'
import { useActions } from '../../../hooks/useActions'
import { useTypesSelector } from '../../../hooks/useTypeSelector'
import styles from './toDoMenu.module.scss'
import cx from 'classnames'

export const ToDoMenu: React.ElementType = () => {
  const {isTask, isWall} = useTypesSelector(state => state.todo)
  const { changeTodosIsTask, changeTodosIsWall } = useActions()
  const activeTask = () => {
    changeTodosIsTask()
  }
  const activeWall = () => {
    changeTodosIsWall()
  }
  return (
    <div className={styles.container}>
      <div className={`${cx(`${styles.item}`, {[styles.itemActive]: isTask})}`} onClick={activeTask}>Задачи</div>
      <div className={`${cx(`${styles.item}`, {[styles.itemActive]: isWall})}`} onClick={activeWall}>Стена</div>
    </div>
  )
}
