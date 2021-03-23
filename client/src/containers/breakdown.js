import { connect } from 'react-redux';
import Breakdown from '../components/breakdown';
import { getSingleWeapon } from '../redux/actions';


const mapStateToProps = (state) => {
    return {
        user: state.user,
        weapons: state.weapons
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getSingleWeapon: () => dispatch(getSingleWeapon()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Breakdown)