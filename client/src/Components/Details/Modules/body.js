import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Body = ({
  pokemon,
  Styles,
  match
}) => {
  return (
    <div className={Styles.MainContainer}>
      <LeftContent
        pokemon={pokemon}
        Styles={Styles}
      />
      <RightContent
        pokemon={pokemon}
        Styles={Styles}
        match={match}
      />
    </div>
  )
}

export default Body
