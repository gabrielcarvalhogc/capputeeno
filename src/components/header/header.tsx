"use client"

import { styled } from "styled-components";
import { Saira_Stencil_One } from 'next/font/google'
import { PrimaryInputWithSearchIcon } from "../primary-input";
import { CartControl } from "../cart-control";
import { useFilter } from "@/hooks/useFilter";

const sairaStencil = Saira_Stencil_One({ 
  subsets: ['latin'],
  weight: ['400']
});

const TagHeader = styled.header`
  display: flex;
  align-itens: center;
  justify-content: space-between;
  padding: 12px 24px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    padding: 20px 160px;
  }
`

const Logo = styled.a`
  color: var(--logo-color);
  font-weight: 400;
  font-size: 18px;
  line-height: 200%;

  @media (min-width:  ${props => props.theme.tabletBreakpoint}) {
    font-size: 24px;
  }

  @media (min-width:  ${props => props.theme.desktopBreakpoint}) {
    font-size: 40px;
  }
`

export default function Header() {
  const {setSearch, search} = useFilter();

  return (
    <TagHeader>
      <Logo className={sairaStencil.className}>Capputeeno</Logo>
      <div>
        <PrimaryInputWithSearchIcon 
          value={search}
          handleChange={setSearch}
          placeholder="Procurando por algo específico?"/>
        <CartControl/>
      </div>
    </TagHeader>
  )
}