import { css } from '@emotion/react';
import classnames from 'classnames';
import { HTMLAttributes, forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';

import { uniqueId } from '@anyflight/utils';

import { useAnyflightUiConfig, useAnyflightUiTheme } from '../../hooks';
import { AnyflightUiDarkModeProvider } from '../../providers';
import { EventLogContent } from './event-log-content';
import { EventLogControls } from './event-log-controls';

export interface EventLogRef {
  expand(): void;

  collapse(): void;

  toggle(): void;
}

interface EventLogProps extends HTMLAttributes<HTMLPreElement> {
  children: string;
  initiallyExpanded?: boolean;
}

export const EventLog = forwardRef<EventLogRef, EventLogProps>(
  ({ id, className, children: data, initiallyExpanded = false }, ref) => {
    const { prefix } = useAnyflightUiConfig();
    const theme = useAnyflightUiTheme();

    const elementRef = useRef<HTMLElement>(null);
    const { current: uniqId } = useRef<string>(uniqueId());
    const [expanded, setExpanded] = useState<boolean>(initiallyExpanded);

    const expand = useCallback(() => setExpanded(true), [setExpanded]);
    const collapse = useCallback(() => setExpanded(false), [setExpanded]);
    const toggle = useCallback(() => setExpanded(!expanded), [expanded, setExpanded]);
    const scrollToBottom = useCallback(() => {
      const element = elementRef.current;

      element?.scroll({ top: element.scrollHeight - element.clientHeight });
    }, []);

    useImperativeHandle(ref, () => ({ expand, collapse, toggle }), [expand, collapse, toggle]);

    useEffect(() => {
      if (expanded) {
        scrollToBottom();
      }
    }, [data, expanded, scrollToBottom]);

    const classNames = classnames('event-log', { 'is-expanded': expanded }, className);

    return (
      <AnyflightUiDarkModeProvider force={true}>
        <section
          ref={elementRef}
          id={id || uniqId}
          className={classNames}
          css={css`
            &:where(.event-log) {
              --${prefix}-event-log-size-x: 100%;
              --${prefix}-event-log-size-y: 2rem;
              --${prefix}-event-log-expand-size-y: 6rem;
              --${prefix}-event-log-margin-x: 0;
              --${prefix}-event-log-margin-y: 0;
              --${prefix}-event-log-padding-x: 0.5rem;
              --${prefix}-event-log-padding-y: 0.5rem;
              --${prefix}-event-log-gap: 0.5rem;
              --${prefix}-event-log-animation-expand: ${prefix}-event-log-expand 0.3s var(--${prefix}-ease-1) forwards;
              --${prefix}-event-log-icon-opacity: 0.15;

              inline-size: var(--${prefix}-event-log-size-x);
              block-size: var(--${prefix}-event-log-size-y);
              margin-inline: var(--${prefix}-event-log-margin-x);
              margin-block: var(--${prefix}-event-log-margin-y);
              padding-inline: var(--${prefix}-event-log-padding-x);
              padding-block: var(--${prefix}-event-log-padding-y);
              overflow: hidden scroll;
              position: relative;
              isolation: isolate;
              display: flex;
              gap: var(--${prefix}-event-log-gap);

              background-color: #242424;
              color: rgba(255, 255, 255, 0.6);
              transition: all 0.2s;

                //line-height: ${theme.fontSize.sm.lineHeight};
              font-family: ${theme.fontFamily.mono};
              font-size: 0.8125rem;

              user-select: none;
            }

            &:where(.event-log:is(.is-expanded)) {
              animation: var(--${prefix}-event-log-animation-expand);
            }

            @media (prefers-reduced-motion: reduce) {
              &:where(.event-log),
              &:where(.event-log .event-log__scroll-icon) {
                animation-duration: 0s;
              }
            }

            @keyframes ${prefix}-event-log-expand {
              to {
                block-size: var(--${prefix}-event-log-expand-size-y);
              }
            }
          `}
        >
          <EventLogControls id={id || uniqId} toggle={toggle} expanded={expanded} />
          <EventLogContent expanded={expanded} children={data} />
        </section>
      </AnyflightUiDarkModeProvider>
    );
  },
);

EventLog.displayName = 'EventLog';
