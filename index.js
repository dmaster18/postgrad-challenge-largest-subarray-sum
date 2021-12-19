function largestSubArraySum(integerArray) {
    

}


describe('#largestSubarraySum', function() {
    it('returns the largest subarray sum for an array of all-positive integers', function () {
          let array = [1, 100, 4, 15, 9, 30]
          expect(largestSubarraySum(array)).toEqual(159)
    });
  