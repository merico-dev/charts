import React from 'react';
import { ceil } from 'lodash';

type UseLegendCarouselReturns = {
  offsetIndex: number;
  maxOffsetIndex: number | undefined;
  backward: () => void;
  forward: () => void;
};

export function useLegendCarousel(
  itemsWrapperRef: React.RefObject<HTMLDivElement>,
  itemsRef: React.RefObject<HTMLDivElement>
): UseLegendCarouselReturns {
  const [offsetIndex, setOffsetIndex] = React.useState(0);

  const { maxOffsetIndex /* wrapperWidth, contentWidth */ } = React.useMemo(() => {
    if (!itemsWrapperRef.current || !itemsRef.current) {
      return {};
    }
    const wrapperWidth = itemsWrapperRef.current.clientWidth;
    const contentWidth = itemsRef.current.clientWidth;
    return {
      wrapperWidth,
      contentWidth,
      maxOffsetIndex: ceil(contentWidth / wrapperWidth) - 1,
    };
  }, [itemsWrapperRef.current, itemsRef.current]);

  const backward = React.useCallback(() => {
    if (offsetIndex === 0) {
      return;
    }

    setOffsetIndex(offsetIndex - 1);
  }, [offsetIndex, maxOffsetIndex]);

  const forward = React.useCallback(() => {
    if (offsetIndex === maxOffsetIndex) {
      return;
    }
    setOffsetIndex(offsetIndex + 1);
  }, [offsetIndex, maxOffsetIndex]);

  return { offsetIndex, maxOffsetIndex, backward, forward };
}
