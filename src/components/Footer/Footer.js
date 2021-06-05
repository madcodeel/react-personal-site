import { useContext } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Container from '../Container/Container';
import Context from '../../store/index';

function Footer() {
  const context = useContext(Context);
  return (
    <ThemeProvider theme={context.colors}>
      <FooterDom>
        <Container>
          <FooterText>🤟🏻<br/>LET’S WORK TOGETHER,<br/>
            <FooterTextHighlight as="a" href="mailto: madcode.el@gmail.com"><span>GET IN TOUCH</span></FooterTextHighlight>
          </FooterText>
        </Container>
      </FooterDom>
    </ThemeProvider>
  );
}

const FooterDom = styled.footer`
  position: relative;
  background-color: ${(props) => props.theme.sub};
  padding: 130px 0 185px;
  text-align: center;
`;

const FooterText = styled.p`
  color: white;
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  line-height: 1.56;
  letter-spacing: 1px;
`;

const FooterTextHighlight = styled(FooterText)`
  ${FooterText} & {
    position: relative;
    display: inline-block;
    span {
      position: relative;
      z-index: 1;
    }
    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      position: absolute;
      left: 0;
      bottom: 0;
      background-color: ${(props) => props.theme.lightGreen};
      transition: height 0.3s ease;
    }
    &:hover::after {
      height: 100%;
    }
  }
`;

export default Footer;
