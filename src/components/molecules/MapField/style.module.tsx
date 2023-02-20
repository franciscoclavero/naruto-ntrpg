import styled from 'styled-components'
import { IMapField } from '.'

export const MapFieldStyled = styled.div<IMapField>`
  ${(props) => {
    let sprite = ''
    if (props.sprite != '') {
      sprite += `background-image: url("assets/characters/${props.sprite}.jpg");`
      sprite += 'background-position: center;'
      sprite += 'background-size: cover;'
    }
    return sprite
  }};
  outline: 1px solid black;
  height: calc(${(props) => props.widthSize} / ${(props) => props.numberColumns});
  width: calc(${(props) => props.widthSize} / ${(props) => props.numberLines});
`
