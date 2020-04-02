class Solution {

  public void gameOfLife(int[][] board) {
    int rows = board.length;
    int cols = board[0].length;
    
    for (int row = 0; row < rows; row++) {
      for (int col = 0; col < cols; col++) {
        int cellValue = board[row][col];
        int aliveCellCount = 0;

        for (int i = -1; i < 2; i++) {
          for (int j = -1; j < 2; j++) {
            int r = row + i;
            int c = col + j;
            if ((r >= 0 && r < rows) && (c >= 0 && c < cols) && !(i == 0 && j == 0)) {
              if (Math.abs(board[r][c]) == 1) {
                aliveCellCount += 1;
              }
            }
          }
        }

        // 如果活细胞周围八个位置的活细胞数少于两个，或超过三个活细胞，则该位置活细胞死亡；
        if (cellValue == 1 && (aliveCellCount < 2 || aliveCellCount > 3)) {
          board[row][col] = -1;
        }

        // 如果死细胞周围正好有三个活细胞，则该位置死细胞复活；
        if (cellValue == 0 && aliveCellCount == 3) {
          board[row][col] = 2;
        }
      }
    }

    for (int row = 0; row < rows; row++) {
      for (int col = 0; col < cols; col++) {
        if (board[row][col] > 0) {
          board[row][col] = 1;
        } else {
          board[row][col] = 0;
        }
      }
    }

  }
  
  public static void main(String[] args) {
    int[][] a = new int[][]{{0,1,0}, {0,0,1},{1,1,1},{0,0,0}};
    Solution s = new Solution();
    s.gameOfLife(a);
  }
  
}