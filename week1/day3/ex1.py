class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

# Instantiate three Cat objects
cat1 = Cat("Whiskers", 5)
cat2 = Cat("Mittens", 3)
cat3 = Cat("Snowball", 7)

# Function to find the oldest cat
def find_oldest_cat(*cats):
    oldest_cat = None
    for cat in cats:
        if oldest_cat is None or cat.age > oldest_cat.age:
            oldest_cat = cat
    return oldest_cat

# Find the oldest cat
oldest_cat = find_oldest_cat(cat1, cat2, cat3)

# Print the result
print(f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.")