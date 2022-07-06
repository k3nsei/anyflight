import { css } from '@emotion/react';

export interface EventLogContentProps {
  children: string;
  expanded?: boolean;
}

export const EventLogContent = ({ children: data, expanded = false }: EventLogContentProps) => {
  const lastLine = () => {
    const lines = (data || '').split('\n');

    return lines[lines.length - 1];
  };

  return (
    <pre
      className="event-log__content"
      css={css`
        &:where(.event-log__content) {
          inline-size: 100%;
          min-block-size: 100%;
          margin: 0;
          padding: 0;
          display: block;
          flex: 1 1 auto;
          line-height: 1rem;
        }

        &:where(.event-log__content),
        &:where(.event-log__content *) {
          user-select: text;
        }
      `}
      children={expanded ? data : lastLine()}
    />
  );
};

EventLogContent.displayName = 'EventLogContent';
