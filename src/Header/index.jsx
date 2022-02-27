import { useState, useEffect } from "react";
import styled from "styled-components";

import Logo from "../assets/logo.svg";
import Bag from "../assets/icon-cart.svg";
import AvatarLogo from "../assets/image-avatar.png";
import { useCart } from "../Context";
import Delete from "../assets/icon-delete.svg";

import ProductThumb from "../assets/image-product-1-thumbnail.jpg";

export default function Header() {
  const [clicked, setClicked] = useState(false);
  const {
    state: { quantity },
    dispatch,
  } = useCart();
  useEffect(() => {
    function closeCartModal(e) {
      if (!e.target.closest(".cart")) setClicked(false);
    }
    window.addEventListener("click", closeCartModal);
    return () => window.removeEventListener("click", closeCartModal);
  });
  return (
    <HeaderContainer>
      <HeaderLinks>
        <a href="/">
          <LogoImg src={Logo} alt="logo" />
        </a>
        <Link href="/">Collection</Link>
        <Link href="/">Men</Link>
        <Link href="/">Women</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
      </HeaderLinks>
      <HeaderLinks>
        <Cart className="cart" onClick={() => setClicked(true)}>
          <LogoCart src={Bag} alt="cart" />
          {quantity !== 0 && <Badge>{quantity}</Badge>}
          {clicked && (
            <CartContent className="cart">
              <CartHeader>Cart</CartHeader>
              <CartBody>
                {quantity > 0 ? (
                  <CartMain>
                    <CartDetails>
                      <CartThumb src={ProductThumb} alt="thumbnail" />
                      <CartBodyContent>
                        <CartBodyP>Fall limited edition sneakers</CartBodyP>
                        <CartBodyP>
                          $120.00 x {quantity} ={" "}
                          <CartBodySpan>
                            ${(120.0 * quantity).toFixed(2)}
                          </CartBodySpan>
                        </CartBodyP>
                      </CartBodyContent>
                      <DeleteIcon
                        src={Delete}
                        alt="delete"
                        onClick={() => {
                          dispatch({ type: "remove-product" });
                        }}
                      />
                    </CartDetails>
                    <CartCheckout>Checkout</CartCheckout>
                  </CartMain>
                ) : (
                  <CartEmpty>
                    <CartEmptyText>Your cart is empty.</CartEmptyText>
                  </CartEmpty>
                )}
              </CartBody>
            </CartContent>
          )}
        </Cart>
        <Avatar clicked={clicked}>
          <AvatarImg
            className="cart"
            src={AvatarLogo}
            alt="avatar"
            onClick={() => setClicked(!clicked)}
          />
        </Avatar>
      </HeaderLinks>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgrey;
  box-sizing: border-box;
`;

const HeaderLinks = styled.div`
  display: flex;
  align-items: center;
`;

const Link = styled.a`
  text-decoration: none;
  color: gray;
  margin: 0 1rem;
  height: 3.25rem;
  box-sizing: border-box;
  line-height: 3rem;
  &:hover {
    color: black;
    border-bottom: 3px solid orange;
  }
`;

const LogoImg = styled.img`
  height: 1.5rem;
  width: auto;
  padding-right: 2rem;
`;

const Cart = styled.div`
  position: relative;
`;

const CartContent = styled.div`
  position: absolute;
  inset: 0;
  width: 300px;
  height: 200px;
  box-shadow: 0px 5px 10px 0px grey;
  transform: translate(-50%, 20%);
  border-radius: 10px;
  background-color: white;
`;

const LogoCart = styled.img`
  height: 1.5rem;
  width: 1.5rem;
`;

const Avatar = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  margin: 0 3rem;
  cursor: pointer;
  ${({ clicked }) =>
    clicked ? `border: 3px solid orange;` : `border: 3px solid white;`}
`;

const AvatarImg = styled.img`
  height: 100%;
  width: 100%;
`;

const CartHeader = styled.div`
  border-bottom: 1px solid lightgrey;
  padding: 1rem;
  font-weight: bold;
  font-size: 1.25rem;
`;

const Badge = styled.div`
  background: orange;
  color: white;
  position: absolute;
  top: 0;
  right: 0;
  width: 1rem;
  border-radius: 5px;
  text-align: center;
  transform: translate(2px, -5px);
  font-size: 0.75rem;
`;

const CartBody = styled.div``;

const CartDetails = styled.div`
  display: flex;
  align-items: center;
`;

const CartThumb = styled.img`
  width: 70px;
  border-radius: 5px;
  margin: 0.5rem;
`;

const CartBodyP = styled.p`
  margin: 0 0.5rem;
  color: grey;
`;

const CartBodyContent = styled.div``;

const DeleteIcon = styled.img`
  margin: 0.5rem;
  cursor: pointer;
`;

const CartBodySpan = styled.span`
  color: black;
`;

const CartCheckout = styled.button`
  height: 2.5rem;
  border-radius: 5px;
  width: 95%;
  cursor: pointer;
  background: #ff7c1b;
  border: 0;
  color: white;
  font-weight: bold;
`;

const CartMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CartEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 140px;
`;

const CartEmptyText = styled.p`
  color: grey;
  font-weight: bold;
`;
