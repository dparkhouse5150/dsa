const linearSearch = (arr, n, x) => {
    let i

    for (i = 0; i < n; i++) {
        if (arr[i] === x) {
            return i // return the element
        }
    }

    return -1 // not found
}

let arr = [2, 3, 5, 10, 40],
    x = 10,
    n = arr.length

let result = linearSearch(arr, n, x)

(result = -1) ?
    document.write('element is not present in the array') :
    document.write('element is present at index ' + result)
