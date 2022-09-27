// 实现自己的ReturnType

// 这个地方需要注意的是怎么判断一个函数。
// 有两种方式：
// 1：T extends Function
// 2：T extends (...args: any[]) => any

type MyReturnType<T extends Function> = T extends (
  ...args: any[]
) => infer U
  ? U
  : never;