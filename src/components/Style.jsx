import { css } from 'styled-components';

export const FlexMixin = ({
  direction = 'row',
  justify = 'start',
  align = 'stretch',
  gap = '0',
  wrap = 'nowrap',
}) => css`
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
  gap: ${gap};
  flex-wrap: ${wrap};
`;

export const FontMixin = (size, weight = '400') => css`
  font-size: ${size};
  font-weight: ${weight};
`;

export const TAG_COLOR = '#d7fa00';
export const GRAY = 'rgb(160, 160, 160);';
