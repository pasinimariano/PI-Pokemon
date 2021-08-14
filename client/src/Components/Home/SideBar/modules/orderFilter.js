import CheckBox from "../../../Reusable/CheckBoxes";

const OrderFilter = (props) => {
    return (
        <div className={props.Styles.OrderContainer}>
            <CheckBox style={props.Styles} onChange={() => props.handleChecked('API')} value='EXISTENTES'
                checked={props.checked.indexOf('API') === -1 ? false : true} />
            <CheckBox style={props.Styles} onChange={() => props.handleChecked('CREATED')} value='CREADOS'
                checked={props.checked.indexOf('CREATED') === -1 ? false : true} />
            <CheckBox style={props.Styles} onChange={() => props.handleChecked('BYNAME', 'BYID')} value='POR NOMBRE'
                checked={props.checked.indexOf('BYNAME') === -1 ? false : true} />
            <CheckBox style={props.Styles} onChange={() => props.handleChecked('BYID', 'BYNAME')} value='POR ID'
                checked={props.checked.indexOf('BYID') === -1 ? false : true} />
        </div>
    )
};

export default OrderFilter;