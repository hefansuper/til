// 获取数组的第一个值的类型。

// 1: T extends [] 表示是不是一个空数组，如果是空数组就返回never。
// 2: 在ts中数组数可以使用index值来获取对应的值的。


type First<T extends any[]> = T extends [] ? never : T[0];