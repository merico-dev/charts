import React, { useCallback, useRef } from 'react';
import * as Recharts from 'recharts';
import { HorizontalAlignmentType } from 'recharts/types/component/DefaultLegendContent';
import { CaretLeftOutlined, CaretRightOutlined, EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { cloneDeep } from 'lodash';
import { useLegendCarousel } from './use-legend-carousel';
import { Dot, Line, LineProps } from '../indicator';
import {
  LegendContentContainer,
  LegendSwitcher,
  LegendItemsWrapper,
  LegendItems,
  LegendItem,
  LegendItemText,
} from './style';

export type LegendContentPropExcludeBy = (series: LegendContentPropSeries[]) => LegendContentPropSeries[];

export type CustomLegendConfig = {
  enabled: boolean;
  excludeBy?: LegendContentPropExcludeBy;
  isSeriesClickable?: (id: string | number) => boolean;
};

export type RenderIconConfig = Partial<
  LineProps & {
    color: string;
    chartType: string;
  }
>;

export type LegendContentPropSeries = { id?: string; name: string } & RenderIconConfig;

export type LegendContentProps = {
  excludeBy?: LegendContentPropExcludeBy;
  series: LegendContentPropSeries[];
  filtered: ReadonlySet<string>;
  setFiltered: React.Dispatch<React.SetStateAction<ReadonlySet<string>>>;
  align?: HorizontalAlignmentType;
  payload?: unknown;
  isSeriesClickable?: (id: string | number) => boolean;
};

function renderIcon({ color, chartType, ...rest }: RenderIconConfig, inactive: boolean) {
  const usingColorCallback = typeof color === 'function';
  if (!usingColorCallback) {
    // TODO(Leto) what was going on and not done with this usingColorCallback, a story?
    if (chartType === 'line') {
      return <Line stroke={color} {...rest} />;
    }
    return <Dot fill={color} />;
  }
  if (inactive) {
    return <EyeInvisibleOutlined />;
  }
  return <EyeOutlined />;
}

export const renderLegendItemIcon = renderIcon;

function LegendContent({
  excludeBy,
  payload,
  series,
  filtered,
  setFiltered,
  align,
  isSeriesClickable = () => true,
}: LegendContentProps) {
  const itemsWrapperRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);
  const { offsetIndex, maxOffsetIndex, backward, forward } = useLegendCarousel(itemsWrapperRef, itemsRef);

  const toggleSeris = useCallback(
    (seriesName) => {
      setFiltered((prev) => {
        if (!filtered.has(seriesName)) {
          // @ts-expect-error ts-migrate(2339) FIXME: Property 'add' does not exist on type 'ReadonlySet... Remove this comment to see the full error message
          return new Set(filtered.add(seriesName));
        }
        return new Set([...prev].filter((item) => item !== seriesName));
      });
    },
    [payload, filtered]
  );

  const hideLegendSwitcher = maxOffsetIndex === 0;
  const showLegendSwitcher = !hideLegendSwitcher;

  const processedSeries = React.useMemo(() => {
    if (!excludeBy) {
      return series;
    }
    const copy = cloneDeep(series);
    return excludeBy(copy);
  }, [series, excludeBy]);

  const getToggleHandler = (id: string | number) => {
    if (isSeriesClickable(id)) {
      return () => toggleSeris(id);
    }
  };

  return (
    <LegendContentContainer>
      {showLegendSwitcher && (
        <LegendSwitcher>
          <CaretLeftOutlined onClick={backward} data-disabled={offsetIndex === 0} />
        </LegendSwitcher>
      )}

      <LegendItemsWrapper ref={itemsWrapperRef} data-full-width={hideLegendSwitcher} data-align={align}>
        {/* @ts-expect-error ts-migrate(2322) FIXME: Type '{ '--left': string; }' is not assignable to ... Remove this comment to see the full error message */}
        <LegendItems ref={itemsRef} style={{ '--left': `-${offsetIndex * 100}%` }}>
          {processedSeries.map(({ id, name, ...rest }) => {
            id = id ?? name;
            const inactive = filtered.has(id);
            return (
              <LegendItem
                key={id}
                onClick={getToggleHandler(id)}
                data-inactive={inactive}
                data-clickable={isSeriesClickable(id)}
              >
                {renderIcon(rest, inactive)}
                <LegendItemText>{name}</LegendItemText>
              </LegendItem>
            );
          })}
        </LegendItems>
      </LegendItemsWrapper>

      {showLegendSwitcher && (
        <LegendSwitcher>
          <CaretRightOutlined onClick={forward} data-disabled={offsetIndex === maxOffsetIndex} />
        </LegendSwitcher>
      )}
    </LegendContentContainer>
  );
}

export type RenderLegendConfig = {
  legend: React.ComponentProps<typeof Recharts.Legend>;
  series: LegendContentProps['series'];
  filteredSeries: LegendContentProps['filtered'];
  setFilteredSeries: LegendContentProps['setFiltered'];
};

export function renderLegend({ legend, series, filteredSeries, setFilteredSeries }: RenderLegendConfig) {
  // const { enabled, ...rest } = legend;
  if (legend.content) {
    return <Recharts.Legend {...legend} />;
  }
  return (
    <Recharts.Legend
      {...legend}
      content={
        <LegendContent series={series} filtered={filteredSeries} setFiltered={setFilteredSeries} align={legend.align} />
      }
    />
  );
}
