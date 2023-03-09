import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { HiOutlineFingerPrint } from 'react-icons/hi';

import { Container, Div1, Div2, Div3, NavLink, SocialIconsContainer, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: "20px" }}>
          <HiOutlineFingerPrint size="3rem" /> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
    <SocialIconsContainer>
      <SocialIcons href="https://github.com/robmartel">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/rob-martel-1a8533b3/?originalSubdomain=ca">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      {/* <SocialIcons href="https://instagram.com">
        <AiFillInstagram size="3rem" />
      </SocialIcons> */}
      </SocialIconsContainer>
    </Div3>
  </Container>
);

export default Header;
