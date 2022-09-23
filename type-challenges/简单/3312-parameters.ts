// 获取函数参数的类型。


// 需要注意的是infer U是一个类型，而不是一个值。

type MyParameters<T extends (...args: any[]) => unknown> = T extends (
  ...args: infer U
) => unknown
  ? U
  : never;
