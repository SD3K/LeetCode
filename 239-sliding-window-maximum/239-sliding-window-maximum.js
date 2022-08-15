/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function Node(val) {
  this.val = val;
  this.prev = null;
  this.next = null;
}

function Deque() {
  this.left = null;
  this.right = null;
  this.size = 0;
  
  this.pushRight = function (val) {
    const node = new Node(val);
    if (this.size == 0) {
      this.left = node;
      this.right = node;
    } else {
      this.right.next = node;
      node.prev = this.right;
      this.right = node;
    }
    this.size++;
    return this.size;
  };
  
  this.popRight = function () {
    if (this.size == 0) {
      return null;
    }
    const removedNode = this.right;
    this.right = this.right.prev;
    if (this.right) {
      this.right.next = null;
    }
    this.size--;
    return removedNode;
  };
  
  this.pushLeft = function (val) {
    const node = new Node(val);
    if (this.size == 0) {
      this.left = node;
      this.right = node;
    } else {
      this.left.prev = node;
      node.next = this.left;
      this.left = node;
    }
    this.size++;
    return this.size;
  };
  
  this.popLeft = function () {
    if (this.size == 0) {
      return null;
    }
    const removedNode = this.left;
    this.left = this.left.next;
    if (this.left) {
      this.left.prev = null;
    }
    this.size--;
    return removedNode;
  };
}

var maxSlidingWindow = function (nums, k) {
  const solution = [];
  let deque = new Deque();
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    while (deque.right && nums[deque.right.val] < nums[right]) {
      deque.popRight();
    }
    deque.pushRight(right);

    if (left > deque.left.val) {
      deque.popLeft();
    }

    if (right + 1 >= k) {
      solution.push(nums[deque.left.val]);
      left++;
    }
    right++;
  }
  return solution;
  
//   Brute Force Solution
//   const solution = [];
  
//   for (let i = 0; i + k - 1< nums.length; i++) {
//     solution.push(Math.max(...(nums.slice(i, i + k))));
//   }
  
//   return solution;
};