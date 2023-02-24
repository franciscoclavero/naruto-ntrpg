import styled from 'styled-components'
import { IStatusBarItem } from '.'

export const StatusBarItemStyled = styled.div<IStatusBarItem>`
  border: 1px solid black;
  height: 16px;
  width: 16px;
  background-color: ${(props) => props.color};
`
