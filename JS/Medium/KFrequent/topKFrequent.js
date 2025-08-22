/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let map = {};
  for (let num of nums) {
    map[num] = (map[num] || 0) + 1;
  }
console.log(map);

  //Add map to the Min priority Queue and maintain K size
    let minHeap = new MinPriorityQueue(x => x.freq);
    for (let key in map) {

        minHeap.enqueue({ val: key, freq: map[key] });
        if (minHeap.size() > k) {
            minHeap.dequeue();
        }
    }
    return minHeap.toArray().map(x => Number(x.val));
};

arr = [1, 2, 4, 5, 1, 4];
console.log(topKFrequent(arr,2));
