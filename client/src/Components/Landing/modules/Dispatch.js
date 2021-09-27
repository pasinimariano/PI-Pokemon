import { getPokemons, getTypes } from '../../../Redux/actions/actionCreators'

const mapDispatchToProps = (dispatch) => {
  return {
    getPokemons: () => dispatch(getPokemons()),
    getTypes: () => dispatch(getTypes())
  }
}

export default mapDispatchToProps
