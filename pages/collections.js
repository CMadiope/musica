import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import styles from "../styles/collections.module.css";
import MusicPlayer from "./components/MusicPlayer";

const collections = () => {
  return (
    <div>
      <Navbar />
      <MainSection>
        <SideMenu>
          <Sidebar />
          <Profile />
        </SideMenu>
        <Hero>
          <Buttons>
            <Button1>My collection</Button1>
            <Button2>Likes</Button2>
          </Buttons>

          <AlbumContainer>
            <Album className={styles.album1}>
              <AlbumInfo>
                <Title>Limits</Title>
                <Artist>John watts</Artist>
              </AlbumInfo>
            </Album>
            <Album className={styles.album2}>
              <AlbumInfo>
                <Title>Limits</Title>
                <Artist>John watts</Artist>
              </AlbumInfo>
            </Album>
            <Album className={styles.album3}>
              <AlbumInfo>
                <Title>Limits</Title>
                <Artist>John watts</Artist>
              </AlbumInfo>
            </Album>
            <Album className={styles.album4}>
              <AlbumInfo>
                <Title>Limits</Title>
                <Artist>John watts</Artist>
              </AlbumInfo>
            </Album>
          </AlbumContainer>
        </Hero>
      </MainSection>
      <MusicPlayer/>
    </div>
  );
};

export default collections;

const SideMenu = styled.div``;

const MainSection = styled.div`
  display: flex;
`;

const Hero = styled.div`
  padding-top: 96px;
  padding-left: 24px;
`;
const Buttons = styled.div``;

const Button1 = styled.button`
  color: #1d2123;
  width: 120px;
  height: 37px;
  border-radius: 27px;
  background: #facd66;
  border: none;
  font-size: 14px;
  margin-right: 10px;
  cursor: pointer;
`;

const Button2 = styled.button`
  font-size: 14px;
  width: 84px;
  height: 37px;
  border-radius: 27px;
  border: none;
  background: rgba(239, 238, 224, 0.25);
  color: #1d2123;
  cursor: pointer;
`;

const AlbumContainer = styled.div`
  padding-top: 23px;
  display: flex;
`;
const Album = styled.div`
  margin-right: 24px;
`;

const Title = styled.h3`
  color: rgba(239, 238, 224, 1);
  font-size: 24px;
`;

const AlbumInfo = styled.div`
  padding-top: 120px;
  padding-left: 19px;
`;

const Artist = styled.span`
  color: rgba(239, 238, 224, 1);
  font-size: 10px;
`;
