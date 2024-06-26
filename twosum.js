const twosum = function (nums, target){
    const int = {};
    for(let i=0; i<nums.length; i++){
        let val = nums[i];
        int[val] = i;
    }
    for(let i=0; i<nums.length; i++){
        let remainingnum = target - nums[i];
        if(int[remainingnum] && int[remainingnum] !== i){
            return [i, int[remainingnum]];
        }
    }
};
 
console.log(twosum((nums = [2, 7, 11, 15]), (target=9)));