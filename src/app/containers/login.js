import { connect } from 'react-redux';
import Login from '../components/login';
import { logIn } from '../redux/actions';


const mapStateToProps = (state) => {
    return {
        user: state.user
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logIn: (user) => dispatch(logIn(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)