import Details from './details'

const RightContent = ({
  pokemon,
  Styles
}) => {
  return (
    <div className={Styles.RightContent}>
      <Details
        pokemon={pokemon}
        Styles={Styles}
      />
    </div>
  )
}

export default RightContent
