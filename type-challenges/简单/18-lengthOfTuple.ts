//  获取元祖的长度。

// const a = [1]
//  {
//   0: 1,
//   length: 1
// }
// 数组也是个对象，有个默认的key是length，获取这个值就能得到元祖的长度。


type Length<T extends readonly unknown[]> = T['length']