const findStringLength = (input) => {
   const arrExample = input

   let res = {}

   arrExample.forEach(item => {
      if (res[`${item.length}`]) {
         res[`${item.length}`]++
      } else {
         res[`${item.length}`] = 1;
      }
   })

   var maxAppearLength = 0
   for (let key in res) {
      if (res.hasOwnProperty(key)) {
         if (res[key] > maxAppearLength) {
            maxAppearLength = res[key]
         }
      }
   }

   let lengthArr = []
   for (let key in res) {
      if (res.hasOwnProperty(key)) {
         if (res[key] === maxAppearLength) {
            lengthArr.push(+key)
         }
      }
   }

   let finalResult = []
   lengthArr.forEach(lengthItem => {
      const res = arrExample.filter(item => item.length === lengthItem)
      finalResult = finalResult.concat(res)
   })

   return finalResult
}

findStringLength(['a', 'ab', 'abc', 'cd', 'def', 'gh'])


const findIntegerSum = (input) => {
   function comparator(a, b) {
      return a - b;
   }

   function getLargest(nums) {
      nums.sort(comparator);
      const max = nums[nums.length - 1];
      return max;
   }

   function getSecondLargest(nums) {
      nums.sort(comparator);
      const max = nums[nums.length - 1];
      let index = nums.length - 1;
      while (index--) {
         if (nums[index] !== max) {
            return nums[index];
         }
      }
      return max;
   }

   return getLargest(input) + getSecondLargest(input)
}

findIntegerSum([1, 4, 2, 3, 5])

const jsTest = {
   findStringLength,
   findIntegerSum
}

module.exports = jsTest;