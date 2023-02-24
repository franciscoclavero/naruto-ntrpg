import styled from 'styled-components'

interface IParchment {
  height: string
  width: string
  border: string
  backgroundColor: string
}

export const ParchmentBody = styled.div<IParchment>`
  background-color: ${(props) => props.backgroundColor};
  border: ${(props) => props.border} solid #000;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  display: flex;
  justify-content: space-between;
`
