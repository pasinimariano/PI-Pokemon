import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CheckBoxControl from '../../Reusable/CheckBoxControl/';
import MapTypes from '../../Reusable/mapTypes';
import OrderFilter from './modules/orderFilter';
import CreatePK from './modules/createPK';  
import { get_types, filters } from '../../../Redux/actions/actionCreators';
import Styles from '../Style/home.module.css';
import ButtonStyle from '../../../Style/button.module.css';


const SideBar = ({ all_pokemon, all_types, filter, get_types }) => {

    const { checked, handleChecked } = CheckBoxControl();

    useEffect(() => {
        get_types()
    }, [])

    useEffect(() => {
        filter(checked);
    }, [checked]);

    useEffect(() => {
        filter(checked);
    }, [all_pokemon])

    return (
        <div className={Styles.SideBarContainer}>
            <h2 className={Styles.LabelFilter}> FILTROS </h2>
            <h2 className={Styles.LabelTypes}> POR TIPOS </h2>
            <MapTypes Styles={Styles} all_types={all_types} handleChecked={handleChecked} checked={checked} />
            <h2 className={Styles.LabelOrder}> POR ORDEN </h2>
            <OrderFilter Styles={Styles} handleChecked={handleChecked} checked={checked} />
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
        get_types: () => dispatch(get_types()),
        filter: (array) => dispatch(filters(array)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SideBar);
