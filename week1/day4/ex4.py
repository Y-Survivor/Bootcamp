class Family:
    def __init__(self, last_name, members):
        self.members = members
        self.last_name = last_name

    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Congratulations to the {self.last_name} family on the birth of {kwargs['name']}!")

    def is_18(self, name):
        for member in self.members:
            if member['name'] == name:
                return member['age'] >= 18
        return False

    def family_presentation(self):
        print(f"The {self.last_name} family members are:")
        for member in self.members:
            print(f"Name: {member['name']}, Age: {member['age']}, Gender: {member['gender']}, Is Child: {member['is_child']}")

# Create an instance of the Family class
family = Family("Smith", [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
])

# Call the methods
family.born(name='Emily', age=0, gender='Female', is_child=True)
print(f"Is Michael over 18? {family.is_18('Michael')}")
print(f"Is Emily over 18? {family.is_18('Emily')}")
family.family_presentation()