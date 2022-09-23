// 实现一个自己的concat


type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];