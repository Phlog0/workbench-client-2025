type Primitive = string | number | null | undefined;

export type PrimitiveKeys<T> = Exclude<
  {
    [K in keyof T]: T[K] extends Primitive ? K : never;
  }[keyof T],
  undefined
>;

export type NonPrimitiveKeys<T> = {
  [K in keyof T]: T[K] extends Primitive ? never : K;
};
