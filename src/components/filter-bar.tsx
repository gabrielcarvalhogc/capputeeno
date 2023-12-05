"use client"

import styled from "styled-components";
import { FilterByType } from "./filter-by-type";
import { FilterByPriority } from "./filter-by-priority";

const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 15px;

  @media (min-width:  ${props => props.theme.tabletBreakpoint}) {
    flex-direction: row;
  }
`

export function FilterBar() {
  return (
    <FilterContainer>
      <FilterByType/>
      <FilterByPriority/>
    </FilterContainer>
  )
}