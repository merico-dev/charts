import React from 'react';
import { renderLegendItemIcon } from '../../../../../recharts/legend';
import { LegendItem, LegendItemText } from '../../../../../recharts/legend/style';
import SeriesComposedChart, { SeriesComposedChartConfigurations } from '../../series-composed-chart';
import { useFilteredSeries } from '../../../../../helpers/hooks';
import data from './data.json';
import { Container, LegendItems } from './styled';

function LegendContent({ customPayload, filtered, setFiltered, align }: any) {
  const toggleSeries = React.useCallback(
    (seriesName) => {
      setFiltered((prev: string[]) => {
        if (!filtered.has(seriesName)) {
          return new Set(filtered.add(seriesName));
        }
        return new Set([...prev].filter((item) => item !== seriesName));
      });
    },
    [customPayload, filtered]
  );

  return (
    <LegendItems data-align={align}>
      {customPayload.map(({ id, name, ...rest }: any) => {
        id = id ?? name;
        const inactive = filtered.has(id);
        return (
          <LegendItem key={id} onClick={() => toggleSeries(id)} data-inactive={inactive}>
            {renderLegendItemIcon(rest, inactive)}
            <LegendItemText>{name}</LegendItemText>
          </LegendItem>
        );
      })}
    </LegendItems>
  );
}

export default function Content() {
  const [filteredSeries, setFilteredSeries] = React.useState<string[]>([]);
  // ❇️ STEP 1
  const filterSeries = React.useCallback(
    (values: string[]) => {
      if (values.length === 0) {
        setFilteredSeries(values);
        return;
      }
      const s = new Set(values);
      if (s.has('human')) {
        s.add('Male');
        s.add('Female');
      } else {
        s.delete('Male');
        s.delete('Female');
      }
      setFilteredSeries(Array.from(s));
    },
    [setFilteredSeries]
  );

  // ❇️ STEP 2
  const [filtered, setFiltered] = useFilteredSeries(filteredSeries, filterSeries);

  // ❇️ STEP 3
  const legendPayload = [
    {
      id: 'UV',
      name: 'Click me to toggle UV',
      color: '#ccc',
      chartType: 'bar',
    },
    {
      id: 'human',
      name: 'Click me to toggle UV',
      color: 'red',
      chartType: 'line',
    },
  ];

  // ❇️ STEP 4
  const legendContent = React.useMemo(() => {
    return <LegendContent customPayload={legendPayload} filtered={filtered} setFiltered={setFiltered} />;
  }, [legendPayload, filtered, setFiltered]);

  const configurations: SeriesComposedChartConfigurations = {
    withTooltip: true,
    legend: {
      enabled: true,
      align: 'right',
      verticalAlign: 'top',
      // ❇️ STEP 5
      content: legendContent,
    },
    labelKey: 'name',
    xAxis: {
      padding: { left: 20, right: 20 },
    },
    subSeriesConfiguration: [
      { label: 'UV', dataKey: 'uv', fill: '#ccc' },
      { label: 'Male', chartType: 'line', dataKey: 'human-male', stackId: 'human', stroke: 'red', dot: null },
      { label: 'Female', chartType: 'line', dataKey: 'human-female', stackId: 'human', stroke: 'red', dot: null },
    ],
  };

  return (
    <Container>
      <h1>Custom Legend Content</h1>
      <div style={{ width: 800, height: 600 }}>
        <SeriesComposedChart
          data={data}
          configurations={configurations}
          filteredSeries={filteredSeries}
          setFilteredSeries={filterSeries}
        />
      </div>
    </Container>
  );
}
