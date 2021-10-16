import React from 'react'
import styled from 'styled-components'

const HomeTemplate = () => {
  return (
    <Wrapper>
      <Name>HubDocz</Name>
      <Text>Create the best content for your FAQ</Text>
      <OppenSource>This is an open source tool, so feel free to contribute</OppenSource>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Name = styled.h1`
  font-size: 8rem;
  font-weight: 800;
  width: 100%;
  text-align: center;
  color: ${props => props.theme.colors.greenDark};
`;
const Text = styled.p`
  font-size: 3rem;
  font-weight: 400;
  width: 100%;
  text-align: center;
  color: ${props => props.theme.colors.black}
`;
const OppenSource = styled(Text)`
  font-size: 2rem;
  margin-top: 8px;
`;

export default HomeTemplate