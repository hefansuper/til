// 实现自己的readonly

// readonly 关键字让类型变为只读的。
// interface IDemo {
//   readonly a: string;
//   readonly b: () => void;
// }

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};
