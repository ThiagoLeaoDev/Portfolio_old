import styled from "styled-components"
import Image from "next/image";
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

export const ContainerCard = styled.div`
  height: 436px;
  width: 350px;
  background-color: ${({ theme }) => theme.colors.BgCard};
  border-radius:  20px;
`;

export const ContainerImage = styled.div`
  position: relative;
  width: 100%;
  height: 260px;
`;

export const ProjectImage = styled(Image)`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const CardText = styled.div`
  padding: 20px;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.TextPrimary};
  font-weight: 700;
  font-size: 1rem;
  margin: 0px;
`;

export const ContainerTypeProject = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-left: -4px;
  margin-top: 8px;
`;

export const TypeName = styled.p`
  color: ${({ theme }) => theme.colors.TextPrimary};
  font-weight: 500;
  font-size: 0.9rem;
  margin-left: 8px;
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const ArrowIcon = styled(HiOutlineArrowNarrowRight)`
  transition: transform 0.4s ease-in-out;
`;

export const ButtonTextView = styled.p`
  color: ${({ theme }) => theme.colors.TextPrimary};
  font-weight: 500;
  font-size: 1rem;
  margin-right: 8px;
  transition: font-weight 0.4s ease-in-out;
`;

export const ButtonView = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover {
    cursor: pointer;

    ${ArrowIcon} {
      transform: translateX(4px);
      transition: transform 0.4s ease-in-out;
    }

    ${ButtonTextView} {
      font-weight: 700;
      transition: font-weight 0.4s ease-in-out;
    }
  }
`;

export const ButtonTextLive = styled.p`
  color: ${({ theme }) => theme.colors.TextNegativePrimary};
  font-weight: 600;
  font-size: 1rem;
  transition: color 0.2s ease-in-out;
`;

export const ButtonLive = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 30px;
  background-color: ${({ theme }) => theme.colors.Primary};
  border-radius: 10px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.BgPrimary};
    transition: background-color 0.2s ease-in-out;

    ${ButtonTextLive} {
      color: ${({ theme }) => theme.colors.TextPrimary};
      transition: color 0.2s ease-in-out;
    }
  }
`;


// export const Button = styled.div`
//   width: 160px;
//   height: 45px;
//   border-radius: 25px;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-around;
//   align-items: center;
//   background-color: #ffffff;
// `;

// export const TextButton = styled.p`
//   font-weight: 900;
//   font-size: 1rem;
//   color: #3B3C4B;
//   margin: 0px;
//   margin-left: 10px;
// `;