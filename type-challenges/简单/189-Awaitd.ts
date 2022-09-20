// 实现一个Awaited来获取Promise的返回值。


// 1:需要注意的是infer的使用位置。
// 2：需要判断Promise的值，然后递归。

type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer U>
  ? U extends Promise<unknown>
    ? MyAwaited<U>
    : U
  : never;