import psycopg2

class MenuItem:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def save(self):
        """Save the item to the database."""
        connection = None  # Initialize connection to None
        try:
            connection = psycopg2.connect(
                dbname="restaurant_menu",
                user="postgres",  # Replace with your PostgreSQL username
                password="Sunderland85*",  # Replace with your PostgreSQL password
                host="localhost"
            )
            cursor = connection.cursor()
            query = "INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s);"
            print(f"Inserting item: name={self.name}, price={self.price}")  # Debugging
            cursor.execute(query, (self.name, self.price))
            connection.commit()
            print(f"Item '{self.name}' saved successfully.")
        except Exception as e:
            print(f"Error saving item: {e}")
        finally:
            if connection:
                cursor.close()
                connection.close()

    def delete(self):
        """Delete the item from the database."""
        connection = None  # Initialize connection to None
        try:
            connection = psycopg2.connect(
                dbname="restaurant_menu",
                user="postgres",  # Replace with your PostgreSQL username
                password="Sunderland85*",  # Replace with your PostgreSQL password
                host="localhost",
                client_encoding="utf8"  # Specify the encoding
            )
            cursor = connection.cursor()
            query = "DELETE FROM Menu_Items WHERE item_name = %s;"
            cursor.execute(query, (self.name,))
            connection.commit()
            print(f"Item '{self.name}' deleted successfully.")
        except Exception as e:
            print(f"Error deleting item: {e}")
        finally:
            if connection:
                cursor.close()
                connection.close()

    def update(self, new_name, new_price):
        """Update the item's name and price in the database."""
        connection = None  # Initialize connection to None
        try:
            connection = psycopg2.connect(
                dbname="restaurant_menu",
                user="postgres",  # Replace with your PostgreSQL username
                password="Sunderland85*",  # Replace with your PostgreSQL password
                host="localhost",
                client_encoding="utf8"  # Specify the encoding
            )
            cursor = connection.cursor()
            query = "UPDATE Menu_Items SET item_name = %s, item_price = %s WHERE item_name = %s;"
            cursor.execute(query, (new_name, new_price, self.name))
            connection.commit()
            print(f"Item updated to '{new_name}' with price {new_price}.")
        except Exception as e:
            print(f"Error updating item: {e}")
        finally:
            if connection:
                cursor.close()
                connection.close()