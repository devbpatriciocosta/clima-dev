import styled from 'styled-components'

const StyledDiv = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
`

export default function homePage() {
  return <StyledDiv>Clima DEV</StyledDiv>
}
