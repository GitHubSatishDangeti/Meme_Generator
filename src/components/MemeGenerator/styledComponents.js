import styled from 'styled-components'

export const FormContainer = styled.form``
export const ImageContainer = styled.div`
  background-image: url(${props => props.bgImage});
  height: 200px;
`
export const MainHeading = styled.h1`
  color: #35469c;
`
export const Label = styled.label`
  color: #d7dfe9;
`
export const TopText = styled.p`
  color: #1e293b;
  font-size: ${props => props.size}px;
`
export const BottomText = styled.p`
  color: #1e293b;
  font-size: ${props => props.size}px;
`

export const ImageInput = styled.input``
export const Container = styled.div``
export const Break = styled.br``
export const Select = styled.select``
export const Option = styled.option``
export const GenerateButton = styled.button`
  background-color: #0b69ff;
  border-style: none;
  color: #ffffff;
`
