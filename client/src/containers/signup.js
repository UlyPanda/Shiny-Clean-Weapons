import { connect } from 'react-redux';
import SignUp from '../components/SignUp';
import { signup } from '../redux/actions';

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signup: (user) => dispatch(signup(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);