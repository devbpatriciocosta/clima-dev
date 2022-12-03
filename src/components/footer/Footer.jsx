import styled from 'styled-components'

const StyledFooter = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  text-align: center;
  padding: 30px 0;
  font-weight: 400;
  font-size: 20px;
`

export default function Footer() {
  return (
    <StyledFooter>
      Criado por <b>Bruno Patrício Costa</b> - <b>devbpatriciocosta</b> - 2022
    </StyledFooter>
  )
}
