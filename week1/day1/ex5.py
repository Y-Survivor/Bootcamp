my_fav_numbers = {7, 14, 21, 28}
my_fav_numbers.add(35)
my_fav_numbers.add(80)
my_fav_numbers.pop()

friend_fav_numbers = {3, 6, 9, 12}

our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)


print("My favorite numbers:", my_fav_numbers)
print("Friend's favorite numbers:", friend_fav_numbers)
print("Our favorite numbers:", our_fav_numbers)