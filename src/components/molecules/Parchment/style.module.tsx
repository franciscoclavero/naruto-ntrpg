import styled from 'styled-components'

interface IParchment {
  height: string
  width: string
  backgroundColor: string
}

export const ParchmentBody = styled.div<IParchment>`
  background-color: ${(props) => props.backgroundColor};
  border: 4px solid #000;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  display: flex;
  justify-content: space-between;

  margin: 25px;
`
