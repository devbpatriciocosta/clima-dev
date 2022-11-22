import styled from 'styled-components'

import BackgroundImageWithSpace from '../src/components/layout/backgroundImageWithChildren/BackgroundImageWithChildren'

const StyledDiv = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  min-width: 500px;

  @media (max-width: 500px) {
    min-width: 100%;
  }
`

export default function homePage() {
  return (
    <BackgroundImageWithSpace>
      <StyledDiv>Clima DEV</StyledDiv>
    </BackgroundImageWithSpace>
  )
}
