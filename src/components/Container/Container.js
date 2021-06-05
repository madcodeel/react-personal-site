import styled from 'styled-components';

const ContainerDom = styled.div`
  position: relative;
  max-width: 1200px;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
`;

function Container(props) {
  return (
    <ContainerDom>{props.children}</ContainerDom>
  );
}

export default Container;
