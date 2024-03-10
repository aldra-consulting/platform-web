import { type Brand } from './brand';

export namespace ID {
  export type Client = Brand<string, 'client.id'>;
  export type Mission = Brand<string, 'mission.id'>;
}
