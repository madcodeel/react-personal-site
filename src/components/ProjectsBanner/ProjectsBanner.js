import { useState, useEffect } from 'react';
import styled from 'styled-components';

function AboutBanner(props) {
  const [isMount, setIsMount] = useState(false);

  useEffect(() => {
    setIsMount(true);
  }, []);

  return (
    <Wrapper className={isMount && '-active'}>
      <Main>
        <TextWrapper padding={props.textPadding}>
          <Text>{props.text}</Text>
        </TextWrapper>
      </Main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: ${(props) => (props.width ? props.width : '45%')};
  margin-bottom: -100px;
  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.lightGreen};
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
  padding: 20px 16px 120px;
`;

const TextWrapper = styled.div`
  position: relative;
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
  color: ${(props) => props.theme.main};
`;

export default AboutBanner;
