import React from "react";
import styled from "styled-components";
import Image from "next/image";
import logo from "../../public/img/logo.png";
import icon from "../../public/img/search.png";

const Navbar = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={logo} width={34} height={34} alt='logo' />
      </ImageWrapper>

      <Form>
        <Icon>
          <Image src={icon} alt='search' width={16} height={16} />
        </Icon>
        <Input placeholder='Search' />
      </Form>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  display: flex;
  /* justify-content: space-between; */
  margin-left: 20px;
  margin-top: 20px;
`;
const Form = styled.form`
  display: flex;
  align-items: center;
  width: 1122px;
  height: 96px;
  background-color: #1d2123;
  /* padding-left: 34px; */
  /* padding-right: 96px; */
`;
const Input = styled.input`
  font-size: 14px;
  line-height: 17.5px;
  width: 100%;
  height: 80%;
  border: none;
  color: rgba(255, 255, 255, 0.25);
  outline: none;
  background: #1d2123;
`;

const ImageWrapper = styled.div`
  margin-left: 27px;
  margin-top: 23px;
  margin-right: 34px
`;

const Icon = styled.div`
  padding-left: 91px;
  padding-right: 36px;
  cursor: pointer;
`;
