def ask_questions(data):
    """
    Asks the user the quiz questions and tracks correct/incorrect answers.
    :param data: A list of dictionaries containing questions and answers.
    :return: A tuple containing the number of correct answers, incorrect answers, and a list of wrong answers.
    """
    correct = 0
    incorrect = 0
    wrong_answers = []

    for item in data:
        question = item["question"]
        correct_answer = item["answer"]
        
        # Ask the user the question
        user_answer = input(f"{question}\nYour answer: ").strip()
        
        # Check if the answer is correct
        if user_answer.lower() == correct_answer.lower():
            correct += 1
        else:
            incorrect += 1
            wrong_answers.append({
                "question": question,
                "user_answer": user_answer,
                "correct_answer": correct_answer
            })
    
    return correct, incorrect, wrong_answers

def display_results(correct, incorrect, wrong_answers):
    """
    Displays the quiz results to the user, including incorrect answers and feedback.
    :param correct: Number of correct answers.
    :param incorrect: Number of incorrect answers.
    :param wrong_answers: List of dictionaries containing wrong answers and correct answers.
    """
    print("\nQuiz Results:")
    print(f"Correct answers: {correct}")
    print(f"Incorrect answers: {incorrect}")
    
    # Display incorrect answers if any
    if incorrect > 0:
        print("\nHere are the questions you answered incorrectly:")
        for wrong in wrong_answers:
            print(f"\nQuestion: {wrong['question']}")
            print(f"Your answer: {wrong['user_answer']}")
            print(f"Correct answer: {wrong['correct_answer']}")
    
    # Provide feedback based on performance
    if incorrect > 3:
        print("\nYou had more than 3 wrong answers. Would you like to play again?")
        play_again = input("Type 'yes' to play again or any other key to exit: ").strip().lower()
        if play_again == 'yes':
            main()
    else:
        print("\nGreat job! You did well on the quiz.")

def main():
    """
    Main function to run the Star Wars quiz.
    """
    # Quiz data
    data = [
        {"question": "What is Baby Yoda's real name?", "answer": "Grogu"},
        {"question": "Where did Obi-Wan take Luke after his birth?", "answer": "Tatooine"},
        {"question": "What year did the first Star Wars movie come out?", "answer": "1977"},
        {"question": "Who built C-3PO?", "answer": "Anakin Skywalker"},
        {"question": "Anakin Skywalker grew up to be who?", "answer": "Darth Vader"},
        {"question": "What species is Chewbacca?", "answer": "Wookiee"}
    ]
    
    # Ask questions and get results
    correct, incorrect, wrong_answers = ask_questions(data)
    
    # Display results
    display_results(correct, incorrect, wrong_answers)

# Run the quiz
main()