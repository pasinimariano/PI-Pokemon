import Unknown from './unknown'
import Cards from '../../Cards'
import LeftContent from './LeftContent'

const Body = ({ Styles }) => {
  return (
    <div className={Styles.BodyContainer}>
      <LeftContent Styles={Styles} />
    </div>
  )
}

export default Body
