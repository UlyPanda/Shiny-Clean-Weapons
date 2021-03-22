import { connect } from 'react-redux';
import Weapons from '../components/weapons';
import { getAllWeapons } from '../redux/actions';


const mapStateToProps = (state) => {
    return {
        user: state.user,
        weapons: state.weapons
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllWeapons: () => dispatch(getAllWeapons()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weapons)