function twoSums (nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const sum = target - nums[i];

        if (map.has(sum)) {
            return [map.get(sum), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

twoSums([2, 7, 11, 15], 9); // [0, 1]
twoSums([3, 2, 4], 6); // [1, 2]
console.log(twoSums([2, 7, 11, 15], 9));
console.log(twoSums([3, 2, 4], 6));