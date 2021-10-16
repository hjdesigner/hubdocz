import styled from 'styled-components'

export const NavContainer = styled.nav`
  width: 100%;
  background-color: ${props => props.theme.colors.greeLight};
`;
export const NavUl = styled.ul`
  margin: 0;
  padding: 0;
`;
export const NavLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.spaces.medium} 0;
  transition: all .25s ease-in-out;

  svg {
    width: 50px;
    height: 50px;
    transition: all .25s ease-in-out;
  }

  &:hover {
    path {
      fill: ${props => props.theme.colors.greenDark}
    }
  }
`;