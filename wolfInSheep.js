// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/javascript

function warnTheSheep(queue){
    const wolfIndex = queue.indexOf("wolf");
    const positionFromEnd = queue.length - 1 - wolfIndex;

    if (positionFromEnd === 0){
        return "Pls go away and stop eating my sheep";
    } else {
        return `Oi! Sheep number ${positionFromEnd}! You are about to be eaten by a wolf!`;
    }

}

console.log(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep"])); // 0

console.log(warnTheSheep(["sheep", "sheep", "wolf", "sheep", "sheep", "sheep"])); // 2

console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "wolf", "sheep"])); // 4

console.log(warnTheSheep(["sheep", "sheep", "sheep", "wolf"])); // -1