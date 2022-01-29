import { MdOutlineCloudDownload } from "react-icons/md";
import { FiArrowDownCircle } from "react-icons/fi";
import { FaInstagram, FaGithub, FaDribbble, FaBehance } from "react-icons/fa";
import { BiCodeBlock, BiLayout, BiMobile, BiRocket } from "react-icons/bi";

import * as SC from '../styles/mainStyle'

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `


export default function Home() {
  return( 
    <SC.Main>
    <SC.ContainerMenu>
      <SC.Menu>
        <SC.MenuOption><SC.MenuLink to="home" spy={true} smooth={true}>Home</SC.MenuLink></SC.MenuOption>
        <SC.MenuOption><SC.MenuLink to="about" spy={true} smooth={true}>Bio</SC.MenuLink></SC.MenuOption>
        <SC.MenuOption><SC.MenuLink to="portfolio" spy={true} smooth={true}>Portfolio</SC.MenuLink></SC.MenuOption>
        <SC.MenuOption><SC.MenuLink to="contact" spy={true} smooth={true}>Contact</SC.MenuLink></SC.MenuOption>
      </SC.Menu>
    </SC.ContainerMenu>
    <SC.ContainerNavigationRight>
      <SC.CircleNav to="home" spy={true} smooth={true}/>
      <SC.CircleNav to="about" spy={true} smooth={true}/>
      <SC.CircleNav to="portfolio" spy={true} smooth={true}/>
      <SC.CircleNav to="contact" spy={true} smooth={true}/>
    </SC.ContainerNavigationRight>
    <SC.ContainerMainBG>
      <SC.LeftBG></SC.LeftBG>
      <SC.RightBG></SC.RightBG>
    </SC.ContainerMainBG>
      <SC.SectionHero id="home">
        <SC.ContainerLeft>
          <SC.ContentLeft>
            <SC.Name>THIAGO LEÃO</SC.Name>
            <SC.Line/>
            <SC.TitleMain>Front-end Developer	&amp; UI Designer</SC.TitleMain>
            <SC.TitleMainStroke>Front-end Developer &amp; UI Designer</SC.TitleMainStroke>
            <SC.Description>Front-end developer focused on creating Web and Mobile applications. I really like different projects that solve real problems.</SC.Description>
            <SC.ContainerButtonsMain>
              <SC.ButtonCV><MdOutlineCloudDownload color="white" size="1.8em"/>Download CV</SC.ButtonCV>
              <SC.ButtonPortfolio><FiArrowDownCircle color="var(--bg-primary)" size="1.5em"/>Portfolio</SC.ButtonPortfolio>
            </SC.ContainerButtonsMain>
            <SC.ContainerSocial>
              <SC.CircleSocial>
                <FaInstagram color="white" size="1.8em"/>
              </SC.CircleSocial>
              <SC.CircleSocial>
                <FaGithub color="white" size="1.8em"/>
              </SC.CircleSocial>
              <SC.CircleSocial>
                <FaDribbble color="white" size="1.8em"/>
              </SC.CircleSocial>
              <SC.CircleSocial>
                <FaBehance color="white" size="1.8em"/>
              </SC.CircleSocial>
          </SC.ContainerSocial>
          </SC.ContentLeft>
          <SC.RotateBG/>
        </SC.ContainerLeft>
        <SC.ContainerRight>
          <SC.ContainerImage>
            <SC.MainImage src="/portifolio_grey.png" layout='fill' objectFit="cover" quality={100}/>
            <SC.Circle/>
          </SC.ContainerImage>
        </SC.ContainerRight>
      </SC.SectionHero>

      <SC.SectionAbout id="about">
        <SC.Content>
          <SC.TitleAbout>ABOUT ME</SC.TitleAbout>
          <SC.ContainerDescAbout>
            <SC.TextDescAbout>I'm <SC.GreenText>Thiago Leão</SC.GreenText>, I'm <SC.GreenText>20</SC.GreenText> years old and I live in <SC.GreenText>São Vicente-SP</SC.GreenText>.<SC.GreenText> Front-end developer</SC.GreenText> and <SC.GreenText>UI Designer</SC.GreenText>, I'm passionate about interfaces, from their creation to development. I like to learn more and more about the area, challenges that take me out of my comfort zone are the best.</SC.TextDescAbout>
            <SC.Jump/>
            <SC.TextDescAbout>I have prototyped and developed <SC.GreenText>Landing Pages</SC.GreenText>, <SC.GreenText>Sites</SC.GreenText>, <SC.GreenText>E-commerces</SC.GreenText>, <SC.GreenText>E-mails Marketing</SC.GreenText>, <SC.GreenText>Apps</SC.GreenText> and <SC.GreenText>Programs</SC.GreenText>.</SC.TextDescAbout>
          </SC.ContainerDescAbout>
        </SC.Content>
          <SC.TireServices>
            <SC.Content>
              <SC.TitleServices>My Services</SC.TitleServices>
              <SC.ContainerServices>
                <SC.BoxIconTextServices>
                  <BiCodeBlock color="white" size="1.8em"/>
                  <SC.TextServices>Web Development</SC.TextServices>
                </SC.BoxIconTextServices>
                <SC.BoxIconTextServices>
                  <BiCodeBlock color="white" size="1.8em"/>
                  <SC.TextServices>UI Design</SC.TextServices>
                </SC.BoxIconTextServices>
                <SC.BoxIconTextServices>
                  <BiCodeBlock color="white" size="1.8em"/>
                  <SC.TextServices>Mobile Development</SC.TextServices>
                </SC.BoxIconTextServices>
                <SC.BoxIconTextServices>
                  <BiCodeBlock color="white" size="1.8em"/>
                  <SC.TextServices>Social Media Design</SC.TextServices>
                </SC.BoxIconTextServices>
              </SC.ContainerServices>
            </SC.Content>
          </SC.TireServices>
      </SC.SectionAbout>

      <SC.SectionPortfolio id="portfolio"></SC.SectionPortfolio>
      <SC.SectionContact id="contact"></SC.SectionContact>
    </SC.Main>
  )
}
