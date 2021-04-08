import { TextField, Button, Container } from '@material-ui/core';
import { useState } from 'react'
import { useHistory, Link } from 'react-router-dom';


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

      fetch('/auth/login', {
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user),
      })
      .then(response => response.json())
      .then(data => {
        if(data.authenticated) {
          const token = data.token;
          document.cookie = `token=${token}`
          props.logIn();
          history.push("/weapons");
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
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