import { css } from '@emotion/react';

import { ButtonSize, ButtonStyle, ButtonVariant, getColor } from '@anyflight/ui';

import { AnyflightUiStylesFactory } from '../../internals';

export const buttonBaseStyles: AnyflightUiStylesFactory = ({ prefix }, theme, isDarkMode) => css`
  :where(&) {
    --${prefix}-button-margin-x: ${theme.spacing['0']};
    --${prefix}-button-margin-y: ${theme.spacing['0']};

    display: inline-block;
    margin-inline: var(--${prefix}-button-margin-x);
    margin-block: var(--${prefix}-button-margin-y);
    padding-inline: var(--${prefix}-button-padding-x);
    padding-block: var(--${prefix}-button-padding-y);
    background-color: var(--${prefix}-button-background-color);
    border: 2px solid var(--${prefix}-button-border-color);
    border-radius: 100vmax;
    text-decoration: none;
    color: var(--${prefix}-button-color);
    user-select: none;
    cursor: pointer;
  }

  :where(&:is(:hover, :focus-visible)) {
    background-color: var(--${prefix}-button-hover-background-color);
    border-color: var(--${prefix}-button-hover-border-color);
    color: var(--${prefix}-button-hover-color);
  }

  :where(&:is(:active)) {
    background-color: var(--${prefix}-button-active-background-color);
    border-color: var(--${prefix}-button-active-border-color);
    color: var(--${prefix}-button-active-color);
  }

  :where(&:is(:focus)) {
    outline: 0;
  }

  :where(&:is(:focus-visible)) {
    border-color: ${isDarkMode ? theme.colors.black : theme.colors.white};
    box-shadow: 0 0 0 2px ${isDarkMode ? theme.colors.white : theme.colors.black};
  }

  :where(&:is(:disabled)) {
    opacity: 0.5;
    pointer-events: none;
    cursor: default;
  }
`;

export const buttonVariantStyles: AnyflightUiStylesFactory = ({ prefix }, theme, isDarkMode) =>
  css(
    Object.values(ButtonVariant).map((variant) => {
      const { colors } = theme;
      const { transparent, neutral, [variant]: color = neutral } = colors;

      return css`
        :where(&:is(.variant-${variant})) {
          --${prefix}-button-background-color: ${isDarkMode ? color['80'] : color['40']};
          --${prefix}-button-border-color: ${isDarkMode ? color['80'] : color['40']};
          --${prefix}-button-color: ${isDarkMode ? color['0'] : color['100']};

          --${prefix}-button-hover-background-color: ${isDarkMode ? color['70'] : color['30']};
          --${prefix}-button-hover-border-color: ${isDarkMode ? color['70'] : color['30']};
          --${prefix}-button-hover-color: ${isDarkMode ? color['0'] : color['100']};

          --${prefix}-button-active-background-color: ${isDarkMode ? color['60'] : color['20']};
          --${prefix}-button-active-border-color: ${isDarkMode ? color['60'] : color['20']};
          --${prefix}-button-active-color: ${isDarkMode ? color['0'] : color['100']};
        }

        :where(&:is(.variant-${variant}.style-${ButtonStyle.OUTLINE})) {
          --${prefix}-button-background-color: ${transparent};
          --${prefix}-button-border-color: ${isDarkMode ? color['80'] : color['40']};
          --${prefix}-button-color: ${isDarkMode ? color['80'] : color['40']};

          ${getColor(`${prefix}-button-hover-background-color`, isDarkMode ? color['80'] : color['40'], 0.1)};
          --${prefix}-button-hover-border-color: ${isDarkMode ? color['80'] : color['40']};
          --${prefix}-button-hover-color: ${isDarkMode ? color['80'] : color['40']};

          ${getColor(`${prefix}-button-active-background-color`, isDarkMode ? color['80'] : color['40'], 0.2)};
          --${prefix}-button-active-border-color: ${isDarkMode ? color['80'] : color['40']};
          --${prefix}-button-active-color: ${isDarkMode ? color['80'] : color['40']};
        }

        :where(&:is(.variant-${variant}.style-${ButtonStyle.TEXT})) {
          --${prefix}-button-background-color: ${transparent};
          --${prefix}-button-border-color: ${transparent};
          --${prefix}-button-color: ${isDarkMode ? color['80'] : color['40']};

          ${getColor(`${prefix}-button-hover-background-color`, isDarkMode ? color['80'] : color['40'], 0.1)};
          --${prefix}-button-hover-border-color: ${transparent};
          --${prefix}-button-hover-color: ${isDarkMode ? color['80'] : color['40']};

          ${getColor(`${prefix}-button-active-background-color`, isDarkMode ? color['80'] : color['40'], 0.2)};
          --${prefix}-button-active-border-color: ${transparent};
          --${prefix}-button-active-color: ${isDarkMode ? color['80'] : color['40']};
        }

        :where(&:is(.variant-${variant}.style-${ButtonStyle.TEXT}.button-link)) {
          text-decoration: underline;
        }
      `;
    }),
  );

export const buttonSizeStyles: AnyflightUiStylesFactory = ({ prefix }, theme, isDarkMode) => css`
  :where(&:is(.size-${ButtonSize.SMALL})) {
    --${prefix}-button-padding-x: ${theme.spacing['0.5']};
    --${prefix}-button-padding-y: ${theme.spacing['0.5']};
  }

  :where(&:is(.size-${ButtonSize.MEDIUM})) {
    --${prefix}-button-padding-x: ${theme.spacing['2']};
    --${prefix}-button-padding-y: ${theme.spacing['1']};
  }

  :where(&:is(.size-${ButtonSize.LARGE})) {
    --${prefix}-button-padding-x: ${theme.spacing['4']};
    --${prefix}-button-padding-y: ${theme.spacing['2']};
  }
`;
