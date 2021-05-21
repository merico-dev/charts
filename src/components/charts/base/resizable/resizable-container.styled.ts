import styled from '@emotion/styled';
import { Resizable } from 'react-resizable';
import 'react-resizable/css/styles.css';

export const ResizableSizeIndicator = styled.div({
  textAlign: 'center',
  span: {
    padding: '0 .5em',
  },
});

export const ResizableContainerWrapper = styled.div({});

export const StyledResizable = styled(Resizable)({
  padding: '1em',
});

export const ResizableCardTitle = styled.div({
  padding: '12px 16px',
  fontSize: '16px',
  lineHeight: '1.5715',
  background: '#fafafa',
});

export const ResizableCardContent = styled.div({
  borderTop: '1px solid #AAAAAA',
  padding: '1em',
});

export const ResizableCard = styled.div({
  margin: '0 1em',
  display: 'table',
  width: 'auto',
  border: '1px solid #AAAAAA',
  borderRadius: '5px',
});
