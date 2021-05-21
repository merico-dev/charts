import React from 'react';
import { Popup } from 'semantic-ui-react';
import Gauge from '../../gauge';

const renderValueLabel = ({ value, segmentLabel: { text, color }, /* segmentColor, */ segmentStart }: any) => (
  <Popup
    open
    position="top center"
    content={
      <div>
        <span style={{ color }}>{text}</span>(≥ {segmentStart})
      </div>
    }
    trigger={
      <span>
        <strong style={{ fontSize: 24 }}>{value}</strong>
        <span style={{ fontSize: 14, color: '#646568' }}>/KEq</span>
      </span>
    }
  />
);

export default function content({ value }: any) {
  const configurations = {
    colors: ['rgba(82,196,26,0.6)', 'rgba(250,173,20,0.6)', 'rgba(255,77,79,0.8)'],
    renderValueLabel,
    segments: [0, 2, 4, 8],
    segmentLabels: [
      {
        text: '良好',
        color: '#43A910',
      },
      {
        text: '轻度警告',
        color: '#E89A00',
      },
      {
        text: '严重警告',
        color: '#E11C1E',
      },
    ],
    ticks: [2, 4, 6],
  };

  return (
    <div>
      <h1>Basic</h1>
      <Gauge
        value={value}
        configurations={{
          ...configurations,
          width: 460,
          height: 400,
        }}
      />
    </div>
  );
}
