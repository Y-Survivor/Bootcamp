import random

def compare_numbers(user_number):
    if user_number < 1 or user_number > 100:
        print("Please enter a number between 1 and 100.")
        return
    
    random_number = random.randint(1, 100)
    
    if user_number == random_number:
        print("Success! The numbers are the same.")
    else:
        print(f"Fail. Your number was {user_number} and the random number was {random_number}.")

# Example usage
compare_numbers(42)