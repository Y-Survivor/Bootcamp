import random

class RockPaperScissors:
    def get_computer_choice(self):
        choices = ["Rock", "Paper", "Scissors"]
        return random.choice(choices)

    def play_round(self, player_choice, computer_choice):
        if player_choice == computer_choice:
            return "It's a tie!"
        elif (player_choice == "Rock" and computer_choice == "Scissors") or \
             (player_choice == "Paper" and computer_choice == "Rock") or \
             (player_choice == "Scissors" and computer_choice == "Paper"):
            return "You win!"
        else:
            return "Computer wins!"

def main():
    choices = RockPaperScissors()
    print("Welcome dear challenger! Are U ready for a new round?")

    rounds = 0
    draws = 0
    user_wins = 0
    computer_wins = 0

    while rounds < 5:
        print("Please enter your choice (Rock, Paper, or Scissors):")
        player_choice = input().capitalize()
        computer_choice = choices.get_computer_choice()
        print(f"{player_choice} VS {computer_choice}")

        result = choices.play_round(player_choice, computer_choice)
        print(result)

        if result == "It's a tie!":
            draws += 1
        elif result == "You win!":
            user_wins += 1
        elif result == "Computer wins!":
            computer_wins += 1

        rounds += 1

    if computer_wins < user_wins:
        print("Congratulations you smashed the computer")
    elif user_wins < computer_wins:
        print("You need to try harder darling:P ...Ok nice try, maybe next time you will win!")
    else:
        print("You don't want this result and the computer neither...! Let's start over a new game ;)")

    print(f"Draws: {draws}")
    print(f"Your score: {user_wins}")
    print(f"Computer score: {computer_wins}")

if __name__ == "__main__":
    main()