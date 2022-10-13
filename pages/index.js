import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import Hero from "./components/Hero";
import styled from "styled-components";
import TopCharts from "./components/TopCharts";
import NewAndPopular from "./components/NewAndPopular";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Musica</title>
        <meta name='description' content='Generated by create next app' />
        
      </Head>

      <Navbar />
      <MainSection>
        <SideMenu>
          <Sidebar />
          <Profile />
        </SideMenu>
        <Charts>
          <Hero />
          <TopCharts />
        </Charts>
      </MainSection>
      <NewAndPopular />
    </div>
  );
}

const SideMenu = styled.div``;
const MainSection = styled.div`
  display: flex;
`;

const Charts = styled.div`
  display: flex;
`;
