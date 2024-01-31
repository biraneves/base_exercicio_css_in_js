import styled from 'styled-components';
import { Cores, Fontes } from '../../styles';

const HeroStyled = styled.div`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${Cores.corPrincipal};
    content: '';
    opacity: 0.7;
  }

  @media screen and (max-width: 767px) {
    height: auto;
    padding: 24px 0;
  }
`;

export const HeroContainer = styled.div`
  position: relative;
  color: #eee;
`;

export const HeroTitle = styled.h2`
  font-family: ${Fontes.fonteSecundaria};
  font-size: 48px;
  margin-left: 24px;

  @media screen and (max-width: 767px) {
    font-size: 32px;
  }
`;

export default HeroStyled;
