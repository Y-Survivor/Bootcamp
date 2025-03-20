from menu_item import MenuItem
from menu_manager import MenuManager

# Create a new item and save it to the database
item = MenuItem('Burger', 35)
item.save()

# Update the item
item.update('Veggie Burger', 37)

# Delete the item
item.delete()

# Retrieve an item by name
item2 = MenuManager.get_by_name('Beef Stew')
print(item2)

# Retrieve all items
items = MenuManager.all_items()
print(items)
