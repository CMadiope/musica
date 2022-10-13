import React from "react";
import styled from "styled-components";
import Image from "next/image";
import golden from "../../public/img/GoldenAge.png";
import reggae from "../../public/img/Reggae.png";
import stroke from "../../public/img/Stroke-1.png";
import tunes from "../../public/img/tunes.png";
import Link from "next/link";

const TopCharts = () => {
  return (
    <Wrapper>
      <Heading1>Top Charts</Heading1>
      <Card1>
        <Flex>
          <Album>
            <Image src={golden} alt='golden age of 80s' />
          </Album>
          <AlbumInfo>
            <Title>Golden age of 80s</Title>
            <Artist>Sean swadder</Artist>
            <Duration>2:43:45</Duration>
          </AlbumInfo>

          <Heart>
            <HeartContainer>
              <Image className='heart' src={stroke} alt='heart' />
            </HeartContainer>
          </Heart>
        </Flex>
      </Card1>
      <Card2>
        <Flex>
          <Album>
            <Image src={reggae} alt='reggae n blues' />
          </Album>
          <AlbumInfo>
            <Title>Reggae “n” blues</Title>
            <Artist>Dj YK mule</Artist>
            <Duration>1:02:42</Duration>
          </AlbumInfo>
          <Heart>
            <HeartContainer>
              <Image className='heart' src={stroke} alt='heart' />
            </HeartContainer>
          </Heart>
        </Flex>
      </Card2>
      <Link href='/tomorrow'>
        <Card3>
          <Flex>
            <Album>
              <Image src={tunes} alt='tomorrows tunes' />
            </Album>
            <AlbumInfo>
              <Title>Tomorrow’s tunes</Title>
              <Artist>Obi Datti</Artist>
              <Duration>2:01:25</Duration>
            </AlbumInfo>
            <Heart>
              <HeartContainer>
                <Image className='heart' src={stroke} alt='heart' />
              </HeartContainer>
            </Heart>
          </Flex>
        </Card3>
      </Link>
    </Wrapper>
  );
};

export default TopCharts;

const Wrapper = styled.div`
  width: 420px;
  padding-top: 90px;
`;

const Heading1 = styled.h3`
  color: #efeee0;
  font-size: 24px;
  line-height: 24px;
  padding-left: 25px;
`;
const Card1 = styled.div`
  width: 417px;
  height: 96px;
  border-radius: 20px;
  background-color: #1a1e1f;
  margin-left: 20px;

  /* cursor: pointer; */

  &:hover {
    transform: scale(1.06);
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Album = styled.div`
  padding: 17px;
`;
const AlbumInfo = styled.div`
  flex-wrap: nowrap;
  padding-right: 110px;
`;

const Title = styled.h3`
  color: white;
  font-size: 17px;
  line-height: 20.4px;
  font-weight: lighter;

  &:hover {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const Artist = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  margin-top: -10px;
`;

const Duration = styled.span`
  color: white;
  font-size: 12px;
`;
const Card2 = styled(Card1)`
  margin-top: 12px;
`;

const Heart = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.11);
  border-radius: 50%;
  width: 37px;
  height: 37px;
  margin-top: 30px;
  margin-right: 21px;

  .heart {
    margin-left: 2px;
  }
`;

const HeartContainer = styled.div`
  margin-left: 10px;
  margin-top: 10px;
`;

const Card3 = styled(Card1)`
  margin-top: 12px;
`;
