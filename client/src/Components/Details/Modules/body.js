import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Body = ({
  pokemon,
  Styles
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
      />
    </div>
  )
}

export default Body
