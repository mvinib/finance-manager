import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Ionicons } from '@expo/vector-icons';


export const InputText = styled.TextInput.attrs({
  placeholderTextColor: '#BFCEDE'
})`
  color: ${({ theme }) => theme.colors.text};
  width: 90%;
  padding: 18px 16px;
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  border-radius: 6px;
`

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.textSecundary};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(11)}px;
  margin-bottom: 10px;
  margin-left: ${RFValue(20)}px;
`
export const Container = styled.View`
  background-color: rgba(36, 37, 71, 0.4471);
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Ionicons as any).attrs({
  size:24, 
  color: "white"
})``;

export const IconButton = styled.TouchableOpacity`
  
`;