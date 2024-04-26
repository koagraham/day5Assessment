// EXTRA CREDIT

// Return the strings common to both input arrays. Do not return duplicates.
// Ex.:
//   commonStrings(['a', 'b', 'c'], ['a', 'd', 'e']);
//   => ['a']
//   commonStrings(['zoo', 'space', 'zoo'], ['zoo', 'space', 'boat']);
//   => ['zoo', 'space']
function commonStrings(array1, array2) {
    result = []
    for (const item of array1) {
        if (array2.includes(item)) {
            result.push(item)
            const index = array2.indexOf(item)
            array2.splice(index, 1)
        }
    }
    return result
}

// Given three numbers, return a list of numbers from 1 to 100 that are
// divisible by at least one of a, b or c.
// Ex.:
//   divisibleByEither(50, 30, 29);
//   => [29, 30, 50, 58, 60, 87, 90, 100]
function divisibleByEither(a, b, c) {
    const result = []
    for (let i = 1; i < 101; i++) {
        if (i % a === 0 || i % b === 0 || i % c === 0) {
            result.push(i)
        }
    }
    return result
}

// Compress a string using the rules below and return the result. To compress a
// string, replace consecutive duplicate characters with a number and the
// character. For this compression, only count consecutive duplicate
// characters. If a character is not repeated, it should not be changed.
// Assume that all inputs are lowercased.
// Ex.:
//   compressString('aaa');
//   => '3a'
//   compressString('ssssbb');
//   => '4s2b'
//   compressString('ssssbbba');
//   => '4s3ba'
function compressString(string) {
    const result = []
    let actualResult = undefined
    let count = null
    let tick = 0
    let down = 0
    console.log(string)
    for (const letter of string) {
      count = 0
      while (letter === string[tick]) {
        count += 1
        tick += 1
        }
      if (count > 1) {
        result.push(count)
      }
      if (string[string.indexOf(letter, down) - 1] != letter) {
        result.push(letter)
      }
      down += 1
    }
    actualResult = result.join('')
  return actualResult
}

export { commonStrings, compressString, divisibleByEither };
