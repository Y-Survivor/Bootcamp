def create_index_dictionary(word):
    """
    Creates a dictionary where each key is a letter from the input word,
    and the value is a list of indexes where that letter appears.

    Args:
        word (str): The input word to process.

    Returns:
        dict: A dictionary with letters as keys and lists of indexes as values.
    """
    index_dict = {}  # Initialize an empty dictionary to store the results

    # Iterate over the word using enumerate to get both the index and the letter
    for index, letter in enumerate(word):
        # If the letter is already a key in the dictionary, append the index to its list
        if letter in index_dict:
            index_dict[letter].append(index)
        # If the letter is not a key, create a new key with the letter and a list containing the index
        else:
            index_dict[letter] = [index]

    return index_dict


def main():
    """
    Main function to interact with the user and demonstrate the functionality.
    """
    # Ask the user for a word
    user_word = input("Please enter a word: ")

    # Create the dictionary using the create_index_dictionary function
    result_dict = create_index_dictionary(user_word)

    # Print the resulting dictionary
    print("Resulting dictionary:")
    print(result_dict)


# Run the program
if __name__ == "__main__":
    main()