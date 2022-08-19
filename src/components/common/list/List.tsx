import React from 'react'
import styles from './list.module.scss'

interface ListProps<T> {
  items: T[];
  type: string;
  renderItem: (item: T) => React.ReactNode
}

export default function List <T>(props: ListProps<T>) {
  return (
    <div className={styles.container}>
      {props.items.map(props.renderItem)}
    </div>
  )
}

