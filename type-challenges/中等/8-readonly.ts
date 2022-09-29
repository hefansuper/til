// readonly

// 这个题目需要注意如下的几点
// 1: &进行类型的合并的时候，key，类型都相同，但是readonly不同的时候，合并后不会带readonly。
// 2：泛型的默认值和函数的默认值类型 <K, K extends T = keyof T>

type MyReadonly2<T, K extends keyof T = keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
} & {
  readonly [P in keyof T]: T[P];
};
