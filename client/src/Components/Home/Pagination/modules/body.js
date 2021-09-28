import TopContent from './TopContent'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Body = ({
  Styles,
  PagedPokemons,
  prevPage,
  nextPage,
  handleSubmit,
  values,
  handleChange,
  handleErrors,
  errors,
  showSidebar
}) => {
  return (
    <div className={Styles.BodyContainer}>
      <TopContent
        Styles={Styles}
        handleSubmit={handleSubmit}
        values={values}
        handleChange={handleChange}
        handleErrors={handleErrors}
        errors={errors}
        showSidebar={showSidebar}
      />
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
