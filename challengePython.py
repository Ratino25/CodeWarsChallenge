def merge_arrays(arr1, arr2):
    merge = arr1 + arr2
    
    #hapus duplicate menggunakan set
    unique = set(merge)
    
    result = sorted(unique)
    return result

print(merge_arrays([1, 2, 3, 4, 6], [5, 7, 8, 9, 10]))
