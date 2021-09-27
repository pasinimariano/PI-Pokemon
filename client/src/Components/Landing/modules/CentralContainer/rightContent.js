import Create from '../../../../assets/Landing/create.png'

const RightContent = ({ Styles }) => {
  return (
    <div className={Styles.CenterRightContent}>
      <img
        className={Styles.CreateImg}
        src={Create}
      />
    </div>
  )
}

export default RightContent
