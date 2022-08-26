/**
 * @param {number} n
 * @return {boolean}
 */
function reorderedPowerOf2(n) {

  function getCounts(num) {
    let numMap = {};
    let numArr = num.toString().split('');
    for (let i = 0; i < numArr.length; i++) {
      numMap[numArr[i]] === undefined ? numMap[numArr[i]] = 1 : numMap[numArr[i]]++;
    }
    return numMap;
  }
  
  function isEqual(obj1, obj2) {
    var props1 = Object.getOwnPropertyNames(obj1);
    var props2 = Object.getOwnPropertyNames(obj2);
    if (props1.length != props2.length) {
      return false;
    }
    for (var i = 0; i < props1.length; i++) {
      let val1 = obj1[props1[i]];
      let val2 = obj2[props1[i]];
      let isObjects = isObject(val1) && isObject(val2);
      if (isObjects && !isEqual(val1, val2) || !isObjects && val1 !== val2) {
        return false;
      }
    }
    return true;
  }
  function isObject(object) {
    return object != null && typeof object === 'object';
  }
  
  let map = getCounts(n);
  let power = 1;
  
  while (power < Math.pow(10, 9)) {
    let match = false;
    let powMap = getCounts(power);
    
    if (isEqual(map, powMap)) {
      return true;
    }
    
    power *= 2;
  }
  
  return false;
};