function gameOfLife(board) {
  let neighbors = [0, 1, -1];

  let rows = board.length;
  let cols = board[0].length;

  let copyBoard = []
    // 创建复制数组 copyBoard
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (copyBoard[i]) {
        copyBoard[i][j] = board[i][j]
      } else {
        copyBoard[i] = [board[i][j]]
      }
    }
  }

  // 遍历面板每一个格子里的细胞
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {

      // 对于每一个细胞统计其八个相邻位置里的活细胞数量
      let liveNeighbors = 0;

      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {

          if (!(neighbors[i] == 0 && neighbors[j] == 0)) {
            let r = (row + neighbors[i]);
            let c = (col + neighbors[j]);

            // 查看相邻的细胞是否是活细胞
            if ((r < rows && r >= 0) && (c < cols && c >= 0)) {
              if ((copyBoard[r][c] == 1)) {
                liveNeighbors += 1;
              }

            }
          }
        }
      }

      console.log('liveNeighbors', liveNeighbors);
      
      // 规则 1 或规则 3      
      if ((copyBoard[row][col] == 1) && (liveNeighbors < 2 || liveNeighbors > 3)) {
        board[row][col] = 0;
      }
      // 规则 4
      if (copyBoard[row][col] == 0 && liveNeighbors == 3) {
        board[row][col] = 1;
      }
    }
  }

  return board
}

console.log(gameOfLife([
  [0,1,0],
  [0,0,1],
  [1,1,1],
  [0,0,0]
]))