import styled from 'styled-components'

export const ItemListStyled = styled.li`
  text-decoration: underline;

  &:nth-child(n + 1) {
    margin-top: 2px;
  }
`
