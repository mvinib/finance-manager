import React from 'react'
import { Container, Icon, InputText, Label } from './styles'
import { TextInputProps } from 'react-native'

export interface inputProps extends TextInputProps {
  label: string;
  iconName?: string;
}

export function Input({ label, iconName ,...rest }: inputProps) {
  return (
    <>
      <Label>{label}</Label>
      <Container>
        <InputText {...rest} />
        {iconName && <Icon name={iconName} />}
      </Container>
    </>
  )
}