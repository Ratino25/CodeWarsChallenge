def people_with_age_drink(age):
    # if age < 14:
    #     return "drink toddy"
    # elif age < 18:
    #     return "drink coke"
    # elif age < 21:
    #     return "drink beer"
    # else:
    #     return "drink whiskey"
    
    return "drink " + ("toddy" if age < 14 else "coke" if age < 18 else "beer" if age < 21 else "whisky")
    
print(people_with_age_drink(15)) # "drink coke"
print(people_with_age_drink(19))