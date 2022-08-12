
var MinStack = function() {
  this.storage = {};
  this.index = 0;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  this.storage[this.index] = { val };
  if (this.index === 0) {
    this.storage[this.index].min = val;
  } else if (this.storage[this.index].val < this.storage[this.index - 1].min) {
    this.storage[this.index].min = val;
  } else {
    this.storage[this.index].min = this.storage[this.index - 1].min;
  }
  this.index += 1;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  if (this.index === 0) return;
  let popped = this.storage[this.index - 1].val;
  delete this.storage[this.index - 1];
  this.index -= 1;
  return popped;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  if (this.index > 0) {
    return this.storage[this.index - 1].val;
  }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.storage[this.index - 1].min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */