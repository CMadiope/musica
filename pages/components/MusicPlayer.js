import React from "react";
import styled from "styled-components";
import Image from "next/image";
import art from "../../public/img/song.png";
import play from "../../public/img/play.png";
import previous from "../../public/img/previous.png";
import next from "../../public/img/next.png";
import repeat from "../../public/img/repeate-one.png";
import shuffle from "../../public/img/shuffle.png";
import icon from '../../public/img/volume-high.png'

const MusicPlayer = () => {
  return (
    <Wrapper>
      <SongInfo>
        <ArtWork>
          <Image src={art} alt='artwork' />
        </ArtWork>
        <Song>
          <SongName>Seasons in</SongName>
          <ArtistName>James</ArtistName>
        </Song>
      </SongInfo>
      <SongControls>
        <PlayControls>
          <Shuffle>
            <Image src={shuffle} alt='shuffle' />
          </Shuffle>
          <Previous>
            <Image src={previous} alt='previous' />
          </Previous>
          <Play>
            <Image src={play} alt='play' />
          </Play>
          <Next>
            <Image src={next} alt='next' />
          </Next>
          <Repeat>
            <Image src={repeat} alt='repeat' />
          </Repeat>
        </PlayControls>
        <SeekControls>
          <Full>
            <Half></Half>
          </Full>
        </SeekControls>
      </SongControls>
      <VolumeControls>
        <Icon>
          <Image 
            src={icon}
            alt='volume high'
          />
        </Icon>
        <Volume>
          <Level></Level>
        </Volume>
      </VolumeControls>
    </Wrapper>
  );
};

export default MusicPlayer;

const Wrapper = styled.div`
  height: 125px;
  background: rgba(16, 16, 16, 0.51);
  margin-top: 332px;
  display: flex;
  padding-left: 101px;
`;

const SongInfo = styled.div`
  display: flex;
  padding-top: 32px;
`;

const ArtWork = styled.div`
  cursor: pointer;
`;

const Song = styled.div`
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  
`;

const SongName = styled.span`
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  cursor: pointer;
`;

const ArtistName = styled.span`
  color: rgba(255, 255, 255, 0.44);
  font-size: 10px;
  cursor: pointer;
`;

const SongControls = styled.div`
  padding-left: 35px;
`;

const PlayControls = styled.div`
  display: flex;
  padding-left: 282.5px;
  padding-top: 15px;
`;

const SeekControls = styled.div`
  cursor: pointer;
`;

const Shuffle = styled.div`
  padding-right: 45px;
  cursor: pointer;
  padding-top: 20px;
`;

const Previous = styled.div`
  padding-right: 45px;
  cursor: pointer;
  padding-top: 20px;
`;

const Play = styled.div`
  padding-right: 45px;
  cursor: pointer;
`;

const Next = styled.div`
  padding-right: 45px;
  cursor: pointer;
  padding-top: 20px;
`;
const Repeat = styled.div`
  cursor: pointer;
  padding-top: 20px;
`;

const Full = styled.div`
  width: 749px;
  height: 4px;
  background: rgba(255, 255, 255, 0.04);
`;

const Half = styled.div`
  width: 254px;
  height: 4px;
  background-color: rgba(250, 205, 102, 1);
`;

const VolumeControls = styled.div`
  display: flex;
  padding-left: 23.94px;
  padding-top: 46px;
`

const Icon = styled.div`
  padding-right: 12.19px;
  cursor: pointer
`

const Volume = styled.div`
  width: 160px;
  height: 3px;
  background-color: rgba(255, 255, 255, 0.1);
  margin-top: 8px;
  cursor: pointer;
`;

const Level = styled.div`
  width: 51px;
  height: 3px;
  background-color: rgba(250, 205, 102, 1);
  
`;