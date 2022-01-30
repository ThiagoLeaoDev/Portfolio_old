import styled from "styled-components"
import Image from 'next/image'
import {Link} from "react-scroll";

export const Main = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden !important;
  background-color: var(--bg-secondary);
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
  background-color: var(--bg-primary);
`;

export const RightBG = styled.div`
  width: 60%;
  height: 100%;
  background-color: var(--bg-secondary);
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
  color: var(--text-primary);
  font-size: 18px;
  font-weight: 600;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  &:hover{
    cursor: pointer;
    color: var(--primary);

    &::after {
      content: "";
      display: inline-block;
      position: relative;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      margin-top: -8px;
      background-color: var(--primary);
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
  background-color: var(--bg-primary);
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
  background-color: var(--bg-primary);
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
  color: var(--primary);
  font-weight: 700;
  margin-bottom: 8px;
`;

export const Line = styled.span`
  width: 75%;
  
  height: 6px;
  background-color: var(--primary);
  align-self: flex-end;
  margin-bottom: 12px;
`;

export const TitleMain = styled.h1`
  z-index: 2;
  color: var(--text-primary);
  font-weight: 600;
`;

export const TitleMainStroke = styled.h1`
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: var(--text-primary);
  margin-top: -84px;
  margin-left: 12px;
  margin-bottom: 32px;
  font-weight: 600;
  opacity: 0.1;
`;

export const Description = styled.h5`
  font-weight: 500;
  color: var(--text-secondary);
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
  color: var(--text-primary);
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

export const ButtonPortfolio = styled(ButtonCV)`
  width: 200px;
  justify-content: space-around;
  border-radius: 10px;
  background-color: var(--primary);
  color: var(--bg-primary);
  padding: 12px 38px;
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
  background-color: var(--bg-button);
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
  border: 6px solid var(--primary);
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
  border: 3px solid var(--base);
  margin: 6px 0;
  transition: 0.3s ease;

  &:hover{
    cursor: pointer;
    background-color: #13FF00;
    box-shadow: 0px 0px 10px 5px rgba(19,255,0,0.2);
    border: 3px solid var(--primary);
  }
`;

// ----------------------- ABOUT ME -----------------------

export const SectionAbout = styled.div`
  z-index: 2;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--bg-tertiary);
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
  color: var(--text-primary);
  font-weight: 600;
  margin-bottom: 52px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  &::after{
  content: '';
  border-bottom: 4px solid var(--primary);
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

export const TextDescAbout = styled.p`
  color: var(--text-secondary);
  text-align: center;
`;

export const GreenText = styled.b`
  color: var(--primary);
`;

export const Jump = styled.br`
`;

export const TireServices = styled.div`
  width: 100%;
  background-color: #1D1D1D;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 76px 0;
`;

export const TitleServices = styled.h4`
  color: var(--text-primary);
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
  color: var(--text-primary);
  margin-left: 8px;
  font-size: 20px;
  font-weight: 500;
`;

// ----------------------- PORTFOLIO -----------------------

export const SectionPortfolio = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-primary);
`;

// ----------------------- CONTACT -----------------------

export const SectionContact = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-secondary);
`;