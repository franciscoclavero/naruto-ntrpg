import styled from 'styled-components'

interface IDynamicMenuCharacter {
  visible: boolean
  left: string | number
  top: string | number
}

export const DynamicMenuArea = styled.div<IDynamicMenuCharacter>`
  position: absolute;
  opacity: ${(props) => {
    return props.visible ? '1' : '0'
  }};
  background-color: #d9d9d9;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  ${(props) => {
    return props.visible ? 'animation: myAnim 1s ease 0s 1 normal forwards;' : '0'
  }};

  @keyframes myAnim {
    0% {
      transform: scale(0.5);
    }

    100% {
      transform: scale(1);
    }
  }
`
