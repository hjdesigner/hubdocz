import styled from 'styled-components'

export const Alert = styled.div`
  width: 100%;
  display: flex;
  padding: ${props => props.theme.spaces.small};
  font-weight: 400;
  font-size: 1.2rem;
  border-radius: 5px;
  justify-content: space-between;
  align-items: center;
`;
export const Success = styled(Alert)`
  background-color: ${props => props.theme.colors.success};
  border: 1px solid ${props => props.theme.colors.successBorder};
  color: ${props => props.theme.colors.successText}; 
`;
export const Error = styled(Alert)`
  background-color: ${props => props.theme.colors.error};
  border: 1px solid ${props => props.theme.colors.errorBorder};
  color: ${props => props.theme.colors.errorText}; 
`;
export const Button = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  height: 24px;
  width: 24px;
`;