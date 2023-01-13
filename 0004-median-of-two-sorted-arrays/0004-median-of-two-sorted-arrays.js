/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  let sorted = nums1.concat(nums2).sort((a, b) => a - b);
  
  if (sorted.length % 2 === 0) {
    return (sorted[(sorted.length / 2) - 1] + sorted[sorted.length / 2]) / 2;
  } else {
    return sorted[Math.floor(sorted.length / 2)]
  }
};