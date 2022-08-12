
var MinStack = function() {
  this.storage = {};
  this.index = 0;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  this.storage[this.index] = val;
  this.index += 1;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  if (this.index === 0) return;
  let popped = this.storage[this.index - 1];
  delete this.storage[this.index - 1];
  this.index -= 1;
  return popped;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  if (this.index > 0) {
    return this.storage[this.index - 1];
  }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return Math.min(...Object.values(this.storage));
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */