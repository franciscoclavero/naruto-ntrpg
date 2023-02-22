import styled from 'styled-components'

export const CharacterLifeStyled = styled.div`
  border: 1px solid #000;
  border-radius: 6px;
  display: flex;
  height: 36px;
  overflow: hidden;
  position: relative;
  width: 164px;
`

interface ILife {
  life: number
}

export const LifeBar = styled.div<ILife>`
  ${(props) => {
    if (props.life > 70) return 'background-color: #6CE059;'
    if (props.life > 40) return 'background-color: #E0D359;'
    return 'background-color: #E05959;'
  }};

  height: 100%;
  width: ${(props) => props.life}%;
`

export const TextLife = styled.span`
  position: absolute;
  height: 100%;
  width: 100%;
  text-align: center;
  line-height: 34px;
`
