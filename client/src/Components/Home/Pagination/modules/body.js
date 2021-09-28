import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Body = ({ Styles, PagedPokemons }) => {
  return (
    <div className={Styles.BodyContainer}>
      <LeftContent Styles={Styles} />
      <RightContent Styles={Styles} PagedPokemons={PagedPokemons} />
    </div>
  )
}

export default Body
