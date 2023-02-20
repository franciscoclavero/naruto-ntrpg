import styled from 'styled-components'
import { IMapField } from '.'

export const MapFieldStyled = styled.div<IMapField>`
  border: 1px solid black;
  height: calc(${(props) => props.widthSize} / ${(props) => props.numberColumns});
  width: calc(${(props) => props.widthSize} / ${(props) => props.numberLines});
`
