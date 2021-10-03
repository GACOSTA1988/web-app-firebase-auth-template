import React from 'react';
import { NavLink } from 'react-router-dom';

const HomePage: React.FunctionComponent = () => {

    return (
       <div>Home page
           <NavLink
        to="/login"
        >
      back
      </NavLink>
       </div>
    );
}

export default HomePage;