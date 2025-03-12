def remove_consecutive_duplicates(s):
    if not s:
        return s  # Return empty string if input is empty

    result = []
    prev_char = s[0]
    result.append(prev_char)

    for char in s[1:]:
        if char != prev_char:
            result.append(char)
            prev_char = char
    return ''.join(result)

# Get user input
user_input = input("Enter a string: ")

# Process and print the result
output = remove_consecutive_duplicates(user_input)
print(output)