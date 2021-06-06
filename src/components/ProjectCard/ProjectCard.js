import { useCallback } from 'react';
import styled from 'styled-components';

function ProjectCard(props) {
  const handleClick = useCallback(
    () => {
      props.onClick(props.data);
    },
    [props],
  );

  return (
    <Wrapper onClick={handleClick}>
      <ImgBox img={props.data.img.thumb} />
      <Title>{props.data.name}</Title>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

const ImgBox = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 22px;
  overflow: hidden;

  &::before {
    content: '';
    display: block;
    width: 100%;
    padding-bottom: 56.25%;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-color: #000;
    background-image: url(${(props) => ((props.img && props.img !== '') && props.img)});
    will-change: transform filter;
    filter: grayscale(0.8);
    transition: transform 0.5s ease-out, filter 0.5s linear;
  }

  ${Wrapper}:hover &::before {
    filter: none;
    transform: scale(1.1);
  }
`;

const Title = styled.p`
  font-size: 26px;
  font-weight: 600;
  line-height: 1.54;
  letter-spacing: .74px;
  line-height: 1.3;
  color: #fff;
  text-align: center;
`;

export default ProjectCard;
