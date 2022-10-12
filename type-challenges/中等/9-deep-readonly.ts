// 实现一个深度的readonly



// 需要注意的是keyof T[P] extends never 的这个操作，如果是函数会返回




type DeepReadonly<T> = {
  readonly [P in keyof T]: keyof T[P] extends never ? T[P] : DeepReadonly<T[P]>;
};
