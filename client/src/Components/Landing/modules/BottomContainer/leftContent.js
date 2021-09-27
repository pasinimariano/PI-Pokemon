import MarianoInfo from '../../../../assets/Landing/marianoPasini.png'

const LeftContent = ({ Styles }) => {
  return (
    <div className={Styles.TopLeftContent}>
      <img
        className={Styles.WelcomeImg}
        src={MarianoInfo}
      />
    </div>
  )
}

export default LeftContent
