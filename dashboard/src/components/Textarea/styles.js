import styled from 'styled-components'

export const Field = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.gray};
  border-bottom: 3px solid ${props => props.theme.colors.black};
  padding: ${props => props.theme.spaces.small};
`;
export const Label = styled.label`
  width: 100%;
  margin-bottom: ${props => props.theme.spaces.small};
  display: inline-block;
  font-size: 1.4rem;
  color: ${props => props.theme.colors.black};
`;
export const TextArea = styled.div`
  background-color: ${props => props.theme.colors.white};
`;