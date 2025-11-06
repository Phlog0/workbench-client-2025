type IsPrimitive<T> = T extends string | number | bigint | null | boolean | symbol ? true : false;

export type TNonPrimitiveKeys<T> = Exclude<
  T extends unknown
    ? {
        [K in keyof T]: IsPrimitive<T[K]> extends true ? never : K;
      }[keyof T]
    : never,
  undefined
>;
export type TPrimitiveKeys<T> = Exclude<
  T extends unknown
    ? {
        [K in keyof T]: IsPrimitive<T[K]> extends true ? K : never;
      }[keyof T]
    : never,
  undefined
>;

export type TNonPrimitiveType<T> = Exclude<
  T extends unknown
    ? {
        [K in keyof T as IsPrimitive<T[K]> extends true ? never : K]: T[K];
      }
    : never,
  undefined
>;
export type TPrimitiveType<T> = Exclude<
  T extends unknown
    ? {
        [K in keyof T as IsPrimitive<T[K]> extends true ? K : never]: T[K];
      }
    : never,
  undefined
>;
