import styled from 'styled-components'
import { Link } from "react-router-dom";

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
export const LinkAddCategory = styled(Link)`
  background-color: transparent;
  padding: ${props => props.theme.spaces.small} ${props => props.theme.spaces.medium};
  cursor: pointer;
  border: 2px solid ${props => props.theme.colors.black};
  font-size: 1.3rem;
  font-weight: 400;
  color: ${props => props.theme.colors.black};
  transition: all .25s ease-in-out;
  text-decoration: none;

  &:hover {
    border: 2px solid ${props => props.theme.colors.greeLight};
    background-color: ${props => props.theme.colors.greeLight};
  }
`;
export const Page = styled.div`
  width: 78%;
  padding-left: 2%;
`;
export const HeaderCategory = styled.section`
  width: 100%;
  padding: ${props => props.theme.spaces.medium} 0;
`;
export const TitleCategoryPage = styled.h3`
  font-size: 2rem;
  font-weight: 400;
  color: ${props => props.theme.colors.black};
  display: flex;
  align-items: center;
`;
export const CategoryEdit = styled(Link)`
  width: 20px;
  color: ${props => props.theme.colors.black};
  margin-left: ${props => props.theme.spaces.small};
  cursor: pointer;
`;
export const HeaderArticle = styled(HeaderCategory)`
  border: 1px solid ${props => props.theme.colors.gray};
  border-left: 0;
  border-right: 0;
  padding: ${props => props.theme.spaces.medium} ${props => props.theme.spaces.small};
  justify-content: space-between;
  display: flex;
`;
export const TitleArticlePage = styled.h4`
  font-size: 1.6rem;
  font-weight: 400;
  color: ${props => props.theme.colors.black};
  display: flex;
  align-items: center;
`;
export const LinkNewArticle = styled(Link)`
  background-color: ${props => props.theme.colors.blue};
  padding: ${props => props.theme.spaces.small} ${props => props.theme.spaces.medium};
  cursor: pointer;
  border: 2px solid ${props => props.theme.colors.blue};
  font-size: 1.3rem;
  font-weight: 400;
  color: ${props => props.theme.colors.white};
  transition: all .25s ease-in-out;
  text-decoration: none;

  &:hover {
    border: 2px solid ${props => props.theme.colors.black};
    background-color: transparent;
    color: ${props => props.theme.colors.black};
  }
`;
export const AllArticles = styled.ul``;