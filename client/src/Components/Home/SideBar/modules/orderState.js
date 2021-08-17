import CheckBox from "../../../Reusable/CheckBoxes";

const OrderState = (props) => {
    return (
        <div className={props.Styles.StateFilter}>
            <CheckBox style={props.Styles} onChange={() => props.handleChecked('ALL', ['API', 'CREATED'])}
                value='ALL' checked={props.checked.indexOf('ALL') === -1 ? false : true} />
            <CheckBox style={props.Styles} onChange={() => props.handleChecked('API', ['ALL', 'CREATED'])}
                value='API' checked={props.checked.indexOf('API') === -1 ? false : true} />
            <CheckBox style={props.Styles} onChange={() => props.handleChecked('CREATED', ['ALL', 'API'])}
                value='CREADOS' checked={props.checked.indexOf('CREATED') === -1 ? false : true} />
        </div>
    )
}

export default OrderState;