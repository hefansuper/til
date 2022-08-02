/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {

  let slow = 0;

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];

    // 双指针的方法，需要注意的是等于0的时候的相对关系。
    if (element !== 0) {
      nums[index] = nums[slow]
      nums[slow] = element
      slow++
    }
  }
};