import styled from 'styled-components'

import Navbar from '../../../src/components/navbar/Navbar'

const Body = styled.div`
  background-color: ${(props) => props.theme.colors.grey};
  min-height: 100vh;
`

export default function infoPage() {
  return (
    <>
      <Navbar />
      <Body>Informações climáticas</Body>
    </>
  )
}
