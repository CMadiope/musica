import React from "react";
import styled from "styled-components";
import styles from "../styles/tomorrow.module.css";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import hero from "../public/img/Lead-image.png";
import play from "../public/img/smallplay.png";
import addIcon from "../public/img/music-square-add.png";
import heart from "../public/img/smallheart.png";
import track1 from "../public/img/single1.png";
import track2 from "../public/img/single2.png";
import track3 from "../public/img/single3.png";
import track4 from "../public/img/single4.png";
import track5 from "../public/img/single5.png";
import track6 from "../public/img/single6.png";
import options from "../public/img/options.png";
import singleHeart from "../public/img/singleheart.png";
import MusicPlayer from "../pages/components/MusicPlayer";

const tomorrow = () => {
  return (
    <div className={styles.container}>
      <Gradient>
        <Navbar />
        <MainSection>
          <SideMenu>
            <Sidebar />
            <Profile />
          </SideMenu>
          <MidSection>
            <Hero>
              <HeroImg>
                <Image src={hero} alt='tomorrows tunes' />
              </HeroImg>
              <HeroInfo>
                <Title>Tomorrow’s tunes</Title>
                <Description>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  fuga repellendus ipsa impedit. Hic sed recusandae maxime aut
                  temporibus non.
                </Description>
                <Content>64 songs ~ 16 hrs+</Content>
                <Buttons>
                  <Play>
                    <PlayIcon>
                      <Image src={play} alt='play' />
                    </PlayIcon>
                    Play all
                  </Play>
                  <AddCollection>
                    <AddIcon>
                      <Image src={addIcon} alt='music collection' />
                    </AddIcon>
                    Add to collection
                  </AddCollection>
                  <Like>
                    <Heart>
                      <Image src={heart} alt='like' />
                    </Heart>
                  </Like>
                </Buttons>
              </HeroInfo>
            </Hero>
            <PlayList>
              <Single>
                <ArtWork>
                  <Picture>
                    <Image src={track1} alt='track 1' />
                  </Picture>
                  <Favourate>
                    <Image src={singleHeart} alt='like' />
                  </Favourate>
                </ArtWork>
                <TrackName>Let me love you ~ Krisx</TrackName>
                <AlbumName>Single</AlbumName>
                <Duration>4:17</Duration>
                <Options>
                  <Image src={options} alt='options' />
                </Options>
              </Single>
              <Single2>
                <ArtWork>
                  <Picture>
                    <Image src={track2} alt='track 2' />
                  </Picture>
                  <Favourate>
                    <Image src={singleHeart} />
                  </Favourate>
                </ArtWork>
                <TrackName>Watin man go do ~ Burna</TrackName>
                <AlbumName>African giant</AlbumName>
                <Duration>2:30</Duration>
                <Options>
                  <Image src={options} alt='options' />
                </Options>
              </Single2>
              <Single3>
                <ArtWork>
                  <Picture>
                    <Image src={track3} alt='track 3' />
                  </Picture>
                  <Favourate>
                    <Image src={singleHeart} alt='like' />
                  </Favourate>
                </ArtWork>
                <TrackName>Stand strong ~ Davido</TrackName>
                <AlbumName>Single</AlbumName>
                <Duration>2:02</Duration>
                <Options>
                  <Image src={options} alt='options' />
                </Options>
              </Single3>
              <Single4>
                <ArtWork>
                  <Picture>
                    <Image src={track4} alt='track 4' />
                  </Picture>
                  <Favourate>
                    <Image src={singleHeart} alt='like' />
                  </Favourate>
                </ArtWork>
                <TrackName>Closa ~ Ybee</TrackName>
                <AlbumName>Obi datti</AlbumName>
                <Duration>3:23</Duration>
                <Options>
                  <Image src={options} alt='options' />
                </Options>
              </Single4>
              <Single5>
                <ArtWork>
                  <Picture>
                    <Image src={track5} alt='track 5' />
                  </Picture>
                  <Favourate>
                    <Image src={singleHeart} alt='like' />
                  </Favourate>
                </ArtWork>
                <TrackName>Let me love you ~ Krisx</TrackName>
                <AlbumName>Single</AlbumName>
                <Duration>4:17</Duration>
                <Options>
                  <Image src={options} alt='options' />
                </Options>
              </Single5>
              <Single6>
                <ArtWork>
                  <Picture>
                    <Image src={track6} alt='track 6' />
                  </Picture>
                  <Favourate>
                    <Image src={singleHeart} alt='like' />
                  </Favourate>
                </ArtWork>
                <TrackName>Closa ~ Ybee</TrackName>
                <AlbumName>Obi datti</AlbumName>
                <Duration>3:24</Duration>
                <Options>
                  <Image src={options} alt='options' />
                </Options>
              </Single6>
              <MusicPlayer className={styles.player} />
            </PlayList>
          </MidSection>
        </MainSection>
      </Gradient>
    </div>
  );
};

export default tomorrow;

const Gradient = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(29, 33, 35, 0.8),
    rgba(29, 33, 35, 1)
  );
`;

const MainSection = styled.div`
  display: flex;
`;

const SideMenu = styled.div``;

const Hero = styled.div`
  display: flex;
  padding-left: 25px;
`;

const HeroImg = styled.div`
  padding-top: 49px;
`;

const HeroInfo = styled.div`
  padding-left: 27px;
`;

const Title = styled.h3`
  color: rgba(164, 199, 198, 1);
  font-size: 35px;
  line-height: 42px;
  padding-top: 73px;
`;

const Description = styled.p`
  color: rgba(239, 238, 224, 1);
  font-size: 14px;
  line-height: 17px;
  width: 527px;
`;

const Content = styled.span`
  color: rgba(239, 238, 224, 1);
  font-size: 14px;
  line-height: 17px;
`;

const Buttons = styled.div`
  padding-top: 40px;
  display: flex;
`;

const Play = styled.button`
  width: 87px;
  height: 36px;
  padding: 11px;
  color: rgba(255, 255, 255, 1);
  background: rgba(255, 255, 255, 0.07);
  border: none;
  border-radius: 32px;
  font-size: 12px;
  margin-right: 9px;
  display: flex;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    color: rgba(255, 255, 255, 0.5);
  }
`;

const PlayIcon = styled.div`
  padding-right: 11px;
`;

const AddCollection = styled(Play)`
  width: 151px;
`;

const AddIcon = styled.div`
  padding-right: 11px;
`;

const Like = styled(Play)`
  border-radius: 50%;
  height: 36px;
  width: 36px;
`;

const Heart = styled.div``;

const PlayList = styled.div`
  padding-left: 24px;
  padding-top: 49px;
  /* height: 100vh; */
`;

const Single = styled.div`
  width: 1125px;
  height: 56px;
  background-color: rgba(51, 55, 59, 0.37);
  border-radius: 15px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

const MidSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const ArtWork = styled.div`
  display: flex;
  padding: 8px;
`;

const Picture = styled.div`
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;

const Favourate = styled.div`
  padding-left: 20.13px;
  padding-top: 12px;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;

const TrackName = styled.p`
  color: rgba(255, 255, 255, 1);
  font-size: 12px;
  padding-top: 8px;
  cursor: pointer;

  &:hover {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const AlbumName = styled(TrackName)`
  cursor: pointer;
`;

const Duration = styled(TrackName)`
  cursor: pointer;
  /* padding-right: 160px; */
`;

const Options = styled.div`
  padding-top: 18px;
  padding-right: 20px;
  cursor: pointer;
`;

const Single2 = styled(Single)``;
const Single3 = styled(Single)``;
const Single4 = styled(Single)``;
const Single5 = styled(Single)``;
const Single6 = styled(Single)``;
