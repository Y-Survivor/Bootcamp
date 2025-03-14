# Define the Dog class
class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    # Method for the dog to bark
    def bark(self):
        return f"{self.name} is barking"

    # Method to calculate the dog's running speed
    def run_speed(self):
        return self.weight / self.age * 10

    # Method to determine the winner of a fight between two dogs
    def fight(self, other_dog):
        self_speed_weight = self.run_speed() * self.weight
        other_speed_weight = other_dog.run_speed() * other_dog.weight

        if self_speed_weight > other_speed_weight:
            return f"{self.name} won the fight"
        else:
            return f"{other_dog.name} won the fight"

# Create 3 instances of the Dog class
dog1 = Dog("Max", 5, 30)
dog2 = Dog("Buddy", 3, 40)
dog3 = Dog("Rocky", 4, 35)

# Test the methods
print(dog1.bark())  # Output: Max is barking
print(dog2.bark())  # Output: Buddy is barking
print(dog3.bark())  # Output: Rocky is barking

print(f"{dog1.name}'s running speed: {dog1.run_speed()}")  # Output: Max's running speed: 60.0
print(f"{dog2.name}'s running speed: {dog2.run_speed()}")  # Output: Buddy's running speed: 133.333...
print(f"{dog3.name}'s running speed: {dog3.run_speed()}")  # Output: Rocky's running speed: 87.5

# Test the fight method
print(dog1.fight(dog2))  # Output: Buddy won the fight
print(dog2.fight(dog3))  # Output: Buddy won the fight
print(dog3.fight(dog1))  # Output: Max won the fight