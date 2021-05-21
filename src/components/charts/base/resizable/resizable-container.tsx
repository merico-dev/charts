import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';

import {
  ResizableSizeIndicator,
  ResizableContainerWrapper,
  StyledResizable,
  ResizableCardTitle,
  ResizableCardContent,
  ResizableCard,
} from './resizable-container.styled';

function SizeIndicator({ width, height, setWidth, setHeight }: any) {
  return (
    <ResizableSizeIndicator>
      <Input type="number" min={100} max={10000} step={1} value={width} onChange={setWidth} />
      <span>x</span>
      <Input type="number" min={100} max={10000} step={1} value={height} onChange={setHeight} />
    </ResizableSizeIndicator>
  );
}
function ResizableContainer({ width, height, setWidth, setHeight, children }: any) {
  const onResize = (_event: any, { /* element , */ size: { width, height } /* handle */ }: any) => {
    setWidth(width);
    setHeight(height);
  };
  return (
    <ResizableContainerWrapper>
      <StyledResizable
        width={width}
        height={height}
        onResize={onResize}
        resizeHandles={['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']}
      >
        <ResizableContainerWrapper style={{ width: `${width}px`, height: `${height}px` }}>
          {children}
        </ResizableContainerWrapper>
      </StyledResizable>
    </ResizableContainerWrapper>
  );
}

export default function WrapperCard({ initialWidth = 800, initialHeight = 600, children }: any) {
  const [width, setWidth] = useState(initialWidth);
  const [height, setHeight] = useState(initialHeight);
  const commonProps = { width, height, setWidth, setHeight };
  return (
    <ResizableCard>
      <ResizableCardTitle>
        <SizeIndicator {...commonProps} />
      </ResizableCardTitle>
      <ResizableCardContent>
        <ResizableContainer {...commonProps}>{children}</ResizableContainer>
      </ResizableCardContent>
    </ResizableCard>
  );
}
