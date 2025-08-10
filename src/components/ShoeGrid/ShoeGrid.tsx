import React from 'react';
import styled from 'styled-components';

import SHOES from '../../data';
import ShoeCard from '../ShoeCard';
import { _1remPx } from '../../constants';

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <ShoeCardWrapper key={shoe.slug}>
          <ShoeCard {...shoe} />
        </ShoeCardWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: ${2 * _1remPx}px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ShoeCardWrapper = styled.div`
  flex: 1 1 344px;
`;

export default ShoeGrid;
