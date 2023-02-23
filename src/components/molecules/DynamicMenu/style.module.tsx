import styled from 'styled-components'

export const DynamicMenuArea = styled.div`
  position: absolute;
  heigth: 80px;
  background-color: #d9d9d9;
  top: 100px;
  left: 250px;
`

export const DynamicMenuContentArea = styled.div`
  border: 10px solid #7c765a;
  border-top: none;
  background-color: #d9d9d9;
  background-image: url('assets/images/kurama-seal.png');
  background-position: center;
  background-blend-mode: soft-light;
  padding: 1px 8px;
  background-repeat: no-repeat;
  background-clip: border-box;
  background-size: 100%;
`

export const DynamicMenuOption = styled.div`
  height: 50px;
  width: 100%;
  margin: 8px 0px;
  border: 2px solid #000;
  cursor: pointer;
  line-height: 50px;
  text-align: center;

  &:hover {
    background-color: rgba(191, 191, 191, 0.7);
  }
`
