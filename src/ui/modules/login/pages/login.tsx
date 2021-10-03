import React from 'react';
import { Button } from "@material-ui/core"
import { useHistory } from 'react-router-dom';

const LoginPage: React.FunctionComponent = () => {
  const history = useHistory();
  const handleClick = () => {
    alert('clicked')
    history.push("/");
  }
    return (
       <div>Login page        
         <Button
          color="primary"
          onClick={handleClick}
          >
          Login
        </Button></div>
    );
}

export default LoginPage;