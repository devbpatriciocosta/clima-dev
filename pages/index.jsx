import styled from 'styled-components'

import BackgroundImageWithSpace from '../src/components/layout/backgroundImageWithChildren/BackgroundImageWithChildren'
import Logo from '../src/components/logo/Logo'
import SearchCity from '../src/components/searchCity/SearchCity'
import Footer from '../src/components/footer/Footer'

const StyledDiv = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  min-width: 500px;
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 40px;

  @media (max-width: 500px) {
    min-width: 100%;
  }
`

const StyledInput = styled(SearchCity)`
  width: 100%;
  box-sizing: border-box;
`

const InputContainer = styled.div`
  @media (min-width: 750px) {
    width: 150%;
  }

  z-index: 100;
`

export default function homePage() {
  return (
    <>
      <BackgroundImageWithSpace>
        <StyledDiv>
          <Logo showImage type="vertical" />
          <InputContainer>
            <StyledInput />
          </InputContainer>
        </StyledDiv>
      </BackgroundImageWithSpace>
      <Footer />
    </>
  )
}
