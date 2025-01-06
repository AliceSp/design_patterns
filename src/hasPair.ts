export function hasPairWithSumBrut (array: number[], sum: number) {
  console.log(array.length)
    for(let i=0; i<array.length-1; i++) {
      for(let j=1; j<array.length; j++) {
        if(array[i] + array[j] === sum) {
          return true;
        }
      }
    }
    return false;
  };

export function hasPairWithSum (array: number[], sum: number) {
  let low = 0;
  let high = array.length - 1;

    while (low < high) {
        const range = array[low] + array[high];
        if (range === sum) {
            return true;
        } else if (range < sum) {
            // increase sum
            low++;
        } else {
            // decrease sum
            high--;
        }
    }
    return false;
  };