def generate_multiples(number, length):
    multiples = []
    for i in range(1, length + 1):
        multiples.append(number * i)
    return multiples

# Get user input
number = int(input("Enter a number: "))
length = int(input("Enter the length: "))

# Generate and print the list of multiples
result = generate_multiples(number, length)
print(result)