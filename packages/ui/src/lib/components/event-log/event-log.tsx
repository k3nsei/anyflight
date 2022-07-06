/** @jsxImportSource @emotion/react */
import classnames from 'classnames';
import { HTMLAttributes, forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';

import { Icon, Icons } from '@anyflight/icons';
import { uniqueId } from '@anyflight/utils';

import { Button, ButtonSize, ButtonVariant } from '../button';
import { eventLogStyles } from './event-log.styles';

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
    const elementRef = useRef<HTMLDivElement>(null);
    const { current: uniqId } = useRef(uniqueId());
    const [expanded, setExpanded] = useState(initiallyExpanded);

    useImperativeHandle(
      ref,
      () => ({
        expand: () => setExpanded(true),
        collapse: () => setExpanded(false),
        toggle: () => setExpanded(!expanded),
      }),
      [setExpanded, expanded],
    );

    const scrollToBottom = useCallback(() => {
      const element = elementRef.current;

      element?.scroll({ top: element.scrollHeight - element.clientHeight });
    }, []);

    useEffect(() => {
      if (expanded) {
        scrollToBottom();
      }
    }, [data, expanded, scrollToBottom]);

    const lastLine = () => {
      const lines = (data || '').split('\n');

      return lines[lines.length - 1];
    };

    const classNames = classnames('event-log', { 'event-log--expanded': expanded }, className);

    return (
      <section ref={elementRef} id={id || uniqId} className={classNames} css={eventLogStyles}>
        <div className="event-log__controls">
          <Button
            className="event-log__toggle"
            variant={ButtonVariant.CLEAR}
            size={ButtonSize.SMALL}
            aria-expanded={expanded}
            aria-controls={id || uniqId}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Hide Log' : 'Show Log'}
          </Button>
          {expanded && (
            <i className="event-log__scroll-icon" aria-hidden="true">
              <Icon type={Icons.SCROLL} />
            </i>
          )}
        </div>
        <pre className="event-log__content" children={expanded ? data : lastLine()} />
      </section>
    );
  },
);
