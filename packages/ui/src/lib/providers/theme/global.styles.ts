import { css } from '@emotion/react';

import type { Theme } from './theme';

const resetStyles = (theme: Theme) => css`
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

const themeStyles = (theme: Theme) => css`
  @layer theme {
    :where(:root) {
      --af-color-white: ${theme.colors.white};
      --af-color-black: ${theme.colors.black};
    }
  }
`;

const utilityStyles = css`
  @layer utilities {
    :where(:root) {
      --af-ease-1: cubic-bezier(0.25, 0, 0.5, 1);
      --af-ease-2: cubic-bezier(0.25, 0, 0.4, 1);
      --af-ease-3: cubic-bezier(0.25, 0, 0.3, 1);
      --af-ease-4: cubic-bezier(0.25, 0, 0.2, 1);
      --af-ease-5: cubic-bezier(0.25, 0, 0.1, 1);
      --af-ease-in-1: cubic-bezier(0.25, 0, 1, 1);
      --af-ease-in-2: cubic-bezier(0.5, 0, 1, 1);
      --af-ease-in-3: cubic-bezier(0.7, 0, 1, 1);
      --af-ease-in-4: cubic-bezier(0.9, 0, 1, 1);
      --af-ease-in-5: cubic-bezier(1, 0, 1, 1);
      --af-ease-out-1: cubic-bezier(0, 0, 0.75, 1);
      --af-ease-out-2: cubic-bezier(0, 0, 0.5, 1);
      --af-ease-out-3: cubic-bezier(0, 0, 0.3, 1);
      --af-ease-out-4: cubic-bezier(0, 0, 0.1, 1);
      --af-ease-out-5: cubic-bezier(0, 0, 0, 1);
      --af-ease-in-out-1: cubic-bezier(0.1, 0, 0.9, 1);
      --af-ease-in-out-2: cubic-bezier(0.3, 0, 0.7, 1);
      --af-ease-in-out-3: cubic-bezier(0.5, 0, 0.5, 1);
      --af-ease-in-out-4: cubic-bezier(0.7, 0, 0.3, 1);
      --af-ease-in-out-5: cubic-bezier(0.9, 0, 0.1, 1);
      --af-ease-elastic-1: cubic-bezier(0.5, 0.75, 0.75, 1.25);
      --af-ease-elastic-2: cubic-bezier(0.5, 1, 0.75, 1.25);
      --af-ease-elastic-3: cubic-bezier(0.5, 1.25, 0.75, 1.25);
      --af-ease-elastic-4: cubic-bezier(0.5, 1.5, 0.75, 1.25);
      --af-ease-elastic-5: cubic-bezier(0.5, 1.75, 0.75, 1.25);
      --af-ease-squish-1: cubic-bezier(0.5, -0.1, 0.1, 1.5);
      --af-ease-squish-2: cubic-bezier(0.5, -0.3, 0.1, 1.5);
      --af-ease-squish-3: cubic-bezier(0.5, -0.5, 0.1, 1.5);
      --af-ease-squish-4: cubic-bezier(0.5, -0.7, 0.1, 1.5);
      --af-ease-squish-5: cubic-bezier(0.5, -0.9, 0.1, 1.5);
      --af-ease-step-1: steps(2);
      --af-ease-step-2: steps(3);
      --af-ease-step-3: steps(4);
      --af-ease-step-4: steps(7);
      --af-ease-step-5: steps(10);

      --af-animation-fade-in: af-fade-in 0.5s var(--af-ease-3);
      --af-animation-fade-out: af-fade-out 0.5s var(--af-ease-3);
      --af-animation-scale-up: af-scale-up 0.5s var(--af-ease-3);
      --af-animation-scale-down: af-scale-down 0.5s var(--af-ease-3);
      --af-animation-slide-out-up: af-slide-out-up 0.5s var(--af-ease-3);
      --af-animation-slide-out-down: af-slide-out-down 0.5s var(--af-ease-3);
      --af-animation-slide-out-right: af-slide-out-right 0.5s var(--af-ease-3);
      --af-animation-slide-out-left: af-slide-out-left 0.5s var(--af-ease-3);
      --af-animation-slide-in-up: af-slide-in-up 0.5s var(--af-ease-3);
      --af-animation-slide-in-down: af-slide-in-down 0.5s var(--af-ease-3);
      --af-animation-slide-in-right: af-slide-in-right 0.5s var(--af-ease-3);
      --af-animation-slide-in-left: af-slide-in-left 0.5s var(--af-ease-3);
      --af-animation-shake-x: af-shake-x 0.75s var(--af-ease-out-5);
      --af-animation-shake-y: af-shake-y 0.75s var(--af-ease-out-5);
      --af-animation-spin: af-spin 2s linear infinite;
      --af-animation-ping: af-ping 5s var(--af-ease-out-3) infinite;
      --af-animation-blink: af-blink 1s var(--af-ease-out-3) infinite;
      --af-animation-float: af-float 3s var(--af-ease-in-out-3) infinite;
      --af-animation-bounce: af-bounce 2s var(--af-ease-squish-2) infinite;
      --af-animation-pulse: af-pulse 2s var(--af-ease-out-3) infinite;
    }

    @keyframes af-fade-in {
      to {
        opacity: var(--af-fade-in-value, 1);
      }
    }

    @keyframes af-fade-out {
      to {
        opacity: var(--af-fade-out-value, 0);
      }
    }

    @keyframes af-scale-up {
      to {
        transform: scale(1.25);
      }
    }

    @keyframes af-scale-down {
      to {
        transform: scale(0.75);
      }
    }

    @keyframes af-slide-out-up {
      to {
        transform: translateY(-100%);
      }
    }

    @keyframes af-slide-out-down {
      to {
        transform: translateY(100%);
      }
    }

    @keyframes af-slide-out-right {
      to {
        transform: translateX(100%);
      }
    }

    @keyframes af-slide-out-left {
      to {
        transform: translateX(-100%);
      }
    }

    @keyframes af-slide-in-up {
      from {
        transform: translateY(100%);
      }
    }

    @keyframes af-slide-in-down {
      from {
        transform: translateY(-100%);
      }
    }

    @keyframes af-slide-in-right {
      from {
        transform: translateX(-100%);
      }
    }

    @keyframes af-slide-in-left {
      from {
        transform: translateX(100%);
      }
    }

    @keyframes af-shake-x {
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

    @keyframes af-shake-y {
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

    @keyframes af-spin {
      to {
        transform: rotate(1turn);
      }
    }

    @keyframes af-ping {
      90%,
      100% {
        transform: scale(2);
        opacity: 0;
      }
    }

    @keyframes af-blink {
      0%,
      100% {
        opacity: 1;
      }
      50% {
        opacity: 0.5;
      }
    }

    @keyframes af-float {
      50% {
        transform: translateY(-25%);
      }
    }

    @keyframes af-bounce {
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

    @keyframes af-pulse {
      50% {
        transform: scale(0.9, 0.9);
      }
    }
  }
`;

export const globalStyles = [resetStyles, themeStyles, utilityStyles];
