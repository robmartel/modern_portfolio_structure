import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
  <FooterWrapper>
    <LinkList>
    <LinkColumn>
    <LinkTitle>Call</LinkTitle>
    <LinkItem href="tel:647-967-6859">647-967-6859</LinkItem>
    </LinkColumn>
    <LinkColumn>
    <LinkTitle>Email</LinkTitle>
    <LinkItem href="mailto:rob.martel32@gmail.com">rob.martel32@gmail.com</LinkItem>
    </LinkColumn>
    </LinkList>
    <SocialIconsContainer>
      <CompanyContainer>
        <Slogan>Thinking outside the box, living outside the comfort zone</Slogan>
      </CompanyContainer>
      <SocialContainer>
      <SocialIcons href="https://github.com/robmartel">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/rob-martel-1a8533b3/?originalSubdomain=ca">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      {/* <SocialIcons href="https://instagram.com">
        <AiFillInstagram size="3rem" />
      </SocialIcons> */}
      </SocialContainer>
    </SocialIconsContainer>
  </FooterWrapper>
  );
};

export default Footer;
