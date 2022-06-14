import { TouchableOpacityProps } from "react-native";
import { Container, Name } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  name: string
}

export function Button({ name, ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      <Name>{name}</Name>
    </Container>
  )
}