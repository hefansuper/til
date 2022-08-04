// https://leetcode.cn/problems/fruit-into-baskets/

// 输入：fruits = [1,2,3,2,2]
// 输出：4
// 解释：可以采摘 [2,3,2,2] 这四棵树。
// 如果从第一棵树开始采摘，则只能采摘 [1,2] 这两棵树。


// 需要注意的是fruits数组里面的值是代指的水果的类型。
// 使用滑动窗口来解决这个题目，的到的是最长的连续2种水果的数组，返回这个数组的长度。

/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  // 左边界
  let l = 0;
  // 最终的个数
  let count = 0;
  // 存放水果的篮子
  let map = new Map()

  //右边界
  for (let r = 0; r < fruits.length; r++) {
    // 将右边界的值加入到篮子中。

    // map中已经有两种了，并且最新的不存在
    if (map.size === 2 && !map.has(fruits[r])) {
      // 
      count = Math.max(count, [...map.values()].reduce((prev, cur) => prev + cur))

      // 不断地将左边界右移，直到map只有一种水果。
      while (map.size > 2) {
        if (map.get(fruits[l]) === 1) {
          map.delete(fruits[l])
        } else {
          map.set(fruits[l], map.get(fruits[l]) - 1)
        }
        l++
      }
    }

    // 要注意这个地方，是先判断map是否是等于2，再添加。
    map.set(fruits[r], map.has(fruits[r]) ? map.get(fruits[r]) + 1 : 1)
  }
  count = Math.max(count, [...map.values()].reduce((prev, cur) => prev + cur))
  return count
};

totalFruit([0, 1, 2, 2])
