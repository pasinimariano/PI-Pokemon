import { FaBars } from 'react-icons/fa'
import FormName from './formName'

const TopContent = ({
  Styles,
  handleSubmit,
  values,
  handleChange,
  handleErrors,
  errors,
  showSidebar
}) => {
  return (
    <>
      <div className={Styles.Welcome}>
        <FaBars onClick={showSidebar} size={25} />
        <h3> POKEDEX </h3>
      </div>
      <FormName
        Styles={Styles}
        handleSubmit={handleSubmit}
        values={values}
        handleChange={handleChange}
        handleErrors={handleErrors}
        errors={errors}
      />
    </>
  )
}

export default TopContent
