import styled from 'styled-components'

interface ITimerArea {
  width: string
}

export const TimeAreaStyled = styled.div<ITimerArea>`
  background-color: #fcba21;
  border: 3px solid #024da1;
  border-left: none;
  display: flex;
  height: 50px;
  width: ${(prop) => prop.width};
`
