import styled from 'styled-components';
import { Cores } from '../../styles';

type Props = {
  children: JSX.Element[];
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
};

type InputProps = {
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  value?: string;
};

type ButtonProps = {
  children: string;
  type: 'button' | 'cancel' | 'submit';
};

export const InputStyled = styled.input<InputProps>`
  padding: 0 16px;
  outline-color: ${Cores.corPrincipal};
`;

export const ButtonStyled = styled.button<ButtonProps>`
  background-color: ${Cores.corPrincipal};
  border: 1px solid ${Cores.corPrincipal};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${Cores.corSecundaria};
  margin-left: 8px;
  cursor: pointer;
`;

const FormStyled = styled.form<Props>`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${Cores.corSecundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`;

export default FormStyled;
