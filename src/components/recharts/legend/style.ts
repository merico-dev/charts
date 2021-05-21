import styled from '@emotion/styled';

export const LegendContentContainer = styled.div`
  &[data-vertical='bottom'] {
    margin-top: 1.5715em;
  }
  height: 33px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
`;

export const LegendSwitcher = styled.div`
  line-height: 33px;
  padding: 0 0.5em;
  width: 40px;
  text-align: right;
  span {
    transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  span[data-disabled='false'] {
    cursor: pointer;
    &:hover {
      color: #ca4521;
      font-size: 14px;
    }
  }
  span[data-disabled='true'] {
    cursor: no-drop;
    opacity: 0.3;
  }
`;

export const LegendItemsWrapper = styled.div`
  font-size: 13px;
  width: 100%;
  &[data-full-width='true'] {
    width: 100%;
    > div {
      position: relative;
      display: table;
      width: auto;
    }
    &[data-align='left'] > div {
      margin-right: auto;
    }
    &[data-align='center'] > div {
      margin: 0 auto;
    }
    &[data-align='right'] > div {
      margin-left: auto;
    }
  }
  &[data-full-width='false'] {
    padding-left: 1em;
  }
  position: relative;
  overflow: hidden;
`;

export const LegendItems = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;

  position: absolute;
  top: 0;

  left: var(--left);
  transition: left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
`;

export const LegendItem = styled.div`
  display: inline-block;
  padding: 0.5em;
  user-select: none;
  white-space: nowrap;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-property: opacity, color;
  cursor: pointer;
  &[data-clickable='false'] {
    cursor: default;
  }
  &:hover {
    color: #ca4521;
  }
  &[data-inactive='true'] {
    opacity: 0.3;
  }
`;

export const LegendItemText = styled.div`
  display: inline-block;
  padding-left: 0.5em;
  color: #666;
`;
