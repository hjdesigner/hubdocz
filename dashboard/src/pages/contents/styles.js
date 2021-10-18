import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;
export const WrapperCategories = styled.ul`
  width: 20%;
  border-right: 1px solid ${props => props.theme.colors.gray};
  padding: ${props => props.theme.spaces.medium} ${props => props.theme.spaces.medium} 0 0;
`;
export const TitleCategory = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  color: ${props => props.theme.colors.black};
  margin-bottom: ${props => props.theme.spaces.large};
`;
export const ActionCategory = styled.div`
  margin-bottom: ${props => props.theme.spaces.large};
  text-align: right;
`;
export const AddCategory = styled.div`
  margin-bottom: ${props => props.theme.spaces.large};
`;
export const AcitionsAddCategory = styled.div`
  margin-top: ${props => props.theme.spaces.small};
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
`;
export const SpaceMedium = styled.div`
  margin-top: ${props => props.theme.spaces.medium};
`;
export const StatusActions = styled(AddCategory)``;