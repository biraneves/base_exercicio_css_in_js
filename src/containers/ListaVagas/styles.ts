import styled from 'styled-components';

const Vagas = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 16px;
  row-gap: 16px;
  margin-top: 32px;

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export default Vagas;
