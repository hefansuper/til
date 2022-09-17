// 实现自己的Pick

// 1：K extends keyof T   K是【T类型的key的类型】的子集。
// 2: in 缩小范围。
// P in K   P是K中的一个。

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};