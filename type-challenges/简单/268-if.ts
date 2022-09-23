// 实现一个自己的IF


// 1：在判断是否是true或者false的时候，只可以直接用extends。
// 2：在部分的情况下，在前面的入参的时候就需要将其限定掉。

type If<C extends boolean, T, F> = C extends true ? T : F;