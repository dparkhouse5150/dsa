const swap = () => {
    let temp = a
    a = b
    b = temp
}

// or
/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns swapped values
 */
const swap = (a, b) => [a, b] = [b, a]
