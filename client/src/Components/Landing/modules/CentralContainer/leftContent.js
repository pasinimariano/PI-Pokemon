import DetailsApp from '../../../../assets/Landing/details.png'

const LeftContent = ({ Styles }) => {
  return (
    <div className={Styles.ImageContainerR}>
      <img
        className={Styles.RightContentImg}
        src={DetailsApp}
      />
    </div>
  )
}

export default LeftContent
