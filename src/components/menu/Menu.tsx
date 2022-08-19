import React, { useState } from 'react'
import styles from './menu.module.scss'
import { MenuLinks } from './menuLinks/menuLinks'
import cx from 'classnames';

export const Menu: React.ElementType = () =>{
  const [openMenu, setOpenMenu] = useState<Boolean>(true)
  const openCloseMenu = () => {
    setOpenMenu(!openMenu)
  }
  return (
    <div className={`${cx(`${styles.container}`, {[styles.containerClose]: !openMenu})}`} >
      <div className={`${cx(`${styles.containerItems}`, {[styles.containerClose]: !openMenu})}`}>
      <div className={`${cx(`${styles.burger}`, {[styles.burgerOpen]: openMenu})}`}  onClick={openCloseMenu}>
        <span className={`${styles.burgerLine} ${styles.burgerLineFirst}`}></span>
        <span className={`${styles.burgerLine} ${styles.burgerLineSecond}`}></span>
        <span className={`${styles.burgerLine} ${styles.burgerLineThird}`}></span>
        <span className={`${styles.burgerLine} ${styles.burgerLineFourth}`}></span>
      </div>
      <MenuLinks />
      </div>
  </div>
  )
}
