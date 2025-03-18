def replace(s):
    vowels = "aeiouAEIOU"
    for vowel in vowels:
        s = s.replace(vowels, '!')
    return s

print(replace("!Hi! Hi!"))