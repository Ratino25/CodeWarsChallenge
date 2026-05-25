def sum_mul(n, m):
    if n <= 0 or m <= 0:
        return "INVALID"
    
    total = 0
    
    for i in range(n, m, n):
        total += i

    return total
        

print(sum_mul(2, 9))  # Output: 20 (2 + 4 + 6 + 8)
print(sum_mul(3, 13)) # Output: 30 (3 + 6 + 9 + 12)