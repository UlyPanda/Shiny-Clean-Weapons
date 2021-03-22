import { Switch, Route, Redirect } from 'react-router';
import { authenticate } from './api/middleware/index';
import Weapons from './app/containers/weapons'
import SignUp from './app/containers/signup';
import Breakdown from './app/containers/breakdown';
import Login from './app/containers/login';




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