function largestSubarraySum(integerArray) {
    largestInteger = Math.max(integerArray);
    integerArray.pop();
    secondLargestInteger = Math.max(integerArray);
    sum = largestInteger + secondLargestInteger;
    return sum;
}


