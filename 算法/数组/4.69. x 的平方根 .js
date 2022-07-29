//69  https://leetcode.cn/problems/sqrtx/


/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 0
  let right = x
  while (left <= right) {

    let middle = Math.floor((left + right) / 2)

    if (middle * middle < x) {
      left = middle + 1
    } else if (middle * middle > x) {
      right = middle - 1
    } else {
      return middle
    }
  }
  return left + 1

};