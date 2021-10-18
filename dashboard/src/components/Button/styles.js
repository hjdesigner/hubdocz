import styled from 'styled-components'

export const ButtonElement = styled.button`
  background-color: transparent;
  padding: ${props => props.theme.spaces.small} ${props => props.theme.spaces.medium};
  cursor: pointer;
  border: 2px solid ${props => props.theme.colors.black};
  font-size: 1.3rem;
  font-weight: 400;
  color: ${props => props.theme.colors.black};
  transition: all .25s ease-in-out;

  &:hover {
    border: 2px solid ${props => props.theme.colors.greeLight};
    background-color: ${props => props.theme.colors.greeLight};
  }
`;
export const ButtonCreateElement = styled.button`
  background-color: ${props => props.theme.colors.blue};
  padding: ${props => props.theme.spaces.small};
  cursor: pointer;
  border: 0;
  font-size: 1.3rem;
  font-weight: 400;
  color: ${props => props.theme.colors.white};
  transition: all .25s ease-in-out;

  &:disabled {
    cursor: default;
    opacity: .5;
    
    &:hover {
      background-color: ${props => props.theme.colors.blue};
    }  
  }
  &:hover {
    background-color: ${props => props.theme.colors.black};
  }
`;
export const ButtonCancelElement = styled(ButtonElement)`
  padding: ${props => props.theme.spaces.small};
  margin-left: ${props => props.space === true ? props.theme.spaces.small : '0'};
  
  &:hover {
    border: 2px solid ${props => props.theme.colors.black};
    background-color: transparent;
  }
`;