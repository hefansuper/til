// https://leetcode.cn/problems/valid-perfect-square/

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let left = 0;
  let right = num;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2)
    if (Math.pow(middle, 2) < num) {
      left = middle + 1;
    } else if (Math.pow(middle, 2) > num) {
      right = middle - 1;
    } else {
      return true
    }
  }
  return false;
};