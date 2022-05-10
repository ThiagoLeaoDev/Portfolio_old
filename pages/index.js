import { useState } from "react";

import { MdOutlineCloudDownload } from "react-icons/md";
import { CgChevronDoubleDownO } from "react-icons/cg";
import {
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { FaInstagram, FaGithub, FaDribbble, FaBehance } from "react-icons/fa";
import { BiCodeBlock, BiLayout, BiMobile, BiRocket } from "react-icons/bi";

import * as SC from "../styles/mainStyle";

import AboutMeText from "../components/AboutMeText";
import CardProjects from "../components/CardProjects";
import ContactForm from "../components/contactForm.js";

import projects from "./projects.json";

export default function Home() {
  return (
    <SC.Main>
      <SC.ContainerMenu>
        <SC.Menu>
          <SC.MenuOption>
            <SC.MenuLink to="home" spy={true} smooth={true}>
              Home
            </SC.MenuLink>
          </SC.MenuOption>
          <SC.MenuOption>
            <SC.MenuLink to="about" spy={true} smooth={true}>
              Bio
            </SC.MenuLink>
          </SC.MenuOption>
          <SC.MenuOption>
            <SC.MenuLink to="projects" spy={true} smooth={true}>
              Projects
            </SC.MenuLink>
          </SC.MenuOption>
          <SC.MenuOption>
            <SC.MenuLink to="contact" spy={true} smooth={true}>
              Contact
            </SC.MenuLink>
          </SC.MenuOption>
        </SC.Menu>
      </SC.ContainerMenu>
      <SC.ContainerNavigationRight>
        <SC.CircleNav to="home" spy={true} smooth={true} />
        <SC.CircleNav to="about" spy={true} smooth={true} />
        <SC.CircleNav to="projects" spy={true} smooth={true} />
        <SC.CircleNav to="contact" spy={true} smooth={true} />
      </SC.ContainerNavigationRight>
      <SC.ContainerMainBG>
        <SC.LeftBG></SC.LeftBG>
        <SC.RightBG></SC.RightBG>
      </SC.ContainerMainBG>
      <SC.SectionHero id="home">
        <SC.ContainerLeft>
          <SC.ContentLeft>
            <SC.Name>THIAGO LEÃO</SC.Name>
            <SC.Line />
            <SC.TitleMain>Front-end Developer &amp; UI Designer</SC.TitleMain>
            <SC.TitleMainStroke>
              Front-end Developer &amp; UI Designer
            </SC.TitleMainStroke>
            <SC.Description>
              Front-end developer focused on creating Web and Mobile
              applications. I really like different projects that solve real
              problems.
            </SC.Description>
            <SC.ContainerButtonsMain>
              <SC.ButtonCV>
                <MdOutlineCloudDownload color="white" size="1.8em" />
                Download CV
              </SC.ButtonCV>
              <SC.ButtonPortfolio to="projects" spy={true} smooth={true}>
                <CgChevronDoubleDownO color="#202020 " size="1.5em" />
                Portfolio
              </SC.ButtonPortfolio>
            </SC.ContainerButtonsMain>
            <SC.ContainerSocial>
              <SC.CircleSocial>
                <FaInstagram color="white" size="1.8em" />
              </SC.CircleSocial>
              <SC.CircleSocial>
                <FaGithub color="white" size="1.8em" />
              </SC.CircleSocial>
              <SC.CircleSocial>
                <FaDribbble color="white" size="1.8em" />
              </SC.CircleSocial>
              <SC.CircleSocial>
                <FaBehance color="white" size="1.8em" />
              </SC.CircleSocial>
            </SC.ContainerSocial>
          </SC.ContentLeft>
          <SC.RotateBG />
        </SC.ContainerLeft>
        <SC.ContainerRight>
          <SC.ContainerImage>
            <SC.MainImage
              src="/portifolio_grey.png"
              layout="fill"
              objectFit="cover"
              quality={100}
              alt="Portfolio"
            />
            <SC.Circle />
          </SC.ContainerImage>
        </SC.ContainerRight>
      </SC.SectionHero>

      <SC.SectionAbout id="about">
        <SC.Content>
          <SC.ContainerComponentAbout right="-440px">
            <AboutMeText />
          </SC.ContainerComponentAbout>
          <SC.TitleAbout>ABOUT ME</SC.TitleAbout>
          <SC.ContainerDescAbout>
            <SC.TextDescAbout>
              I'm <SC.GreenText>Thiago Leão</SC.GreenText>, I'm{" "}
              <SC.GreenText>20</SC.GreenText> years old and I live in{" "}
              <SC.GreenText>São Vicente-SP</SC.GreenText>.
              <SC.GreenText> Front-end developer</SC.GreenText> and{" "}
              <SC.GreenText>UI Designer</SC.GreenText>, I'm passionate about
              interfaces, from their creation to development. I like to learn
              more and more about the area, challenges that take me out of my
              comfort zone are the best.
            </SC.TextDescAbout>
            <SC.Jump />
            <SC.TextDescAbout>
              I have prototyped and developed{" "}
              <SC.GreenText>Landing Pages</SC.GreenText>,{" "}
              <SC.GreenText>Sites</SC.GreenText>,{" "}
              <SC.GreenText>E-commerces</SC.GreenText>,{" "}
              <SC.GreenText>E-mails Marketing</SC.GreenText>,{" "}
              <SC.GreenText>Apps</SC.GreenText> and{" "}
              <SC.GreenText>Programs</SC.GreenText>.
            </SC.TextDescAbout>
          </SC.ContainerDescAbout>
        </SC.Content>
        <SC.TireServices>
          <SC.ContainerComponentAbout left="-20px" top="-150px">
            <SC.SquareComponent
              src="/square_dots.svg"
              width={186}
              height={186}
              quality={100}
            />
          </SC.ContainerComponentAbout>
          <SC.Content>
            <SC.TitleServices>My Services</SC.TitleServices>
            <SC.ContainerServices>
              <SC.BoxIconTextServices>
                <BiCodeBlock color="#13FF00" size="1.8em" />
                <SC.TextServices>Web Development</SC.TextServices>
              </SC.BoxIconTextServices>
              <SC.BoxIconTextServices>
                <BiLayout color="#13FF00" size="1.8em" />
                <SC.TextServices>UI Design</SC.TextServices>
              </SC.BoxIconTextServices>
              <SC.BoxIconTextServices>
                <BiMobile color="#13FF00" size="1.8em" />
                <SC.TextServices>Mobile Development</SC.TextServices>
              </SC.BoxIconTextServices>
              <SC.BoxIconTextServices>
                <BiRocket color="#13FF00" size="1.8em" />
                <SC.TextServices>Social Media Design</SC.TextServices>
              </SC.BoxIconTextServices>
            </SC.ContainerServices>
          </SC.Content>
          <SC.ContainerComponentAbout right="40px" bottom="-170px">
            <SC.SquareComponent
              src="/square_dots.svg"
              width={186}
              height={186}
              quality={100}
            />
          </SC.ContainerComponentAbout>
        </SC.TireServices>
        <SC.ContainerEducationJobs>
          <SC.ContainerColumnsEducationJobs>
            <SC.ColumnEducationJobs>
              <SC.TitleColumnEducationJobs>
                Education
              </SC.TitleColumnEducationJobs>
              <SC.BoxInfoEducationJobs>
                <SC.DateEducationJobs>
                  January 2020 - December 2023
                </SC.DateEducationJobs>
                <SC.TitleEducationJobs>
                  Sistemas de informação
                </SC.TitleEducationJobs>
                <SC.InstitutionEducationJobs>
                  Universidade Santa Cecília
                </SC.InstitutionEducationJobs>
              </SC.BoxInfoEducationJobs>
              <SC.BoxInfoEducationJobs>
                <SC.DateEducationJobs>
                  August 2018 - December 2019
                </SC.DateEducationJobs>
                <SC.TitleEducationJobs>
                  Sistemas de informação
                </SC.TitleEducationJobs>
                <SC.InstitutionEducationJobs>
                  Universidade Santa Cecília
                </SC.InstitutionEducationJobs>
              </SC.BoxInfoEducationJobs>
            </SC.ColumnEducationJobs>

            <SC.ColumnEducationJobs>
              <SC.TitleColumnEducationJobs>Jobs</SC.TitleColumnEducationJobs>
              <SC.BoxInfoEducationJobs>
                <SC.DateEducationJobs>
                  January 2020 - December 2023
                </SC.DateEducationJobs>
                <SC.TitleEducationJobs>
                  Sistemas de informação
                </SC.TitleEducationJobs>
                <SC.InstitutionEducationJobs>
                  Universidade Santa Cecília
                </SC.InstitutionEducationJobs>
              </SC.BoxInfoEducationJobs>

              <SC.BoxInfoEducationJobs>
                <SC.DateEducationJobs>
                  January 2020 - December 2023
                </SC.DateEducationJobs>
                <SC.TitleEducationJobs>
                  Sistemas de informação
                </SC.TitleEducationJobs>
                <SC.InstitutionEducationJobs>
                  Universidade Santa Cecília
                </SC.InstitutionEducationJobs>
              </SC.BoxInfoEducationJobs>
            </SC.ColumnEducationJobs>
          </SC.ContainerColumnsEducationJobs>
          <SC.ContainerComponentAbout left="-600px" bottom="0px">
            <AboutMeText />
          </SC.ContainerComponentAbout>
        </SC.ContainerEducationJobs>
      </SC.SectionAbout>

      <SC.SectionProjects id="projects">
        <SC.CircleDecoration />
        <SC.Content>
          <SC.TitleProjects>PROJECTS</SC.TitleProjects>
          <SC.ContainerProjects>
            {projects.map((project, index) => {
              return (
                <CardProjects
                  key={index}
                  image={project.image}
                  Title={project.title}
                  Type={project.type}
                />
              );
            })}
          </SC.ContainerProjects>
        </SC.Content>
        <SC.CircleDecorationLeft />
      </SC.SectionProjects>

      <SC.SectionContact id="contact">
        <SC.Content>
          <SC.ContainerContact>
            <SC.ContainerContactInfo>
              <SC.GroupContactInfo>
                <SC.TitleContactInfo>CONTACT</SC.TitleContactInfo>
                <SC.ContainerContactInfoItem>
                  <HiOutlinePhone color="#FFFFFF" size="1.8em" />
                  <SC.TextContactInfo>+55 (11) 99999-9999</SC.TextContactInfo>
                </SC.ContainerContactInfoItem>
                <SC.ContainerContactInfoItem>
                  <HiOutlineMail color="#FFFFFF" size="1.8em" />
                  <SC.TextContactInfo>
                    <SC.LinkAction
                      href="mailto:thiagoleao.dev@gmail.com"
                      target="_blank"
                    >
                      thiagoleao.dev@gmail.com
                    </SC.LinkAction>
                  </SC.TextContactInfo>
                </SC.ContainerContactInfoItem>
                <SC.ContainerContactInfoItem>
                  <HiOutlineLocationMarker color="#FFFFFF" size="1.8em" />
                  <SC.TextContactInfo>
                    <SC.LinkAction
                      href="https://www.google.com/maps/place/São+Vicente,+State+of+São+Paulo/@-23.9541785,-46.4661425,13z/data=!3m1!4b1!4m5!3m4!1s0x94ce1be795087ec7:0xe6e95e9915fa8605!8m2!3d-23.9603273!4d-46.3968727"
                      target="_blank"
                    >
                      Santos, SP, Brazil
                    </SC.LinkAction>
                  </SC.TextContactInfo>
                </SC.ContainerContactInfoItem>
                <SC.LineContact />
              </SC.GroupContactInfo>
            </SC.ContainerContactInfo>
            <SC.ContainerContactForm>
              <ContactForm />
            </SC.ContainerContactForm>
          </SC.ContainerContact>
        </SC.Content>
      </SC.SectionContact>
    </SC.Main>
  );
}
