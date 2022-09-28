// 实现换一个自己的omit



// 第一种：
// 1：获取T中非K得部分。
// 2：从T中取出1中的类型。
type _Exclude1<T, U extends T> = T extends U ? never : T;
type MyOmit1<T, K extends keyof T> = Pick<T, _Exclude1<keyof T, K>>;

// 第二种。
// 1：获取T中非K得部分
// 2：T的key如果在1中 就返回。
type _Exclude2<T, P extends T> = T extends P ? never : T;

type MyOmit2<T, K extends keyof T> = {
  [P in keyof _Exclude2<keyof T, K> & keyof T]: T[P];
};

// 第三种，通过in的方式。
// 1：in可以理解为循环。
// 2：as来表示P的限定关系。
// for (P in keyof T) {
//   if(P extends K){
//     return never
//   } else {
//     return P
//   }
// }
type MyOmit3<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};


