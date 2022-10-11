import React from "react";
import styled from "styled-components";
import Image from "next/image";
import vector from "../../public/img/Hero1-Vector.png";
import hero1 from "../../public/img/Hero1.png";
import frame from "../../public/img/Frame 4.png";
import heart from "../../public/img/Heart.png";

const Hero = () => {
  return (
    <Wrapper>
      <MainSection>
        <Vector>
          <Image
            src={vector}
            alt={vector}
            // width={1115.62}
            height={380}
          />
        </Vector>
        <IMG>
          <Image
            src={hero1}
            alt='hero'
            width={380.67}
            height={380}
            className='heroImg'
          />
        </IMG>
        <Heading1>Currated playlist</Heading1>
        <Heading2>R & B Hits</Heading2>
        <PContainer>
          <P>
            All mine, Lie again, Petty call me everyday, Out of time, No love,
            Bad habit, and so much more
          </P>
        </PContainer>
        <Frame>
          <Image src={frame} alt='avatars' width={64} height={20} />
        </Frame>
        <Heart>
          <Image src={heart} alt='heart' width={13.33} height={12.67} />
        </Heart>
        <Likes>33K Likes</Likes>
      </MainSection>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.div`
  padding-left: 24px;
  padding-top: 96px;
`;
const MainSection = styled.div`
  background-color: #609eaf;
  width: 686px;
  height: 380px;
  border-radius: 40px;
`;

const Vector = styled.div`
  color: white;
  padding-left: 186px;

  img {
    border-radius: 0 40px 0 0;
  }
`;
const IMG = styled.div`
  position: relative;
  top: -384px;
  left: 300px;
`;

const Heading1 = styled.p`
  position: relative;
  color: white;
  font-weight: 400;
  padding-left: 45px;
  font-size: 12px;
  top: -740px;
`;

const Heading2 = styled.h3`
  position: relative;
  color: white;
  font-weight: bold;
  font-size: 35px;
  padding-left: 45px;
  top: -700px;
`;

const P = styled.p`
  color: white;
  line-height: 120%;
  font-weight: 400;
  font-size: 14px;
`;
const PContainer = styled.div`
  width: 276px;
  height: 51px;
  position: relative;
  padding-left: 45px;
  top: -720px;
`;
const Frame = styled.div`
  position: relative;
  padding-left: 45px;
  top: -640px;
  cursor: pointer;
`;

const Heart = styled.div`
  position: relative;
  padding-left: 130.33px;
  top: -663px;
`;

const Likes = styled.p`
  font-size: 14px;
  color: white;
  position: relative;
  padding-left: 152px;
  top: -696px;
`;
