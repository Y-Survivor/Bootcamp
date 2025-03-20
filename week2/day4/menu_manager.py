import psycopg2

class MenuManager:
    @classmethod
    def get_by_name(cls, name):
        """Retrieve an item by its name."""
        try:
            connection = psycopg2.connect(
                dbname="restaurant_menu",
                user="postgres",  # Replace with your PostgreSQL username
                password="Sunderland85*",  # Replace with your PostgreSQL password
                host="localhost"
            )
            cursor = connection.cursor()
            query = "SELECT * FROM Menu_Items WHERE item_name = %s;"
            cursor.execute(query, (name,))
            result = cursor.fetchone()
            if result:
                return result
            else:
                return None
        except Exception as e:
            print(f"Error retrieving item: {e}")
        finally:
            if connection:
                cursor.close()
                connection.close()

    @classmethod
    def all_items(cls):
        """Retrieve all items from the database."""
        try:
            connection = psycopg2.connect(
                dbname="restaurant_menu",
                user="postgres",  # Replace with your PostgreSQL username
                password="Sunderland85*",  # Replace with your PostgreSQL password
                host="localhost"
            )
            cursor = connection.cursor()
            query = "SELECT * FROM Menu_Items;"
            cursor.execute(query)
            results = cursor.fetchall()
            return results
        except Exception as e:
            print(f"Error retrieving items: {e}")
        finally:
            if connection:
                cursor.close()
                connection.close()
                
