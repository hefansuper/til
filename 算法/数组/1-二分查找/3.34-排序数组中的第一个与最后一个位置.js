// https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/

// 34. 排序数组中的第一个与最后一个位置

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  // 需要先找到左右的边际，left，right，再根据左右边界与target的关系来判断返回的值。


  const findLeftBorder = (nums, target) => {
    let left = 0, right = nums.length - 1;
    let leftBorder = -2; // 记录一下leftBorder没有被赋值的情况
    while (left <= right) {
      let middle = Math.floor((left + right) / 2)

      // 哪个地方设置leftBorder，哪里就是=
      if (nums[middle] >= target) {
        right = middle - 1;
        leftBorder = right;
      } else {
        left = middle + 1
      }
    }
    return leftBorder
  }

  const findRightBorder = (nums, target) => {
    let left = 0
    let right = nums.length - 1;
    let rightBorder = -2;
    // 闭区间  [left,right]，这里即便=，也是在区间内。
    while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      if (nums[mid] > target) {
        right = mid - 1;
      } else {
        // 哪个地方设置rightBorder，哪里就是=
        left = mid + 1;
        rightBorder = left;
      }
    }
    return rightBorder;
  }


  // 返回的是index值。
  const leftBorder = findLeftBorder(nums, target)
  const rightBorder = findRightBorder(nums, target)

  // 1:在数组的左边或者是右边。
  if (leftBorder == -2 || rightBorder === -2) {
    return [-1, -1]
  }

  // 3：在数组的中间，并且存在这个值。
  if (rightBorder - leftBorder > 1) {
    return [leftBorder + 1, rightBorder - 1]
  }

  //2:在数组的中间
  return [-1, -1]

};