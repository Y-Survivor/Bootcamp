# Note: The answer of the first question starts in line 37 
# as there's some code necessary to be done before to make the program work properly.

# Define the base Pets class
class Pets():
    def __init__(self, animals):
        self.animals = animals

    # Method to make all pets walk
    def walk(self):
        for animal in self.animals:
            print(animal.walk())

# Define the base Cat class
class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    # Method for a cat to walk
    def walk(self):
        return f'{self.name} is just walking around'

# Define the Bengal class that inherits from Cat
class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

# Define the Chartreux class that inherits from Cat
class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

# Define the Siamese class that inherits from Cat
class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'

# 2. Creation of a list called all_cats with instances of Bengal, Chartreux, and Siamese
all_cats = [Bengal('BengalCat', 3), Chartreux('ChartreuxCat', 2), Siamese('SiameseCat', 4)]

# 3. Creation of an instance of Pets called sara_pets with the all_cats list
sara_pets = Pets(all_cats)

# 4. Take all the cats for a walk by calling the walk method
sara_pets.walk()