import { ComponentMeta } from '@storybook/react';
import { ComponentProps, useEffect, useRef, useState } from 'react';

import { EventLog, EventLogRef } from './event-log';

export default {
  title: 'Components/Presentation/EventLog',
  component: EventLog,
  args: {
    children: [
      '2022-07-15 @15:56:17 -- OS: Windows',
      '2022-07-15 @15:56:17 -- Configurator: 10.8.0 (5ec9465)',
      '2022-07-15 @15:56:17 -- Loaded release information for configurator from GitHub.',
      '2022-07-15 @15:56:26 -- Loaded builds information for jobs from build server.',
    ].join('\n'),
  },
} as ComponentMeta<typeof EventLog>;

const nextLines = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Proin placerat libero ac magna faucibus luctus.',
  'Maecenas id ligula facilisis, volutpat turpis eget, lobortis nisl.',
  'Mauris at urna scelerisque, bibendum nunc nec, vestibulum erat.',
  'Fusce nec turpis aliquam est porta interdum a vitae purus.',
  'In blandit tortor eget sem porta malesuada.',
  'Sed tincidunt sem placerat ultricies varius.',
  'Cras eu metus id magna auctor rhoncus.',
];

const formatList = (items: string[]) => items.filter(Boolean).join('\n');

const formatDate = (date: Date) => {
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  return `${year}-${month}-${day} @${hours}:${minutes}:${seconds}`;
};

export const Story01 = ({ expanded, children: data }: ComponentProps<typeof EventLog> & { expanded: boolean }) => {
  const ref = useRef<EventLogRef>(null);
  const [extraData, setExtraData] = useState('');
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    expanded ? ref.current.expand() : ref.current.collapse();
  }, [expanded]);

  useEffect(() => {
    const timerRef = setTimeout(() => {
      setExtraData(formatList([...extraData.split('\n'), `${formatDate(new Date())} -- ${nextLines[counter]}`]));

      let nextCounterValue = counter + 1;

      if (nextCounterValue === nextLines.length) {
        nextCounterValue = 0;
      }

      setCounter(nextCounterValue);
    }, 5000);

    return () => clearTimeout(timerRef);
  }, [extraData, setExtraData, counter, setCounter]);

  return <EventLog ref={ref}>{formatList([data, extraData])}</EventLog>;
};
Story01.storyName = 'EventLog';
Story01.args = { expanded: false };
