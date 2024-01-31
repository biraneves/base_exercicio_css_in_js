import styled, { createGlobalStyle } from 'styled-components';

export const Fontes = {
  fontePrimaria: 'Lato, sans-serif',
  fonteSecundaria: 'Glook, serif',
};

export const Cores = {
  corPrincipal: '#a7727d',
  corSecundaria: '#f9f5e7',
};

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${Fontes.fontePrimaria};
    list-style: none;
  }

  body {
    padding-bottom: 120px;
  }
`;

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 1023px) {
    max-width: 80%;
  }
`;

export default EstiloGlobal;
