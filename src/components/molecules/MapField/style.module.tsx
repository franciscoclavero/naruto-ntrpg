import styled from 'styled-components'
import { IMapField } from '.'

export const MapFieldStyled = styled.div<IMapField>`
  height: calc(${(props) => props.widthSize} / ${(props) => props.numberColumns});
  width: calc(${(props) => props.widthSize} / ${(props) => props.numberLines});
  outline: 1px solid #000;

  img {
    width: 100%;
    border: 1px solid black;
  }
`
