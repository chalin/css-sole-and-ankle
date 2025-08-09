import React from 'react';
import styled from 'styled-components';

import { COLORS, WEIGHTS } from '../../constants';
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
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
      </MainHeader>
    </header>
  );
};

const mainHeaderPaddingPx = 32;
const StyledLogo = styled(Logo)`
  /* Absolutely position logo on the left */
  position: absolute;
  left: ${mainHeaderPaddingPx}px;

  /* Center vertically in parent */
  height: 100%;
  top: 0;
  display: flex;
  align-items: center;

  // Alternative:
  // top: 50%;
  // transform: translateY(-50%);
`;

const MainHeader = styled.div`
  padding: 0 ${mainHeaderPaddingPx}px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  // Chalin
  height: ${72 / 16}rem;
  display: flex;
  align-items: center;
  justify-content: center; /* Center the nav naturally */
  position: relative; /* For absolute positioning context */
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  /* Nav is naturally centered in the flex container */
  /* On narrow screens, add left margin to avoid logo overlap */
  @media (max-width: 900px) {
    margin-left: 200px; /* Approximate logo width + spacing */
  }
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
