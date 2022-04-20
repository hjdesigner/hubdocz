import styled from 'styled-components'
import { Link } from "react-router-dom";

export const ArticleWrapper = styled.li`
  padding: ${props => props.theme.spaces.medium};
  border-bottom: ${props => props.theme.colors.grayLigth};
  transition: all .25s ease-in-out;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:nth-child(2n) {
    background-color: ${props => props.theme.colors.grayLigth};
  }

  &:hover {
    background-color: ${props => props.theme.colors.gray};
  }
`;
export const ArticleStatus = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: ${props => props.status === true ? props.theme.colors.greenMedium : props.theme.colors.red};
  margin: 0 ${props => props.theme.spaces.small} 0 ${props => props.space ? '0' : '17px'};
`;
export const ArticleTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 400;
  color: ${props => props.theme.colors.black};
  display: flex;
  align-items: center;
`
export const ArticlesActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ArticleEdit = styled(Link)`
  width: 20px;
  color: ${props => props.theme.colors.black};
  margin-right: ${props => props.theme.spaces.small};
  cursor: pointer;
`;