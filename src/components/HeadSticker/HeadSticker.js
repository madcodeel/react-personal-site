import styled from 'styled-components';

function HeadSticker(props) {
  return (
    <Wrapper>
      {props.title && <Title>{props.title}</Title>}
      {props.img && <ImgWrapper><img src={props.img} /></ImgWrapper>}
      <DecoBox />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  padding-right: 50px;
  padding-bottom: 90px;
`;

const Title = styled.p`
  position: relative;
  display: block;
  font-size: 76px;
  font-weight: 700;
  letter-spacing: 2.17px;
  color: #fff;
  text-transform: uppercase;
`;

const ImgWrapper = styled.div`
  position: relative;
  img {
    display: block;
    max-width: 100%;
  }
`;

const DecoBox = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  display: block;
  width: 33%;
  z-index: 1;
  background-color: #fff;

  &::before {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;

export default HeadSticker;
