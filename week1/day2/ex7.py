import random

def get_random_temp(season):
    """
    Generates a random temperature based on the given season.
    :param season: A string representing the season ('summer', 'autumn', 'winter', 'spring').
    :return: A random integer representing the temperature in Celsius.
    """
    if season == 'winter':
        return random.randint(-10, 16)
    elif season == 'spring':
        return random.randint(0, 23)
    elif season == 'autumn' or season == 'fall':
        return random.randint(10, 25)
    elif season == 'summer':
        return random.randint(20, 40)
    else:
        # Default range if season is not recognized
        return random.randint(-10, 40)

def main():
    """
    Main function to get a random temperature based on the season and provide advice.
    """
    # Ask the user for the season
    season = input("Enter the season ('summer', 'autumn', 'winter', 'spring'): ").lower()
    
    # Validate the season input
    valid_seasons = ['summer', 'autumn', 'winter', 'spring', 'fall']
    if season not in valid_seasons:
        print("Invalid season entered. Using a default temperature range.")
        season = None
    
    # Get the random temperature
    temperature = get_random_temp(season)
    
    # Display the temperature
    print(f"The temperature right now is {temperature} degrees Celsius.")
    
    # Provide advice based on the temperature
    if temperature < 0:
        print("Brrr, that’s freezing! Wear some extra layers today.")
    elif 0 <= temperature < 16:
        print("Quite chilly! Don’t forget your coat.")
    elif 16 <= temperature < 23:
        print("It's mild outside. A light jacket should do.")
    elif 24 <= temperature < 32:
        print("It's warm outside. Perfect for a t-shirt and shorts.")
    elif 32 <= temperature <= 40:
        print("It's hot outside! Stay hydrated and avoid the sun during peak hours.")

# Run the main function
main()