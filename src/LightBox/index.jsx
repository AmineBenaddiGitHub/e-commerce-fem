import styled from "styled-components";
import { useCart } from "../Context";
import Gallery from "../Gallery";
import Close from "../assets/icon-close.svg";

function App() {
  const {
    state: { lightBox },
    dispatch,
  } = useCart();
  return (
    <>
      {lightBox && (
        <>
          <ModalBackground />
          <GalleryWrapper>
            <CloseWrapper>
              <CloseImg
                src={Close}
                alt="close"
                width="30px"
                onClick={() => {
                  dispatch({ type: "unset-lightbox" });
                }}
              />
            </CloseWrapper>
            <Gallery inLightBox />
          </GalleryWrapper>
        </>
      )}
    </>
  );
}

export default App;

const ModalBackground = styled.div`
  background: black;
  opacity: 0.5;
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const GalleryWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 30%;
  height: 100%;
  z-index: 1;
  transform: translate(-50%, -50%);
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 3rem 0.5rem 1rem 0;
`;

const CloseImg = styled.img`
  cursor: pointer;
`;
