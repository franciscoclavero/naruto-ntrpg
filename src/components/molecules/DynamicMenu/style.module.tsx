import styled from 'styled-components'

interface IDynamicMenuCharacter {
  visible: boolean
  left: string | number
  top: string | number
}

export const DynamicMenuArea = styled.div<IDynamicMenuCharacter>`
  position: absolute;
  display: ${(props) => {
    return props.visible ? 'block' : 'none'
  }};
  background-color: #d9d9d9;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
`
