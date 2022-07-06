import { css } from '@emotion/react';

import type { AnyflightTheme } from '../../providers/theme';

export const eventLogStyles = (theme: AnyflightTheme) => css`
  --af-event-log-size-x: 100%;
  --af-event-log-size-y: 2rem;
  --af-event-log-expand-size-y: 6rem;
  --af-event-log-margin-x: 0;
  --af-event-log-margin-y: 0;
  --af-event-log-padding-x: 0.5rem;
  --af-event-log-padding-y: 0.5rem;
  --af-event-log-gap: 0.5rem;
  --af-event-log-animation-expand: af-event-log-expand 0.3s var(--af-ease-1) forwards;
  --af-event-log-icon-opacity: 0.15;

  @keyframes af-event-log-expand {
    to {
      block-size: var(--af-event-log-expand-size-y);
    }
  }

  &:where(.event-log) {
    inline-size: var(--af-event-log-size-x);
    block-size: var(--af-event-log-size-y);
    margin-inline: var(--af-event-log-margin-x);
    margin-block: var(--af-event-log-margin-y);
    padding-inline: var(--af-event-log-padding-x);
    padding-block: var(--af-event-log-padding-y);
    overflow: hidden scroll;
    position: relative;
    isolation: isolate;
    display: flex;
    gap: var(--af-event-log-gap);

    background-color: #242424;
    color: rgba(255, 255, 255, 0.6);
    transition: all 0.2s;

    //line-height: ${theme.fontSize.sm.lineHeight};
    font-family: ${theme.fontFamily.mono};
    font-size: 0.8125rem;

    user-select: none;
  }

  &:where(.event-log:is(.event-log--expanded)) {
    animation: var(--af-event-log-animation-expand);
  }

  .event-log__content {
    inline-size: 100%;
    min-block-size: 100%;
    margin: 0;
    padding: 0;
    display: block;
    flex: 1 1 auto;
    line-height: 1rem;

    &,
    * {
      user-select: text;
    }
  }

  .event-log__controls {
    block-size: 100%;
    inset-block: 0 auto;
    position: sticky;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-end;
    justify-content: flex-start;
    order: 1;
    flex: 0 0 auto;
  }

  .event-log__toggle {
    --af-btn-color: #656565;
    --af-btn-hover-color: #959595;
    --af-btn-active-color: #959595;
    transform: translate3d(0, -0.375rem, 0);
  }

  .event-log__scroll-icon {
    inline-size: 5.5rem;
    block-size: 5.5rem;
    inset: calc(50% - 2.75rem) 0 auto auto;
    position: absolute;
    color: rgba(var(--af-color-white-rgb), var(--af-event-log-icon-opacity, 1));
    user-select: none;
    pointer-events: none;
    z-index: -1;
    opacity: 0;
    animation: var(--af-animation-fade-in) forwards, var(--af-animation-slide-in-left);
    animation-timing-function: var(--af-ease-squish-1);
    animation-iteration-count: 1;
    animation-duration: 0.5s;
  }

  @media (prefers-reduced-motion: reduce) {
    &.event-log,
    .event-log__scroll-icon {
      animation-duration: 0s;
    }
  }
`;
