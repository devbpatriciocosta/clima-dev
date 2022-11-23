/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components'

const Image = styled.img``

const VerticalText = styled.h1`
  font-size: 80px;
  color: ${(props) => props.theme.colors.black};
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
