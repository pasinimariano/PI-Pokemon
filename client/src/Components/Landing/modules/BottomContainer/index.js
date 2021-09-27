import LeftContent from './leftContent'
import RightContent from './rightContent'

const BottomContainer = ({ Styles }) => {
  return (
    <div className={Styles.TopContainer}>
      <LeftContent Styles={Styles} />
      <RightContent Styles={Styles} />
    </div>
  )
}

export default BottomContainer
