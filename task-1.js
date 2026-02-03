

// js-problems-part2-practice-tasks
// Task -1:
// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];


 const heights2 = [167, 190, 120, 165, 137];

 function findLowest(arr) {
    let lowest = arr[0];

    for(const num of arr) {
        if(num < lowest) {
            lowest = num
        }
    }
    return lowest;
 }

 console.log(findLowest(heights2));