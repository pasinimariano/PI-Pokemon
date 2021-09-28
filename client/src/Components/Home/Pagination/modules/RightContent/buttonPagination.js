const ButtonPagination = ({
  Styles,
  Page,
  label
}) => {
  return (
    <button onClick={Page} className={Styles.Buttons}>
      {label}
    </button>
  )
}

export default ButtonPagination
