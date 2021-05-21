import React from 'react';
import styled from '@emotion/styled';
import { ResponsiveContainer } from 'recharts';
import { css } from '@emotion/core';
import { EmptyIcon } from './empty-icon';

const BASE_STYLE = `
  font-size: 16px;
  font-family: Roboto, sans-serif;
  font-weight: normal;
  *, *:before, *:after {
    box-sizing: border-box;
  }
`;

const CSS_RECHARTS_BRUSH = css`
  .recharts-layer.recharts-brush {
    > rect:not(.recharts-brush-slide) {
      fill: white;
      stroke: #f5f5f7;
    }
    > rect.recharts-brush-slide {
      fill: #c7dcfa;
      fill-opacity: 0.4;

      cursor: move !important; /* fallback if grab cursor is unsupported */
      cursor: grab !important;

      &:active {
        cursor: grabbing !important;
      }
    }
    > .recharts-layer.recharts-brush-traveller {
      > rect {
        #height: 10px;
        #width: 9px;
        #transform: translate(-2px, 10px);
        fill: #828487;
      }
    }
    > .recharts-layer.recharts-brush-texts {
      display: none;
    }
  }
`;

const RechartsRoot = styled.div`
  ${BASE_STYLE}
  width: 100%;
  height: 100%;
  svg.recharts-surface {
    overflow: visible;
  }
  ${CSS_RECHARTS_BRUSH}
`;

const G2Root = styled.div`
  ${BASE_STYLE}
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const G2RootWithUnitHeight = styled.div`
  width: 100%;
  height: 100%;
`;

// Why BASE_STYLE here? because Quadrant Chart is using <ChartEmpty /> without a Base
const EmptyContainer = styled.div`
  ${BASE_STYLE}

  position: relative;
  background: #f9f8f8;
  width: 100%;
  height: 100%;
  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .chart-empty-icon {
      width: 110px;
      height: 67px;
      display: block;
      margin: 0 auto;
    }
    .content {
      margin-top: 4px;
      text-align: center;
      font-size: 18px;
      color: rgb(202, 69, 33);
      user-select: none;
      opacity: 0.7;
    }
  }
`;

const Empty = ({ content = 'No Data' }) => (
  <EmptyContainer>
    <div className="center">
      <EmptyIcon />
      <div className="content">{content}</div>
    </div>
  </EmptyContainer>
);

const RechartsChartBase = ({ children, empty = false, emptyContent }: any) => {
  return (
    <RechartsRoot>
      <ResponsiveContainer>{empty ? <Empty content={emptyContent} /> : children}</ResponsiveContainer>
    </RechartsRoot>
  );
};

const G2ChartBase = ({ children, empty = false, emptyContent, conf = {}, className = '' }: any) => {
  const RootContainer = conf.unitHeight ? G2RootWithUnitHeight : G2Root;
  return <RootContainer className={className}>{empty ? <Empty content={emptyContent} /> : children}</RootContainer>;
};

export { Empty as ChartEmpty, RechartsChartBase, G2ChartBase };
