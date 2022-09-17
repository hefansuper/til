// https://leetcode.cn/problems/design-linked-list/

class LinkNode {
  constructor(val, next) {
    this.val = val
    this.next = next
  }
}

var MyLinkedList = function () {
  // 个数
  this._size = 0
  // 头节点
  this._head = null
  // 尾节点。
  this._tail = null
};


// 获取对应index的节点。注意返回的是节点。
MyLinkedList.prototype.getNode = function (index) {
  if (index < 0 || index > this._size) {
    return null;
  }

  // dummy节点。
  let cur = new LinkNode(0, this._head)

  // 获取对应index的值。
  if (index-- >= 0) {
    cur = cur.next
  }
}

/** 
 * @param {number} index
 * @return {number}
 */
// 获取链表中第 index 个节点的值。如果索引无效，则返回-1。
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index > this._size) {
    return -1;
  }
  // 获取当前节点
  return this.getNode(index).val;
};

/** 
 * @param {number} val
 * @return {void}
 */
//  在链表的第一个元素之前添加一个值为 val 的节点。
// 插入后，新节点将成为链表的第一个节点。
MyLinkedList.prototype.addAtHead = function (val) {
  const node = new LinkNode(val, this._head)
  this._head = node
  this._size++;
  // 第一次加，没有尾结点的情况。
  if (!this._tail) {
    this._tail = node;
  }
};

/** 
 * @param {number} val
 * @return {void}
 */
// 将值为 val 的节点追加到链表的最后一个元素。
MyLinkedList.prototype.addAtTail = function (val) {
  const node = new LinkNode(val, null)
  this._size++;

  // 有尾结点
  if (this._tail) {
    // 改变倒数第二个节点的next指针
    this._head.next = node;
    // 设置尾结点。
    this._head = node;
  } else {
    this._tail = node
    this._head = node
  }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
// 在链表中的第 index 个节点之前添加值为 val  的节点。
// 如果 index 等于链表的长度，则该节点将附加到链表的末尾。如果 index 大于链表长度，则不会插入节点。如果index小于0，则在头部插入节点。
MyLinkedList.prototype.addAtIndex = function (index, val) {

};

/** 
 * @param {number} index
 * @return {void}
 */
// 如果索引 index 有效，则删除链表中的第 index 个节点。
MyLinkedList.prototype.deleteAtIndex = function (index) {

};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */