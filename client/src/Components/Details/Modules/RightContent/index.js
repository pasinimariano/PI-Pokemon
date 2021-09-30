import Navigation from './navigation/navigation'
import Details from './details/container'

const RightContent = ({
  pokemon,
  Styles,
  match
}) => {
  return (
    <div className={Styles.RightContent}>
      <Navigation
        pokemon={pokemon}
        Styles={Styles}
        match={match}
      />
      <Details
        pokemon={pokemon}
        Styles={Styles}
      />
    </div>
  )
}

export default RightContent
