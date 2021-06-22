import { Link, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../Container/Container';
import { StateContext } from '../../store/index';

function HeaderItem({ label, to, isMatch }) {
  const match = useRouteMatch({
    path: to,
    exact: isMatch,
  });
  return (
    <HeaderContentItem
      className={match ? '-active' : ''}
      as={Link}
      to={to}
    >{label}</HeaderContentItem>
  );
}

function Header() {
  return (
    <StateContext.Consumer>
      {
        (value) => {
          const state = value[0];
          return (
            <HeaderDom className="header">
              <Container>
                <HeaderContent>
                  {
                    Object.keys(state.routes).map((key) => <HeaderItem
                      key={`head-item-${key}`}
                      to={state.routes[key].url}
                      label={key}
                    />)
                  }
                </HeaderContent>
              </Container>
            </HeaderDom>);
        }
      }
    </StateContext.Consumer>
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
  padding-top: 78px;
`;

const HeaderContentItem = styled.div`
  position: relative;
  flex: 0 0 auto;
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: .47px;
  padding: 5px 0;
  color: ${(props) => props.theme.colors.white};
  & + & {
    margin-left: 40px;
  }
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: ${(props) => props.theme.colors.lightGreen};
    opacity: 0;
    transition: opacity 0.2s;
  }
  &:hover {
    color: ${(props) => props.theme.colors.lightGreen}
  }
  &.-active::after {
    opacity: 1;
  }
`;

export default Header;
