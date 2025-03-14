# Function to print the Tic Tac Toe board
def print_board(board):
    for row in board:
        print(" | ".join(row))
        print("-" * 5)

# Function to check if a player has won
def check_winner(board, player):
    # Check rows, columns, and diagonals
    for i in range(3):
        if all([cell == player for cell in board[i]]):  # Check rows
            return True
        if all([board[j][i] == player for j in range(3)]):  # Check columns
            return True
    if all([board[i][i] == player for i in range(3)]):  # Check main diagonal
        return True
    if all([board[i][2 - i] == player for i in range(3)]):  # Check anti-diagonal
        return True
    return False

# Function to check if the board is full (a tie)
def is_board_full(board):
    return all([cell != " " for row in board for cell in row])

# Function to get player input and update the board
def player_move(board, player):
    while True:
        try:
            move = input(f"Player {player}, enter your move (row col, e.g., 0 0): ")
            row, col = map(int, move.split())
            if 0 <= row < 3 and 0 <= col < 3:
                if board[row][col] == " ":
                    board[row][col] = player
                    break
                else:
                    print("That cell is already occupied. Try again.")
            else:
                print("Row and column must be between 0 and 2. Try again.")
        except ValueError:
            print("Invalid input. Please enter row and column as numbers between 0 and 2.")

# Main game loop
def tic_tac_toe():
    # Initialize the board
    board = [[" " for _ in range(3)] for _ in range(3)]
    current_player = "X"

    print("Welcome to Tic Tac Toe!")
    print("Enter your moves as 'row col', where row and col are numbers between 0 and 2.")
    print_board(board)

    while True:
        # Player makes a move
        player_move(board, current_player)
        print_board(board)

        # Check if the current player has won
        if check_winner(board, current_player):
            print(f"Player {current_player} wins!")
            break

        # Check if the board is full (tie)
        if is_board_full(board):
            print("It's a tie!")
            break

        # Switch players
        current_player = "O" if current_player == "X" else "X"

# Run the game
if __name__ == "__main__":
    tic_tac_toe()