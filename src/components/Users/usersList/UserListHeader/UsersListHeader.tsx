import React, { useMemo, useEffect } from 'react'
import { useTypesSelector } from '../../../../hooks/useTypeSelector'
import { filterUserItem } from '../../../../types/typeState';
import styles from './UsersListHeader.module.scss'
import cx from 'classnames';
import { useActions } from '../../../../hooks/useActions';

export const UsersListHeader: React.ElementType = () => {
  const {filterUsers, filterType, filterDirrection, users} = useTypesSelector(state => state.user)
  const { sortUsers, changeFilterType, changeFilterDirrection } = useActions()
  const filteredList = (type: string) => {
    changeFilterType(type)
    changeFilterDirrection(!filterDirrection)
  }
  const SortUncompletedEl = useEffect (() => {
    let newUser = [...users]
    sortUsers(filterDirrection, filterType, newUser)
  }, [filterType, filterDirrection]);
  return (
    <div className={styles.container}>
      {filterUsers.map((filterItem: filterUserItem) => {
        return (
        <div className={styles.container} key={filterItem.id}>
          <div className={styles.title}>{filterItem.name}
            {filterItem.filter &&
              <img  className={`${cx(`${styles.arrow}`, {[styles.arrowActive]: filterType===filterItem.type})}`} src="../img/sort.svg" alt="" onClick={() => {filteredList(filterItem.type)}}/>
              }
          </div>
        </div>
        )
      })}
    </div>
  )
}
