/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
  this.history = [homepage];
  this.currIdx = 0;
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
  this.history.splice(this.currIdx + 1);
  this.history.push(url);
  this.currIdx = this.history.length - 1;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
  this.currIdx = Math.max(0, this.currIdx - steps);
  return this.history[this.currIdx];
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
  this.currIdx = Math.min(this.history.length - 1, this.currIdx + steps);
  return this.history[this.currIdx];
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */