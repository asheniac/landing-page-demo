import styled from "styled-components";

import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroSectionContainer = styled.div`
  background: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 768px) {
    height: 60vh;
  }

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(rgba(0, 0, 0, 0.2)),
        to(rgba(0, 0, 0, 0.2))
      ),
      -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.2)), to(transparent));
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.4) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HeroSectionBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100vh;
  -o-object-fit: cover;
  object-fit: cover;
  background: #000000;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 60vh;
    -o-object-fit: cover;
    object-fit: cover;
    background: #000000;
  }
`;

export const ImageBg = styled.div`
  // background-image: url("/img/bg.png");
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const HeroSectionContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin-top: -20%;
  }
`;

export const HeroSectionTitle = styled.h1`
  color: #fff;
  font-size: 6rem;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const HeroSectionInfo = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
export const HeroSectionButtonWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
