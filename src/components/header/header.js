import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../Container/Container';
import Context from '../../store/index';

function Header() {
  const context = useContext(Context);
  return (
    <HeaderDom className="header">
      <Container>
        <HeaderContent>
          {
            Object.keys(context.routes).map((key) => <HeaderContentItem key={`head-item-${key}`}><Link to={context.routes[key].url}>{key}</Link></HeaderContentItem>)
          }
        </HeaderContent>
      </Container>
    </HeaderDom>
  );
}

const HeaderDom = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

const HeaderContent = styled.div`
  flex: 0 0 auto;
  display: flex;
`;

const HeaderContentItem = styled.div`
  flex: 0 0 auto;
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: .47px;
  & + & {
    margin-left: 40px;
  }
`;

export default Header;
