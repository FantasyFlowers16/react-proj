import React, { useEffect, useState } from 'react'
import { ITodo } from '../../../types/types'
import { TodoItemSmall } from '../item/TodoItemSmall';
import classes from './toDoWallList.module.scss'
import {Droppable, DragDropContext, DropResult} from 'react-beautiful-dnd'
import { useActions } from '../../../hooks/useActions';
import { useTypesSelector } from '../../../hooks/useTypeSelector';
import { Loader } from '../../common/loader/Loader';

interface ToDoWallListProps {
  todos: ITodo[]
}
export const ToDoWallList: React.ElementType<ToDoWallListProps> = ( {} ) => {
  const { fetchTodosCompleted, fetchTodosUncompleted , updateCompletedTodos, updateUncompletedTodos} = useActions()
  const {completedTodos, uncompletedTodos, loadingCompleted, loadingUncompleted} = useTypesSelector(state => state.todo)

  const [dragStart, setDragStart] = useState<boolean>(false)
  const FetchEl = useEffect (() => {
    fetchTodosCompleted()
    fetchTodosUncompleted()
  }, []);
  const onDragUpdate = (result: DropResult) => {

    const {source, destination } = result
    if(!destination) return
    if((destination.droppableId !== source.droppableId) ) {
      setDragStart(true)
    } else setDragStart(false)
    
  }
  const onDragEnd = (result: DropResult) => {
    console.log(result)
    setDragStart(false)
    const {source, destination } = result
    if(!destination) return
    if(destination.droppableId === source.droppableId && destination.index ===source.index) return
    let add = null
    let completed = [...completedTodos]
    let uncompleted = [...uncompletedTodos]
    if(source.droppableId === 'CompletedList' ){
      console.log('source droppableId')
      add = completed[source.index]
      completed.splice(source.index, 1)
      
    } else {
      add = uncompleted[source.index]
      uncompleted.splice(source.index, 1)
    }
    if(destination.droppableId === 'UncompletedList' ){
      uncompleted.splice(destination.index, 0, add )
    } else {
      completed.splice(destination.index, 0, add)
    }
    // if(destination.droppableId !== source.droppableId){
    //   add.completed = !add.completed
    // }
    updateUncompletedTodos(uncompleted)
    updateCompletedTodos(completed)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd} onDragUpdate={onDragUpdate}>
      <div className={classes.container}>
          <Droppable droppableId='CompletedList'>
          {
          (provided) => (
            
            <div 
              className={classes.itemContainer} 
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <div className={classes.title}>Выполненные</div> 
              { loadingCompleted &&
                 <Loader />

              }   
     
              {!completedTodos.length && !dragStart && !loadingCompleted &&
                <div className={classes.empty}>перетащите первую задачу</div>
              }
              {completedTodos.map((todo, index) => {
                  return (
                    <TodoItemSmall key={todo.id} index={index} todo={todo} />
                  )
                })}
                
                {provided.placeholder}
                {}
              </div>
            )
          }
        </Droppable>

        <Droppable droppableId='UncompletedList'>
          {
            (provided) => (
            <div
              className={classes.itemContainer} 
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <div className={classes.title}>Не выполненные</div>
              {!uncompletedTodos.length && !dragStart && !loadingUncompleted &&
                <div className={classes.empty}>добавьте первую задачу</div>
              }     
              {uncompletedTodos.map((todo, index) => {
                  return (
                    <TodoItemSmall key={todo.id}  index={index} todo={todo} />
                  )
                })}
                {provided.placeholder}
            </div>
            )
          }

          </Droppable>
      </div>
    </DragDropContext>
  )
}
