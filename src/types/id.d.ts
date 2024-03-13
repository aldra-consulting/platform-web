import { type Brand } from './brand';

export namespace ID {
  export type Client = Brand<string, 'client.id'>;
  export type Mission = Brand<string, 'mission.id'>;
  export type Language = Brand<string, 'language.id'>;
  export type CommonReferenceLevel = Brand<string, 'commonReferenceLevel.id'>;
  export type Criterion = Brand<string, 'criterion.id'>;
}
