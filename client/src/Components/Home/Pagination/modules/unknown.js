import { connect } from "react-redux";
import Cards from "../../Cards";

const Unknown = (props) => {
    const { unknownPokemon } = props;

    return (
        <Cards AllPokemon={unknownPokemon} style={props.Styles} />
    )
};

const mapStateToProps = (state) => {
    return {
        unknownPokemon: state.UnknownPokemon
    }
};

export default connect(
    mapStateToProps,
    null
)(Unknown);