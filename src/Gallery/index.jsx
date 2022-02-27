import styled from "styled-components";
import { useState } from "react";

import Thumb1 from "../assets/image-product-1-thumbnail.jpg";
import Thumb2 from "../assets/image-product-2-thumbnail.jpg";
import Thumb3 from "../assets/image-product-3-thumbnail.jpg";
import Thumb4 from "../assets/image-product-4-thumbnail.jpg";

import Next from "../assets/icon-next.svg";
import Prev from "../assets/icon-previous.svg";

import { useCart } from "../Context";

export default function GalleryComponent({ inLightBox }) {
  const [imgNbr, setImgNbr] = useState(1);
  const { dispatch } = useCart();
  return (
    <Gallery>
      <MainWrapper>
        <MainImg
          src={require(`../assets/image-product-${imgNbr}.jpg`)}
          alt={`image-product-${imgNbr}.jpg`}
          onClick={() => {
            dispatch({ type: "set-lightbox" });
          }}
        />
        {inLightBox && (
          <PrevBtn
            onClick={() => {
              if (imgNbr > 1) setImgNbr(imgNbr - 1);
            }}
          >
            <img src={Prev} alt="prev" width="15px" />
          </PrevBtn>
        )}
        {inLightBox && (
          <NextBtn
            onClick={() => {
              if (imgNbr < 4) setImgNbr(imgNbr + 1);
            }}
          >
            <img src={Next} alt="next" width="15px" />
          </NextBtn>
        )}
      </MainWrapper>
      <Thumbnails>
        <ThumContainer>
          <ThumbImg
            src={Thumb1}
            alt="thumb-1"
            isActive={imgNbr === 1}
            onClick={() => setImgNbr(1)}
          />
        </ThumContainer>
        <ThumContainer>
          <ThumbImg
            src={Thumb2}
            alt="thumb-2"
            isActive={imgNbr === 2}
            onClick={() => setImgNbr(2)}
          />
        </ThumContainer>
        <ThumContainer>
          <ThumbImg
            src={Thumb3}
            alt="thumb-3"
            isActive={imgNbr === 3}
            onClick={() => setImgNbr(3)}
          />
        </ThumContainer>
        <ThumContainer>
          <ThumbImg
            src={Thumb4}
            alt="thumb-4"
            isActive={imgNbr === 4}
            onClick={() => setImgNbr(4)}
          />
        </ThumContainer>
      </Thumbnails>
    </Gallery>
  );
}

const Gallery = styled.div`
  margin: 0;
  width: 100%;
`;

const MainImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 2rem;
`;

const Thumbnails = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
`;

const ThumbImg = styled.img`
  border-radius: 2rem;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  ${({ isActive }) =>
    isActive
      ? `border: 3px solid orange; opacity: 0.5;`
      : `border: 3px solid white;`}
`;

const ThumContainer = styled.div`
  width: 20%;
  background-color: white;
  border-radius: 2rem;
  display: flex;
`;

const MainWrapper = styled.div`
  position: relative;
`;

const PrevBtn = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  top: 50%;
  transform: translate(-50%, 0);
`;
const NextBtn = styled(PrevBtn)`
  left: 100%;
  transform: translate(-50%, 0);
`;
