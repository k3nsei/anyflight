import { css } from '@emotion/react';

import type { Theme } from '../theming';

export const eventLogStyles = (theme: Theme) => css`
  --af-event-log-size-x: 100%;
  --af-event-log-size-y: 1.75rem;
  --af-event-log-padding-x: 0;
  --af-event-log-padding-y: 0;
  --af-event-log-animation-expand: af-event-log-expand 0.3s var(--af-ease-1) forwards;
  --af-event-log-icon-opacity: 0.15;

  @keyframes af-event-log-expand {
    to {
      block-size: calc(var(--af-event-log-size-y) * 5);
    }
  }

  &.event-log {
    inline-size: var(--af-event-log-size-x);
    block-size: var(--af-event-log-size-y);
    margin: 0;
    padding-inline: var(--af-event-log-padding-x);
    padding-block: var(--af-event-log-padding-y);
    overflow: hidden;
    position: relative;
    isolation: isolate;

    background-color: #242424;
    color: rgba(255, 255, 255, 0.6);
    line-height: 21px;
    transition: all 0.2s;

    //line-height: ${theme.fontSize.sm.lineHeight};
    font-family: ${theme.fontFamily.mono};
    font-size: ${theme.fontSize.sm.size};

    user-select: none;

    &--expanded {
      animation: var(--af-event-log-animation-expand);
    }
  }

  .event-log__toggle {
    inset: 0 0 auto auto;
    position: absolute;
    color: var(--af-color-white) !important;
    z-index: 2;
  }

  .event-log__scroll-icon {
    --af-fade-in-value: var(--af-event-log-icon-opacity);

    inline-size: 5.5rem;
    block-size: 5.5rem;
    inset: calc(50% - 2.75rem) 0.5rem 0 auto;
    position: absolute;
    color: var(--af-color-white);
    opacity: 0;
    user-select: none;
    pointer-events: none;
    z-index: -1;
    animation: var(--af-animation-fade-in) forwards, var(--af-animation-slide-in-left);
    animation-timing-function: var(--af-ease-squish-1);
    animation-iteration-count: 1;
    animation-duration: 0.5s;
  }

  .event-log__content {
    inline-size: 100%;
    block-size: 100%;
    margin: 0;
    padding: 0;
    overflow: auto;
    position: relative;
    bottom: 0;
    z-index: 1;
    user-select: text;
  }

  @media (prefers-reduced-motion: reduce) {
    &.event-log,
    .event-log__scroll-icon {
      animation-duration: 0s;
    }
  }
`;
