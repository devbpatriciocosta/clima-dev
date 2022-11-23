/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components'

const Image = styled.img`
  max-width: 250px;

  @media (max-width: 768px) {
    width: 80%;
  }
`

const VerticalText = styled.h1`
  font-size: 80px;
  color: ${(props) => props.theme.colors.black};
  line-height: 70px;
  margin-left: 150px;
  margin-top: -80px;
`

const PrimaryColor = styled.span`
  color: ${(props) => props.theme.colors.primary};
`

export default function Logo({ showImage, type }) {
  return (
    <div>
      {showImage && <Image src="/woman.svg" />}
      {type === 'vertical' && (
        <VerticalText>
          Clima <br /> <PrimaryColor>DEV</PrimaryColor>
        </VerticalText>
      )}
    </div>
  )
}
