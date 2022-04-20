import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;
export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  color: ${props => props.theme.colors.black};
  margin-bottom: ${props => props.theme.spaces.large};
`;
export const Page = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Form = styled.div`
  width: 80%;
`;
export const SpaceMedium = styled.div`
  margin-top: ${props => props.theme.spaces.medium};
`;
export const AcitionsAddCategory = styled.div`
  margin-top: ${props => props.theme.spaces.small};
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
`;
export const IsSub = styled.div`
  display: flex;
  align-items: center;
`;
export const IsSubText = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  color: ${props => props.theme.colors.black};
  margin-right: ${props => props.theme.spaces.small};
`;
export const IsSubLabel = styled.label`
  width: 20px;
  height: 20px;
  background-color: ${props => props.theme.colors.gray};
  border: 2px solid ${props => props.theme.colors.black};
  cursor: pointer;
`;
export const IsSubCheck = styled.input`
  display: none;

  &:checked ~ label {
    background-color: ${props => props.theme.colors.blue};
  }
`;
export const AlertWrapper = styled.div`
  margin-bottom: ${props => props.theme.spaces.medium};
`;