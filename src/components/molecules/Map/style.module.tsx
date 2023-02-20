import styled from 'styled-components'

interface IMapStyled {
  height: string | number
  width: string | number
  storybook?: boolean
}

export const MapStyled = styled.div<IMapStyled>`
  border: 4px solid black;
  display: flex;
  flex-wrap: wrap;
  height: calc(${(props) => props.height} ${(props) => (props.storybook ? '' : '+ 8px')});
  margin: auto;
  width: calc(${(props) => props.width} ${(props) => (props.storybook ? '' : '+ 8px')});
`
