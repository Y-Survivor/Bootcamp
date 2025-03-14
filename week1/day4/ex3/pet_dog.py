# pet_dog.py
from dog import Dog
import random

class PetDog(Dog):
    def __init__(self, name, age, weight, trained=False):
        super().__init__(name, age, weight)
        self.trained = trained

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        dog_names = ', '.join([dog.name for dog in args])
        print(f"{dog_names} all play together")

    def do_a_trick(self):
        if self.trained:
            tricks = [
                f"{self.name} does a barrel roll",
                f"{self.name} stands on his back legs",
                f"{self.name} shakes your hand",
                f"{self.name} plays dead"
            ]
            print(random.choice(tricks))
        else:
            print(f"{self.name} is not trained yet")

# Example usage
if __name__ == "__main__":
    dog1 = PetDog("Max", 5, 30)
    dog2 = PetDog("Buddy", 3, 40)
    dog3 = PetDog("Rocky", 4, 35)

    dog1.train()
    dog1.play(dog2, dog3)
    dog1.do_a_trick()
    dog2.do_a_trick()