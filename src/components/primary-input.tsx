import styled from "styled-components";
import { SearchIcon } from "./search-icon";
import { InputHTMLAttributes } from "react";

const PrimaryInput = styled.input`
  width: 352px;
  border-radius: 8px;
  border: none;
  padding: 10px 16px;

  background-color: var(--bg-secondary);

  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: var(--text-dark);
`
//Criando input com Searchicon
const InputContainer = styled.div`
  position: relative;
  width: 352px; 

  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
`
//O width deve ter o mesmo tamanho do input para facilitar o position
//o top e o tranform são para posicionar o icon no centro do input

//Adicionando um tipo input ao PrimaryInput
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function PrimaryInputWithSearchIcon(props: InputProps) {
  return (
    <InputContainer>
      <PrimaryInput {...props}/>
      <SearchIcon/>
    </InputContainer>
  )
}
