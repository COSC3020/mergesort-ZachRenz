[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/1uurLsu5)
# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

## Runtime Answer

<!-- In the first look at my code, I have constant runtimes until the first for loop that orders all the subarray pairs, and is always $\frac{n}{2}$ . Then, to merge all my subarrays from `n = 2` to `n` greater than half the size of the list, we have a while loop nested in a while loop nested in a for loop nested in a while loop which I will analyize later in this answer. After that I have another while loop nested in a while loop (that is the same code as the two while loops nested in the for loop above) that runs if we need to group any residual.  -->

To test this I use an array with a size that requires us to merge a residual, with numbers sorted in reverse. So, for each subarray we need to switch the numbers exactly, i.e. for a list like `[*, *, *, *, *]` we need to switch the subarrays `[[*,*][*,*], *]` exactly. For the function `merge()`:
``` javascript
function merge(i, j, size, array = []){ // (n/2) * (n/2) => n^2
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
            while(k < array.length && array[k] < array[i] && k <= (j-1+size)){ // 2((n-1)/2 + (n-2)/2 ...) => n
                k = k + 1;
            }
            k = k - 1;
            [array[i], array[k]] = [array[k], array[i]];
        }
    }
}
```
The inside while loop runs `k = k + 1` to insert the first number at the end of the subarray ($\frac{n-1}{2}$ and we divide by two because we're looking at two subarrays with the same length) and then again at the 1st index of the subarray ($\frac{n-2}{2}$), and we have to repeat this process for the inside while loop to iterate the next item thorugh the same way we iterated the last. So our while loop has a complexity of $\frac{n-1}{2} + \frac{n-1}{2} + \frac{n-2}{2} + \frac{n-2}{n} \Rightarrow n$. As we talked about the complexity of the innermost nested loop, we explained how the next while loop works in the worst case. It will iterate a value $\frac{n}{2}$ times for every `n` in half of our subarray, or $\frac{n}{2} * \frac{n}{2} \Rightarrow n^2$. That runs in two for loops, and if we looked at exactly where these loops use `merge()` it looks kind of like a binary tree.
```mardown
            `[*,*]` `[*, *]`   `[*]`
                    \            |
                `[*, *, *, *]` `[*]`
                        \       /
                    `[*, *, *, *, *]`
```
And we'll iterate over every node of this tree, or $log(n)$ So our overall complexity is $\Theta(n^3log(n))$