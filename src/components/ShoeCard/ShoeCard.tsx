import React from 'react';
import styled from 'styled-components';

import { _1remPx, COLORS, WEIGHTS } from '../../constants';
import { formatPrice, pluralize, isNewShoe } from '../../utils';
import { Shoe } from '../../data';
import Spacer from '../Spacer';

const ShoeCard = ({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}: Shoe) => {
  // There are 3 variants possible, based on the props:
  //   - new-release
  //   - on-sale
  //   - default
  //
  // Any shoe released in the last month will be considered
  // `new-release`. Any shoe with a `salePrice` will be
  // on-sale. In theory, it is possible for a shoe to be
  // both on-sale and new-release, but in this case, `on-sale`
  // will triumph and be the variant used.
  const variant =
    typeof salePrice === 'number'
      ? 'on-sale'
      : isNewShoe(releaseDate)
        ? 'new-release'
        : 'default';

  const isOnSale =
    variant === 'on-sale' && salePrice !== undefined && salePrice !== null;
  const PriceMaybeDiscounted = isOnSale ? DiscountedPrice : Price;

  const FlagMaybe = (variant: string) =>
    variant === 'on-sale' ? (
      <SaleFlag>Sale</SaleFlag>
    ) : variant === 'new-release' ? (
      <NewReleaseFlag>Just Released!</NewReleaseFlag>
    ) : null;

  return (
    <Link href={`/shoe/${slug}`}>
      <Wrapper>
        <ImageWrapper>
          <Image alt="" src={imageSrc} />
          {FlagMaybe(variant)}
        </ImageWrapper>
        <Spacer size={12} />
        <Row>
          <Name>{name}</Name>
          <PriceMaybeDiscounted>{formatPrice(price)}</PriceMaybeDiscounted>
        </Row>
        <Row>
          <ColorInfo>{pluralize('Color', numOfColors)}</ColorInfo>
          {isOnSale && <SalePrice>{formatPrice(salePrice)}</SalePrice>}
        </Row>
      </Wrapper>
    </Link>
  );
};

const FlagBase = styled.span`
  position: absolute;
  top: 12px;
  right: -4px;

  height: ${2 * _1remPx}px;
  padding: 9px;
  padding-left: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${14 / _1remPx}rem;
  font-weight: ${WEIGHTS.semibold} !important;

  // background-color is set by the typed-flag component
  color: ${COLORS.white};

  border-radius: 2px;
`;

const SaleFlag = styled(FlagBase)`
  background-color: ${COLORS.primary};
`;

const NewReleaseFlag = styled(FlagBase)`
  background-color: ${COLORS.secondary};
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  position: relative;
`;

const Row = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
`;

const Wrapper = styled.article`
  * {
    font-weight: ${WEIGHTS.normal};
    line-height: 1;
  }
  ${Row} + ${Row} {
    margin-top: 6px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 16px 16px 4px 4px;
`;

const Name = styled.h3`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
`;

const Price = styled.span``;

const ColorInfo = styled.p`
  color: ${COLORS.gray[700]};
`;

const DiscountedPrice = styled(Price)`
  text-decoration: line-through;
  color: ${COLORS.gray[700]};
`;

const SalePrice = styled.span`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.primary};
`;

export default ShoeCard;
