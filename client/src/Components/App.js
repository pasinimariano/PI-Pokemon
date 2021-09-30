import React from 'react'
import { withRouter } from 'react-router'
import RoutesWeb from './RoutesWeb'
import Footbar from './Footbar'
import Styles from '../Style/app.module.css'

const App = (
  props
) => {
  const location = props.location.pathname

  return (
    <div className={Styles.App}>
      <RoutesWeb />
      {
        location !== '/'
          ? <Footbar />
          : null
      }
    </div>
  )
}

export default withRouter(App)
