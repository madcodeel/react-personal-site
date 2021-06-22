import styled from 'styled-components';

function Title(props) {
  return <TitleDom color={props.color}>{props.text}</TitleDom>;
}

const TitleDom = styled.h3`
  font-size: 54px;
  font-weight: 700;
  line-height: 1.33;
  letter-spacing: 1.2px;
  color: ${(props) => (props.theme.colors.color ? props.theme.colors.color : '#fff')};
  margin-bottom: 24px;
  text-transform: uppercase;
`;

export default Title;
