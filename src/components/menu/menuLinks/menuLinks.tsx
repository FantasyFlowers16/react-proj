import React from 'react'
import { Link } from 'react-router-dom'

import styles from './menuLinks.module.scss'

export const MenuLinks = () => {
  return (
    <div className={styles.container}>
      <Link to={'/users'}>
        <div className={styles.conteinerLink}>
          <img className={styles.image} src="../img/user.svg" alt="" />
          <div  className={styles.link} >Пользователи</div>
        </div>
      </Link>
      <Link   to={'/todos'}>
      <div className={styles.conteinerLink}>
          <img className={styles.image} src="../img/list.svg" alt="" />
          <div  className={styles.link}>Задачи</div>
        </div>
      </Link>
    </div>
  )
}
