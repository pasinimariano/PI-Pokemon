import ButtonPagination from './buttonPagination'

const Pagination = ({
  Styles,
  prevPage,
  nextPage
}) => {
  return (
    <div className={Styles.PaginationContainer}>
      <ButtonPagination Styles={Styles} Page={prevPage} label='BACK' />
      <ButtonPagination Styles={Styles} Page={nextPage} label='NEXT' />
    </div>
  )
}

export default Pagination
