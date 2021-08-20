import { get_pokemons, get_types } from '../../../Redux/actions/actionCreators';

const mapDispatchToProps = (dispatch) => {
    return {
        get_pokemons: () => dispatch(get_pokemons()),
        get_types: () => dispatch(get_types())
    }
};

export default mapDispatchToProps;