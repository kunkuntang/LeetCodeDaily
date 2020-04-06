/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  let word1Len = word1.length;
  let word2Len = word2.length;

  if (word1Len * word2Len === 0) {
    return word1Len + word2Len
  }

  let DP = new Array()
  for (let i = 0; i < word1Len + 1; i++) {
    DP[i] = new Array()
    for (let j = 0; j < word2Len + 1; j++) {
      if (i === 0) {
        DP[i][j] = j
      }
      else if (j === 0) {
        DP[i][j] = i
      } else{
        DP[i][j] = null
      }
    }
  }
  
  for (let i = 1; i < word1Len + 1; i++) {
    for (let j = 1; j < word2Len + 1; j++) {
      let left = DP[i][j - 1] + 1;
      let down = DP[i - 1][j] + 1;
      let left_down = DP[i - 1][j -1]
      if (word1.charAt(i-1) !== word2.charAt(j-1)) {
        left_down +=  1
      }
      DP[i][j] = Math.min(left, down, left_down)
    }
  }
  return DP[word1Len][word2Len]
};

console.log(minDistance('sssss', 'ssseeee'))