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
  width: 1920px;
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
  z-index: 0;
  position: absolute;
  right: -270px;
  width: 80%;
  height: 200vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: var(--bg-primary);
  transform: rotate(-27.8deg);
`;

export const ContentLeft = styled.div`
  z-index: 1;
  max-width: 530px;
  width: 70%;
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
  margin-top: -74px;
  margin-left: 14px;
  margin-bottom: 32px;
  font-weight: 600;
  opacity: 0.1;
`;

export const Description = styled.h5`
  font-weight: 500;
  color: var(--text-secondary);
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
  width: 280px;
  height: 85vh;
  margin-left: 276px;
`;

export const MainImage = styled(Image)`
`;

export const Circle = styled.span`
`;