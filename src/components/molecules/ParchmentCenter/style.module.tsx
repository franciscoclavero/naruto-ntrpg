import styled from 'styled-components'

interface IParchmentLabel {
  width: string
  backgroundColor: string
  borderSize: string
  borderColor: string
}

export const ParchmentLabelCenter = styled.div<IParchmentLabel>`
  height: 100%;
  background-color: ${(props) => props.backgroundColor};
  width: ${(props) => props.width};
  border-left: ${(props) => props.borderSize} solid ${(props) => props.borderColor};
  border-right: ${(props) => props.borderSize} solid ${(props) => props.borderColor};
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
`
