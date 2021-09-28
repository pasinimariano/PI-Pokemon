import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Body = ({
  Styles,
  PagedPokemons,
  prevPage,
  nextPage
}) => {
  return (
    <div className={Styles.BodyContainer}>
      <LeftContent Styles={Styles} />
      <RightContent
        Styles={Styles}
        PagedPokemons={PagedPokemons}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </div>
  )
}

export default Body
