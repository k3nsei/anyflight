import { ClassNames, css } from '@emotion/react';

import { AnyflightIcon, Icon } from '@anyflight/icons';

import { useAnyflightUiConfig, useAnyflightUiTheme } from '../../hooks';
import { Button, ButtonSize, ButtonStyle } from '../button';

export interface EventLogControlsProps {
  id: string;

  toggle(): void;

  expanded?: boolean;
}

export const EventLogControls = ({ id, toggle, expanded = false }: EventLogControlsProps) => {
  const { prefix } = useAnyflightUiConfig();
  const theme = useAnyflightUiTheme();

  return (
    <div
      className="event-log__controls"
      css={css`
        &:where(.event-log__controls) {
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
      `}
    >
      <Button
        className="event-log__toggle"
        css={css`
          &:where(.event-log__toggle) {
            --${prefix}-btn-color: #656565;
            --${prefix}-btn-hover-color: #959595;
            --${prefix}-btn-active-color: #959595;
            transform: translate3d(0, -0.375rem, 0);
          }
        `}
        style={ButtonStyle.TEXT}
        size={ButtonSize.SMALL}
        aria-expanded={expanded}
        aria-controls={id}
        onClick={() => toggle()}
      >
        {expanded ? 'Hide Log' : 'Show Log'}
      </Button>
      {expanded && (
        <ClassNames>
          {({ css, cx }) => (
            <Icon
              type={AnyflightIcon.SCROLL}
              className={css`
                inline-size: 4rem;
                block-size: 4.5rem;
                aspect-ratio: unset;
                inset: calc(50% - 1.6rem) 0 auto auto;
                position: absolute;
                color: rgba(var(--${prefix}-color-white-rgb), var(--${prefix}-event-log-icon-opacity, 1));
                user-select: none;
                pointer-events: none;
                z-index: -1;
                opacity: 0;
                animation: var(--${prefix}-animation-fade-in) forwards, var(--${prefix}-animation-slide-in-left);
                animation-timing-function: var(--${prefix}-ease-squish-1);
                animation-iteration-count: 1;
                animation-duration: 0.5s;
              `}
              aria-hidden
            />
          )}
        </ClassNames>
      )}
    </div>
  );
};

EventLogControls.displayName = 'EventLogControls';
