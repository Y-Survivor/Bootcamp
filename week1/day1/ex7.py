basket = ["Banana", "Apples", "Oranges", "Blueberries"]

basket.remove("Banana")
#To Check that "Banana has been removed" type basket
basket.remove("Blueberries")
#To Check that "Blueberries" has been removed type basket
basket.append("Kiwi")
#To Check that "Kiwi" has been removed type basket
basket.insert(0, "Apples")
#However we already have 'Apples' in the baginning of the list
# the following code will Add another "Apples" to the beginning of the list 
apple_count = basket.count("Apples")

# The following will Empty the basket
basket.clear()

# To Print the output of what remains in the basket, use the following code:
print("Final basket:", basket)