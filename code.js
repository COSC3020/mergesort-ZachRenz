function mergesort(array = []) {
    //console.log(array); // Debugging script
    if (array.length <= 1){
        return array;
    }
    
    for (let i=0,j=1,size=2;size < 2*array.length;i=0, j=size, size = 2*size){ // Merges the pairs, and then the subarrays of size 4, etc.
        for (; j < array.length; i = i + size, j = j + size){
            merge(i, j, size, array);
        }
    }

    //console.log(array); //Debugging Script
    
    return array;
}

function merge(i, j, size, array = []){
    let subArrMerged = false;
    while(subArrMerged == false){
        if (i == j){
            subArrMerged = true;
            break;
        }
        else if (array[i]<=array[j]){
            i++;
        }
        else if (array[i]>array[j]){
            let k = j + 1;
            while(k < array.length && array[k] < array[i] && k <= (j-1+size)){
                k = k + 1;
            }
            k = k - 1;
            [array[i], array[k]] = [array[k], array[i]];
        }
    }
}

// console.log(mergesort([2, 1, 1, 1, 0]))