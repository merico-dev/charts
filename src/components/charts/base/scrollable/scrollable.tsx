import React, { useMemo } from 'react';
import useResizeAware from 'react-resize-aware';

export function Horizontal({ width, children }: any) {
  return <div style={{ width: '100%', minWidth: width, height: '100%' }}>{children}</div>;
}

export function Vertical({ height, children }: any) {
  return <div style={{ width: '100%', minHeight: height, height: '100%' }}>{children}</div>;
}

export function ScrollableContainer({ width, height, children }: any) {
  const [resizeListener, sizes] = useResizeAware();

  const { overflowX, overflowY } = useMemo(() => {
    const ret = {
      overflowX: 'visible',
      overflowY: 'visible',
    };
    if (!sizes) {
      return ret;
    }

    // @ts-expect-error ts-migrate(2531) FIXME: Object is possibly 'null'.
    if (width > sizes.width) {
      ret.overflowX = 'scroll';
    }
    // @ts-expect-error ts-migrate(2531) FIXME: Object is possibly 'null'.
    if (height > sizes.height) {
      ret.overflowY = 'scroll';
    }
    return ret;
  }, [sizes]);

  return (
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type '"-moz-ini... Remove this comment to see the full error message
    <div style={{ width: '100%', height: '100%', position: 'relative', overflowX, overflowY }}>
      {resizeListener}
      {children}
    </div>
  );
}

export function Scrollable({ direction, ...rest }: any) {
  if (!direction) {
    throw new Error('[Scrollable] missing essential prop "direction"');
  }
  const Component = direction === 'horizontal' ? Horizontal : Vertical;
  return (
    <ScrollableContainer {...rest}>
      <Component {...rest} />
    </ScrollableContainer>
  );
}
