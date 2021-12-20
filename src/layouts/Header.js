import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as HomeIcon } from '../svgs/HomeIcon.svg';
import { ReactComponent as LogoutButton } from '../svgs/logoutButton.svg';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="card">
          <Link to="/home">
            <Home />
          </Link>
          <Link to="/">
            <Logout />
          </Link>
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

function Logout() {

  const logoutClick = () => {
    localStorage.clear();
    sessionStorage.clear();
  }

  return (
    <button className="logoutButton">
      <LogoutButton className="logoutButton" onClick={logoutClick} />
      </button>
  );
}


export default Header;

