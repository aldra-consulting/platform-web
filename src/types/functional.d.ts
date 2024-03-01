export namespace Functional {
  export type Supplier<Result = unknown> = () => Result;

  export type Function<Input, Result = unknown> = (args: Input) => Result;
}
