import styled from "styled-components"
import Image from 'next/image'
import {Link} from "react-scroll";

export const Main = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden !important;
  background-color: ${({ theme }) => theme.colors.BgSecondary};
`;

export const ContainerMainBG = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LeftBG = styled.div`
  width: 40%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.BgPrimary};
`;

export const RightBG = styled.div`
  width: 60%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.BgSecondary};
`;


export const SectionHero = styled.div`
  width: 100%;
  max-width: 1920px;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
`;

export const Menu = styled.ul`
  z-index: 100;
  height: 100%;
  width: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const MenuOption = styled.li`
`;

export const MenuLink = styled(Link)`
  color: ${({ theme }) => theme.colors.TextPrimary};
  font-size: 18px;
  font-weight: 600;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  &:hover{
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
`;

export const ContainerLeft = styled.div`
  position: relative;
  width: 40%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.BgPrimary};
`;

export const RotateBG = styled.span`
  z-index: 1;
  position: absolute;
  right: -240px;
  width: 100%;
  height: 200vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.BgPrimary};
  transform: rotate(-27.8deg);
`;

export const ContentLeft = styled.div`
  z-index: 2;
  max-width: 590px;
  width: 80%;
  padding-top: 240px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Name = styled.h2`
  color: ${({ theme }) => theme.colors.Primary};
  font-weight: 700;
  margin-bottom: 8px;
`;

export const Line = styled.span`
  width: 75%;
  
  height: 6px;
  background-color: ${({ theme }) => theme.colors.Primary};
  align-self: flex-end;
  margin-bottom: 12px;
`;

export const TitleMain = styled.h1`
  z-index: 2;
  color: ${({ theme }) => theme.colors.TextPrimary};
  font-weight: 600;
`;

export const TitleMainStroke = styled.h1`
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${({ theme }) => theme.colors.TextPrimary};
  margin-top: -84px;
  margin-left: 12px;
  margin-bottom: 32px;
  font-weight: 600;
  opacity: 0.1;
`;

export const Description = styled.h5`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.TextSecondary};
  margin-bottom: 32px;
`;

export const ContainerButtonsMain = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 120px;
`;

export const ButtonCV = styled.button`
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

  &:hover{
    cursor: pointer;
    transform: translateY(2px);
  }
  &:active {
    transform: translateY(6px);
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

  &:hover{
    cursor: pointer;
    transform: translateY(2px);
  }
  &:active {
    transform: translateY(6px);
  }
`;

export const ContainerSocial = styled.div`
  z-index: 2;
  bottom: 100px;
  max-width: 590px;
  width: 55%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CircleSocial = styled.a  `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.BgButton};
  padding: 16px;
  border-radius: 50%;
  opacity: .5;
  transition: 0.3s ease;

  &:hover{
    cursor: pointer;
    opacity: 1;
  }
`;

export const ContainerRight = styled.div`
  width: 60%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const ContainerImage = styled.div`
  position: relative;
  width: 440px;
  height: 80vh;
  margin-left: 126px;
`;

export const MainImage = styled(Image)`
`;

export const Circle = styled.div`
  z-index: 0;
  width: 75vh;
  height: 75vh;
  margin-top: 64px;
  margin-left: -130px;
  border: 6px solid ${({ theme }) => theme.colors.Primary};
  border-radius: 50%;
  box-shadow: 0px 0px 50px 9px rgba(19,255,0,0.7), rgba(19,255,0,0.7) 0px 0px 50px 9px inset;
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
`;

export const CircleNav = styled(Link)`
  z-index: 100;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.colors.Base};
  margin: 6px 0;
  transition: 0.3s ease;

  &:hover{
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.Primary};
    box-shadow: 0px 0px 10px 5px rgba(19,255,0,0.2);
    border: 3px solid ${({ theme }) => theme.colors.Primary};
  }
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
  width: 100%;
  max-width: 1920px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  
  &::after{
  content: '';
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
`;

export const TextDescAbout = styled.p`
  color: ${({ theme }) => theme.colors.TextSecondary};
  text-align: center;
  font-weight: 500;
`;

export const GreenText = styled.b`
  color: ${({ theme }) => theme.colors.Primary};
`;

export const Jump = styled.br`
`;

export const TireServices = styled.div`
  position: relative;
  width: 100%;
  background-color: #1D1D1D;
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

export const BoxIconTextServices = styled.div`
  width: 250px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  padding: 40px 0;
  margin: 0 100px;
`;

export const TextServices = styled.p`
  color: ${({ theme }) => theme.colors.TextPrimary};
  margin-left: 8px;
  font-size: 20px;
  font-weight: 500;
`;

export const ContainerEducationJobs = styled(Content)`
  position: relative;
  width: 100%;
  max-width: 1920px;
  padding: 86px 0;
`;

export const ContainerColumnsEducationJobs = styled.div`
  width: 84%;
  max-width: 700px;
  margin-bottom: 100px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
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
  color: #C1C1C1;
  font-weight: 500;
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
`;


// ----------------------- CONTACT -----------------------

export const SectionContact = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
  background-color: ${({ theme }) => theme.colors.BgTertiary  }; 
`;

export const ContainerContact = styled.div`
  width: 100%;
  max-width: 1920px;
  height: 440px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 33px;
`;

export const ContainerContactInfo = styled.div`
  position: relative;
  max-width: 605px;
  height: 100%;
  padding: 94px 100px 170px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.BgCard};
  border-top-left-radius: 33px;
  border-bottom-left-radius: 33px;
`;

export const GroupContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const TitleContactInfo = styled.p`
  color: ${({ theme }) => theme.colors.TextPrimary};
  font-weight: 600;
  font-size: 34px;
  margin-bottom: 80px;
  text-align: left;
  
  &:before {
    position: absolute;
    content: '';
    right: 0;
    width: 48%;
    text-align: right;
    height: 3px;
    margin-top: 25px;
    background-color: ${({ theme }) => theme.colors.TextPrimary};
    margin-bottom: 20px;
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
  content: '';
  left: 0;
  width: 48%;
  height: 3px;
  bottom: 94px;
  background-color: ${({ theme }) => theme.colors.TextPrimary};
  margin-bottom: 20px;
`;

export const ContainerContactForm = styled.div`
  max-width: 831px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 132px 50px;
  background-color: ${({ theme }) => theme.colors.BgPrimary};
  border-top-right-radius: 33px;
  border-bottom-right-radius: 33px;
`;

export const FormContact = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  max-width: 731px;
  padding: 0 50px;
`;

export const GroupLabelInput = styled.div`
  width:  ${(props) => props.width};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-right: ${(props) => props.margin};
  margin-bottom: 40px;
`;

export const LabelContact = styled.p`
  color: ${({ theme }) => theme.colors.TextTertiary};
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 8px;
  transition: all 0.3s ease;
`;

export const InputContact = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: ${(props) => props.height || '40px'};
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
  height: ${(props) => props.height || '40px'};
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

  &:hover{
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