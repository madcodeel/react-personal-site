import styled from 'styled-components';

function Paragraph(props) {
  return <ParagraphDom color={props.color} dangerouslySetInnerHTML={{ __html: props.text }}/>;
}

const ParagraphDom = styled.p`
  position: relative;
  color: ${(props) => (props.theme.colors.color ? props.theme.colors.color : '#fff')};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.67;
  letter-spacing: .51px;
  z-index: 0;

  a {
    position: relative;
    z-index: 1;
    transition: color 0.2s;

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

export default Paragraph;
