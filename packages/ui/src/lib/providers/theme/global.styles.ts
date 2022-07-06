import { css } from '@emotion/react';

import { AnyflightUiConfig } from '@anyflight/ui';

import type { AnyflightUiTheme } from './theme.type';

export const resetStyles = (config: AnyflightUiConfig, theme: AnyflightUiTheme) => css`
  @layer reset, theme, components, utilities;

  @layer reset {
    :where(html, body) {
      inline-size: 100%;
      block-size: 100%;
      margin: 0;
      padding: 0;
      display: block;
      font-family: ${theme.fontFamily.sans};
    }

    :where(svg) {
      fill: currentColor;
    }

    :where(*, *::before, *::after) {
      box-sizing: border-box;
    }

    ::-webkit-scrollbar {
      inline-size: 0.5rem;
      block-size: 0.5rem;
      border-radius: 100vmax;
    }

    ::-webkit-scrollbar-track {
      background-color: rgba(46, 46, 46, 0);
    }

    ::-webkit-scrollbar-thumb {
      background-color: rgba(200, 200, 200, 0.65);
      border-radius: 100vmax;

      &:hover {
        background-color: rgba(220, 220, 220, 0.65);
      }
    }
  }
`;

export const themeStyles = ({ prefix }: AnyflightUiConfig, theme: AnyflightUiTheme) => css`
  @layer theme {
    :where(:root) {
      --${prefix}-color-white: ${theme.colors.white};
      --${prefix}-color-black: ${theme.colors.black};
    }
  }
`;

export const utilityStyles = ({ prefix }: AnyflightUiConfig, theme: AnyflightUiTheme) => css`
  @layer utilities {
    :where(.visually-hidden:not(:focus):not(:focus-within)) {
      inline-size: 1px !important;
      block-size: 1px !important;
      margin: -1px !important;
      padding: 0 !important;
      position: absolute !important;
      overflow: hidden !important;
      border: 0 !important;
      white-space: nowrap !important;
      clip: rect(0, 0, 0, 0) !important;
    }

    :where(:root) {
      --${prefix}-ease-1: cubic-bezier(0.25, 0, 0.5, 1);
      --${prefix}-ease-2: cubic-bezier(0.25, 0, 0.4, 1);
      --${prefix}-ease-3: cubic-bezier(0.25, 0, 0.3, 1);
      --${prefix}-ease-4: cubic-bezier(0.25, 0, 0.2, 1);
      --${prefix}-ease-5: cubic-bezier(0.25, 0, 0.1, 1);
      --${prefix}-ease-in-1: cubic-bezier(0.25, 0, 1, 1);
      --${prefix}-ease-in-2: cubic-bezier(0.5, 0, 1, 1);
      --${prefix}-ease-in-3: cubic-bezier(0.7, 0, 1, 1);
      --${prefix}-ease-in-4: cubic-bezier(0.9, 0, 1, 1);
      --${prefix}-ease-in-5: cubic-bezier(1, 0, 1, 1);
      --${prefix}-ease-out-1: cubic-bezier(0, 0, 0.75, 1);
      --${prefix}-ease-out-2: cubic-bezier(0, 0, 0.5, 1);
      --${prefix}-ease-out-3: cubic-bezier(0, 0, 0.3, 1);
      --${prefix}-ease-out-4: cubic-bezier(0, 0, 0.1, 1);
      --${prefix}-ease-out-5: cubic-bezier(0, 0, 0, 1);
      --${prefix}-ease-in-out-1: cubic-bezier(0.1, 0, 0.9, 1);
      --${prefix}-ease-in-out-2: cubic-bezier(0.3, 0, 0.7, 1);
      --${prefix}-ease-in-out-3: cubic-bezier(0.5, 0, 0.5, 1);
      --${prefix}-ease-in-out-4: cubic-bezier(0.7, 0, 0.3, 1);
      --${prefix}-ease-in-out-5: cubic-bezier(0.9, 0, 0.1, 1);
      --${prefix}-ease-elastic-1: cubic-bezier(0.5, 0.75, 0.75, 1.25);
      --${prefix}-ease-elastic-2: cubic-bezier(0.5, 1, 0.75, 1.25);
      --${prefix}-ease-elastic-3: cubic-bezier(0.5, 1.25, 0.75, 1.25);
      --${prefix}-ease-elastic-4: cubic-bezier(0.5, 1.5, 0.75, 1.25);
      --${prefix}-ease-elastic-5: cubic-bezier(0.5, 1.75, 0.75, 1.25);
      --${prefix}-ease-squish-1: cubic-bezier(0.5, -0.1, 0.1, 1.5);
      --${prefix}-ease-squish-2: cubic-bezier(0.5, -0.3, 0.1, 1.5);
      --${prefix}-ease-squish-3: cubic-bezier(0.5, -0.5, 0.1, 1.5);
      --${prefix}-ease-squish-4: cubic-bezier(0.5, -0.7, 0.1, 1.5);
      --${prefix}-ease-squish-5: cubic-bezier(0.5, -0.9, 0.1, 1.5);
      --${prefix}-ease-step-1: steps(2);
      --${prefix}-ease-step-2: steps(3);
      --${prefix}-ease-step-3: steps(4);
      --${prefix}-ease-step-4: steps(7);
      --${prefix}-ease-step-5: steps(10);

      --${prefix}-animation-fade-in: ${prefix}-fade-in 0.5s var(--${prefix}-ease-3);
      --${prefix}-animation-fade-out: ${prefix}-fade-out 0.5s var(--${prefix}-ease-3);
      --${prefix}-animation-scale-up: ${prefix}-scale-up 0.5s var(--${prefix}-ease-3);
      --${prefix}-animation-scale-down: ${prefix}-scale-down 0.5s var(--${prefix}-ease-3);
      --${prefix}-animation-slide-out-up: ${prefix}-slide-out-up 0.5s var(--${prefix}-ease-3);
      --${prefix}-animation-slide-out-down: ${prefix}-slide-out-down 0.5s var(--${prefix}-ease-3);
      --${prefix}-animation-slide-out-right: ${prefix}-slide-out-right 0.5s var(--${prefix}-ease-3);
      --${prefix}-animation-slide-out-left: ${prefix}-slide-out-left 0.5s var(--${prefix}-ease-3);
      --${prefix}-animation-slide-in-up: ${prefix}-slide-in-up 0.5s var(--${prefix}-ease-3);
      --${prefix}-animation-slide-in-down: ${prefix}-slide-in-down 0.5s var(--${prefix}-ease-3);
      --${prefix}-animation-slide-in-right: ${prefix}-slide-in-right 0.5s var(--${prefix}-ease-3);
      --${prefix}-animation-slide-in-left: ${prefix}-slide-in-left 0.5s var(--${prefix}-ease-3);
      --${prefix}-animation-shake-x: ${prefix}-shake-x 0.75s var(--${prefix}-ease-out-5);
      --${prefix}-animation-shake-y: ${prefix}-shake-y 0.75s var(--${prefix}-ease-out-5);
      --${prefix}-animation-spin: ${prefix}-spin 2s linear infinite;
      --${prefix}-animation-ping: ${prefix}-ping 5s var(--${prefix}-ease-out-3) infinite;
      --${prefix}-animation-blink: ${prefix}-blink 1s var(--${prefix}-ease-out-3) infinite;
      --${prefix}-animation-float: ${prefix}-float 3s var(--${prefix}-ease-in-out-3) infinite;
      --${prefix}-animation-bounce: ${prefix}-bounce 2s var(--${prefix}-ease-squish-2) infinite;
      --${prefix}-animation-pulse: ${prefix}-pulse 2s var(--${prefix}-ease-out-3) infinite;
    }

    @keyframes ${prefix}-fade-in {
      to {
        opacity: var(--${prefix}-fade-in-value, 1);
      }
    }

    @keyframes ${prefix}-fade-out {
      to {
        opacity: var(--${prefix}-fade-out-value, 0);
      }
    }

    @keyframes ${prefix}-scale-up {
      to {
        transform: scale(1.25);
      }
    }

    @keyframes ${prefix}-scale-down {
      to {
        transform: scale(0.75);
      }
    }

    @keyframes ${prefix}-slide-out-up {
      to {
        transform: translateY(-100%);
      }
    }

    @keyframes ${prefix}-slide-out-down {
      to {
        transform: translateY(100%);
      }
    }

    @keyframes ${prefix}-slide-out-right {
      to {
        transform: translateX(100%);
      }
    }

    @keyframes ${prefix}-slide-out-left {
      to {
        transform: translateX(-100%);
      }
    }

    @keyframes ${prefix}-slide-in-up {
      from {
        transform: translateY(100%);
      }
    }

    @keyframes ${prefix}-slide-in-down {
      from {
        transform: translateY(-100%);
      }
    }

    @keyframes ${prefix}-slide-in-right {
      from {
        transform: translateX(-100%);
      }
    }

    @keyframes ${prefix}-slide-in-left {
      from {
        transform: translateX(100%);
      }
    }

    @keyframes ${prefix}-shake-x {
      0%,
      100% {
        transform: translateX(0%);
      }
      20% {
        transform: translateX(-5%);
      }
      40% {
        transform: translateX(5%);
      }
      60% {
        transform: translateX(-5%);
      }
      80% {
        transform: translateX(5%);
      }
    }

    @keyframes ${prefix}-shake-y {
      0%,
      100% {
        transform: translateY(0%);
      }
      20% {
        transform: translateY(-5%);
      }
      40% {
        transform: translateY(5%);
      }
      60% {
        transform: translateY(-5%);
      }
      80% {
        transform: translateY(5%);
      }
    }

    @keyframes ${prefix}-spin {
      to {
        transform: rotate(1turn);
      }
    }

    @keyframes ${prefix}-ping {
      90%,
      100% {
        transform: scale(2);
        opacity: 0;
      }
    }

    @keyframes ${prefix}-blink {
      0%,
      100% {
        opacity: 1;
      }
      50% {
        opacity: 0.5;
      }
    }

    @keyframes ${prefix}-float {
      50% {
        transform: translateY(-25%);
      }
    }

    @keyframes ${prefix}-bounce {
      25% {
        transform: translateY(-20%);
      }
      40% {
        transform: translateY(-3%);
      }
      0%,
      60%,
      100% {
        transform: translateY(0);
      }
    }

    @keyframes ${prefix}-pulse {
      50% {
        transform: scale(0.9, 0.9);
      }
    }
  }
`;
