import React from 'react';
import styled from 'styled-components';

import { COLORS, WEIGHTS, _1remPx } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';

const Header = () => {
  // Our site features two visual headers, but they should be
  // grouped semantically as a single header.
  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <NavSpacer>
          <Logo />
        </NavSpacer>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <NavSpacer />
      </MainHeader>
    </header>
  );
};

const mainHeaderPaddingPx = 2 * _1remPx;
const navGapPx = 48;

const MainHeader = styled.div`
  padding: 0 ${mainHeaderPaddingPx}px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  // Chalin
  height: ${72 / _1remPx}rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: ${navGapPx}px;
`;

const Nav = styled.nav`
  display: flex;
  gap: ${navGapPx}px;
`;

const NavSpacer = styled.div`
  flex: 1 1 0;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
