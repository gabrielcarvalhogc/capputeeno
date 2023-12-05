"use client"

import styled from "styled-components"

export const DefaultPageLayout = styled.div`
  padding: 12px 5px;
  min-height: 100vh;  
  background-color: var(--bg-primary);

  @media (min-width: ${props => props.theme.desktopBreakpoints}) {
    padding: 34px 160px;
  }
`