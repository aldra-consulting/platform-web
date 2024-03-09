import { type Environment } from '.';

declare namespace NodeJS {
  interface ProcessEnv extends Environment {}
}
