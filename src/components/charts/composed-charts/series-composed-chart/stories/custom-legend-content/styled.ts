import styled from '@emotion/styled';

export const Container = styled.div({});

export const LegendItems = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  &[data-align='left'] {
    justify-content: flex-start;
  }
  &[data-align='center'] {
    justify-content: center;
  }
  &[data-align='right'] {
    justify-content: flex-end;
  }
`;
