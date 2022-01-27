import { MdOutlineCloudDownload } from "react-icons/md";
import { FiArrowDownCircle } from "react-icons/fi";
import { FaInstagram, FaGithub, FaDribbble, FaBehance } from "react-icons/fa";

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
        <SC.MenuOption><SC.MenuLink>Home</SC.MenuLink></SC.MenuOption>
        <SC.MenuOption><SC.MenuLink>Bio</SC.MenuLink></SC.MenuOption>
        <SC.MenuOption><SC.MenuLink>Portfolio</SC.MenuLink></SC.MenuOption>
        <SC.MenuOption><SC.MenuLink>Contact</SC.MenuLink></SC.MenuOption>
      </SC.Menu>
    </SC.ContainerMenu>
    <SC.ContainerNavigationRight>
      <SC.CircleNav />
      <SC.CircleNav/>
      <SC.CircleNav/>
      <SC.CircleNav/>
    </SC.ContainerNavigationRight>
    <SC.ContainerMainBG>
      <SC.LeftBG></SC.LeftBG>
      <SC.RightBG></SC.RightBG>
    </SC.ContainerMainBG>
      <SC.SectionHero>
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
      <SC.SectionBio></SC.SectionBio>
      <SC.SectionPortfolio></SC.SectionPortfolio>
      <SC.SectionContact></SC.SectionContact>
    </SC.Main>
  )
}
