import { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import useWindowDimensions from '../../hook/useWindowDimensions';

function AboutBanner(props) {
  const [isMount, setIsMount] = useState(false);
  const windowSize = useWindowDimensions();

  useEffect(() => {
    setIsMount(true);
  }, []);

  return (
    <ThemeProvider theme={{ rwd: windowSize.rwd }}>
      <Wrapper className={isMount && '-active'}>
        <Main>
          <TextWrapper padding={props.textPadding}>
            <Text>{props.text}</Text>
          </TextWrapper>
        </Main>
      </Wrapper>
    </ThemeProvider>
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
    display: ${(props) => (props.theme.rwd === 'xs' ? 'none' : 'block')};
    width: ${(props) => (props.theme.rwd === 'lg' ? 260 : 180)}px;
    height: ${(props) => (props.theme.rwd === 'lg' ? 100 : 50)}px;
    
    background-color: ${(props) => props.theme.colors.main}
  }
`;

const TextWrapper = styled.div`
  position: relative;
  padding: ${(props) => {
    const baseWidth = props.theme.rwd === 'lg' ? 280 : (props.theme.rwd === 'sm' ? 120 : 0);
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
  font-size: ${(props) => ((props.theme.rwd === 'xs')
    ? 40 : (
      props.theme.rwd === 'sm' ? 48 : 68
    ))}px;
  font-weight: 800;
  line-height: 1.21;
  letter-spacing: 1.3px;
  color: ${(props) => props.theme.colors.main};
`;

export default AboutBanner;
