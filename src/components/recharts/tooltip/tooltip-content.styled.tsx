import styled from '@emotion/styled';

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
  td:first-of-type {
    svg {
      width: 10px;
      height: 10px;
    }
    text-align: left;
  }
  td:last-of-type {
    padding-left: 1em;
    text-align: right;
  }
`;
