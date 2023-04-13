import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

const Navbar = () => (
  <nav className="nav">
    <div className="title">
      <img src="./planet.png" alt="SpaceTravellers' Hub" className="logo" />
      <h1>SpaceTravellers Hub</h1>
    </div>
    <ul>
      <CustomLink to="/Rockets">Rockets</CustomLink>
      <CustomLink to="/Missions">Missions</CustomLink>
      <CustomLink to="/MyProfile">MyProfile</CustomLink>
    </ul>
  </nav>
);

function CustomLink({ to, children, className = '' }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li>
      <Link to={to} className={`${className} ${isActive ? 'active' : ''}`}>
        {children}
      </Link>
    </li>
  );
}

CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CustomLink.defaultProps = {
  className: '',
};

export default Navbar;
