import React, { useEffect } from 'react'
import { Loader } from '../../components/common/loader/Loader'
import { TodoList } from '../../components/toDo/list/ToDoList'
import { ToDoMenu } from '../../components/toDo/menu/ToDoMenu'
import { ToDoWallList } from '../../components/toDo/wallList/ToDoWallList'
import { useActions } from '../../hooks/useActions'
import { useTypesSelector } from '../../hooks/useTypeSelector'
import styles from './todoPage.module.scss'
export const TodosPage : React.ElementType = () => {
  const {todos, error, loading, isTask, isWall} = useTypesSelector(state => state.todo)
  const { fetchTodos } = useActions()
  useEffect(() => {
    fetchTodos()
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
    <div className={styles.container}>
      <ToDoMenu />
      {isTask &&
        <TodoList key='1' todos={todos} />
      }
      {isWall &&
          <ToDoWallList  todos={todos} />
        
      }
    </div>
    
  )
}
