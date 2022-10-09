import React from 'react'
import styled from 'styled-components';
import Image from 'next/image';
import home from '../../public/img/home.png'
import library from '../../public/img/music.png'
import radio from '../../public/img/radio.png'
import video from '../../public/img/videos.png'

const Sidebar = () => {
  return (
    <Container>
      <HomeIcon>
        <Image 
          src={home}
          alt='home'
          width={30}
          height={30}
        />
      </HomeIcon>
      <LibraryIcon>
        <Image 
          src={library}
          alt='home'
          width={22}
          height={22}
        />
      </LibraryIcon>
      <RadioIcon>
        <Image 
          src={radio}
          alt='home'
          width={22}
          height={22}
        />
      </RadioIcon>
      <VideoIcon>
        <Image 
          src={video}
          alt='home'
          width={22}
          height={22}
        />
      </VideoIcon>
    </Container>
  )
}

export default Sidebar;

const Container = styled.div`
  width: 52px;
  height: 230px;
  background: #1a1e1f;
  display: flex;
  flex-direction: column;
  margin-left: 21px;
  border-radius: 32px;
  align-items: center;
  margin-top: 96px;
  padding-top: 26.83px;
  padding-bottom: 26.83px;
  justify-content: space-between;
`;

const HomeIcon = styled.div`

`

const LibraryIcon = styled.div`

`
const RadioIcon = styled.div`

`
const VideoIcon = styled.div`

`