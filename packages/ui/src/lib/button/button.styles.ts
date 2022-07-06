import { css } from '@emotion/react';

import { toRgbValuesString } from '../helpers';
import type { Theme } from '../theming';

const baseStyles = (theme: Theme) => css`
  --af-btn-padding-x: 0.75rem;
  --af-btn-padding-y: 0.375rem;
  --af-btn-font-family: ${theme.fontFamily.sans};
  --af-btn-font-size: 1rem;
  --af-btn-font-weight: 400;
  --af-btn-line-height: 1.5;
  --af-btn-color: #212529;
  --af-btn-bg: transparent;
  --af-btn-border-width: 1px;
  --af-btn-border-color: transparent;
  --af-btn-border-radius: 0.375rem;
  --af-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
  --af-btn-disabled-opacity: 0.65;
  --af-btn-focus-shadow-rgb: 0, 0, 0;
  --af-btn-focus-box-shadow: 0 0 0 0.25rem rgba(var(--af-btn-focus-shadow-rgb), 0.5);

  &.btn {
    padding-inline: var(--af-btn-padding-x);
    padding-block: var(--af-btn-padding-y);
    display: inline-block;
    background-color: var(--af-btn-bg);
    border: var(--af-btn-border-width) solid var(--af-btn-border-color);
    border-radius: var(--af-btn-border-radius);
    box-shadow: none;
    font-family: var(--af-btn-font-family);
    font-size: var(--af-btn-font-size);
    font-weight: var(--af-btn-font-weight);
    line-height: var(--af-btn-line-height);
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    color: var(--af-btn-color);
    user-select: none;
    cursor: pointer;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;

    &:focus-visible {
      outline: 0;
      border-color: var(--af-btn-hover-border-color, var(--af-btn-border-color));
      box-shadow: var(--af-btn-focus-box-shadow);
    }

    &:focus-visible,
    &:hover {
      background-color: var(--af-btn-hover-bg, var(--af-btn-bg));
      color: var(--af-btn-hover-color, var(--af-btn-color));
    }

    &:active {
      background-color: var(--af-btn-active-bg, var(--af-btn-bg));
      color: var(--af-btn-active-color, var(--af-btn-color));
    }

    &:disabled {
      opacity: var(--af-btn-disabled-opacity);
      pointer-events: none;
      cursor: default;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    &.btn {
      transition: none;
    }
  }
`;

const variantStyles = (theme: Theme) => css`
  &.btn {
    &--primary {
      --af-btn-bg: ${theme.colors.primary['400']};
      --af-btn-hover-bg: ${theme.colors.primary['500']};
      --af-btn-active-bg: ${theme.colors.primary['600']};
      --af-btn-border-color: ${theme.colors.primary['700']};
      --af-btn-focus-shadow-rgb: ${toRgbValuesString(theme.colors.primary['300'])};
      --af-btn-color: ${theme.colors.black};
      --af-btn-active-color: ${theme.colors.white};
    }

    &--accent {
      --af-btn-bg: ${theme.colors.accent['400']};
      --af-btn-hover-bg: ${theme.colors.accent['300']};
      --af-btn-border-color: ${theme.colors.accent['500']};
      --af-btn-color: ${theme.colors.black};
    }

    &--success {
    }

    &--danger {
    }

    &--warning {
    }

    &--info {
    }
  }
`;

const sizeStyles = (theme: Theme) => css`
  &.btn {
    &--small {
      --af-btn-padding-x: 0.5rem;
      --af-btn-padding-y: 0.25rem;
      --af-btn-font-size: 0.875rem;
      --af-btn-border-radius: 0.25rem;
    }

    &--medium {
      --af-btn-padding-x: 0.75rem;
      --af-btn-padding-y: 0.375rem;
      --af-btn-font-size: 1rem;
      --af-btn-border-radius: 0.375rem;
    }

    &--large {
      --af-btn-padding-x: 1rem;
      --af-btn-padding-y: 0.5rem;
      --af-btn-font-size: 1.25rem;
      --af-btn-border-radius: 0.5rem;
    }
  }
`;

export const buttonStyles = [baseStyles, variantStyles, sizeStyles];
