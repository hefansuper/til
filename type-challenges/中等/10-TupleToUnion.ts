
// 实现元祖转换为联合类型

type TupleToUnion<T extends unknown[]> =  T[number];