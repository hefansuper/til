// 实现一个自己的includes




// 1：先判断T是否有值，没有直接false。
// 2：T有值的情况下
//    2.1：判断第一个数是否和U相同，相同直接返回true，不相同走2.2.
//    2.2：循环判断T后后续值。
// 3：判断是否相同。
// <T>() => T extends X ? 1 : 2

type MyEqual<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false;

type Includes<T extends readonly unknown[], U> = T extends [
  infer First,
  ...infer Rest
]
  ? MyEqual<First, U> extends true
    ? true
    : Includes<Rest, U>
  : false;
