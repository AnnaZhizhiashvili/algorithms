const productExceptSelf = (nums) => {
  let output = [];
  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = 0; j < nums.length; j++) {
      if (j !== i) {
        product *= nums[j];
      }
    }
    output.push(product);
  }
  return output;
};

const productExceptSelf_V2 = (nums) => {
  // prefixArr is an array that contains the product of all the elements before the current element
  // suffixArr is an array that contains the product of all the elements after the current element
  // output is an array that contains the product of all the elements except the current element
  // suffixArr[nums.length - 1] = 1; is because the last element of the suffixArr is 1, because there is no element after the last element
  // prefixArr[0] = 1; is because the first element of the prefixArr is 1, because there is no element before the first element
  // for loop is iterating from 1 to nums.length - 1, because we already have the first element of the prefixArr as 1
  // for loop is iterating from nums.length - 2 to 0, because we already have the last element of the suffixArr as 1
  // output[i] = suffixArr[i] * prefixArr[i]; is because the product of all the elements except the current element is the product of the product of all the elements before the current element and the product of all the elements after the current element
  let prefixArr = [1];
  let suffixArr = [];
  let output = [];
  suffixArr[nums.length - 1] = 1;
  for (let i = 1; i < nums.length; i++) {
    // here we are calculating the product of all the elements before the current element
    prefixArr[i] = prefixArr[i - 1] * nums[i - 1];
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    // here we are calculating the product of all the elements after the current element
    suffixArr[i] = suffixArr[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < nums.length; i++) {
    // here we are calculating the product of all the elements except the current element
    output[i] = suffixArr[i] * prefixArr[i];
  }
  return output;
};
const nums = [1, 2, 4, 6];
