import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Title from '../Text/Title';

function Memorabilia(props) {
  return (
    <Wrapper>
      {props.title && <Title text={props.title} />}
      <Main>
        {
          props.data && props.data.length > 0
            ? props.data.map((record, i) => <React.Fragment key={`title-${i}`}>
              <ListItemTitle >{record.date.start} - {record.date.end}</ListItemTitle>
              <ListItemText>
                {
                  record.companyUrl && record.companyUrl !== ''
                    ? <ListItemTextLink as={Link} to={record.companyUrl}>{record.company}</ListItemTextLink>
                    : record.company
                }, {record.title}
              </ListItemText>
            </React.Fragment>)
            : null
        }
      </Main>
    </Wrapper>

  );
}

const Wrapper = styled.div`
  position: relative;
`;

const Main = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 16px;
`;

const ListItemTitle = styled.p`
  font-size: 22px;
  font-weight: 700;
  line-height: 1.73;
  letter-spacing: .63px;
  color: #fff;
  margin-right: 40px;
`;

const ListItemText = styled.p`
  font-size: 22px;
  font-weight: 400;
  line-height: 1.73;
  letter-spacing: .63px;
  color: #fff;
`;

const ListItemTextLink = styled.span`
  position: relative;
  z-index: 0;
  display: inline-block;
  color: #fff;
  transition: color 0.2s;

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

  &:hover {
    color: ${(props) => props.theme.colors.main};
    &::before {
      height: 100%;
    }
  }
`;

export default Memorabilia;
