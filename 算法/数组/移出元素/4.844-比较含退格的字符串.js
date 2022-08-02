// https://leetcode.cn/problems/backspace-string-compare/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {

  // 1: 用栈来处理。
  const backspace = (val) => {
    let arr = []
    for (const i of val) {
      if (i !== '#') {
        arr.push(i)
      } else {
        arr.pop()
      }
    }

    return arr.join()
  }

  return backspace(s) === backspace(t)
};