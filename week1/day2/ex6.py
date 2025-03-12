def make_shirt(size="large", text="I love Python"):
    print(f"The size of the shirt is {size} and the text is '{text}'.")

# Call the function to make a large shirt with the default message
make_shirt()

# Call the function to make a medium shirt with the default message
make_shirt(size="medium")

# Call the function to make a shirt of any size with a different message
make_shirt(size="small", text="Python is awesome!")

# Bonus: Call the function using keyword arguments
make_shirt(text="Code in Python", size="extra large")