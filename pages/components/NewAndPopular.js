import React from "react";
import styled from "styled-components";
import Image from "next/image";
import pic1 from "../../public/img/Rectangle 14 (1).png";
import pic2 from "../../public/img/Rectangle 14 (2).png";
import pic3 from "../../public/img/Rectangle 14 (3).png";
import pic4 from "../../public/img/Rectangle 14 (4).png";
import pic5 from "../../public/img/Rectangle 14 (5).png";
import pic6 from "../../public/img/Rectangle 14 (6).png";

const NewAndPopular = () => {
  return (
    <Wrapper>
      <NewReleases>
        <Heading>New releases</Heading>
        <AblumContainer>
          <Album>
            <Image src={pic1} alt='album-cover' />
            <AlbumName>Mountain</AlbumName>
          </Album>
          <Album>
            <Image src={pic2} alt='album-cover' />
            <AlbumName>Limits</AlbumName>
          </Album>
          <Album>
            <Image src={pic3} alt='album-cover' />
            <AlbumName>Everything's black</AlbumName>
          </Album>
          <Album>
            <Image src={pic4} alt='album-cover' />
            <AlbumName>Cancelled</AlbumName>
          </Album>
          <Album>
            <Image src={pic5} alt='album-cover' />
            <AlbumName>Nomad</AlbumName>
          </Album>
          <Album>
            <Image src={pic6} alt='album-cover' />
            <AlbumName>Blind</AlbumName>
          </Album>
        </AblumContainer>
      </NewReleases>
      <Popular>
        <Heading>Popular in your area</Heading>
        <AblumContainer>
          <Album>
            <Image src={pic1} alt='album-cover' />
            <AlbumName>Mountain</AlbumName>
          </Album>
          <Album>
            <Image src={pic2} alt='album-cover' />
            <AlbumName>Limits</AlbumName>
          </Album>
          <Album>
            <Image src={pic3} alt='album-cover' />
            <AlbumName>Everything's black</AlbumName>
          </Album>
          <Album>
            <Image src={pic4} alt='album-cover' />
            <AlbumName>Cancelled</AlbumName>
          </Album>
          <Album>
            <Image src={pic5} alt='album-cover' />
            <AlbumName>Nomad</AlbumName>
          </Album>
          <Album>
            <Image src={pic6} alt='album-cover' />
            <AlbumName>Blind</AlbumName>
          </Album>
        </AblumContainer>
      </Popular>
    </Wrapper>
  );
};

export default NewAndPopular;

const Wrapper = styled.div`
  padding-top: 43px;
`;

const NewReleases = styled.div``;

const Heading = styled.h3`
  color: #efeee0;
  font-size: 24px;
  line-height: 120%;
  padding-left: 96px;
`;

const AblumContainer = styled.div`
  height: 216px;
  display: flex;
  padding-left: 96px;
`;
const Album = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 30px;
`;

const AlbumName = styled.span`
  color: white;
  font-size: 12px;
  padding-top: 5px;
  line-height: 15px;
`;

const Popular = styled.div``;
