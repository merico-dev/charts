import React from 'react';
import { Resizable } from '..';

export const content = function Content() {
  return (
    <div>
      <h1>Resizable</h1>
      <Resizable>
        <div style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,.2)' }} />
      </Resizable>
    </div>
  );
};
export const name = 'Resizable';
