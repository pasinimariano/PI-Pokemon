import React from 'react'
import Pagination from '../Home/Pagination'
import SideBar from '../Home/SideBar'
import CheckBoxControl from '../Reusable/CheckBoxControl/'
import Styles from './Styles/home.module.css'

const Home = () => {
  const { checked, handleChecked } = CheckBoxControl()

  return (
    <div className={Styles.Container}>
      <SideBar checked={checked} handleChecked={handleChecked} />
      <Pagination checked={checked} />
    </div>
  )
}

export default Home
