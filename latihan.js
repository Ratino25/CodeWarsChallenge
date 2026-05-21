function cubeChecker(volume, side){
    // if(volume <= 0 || side <= 0){
    //     return false;
    // }

    // let hasil = side * side * side;
    // // return hasil === volume;

    return Math.pow(side, 3) === volume && side > 0;
}


console.info(cubeChecker(8, 3));
console.info(cubeChecker(1, 1));
console.info(cubeChecker(0, 0));
console.info(cubeChecker(8, 2));