import { css } from '@emotion/react';

import type { AnyflightUiTheme } from '../../providers/theme';

export const baseStyles = (theme: AnyflightUiTheme) => css`
  --af-side-nav-bg: #2e2e2e;
  --af-side-nav-hover-bg: rgba(128, 128, 128, 0.5);
  --af-side-nav-box-shadow-start: inset 0 1px 0 0 #393939;
  --af-side-nav-box-shadow-end: inset 0 -1px 0 0 #202020;
  --af-side-nav-box-shadow: var(--af-side-nav-box-shadow-start), var(--af-side-nav-box-shadow-end);
  --af-side-nav-color: #999;
  --af-side-nav-hover-color: #fff;

  &.side-nav {
    inline-size: var(--af-side-nav-inline-size, clamp(2.25rem, 100%, 12.5rem));
    block-size: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden auto;
    display: block;
    background-color: var(--af-side-nav-bg);
    border-right: 4px solid #ffbb00;
    font-family: var(--af-side-nav-font-family, ${theme.fontFamily.sans});
    font-size: var(--af-side-nav-font-size, 0.8125rem);
    font-weight: var(--af-side-nav-font-weight, ${theme.fontWeight.normal});
    transition: inline-size 0.2s;
    isolation: isolate;

    &--collapsed {
      inline-size: var(--af-side-nav-collapsed-inline-size, 2.25rem);
    }
  }
`;

const listStyles = (theme: AnyflightUiTheme) => css`
  .side-nav-list {
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: column nowrap;
    list-style: none;
  }

  .side-nav-list-item {
    display: block;
    flex: 1 1 auto;

    &:first-of-type {
      --af-side-nav-box-shadow: var(--af-side-nav-box-shadow-end);
    }

    &:last-of-type {
      --af-side-nav-box-shadow: var(--af-side-nav-box-shadow-start);
    }

    &:first-of-type:last-of-type {
      --af-side-nav-box-shadow: none;
    }

    &--active {
      --af-side-nav-bg: #ffbb00;
      --af-side-nav-hover-bg: #ffd500;
      --af-side-nav-box-shadow: none;
      --af-side-nav-color: ${theme.colors.black};
      --af-side-nav-hover-color: ${theme.colors.black};
    }
  }

  .side-nav-list-item-link {
    inline-size: 100%;
    block-size: 2rem;
    padding-inline: 0.375rem;
    padding-block: 0.125rem;
    display: inline-flex;
    gap: 0.375rem;
    justify-content: flex-start;
    align-items: center;
    background-color: var(--af-side-nav-bg);
    box-shadow: var(--af-side-nav-box-shadow);
    font-size: var(--af-side-nav-font-size);
    font-weight: var(--af-side-nav-font-weight);
    text-decoration: none;
    text-shadow: 0 1px rgba(0, 0, 0, 0.45);
    color: var(--af-side-nav-color);
    user-select: none;
    cursor: pointer;

    &:focus-visible {
      --af-side-nav-bg: var(--af-side-nav-hover-bg, --af-side-nav-bg);
      --af-side-nav-color: var(--af-side-nav-hover-color, --af-side-nav-color);
      outline: 0;
    }

    &:hover {
      --af-side-nav-bg: var(--af-side-nav-hover-bg, --af-side-nav-bg);
      --af-side-nav-color: var(--af-side-nav-hover-color, --af-side-nav-color);
    }

    &__icon {
      display: inline-flex;
      justify-content: center;
      align-items: center;

      > * {
        inline-size: auto;
        block-size: 1rem;
        aspect-ratio: 1 / 1;
        display: inline-block;
        overflow: hidden;
      }
    }

    &__label {
      block-size: 1rem;
      overflow: hidden visible;
      line-height: 1;
      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: baseline;
    }
  }
`;

export const sideNavStyles = [baseStyles, listStyles];
