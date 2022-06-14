import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import {
  Container,
  ContainerForm,
  Header, 
  SubTitle, 
  Title,
} from './styles'
import { ControlledInput } from '../../components/Form/ControlledInput'
import { Button } from '../../components/Form/Button'
import { useState } from 'react'

type FormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const schema = yup.object({
  name : yup.string().required("Informe o seu nome"),
  password : yup.string()
  .required("Informe uma senha válida")
  .min(8, "A senha deve ter no mínimo 8 caracteres"),
  confirmPassword : yup.string()
  .required("Confirme a senha")
  .oneOf([yup.ref('password'), null], "As senhas devem ser iguais"),
  email : yup.string().email("E-mail inválido").required("Informe o seu e-mail")
})

export function Register() {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  const [showPass, setShowPass] = useState(true)
  const [showPassConfirm, setShowPassConfirm] = useState(true)

  function handleRegistrationButton(data: FormData) {
    console.log(data)
    
  }
  return(
    <Container>
     <Header>
      <Title>
          Entrar no 
      </Title>
      <Title>
          Finance Manager
      </Title>
      <SubTitle>Conte com o gerenciador de finanças para gerenciar todo o seu dinheiro sem entrar em problemas desnecessários</SubTitle>
     </Header>
     <ContainerForm>
      <ControlledInput
        name="name"
        control={control}
        label="Nome"
        placeholder="Digite seu nome"
        error={errors.name}
      />
      <ControlledInput
        name="email"
        keyboardType='email-address'
        control={control}
        label="Email"
        placeholder="Digite seu Email"
        error={errors.email}
      />
      <ControlledInput
        name="password"
        control={control}
        label="Senha"
        secureTextEntry={showPass}
        placeholder="Digite sua senha"
        error={errors.password}
      />
      <ControlledInput
        name="confirmPassword"
        control={control}
        label="Confirmar Senha"
        secureTextEntry={showPassConfirm}
        placeholder="Confirme a senha"
        error={errors.confirmPassword}
      />
      <Button 
          name='Cadastrar'
          onPress={handleSubmit(handleRegistrationButton)}/>
     </ContainerForm>
    </Container>
  )
}