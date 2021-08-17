import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import OrderState from './modules/orderState';
import OrderFilter from './modules/orderFilter';
import MapTypes from '../../Reusable/mapTypes';
import CreatePK from './modules/createPK';
import { filters } from '../../../Redux/actions/actionCreators';
import Styles from '../Style/home.module.css';
import ButtonStyle from '../../../Style/button.module.css';


const SideBar = (props) => {

    const { all_pokemon, all_types, filter, checked, handleChecked } = props

    useEffect(() => {
        filter(checked);
    }, [filter, checked, all_pokemon])

    return (
        <div className={Styles.SideBarContainer}>
            <h2 className={Styles.LabelFilter}> FILTROS </h2>
            <h2 className={Styles.LabelState}> POR ESTADO </h2>
            <OrderState Styles={Styles} handleChecked={handleChecked} checked={checked} />
            <h2 className={Styles.LabelOrder}> POR ORDEN </h2>
            <OrderFilter Styles={Styles} handleChecked={handleChecked} checked={checked} />
            <h2 className={Styles.LabelTypes}> POR TIPOS </h2>
            <MapTypes Styles={Styles} all_types={all_types} handleChecked={handleChecked} checked={checked} />
            <CreatePK Styles={Styles} ButtonStyle={ButtonStyle} />
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        all_pokemon: state.AllPokemon,
        all_types: state.AllTypes,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        filter: (array) => dispatch(filters(array)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SideBar);

