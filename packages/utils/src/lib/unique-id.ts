import { nanoid } from 'nanoid';

import { strip } from './strip';

export type UniqueIdOptions = Partial<{
  prefix: string;
  stripWhitespace: boolean;
}>;

export const uniqueId = (options?: UniqueIdOptions): string => {
  const { prefix = 'af', stripWhitespace = true } = options ?? {};
  const id = `${prefix}-${nanoid()}`;

  if (stripWhitespace) {
    return strip(id);
  }

  return id;
};
