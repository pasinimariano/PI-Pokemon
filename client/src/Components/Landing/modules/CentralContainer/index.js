import LeftContent from './leftContent'
import RightContent from './rightContent'

const CentralContainer = ({ Styles }) => {
  return (
    <div className={Styles.CentralContainer}>
      <LeftContent Styles={Styles} />
      <RightContent Styles={Styles} />
    </div>
  )
}

export default CentralContainer
