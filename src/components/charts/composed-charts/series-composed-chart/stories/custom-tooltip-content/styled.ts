import styled from '@emotion/styled';

export const Container = styled.div({});

export const TooltipContentRoot = styled.div`
  box-shadow: rgb(174, 174, 174) 0px 0px 10px;
  border-radius: 3px;

  padding: 0.5em 0.5em;

  color: rgb(87, 87, 87);
  background-color: rgba(255, 255, 255, 0.9);

  font-size: 13px;
  > span {
    display: block;
  }
  td {
    padding: 1em 2em;
  }
  td:first-of-type {
    svg {
      width: 10px;
      height: 10px;
    }
    text-align: left;
  }
  td:last-of-type {
    text-align: right;
  }
`;

export const TooltipTitle = styled.div`
  padding: 1em 0.5em;

  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
`;
