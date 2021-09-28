import { useState, useEffect } from 'react'
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
  const [showingPokemon, setShowingPokemon] = useState()

  useEffect(() => {
    setShowingPokemon(PagedPokemons[0])
  }, [])

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
      <LeftContent
        Styles={Styles}
        showingPokemon={showingPokemon}
      />
      <RightContent
        Styles={Styles}
        PagedPokemons={PagedPokemons}
        prevPage={prevPage}
        nextPage={nextPage}
        setShowingPokemon={setShowingPokemon}
      />
    </div>
  )
}

export default Body
