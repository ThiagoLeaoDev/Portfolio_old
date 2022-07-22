import styled from "styled-components";

export const Main = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden !important;
  background-color: ${({ theme }) => theme.colors.BgTertiary};
`;


export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  padding: 35px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
position: relative;
  color: ${({ theme }) => theme.colors.TextPrimary};
  margin-bottom: 20px;
  font-weight: 600;
  padding: 0 40px;
  text-align: center;
  box-sizing: border-box;
  font-size: clamp( 4rem, 12vw, 15rem);

    &:after {
    content: "404 :(";
    position: absolute;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${({ theme }) => theme.colors.TextPrimary};
    color: transparent;
    left: 22px;
    top: 8px;
    font-weight: 600;
    opacity: 0.1;
    font-size: clamp( 4rem, 12vw, 15rem);
  }
`;  

export const SubTitle = styled.h3`
  color: ${({ theme }) => theme.colors.TextPrimary};
  color: ${({ theme }) => theme.colors.TextSecondary};
  margin-bottom: 40px;
  text-align: center;
`;  

export const Text = styled.p`
  font-size: 1rem;  
  color: ${({ theme }) => theme.colors.TextPrimary};
  color: ${({ theme }) => theme.colors.TextSecondary};
  margin-bottom: 20px;
  text-align: center;
`;

export const ButtonHome = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.Primary};
  border: none;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.BgPrimary};
  padding: 10px 38px;
  margin-top: 10px;
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