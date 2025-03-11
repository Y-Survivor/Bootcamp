family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

total_cost = 0

for name, age in family.items():
    if age < 3:
        ticket_price = 0
    elif 3 <= age <= 12:
        ticket_price = 10
    else:
        ticket_price = 15
    
    # Print individual ticket price
    print(f"{name} has to pay: ${ticket_price}")
    
    # Add to total cost
    total_cost += ticket_price

# Print total cost
print(f"Total cost for the family: ${total_cost}")