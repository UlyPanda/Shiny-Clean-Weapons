import { Switch, Route, Redirect } from 'react-router';
import cookie from 'cookie';
import Weapons from './containers/weapons'
import SignUp from './containers/signup';
import Breakdown from './containers/breakdown';
import Login from './containers/login';

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie);
    return cookies["token"] ? true : false;
};



const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
      <Route
      {...rest}
      render={(props) => checkAuth()
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
            <ProtectedRoute path="/breakdown" component={Breakdown} />
        </Switch>
    )
}

export default Router;