class Farm:
    def __init__(self, name):
        self.name = name
        self.animals = {}

    def add_animal(self, animal, count=1):
        if animal in self.animals:
            self.animals[animal] += count
        else:
            self.animals[animal] = count

    def get_info(self):
        info = f"{self.name}'s farm\n"
        for animal, count in self.animals.items():
            info += f"{animal} : {count}\n"
        info += "E-I-E-I-0"
        return info

    def get_animal_types(self):
        return sorted(self.animals.keys())

    def get_short_info(self):
        animal_types = self.get_animal_types()
        animal_list = []
        for animal in animal_types:
            if self.animals[animal] > 1:
                animal_list.append(f"{animal}s")
            else:
                animal_list.append(animal)
        animal_str = ", ".join(animal_list[:-1]) + f" and {animal_list[-1]}"
        return f"{self.name}'s farm has {animal_str}."

# Testing the Farm class
macdonald = Farm("McDonald")
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())

# Testing the new methods
print(macdonald.get_animal_types())
print(macdonald.get_short_info())