import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { MenuContext } from '../context/navState';
/* import arrow from '../arrow.svg'; */
import { Link } from 'react-router-dom';

const Menu = styled.nav`
  height: 350px;
  position: absolute;
  top: 110px;
  left: 0px;
  bottom: 0px;
  z-index: 293;
  display: block;
  width: 410px;
  max-width: 100%;
  margin-top: 0px;
  padding-top: 50px;
  padding-right: 0px;
  align-items: stretch;
  background-color: #001698;
  transform: translateX(-100%);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  ${props =>
    props.open &&
    css`
      transform: translateX(0);
    `}
`;

export const MenuLink = styled.a`
  position: relative;
  display: block;
  text-align: left;
  max-width: 100%;
  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 16%;
  
  background-position: 88% 50%;
  background-size: 36px;
  background-repeat: no-repeat;
  transition: background-position 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  text-decoration: none;
  color: #fff;
  font-size: 22px;
  line-height: 100%;
  font-weight: 200;

  :hover {
    background-position: 90% 50%;
  }
`;

export const SideMenu = ({ children }) => {
  const { isMenuOpen } = useContext(MenuContext);

  return <Menu open={isMenuOpen}>{children}</Menu>;
};

SideMenu.propTypes = {
  children: PropTypes.node,
};

SideMenu.defaultProps = {
  children: (
    <div>
      <Link className='menuLink' to="/">Women</Link>
      <Link className='menuLink' to="/men">Men</Link>
      <Link className='menuLink' to="/sale">Sale</Link>
      <Link className='menuLink' to="/stocks">Stocks</Link>
    </div>
  ),
};