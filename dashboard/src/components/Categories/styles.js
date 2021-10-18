import styled from 'styled-components'

export const Category = styled.li`
  align-items: center;
  display: flex;
  padding: ${props => props.theme.spaces.small} 0;
  font-size: 1.5rem;
  color: ${props => props.theme.colors.grayMedium};
  justify-content: space-between;
`;
export const CategoryStatus = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: ${props => props.status === true ? props.theme.colors.greenMedium : props.theme.colors.red};
  margin: 0 ${props => props.theme.spaces.small};
`;
export const CategoryText = styled.div`
  display: flex;
  align-items: center;
`;
export const CategoryActions = styled(CategoryText)``;
export const CategoryButton = styled.button`
  background-color: transparent;
  border: 0;
  margin-left: ${props => props.space === true ? props.theme.spaces.small : '0'};
  cursor: pointer;
`;