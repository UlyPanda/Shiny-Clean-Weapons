import { Switch, Route, Redirect } from 'react-router';
import Weapons from './containers/weapons'
import { authenticate } from '../../middleware/index';
import SignUp from './containers/signup';
import Breakdown from './containers/breakdown';
import Login from './containers/login';




const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
      <Route
      {...rest}
      render={(props) => authenticate()
        ? <Component {...props} />
        : <Redirect to="/login" />
      }
      />
    )
  };
  
const Router =  () => {
    return (
        <Switch>
            <Route path="/weapons" component={Weapons} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/breakdown" component={Breakdown} />
        </Switch>
    )
}

export default Router;