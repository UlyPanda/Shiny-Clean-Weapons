import { TextField, Button, Container } from '@material-ui/core';
import { useState } from 'react'
import { useHistory } from 'react-router-dom';


const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    let history = useHistory();
  
    const handleUsername = (e) => {
      setUsername(e.target.value);
    }
  
    const handlePassword = (e) => {
      setPassword(e.target.value);
    }
  
    const login = (e) => {
      e.preventDefault();
      const user = {username, password};
      props.logIn(user);
      history.push("/weapons");
    }

    return(
        <div>
      <Container className="form-container" maxWidth="sm">
        <form className="login-form" onSubmit={login}>
          <TextField 
            required
            label="Username"
            type="text"
            value={username}
            onChange={handleUsername}
          />
          <TextField 
            required
            label="Password"
            type="password"
            value={password}
            onChange={handlePassword}
          />
          <br />
          <Button
            type="submit"
            variant="contained"
          >
            Login
          </Button>
        </form>
      </Container>
    </div>
  )
};
export default Login