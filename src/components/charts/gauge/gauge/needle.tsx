import React from 'react';

export default function Needle({ angle }: any) {
  return (
    <polygon
      points={['0,-1', '0.05,-0.1', '0,0', '-0.05,-0.1'].join(' ')}
      fill="#82260D"
      transform={`translate(0, 0.1) rotate(${angle * (180 / Math.PI)}, 0, -0.1)`}
      filter="url(#needle-shadow)"
    />
  );
}
