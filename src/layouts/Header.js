import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as HomeIcon } from '../svgs/HomeIcon.svg';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="justifyEnd">
          <Link to="/home">
            <Home />
          </Link>
        </div>
        <div>
        </div>
      </nav>
    </header>
  );
};

function Home() {
  return (
    <HomeIcon className="homeButton" />
  );
}


export default Header;

