import React from 'react';

export type DotProps = Pick<React.SVGProps<SVGRectElement>, 'fill'>;

export const Dot = ({ fill = 'black' }: DotProps) => (
  <svg viewBox="0 0 20 20" width={10} height={10}>
    <rect x="0" width="20" height="20" rx="3" fill={fill} />
  </svg>
);

export type LineProps = Pick<React.SVGProps<SVGLineElement>, 'stroke' | 'strokeWidth' | 'strokeDasharray'>;

export const Line = ({ stroke = 'black', strokeWidth = 3, strokeDasharray = '0' }: LineProps) => (
  <svg viewBox="0 0 32 20" width={16} height={10}>
    <line x1="0" y1="10" x2="32" y2="10" stroke={stroke} strokeWidth={strokeWidth} strokeDasharray={strokeDasharray} />
  </svg>
);
