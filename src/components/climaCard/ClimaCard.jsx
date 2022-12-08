import styled from 'styled-components'

const StyledClimaCard = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 300px;
  padding: 15px;
`

const Title = styled.h6`
  font-size: 20px;
  font-weight: 20px;
  text-align: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`

const BasicInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const BasicInfoImg = styled.img`
  width: 100px;
  height: 100px;
`

const BasicInfoText = styled.div`
  text-align: center;
  flex: 1;
`

const InfoLine = styled.p`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  padding: 0 15px;
  line-height: 40px;
`

const InfoTemperature = styled.span`
  font-weight: 700;

  ${(props) => props.blue && 'color: #00c9f5'}
  ${(props) => props.red && 'color: #ff0000'}
`

export default function ClimaCard({ title, icon, description, temp, feels, min, max }) {
  return (
    <StyledClimaCard>
      <Title>{title}</Title>
      <BasicInfo>
        <BasicInfoImg src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
        <BasicInfoText>{description}</BasicInfoText>
      </BasicInfo>
      <InfoLine>
        Temperatura
        <InfoTemperature> {temp} °C</InfoTemperature>
      </InfoLine>
      <InfoLine>
        Sensação
        <InfoTemperature> {feels} °C</InfoTemperature>
      </InfoLine>
      <InfoLine>
        Mínima
        <InfoTemperature blue> {min} °C</InfoTemperature>
      </InfoLine>
      <InfoLine>
        Máxima
        <InfoTemperature red> {max} °C</InfoTemperature>
      </InfoLine>
    </StyledClimaCard>
  )
}
