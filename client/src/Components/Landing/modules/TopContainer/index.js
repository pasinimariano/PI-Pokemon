import LeftContent from './leftContent'
import RightContent from './rightContent'

const TopContainer = ({ Styles }) => {
  return (
    <div className={Styles.TopContainer}>
      <LeftContent Styles={Styles} />
      <RightContent Styles={Styles} />
    </div>
  )
}

export default TopContainer
