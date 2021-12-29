import styled from 'styled-components'
import { Link } from "react-router-dom";

export const Category = styled.li`
  align-items: center;
  display: flex;
  padding: ${props => props.theme.spaces.small} 0;
  font-size: 1.3rem;
  color: ${props => props.theme.colors.grayMedium};
  justify-content: space-between;
  flex-wrap: wrap;
  cursor: pointer;
`;
export const CategoryStatus = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: ${props => props.status === true ? props.theme.colors.greenMedium : props.theme.colors.red};
  margin: 0 ${props => props.theme.spaces.small} 0 ${props => props.space ? '0' : '17px'};
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
export const SubCategory = styled.ul`
  width: 100%;
  padding-left: ${props => props.theme.spaces.large};
  display: ${props => props.open === true ? 'block' : 'none'};
`;
export const SubCategoryLi = styled.li`
  padding: ${props => props.theme.spaces.small} 0 0;
  cursor: pointer;
`;
export const IconCategory = styled.div`
  display: flex;
  align-items: center;
  transition: transform .25s ease-in-out;
  transform: ${props => props.open ? 'rotate(90deg)' : 'translate(0deg)'};

  svg {
    width: 18px;
    height: 18px;
  }
`;
export const CategoryLink = styled(Link)`
  list-style: none;
  text-decoration: none;
  width: auto;
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  color: ${props => props.theme.colors.grayMedium};
  flex-wrap: wrap;
  cursor: pointer;
`;