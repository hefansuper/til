// https://leetcode.cn/problems/minimum-size-subarray-sum/

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {

  // 滑动窗口。for循环控制的是右边界，因为每次都要移动。

  // 左边界
  let left = 0
  // 和
  let sum = 0
  // 满足的数组的长度。是一个num。
  let count = 0

  for (let r = 0; r < nums.length; r++) {
    sum = sum + nums[r]

    // 累加的sum比target还大，就需要滑动窗口了。
    // 滑动的时候，仅仅只需要将左边界left向右就行。
    while (sum >= target) {
      // 获取满足的数组的长度。
      const length = r - left + 1
      // 结果是最小的。
      count = length < count ? length : count

      // 移动左边界。向右。并且将sum的值变小。
      sum = sum - nums[left]
      left++
    }
  }

  return count
};