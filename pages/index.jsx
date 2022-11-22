import styled from 'styled-components'

import BackgroundImageWithSpace from '../src/components/layout/backgroundImageWithChildren/BackgroundImageWithChildren'

const StyledDiv = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
`

export default function homePage() {
  return (
    <BackgroundImageWithSpace>
      <StyledDiv>Clima DEV</StyledDiv>
    </BackgroundImageWithSpace>
  )
}
