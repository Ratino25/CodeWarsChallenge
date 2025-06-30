function mounthSize(animal){
    // if(animal === "alligator"){
    //     return "small";
    // } else {
    //     return "wide";
    // }
    // cara 2
    return animal.toUpperCase() === "ALLIGATOR" ? "small" : "wide";
}

console.log(mounthSize("alligator"));
console.log(mounthSize("kucing"));