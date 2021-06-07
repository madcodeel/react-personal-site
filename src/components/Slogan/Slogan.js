import styled from 'styled-components';

function Title(props) {
  return <TitleDom color={props.color}>{props.text}</TitleDom>;
}

const TitleDom = styled.p`
  position: relative;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.58;
  letter-spacing: .68px;
  color: ${(props) => (props.theme.color ? props.theme.color : '#fff')};
  text-align: center;
  padding: 0 65px;
  &::before, &:: after {
    position: absolute;
    top: 0;
    color: #fff;
    font-family: Noto Sans TC,sans-serif;
  }
  &::before {
    content: "“";
    left: 12px;
  }
  &::after {
    content: "”";
    right: 12px;
  }
`;

export default Title;
