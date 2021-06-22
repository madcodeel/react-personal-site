import styled from 'styled-components';
import PopModal from '../PopModal/PopModal';

function ProjectModal(props) {
  const rawData = props.data;

  return (
    <PopModal close={() => props.clickClose()}>
      <Wrapper>
        {
          (rawData.img && rawData.img.cover && rawData.img.cover !== '')
          && (<ImgBox as="a" href={rawData.link} target="_blank" rel="noreferrer">
            <img src={rawData.img.cover} alt={rawData.img.name} />
          </ImgBox>)
        }
        <Title>{rawData.name}</Title>
        {
          (rawData.credit && rawData.credit.length > 0)
          && (
            <CreditList>
              {
                rawData.credit.map((item) => (<li key={`credit-${item.title}`}><b>{ item.title }</b>：{
                  item.url
                    ? <a href={item.url} target="_blank" rel="noreferrer">{item.text}</a>
                    : item.text
                }</li>))
              }
            </CreditList>
          )
        }
      </Wrapper>
    </PopModal>
  );
}

const Wrapper = styled.div`
  position: relative;

  img {
    max-width: 100%;
    display: block;
  }
`;

const ImgBox = styled.div`
  position: relative;
  display: block;
  margin-bottom: 40px;
`;

const Title = styled.p`
  font-size: 27px;
  font-weight: 700;
  line-height: 1.41;
  letter-spacing: .77px;
  color: #fff;
  margin-bottom: 16px;
`;

const CreditList = styled.ul`
  color: #fff;

  b {
    font-weight: bold;
  }

  li {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.67;
    letter-spacing: .51px;
    color: #fff;
  }

  a {
    position: relative;
    z-index: 1;
    transition: color 0.2s;
    color: #fff;

    &:hover {
      color: ${(props) => props.theme.colors.main};
      &::before {
        height: 100%;
      }
    }
  
    &::before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      transition: height 0.3s;
      background-color: ${(props) => props.theme.colors.lightGreen};
      z-index: -1;
    }
  }
`;

export default ProjectModal;
