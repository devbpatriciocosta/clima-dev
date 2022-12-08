import styled from 'styled-components'

const StyledFlex = styled.div`
  display: flex;
`

const BackgroundImage = styled.div`
  background-image: url('${(props) => props.image}');
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;
  width: 100%;
  min-height: 95vh;
`

export default function BackgroundImageWithSpace({ children, image }) {
  return (
    <StyledFlex>
      {children}
      <BackgroundImage image={image} />
    </StyledFlex>
  )
}

BackgroundImageWithSpace.defaultProps = {
  image: '/background.png'
}
