export function mergesort(unsorted_array) {
    // If we have zero elements or one element, then we're already sorted, so just return
    if (unsorted_array.length <= 1) {
        return unsorted_array;
    }

    // Otherwise, split the array into two halves
    // let middle_index = Math.floor(unsorted_array.length / 2.0);
    // let left = unsorted_array[0..middle_index];
    // let right = unsorted_array[middle_index+1..unsorted_array.length];

    // Sort the two halves recursively
    // let sorted_left = mergesort(left);
    // let sorted_right = mergesort(right);

    // Merge them back together
    // let greater_length = sorted_left.length > sorted_right.length ? sorted_left.length : sorted_right.length;
    // for (let i = 0; i < greater_length; i++) {
    // }
}

export function merge(left, right) {
    let outputArray = [];
    let leftEle = left.pop();
    let rightEle = right.pop();

    // While both the right and left arrays have elements left
    // in them.
    while (leftEle != null && rightEle != null) {
        if (leftEle < rightEle) {
            outputArray.push(leftEle);
            leftEle = left.pop();
        } else {
            outputArray.push(rightEle);
            rightEle = right.pop();
        }
    }

    console.log(outputArray);

    // One or more of the arrays are empty
    if (leftEle == null) {
        if (rightEle != null) {
            outputArray.push(rightEle);

            for (let i = 0; i < right.length; i++) {
                outputArray.push(right[i]);
            }
        }
    }

    console.log(outputArray);

    if (rightEle == null) {
        if (leftEle != null) {
            outputArray.push(leftEle);
            for (let i = 0; i < left.length; i++) {
                outputArray.push(left[i]);
            }
        }
    }

    return outputArray;
}