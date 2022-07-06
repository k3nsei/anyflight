/** @jsxImportSource @emotion/react */
import classnames from 'classnames';
import { HTMLAttributes, forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';

import { Icon, Icons } from '@anyflight/icons';
import { uniqueId } from '@anyflight/utils';

import { Button, ButtonSize } from '../button';
import { eventLogStyles } from './event-log.styles';

export interface EventLogRef {
  expand(): void;
  collapse(): void;
  toggle(): void;
}

interface EventLogProps extends HTMLAttributes<HTMLPreElement> {
  children: string;
}

export const EventLog = forwardRef<EventLogRef, EventLogProps>(({ children: data, className }, ref) => {
  const contentElementRef = useRef<HTMLPreElement>(null);
  const { current: id } = useRef(uniqueId());
  const [expanded, setExpanded] = useState(false);

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
    const contentElement = contentElementRef.current;

    contentElement?.scroll({ top: contentElement.scrollHeight - contentElement.clientHeight });
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
    <div id={id} className={classNames} css={eventLogStyles}>
      <Button
        className="event-log__toggle"
        size={ButtonSize.SMALL}
        aria-expanded={expanded}
        aria-controls={id}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? 'Hide Log' : 'Show Log'}
      </Button>
      {expanded && (
        <i className="event-log__scroll-icon" aria-hidden="true">
          <Icon type={Icons.SCROLL} />
        </i>
      )}
      <pre ref={contentElementRef} className="event-log__content" children={expanded ? data : lastLine()} />
    </div>
  );
});
