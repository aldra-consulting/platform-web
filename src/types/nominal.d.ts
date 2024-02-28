import { type Brand } from './brand';

export type Negative = Brand<number, 'Negative'>;

export type NonNegative = Brand<number, 'NonNegative'>;

export type NonPositive = Brand<number, 'NonPositive'>;

export type NonZero = Brand<number, 'NonZero'>;

export type Positive = Brand<number, 'Positive'>;
