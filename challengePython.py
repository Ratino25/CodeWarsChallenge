def add_length(str_):
    # words = str_.split(" ")
    # result = []
    # for word in words:
    #     result.append(word + " " + str(len(word)))
        
    # return result
    
    return [f"{word} {len(word)}" for word in str_.split(" ") ]

print(add_length("Hello World")) # ["Hello World 11", "World 5"]