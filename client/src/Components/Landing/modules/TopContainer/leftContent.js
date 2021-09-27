import Welcome from '../../../../assets/Landing/welcome.png'

const LeftContent = ({ Styles }) => {
  return (
    <div className={Styles.TopLeftContent}>
      <img
        className={Styles.WelcomeImg}
        src={Welcome}
      />
      <div className={Styles.AccessButtonContainer}>
        <button className={Styles.AccessButton}> START NOW </button>
      </div>
    </div>
  )
}

export default LeftContent
