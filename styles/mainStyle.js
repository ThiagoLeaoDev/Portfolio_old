import styled from "styled-components";
import Image from "next/image";
import { Link } from "react-scroll";

export const Main = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden !important;
  background-color: ${({ theme }) => theme.colors.BgSecondary};
`;

export const ContainerMenu = styled.div`
  z-index: 100;
  position: fixed;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    height: ${(props) => (props.menuOpen ? "auto" : "80px")};
    background-color: ${({ theme }) => theme.colors.BgPrimary};
  }
`;

export const ButtonCloseMenu = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 10px;
  height: 30px;
  width: 30px;
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 100;
  border-radius: 5px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.BgPrimary};
    cursor: pointer;
  }

  @media only screen and (max-width: 768px) {
    display: flex;
  }
`;

export const Menu = styled.ul`
  z-index: 99;
  height: 100%;
  width: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media only screen and (max-width: 768px) {
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 60px 15% 0 15%;
    box-sizing: border-box;
  }
`;

export const MenuOption = styled.li`
  @media only screen and (max-width: 768px) {
    padding: 10px;
    width: 100%;
  }
`;

export const MenuLink = styled(Link)`
  color: ${({ theme }) => theme.colors.TextPrimary};
  font-size: 18px;
  font-weight: 600;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.Primary};

    &::after {
      content: "";
      display: inline-block;
      position: relative;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      margin-top: -8px;
      background-color: ${({ theme }) => theme.colors.Primary};
    }
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    font-size: 20px;
    margin-bottom: 20px;
    align-items: flex-start;

    &:hover {
      &::after {
        display: none;
      }
    }
  }
`;

export const ContainerNavigationRight = styled.div`
  z-index: 100;
  position: fixed;
  height: 100vh;
  width: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  right: 0;
  padding: 30px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const CircleNav = styled(Link)`
  z-index: 100;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.colors.Base};
  margin: 6px 0;
  transition: 0.3s ease;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.Primary};
    box-shadow: 0px 0px 10px 5px rgba(19, 255, 0, 0.2);
    border: 3px solid ${({ theme }) => theme.colors.Primary};
  }
`;

export const SectionHero = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.BgPrimary} 80%,
    ${({ theme }) => theme.colors.BgSecondary} 20%
  );
`;

export const GroupLeftRight = styled.div`
  width: 100%;
  max-width: 1920px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContainerLeft = styled.div`
  width: 40%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 120px 80px 0 80px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.BgPrimary};
  overflow-y: hidden;

  @media only screen and (max-width: 1440px) {
    width: 45%;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    padding: 120px 20% 0 20%;
    overflow: hidden;
  }
`;

export const Name = styled.h2`
  color: ${({ theme }) => theme.colors.Primary};
  font-weight: 700;
  margin-bottom: 8px;
  font-size: clamp(20px, 2.2vw, 38px);
  align-self: flex-start;

  @media only screen and (max-width: 768px) {
    font-size: clamp(30px, 2.2vw, 38px);
    margin-top: 20px;
  }
`;

export const Line = styled.span`
  width: 75%;
  height: 5px;
  background-color: ${({ theme }) => theme.colors.Primary};
  align-self: flex-end;
  margin-bottom: 12px;
`;

export const TitleMain = styled.h1`
  position: relative;
  z-index: 2;
  color: ${({ theme }) => theme.colors.TextPrimary};
  font-weight: 600;
  margin-bottom: 40px;
  font-size: clamp(28px, 2.4vw, 48px);

  &:after {
    content: "Front-end Developer & UI Designer";
    position: absolute;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${({ theme }) => theme.colors.TextPrimary};
    color: transparent;
    left: 6px;
    top: 6px;
    font-weight: 600;
    opacity: 0.1;
    font-size: clamp(28px, 2.4vw, 48px);
  }

  @media only screen and (max-width: 768px) {
    text-align: center;
    top: 28px;
  }
`;

export const Description = styled.p`
  font-size: 20px;
  line-height: 140%;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.TextSecondary};
  margin-bottom: 32px;
  font-size: clamp(12px, 1.4vw, 20px);

  @media only screen and (max-width: 768px) {
    text-align: center;
    margin-top: 16px;
  }
`;

export const ContainerButtonsMain = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 3vw;

  @media only screen and (max-width: 980px) {
    width: 100%;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ButtonCV = styled.a`
  width: 174px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0px;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.TextPrimary};
  font-weight: 600;
  font-size: 18px;
  transition: 0.3s ease;

  &:hover {
    cursor: pointer;
    transform: translateY(2px);
  }
  &:active {
    transform: translateY(6px);
  }

  @media only screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const ButtonPortfolio = styled(Link)`
  width: 120px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.Primary};
  border: none;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.BgPrimary};
  padding: 12px 38px;
  font-weight: 600;
  font-size: 18px;
  transition: 0.3s ease;
  &:hover {
    cursor: pointer;
    transform: translateY(2px);
  }
  &:active {
    transform: translateY(6px);
  }

  @media only screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const ContainerSocial = styled.div`
  z-index: 2;
  bottom: 100px;
  max-width: 300px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CircleSocial = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.BgButton};
  padding: 16px;
  border-radius: 50%;
  opacity: 0.5;
  transition: 0.3s ease;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }

  @media screen and (max-width: 980px) {
    padding: 12px;
  }


  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`;

export const ContainerRight = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding-left: 50px;
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: ${({ theme }) => theme.colors.BgSecondary};
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 46% 100%);

  @media only screen and (max-width: 1440px) {
    width: 55%;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 58vh 100%);
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const ContainerImage = styled.div`
  position: relative;
  max-width: 440px;
  width: 40vh;
  height: 80vh;
  margin-left: 5%;
`;

export const MainImage = styled(Image)``;

export const Circle = styled.div`
  z-index: 0;
  width: 75vh;
  height: 75vh;
  margin-top: 64px;
  margin-left: -130px;
  border: 6px solid ${({ theme }) => theme.colors.Primary};
  border-radius: 50%;
  box-shadow: 0px 0px 50px 9px rgba(19, 255, 0, 0.7),
    rgba(19, 255, 0, 0.7) 0px 0px 50px 9px inset;
`;

// ----------------------- ABOUT ME -----------------------

export const SectionAbout = styled.div`
  z-index: 2;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.BgTertiary};
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1920px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

export const TitleAbout = styled.h2`
  margin-top: 146px;
  color: ${({ theme }) => theme.colors.TextPrimary};
  font-weight: 600;
  margin-bottom: 52px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::after {
    content: "";
    border-bottom: 4px solid ${({ theme }) => theme.colors.Primary};
    width: 45px;
    border-radius: 30px;
    display: block;
    position: relative;
    margin-top: 5px;
  }
`;

export const ContainerDescAbout = styled.div`
  width: 84%;
  max-width: 500px;
  margin-bottom: 100px;
`;

export const SquareComponent = styled(Image)`
  @media only screen and (max-width: 768px) {
    width: 130px;
    height: 130px;
    opacity: 0.3;
  }
`;

export const TextDescAbout = styled.p`
  color: ${({ theme }) => theme.colors.TextSecondary};
  text-align: center;
  font-weight: 500;
`;

export const GreenText = styled.b`
  color: ${({ theme }) => theme.colors.Primary};
`;

export const Jump = styled.br``;

export const TireServices = styled.div`
  position: relative;
  width: 100%;
  background-color: #1d1d1d;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 76px 0;
`;

export const ContainerComponentAbout = styled.div`
  z-index: -1;
  position: absolute;
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  left: ${(props) => props.left};
  bottom: ${(props) => props.bottom};
`;

export const TitleServices = styled.h3`
  color: ${({ theme }) => theme.colors.TextPrimary};
  font-weight: 600;
  margin-bottom: 52px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerServices = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const TextServices = styled.p`
  color: ${({ theme }) => theme.colors.TextPrimary};
  margin-left: 8px;
  font-size: 20px;
  font-weight: 500;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const BoxIconTextServices = styled.div`
  width: 250px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  padding: 40px 0;
  margin: 0 100px;

  @media only screen and (max-width: 1440px) {
    flex-direction: column;

    ${TextServices} {
      margin-top: 12px;
    }
  }
`;

export const ContainerEducationJobs = styled(Content)`
  position: relative;
  width: 100%;
  max-width: 1920px;
  padding: 86px 0;
`;

export const TitleColumnEducationJobs = styled.h3`
  color: ${({ theme }) => theme.colors.TextPrimary};
  font-weight: 600;
  margin-bottom: 20px;
  text-align: left;
`;

export const ColumnEducationJobs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export const BoxInfoEducationJobs = styled.div`
  margin: 30px 0;
`;

export const DateEducationJobs = styled.p`
  color: ${({ theme }) => theme.colors.TextPrimary};
  font-weight: 500;
`;

export const TitleEducationJobs = styled.p`
  color: ${({ theme }) => theme.colors.Primary};
  font-weight: 500;
  font-size: 22px;
  margin: 6px 0;
`;

export const InstitutionEducationJobs = styled.p`
  color: #c1c1c1;
  font-weight: 500;
`;

export const ContainerColumnsEducationJobs = styled.div`
  width: 84%;
  max-width: 700px;
  margin-bottom: 100px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (max-width: 720px) {
    flex-direction: column;

    ${TitleColumnEducationJobs} {
      text-align: center;
    }

    ${DateEducationJobs} {
      text-align: center;
    }

    ${TitleEducationJobs} {
      text-align: center;
    }

    ${InstitutionEducationJobs} {
      text-align: center;
    }
  }
`;

// ----------------------- PROJECTS -----------------------

export const SectionProjects = styled.div`
  position: relative;
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.BgPrimary};
  padding-bottom: 30px;

  @media only screen and (max-width: 768px) {
    min-height: 100vh;
  }
`;

export const CircleDecoration = styled.div`
  position: absolute;
  top: -300px;
  right: -300px;
  z-index: 0;
  width: 900px;
  height: 900px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.BgDecoration};

  @media only screen and (max-width: 768px) {
    top: -100px;
    right: -200px;
    width: 400px;
    height: 400px;
  }
`;

export const CircleDecorationLeft = styled.div`
  position: absolute;
  left: -300px;
  bottom: -300px;
  z-index: 0;
  width: 900px;
  height: 900px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.BgDecoration};

  @media only screen and (max-width: 768px) {
    left: -200px;
    bottom: -100px;
    width: 400px;
    height: 400px;
  }
`;

export const TitleProjects = styled(TitleAbout)`
  z-index: 1;
`;

export const ContainerProjects = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 6rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(342px, 1fr));
  gap: 4rem;
  padding: 0 32px 48px 32px;
  box-sizing: border-box;
`;

// ----------------------- CONTACT -----------------------

export const SectionContact = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.BgTertiary};
  margin-top: 0;
  padding: 60px 0;
`;

export const ContainerContact = styled.div`
  position: relative;
  width: 90%;
  max-width: 1920px;
  height: 800px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 33px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const ContainerContactInfo = styled.div`
  position: relative;
  max-width: 605px;
  min-height: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 100px 0 100px;
  background-color: ${({ theme }) => theme.colors.BgCard};
  border-top-left-radius: 33px;
  border-bottom-left-radius: 33px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100vw;
    max-width: 100vw;
    min-height: 70vh;
    height: auto;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

`;

export const GroupContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: -100px;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

export const TitleContactInfo = styled.p`
  color: ${({ theme }) => theme.colors.TextPrimary};
  font-weight: 600;
  font-size: 34px;
  margin-bottom: 80px;
  text-align: left;

  &:before {
    position: absolute;
    content: "";
    right: 0;
    width: 48%;
    text-align: right;
    height: 3px;
    margin-top: 25px;
    background-color: ${({ theme }) => theme.colors.TextPrimary};
    margin-bottom: 20px;

    @media (max-width: 768px) {
      width: 42%;
    }
  }
`;

export const ContainerContactInfoItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 56px;
  height: 100%;

  &:last-child {
    margin-bottom: 80px;
  }
`;

export const TextContactInfo = styled.p`
  color: ${({ theme }) => theme.colors.TextPrimary};
  margin-left: 24px;
  font-size: 20px;
  font-weight: 500;
  
  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const LinkAction = styled.a`
  color: ${({ theme }) => theme.colors.TextPrimary};
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.TextPrimary};
  }
`;

export const LineContact = styled.span`
  position: absolute;
  content: "";
  left: 0;
  width: 48%;
  height: 3px;
  bottom: 94px;
  background-color: ${({ theme }) => theme.colors.TextPrimary};
  margin-bottom: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ContainerContactForm = styled.div`
  position: relative;
  max-width: 831px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 50px;
  background-color: ${({ theme }) => theme.colors.BgPrimary};
  border-top-right-radius: 33px;
  border-bottom-right-radius: 33px;

  @media (max-width: 768px) {
    height: auto;
    align-items: center;
    padding: 70px;
  }
`;

export const FormContact = styled.form`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  width: 90%;
  max-width: 731px;
  padding: 0 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;
  }
`;

export const GroupLabelInput = styled.div`
  width: ${(props) => props.width};
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-right: ${(props) => props.margin};
  margin-bottom: 40px;
`;

export const LabelContact = styled.label`
  color: ${({ theme }) => theme.colors.TextTertiary};
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 8px;
  transition: all 0.3s ease;
`;

export const InputContact = styled.input`
  box-sizing: border-box;
  width: 90%;
  height: ${(props) => props.height || "40px"};
  border-radius: 8px;
  padding: 0 16px;
  font-size: 16px;
  font-weight: 500;
  border: 0;
  color: ${({ theme }) => theme.colors.TextPrimary};
  background-color: ${({ theme }) => theme.colors.BgInput};

  &:focus {
    outline: none;
  }
`;

export const InputContactText = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  height: ${(props) => props.height || "40px"};
  border-radius: 8px;
  padding: 16px;
  font-size: 16px;
  font-weight: 500;
  border: 0;
  color: ${({ theme }) => theme.colors.TextPrimary};
  background-color: ${({ theme }) => theme.colors.BgInput};
  resize: none;

  &:focus {
    outline: none;
  }
`;

export const ButtonContact = styled.button`
  justify-content: space-around;
  width: 154px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.Primary};
  border: none;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.BgPrimary};
  padding: 12px 38px;
  font-weight: 600;
  font-size: 18px;
  transition: 0.3s ease;
  line-height: 14px;

  &:hover {
    cursor: pointer;
    transform: translateY(2px);
  }
  &:active {
    transform: translateY(6px);
  }
`;

export const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const Footer = styled.footer`
  bottom: 0px;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.BgPrimary};
  padding: 20px 100px;
  box-sizing: border-box;
`;

export const TextFooter = styled.p`
  color: ${({ theme }) => theme.colors.TextSecondary};
  font-size: 14px;
  font-weight: 500;
  text-align: center;
`;
