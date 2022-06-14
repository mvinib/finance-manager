import styled from 'styled-components/native'
import { RFValue, RFPercentage} from 'react-native-responsive-fontsize'

export const Container = styled.TouchableOpacity`
  width: 100%;
  height:${ RFValue(52)}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  
`;

export const Name = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family:  ${({ theme }) => theme.fonts.medium};
  color:${({ theme }) => theme.colors.text} ;
`;