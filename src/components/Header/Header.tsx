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
        <StyledLogo />
        <LeftSpacer />
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
const logoWidthPx = 140; // TODO: get from logo and/or use rem units.
const navGapPx = 48;

// Pull logo out of flow so it is easier to center the nav.
const StyledLogo = styled(Logo)`
  position: absolute;
  left: ${mainHeaderPaddingPx}px;

  /* Center vertically in parent */
  height: 100%;
  top: 0;
  display: flex;
  align-items: center;

  // Alternative:
  // top: 50%;
  // transform: translateY(-50%); // 50% of logo's height
`;

const MainHeader = styled.div`
  padding: 0 ${mainHeaderPaddingPx}px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  // Chalin
  height: ${72 / _1remPx}rem;
  display: flex;
  align-items: center;
  position: relative; /* For logo's absolute positioning */
`;

const NavSpacer = styled.div`
  flex: 1;
`;

const LeftSpacer = styled(NavSpacer)`
  min-width: ${(logoWidthPx + navGapPx) / _1remPx}rem;
`;

const Nav = styled.nav`
  flex-shrink: 0;
  display: flex;
  gap: ${navGapPx}px;
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
