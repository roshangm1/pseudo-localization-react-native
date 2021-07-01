import type { ACCENTED_MAP, BIDI_MAP } from './pseudoLocalizeString';

export type PseudoLocalizationProps = {
  enabled?: boolean;
};

export type Strategy<T> = {
  prefix: string;
  postfix: string;
  map: T;
  elongate: boolean;
};

export type Strategies = {
  accented: Strategy<typeof ACCENTED_MAP>;
  bidi: Strategy<typeof BIDI_MAP>;
};

export type C = keyof typeof ACCENTED_MAP;
