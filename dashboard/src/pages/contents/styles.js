import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: ${props => props.theme.spaces.medium} 0 0;
`;
export const WrapperCategories = styled.ul`
  width: 20%;
  border-right: 1px solid ${props => props.theme.colors.gray};
`;
export const TitleCategory = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  color: ${props => props.theme.colors.black};
  margin-bottom: ${props => props.theme.spaces.large};
`;