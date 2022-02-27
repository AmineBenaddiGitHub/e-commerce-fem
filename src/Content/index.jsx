import styled from "styled-components";
import { useState } from "react";

import Plus from "../assets/icon-plus.svg";
import Minus from "../assets/icon-minus.svg";
import Cart from "../assets/icon-cart-white.svg";
import Gallery from "../Gallery";

import { useCart } from "../Context";

export default function Content() {
  const [quantity, setQuantity] = useState(0);
  const { dispatch } = useCart();
  return (
    <ContentWrapper>
      <GalleryWrapper>
        <Gallery />
      </GalleryWrapper>
      <ArticleDescription>
        <H1>Sneaker Company</H1>
        <H2>Fall limited edition sneakers</H2>
        <Paragraph>
          These tow profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole. They'll withstand everything
          the weather can offer.
        </Paragraph>
        <Price>
          <H2>$120.00</H2>
          <Discount>50%</Discount>
        </Price>
        <Order>
          <Quantity>
            <QuantityImg
              onClick={() => {
                setQuantity(Math.max(0, quantity - 1));
              }}
            >
              <img src={Minus} alt="minus" />
            </QuantityImg>
            <QuantityNumber>{quantity}</QuantityNumber>
            <QuantityImg
              onClick={() => {
                setQuantity(Math.min(9, quantity + 1));
              }}
            >
              <img src={Plus} alt="plus" />
            </QuantityImg>
          </Quantity>
          <Checkout
            onClick={() => {
              dispatch({ type: "add-product", payload: quantity });
              setQuantity(0);
            }}
          >
            <CartImg src={Cart} alt="cart" /> <p>Add to cart</p>
          </Checkout>
        </Order>
      </ArticleDescription>
    </ContentWrapper>
  );
}

const ContentWrapper = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
`;

const ArticleDescription = styled.div`
  width: 100%;
`;

const H1 = styled.h1`
  font-size: 1rem;
  color: orange;
  font-weight: bold;
  text-transform: uppercase;
`;

const H2 = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  text-transform: capitalize;
  margin: 1rem 0;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: grey;
  font-weight: bold;
  line-height: 1.5rem;
  margin: 0.5rem 0;
`;

const QuantityNumber = styled.p`
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.5rem;
  margin: 0.5rem 0;
  max-width: 1.5rem;
  min-width: 1.5rem;
`;

const Price = styled.div`
  display: flex;
`;

const Discount = styled.div`
  background-color: #ffefd5;
  color: orange;
  font-weight: bold;
  height: 2rem;
  line-height: 2rem;
  width: 3rem;
  text-align: center;
  border-radius: 5px;
  align-self: center;
  margin-left: 1rem;
`;

const Order = styled.div`
  display: flex;
  width: 100%;
`;
const Quantity = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: lightgrey;
  flex-grow: 1;
  border-radius: 5px;
`;
const Checkout = styled.button`
  flex-grow: 2;
  margin-left: 1rem;
  background-color: orange;
  color: white;
  box-shadow: 0px 5px 10px 0px orange;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

const QuantityImg = styled.button`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: lightgrey;
  border: 0;
  cursor: pointer;
  border-radius: 5px;
`;

const CartImg = styled.img`
  filter: invert(1);
  margin-right: 2rem;
`;

const GalleryWrapper = styled.div`
  margin: 4rem 2rem 2rem 2rem;
  width: 100%;
`;
