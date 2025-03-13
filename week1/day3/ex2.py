class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height

    def bark(self):
        print(f"{self.name} goes woof!")

    def jump(self):
        x = self.height * 2
        print(f"{self.name} jumps {x} cm high!")

# Create David's dog
davids_dog = Dog("Rex", 50)
print(f"David's dog: Name = {davids_dog.name}, Height = {davids_dog.height} cm")
davids_dog.bark()
davids_dog.jump()

# Create Sarah's dog
sarahs_dog = Dog("Teacup", 20)
print(f"Sarah's dog: Name = {sarahs_dog.name}, Height = {sarahs_dog.height} cm")
sarahs_dog.bark()
sarahs_dog.jump()

# Check which dog is bigger
if davids_dog.height > sarahs_dog.height:
    print(f"The bigger dog is {davids_dog.name}.")
elif sarahs_dog.height > davids_dog.height:
    print(f"The bigger dog is {sarahs_dog.name}.")
else:
    print("Both dogs are of the same height.")