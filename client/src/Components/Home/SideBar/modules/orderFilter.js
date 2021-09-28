import CheckBox from '../../../Reusable/CheckBoxes'

const OrderFilter = (props) => {
  return (
    <div className={props.Styles.OrderContainer}>
      <CheckBox
        style={props.Styles} onChange={() => props.handleChecked('ID', ['IDSC', 'ASC', 'DSC', 'ALL', 'API', 'CREATED'])}
        value='ID ASC' checked={props.checked.indexOf('ID') !== -1}
      />
      <CheckBox
        style={props.Styles} onChange={() => props.handleChecked('IDSC', ['ID', 'ASC', 'DSC', 'ALL', 'API', 'CREATED'])}
        value='ID DSC' checked={props.checked.indexOf('IDSC') !== -1}
      />
      <CheckBox
        style={props.Styles} onChange={() => props.handleChecked('ASC', ['ID', 'IDSC', 'DSC', 'ALL', 'API', 'CREATED'])}
        value='NAME ASC' checked={props.checked.indexOf('ASC') !== -1}
      />
      <CheckBox
        style={props.Styles} onChange={() => props.handleChecked('DSC', ['ID', 'IDSC', 'ASC', 'ALL', 'API', 'CREATED'])}
        value='NAME DSC' checked={props.checked.indexOf('DSC') !== -1}
      />
    </div>
  )
}

export default OrderFilter
