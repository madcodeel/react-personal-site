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
  &::before {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    display: block;
    width: 260px;
    height: 100px;
    background-color: ${(props) => props.theme.main}
  }
`;

const TextWrapper = styled.div`
  position: relative;
  padding: ${(props) => {
    const baseWidth = 280;
    if (!props.padding) return `0 ${baseWidth}px 0 0 `;

    const paddingArr = props.padding.split(' ');
    if (paddingArr.length > 1) {
      paddingArr[1] = `${Math.max(parseInt(paddingArr[1].replace('px', ''), 10), baseWidth)}px`;
    } else if (paddingArr.length === 1 && parseInt(paddingArr[0], 10) < baseWidth) {
      return `${baseWidth}px ${paddingArr[0]}`;
    }

    return paddingArr.join(' ');
  }};
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
