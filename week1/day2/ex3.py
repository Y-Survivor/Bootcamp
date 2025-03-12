# 1. Create the brand dictionary
brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}

# 2. Change the number of stores to 2
brand["number_stores"] = 2

# 3. Print a sentence explaining who Zara's clients are
print(f"Zara's clients are {', '.join(brand['type_of_clothes'])}.")

# 4. Add a key called country_creation with a value of Spain
brand["country_creation"] = "Spain"

# 5. Check if the key international_competitors is in the dictionary and add Desigual
if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

# 6. Delete the information about the date of creation
del brand["creation_date"]

# 7. Print the last international competitor
print(f"The last international competitor is {brand['international_competitors'][-1]}.")

# 8. Print the major clothes colors in the US
print(f"The major clothes colors in the US are {', '.join(brand['major_color']['US'])}.")

# 9. Print the amount of key-value pairs
print(f"The dictionary has {len(brand)} key-value pairs.")

# 10. Print the keys of the dictionary
print(f"The keys of the dictionary are {', '.join(brand.keys())}.")

# 11. Create another dictionary called more_on_zara
more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}

# 12. Add the information from more_on_zara to the brand dictionary
brand.update(more_on_zara)

# 13. Print the value of the key number_stores
print(f"The number of stores now is {brand['number_stores']}.")