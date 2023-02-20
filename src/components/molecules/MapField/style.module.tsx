import styled from 'styled-components'
import { IMapField } from '.'

export const MapFieldStyled = styled.div<IMapField>`
  ${(props) => {
    let sprite = 'outline: 1px solid black;'
    if (props.sprite != '') {
      sprite += `background-image: url("assets/${props.sprite}");`
      sprite += 'background-position: center;'
      sprite += 'background-size: cover;'
      sprite += 'border: 1px solid black'
    }
    return sprite
  }};

  height: calc(${(props) => props.widthSize} / ${(props) => props.numberColumns});
  width: calc(${(props) => props.widthSize} / ${(props) => props.numberLines});
`
