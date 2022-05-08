import React, { useState } from "react";
import {
  HeroSectionContainer,
  HeroSectionBg,
  VideoBg,
  ImageBg,
  HeroSectionContent,
  HeroSectionTitle,
  HeroSectionInfo,
  HeroSectionButtonWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroSection-styled-component";

import { Button } from "../Button";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroSectionContainer>
      <HeroSectionBg>
        <VideoBg loop autoPlay muted src={"/videos/bg.mp4"} type="video/mp4" />
      </HeroSectionBg>
      <HeroSectionContent>
        <HeroSectionTitle>
          Accounting matters. <br /> Try{" "}
          <span style={{ color: "#2ca01c" }}>QUICK BOOK </span> NOW
        </HeroSectionTitle>
        <HeroSectionInfo>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          commodi id. Saepe consequatur hic corporis ratione exercitationem
          labore quaerat cupiditate maxime perferendis aliquam, adipisci ab
          commodi! Voluptatem laudantium temporibus quis.
        </HeroSectionInfo>
        <HeroSectionButtonWrapper>
          <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
            Get Started
            {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroSectionButtonWrapper>
      </HeroSectionContent>
    </HeroSectionContainer>
  );
};

export default HeroSection;
