import { css } from '@emotion/react';

import type { AnyflightUiTheme } from '../../providers';

const baseStyles = (theme: AnyflightUiTheme) =>
  css`
    :where(&.btn) {
      --af-btn-margin-x: 0;
      --af-btn-margin-y: 0;
      --af-btn-padding-x: 0;
      --af-btn-padding-y: 0;
    }

    &.btn {
      display: inline-block;
      margin-inline: var(--af-btn-margin-x);
      margin-block: var(--af-btn-margin-y);
      padding-inline: var(--af-btn-padding-x);
      padding-block: var(--af-btn-padding-y);
    }
  `;

export const buttonStyles = [baseStyles];
