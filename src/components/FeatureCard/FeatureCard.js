import styled from 'styled-components';

function FeatureCard(props) {
  return (
    <Wrapper className={props.reverse && '-reverse'}>
      <ImgBox img={props.img}></ImgBox>
      <Title>{props.name}</Title>
    </Wrapper>
  );
}

const ImgBox = styled.div`
  position: relative;
  &::before {
    content: '';
    display: block;
    width: 100%;
    padding-bottom: 56.25%;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-color: #000;
    background-image: ${(props) => (props.img ? `url(${props.img})` : null)};
  }
  &::after {
    content: '';
    display: block;
    width: 228px;
    height: 78px;
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(95px, 25px);
    background-color: ${(props) => props.theme.colors.lightGreen};
    .-reverse & {
      right: auto;
      left: 0;
      transform: translate(-95px, 25px);
    }
  }
`;

const Title = styled.p`
  position: relative;
  display: block;
  z-index: 1;
  font-size: 54px;
  font-weight: 700;
  line-height: 1.33;
  letter-spacing: 1.2px;
  color: #fff;
  margin-top: 20px;
  padding-bottom: 80px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  &.-reverse {
    flex-direction: row-reverse;
  }

  ${ImgBox} {
    flex: 0 0 calc((100% - 16px) / 12 * 8);
    width: calc((100% - 16px) / 12 * 8);
  }
  ${Title} {
    flex: 0 0 calc((100% - 16px) / 12 * 4);
    width: calc((100% - 16px) / 12 * 4);
  }

  ${ImgBox} + ${Title} {
    margin-left: 16px;
  }
  ${Title} + ${ImgBox} {
    margin-left: 16px;
  }
`;

export default FeatureCard;
