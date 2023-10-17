"use client"

import { styled } from "styled-components";
import { Saira_Stencil_One } from 'next/font/google'

const sairaStencil = Saira_Stencil_One({ 
  subsets: ['latin'],
  weight: ['400']
})

interface TagHeaderProps {

}

const TagHeader = styled.header`
  display: flex;
  align-itens: center;
  justify-content: space-between;
  padding: 20px 160px;
`

const Logo = styled.a`
  color: var(--logo-color);
  font-weight: 400;
  font-size: 40px;
  line-height: 150%;
`

export default function Header() {
  return (
    <TagHeader>
      <Logo className={sairaStencil.className}>Capputeeno</Logo>
      <div></div>
    </TagHeader>
  )
}