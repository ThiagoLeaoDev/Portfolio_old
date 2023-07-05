import { useState, useEffect } from 'react';
import Head from 'next/head';

import axios from 'axios';

import { MdOutlineCloudDownload } from 'react-icons/md';
import { CgChevronDoubleDownO } from 'react-icons/cg';
import {
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiX,
  HiMenuAlt3,
} from 'react-icons/hi';
import { FaLinkedinIn, FaGithub, FaDribbble, FaFigma } from 'react-icons/fa';
import { BiCodeBlock, BiLayout, BiMobile, BiRocket } from 'react-icons/bi';

import * as SC from '../styles/mainStyle';

import AboutMeText from '../components/AboutMeText';
import CardProjects from '../components/CardProjects';
import ContactForm from '../components/contactForm.js';

import { getFigmaProjects } from '../services/getProjects';

export default function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchFigmaProjects = async () => {
      const data = await getFigmaProjects();
      setProjects(data);
    };

    fetchFigmaProjects();
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <SC.Main>
      <Head>
        <title>Thiago Leão | Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Thiago Leão, Front-end Developer and UI Designer"
        />
      </Head>
      <SC.ContainerMenu menuOpen={isOpen}>
        {isOpen ? (
          <>
            <SC.ButtonCloseMenu onClick={() => setIsOpen(!isOpen)}>
              <HiX color="white" size="1.8em" />
            </SC.ButtonCloseMenu>
            <SC.Menu>
              <SC.MenuOption>
                <SC.MenuLink to="home" spy={true} smooth={true} onClick={() => setIsOpen(false)}>
                  Home
                </SC.MenuLink>
              </SC.MenuOption>
              <SC.MenuOption>
                <SC.MenuLink to="about" spy={true} smooth={true} onClick={() => setIsOpen(false)}>
                  Bio
                </SC.MenuLink>
              </SC.MenuOption>
              <SC.MenuOption>
                <SC.MenuLink
                  to="projects"
                  spy={true}
                  smooth={true}
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </SC.MenuLink>
              </SC.MenuOption>
              <SC.MenuOption>
                <SC.MenuLink to="contact" spy={true} smooth={true} onClick={() => setIsOpen(false)}>
                  Contact
                </SC.MenuLink>
              </SC.MenuOption>
            </SC.Menu>
          </>
        ) : (
          <SC.ButtonCloseMenu onClick={() => setIsOpen(!isOpen)}>
            <HiMenuAlt3 color="white" size="1.8em" />
          </SC.ButtonCloseMenu>
        )}
      </SC.ContainerMenu>
      <SC.ContainerNavigationRight>
        <SC.CircleNav to="home" spy={true} smooth={true} />
        <SC.CircleNav to="about" spy={true} smooth={true} />
        <SC.CircleNav to="projects" spy={true} smooth={true} />
        <SC.CircleNav to="contact" spy={true} smooth={true} />
      </SC.ContainerNavigationRight>

      <SC.SectionHero id="home">
        <SC.GroupLeftRight>
          <SC.ContainerLeft>
            <SC.Name>THIAGO LEÃO</SC.Name>
            <SC.Line />
            <SC.TitleMain>Front-end Developer &amp; UI Designer</SC.TitleMain>
            <SC.Description>
              Front-end developer focused on creating Web and Mobile applications. I really like
              different projects that solve real problems.
            </SC.Description>
            <SC.ContainerButtonsMain>
              <SC.ButtonCV href="/curriculo.pdf" download="resume_Thiago_Leao">
                <MdOutlineCloudDownload color="white" size="1.8em" />
                Download CV
              </SC.ButtonCV>
              <SC.ButtonPortfolio to="projects" spy={true} smooth={true}>
                <CgChevronDoubleDownO color="#202020 " size="1.5em" />
                Portfolio
              </SC.ButtonPortfolio>
            </SC.ContainerButtonsMain>
            <SC.ContainerSocial>
              <SC.CircleSocial
                href="https://www.linkedin.com/in/thiagoleaodev/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedinIn color="white" size="1.8em" />
              </SC.CircleSocial>
              <SC.CircleSocial
                href="https://github.com/ThiagoLeaoDev"
                target="_blank"
                aria-label="Github"
              >
                <FaGithub color="white" size="1.8em" />
              </SC.CircleSocial>
              <SC.CircleSocial
                href="https://dribbble.com/thiagoLeao"
                target="_blank"
                aria-label="Dribbble"
              >
                <FaDribbble color="white" size="1.8em" />
              </SC.CircleSocial>
              <SC.CircleSocial
                href="https://www.figma.com/@thiagoleao"
                target="_blank"
                aria-label="Figma"
              >
                <FaFigma color="white" size="1.8em" />
              </SC.CircleSocial>
            </SC.ContainerSocial>
          </SC.ContainerLeft>
          <SC.ContainerRight>
            <SC.ContainerImage>
              <SC.MainImage
                src="/portifolio_grey.png"
                layout="fill"
                objectFit="cover"
                quality={100}
                alt="Portait of Thiago Leão"
                priority
              />
              <SC.Circle />
            </SC.ContainerImage>
          </SC.ContainerRight>
        </SC.GroupLeftRight>
      </SC.SectionHero>

      <SC.SectionAbout id="about">
        <SC.Content>
          <SC.ContainerComponentAbout right="-440px">
            <AboutMeText />
          </SC.ContainerComponentAbout>
          <SC.TitleAbout>ABOUT ME</SC.TitleAbout>
          <SC.ContainerDescAbout>
            <SC.TextDescAbout>
              I'm <SC.GreenText>Thiago Leão</SC.GreenText>, I'm <SC.GreenText>21</SC.GreenText>{' '}
              years old and I live in <SC.GreenText>São Vicente-SP</SC.GreenText>.
              <SC.GreenText> Front-end developer</SC.GreenText> and{' '}
              <SC.GreenText>UI Designer</SC.GreenText>, I'm passionate about interfaces, from their
              creation to development. I like to learn more and more about the area, challenges that
              take me out of my comfort zone are the best.
            </SC.TextDescAbout>
            <SC.Jump />
            <SC.TextDescAbout>
              I have prototyped and developed <SC.GreenText>Landing Pages</SC.GreenText>,{' '}
              <SC.GreenText>Sites</SC.GreenText>, <SC.GreenText>E-commerces</SC.GreenText>,{' '}
              <SC.GreenText>E-mails Marketing</SC.GreenText>, <SC.GreenText>Apps</SC.GreenText> and{' '}
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
              alt="Square"
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
              alt="Square"
            />
          </SC.ContainerComponentAbout>
        </SC.TireServices>
        <SC.ContainerEducationJobs>
          <SC.ContainerColumnsEducationJobs>
            <SC.ColumnEducationJobs>
              <SC.TitleColumnEducationJobs>Education</SC.TitleColumnEducationJobs>
              <SC.BoxInfoEducationJobs>
                <SC.DateEducationJobs>January 2020 - December 2023</SC.DateEducationJobs>
                <SC.TitleEducationJobs>Information Systems</SC.TitleEducationJobs>
                <SC.InstitutionEducationJobs>Santa Cecilia University</SC.InstitutionEducationJobs>
              </SC.BoxInfoEducationJobs>
              <SC.BoxInfoEducationJobs>
                <SC.DateEducationJobs>August 2018 - December 2019</SC.DateEducationJobs>
                <SC.TitleEducationJobs>Systems Development</SC.TitleEducationJobs>
                <SC.InstitutionEducationJobs>ETEC Doctor Ruth Cardoso</SC.InstitutionEducationJobs>
              </SC.BoxInfoEducationJobs>
            </SC.ColumnEducationJobs>

            <SC.ColumnEducationJobs>
              <SC.TitleColumnEducationJobs>Jobs</SC.TitleColumnEducationJobs>
              <SC.BoxInfoEducationJobs>
                <SC.DateEducationJobs>Octuber 2021 - January 2022</SC.DateEducationJobs>
                <SC.TitleEducationJobs>Front-end Developer</SC.TitleEducationJobs>
                <SC.InstitutionEducationJobs>
                  Criando Valor - Tecnologia & Inovação
                </SC.InstitutionEducationJobs>
              </SC.BoxInfoEducationJobs>

              <SC.BoxInfoEducationJobs>
                <SC.DateEducationJobs>September 2020 - August 2021</SC.DateEducationJobs>
                <SC.TitleEducationJobs>Front-end Developer</SC.TitleEducationJobs>
                <SC.InstitutionEducationJobs>Agência Mandarin</SC.InstitutionEducationJobs>
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
                  id={project.id}
                  image={project.thumbnailUrl}
                  Title={project.name}
                  Type="ui"
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
                  <SC.TextContactInfo>+55 (13) 97415-4802</SC.TextContactInfo>
                </SC.ContainerContactInfoItem>
                <SC.ContainerContactInfoItem>
                  <HiOutlineMail color="#FFFFFF" size="1.8em" />
                  <SC.TextContactInfo>
                    <SC.LinkAction href="mailto:thiagoleao.dev@gmail.com" target="_blank">
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
                      São Vicente, SP, Brazil
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
      <SC.Footer>
        <SC.TextFooter>© 2022 Thiago Leão. All rights reserved.</SC.TextFooter>
      </SC.Footer>
    </SC.Main>
  );
}
