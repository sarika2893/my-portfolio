import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => (
  <Nav>
    <Logo>MyPortfolio</Logo>
    <Menu>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/contact">Contact</Link>
    </Menu>
  </Nav>
);

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #20232a;
  color: #61dafb;
  position: relative;
  z-index: 10;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
`;

const Menu = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: white;
    text-decoration: none;
    &:hover {
      color: #61dafb;
    }
  }
`;

export default Navbar;
