import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

function PopModal(props) {
  const scrollDom = useRef();

  useEffect(() => {
    disableBodyScroll(scrollDom);
    return () => {
      clearAllBodyScrollLocks();
    };
  }, []);

  return (
    <Wrapper Ref={scrollDom}>
      <CloseBtn onClick={props.close}>X</CloseBtn>
      <Container>
        <Main>
          {props.children}
        </Main>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  padding: 0 16px;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;
  overflow: auto;
`;

const Main = styled.div`
  position: relative;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 768px;
  min-height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  &::before, &::after {
    content: '';
    display: block;
    flex: 1 1 auto;
    height: 120px;
  }

  ${Main} {
    flex: 0 0 auto;
  }
`;

const CloseBtn = styled.div`
  position: absolute;
  right: 30px;
  top: 30px;
  cursor: pointer;
  color: #fff;
`;

export default PopModal;
