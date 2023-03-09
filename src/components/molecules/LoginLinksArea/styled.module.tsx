import styled from 'styled-components'

export const ListStyled = styled.ul`
  border-top: 1px solid #024da1;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  list-style-type: none;
  margin-top: 30px;
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 75px;

  & ul:nth-child(1) {
    margin: 13px 0 13px;
  }
  & ul::nth-child(n + 2) {
    margin: 0 13px;
  }
`
