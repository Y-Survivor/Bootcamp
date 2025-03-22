import requests
import psycopg2
from random import sample

# Database connection parameters
conn_params = {
    'dbname': 'countries_db',
    'user': 'postgres',  # Replace with your PostgreSQL username
    'password': 'sunderland85',  # Replace with your PostgreSQL password
    'host': 'localhost',
    'port': 5432
}

# Function to fetch data from the REST Countries API
def fetch_countries():
    url = "https://restcountries.com/v3.1/all"
    response = requests.get(url)
    response.encoding = 'utf-8'  # Force UTF-8 encoding
    if response.status_code == 200:
        try:
            return response.json()
        except UnicodeDecodeError:
            print("Error decoding response. Attempting to replace invalid characters.")
            return response.content.decode('utf-8', errors='replace')
    else:
        print("Failed to fetch data")
        return []

# Function to insert data into PostgreSQL
def insert_countries(countries):
    conn = None
    try:
        # Connect to the PostgreSQL database
        conn = psycopg2.connect(**conn_params)
        cur = conn.cursor()

        # Insert each country into the database
        for country in countries:
            name = country.get('name', {}).get('common', 'Unknown')
            capital = country.get('capital', ['Unknown'])[0]
            flag = country.get('flags', {}).get('png', '')
            subregion = country.get('subregion', 'Unknown')
            population = country.get('population', 0)

            cur.execute("""
                INSERT INTO countries (name, capital, flag, subregion, population)
                VALUES (%s, %s, %s, %s, %s)
            """, (name, capital, flag, subregion, population))

        # Commit the transaction
        conn.commit()
        cur.close()
    except (Exception, psycopg2.DatabaseError) as error:
        print(error)
    finally:
        if conn is not None:
            conn.close()

# Main function to fetch and insert data
def main():
    countries = fetch_countries()
    if countries:
        # Select 10 random countries
        random_countries = sample(countries, 10)
        insert_countries(random_countries)
        print("10 random countries have been inserted into the database.")
    else:
        print("No countries fetched.")

if __name__ == "__main__":
    main()