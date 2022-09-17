// 将元组转换为对象类型。

// Tuple 是一种特殊的数组, 能知道这个数组的长度与对应的类型。

// type StringNumberBooleans = [string, number, ...boolean[]];
// type StringBooleansNumber = [string, ...boolean[], number];
// type BooleansStringNumber = [...boolean[], string, number];

type TupleToObject<T extends readonly any[]> = {
  [P in T[number]]: P
}
