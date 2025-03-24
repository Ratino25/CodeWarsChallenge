def warn_the_sheep(queue):
    wolf_index = queue.index("wolf")
    position_from_end = len(queue) - 1 - wolf_index
    if position_from_end == 0:
        return "Pls go away and stop eating my sheep"
    else:
        return f"Oi! Sheep number {position_from_end}! You are about to be eaten by a wolf!"


print(warn_the_sheep(["sheep", "sheep", "sheep", "wolf", "sheep", "sheep"])) # 3

print(warn_the_sheep(["sheep", "sheep", "wolf"])) # 2

print(warn_the_sheep(["wolf"])) # 0
