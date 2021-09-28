import Form from './form'
import ButtonPagination from './RightContent/buttonPagination'

const Header = (props) => {
  return (
    <div className={props.Styles.Headers}>
      <Form
        handleSubmit={props.handleSubmit} Styles={props.Styles} values={props.values} handleChange={props.handleChange}
        handleErrors={props.habdleErrors} errors={props.errors} ButtonStyles={props.ButtonStyles}
      />
      <div className={props.Styles.ContainerButtons}>
        <ButtonPagination Styles={props.Styles} Page={props.prevPage} ButtonStyles={props.ButtonStyles} label='ANTERIOR' />
        <ButtonPagination Styles={props.Styles} Page={props.nextPage} ButtonStyles={props.ButtonStyles} label='SIGUIENTE' />
      </div>
    </div>

  )
}

export default Header
