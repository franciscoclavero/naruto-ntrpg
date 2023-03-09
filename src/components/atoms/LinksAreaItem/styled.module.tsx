import styled from 'styled-components'

export const ItemListStyled = styled.li`
  text-decoration: underline;
  cursor: pointer;

  &:nth-child(n + 1) {
    margin-top: 2px;
  }
`
