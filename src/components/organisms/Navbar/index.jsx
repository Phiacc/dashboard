import React from 'react';
import logo from '../../../assets/svg/logo.svg';
import Notification from '../../../assets/svg/Notifications.svg';

export const Navbar = (props) => {
    if (props.type === "navbar") {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">
        <img src={logo} className="logo" alt="logo" />
        </a>
      </div>
      <div className="nav-links">
          <a href="/dashboard"><img src={Notification} className="" alt="logo" /></a>
          <div className="nav-profile">PH</div>
          <div className="profile-text">
            <p>
         <strong>PH Industry Limited</strong> 
        <br />
            <small>philipsteey@gmail.com</small>
            </p>
          </div>
      </div>
    </nav>
  );
};
}

