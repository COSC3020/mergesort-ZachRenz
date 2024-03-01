function mergesort(array = []) {
    //console.log(array); // Debugging script
    if (array.length <= 1){
        return array;
    }
    size = 2; 
    sorted = false;

    for (iters = 1; iters <= Math.floor(array.length/size); iters++){ // Sorts all the pairs 
        i = (iters-1)*size + 0;
        j = i + 1;
        if (array[i] > array[j]){
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    //console.log(array); // Debugging script

    while (size <= Math.floor(array.length/2) && array.length != 3){ // Merges the pairs, and then the subarrays of size 4, etc.
        for (iters = 1; iters <= Math.floor(array.length/(2*size)); iters++){
            subArrMerged = false;
            i = (iters - 1)*(2*size) + 0;
            j = i + size;
            while(subArrMerged == false){
                if (i == j){
                    subArrMerged = true;
                    break;
                }
                else if (array[i]<=array[j]){
                    i++;
                }
                else if (array[i]>array[j]){
                    k = j + 1;
                    while(array[k] <= array[i] && k <= (j-1+size)){
                        k = k + 1;
                    }
                    k = k - 1;
                    if (array[k] == array[i]) k = k-1;
                    [array[i], array[k]] = [array[k], array[i]]
                    i = (iters - 1)*(2*size) + 0;
                }
            }
        }
        size = size + size;
    }

    //console.log(array); //Debugging Script

    if (size < array.length){ // Merges the residual, if any
        i = 0;
        j = i + size;
        subArrMerged = false;
        while(subArrMerged == false){

            if (i == j){
                subArrMerged = true;
                break;
            }
            else if (array[i]<=array[j]){
                i++;
            }
            else if (array[i]>array[j]){
                k = j + 1;
                while(array[k] <= array[i] && k <= array.length-1){
                    k = k + 1;
                }
                k = k -1;
                if (array[k] == array[i]) k = k-1;
                [array[i], array[k]] = [array[k], array[i]]
                i = 0;
            }
        }
    }
    
    return array;
}

//console.log(mergesort([2, 2, 2, 1]));
//console.log(mergesort([2,2,0,1]));
//console.log(mergesort([2,1,0]));
//console.log(mergesort([7, 37, 45, 2, 7, 37]));
