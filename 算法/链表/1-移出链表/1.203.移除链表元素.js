// https://leetcode.cn/problems/remove-linked-list-elements/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  // 哑结点
  let dumy = new ListNode(0, head);

  //  这个cur才是每次移动的值。
  let cur = dumy
  while (cur.next) {
    if (cur.next.val == val) {
      cur.next = cur.next.next
    } else {
      // 移动cur，这个需要注意，只有不相等的时候才会移动cur。
      cur =  cur.next;
    }
  }
  // 返回的是头结点，不是哑结点。
  return dumy.next;
};