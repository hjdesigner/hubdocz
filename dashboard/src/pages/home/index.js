import React from 'react'
import styled from 'styled-components'

const HomeTemplate = () => {
  return (
    <Wrapper>
      <Name>HubDocz</Name>
      <Text>Crie os melhores conteúdos para sua FAQ</Text>
      <OppenSource>Essa é uma ferramenta open source, então sinta-se a vontade para contribuir</OppenSource>
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