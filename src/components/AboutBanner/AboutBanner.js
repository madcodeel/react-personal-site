import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Container from '../Container/Container';

function AboutBanner(props) {
  const [isMount, setIsMount] = useState(false);

  useEffect(() => {
    setIsMount(true);
  }, []);

  return (
    <Container>
      <Wrapper className={isMount && '-active'}>
        <Main>
          <TextWrapper padding={props.textPadding ? props.textPadding : '0 0 40px 45%'}>
            <Text>{props.text}</Text>
          </TextWrapper>
        </Main>
      </Wrapper>
    </Container>
  );
}

const Wrapper = styled.div`
  position: relative;
  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.lightGreen};
    transform-origin: left center;
    transform: scaleX(0);
    transition: transform 0.55s;
  }
  &.-active::before {
    transform: none;
  }
`;

const Main = styled.div`
  position: relative;
  padding: 100px 0;
  &::before, &::after {
    content: '';
    position: absolute;
    display: block;
    width: 50%;
    height: 100px;
    background-color: ${(props) => props.theme.colors.main}
  }
  &::before {
    left: 0;
    top: 0;
  }
  &::after {
    right: 0;
    bottom: 0;
  }
`;

const TextWrapper = styled.div`
  position: relative;
  padding: ${(props) => props.padding};
  transform: translateX(20px);
  opacity: 0;
  transition: transform 0.3s 0.4s, opacity 0.3s 0.4s;
  ${Wrapper}.-active & {
    opacity: 1;
    transform: none;
  }
`;

const Text = styled.p`
  font-size: 68px;
  font-weight: 800;
  line-height: 1.21;
  letter-spacing: 1.3px;
  color: ${(props) => props.theme.colors.main};
`;

export default AboutBanner;
