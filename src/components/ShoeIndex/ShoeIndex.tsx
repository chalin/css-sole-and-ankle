import React from 'react';
import styled from 'styled-components';

import { WEIGHTS, _1remPx } from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';

const mainHeaderHeightPx = 42;

interface ShoeIndexProps {
  sortId: string;
  setSortId: (value: string) => void;
}

const ShoeIndex = ({ sortId, setSortId }: ShoeIndexProps) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <Title>Running</Title>
          <Select
            label="Sort"
            value={sortId}
            onChange={(ev: React.ChangeEvent<HTMLSelectElement>) =>
              setSortId(ev.target.value)
            }
          >
            <option value="newest">Newest Releases</option>
            <option value="price">Price</option>
          </Select>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <BreadcrumbsWrapper>
          <Breadcrumbs>
            <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
            <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
            <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
          </Breadcrumbs>
        </BreadcrumbsWrapper>
        <Spacer size={24} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 32px;
`;

const LeftColumn = styled.div`
  flex: 0;
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  max-height: ${mainHeaderHeightPx / _1remPx}rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

const BreadcrumbsWrapper = styled.div`
  height: ${mainHeaderHeightPx / _1remPx}rem;
  display: flex;
  align-items: center;
`;

export default ShoeIndex;
