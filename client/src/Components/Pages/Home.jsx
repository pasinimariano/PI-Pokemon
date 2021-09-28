import React, { useState } from 'react'
import Pagination from '../Home/Pagination'
import CheckBoxControl from '../Reusable/CheckBoxControl/'
import Styles from './Styles/home.module.css'

const Home = () => {
  const { checked, handleChecked } = CheckBoxControl()
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)

  return (
    <div className={Styles.Container}>
      <Pagination
        checked={checked}
        handleChecked={handleChecked}
        sidebar={sidebar}
        showSidebar={showSidebar}
      />
    </div>
  )
}

export default Home
