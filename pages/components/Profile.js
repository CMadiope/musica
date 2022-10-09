import React from 'react'
import styled from 'styled-components';
import Image from 'next/image';
import profile from '../../public/img/profile.png'
import logout from '../../public/img/Logout.png'

const Profile = () => {
  return (
    <Wrapper>
      <ProfileIcon>
        <Image 
          src={profile}
          alt='profile'
          width={22}
          height={22}
        />
      </ProfileIcon>
      <LogoutIcon>
        <Image 
          src={logout}
          alt='profile'
          width={22}
          height={22}
        />
      </LogoutIcon>
    </Wrapper>
  )
}

export default Profile;

const Wrapper = styled.div`
  background: #1a1e1f;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 52px;
  height: 127px;
  border-radius: 32px;
  margin-left: 20px;
  margin-top: 20px;
  justify-content: center;
`;

const ProfileIcon = styled.div`
  margin-bottom: 15px;
`
const LogoutIcon = styled.div`

`
