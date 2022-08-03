/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
  let area = 0;
  let left = 0;
  let right = height.length - 1;
  
  while (left < right) {
    area = Math.max(area, Math.min(height[left], height[right]) * (right - left));
    
    if (height[left] > height[right]) {
      right -= 1;
    } else {
      left += 1;
    }
  }
  
  return area;
};