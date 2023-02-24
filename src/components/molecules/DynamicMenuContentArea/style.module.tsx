import styled from 'styled-components'

interface IMenuContentArea {
  visible: boolean
}

export const DynamicMenuContentAreaStyled = styled.div<IMenuContentArea>`
  border: 10px solid #7c765a;
  border-top: none;
  background-color: rgb(191, 191, 191);
  background-image: url('assets/images/kurama-seal.png');
  background-position: center;
  background-blend-mode: soft-light;
  padding: 1px 8px;
  background-repeat: no-repeat;
  background-clip: border-box;
  background-size: 100%;
  overflow: hidden;
  max-height: 0px;

  ${(props) => {
    return props.visible ? 'animation: open 1.5s ease 0.5s 1 normal forwards;' : '0'
  }};

  @keyframes open {
    0% {
      max-height: 0px;
    }

    100% {
      max-height: 1000px;
    }
  }
`
