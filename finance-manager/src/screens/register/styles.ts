import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0px 20px 0;

`;

export const Header = styled.View`
  height: ${RFPercentage(30)}px;
  padding-right: ${RFValue(10)}px;
  
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(27)}px;
  color: ${({ theme }) => theme.colors.text};
  line-height: ${RFValue(35)}px;
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-top: ${RFValue(10)}px;
`;

export const ContainerForm = styled.View`
  width: 100%;
  flex: 1;
`;