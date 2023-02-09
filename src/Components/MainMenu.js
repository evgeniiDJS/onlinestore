import React, { useRef, useContext } from 'react';
import styled from 'styled-components';
import useOnClickOutside from '../hooks/onClickOutside';
import { MenuContext } from '../context/navState';
import HamburgerButton from './HamburgerButton';
import { SideMenu } from './SideMenu';

const Navbar = styled.div`
  display: flex;
  position: relative;
  left: 0;
  right: 0;
  box-sizing: border-box;
  outline: currentcolor none medium;
  max-width: 100px;
  margin: 0px;
  align-items: center;
  background: #082bff none repeat scroll 0% 0%;
  color: rgb(248, 248, 248);
  flex-direction: row;
  justify-content: flex-start;
  padding: 0px;
  z-index: 500;
`;

const MainMenu = () => {
  const node = useRef();
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
  useOnClickOutside(node, () => {
    // Only if menu is open
    if (isMenuOpen) {
      toggleMenuMode();
    }
  });

  return (
    <header className='inline-block md:hidden' ref={node}>
      <Navbar>
        <HamburgerButton />
      </Navbar>
      <SideMenu />
    </header>
  );
};

export default MainMenu;