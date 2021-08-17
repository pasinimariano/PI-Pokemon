import CheckBox from "../../../Reusable/CheckBoxes";


const OrderFilter = (props) => {
    return (
        <div className={props.Styles.OrderContainer}>
            <CheckBox style={props.Styles} onChange={() => props.handleChecked('ID', ['IDSC', 'ASC', 'DSC'])}
                value='ID ASC' checked={props.checked.indexOf('ID') === -1 ? false : true} />
            <CheckBox style={props.Styles} onChange={() => props.handleChecked('IDSC', ['ID', 'ASC', 'DSC'])}
                value='ID DSC' checked={props.checked.indexOf('IDSC') === -1 ? false : true} />
            <CheckBox style={props.Styles} onChange={() => props.handleChecked('ASC', ['ID', 'IDSC', 'DSC'])}
                value='NAME ASC' checked={props.checked.indexOf('ASC') === -1 ? false : true} />
            <CheckBox style={props.Styles} onChange={() => props.handleChecked('DSC', ['ID', 'IDSC', 'ASC'])}
                value='NAME DSC' checked={props.checked.indexOf('DSC') === -1 ? false : true} />
        </div>
    )
};

export default OrderFilter;