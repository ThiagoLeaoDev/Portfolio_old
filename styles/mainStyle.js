import styled from "styled-components"
import Image from 'next/image'

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
  position: absolute;
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

export const MenuLink = styled.a`
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
  justify-content: space-around;
  background-color: var(--bg-primary);
`;

export const RotateBG = styled.span`
  z-index: 1;
  position: absolute;
  right: -270px;
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
  display: flex;
  flex-direction: column;
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

export const ContainerRight = styled.div`
  width: 60%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: flex-end;
`;

export const ContainerImage = styled.div`
  position: relative;
  width: 440px;
  height: 80vh;
  margin-left: 146px;
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