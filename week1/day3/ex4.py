class Zoo:
    def __init__(self, zoo_name):
        self.animals = []
        self.name = zoo_name

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
            print(f"{new_animal} has been added to the zoo.")
        else:
            print(f"{new_animal} is already in the zoo.")

    def get_animals(self):
        print("Animals in the zoo:")
        for animal in self.animals:
            print(animal)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
            print(f"{animal_sold} has been sold.")
        else:
            print(f"{animal_sold} is not in the zoo.")

    def sort_animals(self):
        sorted_animals = sorted(self.animals)
        grouped_animals = {}
        for animal in sorted_animals:
            first_letter = animal[0].upper()
            if first_letter not in grouped_animals:
                grouped_animals[first_letter] = []
            grouped_animals[first_letter].append(animal)
        return grouped_animals

    def get_groups(self):
        grouped_animals = self.sort_animals()
        for key, animals in grouped_animals.items():
            print(f"{key}: {animals}")

# Create an object of the Zoo class
new_york_zoo = Zoo("New York Zoo")

# Add animals to the zoo
new_york_zoo.add_animal("Ape")
new_york_zoo.add_animal("Baboon")
new_york_zoo.add_animal("Bear")
new_york_zoo.add_animal("Cat")
new_york_zoo.add_animal("Cougar")
new_york_zoo.add_animal("Eel")
new_york_zoo.add_animal("Emu")

# Get all animals in the zoo
new_york_zoo.get_animals()

# Sell an animal
new_york_zoo.sell_animal("Bear")

# Get all animals after selling
new_york_zoo.get_animals()

# Sort animals and group them
grouped_animals = new_york_zoo.sort_animals()
print("Grouped Animals:")
print(grouped_animals)

# Get groups of animals
print("Animals in each group:")
new_york_zoo.get_groups()