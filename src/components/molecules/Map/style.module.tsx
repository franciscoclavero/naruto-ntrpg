import styled from 'styled-components'

interface IMapStyled {
  height: string | number
  width: string | number
}

export const MapStyled = styled.div<IMapStyled>`
  border: 4px solid black;
  display: flex;
  flex-wrap: wrap;
  height: ${(props) => props.height};
  margin: auto;
  width: ${(props) => props.width};
`
