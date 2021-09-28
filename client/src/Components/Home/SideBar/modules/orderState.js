import CheckBox from '../../../Reusable/CheckBoxes'

const OrderState = (props) => {
  return (
    <div className={props.Styles.StateFilter}>
      <CheckBox
        style={props.Styles} onChange={() => props.handleChecked('ALL', ['API', 'CREATED', 'ID', 'IDSC', 'ASC', 'DSC'])}
        value='ALL' checked={props.checked.indexOf('ALL') !== -1}
      />
      <CheckBox
        style={props.Styles} onChange={() => props.handleChecked('API', ['ALL', 'CREATED', 'ID', 'IDSC', 'ASC', 'DSC'])}
        value='API' checked={props.checked.indexOf('API') !== -1}
      />
      <CheckBox
        style={props.Styles} onChange={() => props.handleChecked('CREATED', ['ALL', 'API', 'ID', 'IDSC', 'ASC', 'DSC'])}
        value='CREADOS' checked={props.checked.indexOf('CREATED') !== -1}
      />
    </div>
  )
}

export default OrderState
