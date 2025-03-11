# Initial list of sandwich orders
sandwich_orders = [
    "Tuna sandwich", 
    "Pastrami sandwich", 
    "Avocado sandwich", 
    "Pastrami sandwich", 
    "Egg sandwich", 
    "Chicken sandwich", 
    "Pastrami sandwich"
]

# Since the deli has run out of pastrami, we need to remove all occurrences of "Pastrami sandwich"
while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

# To keep track of the state of our stock, it's useful to Create an empty list for finished sandwiches
finished_sandwiches = []

# Prepare the orders: move sandwiches from sandwich_orders to finished_sandwiches
while sandwich_orders:
    current_sandwich = sandwich_orders.pop(0)  # Remove the first sandwich from the list
    finished_sandwiches.append(current_sandwich)  # Add it to the finished list
    print(f"I made your {current_sandwich.lower()}")

# Print the list of finished sandwiches
print("\nFinished sandwiches:", finished_sandwiches)